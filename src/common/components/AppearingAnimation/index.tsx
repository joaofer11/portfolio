import { ReactNode } from 'react'
import styled, { css, keyframes } from 'styled-components'

type TPosition = 'top' | 'right' | 'bottom' | 'left'

interface IAppearingAnimationProps {
	active: boolean;
	children: ReactNode;
	position: TPosition;
}

interface IS_AppearingAnimationProps {
	position: TPosition;
	active: boolean;
}

const animeAppearing = keyframes`
	to {
		transform: translate3d(0, 0, 0);
		opacity: 1;
	}
`

const S_AppearingAnimation = styled.div<IS_AppearingAnimationProps>`
	${({ position }) => {
		switch (position) {
			case 'top':
				return 'transform: translate3d(0, -15px, 0);'
			break;
			case 'right':
				return 'transform: translate3d(12.5%, 0, 0);'
			break;
			case 'bottom':
				return 'transform: translate3d(0, 15px, 0);'
			break;
			case 'left':
				return 'transform: translate3d(-12.5%, 0, 0);'
			break;
		}
	}}
	opacity: 0;
	${({ active }) => active ? css`
		animation: ${animeAppearing} 800ms ease forwards;
	`: ''};
`

export const AppearingAnimation = ({ 
	active,
	children,
	position,
}: IAppearingAnimationProps) => (
	<S_AppearingAnimation
		active={active}
		position={position}
	>
		{children}
	</S_AppearingAnimation>
)