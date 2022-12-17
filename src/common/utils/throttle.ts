export const throttle = <Args>(fn: (...args: Args[]) => any, delay: number = 1000) => {
	let shouldAwait = false
	let pendingArgs: Args[] | null = null
	
	const timeoutFn = () => {
		const hasPendingArgs = pendingArgs !== null
		if (!hasPendingArgs) return shouldAwait = false
		
		fn(...pendingArgs as Args[])
		pendingArgs = null
		setTimeout(timeoutFn, delay)
	}
	
	return (...args: Args[]) => {
		if (shouldAwait) return pendingArgs = args
		fn(...args)
		shouldAwait = true
		setTimeout(timeoutFn, delay)
	}
}