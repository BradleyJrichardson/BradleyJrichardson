import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Wrapper, Card, Grid, Item, Stats } from 'components/common'

import starIcon from 'assets/icons/star.svg'
import forkIcon from 'assets/icons/fork.svg'

export const Github = () => {
  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(
              first: 8
              orderBy: { field: STARGAZERS, direction: DESC }
            ) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <Wrapper as={Container} id="projects">
      <h2>GitHub</h2>
      <Grid>
        {edges.map(({ node }) => (
          <Item
            key={node.id}
            as="a"
            href={node.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card>
              <div>
                <h4>{node.name}</h4>
                <p>{node.description}</p>
              </div>
              
              <Stats>
                <div>
                  <img src={starIcon} alt="stars" />
                  <span>{node.stargazers.totalCount}</span>
                </div>
                <div>
                  <img src={forkIcon} alt="forks" />
                  <span>{node.forkCount}</span>
                </div>
              </Stats>

            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  )
}
