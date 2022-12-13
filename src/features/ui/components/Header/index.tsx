import { PersonalBrandSvg } from '../../../../styles/svg-components/PersonalBrandSvg'
import { Nav } from '../Nav'
import * as S from './styles'

export const Header = () => {
	return (
		<S.Header>
			<PersonalBrandSvg />
			<Nav />
		</S.Header>
	)
}