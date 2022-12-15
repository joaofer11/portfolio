import * as S from './styles'

export const BaseArticle = ({ title, children }) => (
	<S.BaseArticle>
		<S.TitleWrapper>
			<h1>{title}</h1>
		</S.TitleWrapper>
		
		{children}
	</S.BaseArticle>
)