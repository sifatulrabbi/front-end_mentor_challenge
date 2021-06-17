import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Container } from '../../GlobalStyles'

export const HeroContainer = styled(Container)`
   grid-template-columns: 1.2fr 1fr;

   @media screen and (max-width: 1130px) {
      grid-template-columns: 1fr;
   }

   ${Container}
`

export const HeroImageContainer = styled.div`
   width: 100%;
   height: 100%;
`

export const HeroTextContainer = styled.div`
   padding: 60px 60px;
   line-height: 1.8;

   @media screen and (max-width: 950px) {
      padding: 60px 30px;
   }
`

export const HeroCTABtn = styled(Link)`
   margin: 50px 0;
   margin-bottom: 20px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   color: hsl(0, 0%, 27%);
   font-weight: 600;
   text-decoration: none;
   text-align: start;
   letter-spacing: 14px;

   &:hover {
      color: hsl(0, 0%, 47%);
   }

   @media screen and (max-width: 340px) {
      flex-direction: column;
   }
`

export const SlideBtnContainer = styled.div`
   position: absolute;
   display: flex;
   justify-content: center;
   align-items: center;
   bottom: 0;
   right: 0;
   transform: translateX(100%);

   @media screen and (max-width: 1130px) {
      transform: translateX(0);
   }
`

export const BtnWrapper = styled.div`
   padding: 20px 25px;
   background-color: hsl(0, 0%, 17%);
   cursor: pointer;
   color: white;
   font-size: 1.2rem;
   margin: 0 -1px;

   &:hover {
      background-color: hsl(0, 0%, 27%);
   }
`
