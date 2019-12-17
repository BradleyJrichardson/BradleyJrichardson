import React from 'react'
import { Link } from 'gatsby'
import { Container, SmallButton, IconButton } from 'components/common'
import { Wrapper, ButtonWrapper } from './styles'
import Resume from 'assets/resume/bradley-richardson.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import linkedin from 'assets/icons/linkedin.svg'


export const Header = () => (
	<Wrapper as={Container}>
		<Link to="/">Bradley Richardson</Link>
			<ButtonWrapper>
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
			</ButtonWrapper>
	</Wrapper>
)

