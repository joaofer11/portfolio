import { useState, useRef } from 'react'
import { LOGOS_SVGS } from './data'
import * as S from './styles'

export const Techs = () => {
	const [coordinates, setCoordinates] = useState({ x: 0, y: 0 })
	const elementsRef = useRef([])
	
	/*const handleMouseMove = (e) => {
		const pointerPosX = e.clientX
		const pointerPosY = e.clientY
		const target = e.currentTarget
		const { x: distFromLeft, y: distFromTop } = target.getBoundingClientRect()
		
		const pointerXOffsetOnElement = pointerPosX - distFromLeft
		const pointerYOffsetOnElement = pointerPosY - distFromTop
	}*/
	
	const handleMouseMove2 = (e) => {
		const pointerPosX = e.clientX
		const pointerPosY = e.clientY
		
		
		elementsRef.current.forEach(el => {
			const { x, y } = el.getBoundingClientRect()
			const pointerXOffset = pointerPosX - x
			const pointerYOffset = pointerPosY - y
			
			el.style.setProperty('--pointerXOffset', pointerXOffset + 'px')
			el.style.setProperty('--pointerYOffset', pointerYOffset + 'px')
		})
	}
	const renderedLogosSvgs = Object.keys(LOGOS_SVGS).map((logoName, index) => (
		<S.LogoSvgWrapper
			ref={el => elementsRef.current[index] = el}
		>
			<div className="customBorder"></div>
			<i className={LOGOS_SVGS[logoName]}></i>
		</S.LogoSvgWrapper>
	))
	
	
	
	
	
	const handleMouseMove3 = (e) => {
		const pointerPosX = e.clientX
		const pointerPosY = e.clientY
		
		elementsRef.current.forEach(els => {
			const { 
				x: logoWrapperX, 
				y: logoWrapperY
			} = els.logoWrapper.getBoundingClientRect()
			
			const { 
				x: logoX, 
				y: logoY
			} = els.logo.getBoundingClientRect()
			
			els.logoWrapper.style.setProperty('--pointerXOffset', `${pointerPosX - logoWrapperX}px`)
			els.logoWrapper.style.setProperty('--pointerYOffset', `${pointerPosY - logoWrapperY}px`)
			
			els.logo.style.setProperty('--pointerXOffset', pointerPosX - logoX + 'px')
			els.logo.style.setProperty('--pointerYOffset', pointerPosY - logoY + 'px')
		})
	}
	
	const changeOpacity = (logo) => {
		let duration = 500
		let startTimestamp = null
		
		const loopFn = (timestamp) => {
			if (!startTimestamp) startTimestamp = timestamp
			const msPassed = timestamp - startTimestamp
			const progress = msPassed / duration
			logo.style.setProperty('--opacity', progress)
			
			if (progress < 1) requestAnimationFrame(loopFn)
		}
		
		requestAnimationFrame(loopFn)
	}
	
	const resetOpacity = (logo) => {
		let duration = 500
		let startTimestamp = null
		
		const loopFn = (timestamp) => {
			if (!startTimestamp) startTimestamp = timestamp
			const msPassed = timestamp - startTimestamp
			const progress = 1 - (msPassed) / duration
			console.log(progress)
			logo.style.setProperty('--opacity', progress)
			
			if (progress > 0) requestAnimationFrame(loopFn)
		}
		
		requestAnimationFrame(loopFn)
	}
	
	const handleMouseEnter = () => {
		elementsRef.current.forEach(({ logo }) => {
			changeOpacity(logo)
		})
	}
	
	const handleMouseLeave = () => {
		elementsRef.current.forEach(({ logo }) => {
			resetOpacity(logo)
		})
	}
	
	const renderedLogosSvgs2 = Object.keys(LOGOS_SVGS).map((logoName, index) => (
		<S.LogoSvgWrapper
			ref={el => elementsRef.current[index] = { ...elementsRef.current[index], logoWrapper: el }}
		>
			<div className="customBorder"></div>
			<i 
				ref={el => elementsRef.current[index] = {...elementsRef.current[index], logo: el}} 
				className={LOGOS_SVGS[logoName]}
			></i>
		</S.LogoSvgWrapper>
	))
	
	return (
		<S.Techs
			onMouseEnter={handleMouseEnter}
			onMouseMove={handleMouseMove3}
			onMouseLeave={handleMouseLeave}
		>
			{renderedLogosSvgs2}
		</S.Techs>
	)
}