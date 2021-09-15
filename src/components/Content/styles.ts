import styled, { css } from 'styled-components'

export const Wrapper = styled.main`${({ theme }) => css`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  background-color: ${theme.colors.white};
`}`
