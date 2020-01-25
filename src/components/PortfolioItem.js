import React, { Fragment, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import PortfolioStyle from "../styles/PortfolioStyle"
import PortfolioCard from "./PortfolioCard"

const PortfolioItem = () => {
  // grab project images to pass them as prop
  const data = useStaticQuery(graphql`
    query grabImages {
      creative: file(relativePath: { eq: "creative.png" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pirlox: file(relativePath: { eq: "pirlox.png" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tinyone: file(relativePath: { eq: "tinyone.png" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      portfolio: file(relativePath: { eq: "portfolio.png" }) {
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
            imgSrc={data.pirlox.childImageSharp.fluid}
            title="Pirlox Template"
            desc="Personal Portfolio Template named Pirlox. It's a static website build with HTML, CSS and JavaScript. Few Coolest animation used using jQuery. Bootstrap is used for Better User Interface and Mobile friendly"
            date="15 November 2019"
            githubLink="https://github.com/Shaonkabir/creative-template"
            liveDemo="https://shaonkabir.github.io/pirlox"
          />
        </div>
        <div className="col-md-6">
          <PortfolioCard
            imgSrc={data.creative.childImageSharp.fluid}
            title="Creative Template"
            desc="Creative Template for Multipurposes. Basically It's about a Business Agency but this template can be used as a personal portfolio template"
            date="18 Octobor 2019"
            githubLink="https://github.com/Shaonkabir/creative-template"
            liveDemo="https://shaonkabir.github.io/creative-template"
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
                  imgSrc={data.creative.childImageSharp.fluid}
                  title="Creative Template"
                  desc="Creative Template for Multipurposes. Basically It's about a Business Agency but this template can be used as a personal portfolio template"
                  date="18 Octobor 2019"
                  githubLink="https://github.com/Shaonkabir/creative-template"
                  liveDemo="https://shaonkabir.github.io/creative-template"
                />
              </div>
              <div className="col-md-6">
                <PortfolioCard
                  imgSrc={data.pirlox.childImageSharp.fluid}
                  title="Pirlox Template"
                  desc="Personal Portfolio Template named Pirlox. It's a static website build with HTML, CSS and JavaScript. Few Coolest animation used using jQuery. Bootstrap is used for Better User Interface and Mobile friendly"
                  date="15 November 2019"
                  githubLink="https://github.com/Shaonkabir/creative-template"
                  liveDemo="https://shaonkabir.github.io/pirlox"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <PortfolioCard
                  imgSrc={data.tinyone.childImageSharp.fluid}
                  title="Tinyone Template v.01"
                  desc="Tinyone Template for self Branding to showcase services to world. It's petty nice and clean design."
                  date="25 November 2019"
                  githubLink="https://github.com/Shaonkabir/tinyone"
                  liveDemo="https://shaonkabir.github.io/tinyone"
                />
              </div>
              <div className="col-md-6">
                <PortfolioCard
                  imgSrc={data.portfolio.childImageSharp.fluid}
                  title="Personal Portfolio"
                  desc="Personal Portfolio Template for one of my coligue of a local IT farm. Build this for my coligue interview and Self Branding"
                  githubLink="https://github.com/Shaonkabir/portfolio-two"
                  date="14 September 2019"
                  liveDemo="https://shaonkabir.github.io/portfolio-two"
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
