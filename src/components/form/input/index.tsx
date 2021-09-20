import { ChangeEvent, RefObject } from 'react'

/* ------| Estilos |------ */
import { Inpt } from './styles'

/* ------| Tipagem |------ */
type InputType = {
  id?: string
  name?: string
  value?: string
  placeholder?: string
  autoFocus?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  reference?: RefObject<HTMLInputElement>
  type: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' |
        'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' |
        'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' |
        'time' | 'url' | 'week'
}

export const Input = ({
  id,
  name,
  type,
  value,
  reference,
  onChange,
  placeholder,
  autoFocus,
}: InputType) => {
  return (
    <Inpt
      id={id}
      name={name}
      type={type}
      ref={reference}
      placeholder={placeholder}
      value={`${value}`}
      onChange={onChange}
      autoFocus={autoFocus}
    />
  )
}
