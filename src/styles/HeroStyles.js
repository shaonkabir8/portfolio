import styled from "styled-components"

const HeroStyles = styled.div`
  .hero-area {
    padding: 100px 0;
    color: #fff;
    height: 100vh;
  }

  .hero-text h3 {
    margin-bottom: 30px;
    color: ${props => props.theme.color.green};
  }
  .hero-text h1 {
    font-size: 80px;
    font-weight: 900;
  }
  .hero-area .boxed-btn {
    padding: 15px 25px;
    font-size: 20px;
  }
  .hero-text h4 {
    font-family: "Merriweather", serif;
    font-weight: normal;
    opacity: 0.6;
    font-style: italic;
    font-size: 25px;
  }

  .social-logo {
    position: fixed;
    left: 70px;
    top: 28%;
    z-index: 5;
  }
  .social-logo::before {
    position: absolute;
    left: 50%;
    top: 90%;
    width: 1px;
    height: 100%;
    content: "";
    background: #c1c2c4;
  }
  .social-logo ul {
    padding: 5px;
  }

  .social-logo ul li {
    margin-bottom: 10px;
  }

  .social-logo ul li a {
    color: rgba(223, 223, 223, 0.85);
    font-size: 30px;
    transition: color 0.4s linear;
  }
  .social-logo ul li a:hover {
    color: ${props => props.theme.color.green};
  }
  .fixed-email a {
    display: block;
    color: #c1c2c4;
    transform: rotate(90deg);
    font-size: 18px;
    transition: ${props => props.theme.transition};
    letter-spacing: 0.1em;
  }
  .fixed-email a:hover {
    color: ${props => props.theme.color.green};
    text-decoration: none;
  }
  .fixed-email {
    position: fixed;
    right: -50px;
    top: 48%;
    display: block;
    height: 200px;
  }
  .fixed-email::before {
    position: absolute;
    width: 1px;
    height: 100%;
    content: "";
    background: #c1c2c4;
    right: 123px;
    bottom: auto;
    top: 75%;
  }
`

export default HeroStyles
