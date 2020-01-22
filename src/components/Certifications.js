import React from "react"
import CertificationsStyle from "../styles/CertificationsStyle"
import CertificationsModal from "../components/CertificationsModal"

const Certifications = () => {
  return (
    <CertificationsStyle>
      <div className="certification-section">
        <h3>
          Fronted Development
          <span>| RR Foundation - May 2017</span>
          <span className="course-content">
            <p>
              Started my web development journey with RR Foundation. One of the
              best learning platform in Bangladesh
            </p>
          </span>
        </h3>
        <h3>
          The Complete JavaScript Course 2018: Build Real Projects!
          <span>| Udemy - April 2018</span>
          <span className="course-content">
            <p>
              Best JavaScript Corses by Jonas Schmedtmann. A great course with a
              great mentor
            </p>
          </span>
        </h3>
        <h3>
          Es6 for everyone
          <span>| Wes Bos - April 2019</span>
          <span className="course-content">
            <p>
              Modern JavaScript(Es6) - A Super Sexy Course of Wes Bos.Learned a
              lot.
            </p>
          </span>
        </h3>

        <h3>
          React for beginner
          <span>| Wes Bos - July 2019</span>
          <span className="course-content">
            <p>
              Best course ever for beginner React.Basically Wes Bos is an
              awesome mentor. This is the coolest courses of React I've
              compleated
            </p>
          </span>
        </h3>

        <h3>
          Advanced React with GraphQl
          <span>| Wes Bos - Septembor 2019</span>
          <span className="course-content">
            <p>
              Nothing more to explain about Wes Bos. "Advanced React with
              GraphQL" is an awesome and fantastic course I've ever found.
            </p>
          </span>
        </h3>
        <a
          href="#"
          className="boxed-btn modalBtn"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Load more <i class="fas fa-long-arrow-alt-right"></i>
        </a>
        <CertificationsModal />
      </div>
    </CertificationsStyle>
  )
}

export default Certifications
