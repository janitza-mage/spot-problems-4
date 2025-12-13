import type {ExerciseNode} from "../../../../framework/content.tsx";
import {mathDiv, mathSpan} from "../../../../framework/technical-components/Math/Math.tsx";
import {CheatSheets} from "../../../../framework/technical-components/CheatSheet/CheatSheets.tsx";
import {FieldAxiomsCheatSheet} from "./FieldAxiomsCheatSheet.tsx";
import {ExponentiationCheatSheet} from "./ExponentiationCheatSheet.tsx";
import {isNat0} from "../../util/math-atoms.tsx";

const letField = <>Let {mathSpan("F")} be a field.</>;

export const fieldExponentiation: ExerciseNode = {
  id: "exponentiation",
  name: "Exponentiation",
  type: "exercise",
  contentItems: [
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
        <ExponentiationCheatSheet />
      </CheatSheets>,
      problem: <>
        <p>
          {letField} Let {mathSpan("a #in F")}, {isNat0("n")}. Use induction to prove that
        </p>
        {mathDiv("x^{-n} = (x^n)^{-1}")}
        <p>
          Note that by definition,
        </p>
        {mathDiv("x^{-n} = (x^{-1})^n")}
      </>,
      answer: <>
        <p>
          Base case ({mathSpan("n=0")}). From the axioms,
        </p>
        {mathDiv("x^{-n} = x^{-0} = (x^{-1})^0 = 1 = 1^{-1} = (x^0)^{-1} = (x^n)^{-1}")}
        <p>
          Indcution step: Assume that
        </p>
        {mathDiv("x^{-n} = (x^n)^{-1}")}
        <p>
          Then, show that 
        </p>
        {mathDiv("x^{-(n+1)} = (x^{n+1})^{-1}")}
        <p>
          Proof:
        </p>
        {mathDiv("x^{-(n+1)}")}
        {mathDiv("= x^{-(n+1)}")}



        {mathDiv("= (x^{n+1})^{-1}")}
      </>,
    },


  ],
};
