import styled from 'styled-components';

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: var(--spacing-xs) 0;
	
	box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
	
	svg {
		width: 3rem;
		height: 1.9375rem;
		cursor: pointer;
		
		> #arrowLeft, #slash, #arrowRight {
			transform-origin: center;
			transition: transform 300ms ease;
		}
		
		&:hover {
			> #arrowLeft, #arrowRight {
				transform: scaleX(0);
			}
			
			> #slash {
				transform: scale(1.25);
			}
		}
		
	}
`;