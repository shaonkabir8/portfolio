import styled from "styled-components"

const PortfolioStyle = styled.div`
	.filter-menu {
		margin-bottom: 25px;
	}
	.filter-menu button {
		display: inline-block;
		color: ${props => props.theme.gradient};
		border: 1px solid;
		padding: 10px 15px;
		margin: 0 5px;
		cursor: pointer;
		transition: ${props => props.theme.transition};
	}
`

export default PortfolioStyle
