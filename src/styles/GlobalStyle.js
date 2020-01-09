import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Lora:400,700,700i|Merriweather:400,400i&display=swap');

  * {
  	margin: 0;
  	padding: 0;
  	box-sizing: border-box;
  }
  body {
    font-family: 'Merriweather',serif !important;
    background: ${props => props.theme.bg};
    color: red;
    font-size: 50px;
  }
`

export default GlobalStyle
