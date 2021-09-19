import { useState, useRef, MouseEvent, useEffect, ChangeEvent } from 'react'
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

  useEffect(() => {
    const activeFile = files.find(file => file.active === true)

    if (files.length === 0) handleCreateFile()
    if (!activeFile || activeFile?.status !== 'editing') return

    let timing: ReturnType<typeof setTimeout>
    const handleStatus = () => {
      timing = setTimeout(() => {
        setFiles((oldFiles) => oldFiles.map((file) => {
          if (file.active) {
            return {
              ...file,
              status: 'saving',
            }
          }
          return file
        }))

        setTimeout(() => {
          setFiles((oldFiles) => oldFiles.map((file) => {
            if (file.active) {
              return {
                ...file,
                status: 'saved',
              }
            }
            return file
          }))
        }, 600)
      }, 600)
    }

    handleStatus()
    return () => clearTimeout(timing)
  }, [files])

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
    textareaRef.current?.focus()

    setFiles((oldFiles) => oldFiles.map((file) => ({
      ...file,
      active: file.id === id,
    })))
  }

  const handleDeleteFile = (id: string, event: MouseEvent<HTMLElement>) => {
    event.stopPropagation()

    setFiles((oldFiles) =>
      oldFiles.filter(file => file.id !== id),
    )
  }

  const handleUpdateFilename = (id: string, event: ChangeEvent<HTMLInputElement>) => {
    setFiles((oldFiles) => oldFiles.map((file) => {
      if (file.id === id) {
        return {
          ...file,
          name: event.target.value,
          status: 'editing',
        }
      }

      return file
    }))
  }

  const handleUpdateContent = (id: string, event: ChangeEvent<HTMLTextAreaElement>) => {
    setFiles((oldFiles) => oldFiles.map((file) => {
      if (file.id === id) {
        return {
          ...file,
          content: event.target.value,
          status: 'editing',
        }
      }

      return file
    }))
  }

  return (
    <Wrapper>
      <Container>
        <Sidebar
          files={files}
          handleActiveFile={handleActiveFile}
          handleCreateFile={handleCreateFile}
          handleDeleteFile={handleDeleteFile}
        />
        <Content
          file={files.find(file => file.active === true)}
          textareaRef={textareaRef}
          handleUpdateFilename={handleUpdateFilename}
          handleUpdateContent={handleUpdateContent}
        />
      </Container>
    </Wrapper>
  )
}
