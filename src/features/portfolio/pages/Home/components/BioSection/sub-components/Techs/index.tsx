import { useRef } from 'react'
import { LOGOS_SVGS } from './data'
import { animateByFrame } from '../../../../../../../../common/utils/animate-by-frame'
import * as S from './styles'

export const Techs = () => {
	const elementsRef = useRef([])
	
	const getElRect = (el) => el.getBoundingClientRect()
	
	const moveRadialGradientAtCss = (pointerPos) => (els) => {
		const logoWrapperPos = getElRect(els.logoWrapper)
		const logoPos = getElRect(els.logo)
		
		els.logoWrapper
			.style
			.setProperty('--pointerXOffset', `${pointerPos.x - logoWrapperPos.x}px`)
		
		els.logoWrapper
			.style
			.setProperty('--pointerYOffset', `${pointerPos.y - logoWrapperPos.y}px`)
		
		els.logo
			.style
			.setProperty('--pointerXOffset', `${pointerPos.x - logoPos.x}px`)
		els.logo
			.style
			.setProperty('--pointerYOffset', `${pointerPos.y - logoPos.y}px`)
	}
	
	const decreaseOpacity = els => progressPercent =>
		els.logoWrapper.style.setProperty('--opacity', 1 - progressPercent)
	
	const increaseOpacity = els => progressPercent =>
		els.logoWrapper.style.setProperty('--opacity', progressPercent)
	
	const handleMouseLeave = () => elementsRef.current.forEach(els => {
		animateByFrame(decreaseOpacity(els), 500)
	})
	
	const handleMouseMove = (e) => {
		const { clientX: x, clientY: y } = e
		elementsRef.current.forEach(moveRadialGradientAtCss({ x, y }))
	}
	
	const handleMouseEnter = () => elementsRef.current.forEach(els => {
		animateByFrame(increaseOpacity(els), 500)
	})
	
	const setRefOfElements = (name, index) => el => {
		elementsRef.current[index] = { ...elementsRef.current[index], [name]: el }
	}
	
	const renderedLogosSvgs = Object.keys(LOGOS_SVGS).map((logoName, index) => (
		<S.LogoSvgWrapper
			key={logoName}
			ref={setRefOfElements('logoWrapper', index)}
		>
			<div className="customBorder"></div>
			<i 
				ref={setRefOfElements('logo', index)} 
				className={LOGOS_SVGS[logoName]}
			></i>
		</S.LogoSvgWrapper>
	))
	
	return (
		<S.Techs
			onMouseEnter={handleMouseEnter}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			{renderedLogosSvgs}
		</S.Techs>
	)
}