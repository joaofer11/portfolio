import { Router } from './Router';
import { GlobalStyles } from '../styles/global';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../styles/themes/default';
import { TypewriterEffectCtxProvider } from '../features/portfolio/contexts/TypewriterEffectCtx';

export const App = () => {
	return (
		<>
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyles />

				<BrowserRouter>
					<TypewriterEffectCtxProvider>
						<Router />
					</TypewriterEffectCtxProvider>
				</BrowserRouter>
			</ThemeProvider>
		</>
	);
};
