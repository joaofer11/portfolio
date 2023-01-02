import styled from 'styled-components'
import { sizes } from '../../../../../../../../styles/breakpoints'

export const Techs = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: var(--spacing-xs);
	pointer-events: none;
	
	@media ${sizes.lg} {
		pointer-events: auto;
	}
`

export const LogoSvgWrapper = styled.div`
	--opacity;
	
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 8.4375rem;
	height: 6.5625rem;
	
	border-radius: 4px;
	font-size: 3.75rem;
	
	background-color: ${({ theme }) => theme['gray-blue-950']};
	background-image: radial-gradient(
		circle farthest-corner at var(--pointerXOffset) var(--pointerYOffset),
		rgba(23, 23, 23, var(--opacity)),
		transparent 70%
	);
	
	> .customBorder {
		box-sizing: content-box;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -10;
		
		width: calc(100% + 1px);
		height: calc(100% + 1px);
		border-radius: inherit;
		
		background-image: radial-gradient(
			circle farthest-corner at var(--pointerXOffset) var(--pointerYOffset),
			rgb(34, 65, 223, var(--opacity)),
			transparent 50%
		);
		background-color: ${({ theme }) => theme['gray-blue-900']};
	}
		
	> i {
		background-image: radial-gradient(
			circle farthest-corner at var(--pointerXOffset) var(--pointerYOffset),
			rgba(235, 245, 255, var(--opacity)) 10%,
			transparent
		);
		
		background-color: ${({ theme }) => theme['gray-blue-800']};
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
	}
`