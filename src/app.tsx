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
      status: 'none',
    },
    {
      id: '2844bfce-4eac-46cd-88e7-a51e5bb25bc1',
      name: 'Editing.md',
      content: '',
      active: false,
      status: 'editing',
    },
    {
      id: 'ed0c3bed-d946-4d96-ad3f-d1d57db65181',
      name: 'Saving.md',
      content: '',
      active: false,
      status: 'saving',
    },
    {
      id: 'f8f569ad-dffd-4a37-b9c0-e89bc669a593',
      name: 'Saved.md',
      content: '',
      active: false,
      status: 'saved',
    },
  ])
  return (
    <Wrapper>
      <Container>
        <Sidebar files={files} />
        <Content />
      </Container>
    </Wrapper>
  )
}
