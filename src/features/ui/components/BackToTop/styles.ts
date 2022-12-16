import styled from 'styled-components'

interface BackToTopProps {
	variant: boolean;
}

export const BackToTop = styled.button<BackToTopProps>`
	position: fixed;
	bottom: 1.428rem;
	right: 1.428rem;
	
	display: flex;
	justify-content: center;
	align-items: center;
	border: 0;
	border-radius: 50%;
	transform-origin: center;
	width: 3.571rem;
	height: 3.571rem;
	
	background-color: ${({ theme }) => theme['gray-blue-950']};
	box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
	transition: all 250ms ease;
	
	${({ variant }) => variant === true ? `
		transform: scale(1);
		pointer-events: auto;
	` : `
		transform: scale(0);
		pointer-events: none;
	`};
	
	&::before {
		position: relative;
		--border-color: ${({ theme }) => theme['blue-500']};
		
		content: "";
		width: 0.714rem;
		height: 0.714rem;
		border-top: 0.25rem solid var(--border-color);
		border-left: 0.25rem solid var(--border-color);
		transform: translateY(calc(0.25 * 0.857rem)) rotate(45deg);
	}
`