import { createGlobalStyle } from 'styled-components';
import COLOR from './color';
import { typography } from './mixins';

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
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
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }
  
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  * {box-sizing: border-box}
  html {
    font: normal 400 10px/1 'Noto sans', sans-serif;
  }
  body {
    ${typography({ size: 'medium' })}
    line-height: 1.4;
    color: ${COLOR.WHITE};
    background: ${COLOR.BLACK};
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
  button {
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    cursor: pointer;

  &:disabled{
      cursor: default;
    }
  }
  input, textarea {
    margin: 0;
    padding: 0;
    border: none;
    background: none;
  }
  input:focus, 
  textarea:focus {
    outline: none;
  }
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${COLOR.WHITE};
    opacity: 1; /* Firefox */
  }
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: ${COLOR.WHITE};
  }
  ::-ms-input-placeholder { /* Microsoft Edge */
    color: ${COLOR.WHITE};
  }
  a {
    text-decoration: none;
    font: inherit;
    color: inherit;
  }
  img {
    max-width: 100%;
  }
  svg {
    display: block;
  }
`;

export default GlobalStyle;
