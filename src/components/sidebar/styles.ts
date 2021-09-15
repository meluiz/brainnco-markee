import styled, { css } from 'styled-components'

export const Wrapper = styled.aside`${({ theme }) => css`
  width: 332px;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: 0;
  position: relative;
  background-color: ${theme.colors.black};
`}`
