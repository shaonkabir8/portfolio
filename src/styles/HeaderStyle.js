import styled from "styled-components"

const HeaderStyle = styled.div`
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
