import { Home } from '../features/portfolio'
import { Routes, Route } from 'react-router-dom'
import { Projects } from '../features/portfolio'
import { DefaultLayout } from '../layouts/DefaultLayout'

export const Router = () => (
	<Routes>
		<Route path="/" element={<DefaultLayout />}>
			<Route index element={<Home />} />
			<Route path="projects" element={<Projects />} />
		</Route>
	</Routes>
)