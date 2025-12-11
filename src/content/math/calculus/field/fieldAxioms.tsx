import type {ExerciseNode} from "../../../../framework/content.tsx";
import {mathDiv, mathSpan} from "../../../../framework/technical-components/Math/Math.tsx";
import {CheatSheets} from "../../../../framework/technical-components/CheatSheet/CheatSheets.tsx";
import {FieldAxiomsCheatSheet} from "./FieldAxiomsCheatSheet.tsx";

export const fieldAxioms: ExerciseNode = {
  id: "axioms",
  name: "Axioms",
  type: "exercise",
  contentItems: [
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        Using the field axioms, prove that {mathSpan("0")} is unique.
      </>,
      answer: <>
        <p>
          First, note that the statement "{mathSpan("0")} is unique" can be worded as: "Given two zero
          elements {mathSpan("0")} and {mathSpan("0'")}, {mathSpan("0 = 0'")}."
        </p>
        <p>
          Proof:
          <ul>
            <li>{mathSpan("0")} is neutral with respect to addition, so {mathSpan("0' + 0 = 0'")}</li>
            <li>{mathSpan("0'")} is neutral with respect to addition, so {mathSpan("0 + 0' = 0")}</li>
            <li>Commutativity: {mathSpan("0' + 0 = 0 + 0'")}</li>
            <li>Therefore, {mathSpan("0 = 0'")}</li>
          </ul>
        </p>
      </>,
    },
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        Using the field axioms, prove that the additive inverse is unique. That is,
        given {mathSpan("a #in S")}, {mathSpan("-a")} is unique.
      </>,
      answer: <>
        <p>
          Let {mathSpan("a #in S")} and two additive inverses, {mathSpan("b")} and {mathSpan("c")}. That
          is, {mathDiv("a+b=0")} and {mathDiv("a+c=0")}
        </p>
        <p>
          Now take the equation {mathDiv("a+c=0")} and add {mathSpan("b")} to both sides (from the left). We
          get {mathDiv("b+(a+c) = b+0")} By associativity, {mathDiv("(b+a)+c = b+0")}
          By commutativity, {mathDiv("b+a=0")} so {mathDiv("0+c = b+0")} Due to
          commutativity and the fact that 0 is neutral with respect to addition, {mathDiv("c = b")}
        </p>
      </>,
    },
  ],
};
