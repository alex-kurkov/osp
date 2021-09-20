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
    background: '#ebebeb',
    textPrimary: '#1c1c22',
    activeElementBg: '#f4f4f4',
  },
}
export const DarkTheme = {
  colors: {
    background: '#1c1c22',
    textPrimary: '#ebebeb',
    activeElementBg: '#2a2a2a',
  },
}

export const getTheme = (props) => props.theme
