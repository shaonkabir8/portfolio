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

  .boxed-btn {
    border: 1px solid;
    position: relative;
    z-index: 1;
    color: #542c85;
    padding: 10px 15px;
    border-radius: 5px;
    display: inline-block;
  }
  .boxed-btn:hover {
    color: #fff;
    text-decoration:none;
  }
  .boxed-btn:after {
    position: absolute;
    left: 0;
    top:0;
    width: 0;
    height: 100%;
    content: '';
    background: #542c85;
    z-index: -1;
    color:#fff;
    border-radius: 5px;
  }
  .boxed-btn:hover:after {
    width: 100%;
    color: #fff;
    transition: all .4s linear;
  }

`

export default GlobalStyle
