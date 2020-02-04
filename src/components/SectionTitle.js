import React from "react"
import styled from "styled-components"

const SectionStyle = styled.div`
	.section-title {
		padding: 50px 0;
	}
	.section-title h2 {
		position: relative;
		padding: 8px 15px;
		font-size: 26px;
		font-weight: 700 !important;
		display: inline-block;
		background: ${props => props.theme.color.light};
		color: ${props => props.theme.color.green};
	}
	.section-title h2::before {
		position: absolute;
		content: "";
		left: 90%;
		top: 50%;
		width: 100%;
		height: 2px;
		background: #6b6c6e;
		z-index: -1;
	}
`

const SectionTitle = props => {
	return (
		<div className="row">
			<div className="col">
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
