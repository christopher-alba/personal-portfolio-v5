import styled from "styled-components";

export const Image = styled("img")`
  position: absolute;
  top: 100px;
  right: 0;
  width: 55%;
  height: auto;
  z-index: -1;
  mask-image: ${({ theme }) => {
    if (theme.name === "light") {
      return `linear-gradient(
            to right,
            rgba(0, 0, 0, 0) -20%,
            rgba(0, 0, 0, 1) 100%
          );`;
    } else {
      return `linear-gradient(
            to right,
            rgba(255, 255, 255, 0) -20%,
            rgba(255, 255, 255, 1) 100%
          );`;
    }
  }};
  @media (max-width: 800px) {
    width: 40%;
  }
`;

export const TextWrapper = styled("div")`
  width: 45%;
  box-sizing: border-box;
  margin-top: 100px;
  padding-right: 50px;
  @media (max-width: 800px) {
    width: 100%;
    padding-right: 0;
  }
`;
