import React, { useState } from 'react'
import Hamburger from './Hamburger'
import Sidebar from './Sidebar'
import { Wrapper, Overlay } from './styles'

export const Nav = () => {
	const [sidebar, toggle] = useState(false)
	return (
		<Wrapper>
			<Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
			<Hamburger sidebar={sidebar} toggle={toggle} />
			<Sidebar sidebar={sidebar} toggle={() => toggle(!sidebar)} />
		</Wrapper>
	)
}
