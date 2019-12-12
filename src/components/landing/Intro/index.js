import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styled from 'styled-components'
import { Header } from 'components/landing/navs'
import { Container, Button } from 'components/common'
import { Wrapper, IntroWrapper, Details, ButtonWrapper } from './styles'



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
