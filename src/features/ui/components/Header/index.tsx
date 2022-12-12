import personalBrand from '../../../../styles/svgs/personal-brand.svg'
import { Nav } from '../Nav'
import * as S from './styles'

export const Header = () => {
	return (
		<S.Header>
			<img src={personalBrand} />
			<Nav />
		</S.Header>
	)
}