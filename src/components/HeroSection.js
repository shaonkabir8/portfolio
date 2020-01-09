import React from "react"
import Typed from "react-typed"
import { Link } from "gatsby"
import HeroStyles from "../styles/HeroStyles"

const HeroSection = () => {
  const strings = [
    "A JavaScript Lover",
    "A Dedicated Frontend Developer",
    "An Open Sources Entusiast",
    "A Dreamer",
  ]
  return (
    <HeroStyles>
      <div className="hero-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="hero-text">
                <h1>Hello, I'm Shaon Kabir</h1>
                <h4>
                  <Typed
                    strings={strings}
                    typeSpeed={40}
                    backSpeed={50}
                    loop={true}
                  />
                </h4>
              </div>
            </div>
            <Link to="/" className="scrollIcon">
              <i class="fas fa-angle-down"></i>
            </Link>
          </div>
        </div>
      </div>
    </HeroStyles>
  )
}

export default HeroSection
