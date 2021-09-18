import { Dispatch, SetStateAction } from 'react'
import { v4 as uuidv4 } from 'uuid'

/* ------| Componentes |------ */
import { Button } from 'components/button'
import { FileStats } from 'components/filestats'
import { FileIcon } from 'components/icons'

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
  handleCreateFile: () => void
}

export const Sidebar = ({
  files,
  handleCreateFile,
}: SidebarType) => {
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
          <Button styleType='primary' onClick={handleAddNewFile}>
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
          {files && files.map((file) => (
            <NavigationListItem key={file.id} active={file.active}>
              <NavigationListLink href='/#'>
                <NavigationListLinkFilename>
                  <div className='icon'>
                    <FileIcon />
                  </div>
                  <span className='text'>{file.name}</span>
                </NavigationListLinkFilename>
                {file.active && (
                  <NavigationListLinkStats>
                    <Button styleType='none'>
                      <svg width='11' height='10' viewBox='0 0 11 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M1.5 0.880615L9.18 8.56061M9.5 0.880615L1.82 8.56061' stroke='white' strokeWidth='1.5' strokeLinecap='round' />
                      </svg>
                    </Button>
                    <FileStats stats={file.status} />
                  </NavigationListLinkStats>
                )}
              </NavigationListLink>
            </NavigationListItem>
          ))}
        </NavigationList>
      </Navigation>
    </Wrapper>
  )
}
