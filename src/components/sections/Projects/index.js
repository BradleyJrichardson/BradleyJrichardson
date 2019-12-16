import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import { Container, Wrapper, Card, Grid, Stats, PlainButton, ProjectHeader, ExternalLink, ProjectItem } from 'components/common'


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
      <h2>Projects</h2>
      <Grid>
          <ProjectItem
            as="a"
            href={"https://nationalstigmareportcard.com.au/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card>
              <div>
                <h4>Our turn speak</h4>
                <ul>
                  <li>Gatsby site</li>
                  <li>Styling system based on Rebass using styled components</li>
                  <li>API component utilizing React Hooks</li>
                  <li>SEO</li>
                  <li>Polyfilling for IE</li>
                  <li>Fully accessible</li>
                </ul>
              </div>
            </Card>
          </ProjectItem>
          <ProjectItem
            as="a"
            href={"https://data.afca.org.au/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card>
              <div>
                <h4>Afca</h4>
                <ul>
                  <li>Gatsby site</li>
                  <li>Styling system based on Rebass using styled components</li>
                  <li>Integration with Power BI</li>
                  <li>SEO</li>
                  <li>Polyfilling for IE</li>
                  <li>Fully accessible</li>
                </ul>
              </div>
            </Card>
          </ProjectItem>
          <ProjectItem
            as="a"
            href={"https://luminlessons.com/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card>
              <div>
                <h4>Lumin</h4>
                <ul>
                  <li>Complete rehaul of styling system; we migrated to a system based on rebass and styled components</li>
                  <li>Form Validation</li>
                  <li>Bug fixes</li>
                </ul>
              </div>
            </Card>
          </ProjectItem>
          <ProjectItem
            as="a"
            href={"https://scanloninstitute.org.au/report2019"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card>
              <div>
                <h4>Social Cohesion</h4>
                <ul>
                  <li>Part of a larger drupal 8 website</li>
                  <li>Nunjucks templating system</li>
                  <li>Use of echarts javascript library to create new data visualizations</li>
                </ul>
              </div>
            </Card>
          </ProjectItem>
          <ProjectItem
            as="a"
            href={"https://scanloninstitute.org.au/migrationdashboard"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card>
              <div>
                <h4>Migration Dashboard</h4>
                <ul>
                  <li>React  portals to assign components to nodes in the larger drupal 8 site</li>
                  <li>Victory charts graphing library used for data visualization</li>
                  <li>Processing of large datasets into a format that was needed for victory charts</li>
                  <li>Custom functionality and interactivity</li>
                  <li>Packaged up as a module</li>
                </ul>
              </div>
            </Card>
          </ProjectItem>
          <ProjectItem
            as="a"
            href={"https://en.wikipedia.org/wiki/Website"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card>
              <div>
                <h4>Your Project Here</h4>
                <ul>
                  <li>Javascript framework</li>
                  <li>Backend work</li>
                  <li>Clean code</li>
                </ul>
              </div>
            </Card>
          </ProjectItem>
      </Grid>
    </Wrapper>
  )
}






