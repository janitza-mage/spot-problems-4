import type {ExerciseNode} from "../../../framework/content.tsx";
import {mathDiv, mathSpan} from "../../../framework/technical-components/Math/Math.tsx";
import bridgeParallelImage from "./bridge-parallel.jpg";

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
          <li>When connecting nonzero resistances in <b>series</b>, the total resistance is always <b>less</b> than the <b>smallest</b> resistance.</li>
          <li>When connecting nonzero resistances in <b>series</b>, the total resistance is always <b>greater</b> than the <b>smallest</b> resistance.</li>
          <li>When connecting nonzero resistances in <b>series</b>, the total resistance is always <b>less</b> than the <b>greatest</b> resistance.</li>
          <li>When connecting nonzero resistances in <b>series</b>, the total resistance is always <b>greater</b> than the <b>greatest</b> resistance.</li>
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
          <li>When connecting nonzero resistances in <b>parallel</b>, the total resistance is always <b>less</b> than the <b>smallest</b> resistance.</li>
          <li>When connecting nonzero resistances in <b>parallel</b>, the total resistance is always <b>greater</b> than the <b>smallest</b> resistance.</li>
          <li>When connecting nonzero resistances in <b>parallel</b>, the total resistance is always <b>less</b> than the <b>greatest</b> resistance.</li>
          <li>When connecting nonzero resistances in <b>parallel</b>, the total resistance is always <b>greater</b> than the <b>greatest</b> resistance.</li>
        </ul>
      </>,
      answer: <>
        <p>
          In parallel, the inverse of the resistances adds up, so the total resistance is always less than the smallest resistance.
        </p>
      </>
    },
    {
      problem: <>
        <p>
          What is the total resistance of connecting 100 resistors of {mathSpan("345#Omega")} each in series?
        </p>
      </>,
      answer: <>
        {mathDiv("R = 100 #cdot 345#Omega = 34.5k#Omega")}
      </>
    },
    {
      problem: <>
        <p>
          What is the total resistance of connecting 100 resistors of {mathSpan("345#Omega")} each in parallel?
        </p>
      </>,
      answer: <>
        {mathDiv("R = #frac{1}{100} #cdot 345#Omega = 3.45#Omega")}
      </>
    },
    {
      problem: <>
        <p>
          A voltage source of {mathSpan("6V")} gets attached to two sub-circuits. Each one a series of two
          resistors, like this:
        </p>
        <div><img src={bridgeParallelImage} /></div>
        <p>
          with the values
        </p>
        {mathDiv("R_1 = 10#Omega")}
        {mathDiv("R_2 = 20#Omega")}
        {mathDiv("R_3 = 60#Omega")}
        {mathDiv("R_4 = 120#Omega")}
        <p>
          Calculate the voltage at the point between the two resistors on the left side against ground. Then do the
          same for the right side.
        </p>
        <p>
          Then suppose that the those two points are connected with a wire. This forces them to have the same voltage
          against ground since the wire is assumed to have zero resistance. What is that voltage against ground?
        </p>
      </>,
      answer: <>
        <p>
          On both sides, the resistors split the voltage into {mathSpan("#frac{1}{3}")} and {mathSpan("#frac{1}{3}")},
          so the voltage against ground is {mathSpan("4V")} on both sides. Connecting them has therefore no effect.
        </p>
      </>
    },
    {
      problem: <>
        <p>
          A voltage source of {mathSpan("10V")} gets attached to two sub-circuits. Each one a series of two
          resistors, like this:
        </p>
        <div><img src={bridgeParallelImage} /></div>
        <p>
          with the values
        </p>
        {mathDiv("R_1 = 10#Omega")}
        {mathDiv("R_2 = 90#Omega")}
        {mathDiv("R_3 = 90#Omega")}
        {mathDiv("R_4 = 10#Omega")}
        <p>
          Calculate the voltage at the point between the two resistors on the left side against ground. Then do the
          same for the right side.
        </p>
        <p>
          Then suppose that the those two points are connected with a wire. This forces them to have the same voltage
          against ground since the wire is assumed to have zero resistance. What is that voltage against ground?
        </p>
      </>,
      answer: <>
        <p>
          The resistors split the voltage into {mathSpan("#frac{1}{10}")} and {mathSpan("#frac{9}{10}")} on the left,
          and vice versa on the right. The left-side voltage against ground is therefore {mathSpan("9V")},
          and {mathSpan("1V")} on the right.
        </p>
        <p>
          When the middle points are connected, the whole circuit is a series connection of two parts, each of which
          is a parallel connection of a {mathSpan("10#Omega")} resistor and a {mathSpan("90#Omega")} resistor.
          Since the combined resistance of the upper part is the same as for the lower part, the total voltage is split
          in half, so the voltage of the connected middle points against ground is {mathSpan("5V")}.
        </p>
      </>
    },
  ],
};
