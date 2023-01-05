import * as S from './styles';
import { PROJECTS_DATA } from './data';
import { ProjectCard } from './components/ProjectCard';
import { Separator } from '../../../../common/components/Separator';
import { AppearingAnimation } from '../../../../common/components/AppearingAnimation';

export const Projects = () => {
	return (
		<S.Main>
			<AppearingAnimation active position="top">
				<h1>Confira alguns projetos que desenvolvi:</h1>
			</AppearingAnimation>
			
			<Separator />
			
			<ul>
				{PROJECTS_DATA.map(projectData => (
					<ProjectCard 
						key={projectData.id} 
						projectData={projectData} 
					/>
				))}
			</ul>
		</S.Main>
	);
};