import { BackToTop } from '../../../ui'
import { BioSection } from './components/BioSection'
import { IntroSection } from './components/IntroSection'
import { SeparatorSvg } from '../../../../styles/svg-components/SeparatorSvg'

export const Home = () => {
	return (
		<main style={{margin: '1.428rem 0'}}>
			<IntroSection />
			<SeparatorSvg />
			<BioSection />
			<BackToTop />
		</main>
	)
}