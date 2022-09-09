import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import CancelIcon from "../icon/cancelIcon";
import ConfirmIcon from "../icon/confirmIcon";

const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1040;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  display: flex;
  align-items: center;
`;

const StyledModal = styled.div`
  z-index: 100;
  background: #fff;
  position: relative;
  margin: auto;
  border-radius: 5px;
  max-width: 500px;
  max-height: 800px;
  width: 80%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;
const StyledContent = styled.div`
  max-height: 500px;
  overflow-y: scroll;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;


const Modal = ({ isShowing, cancel, confirm, title, text }) =>
  isShowing
    ? ReactDOM.createPortal(
        <StyledModalOverlay>
          <StyledModalWrapper>
            <StyledModal>
              <h1>{title}</h1>
              <StyledContent>{text}</StyledContent>
              <IconContainer>
                {confirm && <ConfirmIcon onClick={confirm} />}
                {cancel && <CancelIcon onClick={cancel} />}
              </IconContainer>
            </StyledModal>
          </StyledModalWrapper>
        </StyledModalOverlay>,
        document.body
      )
    : null;

export default Modal;
