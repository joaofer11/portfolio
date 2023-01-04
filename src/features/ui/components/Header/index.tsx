import { Nav } from '../Nav'
import * as S from './styles'
import { Link } from 'react-router-dom'
import { Logo } from '../../../../styles/svg-components/Logo'

export const Header = () => {
	return (
		<S.Header>
			<Link to="/">
				<Logo />
			</Link>
			<Nav />
		</S.Header>
	)
}