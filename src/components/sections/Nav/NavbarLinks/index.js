import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SmallButton } from 'components/common'
import { Wrapper } from './styles'
import Resume from 'assets/resume/bradley-richardson.pdf'

const NavbarLinks = ({ desktop }) => (
	<Wrapper desktop={desktop}>
				<SmallButton as={AnchorLink} href="#about">
					About
				</SmallButton>
				<SmallButton as={AnchorLink} href="#contact">
					Contact
				</SmallButton>
				<SmallButton as={AnchorLink} href="#projects">
					Projects
				</SmallButton>
				<SmallButton target="_blank" as="a" href={Resume}>
					Resume
				</SmallButton>
				<SmallButton target="_blank" as="a" href="https://github.com/BradleyJrichardson">
					Github
				</SmallButton>
				<SmallButton target="_blank" as="a" href="https://www.linkedin.com/in/bradleyjakerichardson/">
					Linkedin
				</SmallButton>
	</Wrapper>
)

export default NavbarLinks

