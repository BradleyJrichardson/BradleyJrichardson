import styled from 'styled-components'

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
    margin-bottom: 1rem;
    font-size: 12pt;
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

export const Card = styled.div`
  padding: 1rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Item = styled.div`
  width: 100%;
  height: 150px;
  /* overflow: hidden; */
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h4 {
    font-size: 1rem;
    color: #212121;
    padding-bottom: 10px;
    padding-bottom: 10px;
  }

  p {
    color: #707070;
    font-size: 0.8rem;
  }
`;

export const ProjectItem = styled.div`
  width: 100%;
  height: 200px;
  /* overflow: hidden; */
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h4 {
    font-size: 1rem;
    color: #212121;
    padding-bottom: 10px;
  }

  ul {
    color: #707070;
    list-style: square;
    padding: 0 0 20px 15px; 
  }

  li {
    font-size: 0.8rem;
    padding: 3px 0;
    line-height: 15px;
  }
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



