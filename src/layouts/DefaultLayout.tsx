import { Header } from '../features/ui'
import { Outlet } from 'react-router-dom'

export const DefaultLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	)
}