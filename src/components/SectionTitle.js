import React from "react"
import styled from "styled-components"

const SectionStyle = styled.div`
	.section-title {
		padding: 50px 0;
	}
	.section-title h2 {
		position: relative;
		z-index: 1;
		padding-left: 22px;
		font-size: 35px;
		font-weight: 700 !important;
	}
	.section-title h2::before {
		position: absolute;
		content: "";
		left: 0px;
		top: 6px;
		width: 5px;
		height: 30px;
		background: ${props => props.theme.gradient};
		transform: rotate(24deg);
	}
`

const SectionTitle = props => {
	return (
		<div className="row">
			<div className="col text-left">
				<SectionStyle>
					<div className="section-title">
						<h2>{props.title}</h2>
					</div>
				</SectionStyle>
			</div>
		</div>
	)
}

export default SectionTitle
