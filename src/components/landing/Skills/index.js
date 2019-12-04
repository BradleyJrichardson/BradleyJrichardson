import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button, SkillsWrapper, SkillsContainer, Details, Thumbnail } from 'components/common'
import dev from 'assets/illustrations/skills.svg'

export const Skills = () => (
  <SkillsWrapper id="about">
    <SkillsContainer as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
      </Thumbnail>
      <Details>
        <h1>Hi There!</h1>
        <p>
        From working on the Migration dashboard which needed to process and manipulate large data structures. I have found what I enjoy most, logical programming and solving problems. 
   
        </p>
        <p>
        I love getting a pen and paper out and drawing a diagram that represents the sudo code. 
        </p>
        <p>
        Apart from that I love working in the React ecosystem as it so nice for the developer to achieve anything dreamt up. 
        Deep interest in how everything on the web works, always asking why and google random things as this is an interesting thing we have created. So many nuances and systems at play, I look forward to a career of forever learning. 
        </p>
        <Button as={AnchorLink} href="#contact">
          Hire me
        </Button>
      </Details>
    </SkillsContainer>
  </SkillsWrapper>
)
