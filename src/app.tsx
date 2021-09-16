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
  status: 'none' | 'editing' | 'saving' | 'saved'
}

export const App = () => {
  return (
    <Wrapper>
      <Container>
        <Sidebar />
        <Content />
      </Container>
    </Wrapper>
  )
}
