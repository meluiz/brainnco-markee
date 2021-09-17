/* ------| Estilos |------ */
import { Area } from './styled'

/* ------| Tipagem |------ */
type TextareaType = {
  resize?: 'none' | 'both' | 'horizontal' | 'vertical' | 'block' | 'inline'
}

export const Textarea = ({ resize }: TextareaType) => {
  return (
    <Area resize={resize} defaultValue='## Bootcamp Brainn Co.' />
  )
}
