import styled from "styled-components"

const AboutCardStyle = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Courgette&display=swap");
  .about-info {
    box-shadow: 0 0 10px #929191;
    padding: 35px;
    background: #fff;
    margin: 90px 60px;
    font-size: 15px;
    margin-bottom: 0;
  }
  .about-info i {
    margin-right: 15px;
  }
  .about-info p {
    border-bottom: 1px solid;
  }
  .portfolio-links a {
    display: inline-block;
    color: #000;
    border: 1px solid ${props => props.theme.bg};
    text-align: center;
    width: 30px;
    height: 30px;
    line-height: 30px;
    padding-left: 6px;
    margin: 4px;
    margin-left: 0;
  }
  .portfolio-links a:hover {
    background: ${props => props.theme.bg};
    transition: ${props => props.theme.transition};
  }
  .portfolio-links .boxed-btn {
    display: inline-block;
    background: ${props => props.theme.bg};
    color: #fff;
    font-size: 13px;
    margin-left: 10%;
    padding: 5px 10px;
    width: auto;
    height: auto;
  }
  .portfolio-links .boxed-btn:hover {
    background: #000;
    border: 1px solid ${props => props.theme.bg};
    transition: ${props => props.theme.transition};
  }
  .portfolio-links .boxed-btn i {
    margin-left: 6px;
  }
  .portfolio-links {
    padding: 15px 0;
  }
  .signature {
    font-family: "Courgette", cursive;
    text-align: center;
    margin-top: 20px;
  }

  .image-section {
    position: relative;
    z-index: 1;
  }
`

export default AboutCardStyle
