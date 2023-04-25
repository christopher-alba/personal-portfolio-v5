import { FC, useContext } from "react";
import {
  FacebookSVG,
  GithubSVG,
  IconsDiv,
  InstagramSVG,
  LinkedinSVG,
  MainDiv,
  StyledAnchor,
  ThemeButton,
} from "./styled";
import useViewportWidth from "../../hooks/useViewportWidth";
import { mobileNavBreakpoint } from "../../sizes";
import { DefaultTheme, ThemeContext } from "styled-components";
import themes from "../../themes/schema.json";
const Menu: FC<{ setTheme: (theme: DefaultTheme) => void }> = ({
  setTheme,
}) => {
  const viewportWidth = useViewportWidth();
  const theme = useContext(ThemeContext);
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
        </MainDiv>
      </>
    );
  } else {
    return <></>;
  }
};

export default Menu;
