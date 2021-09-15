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

export const Header = styled.header`
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 80px;
`