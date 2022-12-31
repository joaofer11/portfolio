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
	
	border: 1px solid ${({ theme }) => theme['gray-blue-900']};
	border-radius: 4px;
	padding: 1.428rem;
	box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
	
	&::before {
		content: "";
		grid-area: separator;
		
		width: 30%;
		height: 3px;
		opacity: 0.05;
		
		margin: 0.714rem 0;
		border-radius: 1px;
		background-color: ${({ theme }) => theme['gray-blue-500']};
	}
`

export const ProjectImg = styled.img`
	display: block;
	width: 100%;
	border-radius: 4px;
	
	box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1)
`

export const ProjectName = styled.h2`
	margin: 0.714rem 0 0.357rem;
	
	font-weight: 700;
	font-size: 1.285rem;
	font-family: 'Ubuntu', sans-serif;
	line-height: 1.3;
	text-transform: uppercase;
	
	color: ${({ theme }) => theme['gray-blue-150']};
`

export const ProjectDescription = styled.p`
	font-weight: 400;
	font-size: 1rem;
	font-family: 'Ubuntu', sans-serif;
	line-height: 1.3;
	
	color: ${({ theme }) => theme['gray-blue-500']};
`

export const FeaturesList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 0.714rem;
	margin-bottom: 1.428rem;
	
	font-weight: 500;
	font-size: 1rem;
	font-family: 'Ubuntu', sans-serif;
	line-height: 1.3;
	
	color: ${({ theme }) => theme['gray-blue-200']};
	
	> li {
		&::before {
			content: ">";
			display: inline-block;
			margin-right: 0.357rem;
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
	padding: 0.714rem 1.428rem;
	
	font-weight: 700;
	font-size: 1rem;
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