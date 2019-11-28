import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'components/common'
import { Wrapper } from './styles'

const Navbar = () => (
	<Wrapper as={Container}>
		<Link to="/">Bradley Richardson</Link>
	</Wrapper>
)

export default Navbar
