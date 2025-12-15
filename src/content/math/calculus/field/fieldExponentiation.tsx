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
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
        <ExponentiationCheatSheet />
      </CheatSheets>,
      problem: <>
        <p>
          {letField} Let {mathSpan("a, b, c, d #in F")} and {mathSpan("b, d #neq 0")}. Prove that
        </p>
        {mathDiv("#frac{a}{b}=#frac{c}{d} #iff ad = bc")}
      </>,
      answer: <>
        <p>
          By applying the definition of the fraction bar, write the proposition as
        </p>
        {mathDiv("ab^{-1} = cd^{-1} #iff ad = bc")}
        <p>
          You can then immediately prove either direction by multiplying with {mathSpan("b")} and {mathSpan("d")} (left
          to right) or {mathSpan("b^{-1}")} and {mathSpan("d{-1}")} (right to left).
        </p>
      </>,
    },
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
        <ExponentiationCheatSheet />
      </CheatSheets>,
      problem: <>
        <p>
          {letField} Let {mathSpan("a, b, c, d #in F")} and {mathSpan("b, d #neq 0")}. Prove that
        </p>
        {mathDiv("#frac{a}{b} #pm #frac{c}{d} = #frac{ad #pm bc}{bd}")}
      </>,
      answer: <>
        {mathDiv("#frac{a}{b} #pm #frac{c}{d} = ab^{-1} #pm cd^{-1} = (ab^{-1} #pm cd^{-1})(bd)(bd)^{-1}")}
        {mathDiv("= #frac{ab^{-1}bd #pm cd^{-1}bd}{bd} = #frac{ad #pm bc}{bd}")}
      </>,
    },
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
        <ExponentiationCheatSheet />
      </CheatSheets>,
      problem: <>
        <p>
          {letField} Let {mathSpan("a, b, c, d #in F")} and {mathSpan("b, d #neq 0")}. Prove that
        </p>
        {mathDiv("#frac{a}{b} #cdot #frac{c}{d} = #frac{ac}{bd}")}
        <p>
          You can use the fact that
        </p>
        {mathDiv("(xy)^{-1} = x^{-1}y^{-1}")}
        <p>
          which is left for another exercise.
        </p>
      </>,
      answer: <>
        {mathDiv("#frac{a}{b} #cdot #frac{c}{d} = ab^{-1} #cdot cd^{-1} = acb^{-1}d^{-1} = (ac)(bd)^{-1} = #frac{ac}{bd}")}
      </>,
    },
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
        <ExponentiationCheatSheet />
      </CheatSheets>,
      problem: <>
        <p>
          {letField} Let {mathSpan("a, b #in F")} and {mathSpan("a, b #neq 0")}. Prove that
        </p>
        {mathDiv("(#frac{a}{b})^{-1} = #frac{b}{a}")}
        <p>
          You can use the fact that
        </p>
        {mathDiv("(xy)^{-1} = x^{-1}y^{-1}")}
        <p>
          which is left for another exercise.
        </p>
      </>,
      answer: <>
        {mathDiv("(#frac{a}{b})^{-1} = (ab^{-1})^{-1} = a^{-1}(b^{-1})^{-1} = a^{-1}b = #frac{b}{a}")}
      </>,
    },
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
        <ExponentiationCheatSheet />
      </CheatSheets>,
      problem: <>
        <p>
          {letField} Let {mathSpan("a, b, c, d #in F")} and {mathSpan("b, c, d #neq 0")}. Prove that
        </p>
        {mathDiv("#frac{#frac{a}{b}}{#frac{c}{d}} = #frac{ad}{bc}")}
        <p>
          You can use the fact that
        </p>
        {mathDiv("(xy)^{-1} = x^{-1}y^{-1}")}
        <p>
          and
        </p>
        {mathDiv("(#frac{a}{b})^{-1} = #frac{b}{a}")}
        <p>
          and
        </p>
        {mathDiv("#frac{a}{b} #cdot #frac{c}{d} = #frac{ac}{bd}")}
        <p>
          which are left for another exercise.
        </p>
      </>,
      answer: <>
        {mathDiv("#frac{#frac{a}{b}}{#frac{c}{d}} = (#frac{a}{b})(#frac{c}{d})^{-1} = #frac{a}{b} #cdot #frac{d}{c} = #frac{ad}{bc}")}
      </>,
    },
      
      
      // TODO weiter 2.3
  ],
};
