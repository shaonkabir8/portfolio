import styled from "styled-components"

const HeaderStyle = styled.div`
	.logo a {
		font-weight: bold;
		font-size: 35px;
		padding: 9px;
	}
	.mainmenu ul,
	.blogmenu ul {
		margin: 0 !important;
	}
	.mainmenu li,
	.blogmenu li {
		display: inline-block;
	}
	.mainmenu li a,
	.blogmenu li a {
		display: block;
		color: #ddd;
		font-weight: 400;
		padding: 15px;
		position: relative;
		transition: all 0.2s linear;
	}
	.mainmenu li a:hover,
	.blogmenu li a:hover {
		color: #fff;
		transition: all 0.4s linear;
		text-decoration: none;
	}
	.mainmenu li a:hover::after,
	.blogmenu li a:hover::after {
		position: absolute;
		left: 15px;
		bottom: 11px;
		width: 70%;
		height: 1px;
		content: "";
		background: ${props => props.theme.color.green};
	}
	.header {
		padding: 15px;
	}
`

export default HeaderStyle
