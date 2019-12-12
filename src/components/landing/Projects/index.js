import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import { Container, Wrapper, Card, Grid, Item, Stats, PlainButton, ProjectHeader } from 'components/common'




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
      <ProjectHeader>Projects</ProjectHeader>
      <h2>Work</h2>
      <Grid>
          <Item
            // key={node.id}
            as="a"
            // href={node.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card>
              <div>
                <h4>Hello World</h4>
                <p>description</p>
              </div>
              
              <Stats>
                <PlainButton>link</PlainButton>
              </Stats>

            </Card>
          </Item>
          <Item
            // key={node.id}
            as="a"
            // href={node.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card>
              <div>
                <h4>Hello World</h4>
                <p>description</p>
              </div>
              
              <Stats>
                <PlainButton>link</PlainButton>
              </Stats>

            </Card>
          </Item>
          <Item
            // key={node.id}
            as="a"
            // href={node.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card>
              <div>
                <h4>Hello World</h4>
                <p>description</p>
              </div>
              
              <Stats>
                <PlainButton>link</PlainButton>
              </Stats>

            </Card>
          </Item>
          <Item
            // key={node.id}
            as="a"
            // href={node.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card>
              <div>
                <h4>Hello World</h4>
                <p>description</p>
              </div>
              
              <Stats>
                <PlainButton>link</PlainButton>
              </Stats>

            </Card>
          </Item>
          <Item
            // key={node.id}
            as="a"
            // href={node.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card>
              <div>
                <h4>Hello World</h4>
                <p>description</p>
              </div>
              
              <Stats>
                <PlainButton>link</PlainButton>
              </Stats>

            </Card>
          </Item>
          <Item
            // key={node.id}
            as="a"
            // href={node.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card>
              <div>
                <h4>Hello World</h4>
                <p>description</p>
              </div>
              
              <Stats>
                <PlainButton>link</PlainButton>
              </Stats>

            </Card>
          </Item>
      </Grid>
    </Wrapper>
  )
}






