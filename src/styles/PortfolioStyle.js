import styled from "styled-components"

const PortfolioStyle = styled.div`
	.section-bg {
		background-image: url(../../static/favicon.ico);
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		overflow-x: hidden;
		position: absolute;
		right: 0;
		top: 0;
		width: 52%;
		height: 100%;
	}

	.portfolio-section {
		position: relative;
		z-index: 1;
	}

	.section-details {
		background: #1a1154;
		color: #fcf8f8;
		padding: 35px;
		position: relative;
		z-index: 2;
		padding: 10%;
	}
	.section-details::after {
		position: absolute;
		left: 147px;
		top: 0;
		width: 100%;
		height: 100%;
		content: "";
		background: #1a1154;
		z-index: -1;
		transform: skewX(37deg);
	}
	.section-details::before {
		position: absolute;
		left: -4987%;
		top: 0;
		width: 5000%;
		height: 100%;
		content: "";
		background: #1a1154;
		z-index: -1;
	}

	.stack-image ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.stack-image li {
		display: inline-block;
		color: #fff;
		text-align: center;
	}
	.stack-image li img {
		width: 50px;
		height: 42px;
	}
	.stack-image span {
		display: block;
		font-size: 60%;
		color: #000;
		font-weight: bold;
		padding-left: 9px;
		margin-top: 9px;
		margin-bottom: 19px;
	}

	.section-bg::after {
		position: absolute;
		content: "";
		right: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: var(--gradient);
		opacity: 0;
	}
	.portfolio-section:hover .section-bg::after {
		opacity: 0.9;
	}

	.section-bg-2 {
		background-image: url(../images/stackoverflow.png);
		left: 0;
		top: 0;
		width: 52%;
		height: 100%;
	}

	.section-details-2 {
		padding-left: 136px;
		background: #f12a7b;
	}
	.section-details-2:after {
		left: auto;
		right: 108px;
		transform: skew(-29deg);
		background: #f12a7b;
	}
	.section-details-2::before {
		left: auto;
		top: 0;
		width: 5000%;
		background: #f12a7b;
	}

	.hover-content {
		position: absolute;
		right: 0;
		top: 0;
		width: 100%;
		height: 100%;
		text-align: center;
		padding: 38px;
		padding-left: 24%;
		display: none;
		visibility: none;
		z-index: 5;
		color: #000;
	}

	.hover-content.hover-content-2 {
		left: 0;
		text-align: left;
	}

	.section-1:hover .hover-content-1 {
		display: block;
		visibility: visible;
		transition: all 0.4s linear;
	}
	.section-2:hover .hover-content-2 {
		display: block;
		visibility: visible;
		transition: all 0.4s linear;
	}
`

export default PortfolioStyle
