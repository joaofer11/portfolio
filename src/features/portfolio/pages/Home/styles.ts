import styled from 'styled-components'

export const Home = styled.main`
	> svg {
		margin-bottom: 0.714rem;
	}
`
export const BioSection = styled.section`
	display: flex;
	flex-direction: column;
	gap: 1.785rem;
	padding: 0 1.428rem;
	
	> article {
		display: flex;
		flex-direction: column;
		gap: 0.714rem;
	}
`

export const TitleWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 0.357rem;
	
	&::before {
		content: "";
		width: 4px;
		height: 1.285rem;
		
		${({ theme }) => `background-image: linear-gradient(
			180deg,
			${theme['blue-500']},
			${theme['blue-800']}
		);`}
	}
	
	h1 {
		font-size: 1.285rem;
		font-weight: 700;
		font-family: 'Ubuntu', sans-serif;
		
		line-height: auto;
		text-transform: uppercase;
		color: ${({ theme }) => theme['gray-blue-100']};
	}
`

export const Content = styled.p`
	font-size: 1rem;
	font-weight: 400;
	font-family: 'Roboto', sans-serif;
	line-height: 1.5;
	color: ${({ theme }) => theme['gray-blue-550']};
`