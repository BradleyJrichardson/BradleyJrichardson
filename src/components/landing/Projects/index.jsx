import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container } from 'components/common'
import { Wrapper } from './styles'




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
      <h2>Projects</h2>
   
    </Wrapper>
  )
}


// return (
//   <Wrapper as={Container} id="projects">
//     <h2>Projects</h2>
//         <Card image={data.sane}  />
//         <Card image={data.socialCohesian} />
//         <Card image={data.dashboard} />
//         <Card image={data.lumin} />
//         <Card image={data.afca} />
//   </Wrapper>
// )


const Img = ({ title, image }) => (
	<Wrapper>
		<Img fluid={image.childImageSharp.fluid} alt={title} />
	</Wrapper>
)






