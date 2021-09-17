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
  gap: 40px;
  margin: 0 auto;
  padding: 8px 24px;
`

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 0;
`

export const HeaderIcon = styled.div`${({ theme }) => css`
  flex-grow: 0;
  flex-shrink: 0;
  color: ${theme.colors.primary};
`}`
