import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Global } from './styles'
import './fonts.css'
import detailsIllustration from 'assets/illustrations/details.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { IconButton } from 'components/common'
import arrow from 'assets/icons/arrow.svg'

let text = "#382b22";
let lightpink = "#fff0f0";
let pink = "#ffe9e9";
let darkpink = "#f9c4d2";
let pinkborder = "#b18597";
let pinkshadow = "#ffe3e2";

const ToTop = styled.div`
     position: fixed;
     bottom: 0;
     right: 0;
     margin: 20px 10px;
     z-index: 1000;
`

export const Layout = ({ children }) => (
	<>
    <ToTop>
      <IconButton as={AnchorLink} href="#intro">
      <div>
         <img src={arrow} alt="to top" />
      </div>
      </IconButton>
    </ToTop>
		<Global />
		{children}
	</>
)



// Global
export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 90%;

  @media (min-width: 601px) {
    width: 90%;
  }

  @media (min-width: 993px) {
    width: 80%;
  }
`;

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const ProjectHeader = styled.h1`
  display: inline-block;
  position: relative;
  transition: all 0.3s ease-in-out;

  &:after {
    content: "";
    display: block;
    width: 97%;
    transform: translateX(-50%);
    height: 6px;
    background-color: grey;
    position: absolute;
    bottom: -11px;
    left: 50%;
  }
  :hover {
    color: ${pinkborder};
  }
  :hover:after {
    background-color: ${pinkborder};
  }
`

export const UnderlinedNav = styled(Link)`
  display: inline-block;
  position: relative;
  transition: all 0.3s ease-in-out;

  &:after {
    content: "";
    display: block;
    width: 97%;
    transform: translateX(-50%);
    height: 3px;
    background-color: grey;
    position: absolute;
    bottom: -8px;
    left: 50%;
  }
  :hover {
    color: ${pinkborder};
  }
  :hover:after {
    background-color: ${pinkborder};
  }
`


// input
export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 2px solid #6c63ff;
  padding: 0.8rem 1rem;
  border-radius: 7px;
  margin-bottom: 0.5rem;
  transition: 0.3s;

  ${({ error }) =>
    error &&
    `
		border-color: ${pinkborder};
	`}

  &::placeholder {
    color: #a7a7a7;
  }
`;


// skills components 

export const SkillsWrapper = styled.div`
  background-image: url(${detailsIllustration});
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
`;

export const SkillsContainer = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

// waving hand 

export const WavingHand = styled.span`
  padding-left: 20px;
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
  
  @keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(-10deg);
  }
  20% {
    transform: rotate(12deg);
  }
  30% {
    transform: rotate(-10deg);
  }
  40% {
    transform: rotate(9deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
`



