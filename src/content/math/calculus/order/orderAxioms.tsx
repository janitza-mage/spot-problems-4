import type {ExerciseNode} from "../../../../framework/content.tsx";
import {CheatSheets} from "../../../../framework/technical-components/CheatSheet/CheatSheets.tsx";
import {FieldAxiomsCheatSheet} from "../field/FieldAxiomsCheatSheet.tsx";
import {OrderAxiomsCheatSheet} from "./OrderAxiomsCheatSheet.tsx";
import {mathDiv, mathSpan} from "../../../../framework/technical-components/Math/Math.tsx";
import {ComplexNumbersCheatSheet} from "../ComplexNumbersCheatSheet.tsx";

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
        <ComplexNumbersCheatSheet />
        <p>
          Using the above definition of the complex numbers, one might try to define an order on complex numbers
          by comparing their real part. That is,
        </p>
        {mathDiv("(a_1, a_2) < (b_1, b_2) #iff a_1 < b_1")}
        <p>
          Prove that this definition does <i>not</i> satisfy the order axioms.
        </p>
      </>,
      answer: <>
        <p>
          For {mathSpan("c = (0, 1)")}, neither is {mathSpan("c>0")} nor {mathSpan("-c>0")}, so by the
          axioms, {mathSpan("c=0")} should be true but isn't.
        </p>
      </>,
    },
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
        <OrderAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        <ComplexNumbersCheatSheet />
        <p>
          Using the above definition of the complex numbers, one might try to define an order on complex numbers
          by comparing their absolute value. That is,
        </p>
        {mathDiv("(a_1, a_2) < (b_1, b_2) #iff |a_1| < |b_1|")}
        <p>
          Prove that this definition does <i>not</i> satisfy the order axioms.
        </p>
      </>,
      answer: <>
        <p>
          For {mathSpan("c = (0, 1)")}, {mathSpan("|c|=1>0")}, so {mathSpan("c>0")} by our definition of the order.
          Then {mathSpan("-c<0")} should be true, but {mathSpan("|-c|=1")}.
        </p>
      </>,
    },
  ],
};
