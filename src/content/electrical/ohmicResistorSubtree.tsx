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
    {
      problem: <>
        <p>
          A current of {mathSpan("I=2A")} is applied to a resistor with resistance of {mathSpan("R=40#Omega")}.
          What is the voltage across the resistor?
        </p>
      </>,
      answer: <>
        <p>
          {mathDiv("U = I #cdot R = 2A #cdot 40#Omega = 80V")}
        </p>
      </>
    },
    {
      problem: <>
        <p>
          A voltage of {mathSpan("U=10V")} is applied to a resistor, resulting in a current of {mathSpan("I=4A")}.
          What is the resistance of the resistor?
        </p>
      </>,
      answer: <>
        <p>
          {mathDiv("R = #frac{U}{I} = #frac{10V}{4A} = 2.5#Omega")}
        </p>
      </>
    },
    {
      problem: <>
        <p>
          The marking on a resistor is scratched and unreadable. Suggest a method to determine its resistance.
        </p>
      </>,
      answer: <>
        <p>
          Apply a small voltage and measure the current through the resistor. Then,
        </p>
        {mathDiv("R = #frac{U}{I}")}
        <p>
          The voltage should be small because if the (unknown) resistance is very small, then the current can
          easily get very high and damage the resistor by heating it.
        </p>
        <p>
          An alternative way to measrue the resistance is to apply a known current and measure the voltage across
          the resistor.
        </p>
      </>
    },
  ],
};
