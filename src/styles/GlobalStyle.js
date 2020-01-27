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
    background: ${props => props.theme.color.bg} !important;
    color: #fff !important;
  }
  h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0 0 15px;
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
    display: inline-block;
    position: relative;
    z-index: 1;
    border: 2px solid ${props => props.theme.color.border};
    color: hsla(0,0%,100%,.85);
    background: transparent;
    padding: 5px 25px;
    margin-right: 15px;
    border-radius: 4px;
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
    background: ${props => props.theme.color.green};
    z-index: -1;
  }
  .boxed-btn:hover:after {
    width: 100%;
    transition: all .4s linear;
  }
  .modal-content {
    background: ${props => props.theme.color.light} !important;
  }

`

export default GlobalStyle
