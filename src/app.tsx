import { useState } from 'react'

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
  const [files, setFiles] = useState<FileType[]>([
    {
      id: '11d6b24b-a886-43e1-8b8f-bfd6d035ea96',
      name: 'None.md',
      content: '',
      active: true,
      status: 'saved',
    },
  ])
  return (
    <Wrapper>
      <Container>
        <Sidebar files={files} setFiles={setFiles} />
        <Content />
      </Container>
    </Wrapper>
  )
}
