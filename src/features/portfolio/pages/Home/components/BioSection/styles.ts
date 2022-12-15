import styled from 'styled-components'

export const BioSection = styled.section`
	display: flex;
	flex-direction: column;
	gap: 1.785rem;
	padding: 0 1.428rem;
`

export const Content = styled.p`
	font-size: 1rem;
	font-weight: 400;
	font-family: 'Roboto', sans-serif;
	line-height: 1.5;
	color: ${({ theme }) => theme['gray-blue-550']};
`