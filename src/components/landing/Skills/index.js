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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy.
        </p>
        <Button as={AnchorLink} href="#contact">
          Hire me
        </Button>
      </Details>
    </SkillsContainer>
  </SkillsWrapper>
)
