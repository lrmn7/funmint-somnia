import React from "react";
import {
  LoadingBackdrop,
  LoadingContainer,
  LoadingMain,
  LoadingText,
} from "./../../../styles/Loading/styles";

interface Props {
  show: boolean;
  closeModal: any;
}

const LoadingModal: React.FC<Props> = ({ show, closeModal }) => {
  return show ? (
    <React.Fragment>
      <LoadingBackdrop onClick={closeModal} />
      <LoadingContainer>
        <LoadingMain>
          <div className="lod-container">
            <div className="yellow"></div>
            <div className="red"></div>
            <div className="blue"></div>
            <div className="violet"></div>
          </div>
          <LoadingText>Minting NFT ...</LoadingText>
        </LoadingMain>
      </LoadingContainer>
    </React.Fragment>
  ) : null;
};

export default LoadingModal;
