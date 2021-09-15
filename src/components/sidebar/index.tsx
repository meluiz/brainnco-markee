/* ------| Estilos |------ */
import {
  Header,
  Logo,
  LogoLink,
  Navigation,
  NavigationActions,
  NavigationHeader,
  NavigationButtonIcon,
  NavigationNewFileButton,
  NavigationTitle,
  Wrapper,
  NavigationButtonText,
} from './styles'

export const Sidebar = () => {
  return (
    <Wrapper>
      <Header>
        <LogoLink href='/'>
          <Logo>
            <img src='/img/static/logo-full.svg' alt='Markee Logo' />
          </Logo>
        </LogoLink>
      </Header>
      <Navigation>
        <NavigationHeader>
          <NavigationTitle>Arquivos</NavigationTitle>
        </NavigationHeader>
        <NavigationActions>
          <NavigationNewFileButton type='button'>
            <NavigationButtonIcon>
              <svg width='14' height='14' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M5.66663 1V10.3333' stroke='currentColor' strokeWidth='1.5'
                  strokeLinecap='round' strokeLinejoin='round'
                />
                <path
                  d='M1 5.66669H10.3333' stroke='currentColor' strokeWidth='1.5'
                  strokeLinecap='round' strokeLinejoin='round'
                />
              </svg>
            </NavigationButtonIcon>
            <NavigationButtonText>Adicionar arquivo</NavigationButtonText>
          </NavigationNewFileButton>
        </NavigationActions>
      </Navigation>
    </Wrapper>
  )
}
