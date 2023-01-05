import { useRef, MouseEvent } from 'react';
import { LOGOS_SVGS } from './data';
import { animateByFrame } from '../../../../../../../../common/utils/animate-by-frame';
import * as S from './styles';

type LogoSvgsKeys = keyof typeof LOGOS_SVGS

interface PointerPos {
	x: number;
	y: number;
}

interface ElementsRef {
	logoWrapper: HTMLElement;
	logo: HTMLElement;
}

export const Techs = () => {
	const elementsRef = useRef<ElementsRef[]>([]);
	
	const getElRect = (el: HTMLElement) => el.getBoundingClientRect();
	
	const moveRadialGradientAtCss = (pointerPos: PointerPos) => (els: ElementsRef) => {
		const logoWrapperPos = getElRect(els.logoWrapper);
		const logoPos = getElRect(els.logo);
		
		els.logoWrapper
			.style
			.setProperty('--pointerXOffset', `${pointerPos.x - logoWrapperPos.x}px`);
		
		els.logoWrapper
			.style
			.setProperty('--pointerYOffset', `${pointerPos.y - logoWrapperPos.y}px`);
		
		els.logo
			.style
			.setProperty('--pointerXOffset', `${pointerPos.x - logoPos.x}px`);
		els.logo
			.style
			.setProperty('--pointerYOffset', `${pointerPos.y - logoPos.y}px`);
	};
	
	const decreaseOpacity = (els: ElementsRef) => (progressPercent: number) =>
		els.logoWrapper.style.setProperty('--opacity', String(1 - progressPercent));
	
	const increaseOpacity = (els: ElementsRef) => (progressPercent: number) =>
		els.logoWrapper.style.setProperty('--opacity', String(progressPercent));
	
	const handleMouseLeave = () => elementsRef.current.forEach(els => {
		animateByFrame(decreaseOpacity(els), 500);
	});
	
	const handleMouseMove = (e: MouseEvent) => {
		const { clientX: x, clientY: y } = e;
		elementsRef.current.forEach(moveRadialGradientAtCss({ x, y }));
	};
	
	const handleMouseEnter = () => elementsRef.current.forEach(els => {
		animateByFrame(increaseOpacity(els), 500);
	});
	
	const setRefOfElements = (name: string, index: number) => (el: unknown) => {
		elementsRef.current[index] = { ...elementsRef.current[index], [name]: el };
	};
	
	const renderedLogosSvgs = Object.keys(LOGOS_SVGS).map((logoName, index) => (
		<S.LogoSvgWrapper
			key={logoName}
			ref={setRefOfElements('logoWrapper', index) as (el: HTMLDivElement) => void}
		>
			<div className="customBorder"></div>
			<i 
				ref={setRefOfElements('logo', index)} 
				className={LOGOS_SVGS[logoName as LogoSvgsKeys]}
			></i>
		</S.LogoSvgWrapper>
	));
	
	return (
		<S.Techs
			onMouseEnter={handleMouseEnter}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			{renderedLogosSvgs}
		</S.Techs>
	);
};