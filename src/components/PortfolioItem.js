import React, { Fragment, useState, useEffect } from "react"
import Isotope from "isotope-layout"
import PortfolioStyle from "../styles/PortfolioStyle"
import ProjectItem from "./ProjectItem"
import PortfolioCard from "./PortfolioCard"
import PortfolioSectionImg from "../images/stackoverflow.png"

const PortfolioItem = () => {
  // store the isotope object in one state
  const [isotope, setIsotope] = useState(null)
  // store the filter keyword in another state
  const [filterKey, setFilterKey] = useState("*")

  // initialize an Isotope object with configs
  useEffect(() => {
    setIsotope(
      new Isotope(".filter-container", {
        itemSelector: ".filter-item",
      })
    )
  }, [])

  // handling filter key change
  useEffect(() => {
    if (isotope) {
      filterKey === "*"
        ? isotope.arrange({ filter: `*` })
        : isotope.arrange({ filter: `.${filterKey}` })
    }
  }, [isotope, filterKey])

  return (
    <Fragment>
      <PortfolioStyle>
        <div className="portfolio-section" id="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <ul className="filter-menu">
                  <li onClick={() => setFilterKey("*")}>All</li>
                  <li onClick={() => setFilterKey("javaScript")}>JavaScript</li>
                  <li onClick={() => setFilterKey("react")}>React</li>
                  <li onClick={() => setFilterKey("gatsby")}>Gatsby</li>
                  <li onClick={() => setFilterKey("wordpress")}>Wordpress</li>
                </ul>
              </div>
            </div>
            <div className="row filter-container">
              <PortfolioCard
                imgSrc={PortfolioSectionImg}
                title="Cool Website"
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat obcaecati minus qui, non ut animi."
                date="10 January 2020"
                githubLink="#"
                liveDemo="#"
                className="col-md-4 filter-item react"
              />
              <PortfolioCard
                imgSrc={PortfolioSectionImg}
                title="Website"
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat obcaecati minus qui, non ut animi."
                date="10 January 2020"
                githubLink="#"
                liveDemo="#"
                className="col-md-4 filter-item react"
              />
              <PortfolioCard
                imgSrc={PortfolioSectionImg}
                title="Awesome ?"
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat obcaecati minus qui, non ut animi."
                date="10 January 2020"
                githubLink="#"
                liveDemo="#"
                className="col-md-4 filter-item gatsby"
              />
            </div>
          </div>
        </div>
      </PortfolioStyle>
    </Fragment>
  )
}

export default PortfolioItem
