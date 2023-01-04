import styled from 'styled-components'

export const ProjectCard = styled.li`
	display: grid;
	grid-template-areas: 
	"image"
	"name"
	"description"
	"separator"
	"features"
	"redirect";
	grid-template-columns: auto;
	grid-template-rows: auto;
	
	max-width: 768px;
	border: 1px solid ${({ theme }) => theme['gray-blue-900']};
	border-radius: 4px;
	padding: var(--spacing-sm);
	box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
	
	&::before {
		content: "";
		grid-area: separator;
		
		width: 30%;
		height: 0.1875rem;
		opacity: 0.05;
		
		margin: var(--spacing-xs) 0;
		border-radius: 1px;
		background-color: ${({ theme }) => theme['gray-blue-500']};
	}
`

export const ProjectImg = styled.img`
	display: block;
	width: 100%;
	border: 1px solid ${({ theme }) => theme['gray-blue-925']};
	border-radius: 4px;
	
	box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
`

export const ProjectName = styled.h2`
	margin: var(--spacing-xs) 0 var(--spacing-xxs);
	
	font-weight: 700;
	font-size: var(--font-size-md);
	font-family: 'Ubuntu', sans-serif;
	line-height: 1.3;
	text-transform: uppercase;
	
	color: ${({ theme }) => theme['gray-blue-150']};
`

export const ProjectDescription = styled.p`
	font-weight: 400;
	font-size: var(--font-size-xs);
	font-family: 'Ubuntu', sans-serif;
	line-height: 1.3;
	
	color: ${({ theme }) => theme['gray-blue-500']};
`

export const FeaturesList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: var(--spacing-xs);
	margin-bottom: var(--spacing-sm);
	
	font-weight: 500;
	font-size: var(--font-size-xs);
	font-family: 'Ubuntu', sans-serif;
	line-height: 1.3;
	
	color: ${({ theme }) => theme['gray-blue-200']};
	
	> li {
		&::before {
			content: ">";
			display: inline-block;
			margin-right: var(--spacing-xxs);
			text-shadow: 0px 0px 5px;
			color: ${({ theme }) => theme['blue-400']};
		}
	}
`

export const RedirectLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	
	width: 100%;
	border: 0;
	border-radius: 4px;
	padding: var(--spacing-xs) var(--spacing-sm);
	
	font-weight: 700;
	font-size: var(--font-size-xs);
	font-family: 'Ubuntu', sans-serif;
	line-height: 1.3;
	text-transform: uppercase;
	
	box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
	color: ${({ theme }) => theme['gray-blue-500']};
	background-color: ${({ theme }) => theme['gray-blue-925']};
	transition: color 300ms ease;
	
	&:hover {
		color: ${({ theme }) => theme['gray-blue-200']};
	}
`