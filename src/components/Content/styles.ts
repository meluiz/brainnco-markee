import styled, { css } from 'styled-components'

export const Wrapper = styled.main`${({ theme }) => css`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  background-color: ${theme.colors.white};
  overflow: hidden;
`}`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 8px 24px;
`

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 8px 0;
`
