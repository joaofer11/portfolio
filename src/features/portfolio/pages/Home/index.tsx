import { SeparatorSvg } from '../../../../styles/svg-components/SeparatorSvg'
import { Techs } from './components/Techs'
import * as S from './styles'

export const Home = () => {
	return (
		<S.Home>
			<S.IntroSection>
				<span>👋 Hello world...</span>
				<p>Me Chamo João Fernandes, e sou um desenvolvedor Front-End</p>
			</S.IntroSection>
			
			<SeparatorSvg />
			
			<S.BioSection>
				<article>
					<S.TitleWrapper>
						<h1>Sobre</h1>
					</S.TitleWrapper>
					
					<S.Content>
						Estudante de desenvolvimento web. Atualmente, cem por cento 
						imerso na stack Front-End, com foco em desenvolver aplicações 
						e introduzir features que agreguem em uma boa experiência do 
						usuário. Além de também, está sempre atento às boas praticas; 
						escrevendo código limpo e eficiente.
					</S.Content>
				</article>
				
				<article>
					<S.TitleWrapper>
						<h1>Skills</h1>
					</S.TitleWrapper>
					
					<Techs />
				</article>
			</S.BioSection>
		</S.Home>
	)
}