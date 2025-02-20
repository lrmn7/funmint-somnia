import styled from "styled-components";

export const HomeMain = styled.main`
  min-height: 100vh;
  background-color: #191919;
`;

export const HomeImageMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3rem;
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 90vh;
`;

export const HomeButton = styled.button`
  background: radial-gradient(circle at 25% 30%, #0057ff, transparent 40%),
    radial-gradient(circle at 90% 10%, #ff008c, transparent 50%),
    radial-gradient(circle at 70% 60%, #00fff0, transparent 30%),
    linear-gradient(45deg, #0057ff, #ff008c, #00fff0);
  font-weight: bold;
  padding: 1.25rem;
  font-size: 1.6rem;
  border-radius: 10px;
  width: 20rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;


export const HomeContent = styled.div`
  flex: 1;
  padding-left: 3rem;
`;

export const HomeContentHead = styled.h1`
  font-size: 7rem;
  font-weight: lighter;
  margin-bottom: 3rem;
  background: radial-gradient(circle at 25% 30%, #0057ff, transparent 40%),
    radial-gradient(circle at 90% 10%, #ff008c, transparent 50%),
    radial-gradient(circle at 70% 60%, #00fff0, transparent 30%),
    linear-gradient(45deg, #0057ff, #ff008c, #00fff0);

  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`;


export const HomeContentPara = styled.p`
  font-size: 3rem;
  color: #191919;
  font-style: italic;

  & span {
    display: inline-block;
    color: #191919;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      transform: skewY(-2deg) scale(1.05);
      color: #191919;
    }
  }
`;

export const HomeBannerContainer = styled.div`
  flex: 1;
`;

export const HomeBanner = styled.div`
  display: flex;
  justify-content: center;
`;

export const HomeBannerImage = styled.img<{ src: any }>`
  width: 100%;
`;

export const HomeWorksContainer = styled.div`
  padding: 0 5rem;
  margin-bottom: 20rem;
`;

export const HomeWorksHeadContainer = styled.div`
  display: flex;
`;

export const HomeWorksHead = styled.h1`
  font-size: 3rem;
  transform: skewY(-2deg);
  margin-bottom: 10rem;
  padding: 3rem 2rem;
  display: flex;
  background-color: #191919;
  color: #191919;
  font-weight: bold;

  & svg {
    margin-right: 2rem;
  }

  & span {
    color: #191919;
    white-space: pre;
  }
`;

export const HomeWorksBoxContainer = styled.div`
  display: flex;
  margin: 10rem 2rem;
`;

export const HomeWorksBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  margin-right: 10rem;
  border: 2px solid #191919;
  background-color: #191919;
  border-radius: 3px;
  overflow: hidden;

  &:last-child {
    margin-right: 0;
  }
`;

export const HomeWorksBoxIconContainer = styled.div`
  & svg {
    margin-top: 2rem;
    color: #191919;
    fill: #191919;
    width: 8rem;
    height: 8rem;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      color: #191919;
      fill: #191919;
    }
  }
`;

export const HomeWorksBoxTitle = styled.h1`
  font-size: 2.5rem;
  margin-top: 4rem;
  text-align: center;
  color: #191919;
`;

export const HomeWorksBoxDesc = styled.p`
  font-size: 2rem;
  margin: 4rem 0;
  text-align: center;
  line-height: 1.9;
  padding: 0 3rem;
  color: #191919;
`;
