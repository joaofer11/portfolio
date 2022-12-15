import styled, { keyframes } from 'styled-components'

export const Home = styled.main`
	> svg {
		margin-bottom: 0.714rem;
	}
`

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
	padding: 1.428rem 1.428rem 0;
	
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

export const BioSection = styled.section`
	display: flex;
	flex-direction: column;
	gap: 1.785rem;
	
	padding: 0 1.428rem;
	
	> article {
		display: flex;
		flex-direction: column;
		gap: 0.714rem;
	}
`

export const TitleWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 0.357rem;
	
	&::before {
		content: "";
		width: 4px;
		height: 1.285rem;
		
		${({ theme }) => `background-image: linear-gradient(
			180deg,
			${theme['blue-500']},
			${theme['blue-800']}
		);`}
	}
	
	h1 {
		font-size: 1.285rem;
		font-weight: 700;
		font-family: 'Ubuntu', sans-serif;
		
		line-height: auto;
		text-transform: uppercase;
		color: ${({ theme }) => theme['gray-blue-100']};
	}
`

export const Content = styled.p`
	font-size: 1rem;
	font-weight: 400;
	font-family: 'Roboto', sans-serif;
	line-height: 1.5;
	color: ${({ theme }) => theme['gray-blue-550']};
`