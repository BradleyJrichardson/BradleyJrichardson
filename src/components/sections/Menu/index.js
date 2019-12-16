import React from 'react'
import { Link } from 'gatsby'
import { Container, SmallButton } from 'components/common'
import { Wrapper, ButtonWrapper } from './styles'
import AnchorLink from 'react-anchor-link-smooth-scroll'


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
			</ButtonWrapper>
	</Wrapper>
)

