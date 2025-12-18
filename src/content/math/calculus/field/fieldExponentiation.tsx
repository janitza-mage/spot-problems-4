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
          {letField} Let {mathSpan("a #in F")}; {isNat0("p, q")}. Use induction to prove that
        </p>
        {mathDiv("a^pa^q = a^{p+q}")}
      </>,
      answer: <>
        <p>
          For {mathSpan("p=0")},
        </p>
        {mathDiv("a^0a^q = 1a^q = a^q = a^{0+q} = a^{p+q}")}
        <p>
          For {mathSpan("p>0")}, we use induction. Let {mathSpan("p=p'+1")} and
        </p>
        {mathDiv("a^{p'}a^q = a^{p'+q}")}
        <p>
          (induction hypothesis). Then
        </p>
        {mathDiv("a^pa^q = a^{p'+1}a^q = a^{p'}aa^q = a^{p'}a^qa = a^{p'+q}a = a^{p'+q + 1}")}
        {mathDiv("= a^{p'+1+q} = a^{p+q}")}
        <p>
          For {mathSpan("p<0")}, let {mathSpan("p=-p'")}. Then
        </p>
        {mathDiv("a^pa^q = a^{-p'}a^{-(-q)} = (a^{-1})^{p'}(a^{-1})^{-q}")}
        {mathDiv("=(a^{-1})^{p'-q} = a^{-(p'-q)} = a^{p+q}")}
      </>,
    },
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
        <ExponentiationCheatSheet />
      </CheatSheets>,
      problem: <>
        <p>
          {letField} Let {mathSpan("a #in F")}; {isNat0("p, q")}. Use induction to prove that
        </p>
        {mathDiv("(a^p)^q = a^{pq}")}
        <p>
          You can use the fact that 
        </p>
        {mathDiv("a^xa^y = a^{x+y}")}
        <p>
          and
        </p>
        {mathDiv("(a^{-1})^x = a^{-x} = (a^x)^{-1}")}
        <p>
          which are left for another exercise.
        </p>
      </>,
      answer: <>
        <p>
          For {mathSpan("q=0")},
        </p>
        {mathDiv("(a^p)^0 = 1 = a^0 = a^{p#cdot 0} = a^{pq}")}
        <p>
          For {mathSpan("q>0")}, we use induction. Let {mathSpan("q=q'+1")} and
        </p>
        {mathDiv("(a^p)^{q'} = a^{pq'}")}
        <p>
          (induction hypothesis). Then
        </p>
        {mathDiv("(a^p)^q = (a^p)^{q'+1} = (a^p)^{q'}(a^p) = a^{pq'}a^p = a^{pq'+p} = a^{p(q'+1)} = a^{pq}")}
        <p>
          For {mathSpan("q<0")}, let {mathSpan("q=-q'")}. Then
        </p>
        {mathDiv("(a^p)^q = (a^p)^{-q'} = ((a^p)^{-1})^{q'} = (a^{-p})^{q'} = a^{(-p)#cdot q'} = a^{pq}")}
      </>,
    },
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
        <ExponentiationCheatSheet />
      </CheatSheets>,
      problem: <>
        <p>
          {letField} Let {mathSpan("a #in F")}; {isNat0("p")}. Use induction to prove that
        </p>
        {mathDiv("a^pb^p = (ab)^p")}
      </>,
      answer: <>
        <p>
          Base case (p=0):
        </p>
        {mathDiv("a^0b^0 = 1#cdot 1 = 1 = (ab)^0")}
        <p>
          Induction step: Let {mathSpan("p=p'+1")} and
        </p>
        {mathDiv("a^{p'}b^{p'} = (ab)^{p'}")}
        <p>
          Then,
        </p>
        {mathDiv("a^{p}b^{p} = a^{p' + 1}b^{p' + 1} = a^{p'}ab^{p'}b = a^{p'}b^{p'}ab = (ab)^{p'}ab = (ab)^{p'+1}")}
      </>,
    },
  ],
};
