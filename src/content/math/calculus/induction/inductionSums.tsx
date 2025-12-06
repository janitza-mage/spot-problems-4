import type {ExerciseNode} from "../../../../framework/content.tsx";
import {mathDiv, mathSpan} from "../../../../framework/technical-components/Math/Math.tsx";
import {isNatPlus} from "../../util/math-atoms.tsx";

export const inductionSums: ExerciseNode = {
  id: "sums",
  name: "Sums",
  type: "exercise",
  contentItems: [
    {
      problem: <>
        Use induction to show that the sum of the first {mathSpan("n")} positive integers is equal to
        {mathSpan("#frac{n(n+1)}{2}")} for {isNatPlus("n")}.
      </>,
      answer: <>
        <p>
          The sum of the first {mathSpan("n")} positive integers is written as {mathSpan("#sum_{i=1}^ni")}. The problem
          then reads:
        </p>
        {mathDiv("#sum_{i=1}^ni = #frac{n(n+1)}{2}")}
        <p>
          Base case ({mathSpan("n = 1")}):
        </p>
        {mathDiv("#sum_{i=1}^ni = #sum_{i=1}^1i = 1 = #frac{1(1+1)}{2} = #frac{n(n+1)}{2}")}
        <p>
          Induction step: Assume that
        </p>
        {mathDiv("#sum_{i=1}^ni = #frac{n(n+1)}{2}")}
        <p>
          (induction hypothesis). Then show that
        </p>
        {mathDiv("#sum_{i=1}^{n+1}i = #frac{(n+1)(n+2)}{2}")}
        <p>
          Proof:
        </p>
        {mathDiv("#sum_{i=1}^{n+1}i")}
        {mathDiv("= (n+1) + #sum_{i=1}^ni")}
        {mathDiv("= (n+1) + #frac{n(n+1)}2")}
        {mathDiv("= #frac{2(n+1)}2 + #frac{n(n+1)}2")}
        {mathDiv("= #frac{2(n+1) + n(n+1)}2")}
        {mathDiv("= #frac{(n+1)(n+2)}2")}
      </>,
    },
    {
      problem: <>
        Use induction to show that the sum of the first {mathSpan("n")} <b>odd</b> positive integers is equal
        to {mathSpan("n^2")} for {isNatPlus("n")}.
      </>,
      answer: <>
        <p>
          The sum of the first {mathSpan("n")} odd positive integers is written
          as {mathSpan("#sum_{i=1}^n(2i-1)")}. The problem then reads:
        </p>
        {mathDiv("#sum_{i=1}^{n}(2i-1) = n^2")}
        <p>
          Base case ({mathSpan("n = 1")}):
        </p>
        {mathDiv("#sum_{i=1}^n(2i-1) = #sum_{i=1}^1(2i-1) = 2#cdot 1 - 1 = 1 = 1^2 = n^2")}
        <p>
          Induction step: Assume that
        </p>
        {mathDiv("#sum_{i=1}^{n}(2i-1) = n^2")}
        <p>
          (induction hypothesis). Then show that
        </p>
        {mathDiv("#sum_{i=1}^{n+1}(2i-1) = (n+1)^2")}
        <p>
          Proof:
        </p>
        {mathDiv("#sum_{i=1}^{n+1}(2i-1)")}
        {mathDiv("= (2(n+1)-1) + #sum_{i=1}^n(2i-1)")}
        {mathDiv("= (2n+1) + #sum_{i=1}^n(2i-1)")}
        {mathDiv("= 2n + 1 + n^2")}
        {mathDiv("= (n+1)^2")}
      </>,
    },
  ],
};
