import styled from "styled-components"

const ModalStyle = styled.div`
  .certification-section h3 span {
    font-size: 65%;
    font-weight: normal;
    font-style: italic;
    margin-top: 12px;
    margin-left: 6px;
  }
  .certification-section h3 {
    font-size: 23px;
    font-style: italic;
    padding-bottom: 12px;
  }
  .certification-section p {
    margin-bottom: 0;
  }
  .course-content {
    display: block;
    margin-left: 0px !important;
    font-size: 70% !important;
  }

  .boxed-btn {
    display: inline-block;
    background: yellow;
    color: #000;
    font-size: 16px;
    padding: 11px 19px;
    text-align: center;
    border-radius: 5px;
    border: 1px solid yellow;
  }
  .boxed-btn:hover {
    color: #000;
    background: transparent;
    transition: all 0.3s linear;
  }
  .boxed-btn svg {
    margin-left: 6px;
    transition: all 0.3s linear;
  }
  .boxed-btn:hover svg {
    margin-left: 15px;
    transition: all 0.3s linear;
  }
  .modal-body h3 {
    border-bottom: 1px solid yellow;
  }
  .modal-body h3:nth-child(6) {
    border-bottom: none;
  }
`

export default ModalStyle
