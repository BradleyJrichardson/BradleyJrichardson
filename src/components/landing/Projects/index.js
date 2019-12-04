import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import { Container, Wrapper } from 'components/common'


const Project = styled.div`
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
`



export const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      afca: file(relativePath: { eq: "afca.png" }) {
        childImageSharp {
          fluid(maxWidth: 540) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      lumin: file(relativePath: { eq: "lumin.png" }) {
        childImageSharp {
          fluid(maxWidth: 540) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      dashboard: file(relativePath: { eq: "migration-dashboard.png" }) {
        childImageSharp {
          fluid(maxWidth: 540) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      sane: file(relativePath: { eq: "sane.png" }) {
        childImageSharp {
          fluid(maxWidth: 540) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      socialCohesian: file(relativePath: { eq: "social-cohesian.png" }) {
        childImageSharp {
          fluid(maxWidth: 540) {
            ...GatsbyImageSharpFluid
          }
        }
      },

    }
  `)


  const {
    sane: {childImageSharp: {fluid: sane }},
    afca: {childImageSharp: {fluid: afca }},
    lumin: {childImageSharp: {fluid: lumin }},
    dashboard: {childImageSharp: {fluid: dashboard }},
    socialCohesian: {childImageSharp: {fluid: socialCohesian }},
    } = data
  
  return (
    <Wrapper as={Container} id="projects">
      <h1>Projects</h1>
      
    </Wrapper>
  )
}






