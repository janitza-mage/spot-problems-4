import type {ExerciseNode} from "../../framework/content.tsx";
import {mathDiv} from "../../framework/technical-components/Math/Math.tsx";

export const kirchhoffsLawsExercise: ExerciseNode = {
  id: "kirchhoffsLawsExercise",
  name: "Kirchhoff's Laws",
  type: "exercise",
  contentItems: [
    {
      problem: <>
        <p>
          Quote Kirchhoff's Laws.
        </p>
      </>,
      answer: <>
        <p>
          Current Law: the sum of all currents flowing into a node of a circuit is equal to the sum of all
          currents flowing out of that node.
        </p>
        <p>
          Voltage Law: the directed sum of all voltages around a closed loop of a circuit is zero. Such a closed
          loop is a sequence of nodes that ends at the starting node; it does not matter if and how these nodes
          are connected by wires or components.
        </p>
      </>
    },
    {
      problem: <>
        <p>
          Assume two 5V batteries with equal voltage and negligible internal resistance. The positive terminals
          of the batteries are connected with a resistor. The negative terminals are connected with another
          resistor. A measurement concludes that no current is flowing through the resistors.
        </p>
        <p>
          By Kirchhoff's Voltage Law, we add the voltages along the closed loop from the positive terminal of the
          first battery through both batteries and both resistors back to the start:
        </p>
        {mathDiv("#sum_iU_i = 0V + 5V + 0V + 5V = 10V")}
        <p>
          contradicting the law that this sum should be zero. What is going on here?
        </p>
      </>,
      answer: <>
        <p>
          Kirchhoff's Voltage Law is about the <i>directed</i> sum of voltages. On the closed loop, we go forward
          through one battery but backwards through the other one, so the sum is:
        </p>
        {mathDiv("#sum_iU_i = 0V + 5V + 0V + (-5V) = 0V")}
      </>
    },
  ],
};
