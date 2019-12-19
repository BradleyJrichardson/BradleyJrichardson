import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SmallButton } from 'components/common'
import { Wrapper } from './styles'
import Resume from 'assets/resume/bradley-richardson.pdf'

const NavbarLinks = ({ desktop, toggle }) => (
	<Wrapper desktop={desktop}>
				<SmallButton as={AnchorLink} href="#about" onClick={toggle}>
					About
				</SmallButton>
				<SmallButton as={AnchorLink} href="#contact" onClick={toggle}>
					Contact
				</SmallButton>
				<SmallButton as={AnchorLink} href="#projects" onClick={toggle}>
					Projects
				</SmallButton>
				<SmallButton target="_blank" as="a" href={Resume} onClick={toggle}>
					Resume
				</SmallButton>
				<SmallButton target="_blank" as="a" href="https://github.com/BradleyJrichardson" onClick={toggle}>
					Github
				</SmallButton>
				<SmallButton target="_blank" as="a" href="https://www.linkedin.com/in/bradleyjakerichardson/" onClick={toggle}>
					Linkedin
				</SmallButton>
	</Wrapper>
)

export default NavbarLinks

