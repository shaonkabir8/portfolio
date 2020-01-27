import React from "react"
import { Link } from "gatsby"
import ButtonStyle from "../styles/ButtonStyle"

const Button = props => {
	let buttonIcon = ""
	if (props.icon) {
		buttonIcon = (
			<span className="button-icon">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476.213 476.213">
					<path d="M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607" />
				</svg>
			</span>
		)
	}

	return (
		<ButtonStyle>
			<Link to="" className="the-button " {...props}>
				<span className="button-text">{props.text}</span>
				<div className="button-mask"></div>
				{buttonIcon}
			</Link>
		</ButtonStyle>
	)
}

export default Button
