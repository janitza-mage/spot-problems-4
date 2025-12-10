import type {ExerciseNode} from "../../../../framework/content.tsx";
import {mathSpan} from "../../../../framework/technical-components/Math/Math.tsx";
import {isNat0} from "../../util/math-atoms.tsx";

export const inductionVarious: ExerciseNode = {
  id: "various",
  name: "Various Exercises",
  type: "exercise",
  contentItems: [
    {
      problem: <>
        Let {isNat0("n")}. Use induction to prove that every finite set of size {mathSpan("n")} has {mathSpan("2^n")} subsets.
      </>,
      answer: <>
        <p>
          Base case ({mathSpan("n = 0")}): {mathSpan("A")} is the empty set which has only one subset, which is {mathSpan("A")} itself.
          The number of subsets of {mathSpan("A")} is therefore equal to {mathSpan("2^n = 2^0 = 1")}.
        </p>
        <p>
          Induction step: Assume that every set of size {mathSpan("n")} has {mathSpan("2^n")} subsets. Let {mathSpan("A")} be a set
          of size {mathSpan("n + 1")}. Pick an element {mathSpan("a")} from {mathSpan("A")}, and let {mathSpan("B = A #setminus {a}")}.
          Then {mathSpan("B")} is a set of size {mathSpan("n")}. By the induction
          hypothesis, {mathSpan("B")} has {mathSpan("2^n")} subsets. For each of those subsets of {mathSpan("B")},
          we can construct two distinct subsets of {mathSpan("A")} by including or not including {mathSpan("a")} --
          all these sets are distinct because {mathSpan("B")} no longer contains {mathSpan("a")}. This gives
          us {mathSpan("2^n #cdot 2 = 2^{n + 1}")} subsets of {mathSpan("A")}.
        </p>
      </>,
    },
  ],
};
