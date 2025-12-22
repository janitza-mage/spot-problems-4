import type {ExerciseNode} from "../../framework/content.tsx";
import {mathDiv, mathSpan} from "../../framework/technical-components/Math/Math.tsx";

export const ohmicResistorSubtree: ExerciseNode = {
  id: "ohmicResistor",
  name: "Ohmic Resistors",
  type: "exercise",
  contentItems: [
    {
      problem: <>
        <p>
          A voltage of {mathSpan("U=5V")} is applied to a resistor with resistance of {mathSpan("R=10#Omega")}.
          What is the current through the resistor?
        </p>
      </>,
      answer: <>
        <p>
          {mathDiv("I = #frac{U}{R} = #frac{5V}{10#Omega} = 0.5A")}
        </p>
      </>
    },
  ],
};
