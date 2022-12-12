import styled from 'styled-components'

export const Nav = styled.nav`
	> ul {
		display: flex;
		gap: 0.5rem;
		
		a {
			padding: 0.5rem;
			font-weight: 700;
			font-size: 0.857rem;
			font-family: 'Ubuntu', sans-serif;
			
			line-height: initial;
			text-transform: uppercase;
			color: ${({ theme }) => theme['gray-blue-800']};
			
			transition: color 350ms ease-out;
			
			&:hover {
				color: ${({ theme }) => theme['gray-blue-200']};
			}
		}
	}
`