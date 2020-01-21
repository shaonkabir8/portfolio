import React from "react"

const ProjectItem = props => {
  return (
    <div className="section-hover">
      <h5>{props.name}</h5>
      <p>
        Made with <i className="fas fa-heart" /> and{" "}
        <i className="fas fa-coffee" />{" "}
      </p>
      <p className="text-left">Stack &amp; Tools :)</p>
      <div className="stack-image">
        <ul>
          <li>
            <i className="fab fa-html5"></i>
            <span>HTML</span>
          </li>
          <li>
            <i className="fab fa-css3"></i>
            <span>CSS</span>
          </li>
          <li>
            <i className="fab fa-js"></i>
            <span>JavaScript</span>
          </li>
          <li>
            <i className="fab fa-bootstrap"></i>
            <span>Bootstrap</span>
          </li>
          <li>
            <i className="fab fa-font-awesome"></i>
            <span>FontAwesome</span>
          </li>
          <li>
            <i className="fas fa-font"></i>
            <span>Google Font</span>
          </li>
        </ul>
      </div>
      <hr />
      <a href="" className="boxed-btn">
        Live Demo
        <i className="fas fa-link"></i>
      </a>
    </div>
  )
}

export default ProjectItem
