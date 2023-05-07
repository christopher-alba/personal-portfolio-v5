import { FC } from "react";
import SubSectionTitle from "../../../components/SubSectionTitle";
import {
  CarouselWrapper,
  GradIconStyled,
  InnerContentWrapper,
  TextWrapper,
} from "../styled";
import Carousel from "../../../components/Carousel";
import { CarouselImage } from "../../../components/Carousel/styled";

const Grad: FC = () => {
  return (
    <>
      <SubSectionTitle
        Icon={GradIconStyled}
        text="Computer Systems Engineering (Honors) Graduate"
      />
      <InnerContentWrapper>
        <TextWrapper>
          <p>
            I am thrilled to have graduated from Computer Systems Engineering
            (honors) at the University of Auckland, with a focus on software
            engineering, on May 3rd, 2023.
          </p>
          <p>
            This degree is a significant achievement for me and I feel
            well-prepared to enter the tech industry with the skills I have
            gained. Throughout my studies, I have acquired a solid foundation in
            programming, software design and analysis, which are all vital in
            today's technology-driven world. Additionally, I have honed my
            problem-solving, critical thinking, and communication skills, which
            will serve me well in my future career.{" "}
          </p>
          <p>
            I am proud of all that I have accomplished during my time at the
            University of Auckland and excited for what the future holds for me
            in the tech industry.
          </p>
        </TextWrapper>
        <CarouselWrapper>
          <Carousel>
            <CarouselImage src="./images/grad1-min.JPG" />
            <CarouselImage src="./images/grad2-min.JPG" />
            <CarouselImage src="./images/grad3.jpg" />
            <CarouselImage src="./images/grad4.jpg" />
          </Carousel>
        </CarouselWrapper>
      </InnerContentWrapper>
    </>
  );
};

export default Grad;
