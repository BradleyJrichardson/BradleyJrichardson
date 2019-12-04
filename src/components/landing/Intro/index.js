import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'components/landing/navs'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/dev.svg'
import { Wrapper, IntroWrapper, Details, ButtonWrapper, Thumbnail } from './styles'


export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Bradley<br/>Richardson</h1>
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
