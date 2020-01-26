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
`

export default HeroStyles
