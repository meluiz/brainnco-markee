import styled, { css } from 'styled-components'

/* ------| Tipagem |------ */
type ColumnType = {
  posXItems?: 'start' | 'center' | 'end'
  posYItems?: 'start' | 'center' | 'end'
}

export const Wrapper = styled.div`${({ theme }) => css`
  width: 100%;
  height: 56px;
  display: block;
  position: relative;
  top: 0; left: 0;
  background-color: ${theme.colors.black};

  @media screen and (min-width: 1024px) {
    display: none;
  }
`}`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`

export const Column = styled.div<ColumnType>`
  flex: 1;
  height: 100%;
  display: flex;
  ${({ posYItems }) => posYItems && css`
    align-items: ${
      posYItems === 'center' ? posYItems : `flex-${posYItems}`
    };
  `}
  ${({ posXItems }) => posXItems && css`
    justify-content: ${
      posXItems === 'center' ? posXItems : `flex-${posXItems}`
    };
  `}
  position: relative;
`

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  position: relative;
  cursor: pointer;
`

export const ToggleMenu = styled.div`${({ theme }) => css`
  display: flex;
  align-items: center;
  position: relative;

  button {
    color: ${theme.colors.white};
    background-color: transparent;

    &:focus,
    &:hover { background-color: transparent }
  }
`}`

export const Logo = styled.figure`
  width: 28px;
  position: relative;

  img {
    width: 100%;
  }
`
