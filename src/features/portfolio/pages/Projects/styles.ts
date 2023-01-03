import styled from 'styled-components'

export const Main = styled.main`
	margin: var(--spacing-sm) 0;
	padding: 0 var(--spacing-sm);
	
	h1 {
		width: 100%;
		max-width: 25ch;
		margin-bottom: var(--spacing-sm);
		
		font-weight: 700;
		font-size: 1.75rem;
		font-family: 'Ubuntu', sans-serif;
		
		line-height: 1.3;
		color: ${({ theme }) => theme['gray-blue-400']};
	}
	
	ul {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xs);
		
		width: 100%;
		height: 100%;
	}
`