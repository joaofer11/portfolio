import { ReactNode } from 'react'
import styled, { keyframes } from 'styled-components'

type TPosition = 'top' | 'right' | 'bottom' | 'left'

interface IAppearingAnimationProps {
	children: ReactNode;
	position: TPosition;
}

interface IS_AppearingAnimationProps {
	position: TPosition;
}

const animeAppearing = keyframes`
	to {
		transform: translate(0, 0);
		opacity: 1;
	}
`

const S_AppearingAnimation = styled.div<IS_AppearingAnimationProps>`
	${({ position }) => {
		switch (position) {
			case 'top':
				return 'transform: translateY(-12.5%);'
			break;
			case 'right':
				return 'transform: translateX(12.5%);'
			break;
			case 'bottom':
				return 'transform: translateY(12.5%);'
			break;
			case 'left':
				return 'transform: translateX(-12.5%);'
			break;
		}
	}}
	opacity: 0;
	animation: ${animeAppearing} 800ms ease forwards;
`

export const AppearingAnimation = ({ 
	children,
	position,
}: IAppearingAnimationProps) => (
	<S_AppearingAnimation position={position}>
		{children}
	</S_AppearingAnimation>
)