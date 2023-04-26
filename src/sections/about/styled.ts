import styled from "styled-components";
export const Header = styled("div")`
  display: flex;
  justify-content: space-between;
`;
export const ImageWrapper = styled("div")`
  position: relative;
  width: 60%;
  height: 20rem;
  background: ${({ theme }) => theme.colors.brown3};
  display: flex;
`;
export const Image = styled("img")`
  height: 100%;
  width: auto;
`;

export const Image2 = styled("img")`
  height: 100%;
  flex-grow: 1;
  object-fit: cover;
`;

export const AtomWrapper = styled("div")`
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  top: 20rem;
  background: ${({ theme }) => theme.colors.brown4};
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 30px;
  padding-right: 100px;
`;

export const TextWrapper = styled("div")`
  width: 50%;
  background: ${({ theme }) => theme.colors.brown1};
  padding: 50px;
  padding-right: 150px;
  margin-top: 150px;
  z-index: 1;
  position: relative;
`;

export const Text = styled("p")`
  z-index: 3;
  position: relative;
`;
