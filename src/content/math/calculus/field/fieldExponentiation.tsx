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
        {mathDiv("a^{-n} = (a^n)^{-1}")}
        <p>
          Note that by definition,
        </p>
        {mathDiv("a^{-n} = (a^{-1})^n")}
        <p>
          You can use the fact that
        </p>
        {mathDiv("x^{-1}y^{-1}=(xy)^{-1}")}
      </>,
      answer: <>
        <p>
          Base case ({mathSpan("n=0")}). From the axioms,
        </p>
        {mathDiv("a^{-n} = a^{-0} = (a^{-1})^0 = 1 = 1^{-1} = (a^0)^{-1} = (a^n)^{-1}")}
        <p>
          Indcution step: Assume that
        </p>
        {mathDiv("a^{-n} = (a^n)^{-1}")}
        <p>
          Then, show that 
        </p>
        {mathDiv("a^{-(n+1)} = (a^{n+1})^{-1}")}
        <p>
          Proof:
        </p>
        {mathDiv("a^{-(n+1)}")}
        {mathDiv("(a^{-1})^{n+1}")}
        {mathDiv("(a^{-1})^n(a^{-1})")}
        {mathDiv("a^{-n}a^{-1}")}
        <p>Using the induction hypothesis:</p>
        {mathDiv("(a^n)^{-1}a^{-1}")}
        {mathDiv("(a^nx)^{-1}")}
        {mathDiv("(a^{n+1})^{-1}")}
      </>,
    },
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
        <ExponentiationCheatSheet />
      </CheatSheets>,
      problem: <>
        <p>
          {letField} Let {mathSpan("a #in F")}, {isNat0("p, q")}. Use induction to prove that
        </p>
        {mathDiv("a^pa^q = a^{p+q}")}
      </>,
      answer: <>
        TODO
      </>,
    },
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
        <ExponentiationCheatSheet />
      </CheatSheets>,
      problem: <>
        <p>
          {letField} Let {mathSpan("a #in F")}, {isNat0("p, q")}. Use induction to prove that
        </p>
        {mathDiv("(a^p)^q = a^{pq}")}
      </>,
      answer: <>
        TODO
      </>,
    },
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
        <ExponentiationCheatSheet />
      </CheatSheets>,
      problem: <>
        <p>
          {letField} Let {mathSpan("a #in F")}, {isNat0("p")}. Use induction to prove that
        </p>
        {mathDiv("a^pb^p = (ap)^p")}
      </>,
      answer: <>
        TODO
      </>,
    },
  ],
};
