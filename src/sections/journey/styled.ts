import styled from "styled-components";
import { ReactComponent as ChevronDown } from "../../svg/icons/chevronDown.svg";

export const TimelineWrapper = styled("div")`
  min-height: 100vh;
  width: 100%;
  position: relative;
  margin-top: 100px;
`;
export const Timeline = styled("div")`
  width: 50%;
  height: 100%;
  position: absolute;
  z-index: -1;
  border-right: 15px solid ${({ theme }) => theme.colors.primary3};
  padding-top: 100px;
  @media (max-width: 800px) {
    width: 100%;
    border-right: none;
    border-left: 15px solid ${({ theme }) => theme.colors.primary3};
  }
`;

export const TimelineContentLeft = styled("div")`
  width: 50%;
  margin-right: auto;
  padding: 20px;
  padding-top: 0;
  position: relative;
  transition: 500ms;
  margin-bottom: 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  @media (max-width: 800px) {
    width: 100%;
    margin-right: 0;
    justify-content: flex-end;
  }
  &::after {
    content: "";
    height: 50px;
    width: 50px;
    position: absolute;
    transition: 500ms;
    z-index: 2;
    background: ${({ theme }) => theme.colors.tertiary2};
    top: 0;
    border: 10px solid ${({ theme }) => theme.colors.primary3};
    right: calc(-25px - 15px / 2);
    border-radius: 100%;
    box-sizing: border-box;
    @media (max-width: 800px) {
      right: unset;
      left: calc(-25px + 15px / 2);
    }
  }
  &::before {
    content: "";
    height: 25px;
    transition: 500ms;
    width: 100%;
    position: absolute;
    background: ${({ theme }) => theme.colors.tertiary2};
    top: 12.5px;
    right: 0;
  }
`;

export const TimelineContentRight = styled("div")`
  width: 50%;
  margin-left: auto;
  padding: 20px;
  padding-top: 0;
  transition: 500ms;
  margin-bottom: 30px;
  position: relative;
  box-sizing: border-box;
  box-sizing: border-box;
  text-align: left;
  display: flex;
  @media (max-width: 800px) {
    width: 100%;
  }
  justify-content: flex-end;
  &::after {
    content: "";
    transition: 500ms;
    z-index: 2;
    height: 50px;
    width: 50px;
    position: absolute;
    background: ${({ theme }) => theme.colors.tertiary1};
    top: 0;
    left: calc(-25px + 15px / 2);
    border-radius: 100%;
    box-sizing: border-box;
    border: 10px solid ${({ theme }) => theme.colors.primary3};
  }
  &::before {
    content: "";
    height: 25px;
    width: 100%;
    transition: 500ms;
    position: absolute;
    background: ${({ theme }) => theme.colors.tertiary1};
    top: 12.5px;
    left: 0;
  }
`;

export const TimelineContentInner = styled("div")`
  width: 80%;
  background: ${({ theme }) => theme.colors.primary2};
  padding: 30px;
  padding-top: 0;
  position: relative;
  z-index: 1;
`;

export const ChevronDownSVG = styled(ChevronDown)`
  width: 10px;
  height: auto;
  transition: 300ms;
`;

export const DownButton = styled("button")`
  background: none;
  width: 100%;
  text-align: center;
  border: none;
  color: ${({ theme }) => theme.colors.secondary1};
`;
