import styled from "styled-components";

export const CollectionsMain = styled.main`
  min-height: 100vh;
  background-color: #191919;
`;

export const CollectionText = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  background: radial-gradient(circle at 25% 30%, #f1c909, transparent 40%),
    radial-gradient(circle at 90% 10%, #1bc9e1, transparent 50%),
    radial-gradient(circle at 70% 60%, #e6327f, transparent 30%),
    linear-gradient(45deg, #a44129, #b61264, #712ead, #0fabbd);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  text-align: center;
  margin: 10rem;
`;

export const CollectionContainer = styled.div`
  padding: 8rem;
  display: grid;
  grid-gap: 5rem;
  grid-template-columns: repeat(4, 35rem);
`;

export const CollectionCard = styled.div`
  background-color: #222;
  padding: 1rem;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
`;

export const CollectionCardImageContainer = styled.div`
  height: 31rem;
  width: 100%;
`;

export const CollectionCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export const CollectionCardUser = styled.div`
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
`;

export const CollectionCardUserIconContainer = styled.div`
  & svg {
    width: 5rem;
    height: 5rem;
    color: #fff;
  }
  margin-right: 2rem;
`;

export const CollectionCardAccount = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  overflow-wrap: anywhere;
`;
