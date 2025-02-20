import styled from "styled-components";

interface BtnProps {
  bg?: string;
  boxColor?: string;
}

export const DrawMain = styled.main`
  min-height: 100vh;
  background-color: #191919;
`;

export const DrawCanvasContainer = styled.div`
  margin-top: 3rem;
  padding: 3rem 20rem;
  height: 75vh;
`;

export const DrawCanvasToolbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24rem;
`;

export const DrawCanvasToolBoxButton = styled.button<BtnProps>`
  background-color: ${({ bg }) => bg};
  box-shadow: 0 8px ${({ boxColor }) => boxColor};
  border: 0;
  border-radius: 5px;
  color: #1f1a25;
  font-family: inherit;
  font-weight: bold;
  text-transform: uppercase;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  margin-right: 7.5px;
  cursor: pointer;
  transition: all 0.2s;
  outline: none;

  &:active {
    transform: translateY(4px);
    box-shadow: 0 3px ${({ boxColor }) => boxColor};
  }
`;

export const MintButton = styled.button`
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
  width: 15rem;

  &:hover {
    transform: scale(1.05);
  }
`;


export const DrawCanvasToolBox = styled.div`
  display: flex;
  align-items: center;
`;

export const DrawCanvasColorDrawer = styled.div`
  display: flex;
  align-items: center;
`;

export const ColorItem = styled.div<BtnProps>`
  width: 3rem;
  height: 3rem;
  background-color: ${({ bg }) => bg};
  border: 2px solid #ccc;
  border-radius: 50%;
  margin-right: 10px;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }
  cursor: pointer;

  &:last-child {
    margin-right: 0px;
  }
`;
