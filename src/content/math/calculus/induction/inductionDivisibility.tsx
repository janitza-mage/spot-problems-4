import type {ContentItem, ExerciseNode} from "../../../../framework/content.tsx";
import {mathDiv, mathSpan} from "../../../../framework/technical-components/Math/Math.tsx";
import {isNatPlus} from "../../util/math-atoms.tsx";
import type {ReactNode} from "react";
import {mathDivOrCustom} from "../../util/math-util.tsx";


function standardDivisibilityContentItem(
    dividendFormula: string,
    nextDividendFormula: string,
    divisorFormula: string | number,
    baseCaseProof: string | ReactNode, // a string will be fed to mathDiv, a ReactNode will be used as-is
    inductionStepProofFormulas: string[],
    inductionStepConclusion: ReactNode,
): ContentItem {
  const dividendSpan = mathSpan(dividendFormula);
  const nextDividendSpan = mathSpan(nextDividendFormula);
  const divisorSpan = mathSpan(String(divisorFormula));
  return {
    problem: <>
      Use induction to show that {dividendSpan} is divisible by {divisorSpan} for {isNatPlus("n")}.
    </>,
    answer: <>
      <p>
        Base case ({mathSpan("n = 1")}):
      </p>
      {mathDivOrCustom(baseCaseProof)}
      <p>
        which is obviously divisible by {divisorSpan}.
      </p>
      <p>
        Induction step: Assume that {dividendSpan} is divisible by {divisorSpan} (induction hypothesis). Then show
        that {nextDividendSpan} is divisible by {divisorSpan} too.
      </p>
      <p>
        Proof:
      </p>
      {inductionStepProofFormulas.map(mathDiv)}
      {inductionStepConclusion}
  </>,
  };
}

export const inductionDivisibility: ExerciseNode = {
  id: "divisibility",
  name: "Divisibility",
  type: "exercise",
  contentItems: [
    standardDivisibilityContentItem(
      "n^3+2n",
      "(n+1)^3 + 2#cdot (n+1)",
      3,
      "n^3+2n = 1^3+2#cdot 1 = 1 + 2 = 3",
      [
        "(n+1)^3 + 2#cdot (n+1)",
        "= (n^3 + 3n^2 + 3n + 1) + (2n + 2)",
        "= (n^3 + 2n) + (3n^2 + 3n + 3)",
        "= (n^3 + 2n) + 3#cdot (n^2 + n + 1)",
      ],
      <div>The first part is divisible by 3 by the induction hypothesis. The second part has an obvious
        factor of 3. Therefore, the sum is divisible by 3 too.</div>
    ),
  ],
};
