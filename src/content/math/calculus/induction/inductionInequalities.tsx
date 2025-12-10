import type {ExerciseNode} from "../../../../framework/content.tsx";
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
    standardFomulaInductionItem(
        observeThat("1 + #frac{1}{2} + #frac{1}{3} + #frac{1}{4} + ... + #frac{1}{2^n-1} = #sum_{i=1}^{2^n-1}#frac{1}{i}"),
        "#sum_{i=1}^{2^n-1}#frac{1}{i} > #frac{n}{2}",
        "#sum_{i=1}^{2^n-1}#frac{1}{i} = #sum_{i=1}^{2^1-1}#frac{1}{i} = #sum_{i=1}^{1}#frac{1}{i} = #frac{1}{1} = 1 > #frac{1}{2} = #frac{n}{2}",
        "#sum_{i=1}^{2^{n+1}-1}#frac{1}{i} > #frac{n+1}{2}",
        [
          "#sum_{i=1}^{2^{n+1}-1}#frac{1}{i}",
          "= (#sum_{i=1}^{2^n-1}#frac{1}{i}) + (#sum_{i=2^n}^{2^{n+1}-1}#frac{1}{i})",
          <div>using the induction hypothesis:</div>,
          "> #frac{n}{2} + (#sum_{i=2^n}^{2^{n+1}-1}#frac{1}{i})",
          "> #frac{n}{2} + (#sum_{i=2^n}^{2^{n+1}-1}#frac{1}{2^{n+1}})",
          "= #frac{n}{2} + #frac{2^n}{2^{n+1}}",
          "= #frac{n}{2} + #frac{1}{2}",
          "= #frac{n+1}{2}",
        ],
    ),
    standardFomulaInductionItem(
        observeThat("1 + #frac{1}{2} + #frac{1}{3} + #frac{1}{4} + ... + #frac{1}{2^n-1} = #sum_{i=1}^{2^n-1}#frac{1}{i}"),
        "#sum_{i=1}^{2^n-1}#frac{1}{i} #leq n",
        "#sum_{i=1}^{2^n-1}#frac{1}{i} = #sum_{i=1}^{2^1-1}#frac{1}{i} = #sum_{i=1}^{1}#frac{1}{i} = #frac{1}{1} = 1 #leq n",
        "#sum_{i=1}^{2^{n+1}-1}#frac{1}{i} #leq n+1",
        [
          "#sum_{i=1}^{2^{n+1}-1}#frac{1}{i}",
          "= (#sum_{i=1}^{2^n-1}#frac{1}{i}) + (#sum_{i=2^n}^{2^{n+1}-1}#frac{1}{i})",
          <div>using the induction hypothesis:</div>,
          "#leq n + (#sum_{i=2^n}^{2^{n+1}-1}#frac{1}{i})",
          "#leq n + (#sum_{i=2^n}^{2^{n+1}-1}#frac{1}{2^n})",
          "= n + #frac{2^n}{2^n}",
          "= n + 1",
        ],
    ),



// TODO

    standardFomulaInductionItem(
        observeThat("1 + #frac{1}{2} + #frac{1}{3} + #frac{1}{4} + ... + #frac{1}{2^n-1} = #sum_{i=1}^{2^n-1}#frac{1}{i}"),
        "#sum_{i=1}^{2^n-1}#frac{1}{i} #leq n",
        "#sum_{i=1}^{2^n-1}#frac{1}{i} = #sum_{i=1}^{2^1-1}#frac{1}{i} = #sum_{i=1}^{1}#frac{1}{i} = #frac{1}{1} = 1 #leq n",
        "#sum_{i=1}^{2^{n+1}-1}#frac{1}{i} #leq n+1",
        [
          "#sum_{i=1}^{2^{n+1}-1}#frac{1}{i}",
          "= (#sum_{i=1}^{2^n-1}#frac{1}{i}) + (#sum_{i=2^n}^{2^{n+1}-1}#frac{1}{i})",
          <div>using the induction hypothesis:</div>,
          "#leq n + (#sum_{i=2^n}^{2^{n+1}-1}#frac{1}{i})",
          "#leq n + (#sum_{i=2^n}^{2^{n+1}-1}#frac{1}{2^n})",
          "= n + #frac{2^n}{2^n}",
          "= n + 1",
        ],
    ),
  ],
};
