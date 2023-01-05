import * as S from './styles';
import { createPortal } from 'react-dom';
import { useState, useEffect } from 'react';
import { throttle } from '../../../../common/utils/throttle';
import { animateByFrame } from '../../../../common/utils/animate-by-frame';

export const BackToTop = () => {
	const [isVisible, setIsVisible] = useState(false);
	
	const animateScroll = (startScrollPos: number) => (progressPercent: number) => 
		window.scrollTo(0, startScrollPos - (progressPercent * startScrollPos));
	
	const handleClick = () => {
		const startScrollPos = document.documentElement.scrollTop;
		animateByFrame(animateScroll(startScrollPos), 900);
	};
	
	const checkIfScrollingUp = (startScrollPos: number) => {
		const currentScrollPos = document.documentElement.scrollTop;
		const isScrollingUp = (currentScrollPos - startScrollPos) < 0;
		return isScrollingUp ? true : false;
	};
	
	const checkIfScrollIsNearOfStart = () => {
		const { scrollTop } = document.documentElement;
		return scrollTop <= 50 ? true : false;
	};
	
	const trackScrollPos = (startScrollPos: number) => () => {
		const isScrollingUp = checkIfScrollingUp(startScrollPos);
		const isScrollNearOfStart = checkIfScrollIsNearOfStart();
		setIsVisible(isScrollingUp && !isScrollNearOfStart);
		
		startScrollPos = document.documentElement.scrollTop;
	};
	
	const handleScroll = throttle<Event>(trackScrollPos(0), 500);
	
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	
	return (
		createPortal(
			<S.BackToTop 
				onClick={handleClick}
				variant={isVisible}
			>
			</S.BackToTop>,
			document.getElementById('back-to-top')!
		)
	);
};