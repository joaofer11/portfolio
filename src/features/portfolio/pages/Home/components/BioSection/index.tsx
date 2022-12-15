import * as S from './styles'
import { BaseArticle } from './sub-components/BaseArticle'
import { Techs } from './sub-components/Techs'

export const BioSection = () => {
	return (
		<S.BioSection>
			<BaseArticle title="Sobre">
				<S.Content>
					Estudante de desenvolvimento web. Atualmente, cem por cento 
					imerso na stack Front-End, com foco em desenvolver aplicações 
					e introduzir features que agreguem em uma boa experiência do 
					usuário. Além de também, está sempre atento às boas praticas; 
					escrevendo código limpo e eficiente.
				</S.Content>
			</BaseArticle>
			
			<BaseArticle title="Skills">
				<Techs />
			</BaseArticle>
		</S.BioSection>
	)
}