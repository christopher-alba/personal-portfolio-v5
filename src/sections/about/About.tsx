import { FC } from "react";
import { SectionMainDiv } from "../../components/section";
import { Container } from "../../components/container";
import Title from "../../components/TItle";
import {
  CarouselWrapper,
  ContentWrapper,
  GradIconStyled,
  GraphIconSVG,
  InnerContentWrapper,
  LaptopIconSVG,
  TextWrapper,
  UsersIconSVG,
} from "./styled";
import SubSectionTitle from "../../components/SubSectionTitle";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "../../components/Carousel";
import { CarouselImage } from "../../components/Carousel/styled";
import Subsection from "../../components/Subsection";
import Accordion from "../../components/Accordion";

const About: FC = () => {
  return (
    <SectionMainDiv>
      <Container>
        <Title text="About" />
        <ContentWrapper>
          <SubSectionTitle
            Icon={GradIconStyled}
            text="Computer Systems Engineering (Honors) Graduate"
          />
          <InnerContentWrapper>
            <TextWrapper>
              <p>
                I am thrilled to have graduated from Computer Systems
                Engineering (honors) at the University of Auckland, with a focus
                on software engineering, on May 3rd, 2023.
              </p>
              <p>
                This degree is a significant achievement for me and I feel
                well-prepared to enter the tech industry with the skills I have
                gained. Throughout my studies, I have acquired a solid
                foundation in programming, software design and analysis, which
                are all vital in today's technology-driven world. Additionally,
                I have honed my problem-solving, critical thinking, and
                communication skills, which will serve me well in my future
                career.{" "}
              </p>
              <p>
                I am proud of all that I have accomplished during my time at the
                University of Auckland and excited for what the future holds for
                me in the tech industry.
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
          <Accordion
            sections={[
              {
                Icon: LaptopIconSVG,
                Content: (
                  <p>
                    As someone who is passionate about software engineering, I
                    find myself constantly drawn to the world of coding and
                    programming. There's something about the process of
                    designing and building software that just clicks with me -
                    the logic, the problem-solving, the creativity - it all
                    comes together in a way that feels incredibly satisfying. I
                    love the challenge of taking a complex problem and breaking
                    it down into smaller, more manageable pieces, and then
                    piecing those pieces back together into a working program.
                    And there's nothing quite like the feeling of seeing
                    something you've built come to life, running smoothly and
                    efficiently. For me, software engineering isn't just a job
                    or a hobby - it's a true passion, and I can't imagine doing
                    anything else.
                  </p>
                ),
                titleText: "Passionate Software Engineer",
              },
              {
                Icon: GraphIconSVG,
                Content: (
                  <p>
                    As a results-oriented professional, I'm constantly focused
                    on achieving my goals and delivering measurable outcomes.
                    Whether I'm working on a project, leading a team, or
                    collaborating with others, my priority is always to produce
                    results that are both impactful and meaningful. I believe
                    that success is not just about putting in the effort, but
                    also about being strategic and efficient with my time and
                    resources. I am constantly looking for ways to optimize my
                    workflow and streamline processes in order to maximize my
                    productivity and ensure that I'm always delivering the best
                    results possible. At the end of the day, I'm driven by the
                    satisfaction that comes from achieving my objectives and
                    making a real difference in the work that I do.
                  </p>
                ),
                titleText: "Results Oriented Professional",
              },
              {
                Icon: UsersIconSVG,
                Content: (
                  <p>
                    As someone who is frontend focused and UX driven, I have a
                    deep appreciation for the intersection of design and
                    technology. I am passionate about creating intuitive and
                    engaging user experiences that not only look great but also
                    function seamlessly. I am constantly keeping up with the
                    latest design trends and user interface best practices in
                    order to ensure that the products I build are both visually
                    appealing and user-friendly. I believe that the key to
                    creating great user experiences is to approach every project
                    with a human-centered design mindset, meaning that I
                    prioritize the needs and goals of the end-user in every
                    decision I make. For me, frontend development isn't just
                    about writing code - it's about creating beautiful and
                    functional interfaces that truly enhance the user's
                    experience.
                  </p>
                ),
                titleText: "Frontend Focused and UX Driven",
              },
            ]}
          />
        </ContentWrapper>
      </Container>
    </SectionMainDiv>
  );
};

export default About;
