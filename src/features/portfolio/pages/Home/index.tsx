import { BioSection } from './components/BioSection'
import { IntroSection } from './components/IntroSection'
import { SeparatorSvg } from '../../../../styles/svg-components/SeparatorSvg'

export const Home = () => {
	return (
		<main style={{ margin: 'var(--spacing-sm) 0' }}>
			<IntroSection />
			<SeparatorSvg />
			<BioSection />
		</main>
	)
}