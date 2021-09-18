import { RefObject } from 'react'

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

/* ------| Tipagem |------ */
type ContentType = {
  textareaRef: RefObject<HTMLTextAreaElement>
}

export const Content = ({ textareaRef }: ContentType) => {
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
            <Textarea reference={textareaRef} resize='none' />
          </Editor>
          <Preview>
            olá
          </Preview>
        </MarkdownEditor>
      </Container>
    </Wrapper>
  )
}
