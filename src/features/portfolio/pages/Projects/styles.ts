import styled from 'styled-components'

export const Main = styled.main`
	margin: 1.428rem 0;
	padding: 0 1.428rem;
	
	h1 {
		width: 100%;
		margin-bottom: 1.428rem;
		
		font-weight: 700;
		font-size: 2rem;
		font-family: 'Ubuntu', sans-serif;
		
		line-height: 1.3;
		color: ${({ theme }) => theme['gray-blue-400']};
	}
	
	ul {
		display: flex;
		flex-direction: column;
		gap: 0.714rem;
		
		width: 100%;
		height: 100%;
	}
`