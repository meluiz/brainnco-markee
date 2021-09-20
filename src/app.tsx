import { useState } from 'react'
import { useFiles } from 'hooks/files'

/* ------| Componentes |------ */
import { Bar } from 'components/bar'
import { Content } from 'components/content'
import { EmptyContent } from 'components/empty'
import { Sidebar } from 'components/sidebar'

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
  const [toggleMenu, setToggleMenu] = useState<boolean>(false)
  const [switchPreview, setSwitchPreview] = useState<boolean>(false)
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
      <Bar
        switchPreview={switchPreview}
        setToggleMenu={setToggleMenu}
        setSwitchPreview={setSwitchPreview}
      />
      <Container>
        <Sidebar
          files={files}
          isToggleMenu={toggleMenu}
          setToggleMenu={setToggleMenu}
          handleActiveFile={handleActiveFile}
          handleCreateFile={handleCreateFile}
          handleDeleteFile={handleDeleteFile}
        />
        {files.length > 0
          ? <Content
              file={files.find(file => file.active === true)}
              inputRef={inputRef}
              textareaRef={textareaRef}
              switchPreview={switchPreview}
              handleUpdateFilename={handleUpdateFilename}
              handleUpdateContent={handleUpdateContent}
            />
          : <EmptyContent />}
      </Container>
    </Wrapper>
  )
}
