import styled, { css } from "styled-components";
import { NavbarWidth } from "../../sizes";
import { ReactComponent as Facebook } from "../../svg/icons/facebookIcon.svg";
import { ReactComponent as Instagram } from "../../svg/icons/instagramIcon.svg";
import { ReactComponent as Github } from "../../svg/icons/githubIcon.svg";
import { ReactComponent as Linkedin } from "../../svg/icons/linkedinIcon.svg";
import { ReactComponent as Bars } from "../../svg/icons/bars-solid.svg";

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
`;

export const IconsDiv = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const ThemeButton = styled("button")`
  position: fixed;
  top: 0;
  right: 100px;
  background: ${({ theme }) => theme.colors.brown4};
  color: ${({ theme }) => theme.colors.brown1};
  border: none;
  padding: 20px 50px;
  transition: 500ms;
  width: 219px;
  padding-left: 70px;
  cursor: pointer;
  clip-path: polygon(100% 0, 100% 100%, 21% 100%, 0 40%, 0 0);
  &:hover {
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 66%, 0 0);
    background: ${({ theme }) => theme.colors.brown4Hover};
    padding-left: 50px;
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
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
`;

export const DropdownMenu = styled("div")`
  width: 300px;
  flex-shrink: 1;
  height: 100vh;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.brown1};
`;

export const CloseButtonDiv = styled("div")`
  width: 50px;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  position: relative;
  left: 0;
`;

export const CloseButton = styled("button")`
  height: 30px;
  width: 30px;
  background: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 10px;
  padding: 10px;
  color: ${({ theme }) => theme.colors.brown1};
  border: 1px solid ${({ theme }) => theme.colors.brown1};
`;
