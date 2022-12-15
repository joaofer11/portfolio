import { SeparatorSvg } from '../../../../styles/svg-components/SeparatorSvg'
import { IntroSection } from './components/IntroSection'
import { BioSection } from './components/BioSection'
import * as S from './styles'

export const Home = () => {
	return (
		<S.Home>
			<IntroSection />
			<SeparatorSvg />
			<BioSection />
		</S.Home>
	)
}