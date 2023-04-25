import styled from "styled-components";
import { ReactComponent as MadeIn2023 } from "../../svg/madein2023.svg";
import { ReactComponent as Pattern1 } from "../../svg/pattern1.svg";
import { Link } from "react-router-dom";

const bp1 = 1600;
const bp2 = 1200;
const bp3 = 1000;
const bp4 = 500;

export const MainDiv = styled("div")`
  height: 100vh;
  box-sizing: border-box;
  position: relative;
  display: flex;
  overflow: hidden;
`;

export const LeftDiv = styled("div")`
  width: 55%;
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
`;

export const MadeInText = styled(MadeIn2023)`
  margin-right: 10px;
  margin-top: 50px;
  width: 100px;
  box-sizing: border-box;
  height: 250px;
  z-index: 1;
  @media (max-width: ${bp3}px) {
    position: absolute;
    background: ${({ theme }) => theme.colors.brown1};
    width: fit-content;
    padding: 40px 10px;
    margin-top: 150px;
  }
  @media (max-width: ${bp4}px) {
    margin-top: 100px;
    width: 30px;
    height: fit-content;
    padding: 0px 7px;
  }
`;

export const Image = styled("img")`
  object-fit: cover;
  object-position: 0 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.lowkey};
  @media (max-width: ${bp2}px) {
    width: 150%;
  }
  @media (max-width: ${bp2}px) {
    width: 150%;
  }
  @media (max-width: ${bp4}px) {
    width: 200%;
    margin-left: 100px;
  }
`;

export const Pattern1SVG = styled(Pattern1)`
  position: absolute;
  right: 0;
  bottom: 100px;
  color: ${({ theme }) => theme.colors.brown1};
  @media (max-width: ${bp1}px) {
    width: 300px;
  }
  @media (max-width: ${bp2}px) {
    display: none;
  }
`;

export const RightDiv = styled("div")`
  width: 45%;
  padding: 50px;
  padding-left: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: ${bp2}px) {
    padding: 50px;
    position: absolute;
    right: 0px;
    top: 100px;
    width: 500px;
    box-sizing: border-box;
    background: ${({ theme }) => theme.colors.brown1};
  }
  @media (max-width: ${bp4}px) {
    width: 100%;
    height: 100%;
    top: 0;
    background: ${({ theme }) => theme.colors.brown1Overlay};
  }
`;

export const Number0 = styled("p")`
  font-size: 30rem;
  font-weight: 900;
  text-align: right;
  color: ${({ theme }) => theme.colors.lowkey};
  margin: 0;
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  @media (max-width: ${bp2}px) {
    font-size: 20rem;
  }
  @media (max-width: ${bp3}px) {
    margin-right: 20px;
  }
  @media (max-width: ${bp4}px) {
    color: ${({ theme }) => theme.colors.brown1Overlay};
  }
`;

export const Name = styled("h1")`
  font-size: 6.5rem;
  font-weight: 900;
  margin-top: 200px;
  margin-bottom: 0;
  position: relative;
  z-index: 1;
  color: ${({ theme }) => theme.colors.bold};
  font-family: "Inter", "Serif";
  @media (max-width: ${bp1}px) {
    font-size: 3.5rem;
    margin-top: 0;
  }
  @media (max-width: ${bp2}px) {
    font-size: 2.5rem;
  }
  @media (max-width: ${bp4}px) {
    margin-top: 0px;
  }
`;

export const Occupation = styled("h2")`
  font-size: 2.5rem;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.bold};
  @media (max-width: ${bp1}px) {
    font-size: 2rem;
  }
  @media (max-width: ${bp2}px) {
    font-size: 1.5rem;
    z-index: 1;
    position: relative;
  }
`;

export const StyledHR = styled("hr")`
  width: 15%;
  border-width: 7px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.yellow1};
  margin: 0;
  position: relative;
  z-index: 1;
`;

export const WorksAt = styled("h3")`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.bold};
  @media (max-width: ${bp2}px) {
    font-size: 1.2rem;
    z-index: 1;
    position: relative;
  }
`;

export const StyledP = styled("p")`
  @media (max-width: ${bp2}px) {
    font-size: 0.8rem;
  }
  @media (max-width: ${bp4}px) {
    color: ${({ theme }) => theme.colors.bold};
  }
`;

export const StyledLink = styled(Link)`
  margin-top: 20px;
  display: inline-block;
  width: fit-content;
`;
