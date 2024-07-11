import { Global, css } from '@emotion/react';

/**
 *  글로벌 리셋 스타일
 */
const resetCss = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
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
    transition: background-color 0.5s ease;
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

  #root {
    width: 100%;
    height: 100vh;
  }

  body,
  root {
    padding: 0;
    margin: 0;
    background-color: #f0f0f0;
    overflow: hidden;
  }

  a {
    color: #333;
    text-decoration: none;
  }

  .content {
    ::-webkit-scrollbar {
      display: none;
    }
  }

  :root{
    --Main-B-Color: #05AFF2;
    --Sup-G-Color: #F8F8F8;
    --Emerald-Green: #2ECC71;
    --Flame-Red: #FF4500;
    --Modern-Gray: #AAAEB6;
    --Faded-Ash: #72747E;
  }
`

/** 글로벌 스타일 */
const GlobalStyle = () => {
  return <Global styles={resetCss} />
}


export default GlobalStyle
