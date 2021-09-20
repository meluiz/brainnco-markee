import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: block;
  position: relative;
  overflow: hidden;
  font-size: 1.6rem;
`

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 332px 1fr;
    grid-template-areas: 'Sidebar Content';
  }
`
