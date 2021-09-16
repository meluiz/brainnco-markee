import { useState } from 'react'

/* ------| Componentes |------ */
import { Button } from 'components/button'
import { FileStats } from 'components/filestats'

/* ------| Estilos |------ */
import {
  Header,
  Logo,
  LogoLink,
  Navigation,
  NavigationActions,
  NavigationHeader,
  NavigationButtonIcon,
  NavigationTitle,
  Wrapper,
  NavigationButtonText,
  NavigationList,
  NavigationListItem,
  NavigationListLink,
  NavigationListLinkFilename,
  NavigationListLinkStats,
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
          <Button styleType='primary'>
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
          </Button>
        </NavigationActions>
        <NavigationList>
          <NavigationListItem>
            <NavigationListLink href='/#'>
              <NavigationListLinkFilename>
                <div className='icon'>
                  <svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M14 2.88062H6C5.46957 2.88062 4.96086 3.09133 4.58579 3.4664C4.21071 3.84147 4 4.35018 4 4.88062V20.8806C4 21.411 4.21071 21.9198 4.58579 22.2948C4.96086 22.6699 5.46957 22.8806 6 22.8806H18C18.5304 22.8806 19.0391 22.6699 19.4142 22.2948C19.7893 21.9198 20 21.411 20 20.8806V8.88062L14 2.88062Z' stroke='currentColor' strokeOpacity='0.65' strokeLinecap='round' strokeLinejoin='round' />
                    <path d='M14 2.88062V8.88062H20' stroke='currentColor' strokeOpacity='0.65' strokeLinecap='round' strokeLinejoin='round' />
                    <path d='M16 13.8806H8' stroke='currentColor' strokeOpacity='0.65' strokeLinecap='round' strokeLinejoin='round' />
                    <path d='M16 17.8806H8' stroke='currentColor' strokeOpacity='0.65' strokeLinecap='round' strokeLinejoin='round' />
                    <path d='M10 9.88062H9H8' stroke='currentColor' strokeOpacity='0.65' strokeLinecap='round' strokeLinejoin='round' />
                  </svg>
                </div>
                <span className='text'>README.md</span>
              </NavigationListLinkFilename>
            </NavigationListLink>
          </NavigationListItem>
          <NavigationListItem>
            <NavigationListLink href='/#'>
              <NavigationListLinkFilename>
                <div className='icon'>
                  <svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M14 2.88062H6C5.46957 2.88062 4.96086 3.09133 4.58579 3.4664C4.21071 3.84147 4 4.35018 4 4.88062V20.8806C4 21.411 4.21071 21.9198 4.58579 22.2948C4.96086 22.6699 5.46957 22.8806 6 22.8806H18C18.5304 22.8806 19.0391 22.6699 19.4142 22.2948C19.7893 21.9198 20 21.411 20 20.8806V8.88062L14 2.88062Z' stroke='currentColor' strokeOpacity='0.65' strokeLinecap='round' strokeLinejoin='round' />
                    <path d='M14 2.88062V8.88062H20' stroke='currentColor' strokeOpacity='0.65' strokeLinecap='round' strokeLinejoin='round' />
                    <path d='M16 13.8806H8' stroke='currentColor' strokeOpacity='0.65' strokeLinecap='round' strokeLinejoin='round' />
                    <path d='M16 17.8806H8' stroke='currentColor' strokeOpacity='0.65' strokeLinecap='round' strokeLinejoin='round' />
                    <path d='M10 9.88062H9H8' stroke='currentColor' strokeOpacity='0.65' strokeLinecap='round' strokeLinejoin='round' />
                  </svg>
                </div>
                <span className='text'>README.md</span>
              </NavigationListLinkFilename>
            </NavigationListLink>
          </NavigationListItem>
          <NavigationListItem>
            <NavigationListLink href='/#'>
              <NavigationListLinkFilename>
                <div className='icon'>
                  <svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M14 2.88062H6C5.46957 2.88062 4.96086 3.09133 4.58579 3.4664C4.21071 3.84147 4 4.35018 4 4.88062V20.8806C4 21.411 4.21071 21.9198 4.58579 22.2948C4.96086 22.6699 5.46957 22.8806 6 22.8806H18C18.5304 22.8806 19.0391 22.6699 19.4142 22.2948C19.7893 21.9198 20 21.411 20 20.8806V8.88062L14 2.88062Z' stroke='currentColor' strokeOpacity='0.65' strokeLinecap='round' strokeLinejoin='round' />
                    <path d='M14 2.88062V8.88062H20' stroke='currentColor' strokeOpacity='0.65' strokeLinecap='round' strokeLinejoin='round' />
                    <path d='M16 13.8806H8' stroke='currentColor' strokeOpacity='0.65' strokeLinecap='round' strokeLinejoin='round' />
                    <path d='M16 17.8806H8' stroke='currentColor' strokeOpacity='0.65' strokeLinecap='round' strokeLinejoin='round' />
                    <path d='M10 9.88062H9H8' stroke='currentColor' strokeOpacity='0.65' strokeLinecap='round' strokeLinejoin='round' />
                  </svg>
                </div>
                <span className='text'>READMEdasdasdasdasdsadsadasdsadas.md</span>
              </NavigationListLinkFilename>
              <NavigationListLinkStats>
                <Button styleType='none'>
                  <svg width='11' height='10' viewBox='0 0 11 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M1.5 0.880615L9.18 8.56061M9.5 0.880615L1.82 8.56061' stroke='white' strokeWidth='1.5' strokeLinecap='round' />
                  </svg>
                </Button>
              </NavigationListLinkStats>
            </NavigationListLink>
          </NavigationListItem>
        </NavigationList>
      </Navigation>
    </Wrapper>
  )
}
