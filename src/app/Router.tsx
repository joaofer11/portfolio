import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Home } from '../features/portfolio'
import { Projects } from '../features/portfolio'

export const Router = () => (
	<Routes>
		<Route path="/" element={<DefaultLayout />}>
			<Route index element={<Home />} />
			<Route path="projects" element={<Projects />} />
		</Route>
	</Routes>
)