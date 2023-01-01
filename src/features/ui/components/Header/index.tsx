import { Link } from 'react-router-dom'
import { Nav } from '../Nav'
import * as S from './styles'
import { PersonalBrandSvg } from '../../../../styles/svg-components/PersonalBrandSvg'

export const Header = () => {
	return (
		<S.Header>
			<Link to="/">
				<PersonalBrandSvg />
			</Link>
			<Nav />
		</S.Header>
	)
}