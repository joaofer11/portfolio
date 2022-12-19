import * as S from './styles'
import testImg from './test_image.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { selectCount, incrementCount } from '../../portfolio-slice'
import { SeparatorSvg } from '../../../../styles/svg-components/SeparatorSvg'

export const Projects = () => {
	const count = useSelector(selectCount)
	const dispatch = useDispatch()
	
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
			
			<button onClick={() => dispatch(incrementCount())}>{count}</button>
		</S.Main>
	)
}