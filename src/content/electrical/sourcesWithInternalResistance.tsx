import type {ExerciseNode} from "../../framework/content.tsx";
import {mathDiv, mathSpan} from "../../framework/technical-components/Math/Math.tsx";

export const sourcesWithInternalResistance: ExerciseNode = {
  id: "sourcesWithInternalResistance",
  name: "Sources with internal resistance",
  type: "exercise",
  contentItems: [
    {
      problem: <>
        <p>
          A given voltage source is modeled as an ideal {mathSpan("5V")} source in series with a
          {mathSpan("4#Omega")} resistor. What are the internal resistance and the no-load voltage of the source?
        </p>
      </>,
      answer: <>
        <p>
          When a voltage source is modeled as an ideal source in series with a resistor, the no-load voltage is
          equal to the voltage of the ideal source, in this case {mathSpan("5V")}, and the internal resistance is
          that of the resistor, in this case {mathSpan("4#Omega")}.
        </p>
      </>
    },
    {
      problem: <>
        <p>
          A given voltage source is modeled as an ideal {mathSpan("5V")} source in series with a
          {mathSpan("10#Omega")} resistor. The source is connected to a load of {mathSpan("50#Omega")}. What is
          the resulting voltage and current at the load?
        </p>
      </>,
      answer: <>
        <p>
          The load and the internal resistance add up to {mathSpan("60#Omega")}. The current is then
        </p>
        {mathDiv("I = #frac{5V}{60#Omega} = 0.0833A")}
        <p>
          and the voltage at the load is
        </p>
        {mathDiv("V_{load} = I #cdot R_{load} = #frac{5V}{60#Omega} #cdot 50#Omega = 4.17V")}
      </>
    },
    {
      problem: <>
        <p>
          A given voltage source is modeled as an ideal {mathSpan("5V")} source in series with a
          {mathSpan("10#Omega")} resistor. What is the short-circuit current of this source?
        </p>
      </>,
      answer: <>
        {mathDiv("#frac{5V}{10#Omega} = 0.5A")}
      </>
    },
    {
      problem: <>
        <p>
          Two voltage sources are simultaneously connected to the same load of {mathSpan("100k#Omega")}. Both sources
          nominally  provide {mathSpan("5V")}, but actual measurements have shown that one source can be modeled as
          a {mathSpan("5.05V")} source with an internal resistance of {mathSpan("1#Omega")}, and the other source
          can be modeled as a {mathSpan("4.95V")} source with an internal resistance of {mathSpan("2#Omega")}.
        </p>
        <p>
          A naive approach would tell us that the two sources share the load, but being voltage sources, the resulting
          current should not change, as long as we aren't close to short-circuiting the sources, which at a load
          of {mathSpan("100k#Omega")} we aren't doing. The naive approach would tell us that at
          (roughly) {mathSpan("5V")}, the current is
        </p>
        {mathDiv("I = #frac{5V}{100k#Omega} = 0.05mA")}
        <p>
          and indeed, a quick measurement of the current through the load confirms this. 
        </p>
        <p>
          But then, we want to check how that current gets split between the sources, expecting each of them to provide
          roughly half the current, but instead we measure a current of {mathSpan("33mA")} at the first source and
          {mathSpan("-33mA")} at the second source. What is going on here, and what is the lesson to learn from it?
        </p>
      </>,
      answer: <>
        <p>
          The sources have short-circuited <i>each other</i>: Their difference in voltage may seem tiny at
        </p>
        {mathDiv("#Delta V = 5.05V - 4.95V = 0.1V")}
        <p>
          but that voltage is applied over a path that contains only the internal resistances of the sources, which
          add up to {mathSpan("3#Omega")}. The sources therefore exchange a current of roughly
        </p>
        {mathDiv("I = #frac{0.1V}{3#Omega} = 33mA")}
        <p>
          This calculation ignores the interaction between this low-resistance path and the load, but that
          approximation is valid because the load is so huge in comparison.
        </p>
        <p>
          Therefore, in addition to the current through the load, we have a much larger current which the
          higher-voltage source drives through the lower-voltage source <i>backwards</i>. This is dangerous because
          some sources don't like this at all. For example, non-rechargeable batteries may rupture when current is
          driven through them in reverse.
        </p>
        <p>
          The lesson to learn here is to avoid connecting voltage sources directly in parallel, because tiny
          differences in voltage will lead to large currents trying to equalize the voltages.
          There <i>are</i> exceptions to this rule, but in general, additional components should be used to prevent
          these source-to-source currents.
        </p>
      </>
    },
    {
      problem: <>
        <p>
          A given current source is modeled as an ideal {mathSpan("0.2A")} source in parallel with
          a {mathSpan("5#Omega")} resistor. What are the internal resistance and the short-circuit current of the source?
        </p>
      </>,
      answer: <>
        <p>
          When a current source is modeled as an ideal source in parallel with a resistor, the short-circuit
          current is equal to the current of the ideal source, in this case {mathSpan("0.2A")}, and the internal
          resistance is that of the resistor, in this case {mathSpan("5#Omega")}.
        </p>
      </>
    },
    {
      problem: <>
        <p>
          A given current source is modeled as an ideal {mathSpan("0.3A")} source in parallel with
          a {mathSpan("10#Omega")} resistor. The source is connected to a load of {mathSpan("50#Omega")}. What is
          the resulting current and voltage at the load?
        </p>
      </>,
      answer: <>
        <p>
          The total resistance is
        </p>
        {mathDiv("R = #frac{1}{#frac{1}{10#Omega} + #frac{1}{50#Omega}} = #frac{500#Omega^2}{60#Omega} = 8.33#Omega")}
        <p>
          The voltage at both the internal resistance and the load is therefore
        </p>
        {mathDiv("U = 0.3A #cdot 8.33#Omega = 2.5V")}
        <p>
          and the current through the load is
        </p>
        {mathDiv("I_{load} = #frac{U}{R_{load}} = #frac{2.5V}{50#Omega} = 0.05A")}
      </>
    },
    {
      problem: <>
        <p>
          A given current source is modeled as an ideal {mathSpan("3A")} source in parallel with a
          {mathSpan("10#Omega")} resistor. What is the open-circuit voltage of this source?
        </p>
      </>,
      answer: <>
        {mathDiv("U = 3A #cdot 10#Omega = 30V")}
      </>
    },
  ],
};
