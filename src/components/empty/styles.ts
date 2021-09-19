import styled, { css } from 'styled-components'

export const Wrapper = styled.main`${({ theme }) => css`
  grid-area: Content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background-color: ${theme.colors.white};
`}`

export const Image = styled.img`
  user-select: none;
  pointer-events: none;
  margin-top: -64px;
`

export const Title = styled.h1`
  user-select: none;
  pointer-events: none;
  font-size: 2.4rem;
  font-weight: 700;
  color: rgba(0,0,0,.3);
`
