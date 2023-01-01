import * as S from './styles'
import { PROJECTS_DATA } from '../../data'
import { useState, useEffect, useRef, useCallback } from 'react'
import { AppearingAnimation } from '../../../../../../common/components/AppearingAnimation'

type TProjectData = typeof PROJECTS_DATA[0]

interface IProjectCardProps {
	projectData: TProjectData
}

export const ProjectCard = ({ projectData }: IProjectCardProps) => {
	const [canElAppear, setCanElAppear] = useState(false)
	const elRef = useRef<HTMLLIElement>(null)
	const elHasAppearedRef = useRef(false)
	
	const { id, name, linkUrl, features, description, thumbnailPath,
	} = projectData
	const isAnOddNumber = id % 2 !== 0
	
	const checkIfElementCanAppear = () => {
		const distOfElFromTop = elRef.current.getBoundingClientRect().y
		const innerHeight = window.innerHeight
		
		if (distOfElFromTop - innerHeight <= -25) setCanElAppear(true)
	}
	
	const handleScroll = useCallback(() => {
		checkIfElementCanAppear()
	}, [])
	
	useEffect(() => {
		checkIfElementCanAppear()
		
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])
	
	useEffect(() => {
		const elHasAppeared = canElAppear === true
		if (elHasAppeared) window.removeEventListener('scroll', handleScroll)
	}, [canElAppear])
	
	return (
		<AppearingAnimation
			active={canElAppear}
			position={isAnOddNumber ? 'right' : 'left'}
		>
			<S.ProjectCard ref={elRef}>
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