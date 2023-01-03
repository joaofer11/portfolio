import { createGlobalStyle } from 'styled-components'
import { sizes } from './breakpoints'

export const GlobalStyles = createGlobalStyle`
	:root {
		--font-size-xxs: 0.75rem;
		--font-size-xs: 0.875rem;
		--font-size-sm: 1rem;
		--font-size-md: 1.125rem;
		--font-size-lg: 1.3125rem;
		
		--spacing-xxs: 0.3125rem;
		--spacing-xs: 0.625rem;
		--spacing-sm: 1.25rem;
		--spacing-md: 1.5625rem;
	}
	
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	html {
		@media ${sizes.sm} {
			font-size: 150%;
		}
		
		@media ${sizes.md} {
			font-size: 200%;
		}
	}
	
	body {
		min-height: 100vh;
		min-width: 320px;
		max-width: 1200px;
		margin: 0 auto;
		
		background-color: ${({ theme }) => theme['gray-blue-950']};
	}
	
	#root {
		overflow-x: hidden;
	}
	
	body, button {
		font-size: var(--font-size-sm);
		font-weight: 400;
		font-family: 'Roboto', sans-serif;
		
		-webkit-font-smoothing: antialiased;
	}
	
	button, a { 
		cursor: pointer;
	}
	
	a { 
		text-decoration: none;
	}
	
	ul {
		list-style: none;
	}
`