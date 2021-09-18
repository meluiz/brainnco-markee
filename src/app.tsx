import { useState, useRef, MouseEvent } from 'react'
import { v4 as uuidv4 } from 'uuid'

/* ------| Componentes |------ */
import { Content } from 'components/content'
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
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [files, setFiles] = useState<FileType[]>([])

  const handleCreateFile = () => {
    setFiles((oldFiles) => (
      oldFiles.map((file) => ({
        ...file,
        active: false,
      })).concat({
        id: uuidv4(),
        name: 'Sem título',
        content: '',
        active: true,
        status: 'saved',
      })
    ))
  }

  const handleActiveFile = (id: string, event: MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setFiles((oldFiles) => oldFiles.map((file) => ({
      ...file,
      active: file.id === id,
    })))
  }

  return (
    <Wrapper>
      <Container>
        <Sidebar files={files} handleActiveFile={handleActiveFile} handleCreateFile={handleCreateFile} />
        <Content textareaRef={textareaRef} />
      </Container>
    </Wrapper>
  )
}
