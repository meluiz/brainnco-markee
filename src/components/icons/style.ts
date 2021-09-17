import styled from 'styled-components'

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
