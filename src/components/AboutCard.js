import React from "react"
import AboutCardStyle from "../styles/AboutCardStyle"

const AboutCard = () => {
  return (
    <AboutCardStyle>
      <div className="about-info">
        <p>
          <span className="row">
            <span className="col-md-4">
              <i class="fas fa-user"></i> Name:
            </span>
            <span className="col-md-8 text-right">Shaon Kabir</span>
          </span>
        </p>
        <p>
          <span className="row">
            <span className="col-md-4">
              <i class="fas fa-envelope"></i> Email:
            </span>
            <span className="col-md-8 text-right">shaonkabir98@gmail.com</span>
          </span>
        </p>
        <p>
          <span className="row">
            <span className="col-md-4">
              <i class="fas fa-phone"></i> Phone:
            </span>
            <span className="col-md-8 text-right">+880 1916380678</span>
          </span>
        </p>
        <p>
          <span className="row">
            <span className="col-md-6">
              <i class="fas fa-globe-asia"></i> Nationality:
            </span>
            <span className="col-md-6 text-right">Bangladeshi</span>
          </span>
        </p>

        <h2 className="signature">Shaon Kabir</h2>
        <div className="portfolio-links">
          <a href="https://github.com/Shaonkabir" target="_blank">
            <i class="fab fa-github"></i>
          </a>

          <a href="https://codepen.io/shaonkabir/" target="_blank">
            <i class="fab fa-codepen"></i>
          </a>

          <a href="https://www.freecodecamp.org/shaonkabir" target="_blank">
            <i class="fab fa-free-code-camp"></i>
          </a>

          <a href="https://medium.com/@shaonkabir" target="_blank">
            <i class="fab fa-medium-m"></i>
          </a>

          <a
            href="https://drive.google.com/open?id=19_X-PjZHofoOKFyQzNylDl-r1rc75IAK"
            target="_blank"
            className="boxed-btn"
          >
            Download Resume
            <i class="fas fa-download"></i>
          </a>
        </div>
      </div>
    </AboutCardStyle>
  )
}

export default AboutCard
