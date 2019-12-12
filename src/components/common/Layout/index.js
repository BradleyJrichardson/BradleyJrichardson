import React from 'react'
import styled from 'styled-components'
import { Footer } from 'components/landing/navs'
import { Global } from './styles'
import './fonts.css'
import detailsIllustration from 'assets/illustrations/details.svg';

let text = "#382b22";
let lightpink = "#fff0f0";
let pink = "#ffe9e9";
let darkpink = "#f9c4d2";
let pinkborder = "#b18597";
let pinkshadow = "#ffe3e2";

export const Layout = ({ children }) => (
	<>
		<Global />
		{children}
		<Footer />
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
  border-bottom: 20px solid ${pinkshadow};
  width: 30%;
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
		border-color: #ff4136;
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

