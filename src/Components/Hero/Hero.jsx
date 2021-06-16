import React from 'react'
import { HeroContainer, HeroImageContainer, HeroCTABtn, SlideBtnContainer, BtnWrapper } from './Hero.elements'
import { Title, DescContainer, DescText, Image } from '../../GlobalStyles'

import useIsMobile from '../../Hooks/useIsMobile'
import { data } from './Hero.data'
import { BsChevronRight, BsChevronLeft, BsArrowRight } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'

function Hero() {
   const mobile_img = require('../../images/mobile-image-hero-1.jpg').default
   const desktop_img = require('../../images/desktop-image-hero-1.jpg').default

   const imageLink = useIsMobile()

   return (
      <HeroContainer>
         <div style={{ position: 'relative', zIndex: '1' }}>
            <HeroImageContainer>
               <Image src={imageLink ? mobile_img : desktop_img} alt='hero 1' />
            </HeroImageContainer>

            <SlideBtnContainer>
               <BtnWrapper>
                  <BsChevronLeft />
               </BtnWrapper>
               <BtnWrapper>
                  <BsChevronRight />
               </BtnWrapper>
            </SlideBtnContainer>
         </div>

         <DescContainer>
            {data.map((data) => (
               <div key={data.id}>
                  <Title>{data.title}</Title>
                  <DescText>{data.description}</DescText>
               </div>
            ))}
            <HeroCTABtn to='/'>
               SHOW MORE
               <IconContext.Provider value={{ style: { color: 'inherit', height: '35px', width: 'auto' } }}>
                  <BsArrowRight />
               </IconContext.Provider>
            </HeroCTABtn>
         </DescContainer>
      </HeroContainer>
   )
}

export default Hero
