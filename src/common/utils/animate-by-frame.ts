const easeInOutCubic = (x: number) =>
	x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

export const animateByFrame = (fn: (progressPercent: number) => void, duration: number) => {
	let startTimestamp: null | number = null;

	const loopFn = (currentTimestamp: number) => {
		if (!startTimestamp) startTimestamp = currentTimestamp;
		const msPassed = currentTimestamp - startTimestamp;
		const progressPercent = msPassed / duration;
		fn(easeInOutCubic(progressPercent));

		if (progressPercent < 1) requestAnimationFrame(loopFn);
	};

	requestAnimationFrame(loopFn);
};
