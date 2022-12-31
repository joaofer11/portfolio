import { Header, Footer } from '../features/ui'
import { Outlet } from 'react-router-dom'
import { SeparatorSvg } from '../styles/svg-components/SeparatorSvg'

export const DefaultLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<SeparatorSvg />
			<Footer />
		</>
	)
}