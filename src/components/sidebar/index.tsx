/* ------| Estilos |------ */
import { Header, Logo, LogoLink, Wrapper } from './styles'

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
    </Wrapper>
  )
}
