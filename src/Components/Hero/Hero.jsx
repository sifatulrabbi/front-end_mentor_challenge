import React, { useState } from 'react'
import { HeroContainer, HeroImageContainer, HeroCTABtn, SlideBtnContainer, BtnWrapper } from './Hero.elements'
import { Image, DescContainer, DescText, Title } from '../../GlobalStyles'
import { BsArrowRight, BsChevronRight, BsChevronLeft } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'
import useIsMobile from '../../Hooks/useIsMobile'
import { slides } from './Hero.data'

function Hero() {
   const isMobile = useIsMobile()

   const [activeIndex, setActiveIndex] = useState(1)

   function handleSlideRight() {
      activeIndex === 3 ? setActiveIndex(1) : setActiveIndex(activeIndex + 1)
   }

   function handleSlideLeft() {
      activeIndex === 1 ? setActiveIndex(3) : setActiveIndex(activeIndex - 1)
   }

   return (
      <>
         {slides.map((data) => (
            <HeroContainer key={data.id} show={data.slide_index === activeIndex}>
               <HeroImageContainer>
                  <Image src={isMobile ? data.image_mbl : data.image_dsk} alt='hero' />

                  <SlideBtnContainer>
                     <BtnWrapper onClick={handleSlideRight}>
                        <BsChevronLeft />
                     </BtnWrapper>
                     <BtnWrapper onClick={handleSlideLeft}>
                        <BsChevronRight />
                     </BtnWrapper>
                  </SlideBtnContainer>
               </HeroImageContainer>

               <DescContainer>
                  <div>
                     <Title>{data.title}</Title>
                     <DescText>{data.description}</DescText>
                  </div>

                  <HeroCTABtn to='/'>
                     SHOW MORE
                     <IconContext.Provider value={{ style: { color: 'inherit', height: '35px', width: 'auto' } }}>
                        <BsArrowRight />
                     </IconContext.Provider>
                  </HeroCTABtn>
               </DescContainer>
            </HeroContainer>
         ))}
      </>
   )
}

export default Hero
