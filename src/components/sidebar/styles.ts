import styled, { css } from 'styled-components'

/* ------| Tipagem |------ */
type WrapperType = {
  isVisible: boolean
}

type NavigationListItemType = {
  active: boolean
}

export const Wrapper = styled.aside<WrapperType>`${({ theme, isVisible }) => css`
  width: 100%;
  max-width: 388px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: 0;
  position: absolute;
  top: 0; left: 0;
  background-color: ${theme.colors.black};
  overflow: hidden;
  z-index: 999;
  transition: all 300ms ease;
  transform: translate3d(-100%, 0, 0);

  ${isVisible && css`
    transform: translate3d(0,0,0);
  `}

  @media screen and (min-width: 1024px) {
    width: initial;
    height: initial;
    grid-area: Sidebar;
    position: relative;
    transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`}`

export const Header = styled.header`
  min-height: 0;
  display: none;

  @media screen and (min-width: 1024px) { 
    display: flex;
    align-items: center;
    flex-shrink: 0;
    justify-content: center;
    padding: 36px;
  }
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
  overflow: hidden;
`

export const NavigationHeader = styled.div`${({ theme }) => css`
  width: 100%;
  height: 24px;
  display: none;
  flex-shrink: 0;
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

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
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
  flex-shrink: 0;
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
  overflow-x: hidden;
  overflow-y: auto;

  scrollbar-width: thin;
  scrollbar-color: #293445 #1e293b;

  ::-webkit-scrollbar { width: 10px }
  ::-webkit-scrollbar-track { background: #1e293b }
  ::-webkit-scrollbar-thumb { background: #293445 }
  ::-webkit-scrollbar-thumb:hover { background: #293445 }
`

export const NavigationListItem = styled.li<NavigationListItemType>`${({ theme, active }) => css`
  width: 100%;
  position: relative;

  ${active && css`
    & ${NavigationListLink} {
      background-color: ${theme.colors.lightBlack};

      &:hover ${NavigationListLinkFilename} .icon,
      ${NavigationListLinkFilename} .icon {
        color: ${theme.colors.primary};
      }
    }
  `}
`}`

export const NavigationListLink = styled.a`${({ theme }) => css`
  width: 100%;
  min-height: 48px;
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
    visibility: hidden;
    opacity: 0;
  }
`
