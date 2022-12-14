import styled from 'styled-components';

export const Main = styled.main`
	margin-top: var(--spacing-sm);
	
	h1 {
		width: 100%;
		max-width: 25ch;
		margin: 0 auto var(--spacing-sm);
		
		font-weight: 700;
		font-size: 1.75rem;
		font-family: 'Ubuntu', sans-serif;
		
		line-height: 1.3;
		text-align: center;
		color: ${({ theme }) => theme['gray-blue-400']};
	}
	
	> ul {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--spacing-xs);
		
		width: 100%;
		height: 100%;
	}
`;