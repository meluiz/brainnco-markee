import { ChangeEvent, RefObject } from 'react'
import marked from 'marked'
import 'highlight.js/styles/github.css'

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
  textareaRef?: RefObject<HTMLTextAreaElement>
  handleUpdateFilename: (id: string, event: ChangeEvent<HTMLInputElement>) => void,
  handleUpdateContent: (id: string, event: ChangeEvent<HTMLTextAreaElement>) => void,
}

/* ------| Importações Assíncronos |------ */
import('highlight.js').then((highlight) => {
  const hl = highlight.default

  marked.setOptions({
    highlight: (code, language) => {
      if (language && hl.getLanguage(language)) {
        return hl.highlight(code, { language }).value
      }

      return hl.highlightAuto(code).value
    },
  })
})

export const Content = ({
  file,
  inputRef,
  textareaRef,
  handleUpdateFilename,
  handleUpdateContent,
}: ContentType) => {
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
            placeholder='Nomeie seu arquivo....'
            autoFocus
            onChange={(event) =>
              event && file?.id && handleUpdateFilename(file.id, event)}
          />
        </Header>
        <MarkdownEditor isPreview={false}>
          <Editor>
            <Textarea
              reference={textareaRef}
              resize='none'
              value={file?.content}
              placeholder='Era uma vez...'
              onChange={(event) =>
                event && file?.id && handleUpdateContent(file.id, event)}
            />
          </Editor>
          <Preview
            dangerouslySetInnerHTML={{ __html: marked(file?.content || '') }}
          />
        </MarkdownEditor>
      </Container>
    </Wrapper>
  )
}
