import { Dispatch, MouseEvent, SetStateAction } from 'react'

/* ------| Componentes |------ */
import { Button } from 'components/button'
import { FileStats } from 'components/filestats'
import { FileIcon, XIcon } from 'components/icons'

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

/* ------| Tipagem |------ */
import { FileType } from 'app'
type SidebarType = {
  files: FileType[]
  isToggleMenu: boolean
  setToggleMenu: Dispatch<SetStateAction<boolean>>
  handleCreateFile: () => void
  handleActiveFile: (id: string, event: MouseEvent<HTMLElement>) => void
  handleDeleteFile: (id: string, event: MouseEvent<HTMLElement>) => void
}

export const Sidebar = ({
  files,
  isToggleMenu,
  setToggleMenu,
  handleCreateFile,
  handleActiveFile,
  handleDeleteFile,
}: SidebarType) => {
  return (
    <Wrapper isVisible={isToggleMenu}>
      <Header>
        <LogoLink href='/'>
          <Logo>
            <img
              src='/img/static/logo-full.svg'
              alt='Markee Logo'
            />
          </Logo>
        </LogoLink>
      </Header>
      <Navigation>
        <NavigationHeader>
          <NavigationTitle>Arquivos</NavigationTitle>
        </NavigationHeader>
        <NavigationActions>
          <Button styleType='primary' onClick={handleCreateFile}>
            <NavigationButtonIcon>
              <svg
                width='14'
                height='14'
                viewBox='0 0 12 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5.66663 1V10.3333'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M1 5.66669H10.3333'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </NavigationButtonIcon>
            <NavigationButtonText>Adicionar arquivo</NavigationButtonText>
          </Button>
        </NavigationActions>
        <NavigationList>
          {files && files.map((file) => (
            <NavigationListItem key={file.id} active={file.active}>
              <NavigationListLink
                href='/#'
                onClick={(event) => {
                  handleActiveFile(file.id, event)
                  setToggleMenu(false)
                }}
              >
                <NavigationListLinkFilename>
                  <div className='icon'>
                    <FileIcon />
                  </div>
                  <span className='text'>{file.name}</span>
                </NavigationListLinkFilename>
                <NavigationListLinkStats>
                  <Button
                    styleType='simple'
                    onClick={(event) => handleDeleteFile(file.id, event)}
                  >
                    <XIcon />
                  </Button>
                  {file.active && <FileStats stats={file.status} />}
                </NavigationListLinkStats>
              </NavigationListLink>
            </NavigationListItem>
          ))}
        </NavigationList>
      </Navigation>
    </Wrapper>
  )
}
