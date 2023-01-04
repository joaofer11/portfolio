import styled from 'styled-components'
import { sizes } from '../../../../../../../../styles/breakpoints'

export const Techs = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	justify-content: center;
	gap: var(--spacing-xs);
	pointer-events: none;
	
	@media ${sizes.sm} {
		grid-template-columns: repeat(3, 1fr);
	}
	
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
	font-size: 3.75rem;
	height: 6.5625rem;
	
	&:last-child {
		grid-column: 1 / 3;
	}
	
	@media ${sizes.sm} {
		height: 5.416rem;
		font-size: 3.083rem;
		
		&:last-child {
			grid-column: initial;
		}
	}
	
	@media ${sizes.md} {
		height: 5.0625rem;
		font-size: 2.875rem;
	}
	
	@media ${sizes.lg} {
		height: 6.875rem;
		font-size: 3.90625rem;
	}
	
	@media ${sizes.xl} {
		height: 8.5625rem;
		font-size: 4.875rem;
	}
	
	border-radius: 4px;
	
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
		
		@media ${sizes.md} {
			width: calc(100% + 3px);
			height: calc(100% + 3px);
		}
		
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