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
`
export default PortfolioCardStyle
