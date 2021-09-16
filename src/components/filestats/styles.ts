import styled, { css } from 'styled-components'

export const Wrapper = styled.div`${({ theme }) => css`
  width: 75%;
  height: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  position: absolute;
  pointer-events: none;
  color: ${theme.colors.primary};
`}`

export const Editing = styled.span`${({ theme }) => css`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background-color: ${theme.colors.primary};
`}`

export const Saving = styled.svg`
  animation: spin 600ms linear infinite;

  @keyframes spin {
    from { transform: rotate(0deg) }
    to { transform: rotate(360deg) }
  }
`

export const Saved = styled.svg`
  animation: saved 600ms ease forwards;
  stroke-dasharray: 25;
  stroke-dashoffset: -25;
  
  @keyframes saved {
    from {
      stroke-dasharray: 25;
      stroke-dashoffset: -25;
    }

    to {
      stroke-dasharray: 25;
      stroke-dashoffset: 0;
    }
  }
`
