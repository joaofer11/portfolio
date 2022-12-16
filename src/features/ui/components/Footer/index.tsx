import * as S from './styles'
import { FiMail } from 'react-icons/fi'
import { FaDiscord } from 'react-icons/fa'

export const Footer = () => (
	<S.Footer>
		<p>
			© 2022 - Feito com 💙 by João Fernandes
		</p>
		
		<S.SocialNetworks>
			<li><a><FiMail /></a></li>
			<li><a><FaDiscord /></a></li>
			<li><a><i className="devicon-github-original"></i></a></li>
			<li><a><i className="devicon-linkedin-plain"></i></a></li>
		</S.SocialNetworks>
	</S.Footer>
)