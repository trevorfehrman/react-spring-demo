import React from "react";
import { Spring, config } from "react-spring";

const counter = () => (
  <Spring
    from={{ number: 0 }}
    to={{ number: 10 }}
    delay="1000"
    config={config.molasses}
  >
    {props => (
      <div>
        <h1>This Div Slid Down and Faded In On Load</h1>
        {props.number.toFixed()}
      </div>
    )}
  </Spring>
);

export default counter;
