import * as S from './styles'
import { ReactNode } from 'react'

export interface IProps {
	active: boolean;
	children: ReactNode;
	position: 'top' | 'right' | 'bottom' | 'left';
}

export const AppearingAnimation = ({ active, children, position }: IProps) => (
	<S.AppearingAnimation
		active={active}
		position={position}
	>
		{children}
	</S.AppearingAnimation>
)