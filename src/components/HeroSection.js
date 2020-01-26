import React from "react"
import { Link } from "gatsby"
import HeroStyles from "../styles/HeroStyles"

const HeroSection = () => {
  return (
    <HeroStyles>
      <div className="hero-area">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="hero-text">
                <h4>Hello, I'm</h4>
                <h1>Shaon Kabir</h1>
                <h3>Interactive Front-end Developer</h3>
              </div>
              <Link className="boxed-btn" to="#about">
                About me
              </Link>
            </div>
            <div className="col-md-4 text-right">
              <div className="social-logo">
                {/* Social Logo will be added here*/}
                {/* Icon should be SVG for better styling*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroStyles>
  )
}

export default HeroSection
