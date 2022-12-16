import { ReactNode } from 'react'
import * as S from './styles'

interface BaseArticleProps {
	title: string;
	children: ReactNode;
}

export const BaseArticle = ({ title, children }: BaseArticleProps) => (
	<S.BaseArticle>
		<S.TitleWrapper>
			<h1>{title}</h1>
		</S.TitleWrapper>
		
		{children}
	</S.BaseArticle>
)