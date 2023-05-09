import { FC } from "react";
import { SectionMainDiv } from "../../components/section";
import { Container } from "../../components/container";
import Title from "../../components/TItle";
import {
  ContentWrapper,
  GraphIconSVG,
  LaptopIconSVG,
  UsersIconSVG,
} from "./styled";
import Accordion from "../../components/Accordion";
import Grad from "./components/Grad";
import Tech from "./components/Tech";

const accordionContent = [
  {
    Icon: LaptopIconSVG,
    Content: (
      <p>
        As someone who is passionate about software engineering, I find myself
        constantly drawn to the world of coding and programming. There's
        something about the process of designing and building software that just
        clicks with me - the logic, the problem-solving, the creativity - it all
        comes together in a way that feels incredibly satisfying. I love the
        challenge of taking a complex problem and breaking it down into smaller,
        more manageable pieces, and then piecing those pieces back together into
        a working program. And there's nothing quite like the feeling of seeing
        something you've built come to life, running smoothly and efficiently.
        For me, software engineering isn't just a job or a hobby - it's a true
        passion, and I can't imagine doing anything else.
      </p>
    ),
    titleText: "Passionate Software Engineer",
  },
  {
    Icon: GraphIconSVG,
    Content: (
      <p>
        As a results-oriented professional, I'm constantly focused on achieving
        my goals and delivering measurable outcomes. Whether I'm working on a
        project, leading a team, or collaborating with others, my priority is
        always to produce results that are both impactful and meaningful. I
        believe that success is not just about putting in the effort, but also
        about being strategic and efficient with my time and resources. I am
        constantly looking for ways to optimize my workflow and streamline
        processes in order to maximize my productivity and ensure that I'm
        always delivering the best results possible. At the end of the day, I'm
        driven by the satisfaction that comes from achieving my objectives and
        making a real difference in the work that I do.
      </p>
    ),
    titleText: "Results Oriented Professional",
  },
  {
    Icon: UsersIconSVG,
    Content: (
      <p>
        As someone who is frontend focused and UX driven, I have a deep
        appreciation for the intersection of design and technology. I am
        passionate about creating intuitive and engaging user experiences that
        not only look great but also function seamlessly. I am constantly
        keeping up with the latest design trends and user interface best
        practices in order to ensure that the products I build are both visually
        appealing and user-friendly. I believe that the key to creating great
        user experiences is to approach every project with a human-centered
        design mindset, meaning that I prioritize the needs and goals of the
        end-user in every decision I make. For me, frontend development isn't
        just about writing code - it's about creating beautiful and functional
        interfaces that truly enhance the user's experience.
      </p>
    ),
    titleText: "Frontend Focused and UX Driven",
  },
];

const About: FC = () => {
  return (
    <SectionMainDiv id="about">
      <Container>
        <Title text="About" />
        <ContentWrapper>
          <Grad />
          <Accordion sections={accordionContent} />
          <Tech />
        </ContentWrapper>
      </Container>
    </SectionMainDiv>
  );
};

export default About;
