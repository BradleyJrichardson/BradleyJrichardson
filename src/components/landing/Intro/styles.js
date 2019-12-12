import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
`;

export const StyledHeader = styled.header`
  position: relative;
  overflow: hidden;
  padding-bottom: 1.5rem;
  background-color: pink;
  height: 80vh;
  padding-top: 1.5rem;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 96%, 62% 95%, 29% 99%, 0 94%);
  clip-path: polygon(0 0, 100% 0, 100% 96%, 62% 95%, 29% 99%, 0 94%);
`
export const IntroWrapper = styled.div`
  padding: 4rem 0;
`;

export const Details = styled.div`
  text-align: center;


  h1 {
    margin-bottom: 2rem;
    font-size: 36pt;
    color: #212121;

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }

  h4 {
    margin-bottom: 2.5rem;
    font-size: 22pt;
    font-weight: normal;
    color: #707070;

    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }
`;



export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 680px) {
    flex-direction: column;
    }

/* ${({ desktop }) =>
    desktop
      ? `
			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 1rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
      : `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`} */
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
  }

  img {
    width: 100%;
  }
`;
