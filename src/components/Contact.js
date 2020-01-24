import React from "react"
import SectionTitle from "./SectionTitle"
import ContactStyle from "../styles/ContactStyle"

const contact = () => (
  <ContactStyle>
    <div className="container">
      <SectionTitle title="Contact me" />
    </div>
    <div className="contact-section" id="contact">
      <div className="contact-information">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 dark-background-content">
              <div className="contact-info-left">
                <h2>Get in Touch</h2>
                <p>
                  <i className="fas fa-globe-asia"></i>
                  <span>
                    Jashore,
                    <br /> Khulna, Bangladesh
                  </span>
                </p>
                <p>
                  <i className="fas fa-at"></i>
                  <span>
                    shaonkabir98@gmail.com <br />
                    shaonkabir98@yahoo.com
                  </span>
                </p>
                <p>
                  <i className="fas fa-phone"></i>
                  <span>
                    +880 1916380678 <br />
                    +880 1718916293
                  </span>
                </p>
                <h3>Stay Connected</h3>
                <div className="contact-social">
                  <a href="https://web.facebook.com/shaon.kabir.7927">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://twitter.com/shaonkabir8">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.instagram.com/shaonbd188/">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.linkedin.com">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="contact-form">
                <h2>Drop me line</h2>
                <form action="">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="name"
                  />
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    className="email"
                  />
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        placeholder="Subject"
                        className="subject"
                      />
                    </div>
                    <div className="col-md-6">
                      <input type="tel" placeholder="Phone Number (Optional)" />
                    </div>
                  </div>
                  <textarea
                    placeholder="Write your message"
                    className="message"
                  ></textarea>
                  <a href="https://google.com" className="boxed-btn sendBtn">
                    Send Message
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ContactStyle>
)

export default contact
