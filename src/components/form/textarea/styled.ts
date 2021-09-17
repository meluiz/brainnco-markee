import styled, { css } from 'styled-components'

/* ------| Tipagem |------ */
type TextareaType = {
  resize?: 'none' | 'both' | 'horizontal' | 'vertical' | 'block' | 'inline'
}

export const Area = styled.textarea<TextareaType>`${({ resize }) => css`
  min-width: 112px;
  border: 0;
  background-color: transparent;
  font-family: 'Inconsolata', 'Courier New', Courier, monospace;

  ${resize && css`
    resize: ${resize};
  `}
`}`
