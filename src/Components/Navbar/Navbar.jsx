import React, { useState } from 'react'
import { NavContainer, NavLogoContainer, NavLogo, NavMenu, HamMenu, NavLink } from './Navbar.elements'
import { Overlay } from '../../GlobalStyles'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'

function Navbar() {
   const [click, setClick] = useState(false)

   function handleNavClick(link) {
      if (link) {
         setClick(false)
      } else setClick(!click)
   }

   return (
      <>
         <NavContainer>
            <NavLogoContainer>
               <NavLogo to='/'>room</NavLogo>
            </NavLogoContainer>

            <HamMenu onClick={() => handleNavClick(false)}>
               {!click ? (
                  <IconContext.Provider value={{ style: { color: 'white', height: 'auto', width: '25px' } }}>
                     <AiOutlineMenu />
                  </IconContext.Provider>
               ) : (
                  <IconContext.Provider value={{ style: { color: 'black', height: 'auto', width: '25px' } }}>
                     <AiOutlineClose />
                  </IconContext.Provider>
               )}
            </HamMenu>

            <NavMenu click={click}>
               <NavLink to='/' onClick={() => handleNavClick(true)}>
                  home
               </NavLink>
               <NavLink to='/' onClick={() => handleNavClick(true)}>
                  shop
               </NavLink>
               <NavLink to='/' onClick={() => handleNavClick(true)}>
                  about
               </NavLink>
               <NavLink to='/' onClick={() => handleNavClick(true)}>
                  contact
               </NavLink>
            </NavMenu>
         </NavContainer>
         <Overlay overlay={click} onClick={() => handleNavClick(false)} />
      </>
   )
}

export default Navbar
