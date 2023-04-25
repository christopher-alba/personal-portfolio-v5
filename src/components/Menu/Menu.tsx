import { FC, useContext, useState } from "react";
import {
  BarsSVG,
  ButtonsDiv,
  CloseButton,
  CloseButtonDiv,
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
  MobileThemeButton,
  StyledAnchor,
  ThemeButton,
} from "./styled";
import useViewportWidth from "../../hooks/useViewportWidth";
import { mobileNavBreakpoint } from "../../sizes";
import { DefaultTheme, ThemeContext } from "styled-components";
import themes from "../../themes/schema.json";
import { useSpring, animated } from "@react-spring/web";

const Menu: FC<{ setTheme: (theme: DefaultTheme) => void }> = ({
  setTheme,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
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
  if (viewportWidth >= mobileNavBreakpoint) {
    return (
      <>
        <ThemeButton onClick={toggleTheme}>
          {theme.name === "light" ? "Dark Mode" : "Light Mode"}
        </ThemeButton>
        <MainDiv>
          <NavMenuContent />
        </MainDiv>
      </>
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
          <MobileThemeButton onClick={toggleTheme}>
            {theme.name === "light" ? "Dark Mode" : "Light Mode"}
          </MobileThemeButton>
        </MobileMainDiv>
        {showDropdown && (
          <DropdownMenuMain>
            <DropdownMenu as={animated.div} style={{ ...springs } as any}>
              <NavMenuContent />
            </DropdownMenu>
            <CloseButtonDiv as={animated.div} style={{ ...springs } as any}>
              <CloseButton
                onClick={() => {
                  setShowMenu(false);
                  setTimeout(() => {
                    setShowDropdown(false);
                  }, 500);
                }}
              >
                X
              </CloseButton>
            </CloseButtonDiv>
          </DropdownMenuMain>
        )}
      </>
    );
  }
};

const NavMenuContent = () => {
  return (
    <>
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
      <ButtonsDiv>
        <JumpButton>
          <strong>0.</strong>Landing
        </JumpButton>
        <JumpButton>
          <strong>1.</strong>About
        </JumpButton>
        <JumpButton>
          <strong>2.</strong>Journey
        </JumpButton>
        <JumpButton>
          <strong>3.</strong>Projects
        </JumpButton>
        <JumpButton>
          <strong>4.</strong>Contact
        </JumpButton>
      </ButtonsDiv>
    </>
  );
};

export default Menu;
