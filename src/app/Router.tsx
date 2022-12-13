import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Home } from '../features/portfolio'

export const Router = () => (
	<Routes>
		<Route path="/" element={<DefaultLayout />}>
			<Route index element={<Home />} />
		</Route>
	</Routes>
)