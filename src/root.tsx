import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'
import { App } from './app'

export const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  )
}
