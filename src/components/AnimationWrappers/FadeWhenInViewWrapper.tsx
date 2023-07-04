import {
  IntersectionArgs,
  animated,
  useInView,
  useSpring,
} from "@react-spring/web";
import React, { useState } from "react";
import { FC, ReactElement } from "react";

const FadeWhenInViewWrapper: FC<{
  children: ReactElement | ReactElement[];
  animateOnce: boolean;
}> = ({ children, animateOnce = false }) => {
  const childrenArray = React.Children.toArray(children);
  if (childrenArray.length > 1) {
    return (
      <>
        {childrenArray.map((child) => {
          return (
            <Single animateOnce={animateOnce}>{child as ReactElement}</Single>
          );
        })}
      </>
    );
  } else {
    return (
      <Single animateOnce={animateOnce}>{children as ReactElement}</Single>
    );
  }
};

const Single: FC<{ children: ReactElement; animateOnce: boolean }> = ({
  children,
  animateOnce,
}) => {
  const [ref, isInView] = useInView({
    threshold: 0.3,
  } as IntersectionArgs);
  const [disabled, setDisabled] = useState(false);
  const spring = useSpring({
    opacity: isInView ? 1 : 0,
    config: {
      duration: 1000,
    },
    onRest: () => {
      if (animateOnce) {
        setDisabled(true);
      }
    },
  });
  return (
    <animated.div ref={ref} style={!disabled ? { ...spring } : {}}>
      {children}
    </animated.div>
  );
};

export default FadeWhenInViewWrapper;
