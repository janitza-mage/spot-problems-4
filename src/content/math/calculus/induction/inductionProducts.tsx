import type {ContentItem, ExerciseNode} from "../../../../framework/content.tsx";
import {mathDiv, mathSpan} from "../../../../framework/technical-components/Math/Math.tsx";
import {isNatPlus, isNatPlusWithoutDefinition} from "../../util/math-atoms.tsx";
import type {ReactNode} from "react";
import {mathDivOrCustom} from "../../util/math-util.tsx";
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
  ],
};
