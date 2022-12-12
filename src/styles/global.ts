import { createGlobalStyle } from 'styled-components'
import { sizes } from './breakpoints'

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	html {
		font-size: 87.5%;
		
		@media ${sizes.md} {
			font-size: 93.75%;
		}
		
		@media ${sizes.lg} {
			font-size: 100%;
		}
	}
	
	body {
		min-height: 100vh;
		background-color: ${({ theme }) => theme['gray-blue-950']};
	}
	
	body, button {
		font-size: 1rem;
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