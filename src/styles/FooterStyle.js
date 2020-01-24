import styled from "styled-components"

const FooterStyle = styled.div`
	.footer {
		background: ${props => props.theme.gradient};
		color: #fff;
		padding: 30px;
	}
	.footer p {
		font-size: 18px;
		padding-top: 25px;
	}
`
export default FooterStyle
