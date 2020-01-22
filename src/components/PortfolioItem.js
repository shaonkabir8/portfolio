import React, { Fragment } from "react"
import PortfolioStyle from "../styles/PortfolioStyle"
import ProjectItem from "./ProjectItem"
import PortfolioCard from "./PortfolioCard"
import PortfolioSectionImg from "../images/stackoverflow.png"

const PortfolioItem = () => {
  return (
    <Fragment>
      <PortfolioStyle>
        <div className="portfolio-section" id="portfolio">
          <div className="container">
            <div className="row">
              <PortfolioCard
                imgSrc={PortfolioSectionImg}
                title="Cool Website"
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat obcaecati minus qui, non ut animi."
                date="10 January 2020"
                githubLink="#"
                liveDemo="#"
              />
            </div>
          </div>
        </div>
      </PortfolioStyle>
    </Fragment>
  )
}

export default PortfolioItem
