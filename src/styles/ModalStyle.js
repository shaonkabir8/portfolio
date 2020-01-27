import styled from "styled-components"

const ModalStyle = styled.div`
  .certification-section h3 span {
    font-size: 65%;
    font-weight: normal;
    margin-top: 12px;
    margin-left: 6px;
    color: #fff;
  }
  .certification-section h3 {
    font-size: 23px;
    padding-bottom: 12px;
    font-weight: 700;
  }
  .certification-section p {
    margin-bottom: 0;
  }
  .course-content {
    display: block;
    margin-left: 0px !important;
    font-size: 70% !important;
  }
  .modal-body h3 {
    border-bottom: 1px solid yellow;
  }
  .modal-body h3:nth-child(6) {
    border-bottom: none;
  }
  .modalSection h3 {
    color: ${props => props.theme.color.green};
  }
`

export default ModalStyle
