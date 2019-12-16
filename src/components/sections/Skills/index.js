import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button, SkillsWrapper, SkillsContainer, Details, Thumbnail, WavingHand } from 'components/common'
import dev from 'assets/illustrations/skills.svg'

export const Skills = () => (
  <SkillsWrapper id="about">
    <SkillsContainer as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m Brad and I’m Developer" />
      </Thumbnail>
      <Details>
        <h1>Good day!<WavingHand>👋</WavingHand></h1>
        <p>
        From working on the Migration dashboard which needed to process and manipulate data structures. I have found what I enjoy most, logical programming and solving problems. 
        </p>
        <p>
        I love getting a pen and paper out and drawing a diagram that represents the sudo code. Discussing all of the possibilties to solve the problem at hand 🤓
        </p>
        <p>
        Looking forward to opening the next chapter of my career 
        </p>

      </Details>
    </SkillsContainer>
  </SkillsWrapper>
)

