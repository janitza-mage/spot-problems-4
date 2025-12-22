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
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
        <OrderAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        <p>
          Prove that every ordered field has an infinite number of elements.
        </p>
      </>,
      answer: <>
        <p>
          Closure allows us to produce elements as
        </p>
        {mathDiv("a_i=0")}
        {mathDiv("a_{i+1} = a_i + 1")}
        <p>
          That is,
        </p>
        {mathDiv("a_0 = 0")}
        {mathDiv("a_1 = 1")}
        {mathDiv("a_2 = 1 + 1")}
        {mathDiv("a_3 = 1 + 1 + 1")}
        {mathDiv("...")}
        <p>
          but we have to prove that these actually produce an infinite number of new elements and not just
          repeat a finite number of elements over and over again.
        </p>
        <p>
          From the consequences of the order axioms,
        </p>
        {mathDiv("1 > 0")}
        <p>
          Add {mathSpan("a_n")} on both sides:
        </p>
        {mathDiv("a_{n+1} = a_n + 1 > a_n")}
        <p>
          Transitivity then allows us to say that each {mathSpan("a_n")} is greater than <i>all</i> preceding ones,
          and therefore <i>different</i> from all preceding ones. So each {mathSpan("a_n")} must be a new element, and
          therefore the field has an infinite number of elements.
        </p>
      </>,
    },
  ],
};
