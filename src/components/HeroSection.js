import React from "react"
import {
  FaGithub,
  FaCodepen,
  FaLinkedinIn,
  FaMediumM,
  FaTwitter,
} from "react-icons/fa"
import Button from "../ui/Button"
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
              <Button text="About me" icon="hello" />
            </div>
            <div className="col-md-4 text-right">
              <div className="social-logo">
                <ul>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/Shaonkabir"
                    >
                      <FaGithub />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://codepen.io/shaonkabir8"
                    >
                      <FaCodepen />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/shaonkabir8"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://medium.com/@shaonkabir8"
                    >
                      <FaMediumM />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://twitter.com/shaonkabir8"
                    >
                      <FaTwitter />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroStyles>
  )
}

export default HeroSection
