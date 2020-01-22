import React from "react"
import SectionTitle from "./SectionTitle"
import PortfolioItem from "./PortfolioItem"
import PortfolioStyle from "../styles/PortfolioStyle"
const Portfolio = props => {
	return (
		<PortfolioStyle>
			<div className="portfolio-section container" id="portfolio">
				<SectionTitle title="Projects" />
				<PortfolioItem />
			</div>
		</PortfolioStyle>
	)
}

export default Portfolio
