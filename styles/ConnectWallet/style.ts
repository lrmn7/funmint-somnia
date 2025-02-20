import styled from "styled-components";

export const ConnectModalBackdrop = styled.div`
  position: fixed;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100vh;
`;

export const ConnectModalContainer = styled.div`
  position: absolute;
  z-index: 1010;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ConnectModalMain = styled.div`
  min-width: 60rem;
  background: #222;
  border-radius: 10px;
  overflow: hidden;
`;

export const ConnectModalHead = styled.h1`
  padding: 1rem;
  text-align: center;
  font-size: 2.5rem;
  background: radial-gradient(circle at 25% 30%, #f1c909, transparent 40%),
    radial-gradient(circle at 90% 10%, #1bc9e1, transparent 50%),
    radial-gradient(circle at 70% 60%, #e6327f, transparent 30%),
    linear-gradient(45deg, #a44129, #b61264, #712ead, #0fabbd);
  color: #ccc;
`;

export const ConnectModalPara = styled.p`
  padding: 4rem;
  padding-top: 6rem;
  font-size: 2rem;
  color: #fff;
`;

export const ConnectModalButtonContainer = styled.div`
  padding: 1.5rem;
  display: flex;
  justify-content: flex-end;
`;

export const ConnectModalButton = styled.button`
  background: radial-gradient(circle at 25% 30%, #0057ff, transparent 40%),
    radial-gradient(circle at 90% 10%, #ff008c, transparent 50%),
    radial-gradient(circle at 70% 60%, #00fff0, transparent 30%),
    linear-gradient(45deg, #0057ff, #ff008c, #00fff0);
  font-weight: bold;
  padding: 1.25rem;
  font-size: 1.6rem;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

