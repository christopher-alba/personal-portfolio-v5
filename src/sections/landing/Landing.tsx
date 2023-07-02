import { FC } from "react";
import {
  ContentWrapper,
  Image,
  ImagesContainer,
  MainDiv,
  Name,
  Occupation,
  StyledLink,
  SubTitle,
} from "./styled";
import { TertiaryButton } from "../../components/buttons";

const Landing: FC = () => {
  return (
    <MainDiv id="landing">
      <ContentWrapper>
        <Name>Christopher Sy Alba</Name>
        <Occupation>Professional Software Engineer</Occupation>
        <SubTitle>Frontend Engineering Focused</SubTitle>
        <SubTitle> User Experience Driven</SubTitle>
        <StyledLink to="./cv.pdf" target="_blank" rel="noopener noreferrer">
          <TertiaryButton tabIndex={-1}>Download CV</TertiaryButton>
        </StyledLink>
      </ContentWrapper>
    </MainDiv>
  );
};

export default Landing;
