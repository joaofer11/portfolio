import styled from 'styled-components'

export const Techs = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 0.714rem;
`

export const LogoSvgWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 9.642rem;
	height: 7.5rem;
	
	border: 1px solid ${({ theme }) => theme['gray-blue-900']};
	border-radius: 4px;
	
	font-size: 4.017rem;
	color: ${({ theme }) => theme['gray-blue-200']};
`