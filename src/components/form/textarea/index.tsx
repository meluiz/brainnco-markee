import { ChangeEvent, RefObject } from 'react'

/* ------| Estilos |------ */
import { Area } from './styled'

/* ------| Tipagem |------ */
type TextareaType = {
  value?: string,
  placeholder?: string,
  reference?: RefObject<HTMLTextAreaElement>
  onChange?: (event?: ChangeEvent<HTMLTextAreaElement>) => void
  resize?: 'none' | 'both' | 'horizontal' | 'vertical' | 'block' | 'inline'
}

export const Textarea = ({
  value,
  placeholder,
  resize,
  reference,
  onChange,
}: TextareaType) => {
  return (
    <Area
      ref={reference}
      resize={resize}
      placeholder={placeholder}
      defaultValue={value}
      onChange={onChange}
    />
  )
}
