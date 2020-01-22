import React from "react"
import PortfolioStyle from "../styles/PortfolioStyle"
import ProjectItem from "./ProjectItem"
import PortfolioSectionImg from "../images/stackoverflow.png"

const PortfolioItem = () => {
  return (
    <>
      <PortfolioStyle>
        <div className="portfolio-section section-1">
          <div className="section-bg section-bg-1">
            <div className="hover-content hover-content-1">
              <ProjectItem name="Cool Huh ??" />
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="section-details">
                  <h3>Coolest Website</h3>
                  <img src={PortfolioSectionImg} alt="PortfolioItem" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus dicta, provident animi laborum a sit nostrum quisquam
                    corrupti maxime nam error at aliquam perferendis asperiores.
                  </p>
                  <a href="" className="boxed-btn">
                    Learn more
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-section section-2">
          <div className="section-bg section-bg-2">
            <div className="hover-content hover-content-2">
              <ProjectItem name="Fantastic Website" />
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-6">
                <div className="section-details section-details-2">
                  <h3>Coolest Website</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus dicta, provident animi laborum a sit nostrum quisquam
                    corrupti maxime nam error at aliquam perferendis asperiores.
                  </p>
                  <a href="" className="boxed-btn">
                    Learn more
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PortfolioStyle>
    </>
  )
}

export default PortfolioItem
