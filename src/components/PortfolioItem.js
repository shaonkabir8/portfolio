import React, { Fragment, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import PortfolioStyle from "../styles/PortfolioStyle"
import PortfolioCard from "./PortfolioCard"

const PortfolioItem = () => {
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

  const [visible, setVisible] = useState(false)

  // setVisible Handler
  const showItem = () => {
    setVisible(true)
  }

  // define Project as empty initially
  let moreItem = ""

  if (visible) {
    moreItem = (
      <div className="row">
        <div className="col-md-6">
          <PortfolioCard
            imgSrc={data.city.childImageSharp.fluid}
            title="Cool Website"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat obcaecati minus qui, non ut animi."
            date="10 January 2020"
            githubLink="#"
            liveDemo="#"
          />
        </div>
        <div className="col-md-6">
          <PortfolioCard
            imgSrc={data.car.childImageSharp.fluid}
            title="Website"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat obcaecati minus qui, non ut animi."
            date="10 January 2020"
            githubLink="#"
            liveDemo="#"
          />
        </div>
      </div>
    )
    document.querySelector(".loadMoreBtn").style.display = "none"
  }

  return (
    <Fragment>
      <PortfolioStyle>
        <div className="portfolio-section" id="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <PortfolioCard
                  imgSrc={data.city.childImageSharp.fluid}
                  title="Cool Website"
                  desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat obcaecati minus qui, non ut animi."
                  date="10 January 2020"
                  githubLink="#"
                  liveDemo="#"
                />
              </div>
              <div className="col-md-6">
                <PortfolioCard
                  imgSrc={data.car.childImageSharp.fluid}
                  title="Website"
                  desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat obcaecati minus qui, non ut animi."
                  date="10 January 2020"
                  githubLink="#"
                  liveDemo="#"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <PortfolioCard
                  imgSrc={data.snowfall.childImageSharp.fluid}
                  title="Awesome ?"
                  desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat obcaecati minus qui, non ut animi."
                  date="10 January 2020"
                  githubLink="#"
                  liveDemo="#"
                />
              </div>
              <div className="col-md-6">
                <PortfolioCard
                  imgSrc={data.building.childImageSharp.fluid}
                  title="Building"
                  desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat obcaecati minus qui, non ut animi."
                  date="14 January 2020"
                  githubLink="#"
                  liveDemo="#"
                />
              </div>
            </div>
            {moreItem}
            <div className="row">
              <div className="col-md-6 offset-md-3 text-center">
                <button className="boxed-btn loadMoreBtn" onClick={showItem}>
                  Load More Projects
                  <i className="fas fa-long-arrow-alt-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </PortfolioStyle>
    </Fragment>
  )
}

export default PortfolioItem
