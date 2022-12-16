import * as S from './styles'
import { useState, useEffect } from 'react'
import { animateByFrame } from '../../../../common/utils/animate-by-frame'

export const BackToTop = () => {
	const [isVisible, setIsVisible] = useState(false)
	
	const animateScroll = (startScrollPos: number) => (progressPercent: number) => 
		window.scrollTo(0, startScrollPos - (progressPercent * startScrollPos))
	
	const handleClick = () => {
		const startScrollPos = document.documentElement.scrollTop
		animateByFrame(animateScroll(startScrollPos), 250)
	}
	
	const checkIfScrollingUp = (startScrollPos: number) => {
		const currentScrollPos = document.documentElement.scrollTop
		const isScrollingUp = (currentScrollPos - startScrollPos) < 0
		return isScrollingUp ? true : false
	}
	
	const trackScrollPos = (startScrollPos: number) => () => {
		const isScrollingUp = checkIfScrollingUp(startScrollPos)
		startScrollPos = document.documentElement.scrollTop
		setIsVisible(isScrollingUp)
	}
	
	const handleScroll = trackScrollPos(0)
	
	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])
	
	return (
		<S.BackToTop 
			onClick={handleClick}
			variant={isVisible}
		>
		</S.BackToTop>
	)
}