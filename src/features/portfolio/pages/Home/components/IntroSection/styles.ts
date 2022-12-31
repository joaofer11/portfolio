import styled, { keyframes } from 'styled-components'

const blink = keyframes`
	0%, 100% { opacity: 1; }
	50% { opacity: 0; }
`

const stopBlink = keyframes`
	to { opacity: 1; }
`

const greet = keyframes`
	25% { transform: rotateZ(0); }
	5%, 15% { transform: rotateZ(-10deg); }
	10%, 20% { transform: rotateZ(10deg); }
`

export const IntroSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 1.428rem;
	
	> span {
		display: block;
		margin-bottom: 0.714rem;
		
		font-weight: 400;
		font-size: 0.857rem;
		font-family: 'Roboto Mono', monospace;
		
		line-height: 1.5;
		text-align: center;
		color: ${({ theme }) => theme['gray-blue-500']};
		
		&::before {
			content: "👋";
			display: inline-block;
			animation: ${greet} 5s ease 1.2s infinite;
			transform-origin: 90% bottom;
			transform-box: fill-box;
		}
	}
	
	> p {
		width: 100%;
		
		font-weight: 500;
		font-size: 1.142rem;
		font-family: 'Roboto Mono', monospace;
		
		line-height: 1.5;
		text-align: center;
		color: ${({ theme }) => theme['gray-blue-400']};
		
		&::after {
			content: '|';
			animation:
				${blink} 1s steps(1, jump-end) infinite,
				${stopBlink} 0s 800ms 1 forwards,
				${blink} 1s steps(1, jump-end) 6.4s infinite;
		}
	}
`