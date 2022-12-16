import { SeparatorSvg } from '../../../../styles/svg-components/SeparatorSvg'
import { IntroSection } from './components/IntroSection'
import { BioSection } from './components/BioSection'
import { BackToTop } from '../../../ui'
import * as S from './styles'

export const Home = () => {
	return (
		<S.Home>
			<IntroSection />
			<SeparatorSvg />
			<BioSection />
			<SeparatorSvg />
			<BackToTop />
		</S.Home>
	)
}