import * as S from './styles';
import { FiMail } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';

export const Footer = () => (
	<S.Footer>
		<p>
			© 2022 - Feito com 💙 por João Fernandes
		</p>
		
		<S.SocialNetworks>
			<li><a href="mailto:joaofergear003@gmail.com" target="_blank" rel="noreferrer"><FiMail /></a></li>
			<li><a href="#discord-nick" title="joaofer11#2087"><FaDiscord /></a></li>
			<li><a href="https://github.com/joaofer11" target="_blank" rel="noreferrer"><i className="devicon-github-original"></i></a></li>
			<li><a href="https://www.linkedin.com/in/jo%C3%A3o-fernandes-569461253/" target="_blank" rel="noreferrer"><i className="devicon-linkedin-plain"></i></a></li>
		</S.SocialNetworks>
	</S.Footer>
);