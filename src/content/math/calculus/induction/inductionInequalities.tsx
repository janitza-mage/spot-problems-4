import type {ExerciseNode} from "../../../../framework/content.tsx";
import {observeThat, standardFomulaInductionItem} from "./formula.tsx";
import {mathDiv, mathSpan} from "../../../../framework/technical-components/Math/Math.tsx";

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
    standardFomulaInductionItem(
        observeThat("#frac{1}{#sqrt{1}} + #frac{1}{#sqrt{2}} + #frac{1}{#sqrt{3}} + ... + #frac{1}{#sqrt{n}} = #sum_{i=1}^{n}#frac{1}{#sqrt{i}}"),
        "#sum_{i=1}^{n}#frac{1}{#sqrt{i}} > #sqrt{n}",
        <>
          {mathDiv("#sum_{i=1}^{n}#frac{1}{#sqrt{i}} = #sum_{1}^{2}#frac{1}{#sqrt{i}} = #frac{1}{#sqrt{1}} + #frac{1}{#sqrt{2}} = 1 + #frac{1}{#sqrt{2}}")}
          <p>Since {mathSpan("#sqrt{2}>1")},</p>
          {mathDiv("1 + #frac{1}{#sqrt{2}} = #frac{#sqrt{2}}{#sqrt{2}} + #frac{1}{#sqrt{2}} = #frac{#sqrt{2} + 1}{#sqrt{2}} > #frac{1+1}{#sqrt{2}} = #frac{2}{#sqrt{2}} = #sqrt{2}")}
        </>,
        "#sum_{i=1}^{n+1}#frac{1}{#sqrt{i}} > #sqrt{n+1}",
        [
          "#sum_{i=1}^{n+1}#frac{1}{#sqrt{i}}",
          "= #frac{1}{#sqrt{n+1}} + #sum_{i=1}^{n}#frac{1}{#sqrt{i}}",
          <div>using the induction hypothesis:</div>,
          "> #frac{1}{#sqrt{n+1}} + #sqrt{n}",
          "= #frac{1}{#sqrt{n+1}} + #frac{#sqrt{n}#sqrt{n+1}}{#sqrt{n+1}}",
          "> #frac{1}{#sqrt{n+1}} + #frac{#sqrt{n}#sqrt{n}}{#sqrt{n+1}}",
          "= #frac{n+1}{#sqrt{n+1}}",
          "= #sqrt{n+1}",
        ],
        {baseCase: 2}
    ),
    standardFomulaInductionItem(
        null,
        "n! > 2^n",
        "n! = 4! = 4#cdot 3#cdot 2#cdot 1 = 24 > 16 = 2^4 = 2^n",
        "(n+1)! > 2^{n+1}",
        [
          "(n+1)! = (n+1)#cdot n! > (n+1)#cdot 2^n > 2#cdot 2^n = 2^{n+1}",
        ],
        {baseCase: 4}
    ),
    standardFomulaInductionItem(
        null,
        "n#cdot #sqrt{n} > n + #sqrt{n}",
        <>
          {mathDiv("n#cdot #sqrt{n} = 3#cdot #sqrt{3} = 2#cdot #sqrt{3} + #sqrt{3}")}
          {mathDiv("> #sqrt{3}#cdot #sqrt{3} + #sqrt{3} = 3 + #sqrt{3} = n + #sqrt{n}")}
        </>,
        "(n+1)#cdot #sqrt{n+1} > (n+1) + #sqrt{n+1}",
        [
          "(n+1)#cdot #sqrt{n+1}",
          "= n#cdot #sqrt{n+1} + #sqrt{n+1}",
          "> n#cdot #sqrt{n} + #sqrt{n+1}",
          <div>using the induction hypothesis:</div>,
          "> (n + #sqrt{n}) + #sqrt{n+1}",
          "> (n + 1) + #sqrt{n+1}",
        ],
        {baseCase: 3}
    ),
    standardFomulaInductionItem(
        observeThat("1^1 + 2^2 + 3^3 + 4^4 + ... + n^n = #prod_{i=1}^{n}i^i"),
        "#prod_{i=1}^{n}i^i #leq n^{#frac{n(n+1)}{2}}",
        mathDiv("#prod_{i=1}^{n}i^i = #prod_{i=1}^{1}i^i = 1^1 = 1^{#frac{1#cdot 2}{2}} = n^{#frac{n(n+1)}{2}}"),
        "#prod_{i=1}^{n+1}i^i #leq (n+1)^{#frac{(n+1)(n+2)}{2}}",
        [
          "#prod_{i=1}^{n+1}i^i",
          "= (n+1)^{n+1}#cdot #prod_{i=1}^{n}i^i",
          <div>using the induction hypothesis:</div>,
          "#leq (n+1)^{n+1}#cdot n^{#frac{n(n+1)}{2}}",
          "#leq (n+1)^{n+1}#cdot (n+1)^{#frac{n(n+1)}{2}}",
          "= (n+1)^{n+1 + #frac{n(n+1)}{2}}",
          "= (n+1)^{#frac{2(n+1)}{2} + #frac{n(n+1)}{2}}",
          "= (n+1)^{#frac{2(n+1) + n(n+1)}{2}}",
          "= (n+1)^{#frac{(n+1)(n+2)}{2}}",
        ],
    ),
  ],
};
