import styled from "styled-components"

const ContactStyle = styled.div`
	input[type="text"], input[type="email"], input[type="date"], input[type="tel"], input[type="cal"], input[type="submit"], button[type="submit"], textarea {
	  width: 100%;
	  border: 1px solid #E7E7E7;
	  background: #f9f9f9;
	  padding: 6px 16px;
	  margin-bottom: 20px;
	}
	input[type="submit"], button[type="submit"], input[type="button"] {
	  width: auto;
	  background: #000;
	  color: #000;
	  text-transform: uppercase;
	  display: inline-block;
	  padding: 15px 31px;
	  margin: 30px 0;
	  cursor: pointer;
	  font-size: 18px;
	  border: none;
	  border-radius: 5px;
	  transition: all .2s linear;
	}
	input[type="submit"]:hover, button[type="submit"]:hover {
	  background: #000;
	  transition: all .2s linear;
	}
	.contact-form textarea {
	  resize: none;
	  height: 164px;
	}
	.contact-information {
		background: yellow;
		background: 
		position: relative;
		z-index: 1;
	}
	.dark-background-content {
		background: ${props => props.theme.gradient};
		color: #fff;
		padding: 40px;
		font-size: 19px;
		line-height: 2;
		margin: -2% 0;
	}
	.contact-form {
	  padding: 40px;
	}
	.contact-info-left i {
	  margin-right: 17px;
	}
	.contact-social a {
	  color: #fff;
	  width: 40px;
	  height: 40px;
	  text-align: center;
	  display: inline-block;
	  line-height: 40px;
	  margin-right: 10px;
	  border-radius: 50%;
	  padding-left: 10px;
	}

	/* Facebook */
	.contact-social a:nth-child(1) {
		background:#3B579D;
	}
	/* Twitter */
	.contact-social a:nth-child(2) {
		background:#2CAAE1;
	}
	/* Instagram */
	.contact-social a:nth-child(3) {
		background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
	}
	/* Linkedin */
	.contact-social a:nth-child(4) {
		background:#007BB6;
	}
	.contact-social a:hover {
		box-shadow: 0 0 10px;
		transition: all 0.3s linear;
	}

	.contact-social {
		padding-top: 7%;
		text-align: center;
	}
	.contact-info-left p i {
		color: #00ACEE;
		font-size: 25px;
		position: absolute;
		left: 0;
		top: 5px;
	}
	.contact-info-left {
		padding-top: 25px;
	}
	.contact-information h2 {
		margin-bottom: 35px;
	}
	
	input[type="text"]:focus,
	input[type="email"]:focus,
	input[type="date"]:focus,
	input[type="tel"]:focus,
	input[type="cal"]:focus,
	textarea:focus {
		box-shadow: 0 0 10px #b6b6ae;
	}


	.contact-info-left p {
		padding-left: 40px;
		position: relative;
		margin-bottom: 30px;
		font-size: 16px;
	}
	.contact-info-left h3 {
		position: relative;
		font-size: 20px;
		padding-left: 50px;
		padding-top: 15px;
	}
	.contact-info-left h3::before {
		position: absolute;
		content: '';
		left: 29px;
		top: 10px;
		width: 3px;
		height: 71%;
		background: #ff0;
	}

`

export default ContactStyle
