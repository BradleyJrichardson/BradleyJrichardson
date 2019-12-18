import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'components/sections/Menu'
import { Nav } from 'components/sections/Nav'
import { Container, Button } from 'components/common'
import { Wrapper, IntroWrapper, Details, ButtonWrapper } from './styles'



export const Intro = () => (
	<Wrapper as={Container} id="intro">
		<Nav />
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Bradley Richardson</h1>
				<h4>Full Stack Developer</h4>
					<ButtonWrapper>
						<Button as={AnchorLink} href="#projects">
							Press me
						</Button>
					</ButtonWrapper>
			</Details>
		</IntroWrapper>

	</Wrapper>
)
