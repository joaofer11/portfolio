import styled, { css } from 'styled-components'

interface IProps {
	marginTop?: string;
	marginBottom?: string;
}

export const Separator = styled.div<IProps>`
	width: 100%;
	height: 1px;
	opacity: 0.75;
	
	${({ marginTop, marginBottom, theme }) => css`
		margin-top: ${marginTop ?? 'var(--spacing-sm)'};
		margin-bottom: ${marginBottom ?? 'var(--spacing-sm)'};
		background-color: ${theme['gray-blue-900']};
	`};
`