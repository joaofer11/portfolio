export const animateByFrame = (fn, duration) => {
	let startTimestamp = null
	
	const loopFn = (currentTimestamp) => {
		if (!startTimestamp) startTimestamp = currentTimestamp
		const msPassed = currentTimestamp - startTimestamp
		const progressPercent = msPassed / duration
		fn(progressPercent)
		
		if (progressPercent < 1) requestAnimationFrame(loopFn)
	}
	
	requestAnimationFrame(loopFn)
}