import React, { Fragment, useState, useEffect } from "react"
import Isotope from "isotope-layout"
import { graphql, useStaticQuery } from "gatsby"
import PortfolioStyle from "../styles/PortfolioStyle"
import PortfolioCard from "./PortfolioCard"

const PortfolioItem = () => {
  // store the isotope object in one state
  const [isotope, setIsotope] = useState(null)
  // store the filter keyword in another state
  const [filterKey, setFilterKey] = useState("*")

  // initialize an Isotope object with configs
  useEffect(() => {
    setIsotope(
      new Isotope(".filter-container", {
        layoutMode: "masonry",
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

  // grab project images to pass them as prop
  const data = useStaticQuery(graphql`
    query grabImages {
      car: file(relativePath: { eq: "car.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      city: file(relativePath: { eq: "chinaCity.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      snowfall: file(relativePath: { eq: "snowfall.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      building: file(relativePath: { eq: "building.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Fragment>
      <PortfolioStyle>
        <div className="portfolio-section" id="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="filter-menu">
                  <button
                    onClick={() => setFilterKey("*")}
                    onKeyDown={() => setFilterKey("")}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setFilterKey("javaScript")}
                    onKeyUp={() => setFilterKey("javaScript")}
                  >
                    JavaScript
                  </button>
                  <button
                    onClick={() => setFilterKey("react")}
                    onKeyPress={() => setFilterKey("react")}
                  >
                    React
                  </button>
                  <button
                    onClick={() => setFilterKey("gatsby")}
                    onKeyDown={() => setFilterKey("gatsby")}
                  >
                    Gatsby
                  </button>
                  <button
                    onClick={() => setFilterKey("wordpress")}
                    onKeyDown={() => setFilterKey("wordpress")}
                  >
                    Wordpress
                  </button>
                </div>
              </div>
            </div>
            <div className="row filter-container">
              <PortfolioCard
                imgSrc={data.city.childImageSharp.fluid}
                title="Cool Website"
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat obcaecati minus qui, non ut animi."
                date="10 January 2020"
                githubLink="#"
                liveDemo="#"
                className="col-md-6 filter-item react"
              />
              <PortfolioCard
                imgSrc={data.car.childImageSharp.fluid}
                title="Website"
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat obcaecati minus qui, non ut animi."
                date="10 January 2020"
                githubLink="#"
                liveDemo="#"
                className="col-md-6 filter-item react"
              />
              <PortfolioCard
                imgSrc={data.snowfall.childImageSharp.fluid}
                title="Awesome ?"
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat obcaecati minus qui, non ut animi."
                date="10 January 2020"
                githubLink="#"
                liveDemo="#"
                className="col-md-6 filter-item gatsby"
              />
            </div>
          </div>
        </div>
      </PortfolioStyle>
    </Fragment>
  )
}

export default PortfolioItem
