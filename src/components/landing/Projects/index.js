import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import { Container, Wrapper, PlainButton, ProjectTextBlob } from 'components/common'

// import blobClip from 'assets/illustrations/blob-shape.svg'
// const ClippedImage = styled(Img)`
//   clip-path: ${blobClip};
// `


const Project = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ProjectImageWrapper = styled.div`
  width: 40%;
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
      {/* <ClippedImage fluid={data.sane.childImageSharp.fluid} /> */}
      
      <Project>  
        <ProjectTextBlob blobSelector={1}>
          <h4>hola</h4>
          <p>lorem</p>
          <PlainButton>Live Site</PlainButton>
        </ProjectTextBlob>
        <ProjectImageWrapper>
          <Img fluid={sane}/>
        </ProjectImageWrapper>
      </Project>

      <Project>
        <ProjectImageWrapper>
          <Img fluid={afca}/>
        </ProjectImageWrapper>

        <ProjectTextBlob blobSelector={2}>
          <h4>hola</h4>
          <p>lorem</p>
          <PlainButton>Live Site</PlainButton>
        </ProjectTextBlob>
      </Project>


      <Project>
        <ProjectTextBlob blobSelector={3}>
          <h4>hola</h4>
          <p>lorem</p>
          <PlainButton>Live Site</PlainButton>
        </ProjectTextBlob>

        <ProjectImageWrapper>
          <Img fluid={lumin}/>
        </ProjectImageWrapper>
      </Project>


      <Project>
        <ProjectImageWrapper>
          <Img fluid={socialCohesian}/>
        </ProjectImageWrapper>

        <ProjectTextBlob blobSelector={4}>
          <h4>hola</h4>
          <p>lorem</p>
          <PlainButton>Live Site</PlainButton>
        </ProjectTextBlob>
      </Project>

      <Project>
        <ProjectTextBlob blobSelector={5}>
          <h4>hola</h4>
          <p>lorem</p>
          <PlainButton>Live Site</PlainButton>
        </ProjectTextBlob>

        <ProjectImageWrapper>
          <Img fluid={dashboard}/>
        </ProjectImageWrapper>
      </Project>







 
    </Wrapper>
  )
}







