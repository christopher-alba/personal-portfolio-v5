import styled, { css } from "styled-components";
import { ReactComponent as GradIcon } from "../../svg/icons/gradIcon.svg";
import { ReactComponent as LaptopIcon } from "../../svg/icons/laptop.svg";
import { ReactComponent as GraphIcon } from "../../svg/icons/Graph.svg";
import { ReactComponent as UsersIcon } from "../../svg/icons/usersIcon.svg";
import { ReactComponent as TickTech } from "../../svg/icons/TickTech.svg";

export const ContentWrapper = styled("div")`
  padding: 50px;
  padding-top: 20px;
  @media (max-width: 800px) {
    padding: 10px;
  }
`;
export const InnerContentWrapper = styled("div")`
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 50px;
  border-bottom: solid 1px ${({ theme }) => theme.colors.secondary1};
  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;
export const TextWrapper = styled("div")`
  width: 50%;
  padding-right: 20px;
  box-sizing: border-box;
  font-weight: 200;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.8rem;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const TitleIconStyles = css`
  width: 30px;
  height: auto;
  padding-right: 20px;
`;

export const GradIconStyled = styled(GradIcon)`
  ${TitleIconStyles}
`;

export const CarouselWrapper = styled("div")`
  width: 50%;
  height: fit-content;
  margin-left: 50px;
  margin-top: 30px;
  @media (max-width: 900px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const LaptopIconSVG = styled(LaptopIcon)`
  ${TitleIconStyles}
`;

export const GraphIconSVG = styled(GraphIcon)`
  ${TitleIconStyles}
`;

export const UsersIconSVG = styled(UsersIcon)`
  ${TitleIconStyles}
`;

export const TickTechSVG = styled(TickTech)`
  ${TitleIconStyles}
`;
