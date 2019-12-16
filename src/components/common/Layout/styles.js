import { createGlobalStyle } from 'styled-components';

const scrollbarBG = "#b18597";
const thumbBG = "#ffe9e9";


export const Global = createGlobalStyle`
  html {
    font-family: 'Roboto', Helvetica, sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  
 body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  text-decoration: none;
}

h1 {
    margin-bottom: 2rem;
    font-size: 36pt;
    color: #212121;

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }

  h2 {
    margin-bottom: 2.5rem;
    font-size: 22pt;
    font-weight: normal;
    color: #111;

    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }


  /* scrollbar magic */

  body::-webkit-scrollbar {
  width: 25px;
  height: 30px; 
  }
  body::-webkit-scrollbar-track {
  background: #efeeff;
  }
  body {
  scrollbar-width: thin;
  scrollbar-color: ${thumbBG} ${scrollbarBG};
  }
  body::-webkit-scrollbar-thumb {
  background-color: ${thumbBG};
  border-radius: 6px;
  border: 3px solid ${scrollbarBG};
  }
`;


