import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
  	margin: 0;
  	padding: 0;
  	box-sizing: border-box;
  }
  body {
    background: ${props => props.theme.bg};
    color: red;
    font-size: 50px;
  }
`

export default GlobalStyle
