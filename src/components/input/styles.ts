import styled, { css } from 'styled-components'

export const Inpt = styled.input`${({ theme }) => css`
  width: 100%;
  min-height: 40px;
  border: 0;
  font-size: 1.8rem;
  font-weight: 700;
  background-color: transparent;
  color: ${theme.colors.black};
  font-family: 'DM Sans', Arial, Helvetica, sans-serif;
`}`
