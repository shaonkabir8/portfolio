import React from "react"
import SectionTitle from "./SectionTitle"
import PortfolioItem from "./PortfolioItem"
const Portfolio = props => {
	return (
		<div className="portfolio-section container" id="portfolio">
			<SectionTitle title="Featured Projects" />
			<PortfolioItem />
		</div>
	)
}

export default Portfolio
