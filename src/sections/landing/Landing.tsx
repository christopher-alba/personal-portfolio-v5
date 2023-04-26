import { FC } from "react";
import {
  Image,
  LeftDiv,
  MadeInText,
  MainDiv,
  Name,
  Number0,
  Occupation,
  Pattern1SVG,
  RightDiv,
  StyledLink,
  StyledHR,
  WorksAt,
  StyledP,
  MadeInTextWrapper,
} from "./styled";
import { ButtonBrown4 } from "../../components/buttons";

const Landing: FC = () => {
  return (
    <MainDiv id="landing">
      <LeftDiv>
        <MadeInTextWrapper>
          <MadeInText />
        </MadeInTextWrapper>
        <div style={{ position: "relative", width: "100%" }}>
          <Image src="./images/jasper2.jpg" />
          <Pattern1SVG />
        </div>
      </LeftDiv>
      <RightDiv>
        <Number0>#0</Number0>
        <Name>Christopher Sy Alba</Name>
        <Occupation>Professional Software Engineer</Occupation>
        <StyledHR />
        <WorksAt>Currently Full-Time @ TAG Digital</WorksAt>
        <StyledP>
          Ever since I was young, I have had a passion for design and
          problem-solving. Now, I have found a way to channel this creativity
          into software development and engineering. Specifically, I am
          currently pursuing a career in web development, where I have a
          preference for frontend work due to my appreciation for the user
          experience. Nevertheless, I am also intrigued by backend development,
          which allows me to flex my creative muscles in devising innovative
          solutions. As such, I am open to pursuing full-stack roles that enable
          me to leverage both my frontend and backend skills to create
          exceptional products.
        </StyledP>
        <StyledLink to="./cv.pdf" target="_blank" rel="noreferrer">
          <ButtonBrown4 tabIndex={-1}>Download CV</ButtonBrown4>
        </StyledLink>
      </RightDiv>
    </MainDiv>
  );
};

export default Landing;
