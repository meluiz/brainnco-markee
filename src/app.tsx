import { useState, useRef } from 'react'

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

  return (
    <Wrapper>
      <Container>
        <Sidebar files={files} setFiles={setFiles} />
        <Content />
      </Container>
    </Wrapper>
  )
}
