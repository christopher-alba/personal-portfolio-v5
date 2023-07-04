import {
  EasingFunction,
  IntersectionArgs,
  animated,
  easings,
  useInView,
  useSpring,
} from "@react-spring/web";
import React, { useState } from "react";
import { FC, ReactElement } from "react";

const FadeWhenInViewWrapper: FC<{
  children: ReactElement | ReactElement[];
  animateOnce: boolean;
  duration?: number;
  yOffset?: number;
  xOffset?: number;
  threshold?: number;
  rootMargin?: string;
  easing?: EasingFunction;
}> = ({
  children,
  animateOnce = false,
  threshold = 0.3,
  duration = 500,
  yOffset = 0,
  xOffset = 0,
  rootMargin = "",
  easing = easings.easeInOutSine,
}) => {
  const childrenArray = React.Children.toArray(children);
  if (childrenArray.length > 1) {
    return (
      <>
        {childrenArray.map((child, index) => {
          return (
            <Single
              key={index}
              animateOnce={animateOnce}
              duration={duration}
              yOffset={yOffset}
              xOffset={xOffset}
              threshold={threshold}
              rootMargin={rootMargin}
              easing={easing}
            >
              {child as ReactElement}
            </Single>
          );
        })}
      </>
    );
  } else {
    return (
      <Single
        animateOnce={animateOnce}
        duration={duration}
        yOffset={yOffset}
        xOffset={xOffset}
        threshold={threshold}
        rootMargin={rootMargin}
        easing={easing}
      >
        {children as ReactElement}
      </Single>
    );
  }
};

const Single: FC<{
  children: ReactElement;
  animateOnce: boolean;
  duration?: number;
  yOffset?: number;
  xOffset?: number;
  threshold?: number;
  rootMargin?: string;
  easing?: EasingFunction;
}> = ({
  children,
  animateOnce,
  duration,
  yOffset,
  xOffset,
  threshold,
  rootMargin,
  easing,
}) => {
  const [ref, isInView] = useInView({
    threshold: threshold,
    root: this,
    rootMargin: rootMargin,
  } as IntersectionArgs);
  const [disabled, setDisabled] = useState(false);
  const spring = useSpring({
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : yOffset,
    x: isInView ? 0 : xOffset,
    config: {
      duration: duration,
      easing: easing,
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
