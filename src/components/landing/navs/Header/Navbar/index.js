import React from 'react'
import { Link } from 'gatsby'
import { Container, SmallButton } from 'components/common'
import { Wrapper } from './styles'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Navbar = () => (
	<Wrapper as={Container}>
		<Link to="/">Bradley Richardson</Link>
			<div>
				<SmallButton as={AnchorLink} href="#about">
					About
				</SmallButton>
				<SmallButton as={AnchorLink} href="#contact">
					Contact
				</SmallButton>
			</div>
	</Wrapper>
)

export default Navbar
