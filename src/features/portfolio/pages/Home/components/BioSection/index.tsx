import * as S from './styles'
import { Techs } from './sub-components/Techs'
import { BaseArticle } from './sub-components/BaseArticle'

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
				
				<S.Content>
					Entre em contato comigo pelo <a href="https://www.linkedin.com/in/jo%C3%A3o-fernandes-569461253/" target="_blank">Linkedin</a> ou <a id="discord-nick">Discord (joaofer11#2087)</a>, e veja
					o que ando desenvolvendo no <a href="https://github.com/joaofer11" target="_blank">GitHub</a>.
				</S.Content>
			</BaseArticle>
			
			<BaseArticle title="Skills">
				<Techs />
			</BaseArticle>
		</S.BioSection>
	)
}