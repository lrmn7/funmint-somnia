import styled from "styled-components";

export const LoadingBackdrop = styled.div`
  position: fixed;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.9);
  width: 100%;
  height: 100vh;
`;

export const LoadingContainer = styled.div`
  position: absolute;
  z-index: 1010;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingMain = styled.div`
  position: relative;
`;

export const LoadingText = styled.h1`
  color: #ccc;
  text-align: center;
  font-size: 3rem;
  margin-top: 3rem;
`;
