import { BioSection } from './components/BioSection'
import { IntroSection } from './components/IntroSection'
import { SeparatorSvg } from '../../../../styles/svg-components/SeparatorSvg'
import { AppearingAnimation } from '../../../../common/components/AppearingAnimation'

export const Home = () => {
	return (
		<main style={{ margin: 'var(--spacing-sm) 0' }}>
			<AppearingAnimation active position="top">
				<IntroSection />
				<SeparatorSvg />
				<BioSection />
			</AppearingAnimation>
		</main>
	)
}