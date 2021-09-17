import styled, { css } from 'styled-components'

export const Inpt = styled.input`${({ theme }) => css`
  min-width: 112px;
  min-height: 40px;
  border: 0;
  font-size: 1.6rem;
  background-color: transparent;
  color: ${theme.colors.black};
  font-family: 'DM Sans', Arial, Helvetica, sans-serif;
`}`
