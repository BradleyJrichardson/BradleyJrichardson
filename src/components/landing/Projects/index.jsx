import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container } from 'components/common'
import {  Card } from './Card'
import { Wrapper, Grid} from './styles'




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
  return (
    <Wrapper as={Container} id="projects">
      <h2>Work Projects</h2>
        <Grid>
          <Card image={data.sane} link={projectObj.sane.link} title={projectObj.sane.title} />
          <Card image={data.socialCohesian} />
          <Card image={data.dashboard} />
          <Card image={data.lumin} />
          <Card image={data.afca} />
        </Grid>
    </Wrapper>
  )
}

const projectObj = {
  sane: {
    link: "https://nationalstigmareportcard.com.au/",
    title: "Our Turn To Speak",
  }
}


