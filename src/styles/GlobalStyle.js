import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Lora:400,700,700i|Merriweather:400,400i&display=swap');

  * {
  	margin: 0;
  	padding: 0;
  	box-sizing: border-box;
  }
  body {
    font-family: 'Merriweather',serif;
    font-size: 16px;
    line-height: 1.7;
  }
    h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0 0 15px;
		font-weight: 700;
		font-weight: 700;
		font-family: 'Lora', serif;
	}

  a:hover {text-decoration:none}
  ol,ul {
  	margin: 0;
  	padding: 0;
  	list-style:none;
  }
	.section-padding {
		padding: 80px 0;
	}

`

export default GlobalStyle
