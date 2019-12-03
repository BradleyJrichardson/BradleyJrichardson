import React from 'react'
import { Wrapper } from './styles'

const Sidebar = ({ sidebar, toggle }) => (
	<Wrapper active={sidebar} onClick={toggle}>
	</Wrapper>
)

export default Sidebar
