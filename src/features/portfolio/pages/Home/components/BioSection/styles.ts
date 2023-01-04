import styled from 'styled-components'

export const BioSection = styled.section`
	display: flex;
	flex-direction: column;
	gap: var(--spacing-md);
`

export const Content = styled.p`
	max-width: 75ch;
	font-weight: 400;
	font-size: var(--font-size-sm);
	font-family: 'Roboto', sans-serif;
	line-height: 1.5;
	color: ${({ theme }) => theme['gray-blue-500']};
	
	> a {
		font-weight: 500;
		color: ${({ theme }) => theme['blue-350']};
	}
`