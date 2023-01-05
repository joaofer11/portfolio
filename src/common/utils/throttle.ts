export const throttle = <Params>(
	fn: (...params: Params[]) => void,
	delay = 1000
) => {
	let shouldAwait = false;
	let pendingParams: Params[] | null = null;

	const timeoutFn = () => {
		const hasPendingParams = pendingParams !== null;
		if (!hasPendingParams) return (shouldAwait = false);

		fn(...(pendingParams as Params[]));
		pendingParams = null;
		setTimeout(timeoutFn, delay);
	};

	return (...params: Params[]) => {
		if (shouldAwait) return (pendingParams = params);
		fn(...params);
		shouldAwait = true;
		setTimeout(timeoutFn, delay);
	};
};
