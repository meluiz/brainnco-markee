import { ReactNode } from 'react'

/* ------| Estilos |------ */
import { Area } from './styled'

/* ------| Tipagem |------ */
type TextareaType = {
  children?: ReactNode
  resize?: 'none' | 'both' | 'horizontal' | 'vertical' | 'block' | 'inline'
}

export const Textarea = ({ children, resize }: TextareaType) => {
  return (
    <Area resize={resize}>{children}</Area>
  )
}
