import type {ExerciseNode} from "../../../../framework/content.tsx";
import {mathDiv, mathSpan} from "../../../../framework/technical-components/Math/Math.tsx";
import {isNatPlus, isNatPlusWithoutDefinition} from "../../util/math-atoms.tsx";
import {observeThat, standardFomulaInductionItem} from "./formula.tsx";

export const inductionInequalities: ExerciseNode = {
  id: "inequalities",
  name: "Inequalities",
  type: "exercise",
  contentItems: [
    standardFomulaInductionItem(
        null,
        "n^2 - 5n + 3 > 0",
        "5^2 - 5#cdot 5 + 3 = 25 - 25 + 3 = 3 > 0",
        "(n+1)^2 - 5(n+1) + 3 > 0",
        [
          "(n+1)^2 - 5(n+1) + 3",
          "= n^2 + 2n + 1 - 5n - 5 + 3",
          "= n^2 - 3n - 1",
          "= n^2 - 5n + 3 + 2n - 4",
          <div>using the induction hypothesis:</div>,
          "> 0 + 2n - 4",
          "> 2#cdot 5 - 4",
          "= 10 - 4",
          "= 6",
          "> 0",
        ],
        {baseCase: 5}
    ),
    standardFomulaInductionItem(
        null,
        "2^n > n^2",
        "2^n = 2^5 = 32 > 25 = 5^2 = n^2",
        "2^{n+1} > (n+1)^2",
        [
          "2^{n+1}",
          "= 2#cdot 2^n",
          <div>using the induction hypothesis:</div>,
          "> 2#cdot n^2",
          "= n^2 + n^2",
          "> n^2 + 5n",
          "= n^2 + 2n + 3n",
          "> n^2 + 2n + 3#cdot 5",
          "= n^2 + 2n + 15",
          "> n^2 + 2n + 1",
          "= (n+1)^2",
        ],
        {baseCase: 5}
    ),
    standardFomulaInductionItem(
        null,
        "2^n > n^3",
        "2^n = 2^{10} = 1024 > 1000 = 10^3 = n^3",
        "2^{n+1} > (n+1)^3",
        [
          "2^{n+1}",
          "= 2#cdot 2^n",
          <div>using the induction hypothesis:</div>,
          "> 2#cdot n^3",
          "= n^3 + n^3",
          "> n^3 + 10n^2",
          "= n^3 + 3n^2 + 7n^2",
          "> n^3 + 3n^2 + 70n",
          "= n^3 + 3n^2 + 3n + 67n",
          "> n^3 + 3n^2 + 3n + 1",
          "= (n+1)^3",
        ],
        {baseCase: 10}
    ),
  ],
};
