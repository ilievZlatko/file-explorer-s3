import { createGlobalStyle } from 'styled-components';

import PoppinsLight from '../fonts/Poppins-Light.ttf';
import PoppinsRegular from '../fonts/Poppins-Regular.ttf';
import PoppinsMedium from '../fonts/Poppins-Medium.ttf';
import PoppinsSemiBold from '../fonts/Poppins-SemiBold.ttf';
import PoppinsBold from '../fonts/Poppins-Bold.ttf';

export default createGlobalStyle`
  /* FONTS */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    src: url(${PoppinsLight}) format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    src: url(${PoppinsRegular}) format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    src: url(${PoppinsMedium}) format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    src: url(${PoppinsSemiBold}) format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    src: url(${PoppinsBold}) format('truetype');
  }

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
    font-size: 100%;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
    font-family: 'Poppins';
    font-weigth: 400;
    font-size: 16px;
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
`;
