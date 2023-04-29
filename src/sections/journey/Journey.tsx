import { FC } from "react";
import { SectionMainDiv } from "../../components/section";
import Title from "../../components/Title";
import { Image, TextWrapper } from "./styled";
import { Emphasize, Text } from "../../components/text";

const Journey: FC = () => {
  return (
    <SectionMainDiv>
      <Title text="My Tech Journey" number={2} />
      <Image src="./images/ai2.png" />
      <TextWrapper>
        <Text>
          <Emphasize>I started my journey </Emphasize>
          by attending Enspiral Dev Academy, where I underwent an intensive
          800-hour Fullstack Web Development course, acquiring foundational
          skills in software development. Following this, I interned as a
          Frontend Software Engineer at Jasper, where I worked in Javascript,
          React, and GraphQL. I then went on to intern as a Fullstack Software
          Developer at Henry Schein One, where I designed and developed web
          applications mainly in C#. At Turners Automotive Group, I started as
          part-time during my final year of university, working in the QA space,
          and later transitioning into a developer role after completing my
          studies.
        </Text>
      </TextWrapper>
    </SectionMainDiv>
  );
};

export default Journey;
