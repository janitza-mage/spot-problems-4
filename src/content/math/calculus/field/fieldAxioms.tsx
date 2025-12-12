import type {ExerciseNode} from "../../../../framework/content.tsx";
import {mathDiv, mathSpan} from "../../../../framework/technical-components/Math/Math.tsx";
import {CheatSheets} from "../../../../framework/technical-components/CheatSheet/CheatSheets.tsx";
import {FieldAxiomsCheatSheet} from "./FieldAxiomsCheatSheet.tsx";

const letField = <>Let {mathSpan("F")} be a field.</>;

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
        {letField} Using the field axioms, prove that {mathSpan("0")} is unique.
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
        {letField} Using the field axioms, prove that the additive inverse is unique. That is,
        given {mathSpan("a #in F")}, {mathSpan("-a")} is unique.
      </>,
      answer: <>
        <p>
          Let {mathSpan("a #in F")} and two additive inverses, {mathSpan("b")} and {mathSpan("c")}. That
          is,
        </p>
        {mathDiv("a+b=0")}
        {mathDiv("a+c=0")}
        <p>
          By commutativity,
        </p>
        {mathDiv("b+a=0")}
        {mathDiv("c+a=0")}
        <p>
          Now take the equation {mathDiv("a+c=0")} and add {mathSpan("b")} to both sides (from the left). We
          get {mathDiv("b+(a+c) = b+0")} By associativity, {mathDiv("(b+a)+c = b+0")}
          Now apply {mathSpan("b+a=0")} from above: {mathDiv("0+c = b+0")} Due to
          commutativity and the fact that 0 is neutral with respect to addition, {mathDiv("c = b")}
        </p>
      </>,
    },
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        {letField} Using the field axioms, prove that {mathSpan("-0 = 0")}.
      </>,
      answer: <>
        <p>
          Apply the zero axiom to {mathSpan("-0")} to get {mathDiv("-0 + 0 = -0")}
          By commutativity, {mathDiv("0 + -0 = -0")}
          By the negation axiom, {mathDiv("0 + -0 = 0")}
          Therefore, {mathDiv("-0 = 0")}
        </p>
      </>,
    },
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        <p>
          {letField} Let {mathSpan("a, b #in F")} be two known numbers, and {mathSpan("x #in F")} unknown with
        </p>
        {mathDiv("a + x = b")}
        <p>
          Use the field axioms to prove that {mathSpan("x = b - a")} is the unique solution.
        </p>
      </>,
      answer: <>
        <p>
          First, observe that {mathSpan("x = b - a")} is a solution by applying the axioms:
        </p>
        {mathDiv("a + (b - a) = a + (b + -a) = a + (-a + b)")}
        {mathDiv("= (a + -a) + b = 0 + b = b + 0 = b")}
        <p>
          Then, we will show that the solution is unique. Let {mathSpan("y")} be a (different or equal) solution, that is,
        </p>
        {mathDiv("a + y = b")}
        <p>
          Add {mathSpan("-a")} (from the left) on both sides:
        </p>
        {mathDiv("-a + (a + y) = -a + b")}
        <p>
          For the left side,
        </p>
        {mathDiv("-a + (a + y) = (-a + a) + y = 0 + y = y")}
        <p>
          For the right side,
        </p>
        {mathDiv("-a + b = b - a = x")}
        <p>
          so {mathSpan("y = x")}.
        </p>
      </>,
    },
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        <p>
          {letField} Prove that for {mathSpan("a #in #mathbb{F}")}, {mathSpan("-(-a)=a")}. You can use the fact that
          the negative is unique, which is left for another exercise.
        </p>
      </>,
      answer: <>
        <p>
          Apply the negation axiom to {mathSpan("a")} to get:
        </p>
        {mathDiv("a + (-a) = 0")}
        <p>
          and by commutativity,
        </p>
        {mathDiv("(-a) + a = 0")}
        <p>
          Apply the negation axiom to {mathSpan("(-a)")} to get:
        </p>
        {mathDiv("(-a) + -(-a) = 0")}
        <p>
          Since the negative of {mathSpan("(-a)")} is unique, {mathSpan("-(-a)=a")}.
        </p>
      </>,
    },
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        <p>
          {letField} Prove that for {mathSpan("a, b #in #mathbb{F}")}, {mathSpan("-(a+b) = (-a) + (-b)")}. You can
          use the fact that for any given {mathSpan("p, q #in #mathbb{F}")}, the
          equation {mathSpan("p + x = q")} has {mathSpan("x = q - p")} as its unique solution. This is left for
          another exercise.
        </p>
      </>,
      answer: <>
        <p>
          Apply the negation axiom to {mathSpan("(a+b)")} to get:
        </p>
        {mathDiv("(a+b) + (-(a+b)) = 0")}
        <p>
          Add {mathSpan("(-a)")} on both sides to get:
        </p>
        {mathDiv("(-a) + (a+b) + (-(a+b)) = -a")}
        <p>
          which simplifies to
        </p>
        {mathDiv("b + (-(a+b)) = -a")}
        <p>
          Compare this to the equation
        </p>
        {mathDiv("b + x = -a")}
        <p>
          which has {mathSpan("x = (-a) + (-b)")} as its unique solution. Since the solution is unique,
        </p>
        {mathDiv("-(a+b) = (-a) + (-b)")}
      </>,
    },
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        {letField} Using the field axioms, prove that {mathSpan("1")} is unique.
      </>,
      answer: <>
        <p>
          Let {mathSpan("1, 1' #in F")} be neutral elements with respect to multiplication. Then:
        </p>
        <div>{mathSpan("1' #cdot 1 = 1'")} ({mathSpan("1")} is neutral)</div>
        <div>{mathSpan("1 #cdot 1' = 1")} ({mathSpan("1'")} is neutral)</div>
        <div>{mathSpan("1' #cdot 1 = 1")} (commutativity)</div>
        <div>Therefore, {mathSpan("1 = 1'")} (commutativity)</div>
      </>,
    },
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        {letField} Using the field axioms, prove that the multiplicative inverse is unique. That is,
        given {mathSpan("a #in F, a #neq 0")}, {mathSpan("a^{-1}")} is unique.
      </>,
      answer: <>
        <p>
          Let {mathSpan("a #in F, a#neq 0")} and two multiplicative inverses, {mathSpan("b")} and {mathSpan("c")}.
          That  is,
        </p>
        {mathDiv("a #cdot b = 1")}
        {mathDiv("a #cdot c = 1")}
        <p>
          By commutativity,
        </p>
        {mathDiv("b #cdot a = 1")}
        {mathDiv("c #cdot a = 1")}
        <p>
          Now take the equation {mathDiv("a #cdot c = 1")} and multiply {mathSpan("b")} to both sides (from the left).
          We  get {mathDiv("b #cdot (a #cdot c) = b #cdot 1")} By associativity, {mathDiv("(b #cdot a) #cdot c = b #cdot 1")}
          Now apply {mathSpan("b #cdot a = 1")} from above: {mathDiv("1 #cdot c = b #cdot 1")} Due to
          commutativity and the fact that 1 is neutral with respect to multiplication, {mathDiv("c = b")}
        </p>
      </>,
    },
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        {letField} Using the field axioms, prove that {mathSpan("1^{-1} = 1")}. Note that {mathSpan("1 #neq 0")} by
        definition, so {mathSpan("1^{-1}")} is well-defined.
      </>,
      answer: <>
        <p>
          Apply the one axiom to {mathSpan("1^{-1}")} to get {mathDiv("1^{-1} #cdot 1 = 1^{-1}")}
          By commutativity, {mathDiv("1 #cdot 1^{-1} = 1^{-1}")}
          By the negation axiom, {mathDiv("1 #cdot 1^{-1} = 1")}
          Therefore, {mathDiv("1^{-1} = 1")}
        </p>
      </>,
    },
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        <p>
          {letField} Let {mathSpan("a, b #in F")} be two known numbers with {mathSpan("a #neq 0")},
          and {mathSpan("x #in F")} unknown with {mathSpan("ax = b")}.
        </p>
        <p>
          Use the field axioms to prove that {mathSpan("x = a^{-1}b")} is the unique solution.
        </p>
      </>,
      answer: <>
        <p>
          First, observe that {mathSpan("x = a^{-1}b")} is a solution by applying the axioms:
        </p>
        {mathDiv("a(a^{-1}b) = = (aa^{-1})b = 1b = b")}
        <p>
          Then, we will show that the solution is unique. Let {mathSpan("y")} be a (different or equal) solution, that is,
        </p>
        {mathDiv("ay = b")}
        <p>
          Multiply {mathSpan("a^{-1}")} (from the left) on both sides:
        </p>
        {mathDiv("a^{-1}(ay) = a^{-1}b")}
        <p>
          For the left side,
        </p>
        {mathDiv("a^{-1}(ay) = (a^{-1}a)y + y = 1y = y")}
        <p>
          For the right side,
        </p>
        {mathDiv("a^{-1}b = x")}
        <p>
          so {mathSpan("y = x")}.
        </p>
      </>,
    },
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        <p>
          {letField} Prove that for {mathSpan("a #in #mathbb{F}")}, {mathSpan("(a^{-1})^{-1} = a")}. You can use the
          fact that the inverse is unique, which is left for another exercise.
        </p>
      </>,
      answer: <>
        <p>
          Apply the inverse axiom to {mathSpan("a")} to get:
        </p>
        {mathDiv("aa^{-1} = 1")}
        <p>
          and by commutativity,
        </p>
        {mathDiv("a^{-1}a = 0")}
        <p>
          Apply the inverse axiom to {mathSpan("a^{-1}")} to get:
        </p>
        {mathDiv("(a^{-1}) #cdot (a^{-1})^{-1} = 1")}
        <p>
          Since the inverse of {mathSpan("(a^{-1})")} is unique, {mathSpan("(a^{-1})^{-1} = a")}.
        </p>
      </>,
    },
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        <p>
          {letField} Prove that for {mathSpan("a, b #in #mathbb{F}")}, {mathSpan("(ab)^{-1} = a^{-1}b^{-1}")}. You can
          use the fact that for any given {mathSpan("p, q #in #mathbb{F}")}, the
          equation {mathSpan("px = q")} has {mathSpan("x = p^{-1}q")} as its unique solution. This is left for
          another exercise.
        </p>
      </>,
      answer: <>
        <p>
          Apply the inverse axiom to {mathSpan("(ab)")} to get:
        </p>
        {mathDiv("(ab) #cdot (ab)^{-1} = 1")}
        <p>
          Multiply {mathSpan("a^{-1}")} on both sides to get:
        </p>
        {mathDiv("a^{-1} #cdot (ab) #cdot (ab)^{-1} = a^{-1}")}
        <p>
          which simplifies to
        </p>
        {mathDiv("b #cdot (ab)^{-1} = a^{-1}")}
        <p>
          Compare this to the equation
        </p>
        {mathDiv("bx = a^{-1}")}
        <p>
          which has {mathSpan("x = a^{-1}b^{-1}")} as its unique solution. Since the solution is unique,
        </p>
        {mathDiv("(ab)^{-1} = a^{-1}b^{-1}")}
      </>,
    },
  ],
};
