import styled from "styled-components";

export const Header = styled("div")`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
export const ImageWrapper = styled("div")`
  position: relative;
  width: 60%;
  height: 20rem;
  display: flex;
  @media (max-width: 1300px) {
    height: 10rem;
  }
  @media (max-width: 1000px) {
    width: 100%;
    margin-top: 20px;
  }
`;
export const Image = styled("img")`
  height: 100%;

  width: 100%;
  object-fit: cover;
  box-sizing: border-box;
`;

export const Image2 = styled("img")`
  height: 100%;
  width: 100%;
  display: block;
  object-fit: cover;
`;

export const Image2Wrapper = styled("div")`
  flex-grow: 1;
  margin-left: 20px;
`;

export const AtomWrapper = styled("div")`
  width: 100%;
  margin-top: 20px;
  box-sizing: border-box;
  position: absolute;
  top: 20rem;
  right: 0%;
  background: ${({ theme }) => theme.colors.brown4};
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 30px;
  padding-right: 100px;
  @media (max-width: 1300px) {
    top: 10rem;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const TextWrapper = styled("div")`
  width: 50%;
  background: ${({ theme }) => theme.colors.brown1};
  padding: 50px;
  padding-right: 150px;
  margin-top: 150px;
  z-index: 1;
  position: relative;
  @media (max-width: 1300px) {
    margin-top: 50px;
  }
  @media (max-width: 1000px) {
    width: 100%;
    margin-right: 0;
    padding: 0;
  }
`;

export const Text = styled("p")`
  z-index: 3;
  position: relative;
`;

export const Emphasize = styled("span")`
  font-size: 2rem;
  font-weight: 900;
`;
