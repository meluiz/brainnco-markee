import { RefObject, useState } from 'react'

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
import { FileType } from 'app'
type ContentType = {
  file?: FileType
  inputRef?: RefObject<HTMLInputElement>
  textareaRef: RefObject<HTMLTextAreaElement>
  handleUpdateFilename: (id: string, event: ChangeEvent<HTMLInputElement>) => void
}

export const Content = ({ file, inputRef, textareaRef }: ContentType) => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <HeaderIcon>
            <FileIcon size={28} />
          </HeaderIcon>
          <Input
            type='text'
            reference={inputRef}
            value={file?.name}
          />
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
