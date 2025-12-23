import type {ExerciseNode} from "../../../framework/content.tsx";
import {mathDiv, mathSpan} from "../../../framework/technical-components/Math/Math.tsx";
import bridgeParallelImage from "./bridge-parallel.jpg";
import largePieceImage from "./large-piece.jpg";
import infiniteResistorLadderImage from "./infinite-resistor-ladder.jpg";

function a(x: number, y: number) {
  return 1/(1/x + 1/y);
}

const s = 0.02;
const p = 1;

let b = s + p;
for (let i = 0; i < 100; i++) {
  console.log(b);
  b = s + a(p, b);
}

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
          An alternative way to measure the resistance is to apply a known current and measure the voltage across
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
    {
      problem: <>
        <p>
          A voltage source gets attached to a large piece of somewhat-conductive material like so:
        </p>
        <div><img src={largePieceImage} style={{width: "100%"}} /></div>
        <p>
          The piece is large both in the distance between the terminals and the distance from the terminals to the
          "far" end. "Large" means that we can simplify the formula for total resistance somewhat, as will be shown
          below.
        </p>
        <p>
          A thin strip of {mathSpan("1mm")} of this material between the source terminals has a resistance
          of {mathSpan("1#Omega")}. The whole attached piece is known to be uniformly shaped, so it can be
          thought of as a large number of these strips connected to each other. The material is also uniform
          in its properties, in particular its resistivity, so there is a linear voltage drop across the whole length
          of a strip.
        </p>
        <p>
          Now our assumption of a "large" piece comes into play, and it does so in two ways:
          <ul>
            <li>Each strip is connected to the previous one at all points, through a path with a small resistance
              of {mathSpan("0.01#Omega")}. However, the large distance between the terminals causes these connections
              to contribute only small currents. We can therefore ignore the connections between "inner" points and
              assume that strips are connected only at the ends, modeling each strip by
              a {mathSpan("1#Omega")} resistance along the strip, and a {mathSpan("0.01#Omega")} resistance connecting
              the ends of neighboring strips.</li>
            <li>The large distance from the terminals to the "far" end adds up a lot of resistance along the way,
              so each successive strip will contribute less and less current. This allows us to model the whole
              piece as an infinite number of strips. </li>
          </ul>
        </p>
        <p>
          Both of these assumptions taken together allow us to model the whole piece of material as an infinite
          resistor ladder:
        </p>
        <div><img src={infiniteResistorLadderImage} style={{width: "100%"}} /></div>
        <p>
          Note how, while there is no infinite resistor ladder in reality, "large" things can be modeled as "infinite"
          when the numbers we know describe a sufficiently small part of it.
        </p>
        <p>
          Determine the total resistance of this piece. Hint: An infinite chain has the
          unexpected property that its resistance can be determined from a resistor network that contains <i>itself</i>.
        </p>
      </>,
      answer: <>
        <p>
          Let {mathSpan("R")} be the resistance of the whole infinite ladder. Then {mathSpan("R")} can be
          expressed as a {mathSpan("0.02#Omega")} resistor (entering and leaving the first strip), connected in
          series with a parallel connection of a {mathSpan("1#Omega")} resistor (resistance along a strip)
          and {mathSpan("R")} itself (the rest of the infinite network, which is the infinite network itself):
        </p>
        {mathDiv("R = 0.02#Omega + #frac{1}{#frac{1}{1#Omega} + #frac{1}{R}}")}
        {mathDiv("R = 0.02#Omega + #frac{R #cdot 1#Omega}{R + 1#Omega}")}
        {mathDiv("R(R + 1#Omega) = 0.02#Omega #cdot (R + 1#Omega) + R #cdot 1#Omega")}
        {mathDiv("R^2 + R#cdot 1#Omega = R#cdot 0.02#Omega + 0.02#Omega^2 + R #cdot 1#Omega")}
        {mathDiv("R^2 - R#cdot 0.02#Omega - 0.02#Omega^2 = 0")}
        {mathDiv("R = 0.01#Omega #pm 0.14177#Omega")}
        <p>
          Since we have a network of passive ohmic resistors, {mathSpan("R #geq 0")}:
        </p>
        {mathDiv("R = 0.01#Omega + 0.14177#Omega = 0,15177#Omega")}
      </>
    },
    {
      problem: <>
        <p>
          Given a voltage source of {mathSpan("5V")}, describe how to use a voltage divider (using passive resistors)
          to obtain a voltage of {mathSpan("3.3V")} against ground. Assume that only a negligible current is
          drawn from that {mathSpan("3.3V")}.
        </p>
      </>,
      answer: <>
        <p>
          A voltage divider works by connecting two resistors in series from the source to ground, which split
          the total voltage in the same ratio as their resistances. So we need to resistors in a ratio
          of {mathSpan("#frac{3.3V}{5V-3.3V} = #frac{3.3V}{1.7V}")}, and connect the larger resistor to ground, and
          the smaller one to the source. Since negligible current is drawn from the {mathSpan("3.3V")} output,
          we can use high resistances to minimize the current through both resistors, which is otherwise wasted.
          An example would be a {mathSpan("33k#Omega")} resistor and a {mathSpan("17k#Omega")} resistor. As long
          as the ratio is correct (or within tolerance, which is typically specified in a real-world application),
          a typical real-world consideration is which resistor components are readily available to be used.
        </p>
      </>
    },
  ],
};
