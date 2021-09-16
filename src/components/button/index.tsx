import { ReactNode } from 'react'

/* ------| Estilos |------ */
import { Btn } from './styles'

/* ------| Tipagem |------ */
type ButtonType = {
  children?: ReactNode
}

export const Button = ({ children }: ButtonType) => {
  return (
    <Btn>
      {children}
    </Btn>
  )
}
