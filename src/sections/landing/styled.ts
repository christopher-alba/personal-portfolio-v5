import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../components/container";

export const MainDiv = styled("div")`
  height: 100vh;
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: start;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.primary1};
`;

export const ContentWrapper = styled(Container)`
  padding-top: 150px;
  padding-bottom: 150px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  @media (max-width: 800px) {
    padding: 100px;
  }
  @media (max-width: 500px) {
    padding: 20px;
  }
`;

export const Name = styled("h1")`
  font-size: 5rem;
  font-weight: 900;
  margin: 0;
  width: fit-content;
  background: ${({ theme }) => theme.colors.primary1};
  margin-bottom: 20px;
  @media (max-width: 800px) {
    font-size: 3rem;
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

export const StyledLink = styled(Link)`
  width: fit-content;
  margin-top: 20px;
  display: block;
`;
