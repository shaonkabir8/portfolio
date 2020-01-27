import styled from "styled-components"

const ButtonStyle = styled.div`
	.the-button {
		display: inline-block;
		position: relative;
		z-index: 1;
		background-color: ${props => props.theme.color.green};
		color: hsla(0, 0%, 100%, 0.85);
		padding: 15px 25px;
		margin-right: 15px;
		border-radius: 4px;
		text-decoration: none;
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
		background-color: #63d471;
		background-image: linear-gradient(315deg, #63d471 0%, #233329 74%);
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
		background-color: #63d471;
		background-image: linear-gradient(315deg, #63d471 0%, #233329 74%);
		transition: -webkit-transform 0.6s cubic-bezier(0.694, 0.048, 0.335, 1);
		transition: transform 0.6s cubic-bezier(0.694, 0.048, 0.335, 1);
		transition: transform 0.6s cubic-bezier(0.694, 0.048, 0.335, 1),
			-webkit-transform 0.6s cubic-bezier(0.694, 0.048, 0.335, 1);
		z-index: 2;
	}

	.the-button .button-icon {
		position: absolute;
		top: 13px;
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
`

export default ButtonStyle
