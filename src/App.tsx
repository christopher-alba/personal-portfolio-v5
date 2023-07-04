import { useState } from "react";
import { ThemeProvider } from "styled-components";
import themes from "./themes/schema.json";
import { GlobalStyles } from "./themes/globalStyles";
import Landing from "./sections/landing";
import Menu from "./components/Menu";
import styled from "styled-components";
import { NavbarWidth, mobileNavBreakpoint } from "./sizes";
import About from "./sections/about";
import Journey from "./sections/journey";
import Projects from "./sections/projects";
export const ContentDiv = styled("div")`
  width: 100%;
  padding-left: ${NavbarWidth};
  box-sizing: border-box;
  @media (max-width: ${mobileNavBreakpoint}px) {
    padding-left: 0;
  }
`;

function App() {
  const [theme, setTheme] = useState(themes.light);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Menu setTheme={setTheme} />
      <ContentDiv>
        <Landing />
        <About />
        <Journey />
        <Projects />
      </ContentDiv>
    </ThemeProvider>
  );
}

export default App;
