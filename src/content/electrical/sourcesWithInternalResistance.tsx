import type {ExerciseNode} from "../../framework/content.tsx";
import {mathSpan} from "../../framework/technical-components/Math/Math.tsx";

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
          the resulting current?
        </p>
      </>,
      answer: <>
        <p>
          The load and the internal resistance add up to {mathSpan("60#Omega")}. The current is then
          {mathSpan("#frac{5V}{60#Omega} = 0.0833A")}.
        </p>
      </>
    },
  ],
};
