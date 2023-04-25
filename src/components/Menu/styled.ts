import styled, { css } from "styled-components";
import { NavbarWidth } from "../../sizes";
import { ReactComponent as Facebook } from "../../svg/icons/facebookIcon.svg";
import { ReactComponent as Instagram } from "../../svg/icons/instagramIcon.svg";
import { ReactComponent as Github } from "../../svg/icons/githubIcon.svg";
import { ReactComponent as Linkedin } from "../../svg/icons/linkedinIcon.svg";
import { ReactComponent as Bars } from "../../svg/icons/bars-solid.svg";
import { ReactComponent as XMark } from "../../svg/icons/xmark-solid.svg";

export const MainDiv = styled("div")`
  width: ${NavbarWidth};
  height: 100vh;
  border-right: 1px solid ${({ theme }) => theme.colors.brown3Overlay};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const IconsDiv = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonsDiv = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  box-sizing: border-box;
`;

const iconStyles = css`
  width: 30px;
  height: 30px;
`;

export const FacebookSVG = styled(Facebook)`
  ${iconStyles}
`;
export const InstagramSVG = styled(Instagram)`
  ${iconStyles}
`;
export const GithubSVG = styled(Github)`
  ${iconStyles}
`;
export const LinkedinSVG = styled(Linkedin)`
  ${iconStyles}
`;

export const StyledAnchor = styled("a")`
  margin-top: 30px;
  color: inherit;
  &:hover {
    color: ${({ theme }) => theme.colors.brown4Hover};
  }
`;

export const JumpButton = styled("button")`
  background: none;
  border: none;
  text-align: left;
  padding: 20px;
  transition: 500ms;
  color: ${({ theme }) => theme.colors.brown4};
  &:last-of-type {
    margin-bottom: 20px;
  }
  border-right: 5px solid transparent;
  width: 100%;
  &:hover {
    border-right: 5px solid ${({ theme }) => theme.colors.brown4};
  }
`;

export const ThemeButton = styled("button")`
  position: fixed;
  top: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.brown4};
  color: ${({ theme }) => theme.colors.brown1};
  border: none;
  padding: 10px 25px;
  transition: 500ms;
  width: 150px;
  padding-left: 35px;
  cursor: pointer;
  clip-path: polygon(100% 0, 100% 100%, 21% 100%, 0 40%, 0 0);
  &:hover {
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 66%, 0 0);
    background: ${({ theme }) => theme.colors.brown4Hover};
    padding-left: 25px;
  }
  z-index: 1000;
`;
export const MobileThemeButton = styled("button")`
  background: ${({ theme }) => theme.colors.brown4};
  color: ${({ theme }) => theme.colors.brown1};
  border: none;
  padding: 10px 25px;
  transition: 500ms;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.brown4Hover};
  }
`;
export const MobileMainDiv = styled("div")`
  padding: 10px;
  position: fixed;
  box-sizing: border-box;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;
  height: 50px;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.brown1};
  justify-content: space-between;
`;

export const MenuButton = styled("button")`
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.brown4};
  &:hover {
    color: ${({ theme }) => theme.colors.brown4Hover};
  }
`;

export const BarsSVG = styled(Bars)`
  width: fit-content;
  height: 20px;
  display: flex;
  align-items: center;
`;

export const DropdownMenuMain = styled("div")`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  z-index: 10000;
  background: ${({ theme }) => {
    if (theme.name === "light") {
      return "rgba(0, 0, 0, 0.8);";
    } else {
      return "rgba(255, 255, 255, 0.8);";
    }
  }};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
`;

export const DropdownMenu = styled("div")`
  width: 300px;
  flex-shrink: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.brown1};
`;

export const CloseButtonDiv = styled("div")`
  width: fit-content;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  position: relative;
  left: 0;
`;

export const CloseButton = styled("button")`
  height: 50px;
  width: 50px;
  background: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  padding: 10px;
  color: ${({ theme }) => theme.colors.brown1};
`;

export const CloseIcon = styled(XMark)``;
