import React from 'react'
import styled from 'styled-components'
import { Footer } from 'components/landing/navs'
import { Global } from './styles'
import './fonts.css'
import detailsIllustration from 'assets/illustrations/details.svg';
import blob1 from 'assets/illustrations/blob-shape1.svg';
import blob2 from 'assets/illustrations/blob-shape2.svg';
import blob3 from 'assets/illustrations/blob-shape3.svg';
import blob4 from 'assets/illustrations/blob-shape4.svg';
import blob5 from 'assets/illustrations/blob-shape5.svg';
import blob6 from 'assets/illustrations/blob-shape6.svg';


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



export const Card = styled.div`
  padding: 1rem;
  background: #fff;
  height: 100%;
`;

// Buttons 

let text = "#382b22";
let lightpink = "#fff0f0";
let pink = "#ffe9e9";
let darkpink = "#f9c4d2";
let pinkborder = "#b18597";
let pinkshadow = "#ffe3e2";

export const Button = styled.button`
    margin: 0 10px;
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    font-size: inherit;
    font-family: inherit;
    color: ${text};
    /* text-transform: uppercase; */
    padding: 0.75em 2em;
    background: ${lightpink};
    border: 2px solid ${pinkborder};
    border-radius: 0.75em;
    transform-style: preserve-3d;
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1);
    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${darkpink};
      border-radius: inherit;
      box-shadow: 0 0 0 2px ${pinkborder}, 0 0.625em 0 0 ${pinkshadow};
      transform: translate3d(0, 0.75em, -1em);
      transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
    }
    &:hover {
      background: ${pink};
      transform: translate(0, 0.25em);
      &::before {
        box-shadow: 0 0 0 2px ${pinkborder}, 0 0.5em 0 0 ${pinkshadow};
        transform: translate3d(0, 0.5em, -1em);
      }
    }
    &:active {
      background: ${pink};
      transform: translate(0em, 0.75em);
      &::before {
        box-shadow: 0 0 0 2px ${pinkborder}, 0 0 ${pinkshadow};
        transform: translate3d(0, 0, -1em);
      }
    }
    @media (max-width: 680px) {
    margin: 15px 0
    }
  
`



export const SmallButton = styled.button`
    margin: 0 10px;
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    font-size: inherit;
    font-family: inherit;
    color: ${text};
    /* text-transform: uppercase; */
    padding: 0.25em 1.5em;
    background: ${lightpink};
    border: 2px solid ${pinkborder};
    border-radius: 0.75em;
    transform-style: preserve-3d;
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1);
    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${darkpink};
      border-radius: inherit;
      box-shadow: 0 0 0 2px ${pinkborder}, 0 0.625em 0 0 ${pinkshadow};
      transform: translate3d(0, 0.75em, -1em);
      transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
    }
    &:hover {
      background: ${pink};
      transform: translate(0, 0.25em);
      &::before {
        box-shadow: 0 0 0 2px ${pinkborder}, 0 0.5em 0 0 ${pinkshadow};
        transform: translate3d(0, 0.5em, -1em);
      }
    }
    &:active {
      background: ${pink};
      transform: translate(0em, 0.75em);
      &::before {
        box-shadow: 0 0 0 2px ${pinkborder}, 0 0 ${pinkshadow};
        transform: translate3d(0, 0, -1em);
      }
    }
    @media (max-width: 680px) {
    margin: 15px 0
    }
  
`

export const PlainButton = styled.button`
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    font-size: inherit;
    font-family: inherit;
    color: ${text};
    /* text-transform: uppercase; */
    padding: 0.25em 1.5em;
    background: ${lightpink};
    border: 2px solid ${pinkborder};
    border-radius: 0.75em;
    &:hover {
      background: ${pink};
    }
    &:active {
      background: ${pink};
      &::before {
        box-shadow: 0 0 0 2px ${pinkborder}, 0 0 ${pinkshadow};
        transform: translate3d(0, 0, -1em);
      }
    }
    @media (max-width: 680px) {
    margin: 15px 0
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

export const Details = styled.div`
  flex: 1;
  padding-left: 2rem;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: #212121;
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
    color: #707070;
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
  }
`;


// github 

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

  h4 {
    color: #212121;
  }

  p {
    color: #707070;
  }
`;

export const Content = styled.div`
  padding: 1rem 0;
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    &:first-child {
      margin-right: 0.5rem;
    }

    img {
      margin: 0;
    }

    span {
      color: #000;
      margin-left: 0.5rem;
    }
  }
`;

// projects
const blobFunc = (blobSelector) => {
  if (blobSelector === 1) return blob1;
  if (blobSelector === 2) return blob2;
  if (blobSelector === 3) return blob3;
  if (blobSelector === 4) return blob4;
  if (blobSelector === 5) return blob5;
  if (blobSelector === 6) return blob6;
}


export const ProjectTextBlob = styled.div`
  height: 400px;
  width: 100%;
  background-position: left;
  background-size: 100%; 
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ blobSelector }) =>
    `
      background-image: url(${blobFunc(blobSelector)});
    `
  };

`;

