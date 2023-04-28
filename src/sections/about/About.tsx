import { FC } from "react";
import { SectionMainDiv } from "../../components/section";
import Title from "../../components/Title";
import {
  AtomWrapper,
  Emphasize,
  Header,
  Image,
  Image2,
  Image2Wrapper,
  ImageWrapper,
  Text,
  TextWrapper,
} from "./styled";
import Atom from "../../svg/Atom/Atom";

const About: FC = () => {
  return (
    <SectionMainDiv id="about">
      <Header>
        <Title text="About Me" number={1} />
        <ImageWrapper>
          <div>
            <Image src="./images/profileImage.png" />
          </div>
          <Image2Wrapper>
            <Image2 src="./images/jasper1.jpg" />
          </Image2Wrapper>
          <AtomWrapper>
            <Atom />
          </AtomWrapper>
        </ImageWrapper>
      </Header>
      <TextWrapper>
        <Text>
          <Emphasize>As a passionate software engineer</Emphasize>, I thrive on
          the challenge of applying my knowledge to diverse projects. With each
          new task or initiative, I relish the opportunity to learn and grow
          while also contributing to the success of the team. Collaboration is a
          key aspect of my work ethic, and I firmly believe that working
          alongside others with complementary skills is the best way to achieve
          amazing results. Whether brainstorming with colleagues, sharing ideas,
          or providing support, I am committed to working together to create
          exceptional products and drive business success.
        </Text>
        <Text>
          <Emphasize>As a results-oriented professional</Emphasize>, I
          understand the importance of measuring progress towards any goal. I
          make it a priority to stay focused and organized, setting clear
          objectives and milestones to help myself and others stay on track.
          Whether developing software, testing code, or debugging applications,
          I strive to consistently deliver high-quality work that meets
          expectations. Above all, I am driven by a passion for innovation, and
          I am committed to leveraging my skills and experience to drive
          continuous improvement and success in any project I undertake.
        </Text>
      </TextWrapper>
    </SectionMainDiv>
  );
};

export default About;
