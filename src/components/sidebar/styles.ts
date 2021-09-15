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
  padding: 36px;
`

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const Logo = styled.figure`
  min-height: 0;
  position: relative;

  img {
    max-width: 100%;
  }
`

export const Navigation = styled.nav`
  display: flex;
  padding: 8px 32px;
  flex-direction: column;
  position: relative;
`
