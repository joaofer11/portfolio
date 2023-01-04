import { Outlet } from 'react-router-dom'
import { Separator } from '../common/components/Separator'
import { Header, Footer, BackToTop } from '../features/ui'

export const DefaultLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Separator 
				marginTop="2.5rem"
				marginBottom="0"
			/>
			<Footer />
			<BackToTop />
		</>
	)
}