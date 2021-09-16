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

export const NavigationHeader = styled.div`${({ theme }) => css`
  width: 100%;
  height: 24px;
  display: flex;
  align-items: center;
  padding: 0 14px;
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 4px;
    position: absolute;
    left: 0; top: 50%;
    border-radius: 999px;
    background-color: ${theme.colors.primary};
  }
`}`

export const NavigationTitle = styled.div`${({ theme }) => css`
  color: ${theme.colors.white};
  font-size: 1.6rem;
  z-index: 1;
  padding: 0 6px;
  background-color: ${theme.colors.black};
`}`

export const NavigationActions = styled.div`
  min-height: 0;
  padding: 24px 0;
  position: relative;

  button { width: 100% }
`

export const NavigationButtonIcon = styled.div`${({ theme }) => css`
  color: ${theme.colors.lightBlack};
  display: flex;
  align-items: center;
  justify-content: center;
`}`

export const NavigationButtonText = styled.div`${({ theme }) => css`
  color: ${theme.colors.lightBlack};
`}`

export const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 8px;
`

export const NavigationListItem = styled.li`
  width: 100%;
  position: relative;
`

export const NavigationListLink = styled.a`${({ theme }) => css`
  width: 100%;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex-direction: row;
  padding: 8px 14px;
  text-decoration: none;
  position: relative;
  
  &:hover {
    background-color: ${theme.colors.lightBlack};
  }

  &:focus {
    outline: none;
  }
`}`

export const NavigationListLinkFilename = styled.div`${({ theme }) => css`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
  overflow: hidden;

  .icon,
  .text {
    color: rgba(255, 255, 255, .65);
  }

  .text {
    max-width: 100%;
    overflow: hidden;
    position: relative;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  ${NavigationListLink}:hover & {
    .icon,
    .text {
      color: ${theme.colors.white};
    }
  }
`}`

export const NavigationListLinkStats = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  flex-grow: 0;
  position: relative;

  button {
    width: 75%;
    height: 75%;
    display: none;
  }

  ${NavigationListLink}:hover & > button {
    visibility: visible;
    pointer-events: initial;
    display: flex;
  }

  ${NavigationListLink}:hover & > div {
    display: none;
  }
`
