import * as S from './styles'
import { PROJECTS_DATA } from '../../data'
import { AppearingAnimation } from '../../../../../../common/components/AppearingAnimation'

type TProjectData = typeof PROJECTS_DATA[0]

interface IProjectCardProps {
	projectData: TProjectData
}

export const ProjectCard = ({ projectData }: IProjectCardProps) => {
	const {
		id,
		name,
		linkUrl,
		features,
		description,
		thumbnailPath,
	} = projectData
	
	const isAnOddNumber = id % 2 !== 0
	
	return (
		<AppearingAnimation position={isAnOddNumber ? 'right' : 'left'}>
			<S.ProjectCard>
				<S.ProjectImg src={thumbnailPath} />
				<S.ProjectName>{name}</S.ProjectName>
				<S.ProjectDescription>
					{description}
				</S.ProjectDescription>
				
				<S.FeaturesList>
					{features.map(({ id, label }) => (
						<li key={id}>
							{label}
						</li>
					))}
				</S.FeaturesList>
				
				<S.RedirectLink href={linkUrl} target="_blank">
					ver no github
				</S.RedirectLink>
			</S.ProjectCard>
		</AppearingAnimation>
	)
}