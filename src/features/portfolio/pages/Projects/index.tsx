import * as S from './styles'
import { PROJECTS_DATA } from './data'
import { ProjectCard } from './components/ProjectCard'
import { SeparatorSvg } from '../../../../styles/svg-components/SeparatorSvg'

export const Projects = () => {
	return (
		<S.Main>
			<h1>Confira alguns projetos que desenvolvi:</h1>
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