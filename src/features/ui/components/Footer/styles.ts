import styled from 'styled-components'

export const Footer = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: var(--spacing-xs);
	padding-bottom: var(--spacing-sm);
	
	> p {
		font-family: 'Ubuntu', sans-serif;
		font-size: var(--font-size-xxs);
		font-weight: 700;
		line-height: 1.5;
		
		color: ${({ theme }) => theme['gray-blue-800']};
	}
`

export const SocialNetworks = styled.ul`
	display: flex;
	align-content: baseline;
	gap: var(--spacing-xs);
	font-size: var(--font-size-sm);
	
	a {
		color: ${({ theme }) => theme['gray-blue-850']};
		transition: color 300ms ease;
		
		&:hover {
			color: ${({ theme }) => theme['blue-350']};
		}
	}
`