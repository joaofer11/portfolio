import * as S from './styles'
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
									{feature.label}
								</li>
							))}
						</S.FeaturesList>
						
						<S.RedirectLink href={project.linkUrl} target="_blank">
							ver no github
						</S.RedirectLink>
					</S.ProjectCard>
				))}
			</ul>
		</S.Main>
	)
}