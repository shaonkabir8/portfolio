import React from "react"
import Img from "gatsby-image"
import { Link, graphql, useStaticQuery } from "gatsby"
import PortfolioItemStyle from "../styles/PortfolioItemStyle"

const PortfolioItem = props => {
  const data = useStaticQuery(graphql`
    query getProjectThumbnail {
      creative: file(relativePath: { eq: "creative.png" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <PortfolioItemStyle>
      <div className="container">
        <div className="row mb-100">
          <div className="col-md-7">
            <div className="project-image-section">
              <Link to="https://github.com/Shaonkabir">
                <Img fluid={data.creative.childImageSharp.fluid} />
              </Link>
            </div>
          </div>
          <div className="col-md-5 text-right">
            <div className="project-info-section">
              <p className="featured">Featured Project</p>
              <h4>
                <Link to="https://github.com/Shaonkabir">Github Finder</Link>
              </h4>
              <div className="project-desc">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
                  quibusdam.
                </p>
              </div>
              <ul className="project-stack">
                <li>React.js</li>
                <li>Gatsby.js</li>
                <li>SCSS</li>
                <li>Contentfull</li>
              </ul>
              <div className="project-link">
                <Link to="">
                  <i className="fab fa-github"></i>
                </Link>
                <Link to="">
                  <i className="fas fa-link"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-100">
          <div className="col-md-5 text-left">
            <div className="project-info-section">
              <p className="featured">Featured Project</p>
              <h4>
                <Link to="/">Movie Dash Board</Link>
              </h4>
              <div className="project-desc left-desc">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
                  quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Aut, quibusdam.
                </p>
              </div>
              <ul className="project-stack left-stack">
                <li>React.js</li>
                <li>Gatsby.js</li>
                <li>SCSS</li>
                <li>Wordpress</li>
              </ul>
              <div className="project-link">
                <Link to="">
                  <i className="fab fa-github"></i>
                </Link>
                <Link to="">
                  <i className="fas fa-link"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="project-image-section">
              <Link t="/">
                <Img fluid={data.creative.childImageSharp.fluid} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PortfolioItemStyle>
  )
}

export default PortfolioItem
