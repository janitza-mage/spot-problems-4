import type {ExerciseNode} from "../../framework/content.tsx";
import {mathDiv, mathSpan} from "../../framework/technical-components/Math/Math.tsx";

export const capacitorExercise: ExerciseNode = {
  id: "capacitor",
  name: "Capacitors",
  type: "exercise",
  contentItems: [
    {
      problem: <>
        <p>
          A {mathSpan("150#mu F")} gets charged for {mathSpan("0.3s")} with a constant current of {mathSpan("20mA")}.
          What is the capcitor's voltage and energy after charging?
        </p>
      </>,
      answer: <>
        {mathDiv("U = #frac{Q}{C} = #frac{I*t}{C} = #frac{0.02A * 0.3s}{150#mu F} = 40V")}
        {mathDiv("E = #frac{1}{2} * C * U^2 = #frac{1}{2} * 150#mu F * (40V)^2 = 0.12J")}
      </>
    },
    {
      problem: <>
        <p>
          A {mathSpan("500#mu F")} gets charged for {mathSpan("0.2s")} with a constant current of {mathSpan("10mA")}.
          The capacitor's voltage is then equal to {mathSpan("4V")}.
        </p>
        <p>
          Alice argues that the energy stored in the capacitor can be calculated as
        </p>
        {mathDiv("E = #frac{1}{2} * C * U^2 = #frac{1}{2} * 500#mu F * (4V)^2 = 4mJ")}.
        <p>
          Bob observes that the capacitor did not dissipate any measurable amount of heat, and concludes that no energy
          has been lost. He argues that the energy stored should therefore be equal to the energy flowing into the
          capacitor, which can be calculated as power times time, with power equal to voltage times current:
        </p>
        {mathDiv("E = UIt = 4V * 10mA * 0.2s = 8mJ")}.
        <p>
          Who is right, and why?
        </p>
      </>,
      answer: <>
        <p>
          Alice is right. Bob made the mistake that the voltage is not a constant {mathSpan("4V")}, but starts at zero
          and builds up as the capacitor is being charged. With a constant current, the charge rises linearly.
          By {mathSpan("U=#frac{Q}{C}")}, the voltage also rises linearly, so the avery voltage is half of the final
          voltage, or {mathSpan("2V")}. With that value Bob gets the same result as Alice:
        </p>
        {mathDiv("E = U_{avg}It = 2V * 10mA * 0.2s = 4mJ")}
      </>
    },
  ],
};
