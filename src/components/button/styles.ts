import styled, { css } from 'styled-components'

type BtnType = {
  styleType: 'primary' | 'simple'
}

export const Btn = styled.button<BtnType>`${({ theme, styleType }) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.6rem;
  font-family: 'DM Sans', Arial, Helvetica, sans-serif;

  ${styleType === 'simple' && css`
    color: white;
    background-color: transparent;

    &:active { transform: scale(.97) }
    &:hover { background: rgba(255,255,255,.06) }
  `}

  ${styleType === 'primary' && css`
    min-height: 40px;
    padding: 8px 0;
    transition: filter 150ms ease;
    background-color: ${theme.colors.primary};

    &:active { transform: scale(.97) }
    &:hover { filter: brightness(.9) }
  `}
`}`
