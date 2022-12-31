import styled from 'styled-components'

export const Main = styled.main`
	margin: 1.428rem 0;
	
	section {
		padding: 0 1.428rem;
	}
	
	> section:first-child {
		> h1 {
			font-weight: 700;
			font-size: 1.714rem;
			font-family: 'Ubuntu', sans-serif;
			
			line-height: 1.3;
			text-transform: uppercase;
			color: ${({ theme }) => theme['gray-blue-400']};
			
			&::after {
				content: ".";
				font-size: 3.428rem;
				line-height: 0;
			}
		}
	}
	
	ul {
		display: flex;
		flex-direction: column;
		gap: 1.428rem;
		
		width: 100%;
		height: 100%;
	}
`