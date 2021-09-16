import { ReactNode } from 'react'

/* ------| Tipagem |------ */
type ButtonType = {
  children?: ReactNode
}

export const Button = ({ children }: ButtonType) => {
  return (
    <button />
  )
}
