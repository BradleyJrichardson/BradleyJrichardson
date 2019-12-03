import React from 'react'
import CardHeader from './components/CardHeader'
import CardBody from './components/CardBody'
import CardFooter from './components/CardFooter'
import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 2rem 0;
`;
 const StyledCard = styled.div`
  width: 300px;
  height: 100%;
  border-radius: 2px;
  background: #fff;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  transition: 0.3s;
  margin: 0 auto;

  &:hover {
    box-shadow: 0 8px 26px 0 rgba(0, 0, 0, 0.09);
    transition: 0.3s;

    .gatsby-image-wrapper {
      transform: scale(1.02);
      transition: 0.3s;
      box-shadow: 0 17px 46px -5px rgba(0, 0, 0, 0.2);
      border-radius: 5px;

      img {
        border-radius: 5px;
        transition: 0.3s;
      }
    }
  }

`
export const Card = ({ id, link, title, image, description }) => {
  return (
    <Wrapper id={id} >
      <StyledCard >
        <CardHeader title={title} />
        <a href={link} >
          <CardBody image={image} title={title} />
        </a>
        <CardFooter description={description} />
      </StyledCard>
     </Wrapper>
  )
}
