/* ------| Componentes |------ */
import { Content } from 'components/content'
import { Sidebar } from 'components/sidebar'

/* ------| Estilos |------ */
import { Container, Wrapper } from 'styles/layout'

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
