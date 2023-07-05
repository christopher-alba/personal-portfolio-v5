import { FC, ReactNode, useEffect, useState } from "react";
import SubSectionTitle from "./SubSectionTitle";
import styled from "styled-components";
import { ReactComponent as DownIcon } from "../svg/icons/chevronDown.svg";
import { useMeasure, useWindowSize } from "react-use";
import { animated, useSpring } from "@react-spring/web";
import useViewportWidth from "../hooks/useViewportWidth";

const InnerContentWrapper = styled("div")`
  border-bottom: solid 1px ${({ theme }) => theme.colors.secondary1};
  overflow: hidden;
`;
const TitleWrapper = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const DownIconSVG = styled(DownIcon)`
  transition: 300ms;
  width: 20px;
  height: auto;
`;
const ButtonDown = styled("button")`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.secondary1};
  &:hover,
  ${TitleWrapper}:hover & {
    color: ${({ theme }) => theme.colors.tertiary1};
  }
`;

const Subsection: FC<{
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  titleText: string;
  ContentNode: ReactNode;
  index: number;
  toggleSection: (index: number) => void;
  active: boolean;
}> = ({ Icon, titleText, ContentNode, active, index, toggleSection }) => {
  const [contentHeight, setContentHeight] = useState(200);
  const [ref, { height }] = useMeasure();
  const [render, setRender] = useState(false);
  const width = useViewportWidth();
  useEffect(() => {
    if (!active) {
      setTimeout(() => {
        setRender(false);
      }, 500);
    } else {
      setRender(true);
    }
  }, [active]);
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
    top: active ? 0 : -10,
    position: "relative",
    opacity: active ? 1 : 0,
  });
  const springs2 = useSpring({
    height: active ? contentHeight + 100 : width > 600 ? 50 : 100,
  });
  return (
    <InnerContentWrapper
      as={animated.div}
      style={{ ...springs2 } as any}
      onClick={() => {
        toggleSection(index);
      }}
    >
      <TitleWrapper
        onClick={() => {
          toggleSection(index);
        }}
      >
        <SubSectionTitle Icon={Icon} text={titleText} />
        <ButtonDown
          onClick={() => {
            toggleSection(index);
          }}
        >
          <DownIconSVG style={{ transform: active ? "rotate(180deg)" : "" }} />
        </ButtonDown>
      </TitleWrapper>
      {render ? (
        <animated.div ref={ref as any} style={{ ...springs } as any}>
          {ContentNode}
        </animated.div>
      ) : (
        ""
      )}
    </InnerContentWrapper>
  );
};

export default Subsection;
