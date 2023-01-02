import { Outlet } from 'react-router-dom'
import { Header, Footer, BackToTop } from '../features/ui'
import { SeparatorSvg } from '../styles/svg-components/SeparatorSvg'

export const DefaultLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<SeparatorSvg />
			<Footer />
			<BackToTop />
		</>
	)
}