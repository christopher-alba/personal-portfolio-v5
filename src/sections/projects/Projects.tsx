import { FC } from "react";
import { BackgroundDiv, ProjectsWrapper, StyledAnchor } from "./styled";
import { Container } from "../../components/container";
import Title from "../../components/TItle";
import ProjectBox from "./components/ProjectBox";
import { projects } from "./data";
import Accordion from "../../components/Accordion";
import FadeWhenInViewWrapper from "../../components/AnimationWrappers/FadeWhenInViewWrapper";
const Projects: FC<{ refs: React.RefObject<any> }> = ({ refs }) => {
  return (
    <BackgroundDiv id="projects" ref={refs}>
      <Container>
        <Title text="Personal Software Projects" />
        <FadeWhenInViewWrapper animateOnce={false}>
          <ProjectsWrapper>
            {projects.map((project, index) => (
              <ProjectBox key={index} project={project} />
            ))}
          </ProjectsWrapper>
        </FadeWhenInViewWrapper>
        <div style={{ marginTop: "50px", paddingBottom: "50px" }}>
          <Title text="Project Details" />
          <FadeWhenInViewWrapper animateOnce={false}>
            <Accordion
              sections={projects.map((project) => {
                return {
                  titleText: project.name,
                  Content: (
                    <div>
                      <div style={{ display: "flex" }}>
                        {project.github.map((item, index) => {
                          return (
                            <StyledAnchor
                              key={index}
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <p>Github - {item.type}</p>
                            </StyledAnchor>
                          );
                        })}
                      </div>
                      <p>{project.description}</p>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          marginBottom: "30px",
                        }}
                      >
                        {project.tags.map((tag, index) => (
                          <p
                            key={index}
                            style={{
                              marginTop: 0,
                              marginBottom: 0,
                              marginRight: "10px",
                            }}
                          >
                            <strong>#{tag}</strong>
                          </p>
                        ))}
                      </div>
                    </div>
                  ),
                };
              })}
            />
          </FadeWhenInViewWrapper>
        </div>
      </Container>
    </BackgroundDiv>
  );
};

export default Projects;
