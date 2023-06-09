import { FC, useContext, useEffect, useState } from "react";
import {
  BarsSVG,
  ButtonsDiv,
  CloseButton,
  CloseButtonDiv,
  CloseIcon,
  DropdownMenu,
  DropdownMenuMain,
  FacebookSVG,
  GithubSVG,
  IconsDiv,
  InstagramSVG,
  JumpButton,
  LinkedinSVG,
  MainDiv,
  MenuButton,
  MobileMainDiv,
  StyledAnchor,
  StyledHR,
  ThemeButton,
  ThemeIcon,
} from "./styled";
import useViewportWidth from "../../hooks/useViewportWidth";
import { mobileNavBreakpoint } from "../../sizes";
import { DefaultTheme, ThemeContext } from "styled-components";
import themes from "../../themes/schema.json";
import { useSpring, animated, easings } from "@react-spring/web";
import FadeWhenInViewWrapper from "../AnimationWrappers/FadeWhenInViewWrapper";

const Menu: FC<{
  setTheme: (theme: DefaultTheme) => void;
  currentSection: string;
}> = ({ setTheme, currentSection }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      hideNavbar();
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const viewportWidth = useViewportWidth();
  const theme = useContext(ThemeContext);
  const springs = useSpring({
    left: showMenu ? 0 : -300,
    position: "relative",
  });
  const toggleTheme = () => {
    if (theme.name === "light") {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  };
  const hideNavbar = () => {
    if (showMenu && showDropdown) {
      setShowMenu(false);
      setTimeout(() => {
        setShowDropdown(false);
      }, 500);
    }
  };
  if (viewportWidth >= mobileNavBreakpoint) {
    return (
      <MainDiv>
        <NavMenuContent
          toggleTheme={toggleTheme}
          currentSection={currentSection}
          hideNavbar={hideNavbar}
        />
      </MainDiv>
    );
  } else {
    return (
      <>
        <MobileMainDiv>
          <MenuButton
            onClick={() => {
              setShowDropdown(true);
              setShowMenu(true);
            }}
          >
            <BarsSVG />
          </MenuButton>
        </MobileMainDiv>
        {showDropdown && (
          <DropdownMenuMain>
            <DropdownMenu as={animated.div} style={{ ...springs } as any}>
              <NavMenuContent
                toggleTheme={toggleTheme}
                currentSection={currentSection}
                hideNavbar={hideNavbar}
              />
            </DropdownMenu>
            <CloseButtonDiv as={animated.div} style={{ ...springs } as any}>
              <CloseButton onClick={hideNavbar}>
                <CloseIcon />
              </CloseButton>
            </CloseButtonDiv>
          </DropdownMenuMain>
        )}
      </>
    );
  }
};

const NavMenuContent: FC<{
  toggleTheme: () => void;
  hideNavbar: () => void;
  currentSection: string;
}> = ({ toggleTheme, currentSection, hideNavbar }) => {
  const handleJump = (target: string) => {
    document.getElementById(target)?.scrollIntoView({
      behavior: "smooth",
    });
    hideNavbar();
  };
  const theme = useContext(ThemeContext);
  return (
    <>
      <FadeWhenInViewWrapper
        animateOnce
        xOffset={-100}
        duration={1000}
        rootMargin="200px"
        easing={easings.easeInOutElastic}
      >
        <IconsDiv>
          <StyledAnchor
            href="https://www.facebook.com/christopher.alba.357/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookSVG />
          </StyledAnchor>
          <StyledAnchor
            href="https://www.instagram.com/alba.sy.chris/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramSVG />
          </StyledAnchor>
          <StyledAnchor
            href="https://github.com/christopher-alba"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubSVG />
          </StyledAnchor>
          <StyledAnchor
            href="https://www.linkedin.com/in/christopher-alba"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinSVG />
          </StyledAnchor>
        </IconsDiv>
      </FadeWhenInViewWrapper>
      <FadeWhenInViewWrapper
        animateOnce
        yOffset={400}
        duration={1000}
        rootMargin="1000px"
        easing={easings.easeInOutElastic}
      >
        <ButtonsDiv>
          <ThemeButton onClick={toggleTheme}>
            <ThemeIcon />
          </ThemeButton>
          <StyledHR />
          <JumpButton
            onClick={() => handleJump("landing")}
            style={{
              borderRight:
                currentSection === "LANDING"
                  ? `5px solid ${theme.colors.tertiary1}`
                  : `5px solid transparent`,
            }}
          >
            <strong>0. </strong>Landing
          </JumpButton>
          <JumpButton
            onClick={() => handleJump("about")}
            style={{
              borderRight:
                currentSection === "ABOUT"
                  ? `5px solid ${theme.colors.tertiary1}`
                  : `5px solid transparent`,
            }}
          >
            <strong>1. </strong>About
          </JumpButton>
          <JumpButton
            onClick={() => handleJump("journey")}
            style={{
              borderRight:
                currentSection === "JOURNEY"
                  ? `5px solid ${theme.colors.tertiary1}`
                  : `5px solid transparent`,
            }}
          >
            <strong>2. </strong>Journey
          </JumpButton>
          <JumpButton
            onClick={() => handleJump("projects")}
            style={{
              borderRight:
                currentSection === "PROJECTS"
                  ? `5px solid ${theme.colors.tertiary1}`
                  : `5px solid transparent`,
            }}
          >
            <strong>3. </strong>Projects
          </JumpButton>
        </ButtonsDiv>
      </FadeWhenInViewWrapper>
    </>
  );
};

export default Menu;
