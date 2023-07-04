import { FC, useState, useEffect } from "react";
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
import { useMeasure } from "react-use";
import FadeWhenInViewWrapper from "../../components/AnimationWrappers/FadeWhenInViewWrapper";

const CompanyCard: FC<{ company: Company; index: number }> = ({
  company,
  index,
}) => {
  const [display, setDisplay] = useState(false);
  const [render, setRender] = useState(false);
  const [contentHeight, setContentHeight] = useState(200);
  const [ref, { height }] = useMeasure();
  const width = useViewportWidth();
  useEffect(() => {
    //Sets initial height
    setContentHeight(height);

    //Adds resize event listener
    window.addEventListener("resize", setContentHeight(height) as any);

    // Clean-up
    return window.removeEventListener(
      "resize",
      setContentHeight(height) as any
    );
  }, [height]);
  const springs = useSpring({
    top: display ? 0 : -10,
    position: "relative",
    opacity: display ? 1 : 0,
  });
  const springs2 = useSpring({
    height: display
      ? (width > 600 ? 200 : 250) + contentHeight
      : width > 600
      ? 200
      : 250,
    config: {
      mass: 5,
      tension: 0,
      friction: 0,
    },
  });
  if (index % 2 === 0) {
    return (
      <TimelineContentLeft
        as={animated.div}
        style={{ ...springs2 } as any}
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
        <TimelineContentInner>
          <p style={{ marginTop: 0 }}>{company.dateString}</p>
          <p>{company.position}</p>
          <p>
            <strong>{company.name}</strong>
          </p>
          <DownButton>
            <ChevronDownSVG
              style={{ transform: display ? "rotate(180deg)" : "" }}
            />
          </DownButton>
          <hr />
          {render && (
            <animated.div style={{ ...springs } as any} ref={ref as any}>
              <p>{company.summary}</p>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {company.technologies.map((tech, index) => (
                  <p key={index} style={{ margin: 0, padding: "5px" }}>
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
      <TimelineContentRight
        as={animated.div}
        style={{ ...springs2 } as any}
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
        <TimelineContentInner>
          <p style={{ marginTop: 0 }}>{company.dateString}</p>
          <p>{company.position}</p>
          <p>
            <strong>{company.name}</strong>
          </p>
          <DownButton>
            <ChevronDownSVG
              style={{ transform: display ? "rotate(180deg)" : "" }}
            />
          </DownButton>
          <hr />
          {render && (
            <animated.div style={{ ...springs } as any} ref={ref as any}>
              <p>{company.summary}</p>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {company.technologies.map((tech, index) => (
                  <p key={index} style={{ margin: 0, padding: "5px" }}>
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

const Journey: FC<{ refs: React.RefObject<any> }> = ({ refs }) => {
  return (
    <SectionMainDiv id="journey" ref={refs}>
      <Container>
        <Title text="My Journey in Web Development" />
        <FadeWhenInViewWrapper animateOnce={false}>
          <TimelineWrapper>
            <Timeline></Timeline>
            {data.map((company, index) => {
              return (
                <CompanyCard key={index} company={company} index={index} />
              );
            })}
          </TimelineWrapper>
        </FadeWhenInViewWrapper>
      </Container>
    </SectionMainDiv>
  );
};
export default Journey;
