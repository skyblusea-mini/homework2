import { Global, css } from '@emotion/react';

/**
 *  글로벌 리셋 스타일
 */
const resetCss = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

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
    margin: 0 auto;
  }

  body,
  root {
    background-color: #f0f0f0;
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
    /* color */
    --Main-B-Color: var(--palette-primary-500);
    --Sup-G-Color: var(--palette-neutral-500);
    --Emerald-Green: var(--palette-success-500);
    --Flame-Red: var(--palette-danger-500);
    --Modern-Gray: #AAAEB6;
    --Faded-Ash: #72747E;
    --Royal-Black: #1C1C1E;
    --Off-White: #F6F7F9;
    --Soft-Gray: #EBECEF;
    --Modern-Gray: #AAAEB6;
    --Faded-Ash: #72747E;
    --Faded-Charcoal: #46464E;
    --Pure-Black: #000000;
    --WH: #FFFFFF;


    /* layout */
    --header-h : 80px;
    --footer-h : 60px;
    --max-w : 640px;

    /* margin */
    --margin-xs: 4px;
    --margin-sm: 8px;
    --margin-md: 16px;
    --margin-lg: 24px;
    --margin-xl: 32px;
    
    /* padding */
    --padding-xs: 4px;
    --padding-sm: 8px;
    --padding-md: 16px;
    --padding-lg: 24px;
    --padding-layout: 20px;

    /* z-index */
    --zIndex-header: 100;

    /* MUI 기본 전역 변수 (개발용) */
    /**
      TODO : 추후 삭제해도 변수 작동됨
    */
    --fontSize-xs: 0.75rem;
    --fontSize-sm: 0.875rem;
    --fontSize-md: 1rem;
    --fontSize-lg: 1.125rem;
    --fontSize-xl: 1.25rem;
    --fontSize-xl2: 1.5rem;
    --fontSize-xl3: 1.875rem;
    --fontSize-xl4: 2.25rem;
    --fontFamily-body: "Inter", var(--fontFamily-fallback, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol");
    --fontFamily-display: "Inter", var(--fontFamily-fallback, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol");
    --fontFamily-code: Source Code Pro, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
    --fontFamily-fallback: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --fontWeight-sm: 300;
    --fontWeight-md: 500;
    --fontWeight-lg: 600;
    --fontWeight-xl: 700;
    --focus-thickness: 2px;
    --lineHeight-xs: 1.33334;
    --lineHeight-sm: 1.42858;
    --lineHeight-md: 1.5;
    --lineHeight-lg: 1.55556;
    --lineHeight-xl: 1.66667;
    --radius-xs: 2px;
    --radius-sm: 12px;
    --radius-md: 14px;
    --radius-lg: 22px;
    --radius-xl: 28px;
    --shadow-xs: var(--shadowRing, 0 0 #000), 0px 1px 2px 0px rgba(var(--shadowChannel, 21 21 21) / var(--shadowOpacity, 0.08));
    --shadow-sm: var(--shadowRing, 0 0 #000), 0px 1px 2px 0px rgba(var(--shadowChannel, 21 21 21) / var(--shadowOpacity, 0.08)), 0px 2px 4px 0px rgba(var(--shadowChannel, 21 21 21) / var(--shadowOpacity, 0.08));
    --shadow-md: var(--shadowRing, 0 0 #000), 0px 2px 8px -2px rgba(var(--shadowChannel, 21 21 21) / var(--shadowOpacity, 0.08)), 0px 6px 12px -2px rgba(var(--shadowChannel, 21 21 21) / var(--shadowOpacity, 0.08));
    --shadow-lg: var(--shadowRing, 0 0 #000), 0px 2px 8px -2px rgba(var(--shadowChannel, 21 21 21) / var(--shadowOpacity, 0.08)), 0px 12px 16px -4px rgba(var(--shadowChannel, 21 21 21) / var(--shadowOpacity, 0.08));
    --shadow-xl: var(--shadowRing, 0 0 #000), 0px 2px 8px -2px rgba(var(--shadowChannel, 21 21 21) / var(--shadowOpacity, 0.08)), 0px 20px 24px -4px rgba(var(--shadowChannel, 21 21 21) / var(--shadowOpacity, 0.08));
    --zIndex-badge: 1;
    --zIndex-table: 10;

    --zIndex-popup: 1000;
    --zIndex-modal: 1300;
    --zIndex-snackbar: 1400;
    --zIndex-tooltip: 1500;
  }
`

/** 글로벌 스타일 */
const GlobalStyle = () => {
  return <Global styles={resetCss} />
}


export default GlobalStyle
