import type { IProps } from './';
import styled, { css, keyframes } from 'styled-components';

const animeAppearing = keyframes`
	to {
		transform: translate3d(0, 0, 0);
		opacity: 1;
	}
`;

type IStyledProps = Omit<IProps, 'children'>;

export const AppearingAnimation = styled.div<IStyledProps>`
   ${({ position }) => {
		switch (position) {
		case 'top':
			return 'transform: translate3d(0, -15px, 0);';
			break;
		case 'right':
			return 'transform: translate3d(12.5%, 0, 0);';
			break;
		case 'bottom':
			return 'transform: translate3d(0, 15px, 0);';
			break;
		case 'left':
			return 'transform: translate3d(-12.5%, 0, 0);';
			break;
		}
	}}
   opacity: 0;
   ${({ active }) =>
		active
			? css`
              animation: ${animeAppearing} 800ms ease forwards;
           `
			: ''};
`;
