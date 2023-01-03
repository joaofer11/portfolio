import styled from 'styled-components'

export const BaseArticle = styled.article`
	display: flex;
	flex-direction: column;
	gap: var(--spacing-xs);
`

export const TitleWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: var(--spacing-xxs);
	
	&::before {
		content: "";
		width: 0.25rem;
		height: 1.285rem;
		
		${({ theme }) => `background-image: linear-gradient(
			180deg,
			${theme['blue-500']},
			${theme['blue-800']}
		);`}
	}
	
	h1 {
		font-size: var(--font-size-lg);
		font-weight: 700;
		font-family: 'Ubuntu', sans-serif;
		
		line-height: auto;
		text-transform: uppercase;
		color: ${({ theme }) => theme['gray-blue-100']};
	}
`