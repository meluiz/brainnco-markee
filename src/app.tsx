/* ------| Componentes |------ */
import { Content } from 'components/content'
import { Sidebar } from 'components/sidebar'
import { useFiles } from 'hooks/files'

/* ------| Estilos |------ */
import { Container, Wrapper } from 'styles/layout'

/* ------| Tipagem |------ */
export type FileType = {
  id: string
  name: string
  content: string
  active: boolean
  status: 'editing' | 'saving' | 'saved'
}

export const App = () => {
  const {
    inputRef,
    textareaRef,
    files,
    handleActiveFile,
    handleCreateFile,
    handleDeleteFile,
    handleUpdateContent,
    handleUpdateFilename,
  } = useFiles()

  return (
    <Wrapper>
      <Container>
        <Sidebar
          files={files}
          handleActiveFile={handleActiveFile}
          handleCreateFile={handleCreateFile}
          handleDeleteFile={handleDeleteFile}
        />
        <Content
          file={files.find(file => file.active === true)}
          textareaRef={textareaRef}
          handleUpdateFilename={handleUpdateFilename}
          handleUpdateContent={handleUpdateContent}
        />
      </Container>
    </Wrapper>
  )
}
