import { createGlobalStyle } from 'styled-components'

import { stripButton } from './mixins'

import {
  white,
  porcelain,
  french,
  raven,
  tundora,
  black,
  aquamarine,
  fiord,
  casper,
  chateau
} from './colors'

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-white: ${white};
    --color-porcelain: ${porcelain};
    --color-french: ${french};
    --color-raven: ${raven};
    --color-tundora: ${tundora};
    --color-black: ${black};
    --color-aquamarine: ${aquamarine};
    --color-fiord: ${fiord};
    --color-casper: ${casper};
    --color-chateau: ${chateau};

    font-family: Helvetica, Arial, sans-serif;
    font-size: 62.5%;
    color: var(--color-white);
  }

  body {
    display: block;
    height: 100vh;
    min-width: 100vw;
    min-height: 100vh;
    background-color: var(--color-raven);
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export const GlobalReset = createGlobalStyle`
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
    font: inherit;
    vertical-align: baseline;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  article,
  aside,
  details,
  figcaption,
  figure, 
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
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

  button {
    ${stripButton};
  }
`