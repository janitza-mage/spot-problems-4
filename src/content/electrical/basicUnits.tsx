import type {ExerciseNode} from "../../framework/content.tsx";
import {mathDiv, mathSpan} from "../../framework/technical-components/Math/Math.tsx";

export const basicUnits: ExerciseNode = {
  id: "basicUnits",
  name: "Basic Units",
  type: "exercise",
  contentItems: [
    {
      problem: <>
        <p>
          What is the symbol, unit, and unit symbol for the electric current?
        </p>
      </>,
      answer: <>
        <div>Symbol: I</div>
        <div>Unit: ampere</div>
        <div>Unit Symbol: A</div>
      </>
    },
    {
      problem: <>
        <p>
          What is the symbol, unit, and unit symbol for the voltage?
        </p>
      </>,
      answer: <>
        <div>Symbol: U</div>
        <div>Unit: volt</div>
        <div>Unit Symbol: V</div>
      </>
    },
    {
      problem: <>
        <p>
          What is the symbol, unit, and unit symbol for the (electric) power?
        </p>
      </>,
      answer: <>
        <div>Symbol: P</div>
        <div>Unit: watt</div>
        <div>Unit Symbol: W</div>
      </>
    },
    {
      problem: <>
        <p>
          What is the symbol, unit, and unit symbol for the (electric) energy?
        </p>
      </>,
      answer: <>
        <div>Symbol: E</div>
        <div>Unit: joule</div>
        <div>Unit Symbol: J</div>
      </>
    },
    {
      problem: <>
        <p>
          A power of 100 watts is applied to a circuit for 5 seconds. How much energy is used?
        </p>
      </>,
      answer: <>
        {mathDiv("E = P #cdot t = 100W #cdot 5s = 500J")}
      </>
    },
    {
      problem: <>
        <p>
          A voltage of {mathSpan("10V")} is applied to a circuit, resulting in a current of {mathSpan("5A")}. What
          is the power flowing into the circuit?
        </p>
      </>,
      answer: <>
        {mathDiv("P = U #cdot I = 10V #cdot 5A = 50W")}
      </>
    },
    {
      problem: <>
        <p>
          A battery pack is specified to require a charging voltage of {mathSpan("5V")}, but can be configured to
          use different charging currents. This is a common scenario with USB chargers. When empty, charging the
          battery at {mathSpan("500mA")} takes 4 hours. How long will it take to charge the battery
          at {mathSpan("1A")}?
        </p>
      </>,
      answer: <>
        Since the voltage is the same, the charging power scales linearly with the charging current. Therefore,
        charging at {mathSpan("1A")} will take half the time, or 2 hours.
      </>
    },
    {
      problem: <>
        <p>
          A large battery pack can be charged via USB at {mathSpan("5V")} and {mathSpan("1A")}. This takes 4 hours
          when the battery is empty.
        </p>
        <p>
          The battery pack also supports being charged via USB power delivery
          at {mathSpan("20V")} and {mathSpan("3A")}. How long does charging take with these parameters?
        </p>
      </>,
      answer: <>
        <p>
          The total energy stored in the pack is.
        </p>
        {mathDiv("E = 5V #cdot 1A #cdot 4h = 20Wh")}
        <p>
          At the higher charging parameters, the power is
        </p>
        {mathDiv("P = 20V #cdot 3A = 60W")}
        <p>
          so the charging time is
        </p>
        {mathDiv("t = #frac{E}{P} = #frac{20Wh}{60W} = #frac{1}{3}h = 20min")}
      </>
    },
  ],
};
