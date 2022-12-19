import * as S from './styles'
import testImg from './test_image.jpg'
import { ArrowSvg } from '../../../../styles/svg-components/ArrowSvg'
import { SeparatorSvg } from '../../../../styles/svg-components/SeparatorSvg'

export const Projects = () => {
	return (
		<S.Main>
			<ul>
				<S.ProjectCard>
					<S.ProjectImg src={testImg} />
					<S.ProjectName>Music Player</S.ProjectName>
					<S.ProjectDescription>
						Player de música desenvolvido com JavaScript puro.
					</S.ProjectDescription>
					
					<S.FeaturesList>
						<li>
							<span>&gt;</span>
							JavaScript
						</li>
					</S.FeaturesList>
					
					<S.RedirectBtn>ver no github</S.RedirectBtn>
				</S.ProjectCard>
			</ul>
		</S.Main>
	)
}