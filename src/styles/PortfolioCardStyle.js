import styled from "styled-components"

const PortfolioCardStyle = styled.div`
	.card {
		position: relative;
		z-index: 1;
	}
	.card-hover {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: ${props => props.theme.gradient};
		color: #fff;
		transition: ${props => props.theme.transition};
		opacity: 0;
		visibility: hidden;
		text-align: center;
		padding-top: 50px;
	}
	.card:hover .card-hover {
		visibility: visible;
		opacity: 1;
	}
	.boxed-btn {
		display: inline-block;
		background: yellow;
		color: #000;
		font-size: 16px;
		padding: 14px 18px;
		text-align: center;
		border-radius: 5px;
		border: 1px solid yellow;
		margin: 10px;
		transition: ${props => props.theme.transition};
	}
	.boxed-btn i {
		margin-left: 8px;
	}
	.boxed-btn:hover {
		background: ${props => props.theme.gradient};
		color: #fff;
		text-decoration: none;
		border-color: transparent;
		box-shadow: 0 0 5px ${props => props.theme.gradient};
	}
	.mark {
		margin: 20px 0;
		display: inline-block;
	}
	.stack-image {
		margin-top: 50px;
	}
`
export default PortfolioCardStyle
