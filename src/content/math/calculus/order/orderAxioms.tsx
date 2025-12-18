import type {ExerciseNode} from "../../../../framework/content.tsx";
import {CheatSheets} from "../../../../framework/technical-components/CheatSheet/CheatSheets.tsx";
import {FieldAxiomsCheatSheet} from "../field/FieldAxiomsCheatSheet.tsx";
import {OrderAxiomsCheatSheet} from "./OrderAxiomsCheatSheet.tsx";
import {mathSpan} from "../../../../framework/technical-components/Math/Math.tsx";
import type {ReactNode} from "react";

const letOrderedField = <>Let {mathSpan("F")} be a field for which the order axioms are true.</>;
function letOrderedFieldAnd(variables: string): ReactNode {
  return <>{letOrderedField} Let {mathSpan(variables + " #in F")}.</>
}

const axiomConsequences = <>
  The following consequences of the order axioms can be assumed to be true, and are left for other exercises:
  <ul>
    <li>Exactly one is true: {mathSpan("x<y, x=y, y<x")}.</li>
    <li>{mathSpan("x<y, y<z #implies x<z")}</li>
    <li>{mathSpan("x<y #implies a+x < a+y")}</li>
    <li>{mathSpan("x<y #iff -x>-y")}</li>
    <li>{mathSpan("x<y, a<b #implies x+a<y+b")}</li>
    <li>{mathSpan("x<y, a>0 #implies ax<ay")}</li>
    <li>{mathSpan("x<y, a<0 #implies ax>ay")}</li>
    <li>{mathSpan("0 #leq x < y, 0 #leq a < b #implies ax<by")}</li>
    <li>{mathSpan("x #neq 0 #implies x^2>0")}</li>
    <li>{mathSpan("1 > 0")}</li>
    <li>{mathSpan("x > 0 #implies x^{-1} > 0")}</li>
    <li>{mathSpan("0 < x < y #implies x^{-1} > y^{-1}")}</li>
  </ul>
</>;

export const orderAxioms: ExerciseNode = {
  id: "axioms",
  name: "Axioms",
  type: "exercise",
  contentItems: [
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
        <OrderAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        <p>
          aaa
        </p>
      </>,
      answer: <>
        <p>
          bbb
        </p>
      </>,
    },
  ],
};
