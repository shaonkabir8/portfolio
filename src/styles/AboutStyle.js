import styled from "styled-components"

const AboutStyle = styled.div`
	.about-image img {
		width: 330px;
		height: auto;
	}
	.image-section {
		height: 572px;
		font-size: 17px;
		line-height: 2;
		color: #fff;
	}
	.image-section::after {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		content: "";
		opacity: 0;
		transition: ${props => props.theme.transition};
		background: ${props => props.theme.bg};
		background: ${props => props.theme.gradient};
	}
	.hover {
		position: absolute;
		left: 0;
		top: 0;
		transform: translate(-50%, -50%);
		z-index: 1;
		width: 100%;
		padding: 80px;
		display: none;
		visibility: hidden;
		transition: ${props => props.theme.transition};
	}

	.image-section:hover .hover {
		left: 50%;
		top: 55%;
		display: block;
		visibility: visible;
		transition-duration: 0.2s;
	}
	.image-section:hover::after {
		opacity: 0.7;
	}

	.hover .slider-btn {
		display: inline-block;
		border: 1px solid #030000;
		color: #000;
		padding: 10px 20px;
		transition: ${props => props.theme.transition};
		font-size: 13px;
		margin-top: 30px;
	}

	.hover .slider-btn.active {
		border: 1px solid #fff;
		color: #060500;
		background: #fffff9;
		transition: ${props => props.theme.transition};
	}
`

export default AboutStyle
