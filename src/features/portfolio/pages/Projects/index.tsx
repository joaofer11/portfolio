import * as S from './styles'
import { PROJECTS_DATA } from './data'
import { ProjectCard } from './components/ProjectCard'

export const Projects = () => {
	return (
		<S.Main>
			<ul>
				{PROJECTS_DATA.map(projectData => (
					<ProjectCard 
						key={projectData.id} 
						projectData={projectData} 
					/>
				))}
			</ul>
		</S.Main>
	)
}