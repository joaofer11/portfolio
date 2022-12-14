import styled from 'styled-components'

export const Techs = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 0.714rem;
	
	&:hover {
		div::before, .customBorder::before {
			opacity: 1;
		}
	}
`

export const LogoSvgWrapper = styled.div`
	position: relative;
	
	display: flex;
	justify-content: center;
	align-items: center;
	width: 9.642rem;
	height: 7.5rem;
	
	border-radius: 4px;
	
	font-size: 4.017rem;
	background-color: ${({ theme }) => theme['gray-blue-950']};
	
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
		background-color: ${({ theme }) => theme['gray-blue-900']};
	}
	
	&::before, .customBorder::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0;
		
		width: 100%;
		height: 100%;
		border-radius: inherit;
		transition: opacity 500ms;
	}
	
	${({ theme }) => `
		> .customBorder::before {
			background-image: radial-gradient(
				circle farthest-corner at var(--pointerXOffset) var(--pointerYOffset),
				${theme['blue-500']},
				transparent 45%
			);
		}
		
		&::before {
			background-image: radial-gradient(
				circle farthest-corner at var(--pointerXOffset) var(--pointerYOffset),
				hsla(210, 3%, 100%, 0.06),
				transparent 70%
			);
		}
		
		> i {
			background-image: radial-gradient(
				circle farthest-corner at var(--pointerXOffset) var(--pointerYOffset),
				rgba(235, 245, 255, var(--opacity)) 10%,
				transparent
			);
			
			background-color: ${theme['gray-blue-800']};
			background-clip: text;
			-webkit-background-clip: text;
			color: transparent;
		}
	`}
`