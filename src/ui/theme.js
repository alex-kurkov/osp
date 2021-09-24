import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  * {
    margin: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${(p) => getTheme(p).colors.background}
  }
`
export const LightTheme = {
  colors: {
    background: 'rgba(235, 235, 235, 1)',
    textPrimary: '#1c1c22',
    activeElementBg: '#f4f4f4',
    transparent: 'rgba(255,255,255,0)',
    added: '#00b900',
    unadded: '#d00000'
  },
}
export const DarkTheme = {
  colors: {
    background: 'rgba(28, 28, 34, 1)',
    textPrimary: '#ebebeb',
    activeElementBg: '#2a2a2a',
    transparent: 'rgba(0, 0, 0, 0)',
    added: '#00b900',
    unadded: '#d00000'
  },
}

export const getTheme = (props) => props.theme
