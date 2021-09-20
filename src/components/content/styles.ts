import styled, { css } from 'styled-components'

type MarkdownEditorType = {
  isPreview: boolean
}

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

export const MarkdownEditor = styled.div<MarkdownEditorType>`
  width: 100%;
  height: calc(100vh - 96px);

  ${({ isPreview }) => isPreview
  ? css`
      ${Editor} { display: none }
      ${Preview} { display: block }
    `
  : css`
      ${Editor} { display: block }
      ${Preview} { display: none }
  `}
  
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'Editor Preview';
    padding: 12px 0;

    ${({ isPreview }) => isPreview
    ? css`
        ${Editor} { display: block }
        ${Preview} {display: block }
      `
    : css`
        ${Editor} { display: block }
        ${Preview} { display: block }
    `}
  }
`

export const Editor = styled.div`
  width: 100%;
  height: 100%;

  @media screen and (min-width: 1024px) {
    grid-area: Editor;
    padding-right: 12px;
    border-right: 1px solid rgba(30, 41, 59, 0.12);
  }
  
  textarea {
    width: 100%;
    min-height: 100%;
    line-height: 1.5;
  }
`

export const Preview = styled.div`
  word-break: break-all;
  line-height: 1.5;

  @media screen and (min-width: 1024px) {
    padding-left: 12px;
    grid-area: Preview;
  }

  h1, h2,
  h3, h4,
  h5, h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    padding-bottom: .96rem;
  }

  h1, h2 { border-bottom: 1px solid rgba(0,0,0,.06) }
  h1 { font-size: 2.4rem }
  h2 { font-size: 2rem }
  h3 { font-size: 1.8rem }
  h4 { font-size: 1.6rem }
  h5 { font-size: 1.4rem }
  h6 { font-size: 1.2rem }

  a {
    color: #58a6ff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  ul, ol { padding-left: 32px }
  ul { list-style: disc }
  ol { list-style: decimal }

  strong { font-weight: 700 }
  em { font-style: italic }

  p code {
    border-radius: 2px;
    padding: 2px 6px;
    font-family: 'Inconsolata', 'Courier New', Courier, monospace;
    background-color: rgba(0,0,0,.03);
  }

  pre {
    padding: 16px;
    overflow: auto;
    background-color: rgba(0,0,0,.03);
    border-radius: 6px;
    margin: 12px 0;
    font-size: 1.5rem;
    font-family: 'Inconsolata', 'Courier New', Courier, monospace;
  }
`
