import styled from "styled-components"

const HeaderStyle = styled.div`
	.the-button,
	button {
		cursor: pointer;
		text-decoration: none;
		background: transparent;
		padding: 0;
		border: 0;
		-ms-touch-action: manipulation;
		touch-action: manipulation;
		white-space: nowrap;
	}

	.the-button {
		display: inline-block;
		text-align: center;
		vertical-align: middle;
	}

	button {
		background-image: none;
	}

	button:active,
	button:focus {
		outline: none;
		box-shadow: none;
		border: none;
	}

	button.button-disabled,
	button[disabled] {
		cursor: not-allowed;
		opacity: 0.65;
	}

	.the-button {
		font-family: League Spartan, Helvetica, Arial, sans-serif;
		font-size: 0.875em;
		letter-spacing: 3px;
		padding: 12px 20px;
		background-color: #f06449;
		background: linear-gradient(270deg, #f06449, #ef3636);
		color: #fff;
		position: relative;
		transition: all 0.3s;
	}

	.the-button .button-text {
		position: relative;
		z-index: 10;
	}

	.the-button .button-mask {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.the-button .button-mask:after,
	.the-button .button-mask:before {
		will-change: transform;
	}

	.the-button .button-mask:before {
		width: 100%;
		background-color: #1b2e63;
		background: linear-gradient(270deg, #235aa6, #101b3b);
		transition: -webkit-transform 0.6s cubic-bezier(0.694, 0.048, 0.335, 1)
			0.05s;
		transition: transform 0.6s cubic-bezier(0.694, 0.048, 0.335, 1) 0.05s;
		transition: transform 0.6s cubic-bezier(0.694, 0.048, 0.335, 1) 0.05s,
			-webkit-transform 0.6s cubic-bezier(0.694, 0.048, 0.335, 1) 0.05s;
		z-index: 1;
	}

	.the-button .button-mask:after,
	.the-button .button-mask:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		-webkit-transform: translateX(-110%);
		transform: translateX(-110%);
	}

	.the-button .button-mask:after {
		width: 80%;
		background-color: #26408b;
		background: linear-gradient(270deg, #235aa6, #213777);
		transition: -webkit-transform 0.6s cubic-bezier(0.694, 0.048, 0.335, 1);
		transition: transform 0.6s cubic-bezier(0.694, 0.048, 0.335, 1);
		transition: transform 0.6s cubic-bezier(0.694, 0.048, 0.335, 1),
			-webkit-transform 0.6s cubic-bezier(0.694, 0.048, 0.335, 1);
		z-index: 2;
	}

	.the-button .button-icon {
		position: absolute;
		top: 3px;
		right: -25px;
		width: 35px;
		height: 35px;
		-webkit-transform: translateX(0);
		transform: translateX(0);
		transition: -webkit-transform 0.3s cubic-bezier(0.694, 0.048, 0.335, 1);
		transition: transform 0.3s cubic-bezier(0.694, 0.048, 0.335, 1);
		transition: transform 0.3s cubic-bezier(0.694, 0.048, 0.335, 1),
			-webkit-transform 0.3s cubic-bezier(0.694, 0.048, 0.335, 1);
	}

	.the-button .button-icon svg {
		width: 35px;
		height: 35px;
	}

	.the-button .button-icon svg path {
		fill: #484b5f;
	}

	.the-button.call-to-button .button-icon svg path {
		fill: #fff;
	}

	.the-button:hover .button-mask:before {
		transition: -webkit-transform 0.75s cubic-bezier(0.694, 0.048, 0.335, 1)
			0.05s;
		transition: transform 0.75s cubic-bezier(0.694, 0.048, 0.335, 1) 0.05s;
		transition: transform 0.75s cubic-bezier(0.694, 0.048, 0.335, 1) 0.05s,
			-webkit-transform 0.75s cubic-bezier(0.694, 0.048, 0.335, 1) 0.05s;
	}

	.the-button:hover .button-mask:after {
		transition: -webkit-transform 0.75s cubic-bezier(0.694, 0.048, 0.335, 1);
		transition: transform 0.75s cubic-bezier(0.694, 0.048, 0.335, 1);
		transition: transform 0.75s cubic-bezier(0.694, 0.048, 0.335, 1),
			-webkit-transform 0.75s cubic-bezier(0.694, 0.048, 0.335, 1);
	}

	.the-button:hover .button-mask:after,
	.the-button:hover .button-mask:before {
		-webkit-transform: translateX(200%);
		transform: translateX(200%);
	}

	.the-button:hover .button-icon {
		-webkit-transform: translateX(7px);
		transform: translateX(7px);
	}
	.logo a {
		color: ${props => props.theme.bg};
		font-weight: bold;
		font-family: "Permanent Marker", cursive;
		font-size: 35px;
		border: 4px solid;
		padding: 9px;
		transition: all 0.2s linear;
	}
	.logo a:hover {
		color: #000;
		border-color: transparent;
		transition: all 0.2s linear;
	}
	.mainmenu ul {
		margin: 0 !important;
	}
	.mainmenu li {
		display: inline-block;
	}
	.mainmenu li a {
		display: block;
		color: #000;
		font-weight: bold;
		padding: 15px;
		position: relative;
		transition: all 0.2s linear;
	}
	.mainmenu li a:hover {
		color: #fff;
		transition: all 0.4s linear;
		text-decoration: none;
	}
	.mainmenu li a:hover::after {
		position: absolute;
		left: 15px;
		bottom: 11px;
		width: 70%;
		height: 1px;
		content: "";
		background: ${props => props.theme.bg};
	}
	.header {
		padding: 15px;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		z-index: 99;
	}
	.header.fixed .mainmenu ul li a {
		color: #fff;
		opacity: 0.8;
	}
	.header.fixed .mainmenu ul li a:hover {
		opacity: 1;
		transition: opacity 0.3s linear;
	}
`

export default HeaderStyle
