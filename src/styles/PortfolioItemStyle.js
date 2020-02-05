import styled from "styled-components"

const PortfolioItemStyle = styled.div`
	.project-info-section .featured {
		font-size: 13px;
		font-weight: normal;
		color: ${props => props.theme.color.green};
		font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono",
			"Lucida Console", Monaco, monospace;
		margin-top: 10px;
		padding-top: 0px;
	}
	.project-info-section h4 {
		font-size: 28px;
		margin: 0px 0px 20px;
		a {
			color: rgb(204, 214, 246);
		}
	}

	.project-desc {
		box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;
		position: relative;
		z-index: 2;
		background-color: rgb(23, 42, 69);
		color: rgb(168, 178, 209);
		font-size: 18px;
		transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
		padding: 25px;
		border-radius: 3px;
		margin-left: -90px;
		text-align: center;
		p {
			margin: 0px;
		}
	}
	.left-desc {
		margin-left: 0;
		margin-right: -90px;
	}

	.project-stack {
		position: relative;
		z-index: 2;
		list-style: none;
		li {
			font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono",
				"Lucida Console", Monaco, monospace;
			font-size: 13px;
			color: rgb(136, 146, 176);
			display: inline-block;
			margin: 20px;
			margin-right: 0;
		}
	}
	.left-stack li {
		margin-right: 20px;
		margin-left: 0;
	}

	.project-link {
		position: relative;
		a {
			padding: 10px;
			display: inline-block;
			margin-top: 10px;
			color: rgb(204, 214, 246);
			font-size: 25px;
			transition: ${props => props.theme.transition};
			&:hover {
				color: ${props => props.theme.color.green};
			}
		}
	}
	.mb-100 {
		margin-bottom: 100px;
	}

	// Portfolio Image style

	.project-image-section a {
		box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;
		position: relative;
		z-index: 1;
		background-color: rgb(100, 255, 218);
		border-radius: 4px;
		transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
		display: block;

		&::before {
			content: "";
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0px;
			left: 0px;
			z-index: 2;
			background-color: ${props => props.theme.color.green};
			opacity: 0.4;
			transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
		}
		&:hover::before {
			opacity: 0;
		}
	}
`

export default PortfolioItemStyle
