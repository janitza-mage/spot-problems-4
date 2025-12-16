import type {ExerciseNode} from "../../../../framework/content.tsx";
import {CheatSheets} from "../../../../framework/technical-components/CheatSheet/CheatSheets.tsx";
import {FieldAxiomsCheatSheet} from "../field/FieldAxiomsCheatSheet.tsx";
import {OrderAxiomsCheatSheet} from "./OrderAxiomsCheatSheet.tsx";
import {mathDiv, mathSpan} from "../../../../framework/technical-components/Math/Math.tsx";
import type {ReactNode} from "react";

const letOrderedField = <>Let {mathSpan("F")} be a field for which the order axioms are true.</>;
function letOrderedFieldAnd(variables: string): ReactNode {
  return <>{letOrderedField} Let {mathSpan(variables + " #in F")}.</>
}

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
          {letOrderedFieldAnd("x, y")} Prove that exactly one of the following is true:
        </p>
        {mathDiv("x<y, x=y, y<x")}
      </>,
      answer: <>
        <p>
          First, "translate" the problem from our convenient notation:
        </p>
        <ul>
          <li>{mathSpan("x<y")} means {mathSpan("y>x")} means {mathSpan("y-x>0")}</li>
          <li>{mathSpan("y<x")} means {mathSpan("x>y")} means {mathSpan("x-y>0")}</li>
        </ul>
        <p>
          Then the claim is that exactly one of the following is true:
        </p>
        {mathDiv("y-x>0, x=y, x-y>0")}
        <p>
          With {mathSpan("y-x=-(x-y)")} and {mathSpan("x=y #iff x-y=0")} this follows by applying the axioms
          to {mathSpan("(x-y)")}.
        </p>
      </>,
    },
  ],
};
