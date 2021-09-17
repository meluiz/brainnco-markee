import styled, { css } from 'styled-components'

export const Wrapper = styled.main`${({ theme }) => css`
  grid-area: Content;
  position: relative;
  background-color: ${theme.colors.white};
  overflow: hidden;
  overflow-y: auto;

  scrollbar-width: thin;
  scrollbar-color: #c9c8c7 #f1f1f1;

  ::-webkit-scrollbar { width: 10px }
  ::-webkit-scrollbar-track { background: rgba(0,0,0,.06) }
  ::-webkit-scrollbar-thumb { background: rgba(0,0,0,.1) }
  ::-webkit-scrollbar-thumb:hover { background: rgba(0,0,0,.2) }
`}`

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: block;
  position: relative;
  padding: 8px 24px;
`

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  padding: 12px 0;

  input {
    width: 100%;
    font-size: 1.8rem;
    font-weight: 700;
  }
`
export const HeaderIcon = styled.div`${({ theme }) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.primary};
`}`

export const MarkdownEditor = styled.div`
  width: 100%;
  min-height: calc(100vh - 96px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'Editor Preview';
  padding: 12px 0;
`

export const Editor = styled.div`
  grid-area: Editor;
  padding-right: 12px;
  border-right: 1px solid rgba(30, 41, 59, 0.12);
  
  textarea {
    width: 100%;
    min-height: 100%;
    line-height: 1.5;
  }
`

export const Preview = styled.div`
  padding-left: 12px;
  grid-area: Preview;
`
