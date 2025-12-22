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
    {
      problem: <>
        <p>
          A {mathSpan("5#Omega")} resistor and a {mathSpan("10#Omega")} resistor are connected in series. What is the
          total resistance?
        </p>
      </>,
      answer: <>
        <p>
          In series, the resistances add up:
        </p>
        {mathDiv("R = R_1 + R_2 = 5#Omega + 10#Omega = 15#Omega")}
      </>
    },
    {
      problem: <>
        <p>
          A {mathSpan("5#Omega")} resistor and a {mathSpan("10#Omega")} resistor are connected in parallel. What is the
          total resistance?
        </p>
      </>,
      answer: <>
        <p>
          In parallel, the inverse of the resistances adds up:
        </p>
        {mathDiv("#frac{1}{R} = #frac{1}{R_1} + #frac{1}{R_2} = #frac{1}{5#Omega} + #frac{1}{10#Omega} = #frac{3}{10#Omega}")}
        {mathDiv("R = 3.33#Omega")}
      </>
    },
    {
      problem: <>
        <p>
          Which statement is correct?
        </p>
        <ul>
          <li>When connecting nonzero resistances in series, the total resistance is always less than the smallest resistance.</li>
          <li>When connecting nonzero resistances in series, the total resistance is always greater than the greatest resistance.</li>
        </ul>
      </>,
      answer: <>
        <p>
          In series, the resistances add up, so the total resistance is always greater than the greatest resistance.
        </p>
      </>
    },
    {
      problem: <>
        <p>
          Which statement is correct?
        </p>
        <ul>
          <li>When connecting nonzero resistances in parallel, the total resistance is always less than the smallest resistance.</li>
          <li>When connecting nonzero resistances in parallel, the total resistance is always greater than the greatest resistance.</li>
        </ul>
      </>,
      answer: <>
        <p>
          In parallel, the inverse of the resistances adds up, so the total resistance is always less than the smallest resistance.
        </p>
      </>
    },
  ],
};
