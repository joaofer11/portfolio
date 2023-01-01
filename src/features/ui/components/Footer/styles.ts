import styled from 'styled-components'

export const Footer = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.714rem;
	padding-bottom: 1.428rem;
	
	> p {
		font-family: 'Ubuntu', sans-serif;
		font-size: 0.857rem;
		font-weight: 700;
		line-height: 1.5;
		
		${({ theme }) => `
			color: ${theme['gray-blue-800']};
		`}
	}
`

export const SocialNetworks = styled.ul`
	display: flex;
	align-content: baseline;
	gap: 0.714rem;
	font-size: 1.25rem;
	
	a {
		color: ${({ theme }) => theme['gray-blue-850']};
		transition: color 300ms ease;
		
		&:hover {
			color: ${({ theme }) => theme['blue-350']};
		}
	}
`