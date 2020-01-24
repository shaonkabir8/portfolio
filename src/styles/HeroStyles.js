import styled from "styled-components"
import HeroBg from "../images/hero-bg.jpg"

const HeroStyles = styled.div`
  .hero-area {
    text-align: center;
    padding: 80px 0;
    position: relative;
    z-index: 3;
    background-image: url(${HeroBg});
    background-size: cover;
    background-position: center;
    color: #fff;
  }
  .hero-area::after {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    content: "";
    z-index: -1;
    opacity: 0.6;
    background: ${props => props.theme.bg};
    background: ${props => props.theme.gradient};
  }
  .hero-text {
    padding: 150px;
    text-align: center;
  }
  .scrollIcon {
    color: #fff;
    font-size: 35px;
    position: absolute;
    left: 50%;
    bottom: 10%;
  }

  .hero-text h1 {
    font-size: 50px;
    font-weight: 900;
  }
  .type-result {
    color: yellow;
  }
  .typed-cursor {
    color: red;
    font-style: italic;
  }
`

export default HeroStyles
