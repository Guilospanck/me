import { createGlobalStyle } from 'styled-components'

export const BODY_BG_COLOR = '#000'
export const TEXT_COLOR_0_7_WHITE = 'hsla(0,0%,100%,0.7)'
export const CONTENT_BG_COLOR_ALMOST_BLACK = '#1d2226'
export const BREADCUMB_BG_COLOR = '#2d3134'
export const BREADCUMB_BG_COLOR_HOVER = '#4f5356'

const SCROLLBAR_TRACK_BG = '#2e3338'
const SCROLLBAR_THUMB_BG = '#202225'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-width: 300px;
    height: 100vh;
    font-family: 'Finlandica', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${CONTENT_BG_COLOR_ALMOST_BLACK};
    color: ${TEXT_COLOR_0_7_WHITE};
  }
  html {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 100vh;
  }
  *,
  *::before,
  *::after {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  /* Changing scrollbar styles */
  *::-webkit-scrollbar {
    width: 16px;
    height: 16px;
  }
  *::-webkit-scrollbar-corner {
    background-color: transparent;
  }
  *::-webkit-scrollbar-thumb {
    background-color: ${SCROLLBAR_THUMB_BG};
    min-height: 40px;
    border: 4px solid transparent;
    background-clip: padding-box;
    border-radius: 8px;
  }
  *::-webkit-scrollbar-track {
    border: 4px solid transparent;
    background-clip: padding-box;
    border-radius: 8px;
    margin-bottom: 8px;
    background-color: ${SCROLLBAR_TRACK_BG};
  }

`
