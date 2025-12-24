import type {ExerciseNode} from "../../../framework/content.tsx";
import {mathDiv, mathSpan} from "../../../framework/technical-components/Math/Math.tsx";
import bridgeParallelImage from "./bridge-parallel.jpg";
import largePieceImage from "./large-piece.jpg";
import infiniteResistorLadderImage from "./infinite-resistor-ladder.jpg";
import bridgeMeasureImage from "./bridge-measure.jpg";

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
        <div><img src={bridgeParallelImage} style={{width: "100%"}} /></div>
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
        <div><img src={bridgeParallelImage} style={{width: "100%"}} /></div>
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
    {
      problem: <>
        <p>
          Given a voltage source of {mathSpan("5V")}, a voltage of {mathSpan("3V")} relative to ground is generated
          by a voltage divider using a {mathSpan("R_1 = 20#Omega")} and a {mathSpan("R_2 = 30#Omega")} resistor. This
          is relatively wasteful: Determine the electrical power that gets wasted (converted to heat) when no
          load is connected.
        </p>
        <p>
          Next, a {mathSpan("R_{load} = 10k#Omega")} load is connected to the {mathSpan("3V")} voltage. Determine
          how much the voltage drops from those {mathSpan("3V")}.
        </p>
      </>,
      answer: <>
        <p>
          The resistors add up to {mathSpan("50#Omega")}, so the no-load power consumption is
        </p>
        {mathDiv("P = U #cdot I = #frac{U^2}{R_1 + R_2} = #frac{(3V)^2}{50#Omega} = 180mW")}
        <p>
          With the load, the total voltage is split by the {mathSpan("20#Omega")} resistor and the combined resistance
          of the load and the {mathSpan("30#Omega")} resistor:
        </p>
        {mathDiv("R_{2+load} = #frac{1}{#frac{1}{30#Omega} + #frac{1}{10k#Omega}}")}
        {mathDiv("= #frac{300k#Omega^2}{10030#Omega} = 29.91#Omega")}
        <p>
          This is close to the original {mathSpan("30#Omega")} resistor, so the voltage drop from {mathSpan("3V")} is
          expected to be small:
        </p>
        {mathDiv("V = 5V #cdot #frac{29.91#Omega}{29.91#Omega + 20#Omega} = 5V #cdot #frac{29.91}{49.91} = 2.9964V")}
      </>
    },
    {
      problem: <>
        <p>
          Given a voltage source of {mathSpan("5V")}, a voltage of {mathSpan("3V")} relative to ground is generated
          by a voltage divider using a {mathSpan("R_1 = 400k#Omega")} and a {mathSpan("R_2 = 600k#Omega")} resistor.
          The large resistors prevent too much power from being wasted (converted to heat) on this path from the
          voltage source to ground. Determine that power.
        </p>
        <p>
          Next, a {mathSpan("R_{load} = 10k#Omega")} load is connected to the {mathSpan("3V")} voltage. Determine
          how much the voltage drops from those {mathSpan("3V")}.
        </p>
      </>,
      answer: <>
        <p>
          The resistors add up to {mathSpan("1M#Omega")}, so the no-load power consumption is
        </p>
        {mathDiv("P = U #cdot I = #frac{U^2}{R_1 + R_2} = #frac{(3V)^2}{1M#Omega} = 9#mu W")}
        <p>
          With the load, the total voltage is split by the {mathSpan("400k#Omega")} resistor and the combined resistance
          of the load and the {mathSpan("600k#Omega")} resistor:
        </p>
        {mathDiv("R_{2+load} = #frac{1}{#frac{1}{600k#Omega} + #frac{1}{10k#Omega}}")}
        {mathDiv("= #frac{6000M#Omega^2}{610k#Omega} = 9.836k#Omega")}
        <p>
          This means that the combined resistance of the "lower" part of the voltage divider and the load is dominated
          by the load, so we'd expect the voltage divider to stop working properly and the resulting voltage on the
          load to drop significantly:
        </p>
        {mathDiv("V = 5V #cdot #frac{9.836k#Omega}{9.836k#Omega + 600k#Omega} = 5V #cdot #frac{9836}{609836} = 0.081V")}
        <p>
          This is the downside of using large resistors for the voltage divider: While little power gets wasted, the
          output can only sustain very small loads before its voltage drops.
        </p>
      </>
    },
    {
      problem: <>
        <p>
          A given temperature sensor acts as a temperature-dependent resistor. It is specified to have a resistance
          of {mathSpan("10#Omega")} at {mathSpan("20^{#circ}C")} which varies over {mathSpan("#pm 1#Omega")} for the
          allowed temperature range of {mathSpan("#pm 100^{#circ}C")}. The resistance gets measured by applying a
          current through the resistor and measuring the resulting voltage. The voltage-meter used for this introduces
          an error of up to 1% of the measured voltage.
        </p>
        <p>
          First, assume that we naively attach a current source to the sensor and measure the voltage. Calculate the
          error in {mathSpan("^{#circ}C")} introduced by the voltage-meter.
        </p>
        <p>
          Next, we improve the measurement by using a Wheatstone bridge with three fixed {mathSpan("10#Omega")} resistors:
        </p>
        <div><img src={bridgeMeasureImage} style={{width: "100%"}} /></div>
        <p>
          A voltage source with some defined supply voltage {mathSpan("U")} gets connected to this circuit and the
          voltage-meter attached between the middle points. The voltage-meter now shows values that are very different
          from the naive approach -- what is the right way to interpret them? Calculate the error
          in {mathSpan("^{#circ}C")} introduced by the voltage-meter.
        </p>
      </>,
      answer: <>
        <p>
          In the naive approach, {mathSpan("R=#frac{U}{I}")}, so an error in the measured voltage causes the same
          error, percentage-wise, in the inferred resistance. The resistance is {mathSpan("(10#pm 1)#Omega")}, so
          the error is {mathSpan("(0.1#pm 0.01)#Omega")}, which translates to {mathSpan("(10#pm 1)^{#circ}C")} (that
          is, the error is up to {mathSpan("9^{#circ}C")} at the lower end of the scale and up
          to {mathSpan("11^{#circ}C")} at the upper end). 
        </p>
        <p>
          In the bridge approach, the right voltage divider exactly splits the supply voltage {mathSpan("U")} in
          half, while the divider on the left side ranges from 
        </p>
        {mathDiv("#frac{9#Omega}{10#Omega + 9#Omega}U = #frac{9}{19}U = 0.474U")}
        <p>
          to
        </p>
        {mathDiv("#frac{11#Omega}{10#Omega + 11#Omega}U = #frac{11}{21}U = 0.524U")}
        <p>
          Instead of voltages around the supply voltage, the volt-meter now measures voltages in the range
        </p>
        {mathDiv("(0.474U .. 0.524U) - 0.5U = (-0.26 .. 0.024)U")}
        <p>
          with the measured voltage being roughly proportional to the <i>difference</i> between the sensor's actual
          resistance and {mathSpan("10#Omega")}. This means that the error introduced by the volt-meter is now
          also proportional to that difference in resistance, and thus difference in temperature
          from {mathSpan("20^{#circ}C")}. The error in {mathSpan("^{#circ}C")} is therefore up to 1%
          of {mathSpan("100^{#circ}C")}, or {mathSpan("1^{#circ}C")}, at either end of the scale, and close to zero
          when the temperature is close to {mathSpan("20^{#circ}C")}.
        </p>
      </>
    },
  ],
};
