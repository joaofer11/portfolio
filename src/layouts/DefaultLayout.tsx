import { Header, Footer } from '../features/ui'
import { Outlet } from 'react-router-dom'

export const DefaultLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}