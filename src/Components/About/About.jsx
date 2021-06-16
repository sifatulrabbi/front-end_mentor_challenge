import React from 'react'
import { AboutTitle } from './About.elements'
import { Container, DescContainer, DescText, Image } from '../../GlobalStyles'
import { data } from './About.data'

function About() {
   return (
      <Container>
         <div>
            <Image src={data.image_dark} alt='about' />
         </div>
         <DescContainer>
            <AboutTitle>{data.text.title}</AboutTitle>
            <DescText>{data.text.description}</DescText>
         </DescContainer>
         <div>
            <Image src={data.image_light} alt='about' />
         </div>
      </Container>
   )
}

export default About
