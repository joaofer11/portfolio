import styled from 'styled-components'

export const Nav = styled.nav`
	> ul {
		display: flex;
		gap: var(--spacing-xxs);
		
		a {
			padding: var(--spacing-xxs);
			font-weight: 700;
			font-size: var(--font-size-xs);
			font-family: 'Ubuntu', sans-serif;
			
			line-height: initial;
			text-transform: uppercase;
			color: ${({ theme }) => theme['gray-blue-800']};
			
			transition: color 300ms ease;
			
			&:hover, &.active {
				color: ${({ theme }) => theme['gray-blue-200']};
			}
		}
	}
`