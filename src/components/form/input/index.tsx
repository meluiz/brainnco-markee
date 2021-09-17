/* ------| Estilos |------ */
import { Inpt } from './styles'

/* ------| Tipagem |------ */
type InputType = {
  id?: string
  name?: string
  value?: string
  placeholder?: string
  type: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' |
        'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' |
        'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' |
        'time' | 'url' | 'week'
}

export const Input = ({ id, name, type, value, placeholder }: InputType) => {
  return (
    <Inpt
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      defaultValue={value}
    />
  )
}
