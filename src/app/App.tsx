import { DefaultLayout } from '../layouts/DefaultLayout'
import { defaultTheme } from '../styles/themes/default'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from '../styles/global'
import { Router } from './Router'

export const App = () => {
  return (
  	<>
  		<ThemeProvider theme={defaultTheme}>
  			<GlobalStyles />
  			
  			<BrowserRouter>
   			<Router/>
  			</BrowserRouter>
   	</ThemeProvider>
    </>
  )
}