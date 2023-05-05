import { FC } from "react";
import {
  ContentWrapper,
  InvertedImage,
  MainDiv,
  Name,
  Occupation,
  OverlayDiv,
  SubTitle,
} from "./styled";
import { TertiaryButton } from "../../components/buttons";

const Landing: FC = () => {
  return (
    <MainDiv id="landing">
      <InvertedImage src="./images/jasper2.jpg" />
      <OverlayDiv />
      <ContentWrapper>
        <Name>Christopher Sy Alba</Name>
        <Occupation>Professional Software Engineer</Occupation>
        <SubTitle>Frontend Engineering Focused</SubTitle>
        <SubTitle> User Experience Driven</SubTitle>
        <TertiaryButton style={{ marginTop: "20px", width: "fit-content" }}>
          Download CV
        </TertiaryButton>
      </ContentWrapper>
    </MainDiv>
  );
};

export default Landing;
