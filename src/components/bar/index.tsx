/* ------| Medias |------- */
import { Button } from 'components/button'
import { MenuIcon } from 'components/icons'
import LogoImage from 'media/img/logo.png'
import { Dispatch, SetStateAction } from 'react'

/* ------| Estilos |------- */
import {
  Column,
  Container,
  Logo,
  LogoLink,
  ToggleMenu,
  Wrapper,
} from './styles'

/* ------| Tipagem |------- */
type BarType = {
  setToggleMenu: Dispatch<SetStateAction<boolean>>
}

export const Bar = ({ setToggleMenu }: BarType) => {
  return (
    <Wrapper>
      <Container>
        <Column>
          <ToggleMenu>
            <Button
              styleType='none'
              type='button'
              onClick={() => setToggleMenu(isToggle => !isToggle)}
            >
              <MenuIcon size={24} />
            </Button>
          </ToggleMenu>
        </Column>
        <Column posYItems='center' posXItems='center'>
          <LogoLink href='/'>
            <Logo>
              <img src={LogoImage} alt='' />
            </Logo>
          </LogoLink>
        </Column>
        <Column />
      </Container>
    </Wrapper>
  )
}
