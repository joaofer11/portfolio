export const animateByFrame = (fn: Function, duration: number) => {
	let startTimestamp: null | number = null
	
	const loopFn = (currentTimestamp: number) => {
		if (!startTimestamp) startTimestamp = currentTimestamp
		const msPassed = currentTimestamp - startTimestamp
		const progressPercent = msPassed / duration
		fn(progressPercent)
		
		if (progressPercent < 1) requestAnimationFrame(loopFn)
	}
	
	requestAnimationFrame(loopFn)
}