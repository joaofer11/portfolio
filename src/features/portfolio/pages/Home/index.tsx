import { BioSection } from './components/BioSection'
import { IntroSection } from './components/IntroSection'
import { Separator } from '../../../../common/components/Separator'
import { AppearingAnimation } from '../../../../common/components/AppearingAnimation'

export const Home = () => {
	return (
		<main style={{ 
			marginTop: 'var(--spacing-sm)',
		}}>
			<AppearingAnimation active position="top">
				<IntroSection />
				<Separator />
				<BioSection />
			</AppearingAnimation>
		</main>
	)
}