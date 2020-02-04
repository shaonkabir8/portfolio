import styled from "styled-components"

const AboutStyle = styled.div`
	.gatsby-image-wrapper {
		position: initial !important;
	}

	.image-section {
		position: relative;
		width: 100%;
		max-width: 300px;
		margin-left: 100px;
		.overlay {
			&:focus {
				outline: 0;
			}
		}
	}

	.image-section img {
		position: relative;
		mix-blend-mode: multiply;
		filter: grayscale(100%) contrast(1);
		border-radius: 2px;
		transition: ${props => props.theme.transition};
	}

	.image-section .overlay {
		width: 100%;
		position: relative;
		border-radius: 2px;
		&:hover,
		&:focus {
			background: transparent;
			&:after {
				top: 15px;
				left: 15px;
			}
			img {
				filter: none;
				mix-blend-mode: normal;
			}
		}
		&:before,
		&:after {
			content: "";
			display: block;
			position: absolute;
			width: 100%;
			height: 100%;
			border-radius: 2px;
			transition: ${props => props.theme.transition};
			z-index: -1;
		}
		&:before {
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: ${props => props.theme.color.green};
			mix-blend-mode: screen;
		}
		&:after {
			border: 2px solid ${props => props.theme.color.green};
			top: 20px;
			left: 20px;
			z-index: -1;
		}
	}

	.about-content p span {
		color: ${props => props.theme.color.green};
	}
`

export default AboutStyle
