import styled, { css } from "styled-components";
import { NavbarWidth } from "../../sizes";
import { ReactComponent as Facebook } from "../../svg/icons/facebookIcon.svg";
import { ReactComponent as Instagram } from "../../svg/icons/instagramIcon.svg";
import { ReactComponent as Github } from "../../svg/icons/githubIcon.svg";
import { ReactComponent as Linkedin } from "../../svg/icons/linkedinIcon.svg";

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
