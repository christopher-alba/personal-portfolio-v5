import { useEffect, useState } from "react";
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
import { IntersectionArgs, useInView } from "@react-spring/web";
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
  const [currentSection, setCurrentSection] = useState("LANDING");
  const [ref1, isInView1] = useInView({
    threshold: 0.1,
  } as IntersectionArgs);
  const [ref2, isInView2] = useInView({
    threshold: 0.1,
  } as IntersectionArgs);
  const [ref3, isInView3] = useInView({
    threshold: 0.1,
  } as IntersectionArgs);
  const [ref4, isInView4] = useInView({
    threshold: 0.1,
  } as IntersectionArgs);

  useEffect(() => {
    if (isInView1) {
      setCurrentSection("LANDING");
    } else if (isInView2) {
      setCurrentSection("ABOUT");
    } else if (isInView3) {
      setCurrentSection("JOURNEY");
    } else if (isInView4) {
      setCurrentSection("PROJECTS");
    }
  }, [isInView1, isInView2, isInView3, isInView4]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Menu setTheme={setTheme} currentSection={currentSection} />
      <ContentDiv>
        <Landing refs={ref1} />
        <About refs={ref2} />
        <Journey refs={ref3} />
        <Projects refs={ref4} />
      </ContentDiv>
    </ThemeProvider>
  );
}

export default App;
