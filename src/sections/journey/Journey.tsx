import { FC, useState } from "react";
import Title from "../../components/TItle";
import { Container } from "../../components/container";
import {
  ChevronDownSVG,
  DownButton,
  Timeline,
  TimelineContentInner,
  TimelineContentLeft,
  TimelineContentRight,
  TimelineWrapper,
} from "./styled";
import { Company, data } from "./data";
import { SectionMainDiv } from "../../components/section";
import { useSpring, animated } from "@react-spring/web";
import useViewportWidth from "../../hooks/useViewportWidth";

const CompanyCard: FC<{ company: Company; index: number }> = ({
  company,
  index,
}) => {
  const [display, setDisplay] = useState(false);
  const [render, setRender] = useState(false);
  const width = useViewportWidth();
  const springs = useSpring({
    top: display ? 0 : -10,
    position: "relative",
    opacity: display ? 1 : 0,
  });
  const springs2 = useSpring({
    height: display ? (width > 600 ? 300 : 500) : 200,
    config: {
      mass: 5,
      tension: 0,
      friction: 0,
    },
  });
  if (index % 2 === 0) {
    return (
      <TimelineContentLeft as={animated.div} style={{ ...springs2 } as any}>
        <TimelineContentInner>
          <p>{company.dateString}</p>
          <p>{company.position}</p>
          <p>
            <strong>{company.name}</strong>
          </p>
          <DownButton
            onClick={() => {
              if (render) {
                setDisplay(false);
                setTimeout(() => {
                  setRender(false);
                }, 500);
              } else {
                setRender(true);
                setDisplay(true);
              }
            }}
          >
            <ChevronDownSVG
              style={{ transform: display ? "rotate(180deg)" : "" }}
            />
          </DownButton>
          <hr />
          {render && (
            <animated.div style={{ ...springs } as any}>
              <p>{company.summary}</p>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {company.technologies.map((tech) => (
                  <p style={{ margin: 0, padding: "5px" }}>
                    <strong>#{tech}</strong>
                  </p>
                ))}
              </div>
            </animated.div>
          )}
        </TimelineContentInner>
      </TimelineContentLeft>
    );
  } else {
    return (
      <TimelineContentRight as={animated.div} style={{ ...springs2 } as any}>
        <TimelineContentInner>
          <p>{company.dateString}</p>
          <p>{company.position}</p>
          <p>
            <strong>{company.name}</strong>
          </p>
          <DownButton
            onClick={() => {
              if (render) {
                setDisplay(false);
                setTimeout(() => {
                  setRender(false);
                }, 500);
              } else {
                setRender(true);
                setDisplay(true);
              }
            }}
          >
            <ChevronDownSVG
              style={{ transform: display ? "rotate(180deg)" : "" }}
            />
          </DownButton>
          <hr />
          {render && (
            <animated.div style={{ ...springs } as any}>
              <p>{company.summary}</p>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {company.technologies.map((tech) => (
                  <p style={{ margin: 0, padding: "5px" }}>
                    <strong>#{tech}</strong>
                  </p>
                ))}
              </div>
            </animated.div>
          )}
        </TimelineContentInner>
      </TimelineContentRight>
    );
  }
};

const Journey: FC = () => {
  return (
    <SectionMainDiv>
      <Container>
        <Title text="My Journey in Web Development" />
        <TimelineWrapper>
          <Timeline></Timeline>
          {data.map((company, index) => {
            return <CompanyCard company={company} index={index} />;
          })}
        </TimelineWrapper>
      </Container>
    </SectionMainDiv>
  );
};
export default Journey;
