import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import { Wrapper, IntroWrapper, Details, ButtonWrapper	 } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Welcome!<br></br>I'm Brad</h1>
				<h4>Web Developer</h4>
					<ButtonWrapper>
						<Button as={AnchorLink} href="#about">
							About
						</Button>
						<Button as={AnchorLink} href="#contact">
							Contact
						</Button>
						<Button as={AnchorLink} href="#projects">
							Projects
						</Button>
					</ButtonWrapper>
			</Details>
		</IntroWrapper>
	</Wrapper>
)
