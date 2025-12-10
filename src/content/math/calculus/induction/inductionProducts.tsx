import type {ExerciseNode} from "../../../../framework/content.tsx";
import {mathDiv} from "../../../../framework/technical-components/Math/Math.tsx";
import {observeThat, standardFomulaInductionItem} from "./formula.tsx";

export const inductionProducts: ExerciseNode = {
  id: "products",
  name: "Products",
  type: "exercise",
  contentItems: [
    standardFomulaInductionItem(
        observeThat("4^1#cdot 4^2#cdot 4^3#cdot ...#cdot 4^n = #prod_{i=1}^{n}4^i"),
        "#prod_{i=1}^{n}4^i = 2^{n(n+1)}",
        "#prod_{i=1}^{n}4^i = #prod_{i=1}^{1}4^i = 4^1 = 2^2 = 2^{1#cdot (1+1)} = 2^{n(n+1)}",
        "#prod_{i=1}^{n+1}4^i = 2^{(n+1)(n+2)}",
        [
          "#prod_{i=1}^{n+1}4^i",
          "= 4^{n+1}#cdot #prod_{i=1}^{n}4^i",
          <div>using the induction hypothesis:</div>,
          "= 4^{n+1}#cdot 2^{n(n+1)}",
          "= 2^{2n+2}#cdot 2^{n^2 + n}",
          "= 2^{2n + 2 + n^2 + n}",
          "= 2^{n^2 + 3n + 2}",
          "= 2^{(n + 1)(n + 2)}",
        ],
    ),
    standardFomulaInductionItem(
        observeThat("(1 - #frac{1}{2})(1 - #frac{1}{3})(1 - #frac{1}{4})...(1 - #frac{1}{n}) = #prod_{i=2}^{n}(1 - #frac{1}{i})"),
        "#prod_{i=2}^{n}(1 - #frac{1}{i}) = #frac{1}{n}",
        "#prod_{i=2}^{n}(1 - #frac{1}{i}) = #prod_{i=2}^{2}(1 - #frac{1}{i}) = (1 - #frac{1}{2}) = #frac{1}{2} = #frac{1}{n}",
        "#prod_{i=2}^{n + 1}(1 - #frac{1}{i}) = #frac{1}{n + 1}",
        [
          "#prod_{i=2}^{n + 1}(1 - #frac{1}{i})",
          "= (1 - #frac{1}{n+1})#prod_{i=2}^{n}(1 - #frac{1}{i})",
          <div>using the induction hypothesis:</div>,
          "= (#frac{n+1}{n+1} - #frac{1}{n+1})#frac{1}{n}",
          "= #frac{n}{n+1}#cdot #frac{1}{n}",
          "= #frac{1}{n+1}",
        ],
        {baseCase: 2}
    ),
    standardFomulaInductionItem(
        observeThat("(1 - #frac{1}{2})(1 - #frac{2}{3})(1 - #frac{3}{4})...(1 - #frac{n-1}{n}) = #prod_{i=2}^{n}(1 - #frac{i-1}{i})"),
        "#prod_{i=2}^{n}(1 - #frac{i-1}{i}) = #frac{1}{n!}",
        "#prod_{i=2}^{n}(1 - #frac{i-1}{i}) = #prod_{i=2}^{2}(1 - #frac{i-1}{i}) = (1 - #frac{2-1}{2}) = #frac{1}{2} = #frac{1}{n!}",
        "#prod_{i=2}^{n+1}(1 - #frac{i-1}{i}) = #frac{1}{(n+1)!}",
        [
          "#prod_{i=2}^{n+1}(1 - #frac{i-1}{i})",
          "= (1 - #frac{(n+1)-1}{n+1})#prod_{i=2}^{n}(1 - #frac{i-1}{i})",
          <div>using the induction hypothesis:</div>,
          "= (1 - #frac{n}{n+1})#frac{1}{n!}",
          "= (#frac{n+1}{n+1} - #frac{n}{n+1})#frac{1}{n!}",
          "= #frac{1}{n+1}#cdot #frac{1}{n!}",
          "= #frac{1}{(n+1)#cdot n!}",
          "= #frac{1}{(n+1)!}",
        ],
        {baseCase: 2}
    ),
    standardFomulaInductionItem(
        observeThat("(1 - #frac{1}{2^2})(1 - #frac{1}{3^2})(1 - #frac{1}{4^2})...(1 - #frac{1}{n^2}) = #prod_{i=2}^{n}(1 - #frac{1}{i^2})"),
        "#prod_{i=2}^{n}(1 - #frac{1}{i^2}) = #frac{n+1}{2n}",
        <>
          {mathDiv("#prod_{i=2}^{n}(1 - #frac{1}{i^2}) = #prod_{i=2}^{2}(1 - #frac{1}{i^2}) = 1 - #frac{1}{2^2} = 1 - #frac{1}{4} = #frac{3}{4}")}
          <p>and</p>
          {mathDiv("#frac{n+1}{2n} = #frac{2+1}{2#cdot 2} = #frac{3}{4}")}
        </>,
        "#prod_{i=2}^{n+1}(1 - #frac{1}{i^2}) = #frac{(n+1)+1}{2(n+1)}",
        [
          "#prod_{i=2}^{n+1}(1 - #frac{1}{i^2})",
          "= (1 - #frac{1}{(n+1)^2})#prod_{i=2}^{n}(1 - #frac{1}{i^2})",
          <div>using the induction hypothesis:</div>,
          "= (#frac{(n+1)^2}{(n+1)^2} - #frac{1}{(n+1)^2})#frac{n+1}{2n}",
          "= #frac{(n+1)^2 - 1}{(n+1)^2}#cdot #frac{n+1}{2n}",
          "= #frac{n^2 + 2n + 1 - 1}{n+1}#cdot #frac{1}{2n}",
          "= #frac{n(n + 2)}{2n(n+1)}",
          "= #frac{n + 2}{2(n+1)}",
          "= #frac{(n + 1) + 1}{2(n+1)}",
        ],
        {baseCase: 2}
    ),
    standardFomulaInductionItem(
        observeThat("(1 + #frac{1}{2^1})(1 + #frac{1}{2^2})(1 + #frac{1}{2^4})(1 + #frac{1}{2^8})...(1 + #frac{1}{2^{2^{n-1}}}) = #prod_{i=1}^{n}(1 + #frac{1}{2^{2^{i-1}}})"),
        "#prod_{i=1}^{n}(1 + #frac{1}{2^{2^{i-1}}}) = #frac{2^{2^n}-1}{2^{2^n-1}}",
        <>
          {mathDiv("#prod_{i=1}^{n}(1 + #frac{1}{2^{2^{i-1}}}) = #prod_{i=1}^{1}(1 + #frac{1}{2^{2^{i-1}}})")}
          {mathDiv("= 1 + #frac{1}{2^{2^{1-1}}} = 1 + #frac{1}{2^{2^0}} = 1 + #frac{1}{2^1} = 1 + #frac{1}{2} = #frac{3}{2}")}
          <p>and</p>
          {mathDiv("#frac{2^{2^n}-1}{2^{2^n-1}} = #frac{2^{2^1}-1}{2^{2^1-1}}")}
          {mathDiv("= #frac{2^2-1}{2^{2-1}} = #frac{4-1}{2^1} = #frac{3}{2}")}
        </>,
        "#prod_{i=1}^{n+1}(1 + #frac{1}{2^{2^{i-1}}}) = #frac{2^{2^{n+1}}-1}{2^{2^{n+1}-1}}",
        [
          "#prod_{i=1}^{n+1}(1 + #frac{1}{2^{2^{i-1}}})",
          "= (1 + #frac{1}{2^{2^{(n+1)-1}}})#cdot #prod_{i=1}^{n}(1 + #frac{1}{2^{2^{i-1}}})",
          <div>using the induction hypothesis:</div>,
          "= (1 + #frac{1}{2^{2^n}})#cdot #frac{2^{2^n}-1}{2^{2^n-1}}",
          "= (#frac{2^{2^n}}{2^{2^n}} + #frac{1}{2^{2^n}})#cdot #frac{2^{2^n}-1}{2^{2^n-1}}",
          "= #frac{2^{2^n} + 1}{2^{2^n}}#cdot #frac{2^{2^n}-1}{2^{2^n-1}}",
          "= #frac{(2^{2^n})^2 - 1^2}{2^{2^n+2^n-1}}",
          "= #frac{2^{2#cdot 2^n} - 1}{2^{2^{n+1}-1}}",
          "= #frac{2^{2^{n+1}}-1}{2^{2^{n+1}-1}}",
            
        ],
        {baseCase: 0}
    ),
  ],
};
