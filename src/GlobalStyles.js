import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
   * {
      box-sizing: border-box;
      font-size: inherit;
      color: inherit;
      font-family: inherit;
      margin: 0;
      padding: 0;
   }

   body {
      max-width: 100vw;
      min-height: 100vh;
      font-family: 'Spartan', sans-serif;
      font-weight: 500;
      font-size: 14px;
   }
`

export const Container = styled.section`
   z-index: 1;
   max-width: 100vw;
   width: 100%;
   height: max-content;
   display: grid;
   grid-template-columns: auto auto auto;
   overflow-x: hidden;
   text-align: start;

   @media screen and (max-width: 1130px) {
      grid-template-columns: 1fr;
      text-align: center;
   }
`

export const DescContainer = styled.div`
   padding: 60px 60px;
   line-height: 1.8;

   @media screen and (max-width: 950px) {
      padding: 60px 30px;
   }
`

export const Title = styled.h1`
   margin-bottom: 30px;
   font-size: 1.6rem;
   font-weight: 600;
   color: hsl(0, 0%, 27%);
`

export const DescText = styled.p`
   display: inline-block;
   color: hsl(0, 0%, 47%);
`

export const Image = styled.img`
   width: 100%;
   height: 100%;
`
export const Overlay = styled.div`
   position: fixed;
   top: 0;
   right: 0;
   height: 100vh;
   width: 100vw;
   background-color: ${({ overlay }) => (overlay ? 'rgba(0, 0, 0, 0.4)' : 'transparent')};
   z-index: 9;
   pointer-events: ${({ overlay }) => (overlay ? 'all' : 'none')};
   transition: 300ms ease-in-out;
`

export default GlobalStyles
