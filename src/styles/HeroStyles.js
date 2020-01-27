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
  .social-logo ul {
    padding: 5px;
    background-color: #111a28;
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
    color: #fff;
  }
`

export default HeroStyles
