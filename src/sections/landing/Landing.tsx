import { FC } from "react";
import {
  ContentWrapper,
  MainDiv,
  Name,
  Occupation,
  StyledLink,
  SubTitle,
} from "./styled";
import { TertiaryButton } from "../../components/buttons";
import FadeWhenInViewWrapper from "../../components/AnimationWrappers/FadeWhenInViewWrapper";

const Landing: FC<{ refs: React.RefObject<any> }> = ({ refs }) => {
  return (
    <MainDiv id="landing" ref={refs}>
      <ContentWrapper>
        <FadeWhenInViewWrapper animateOnce duration={1000}>
          <Name>Christopher Sy Alba</Name>
          <Occupation>Professional Software Engineer</Occupation>
          <SubTitle>Frontend Engineering Focused</SubTitle>
          <SubTitle> User Experience Driven</SubTitle>
          <StyledLink to="./cv.pdf" target="_blank" rel="noopener noreferrer">
            <TertiaryButton tabIndex={-1}>Download CV</TertiaryButton>
          </StyledLink>
        </FadeWhenInViewWrapper>
      </ContentWrapper>
    </MainDiv>
  );
};

export default Landing;
