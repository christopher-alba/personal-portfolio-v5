import styled from "styled-components";

export const MainDiv = styled("div")`
  height: 100vh;
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: start;
  overflow: hidden;
`;

export const InvertedImage = styled("img")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  object-position: 0 0;
  object-fit: cover;
`;

export const OverlayDiv = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => {
    if (theme.name === "light") {
      return "linear-gradient(270deg,#ffffff 14.09%,rgba(255, 255, 255, 0) 96.27%);";
    } else {
      return "linear-gradient(270deg,black 14.09%,rgba(255, 255, 255, 0) 96.27%);";
    }
  }};
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;

export const ContentWrapper = styled("div")`
  width: 50%;
  padding-top: 150px;
  padding-left: 150px;
  padding-bottom: 150px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  @media (max-width: 1020px) {
    width: 100%;
    padding-right: 150px;
  }
  @media(max-width: 800px){
    padding: 100px;
  }
  @media(max-width: 500px){
    padding: 20px;
  }
`;

export const Name = styled("h1")`
  font-size: 5rem;
  font-weight: 900;
  margin: 0;
  margin-bottom: 20px;
  @media (max-width:800px) {
    font-size:3rem;
  }
`;

export const Occupation = styled("h2")`
  margin: 0;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.tertiary1};
`;
export const SubTitle = styled("h3")`
  text-emphasis: 10px;
  margin: 0;
  font-weight: 200;
`;
