import { ReactNode } from 'react'

/* ------| Estilos |------ */
import { Btn } from './styles'

/* ------| Tipagem |------ */
type ButtonType = {
  children?: ReactNode
  type?: 'button' | 'submit' | 'reset'
  styleType: 'primary' | 'none'
  onClick?: () => void
}

export const Button = ({ children, type = 'button', styleType, onClick }: ButtonType) => {
  return (
    <Btn styleType={styleType} type={type} onClick={onClick}>
      {children}
    </Btn>
  )
}
