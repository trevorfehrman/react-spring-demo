import React, { useState } from "react";
import { useSpring, animated } from "react-spring/hooks";

const HookedComponent = () => {
  const [toggle, setToggle] = useState(true);
  const [props, set] = useSpring(() => ({ opacity: 1 }));
  return (
    <div>
      <div onClick={() => set({ opacity: toggle ? 1 : 0 })}>Click me</div>
      <animated.div style={props}>This text Faded in Using Hooks</animated.div>
    </div>
  );
};

export default HookedComponent;
