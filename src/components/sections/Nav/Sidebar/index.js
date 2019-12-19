import React from 'react'
import { Wrapper, LinkWrapper } from './styles'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SmallButton } from 'components/common'
import Resume from 'assets/resume/bradley-richardson.pdf'

const Sidebar = ({ sidebar, toggle }) => (
	<Wrapper active={sidebar} onClick={toggle}>
		<LinkWrapper>
				<SmallButton as={AnchorLink} href="#about" onClick={toggle}>
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
			</LinkWrapper>
	</Wrapper>  
)

export default Sidebar
