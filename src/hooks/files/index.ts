import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import localForage from 'localforage'

/* ------| Tipagem |------ */
import { FileType } from 'app'

export const useFiles = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const [files, setFiles] = useState<FileType[]>([])

  useEffect(() => {
    const activeFile = files.find(file => file.active === true)

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

  useEffect(() => {
    const activeFile = files.find(file => file.active === true)
    const historyFile =
      (id: String) =>
        window.history.pushState(null, '', `/file/${id}`)

    if (activeFile) historyFile(`${activeFile.id}`)
  }, [files])

  useEffect(() => {
    const Storage = async (name: string) => {
      const files = await localForage.getItem<FileType[]>(name)

      if (files) return setFiles(files)
      return handleCreateFile()
    }

    Storage('md-files')
  }, [])

  useEffect(() => {
    const activeFile = files.find(file => file.active === true)

    if (!activeFile || activeFile?.status !== 'saved') return

    const Storage =
      async (name: string, value: FileType[]) =>
        await localForage.setItem(name, value)

    Storage('md-files', files)
  }, [files])

  const handleCreateFile = () => {
    inputRef.current?.focus()

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
    event.preventDefault()

    const activeFile = files.find(file => file.active === true)

    setFiles((oldFiles) =>
      oldFiles.filter(file => file.id !== id)
        .map((file, index) => {
          if (index === 0 && activeFile?.id === id) {
            return {
              ...file,
              active: true,
            }
          }
          return file
        }),
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

  return {
    files,
    inputRef,
    textareaRef,
    handleCreateFile,
    handleActiveFile,
    handleDeleteFile,
    handleUpdateFilename,
    handleUpdateContent,

  }
}
