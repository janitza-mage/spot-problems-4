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

const axiomConsequences = <>
  The following consequences of the order axioms can be assumed to be true, and are left for other exercises:
  <ul>
    <li>Exactly one is true: {mathSpan("x<y, x=y, y<x")}.</li>
    <li>{mathSpan("x<y, y<z #implies x<z")}</li>
    <li>{mathSpan("x<y #implies a+x < a+y")}</li>
    <li>{mathSpan("x<y #iff -x>-y")}</li>
  </ul>
</>;

const axiomConsequences2 = <>
  The following consequences of the order axioms can be assumed to be true, and are left for other exercises:
  <ul>
    <li>Exactly one is true: {mathSpan("x<y, x=y, y<x")}.</li>
    <li>{mathSpan("x<y, y<z #implies x<z")}</li>
    <li>{mathSpan("x<y #implies a+x < a+y")}</li>
    <li>{mathSpan("x<y #iff -x>-y")}</li>
    <li>{mathSpan("x<y, a<b #implies x+a<y+b")}</li>
    <li>{mathSpan("x<y, a>0 #implies ax<ay")}</li>
    <li>{mathSpan("0 #leq x < y, 0 #leq a < b #implies ax<by")}</li>
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
          With {mathSpan("y-x=-(x-y)")} and {mathSpan("x=y #iff x-y=0")} this follows by applying the order
          axioms to {mathSpan("(x-y)")}.
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
          {letOrderedFieldAnd("x, y, a")} with {mathSpan("x < y")}. Prove that {mathSpan("a+x<a+y")}.
        </p>
      </>,
      answer: <>
        <p>
          {mathSpan("x<y")} means {mathSpan("y-x>0")} and
        </p>
        {mathDiv("y-x = y-x + a-a = (a+y) - (a+x)")}
        <p>
          Therefore
        </p>
        {mathDiv("(a+y) - (a+x) > 0")}
        <p>
          which means the same as
        </p>
        {mathDiv("a+x < a+y")}
      </>,
    },
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
        <OrderAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        <p>
          {letOrderedFieldAnd("x")}.
        </p>
        <p>
          Prove that {mathSpan("x<0 #iff -x>0")}
        </p>
      </>,
      answer: <>
        <p>
          {mathSpan("x<0")} means {mathSpan("0>x")} means {mathSpan("0-x>0")}. Also, 
        </p>
        {mathDiv("0-x = 0 + (-x) = -x")}
      </>,
    },
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
        <OrderAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        <p>
          {letOrderedFieldAnd("x, y")}. Prove that
        </p>
        {mathDiv("x<y #iff -x>-y")}
      </>,
      answer: <>
        {mathDiv("x<y #iff y-x>0 #iff -x-(-y)>0 #iff -x>-y")}
      </>,
    },
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
        <OrderAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        {axiomConsequences}
        <p>
          {letOrderedFieldAnd("x, y, a, b")} with {mathSpan("x<y")} and {mathSpan("a<b")}. Prove that
        </p>
        {mathDiv("x+a < y+b")}
      </>,
      answer: <>
        <p>
          Using the axioms and their consequences,
        </p>
        {mathDiv("x<y #implies a+x < a+y")}
        {mathDiv("a<b #implies y+a < y+b")}
        {mathDiv("#text { both } #implies x+a < y+b")}
      </>,
    },
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
        <OrderAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        {axiomConsequences}
        <p>
          {letOrderedFieldAnd("x, y, a")} with {mathSpan("x<y")} and {mathSpan("a>0")}. Prove that
        </p>
        {mathDiv("ax < ay")}
        <p>
          that is, multiplying both sides with a <i>positive</i> number does not change an inequality.
        </p>
      </>,
      answer: <>
        <p>
          {mathSpan("x<y")} means {mathSpan("y-x>0")} and by the third order axiom,
        </p>
        {mathDiv("a(y-x) > 0")}
        <p>
          With {mathSpan("a(y-x)=ay-ax")} this means
        </p>
        {mathDiv("ay-ax > 0 #iff ax < ay")}
      </>,
    },
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
        <OrderAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        {axiomConsequences}
        <p>
          {letOrderedFieldAnd("x, y, a, b")} with {mathSpan("0 #leq x < y")} and {mathSpan("0 #leq a < b")}. Prove that
        </p>
        {mathDiv("ax < by")}
      </>,
      answer: <>
        <p>
          If {mathSpan("x=0")} or {mathSpan("a=0")} then {mathSpan("ax=0")}. From the axioms, {mathSpan("by>0")},
          so in this case, {mathSpan("ax<by")}.
        </p>
        <p>
          Next, let {mathSpan("x #neq 0")} and {mathSpan("a #neq 0")}, so both are greater than {mathSpan("0")}. Then,
        </p>
        {mathDiv("x<y #iff y-x>0 #implies a(y-x)>0 #iff ax<ay")}
        {mathDiv("a<b #iff b-a>0 #implies y(b-a)>0 #iff ay<by")}
        <p>
          which together imply,
        </p>
        {mathDiv("ax < by")}
      </>,
    },
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
        <OrderAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        {axiomConsequences2}
        <p>
          {letOrderedFieldAnd("x, y, a")} with {mathSpan("x < y")} and {mathSpan("a < 0")}. Prove that
        </p>
        {mathDiv("ax > ay")}
        <p>
          That is, multiplying an inequality by a negative number flips the inequality symbol.
        </p>
      </>,
      answer: <>
        <p>
          Start with
        </p>
        {mathDiv("x < y")}
        <p>
          Since {mathSpan("-a>0")}, multiplying by it does <i>not</i> flip the inequality symbol:
        </p>
        {mathDiv("(-a)#cdot x < (-a)#cdot y")}
        {mathDiv("#iff -ax < -ay")}
        {mathDiv("#iff (-ay) - (-ax) > 0")}
        {mathDiv("#iff ax - ay > 0")}
        {mathDiv("#iff ax > ay")}
      </>,
    },
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
        <OrderAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        {axiomConsequences2}
        <p>
          {letOrderedFieldAnd("x")} with {mathSpan("x #neq 0")}. Prove that {mathSpan("x^2 > 0")}.
        </p>
        <p>
          In addition to the above consequences from the axioms, you can use the fact that
        </p>
        {mathDiv("x < y, a < 0 #implies ax>ay")}
        <p>
          which is left for another exercise.
        </p>
      </>,
      answer: <>
        <p>
          If {mathSpan("x>0")}, then {mathSpan("x^2>0")} follows directly from the third order axiom. Otherwise,
          {mathSpan("x<0")} and multiplying that inequality by {mathSpan("x")} flips the symbol, so {mathSpan("x^2>0")}.
        </p>
      </>,
    },



    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
        <OrderAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        {axiomConsequences2}
        <p>
          {letOrderedFieldAnd("x")} with {mathSpan("x > 0")}. Prove that {mathSpan("x^{-1} > 0")}.
        </p>
        <p>
          In addition to the above consequences from the axioms, you can use the fact that
        </p>
        {mathDiv("x < y, a < 0 #implies ax>ay")}
        {mathDiv("x #neq 0 #implies x^2>0")}
        <p>
          which are left for another exercise.
        </p>
      </>,
      answer: <>
        <p>
          If {mathSpan("x>0")}, then {mathSpan("x^2>0")} follows directly from the third order axiom. Otherwise,
          {mathSpan("x<0")} and multiplying that inequality by {mathSpan("x")} flips the symbol, so {mathSpan("x^2>0")}.
        </p>
      </>,
    },


// TODO weiter 3.8



    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
        <OrderAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        <p>
          TODO
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
          With {mathSpan("y-x=-(x-y)")} and {mathSpan("x=y #iff x-y=0")} this follows by applying the order
          axioms to {mathSpan("(x-y)")}.
        </p>
      </>,
    },
  ],
};
