import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavContainer = styled.section`
   z-index: 11;
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   height: 100px;
   max-width: 700px;
   display: flex;
   justify-content: flex-start;
   align-items: center;
   color: white;

   @media screen and (max-width: 950px) {
      width: 100%;
      justify-content: center;
      margin: 0 auto;
   }
`

export const NavLogoContainer = styled.div`
   margin: 0 40px;
`

export const NavLogo = styled(Link)`
   font-size: 1.4rem;
   text-decoration: none;
   font-weight: 700;
`

export const NavMenu = styled.ul`
   display: flex;
   justify-content: center;
   align-items: center;
   list-style-type: none;
   height: 100px;

   @media screen and (max-width: 950px) {
      position: absolute;
      padding-left: 15px;
      top: 0;
      left: 0;
      right: 0;
      max-width: 100vw;
      color: black;
      background-color: white;
      transition: 300ms ease-in-out;
      transform: ${({ click }) => (click ? 'translateY(0)' : 'translateY(-100%)')};
   }
`
export const NavLink = styled(Link)`
   position: relative;
   padding: 10px;
   text-decoration: none;
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
   font-weight: 600;

   &::before {
      content: '';
      position: absolute;
      background-color: white;
      height: 3px;
      width: 23px;
      bottom: 0;
      transition: 200ms ease-in-out;
      transform: scaleX(0);
   }

   @media screen and (max-width: 950px) {
      &::before {
         background-color: black;
      }
   }

   &:hover::before {
      transform: scaleX(1);
   }
`
export const HamMenu = styled.div`
   z-index: 10;
   position: absolute;
   top: 35px;
   left: 20px;
   cursor: pointer;
   width: max-content;
   height: max-content;

   @media screen and (min-width: 950px) {
      display: none;
   }
`
