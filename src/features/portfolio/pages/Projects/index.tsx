import * as S from './styles'
import testImg from './test_image.jpg'
import { PROJECTS } from './data'
import { SeparatorSvg } from '../../../../styles/svg-components/SeparatorSvg'

export const Projects = () => {
	return (
		<S.Main>
			<ul>
				{PROJECTS.map(project => (
					<S.ProjectCard key={project.id}>
						<S.ProjectImg src={project.thumbnailPath} />
						<S.ProjectName>{project.name}</S.ProjectName>
						<S.ProjectDescription>
							{project.description}
						</S.ProjectDescription>
						
						<S.FeaturesList>
							{project.features.map(feature => (
								<li key={feature.id}>
									<span>&gt;</span>
									{feature.label}
								</li>
							))}
						</S.FeaturesList>
						
						<S.RedirectBtn>ver no github</S.RedirectBtn>
					</S.ProjectCard>
				))}
			</ul>
		</S.Main>
	)
}