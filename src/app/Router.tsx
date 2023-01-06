import { Home } from '../features/portfolio';
import { Projects } from '../features/portfolio';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { Routes, Route, Navigate } from 'react-router-dom';

export const Router = () => (
	<Routes>
		<Route path="/" element={<DefaultLayout />}>
			<Route index element={<Home />} />
			<Route path="projects" element={<Projects />} />
			<Route path="*" element={<Navigate to="/" />} />
		</Route>
	</Routes>
);
