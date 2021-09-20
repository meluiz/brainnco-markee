import { Dispatch, SetStateAction } from 'react'

/* ------| Componentes |------- */
import { Button } from 'components/button'

/* ------| Medias |------- */
import LogoImage from 'media/img/logo.png'

/* ------| Estilos |------- */
import { EyeIcon, EyeOffIcon, MenuIcon } from 'components/icons'
import {
  Column,
  Container,
  Logo,
  LogoLink,
  SwitchPreview,
  ToggleMenu,
  Wrapper,
} from './styles'

/* ------| Tipagem |------- */
type BarType = {
  setToggleMenu: Dispatch<SetStateAction<boolean>>
  switchPreview: boolean
  setSwitchPreview: Dispatch<SetStateAction<boolean>>
}

export const Bar = ({
  setToggleMenu,
  switchPreview,
  setSwitchPreview,
}: BarType) => {
  return (
    <Wrapper>
      <Container>
        <Column posYItems='center' posXItems='start'>
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
        <Column posYItems='center' posXItems='end'>
          <SwitchPreview>
            <Button
              styleType='none'
              type='button'
              onClick={() => setSwitchPreview(switchPreview => !switchPreview)}
            >
              {switchPreview
                ? (
                  <EyeIcon />
                  )
                : (
                  <EyeOffIcon />
                  )}
            </Button>
          </SwitchPreview>
        </Column>
      </Container>
    </Wrapper>
  )
}
