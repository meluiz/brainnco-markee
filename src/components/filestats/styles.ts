import styled, { css } from 'styled-components'

export const Wrapper = styled.div`${({ theme }) => css`
  width: 75%;
  height: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  position: absolute;
  pointer-events: none;
  color: ${theme.colors.primary};
`}`

export const Editing = styled.span`${({ theme }) => css`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background-color: ${theme.colors.primary};
`}`
