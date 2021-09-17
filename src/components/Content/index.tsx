
/* ------| Componentes |------ */
import { Input } from 'components/form/input'
import { Textarea } from 'components/form/textarea'
import { FileIcon } from 'components/icons'

/* ------| Estilos |------ */
import {
  Container,
  Editor,
  Header,
  HeaderIcon,
  MarkdownEditor,
  Preview,
  Wrapper,
} from './styles'

export const Content = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <HeaderIcon>
            <FileIcon size={28} />
          </HeaderIcon>
          <Input type='text' value='README.md' />
        </Header>
        <MarkdownEditor>
          <Editor>
            <Textarea resize='none' />
          </Editor>
          <Preview>
            olá
          </Preview>
        </MarkdownEditor>
      </Container>
    </Wrapper>
  )
}
