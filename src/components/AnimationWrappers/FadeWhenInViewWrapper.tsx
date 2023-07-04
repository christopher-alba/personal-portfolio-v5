import {
  IntersectionArgs,
  animated,
  useInView,
  useSpring,
} from "@react-spring/web";
import React from "react";
import { FC, ReactElement } from "react";

const FadeWhenInViewWrapper: FC<{
  children: ReactElement | ReactElement[];
}> = ({ children }) => {
  const childrenArray = React.Children.toArray(children);
  if (childrenArray.length > 1) {
    return (
      <>
        {childrenArray.map((child) => {
          return <Single>{child as ReactElement}</Single>;
        })}
      </>
    );
  } else {
    return <Single>{children as ReactElement}</Single>;
  }
};

const Single: FC<{ children: ReactElement }> = ({ children }) => {
  const [ref, isInView] = useInView({
    threshold: 0.3,
  } as IntersectionArgs);
  const spring = useSpring({
    opacity: isInView ? 1 : 0,
    config: {
      duration: 1000,
    },
  });
  return (
    <animated.div ref={ref} style={{ ...spring }}>
      {children}
    </animated.div>
  );
};

export default FadeWhenInViewWrapper;
