import * as S from './styles';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
	return (
		<S.Nav>
			<ul>
				<li><NavLink to="/">Home</NavLink></li>
				<li><NavLink to="/projects">Projetos</NavLink></li>
			</ul>
		</S.Nav>
	);
};