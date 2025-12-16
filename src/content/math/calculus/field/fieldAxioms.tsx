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
        {mathDiv("a(a^{-1}b) = (aa^{-1})b = 1b = b")}
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
          {letField} Let {mathSpan("a #in #mathbb{F}")}, {mathSpan("a #neq 0")}.
          Prove that {mathSpan("(a^{-1})^{-1} = a")}. You can use the fact that the inverse is unique, which is left
          for another exercise.
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
          {letField} Let {mathSpan("a, b #in #mathbb{F}")}; {mathSpan("a, b #neq 0")}. Prove
          that {mathSpan("(ab)^{-1} = a^{-1}b^{-1}")}. You can use the fact that for any
          given {mathSpan("p, q #in #mathbb{F}")}, the equation {mathSpan("px = q")} has {mathSpan("x = p^{-1}q")} as
          its unique solution. This is left for another exercise.
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
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        <p>
          {letField} Let {mathSpan("a, b, c #in #mathbb{F}")}. Prove that
        </p>
        {mathDiv("(a + b)c = ac + bc")}
      </>,
      answer: <>
        <p>
          This is just distributivity and commutativity combined:
        </p>
        {mathDiv("(a+b)c = c(a+b) = ca+cb = ac+bc")}
      </>,
    },
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        <p>
          {letField} Let {mathSpan("a #in #mathbb{F}")}. Prove that {mathSpan("a#cdot 0 = 0")}.
        </p>
      </>,
      answer: <>
        {mathDiv("a#cdot 0 = a(1-1) = a#cdot 1 - a#cdot 1 = a - a = 0")}
      </>,
    },
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        <p>
          {letField} Prove that if a product of two numbers is zero, then at least one of the factors is zero.
          You can use the fact that {mathSpan("x#cdot 0 = 0")} for each {mathSpan("x #in F")}, which is left
          for another exercise.
        </p>
      </>,
      answer: <>
        <p>
          Let {mathSpan("a, b #in F")} and {mathSpan("ab=0")}.
        </p>
        <p>
          Case 1: {mathSpan("b=0")}. Then the claim is immediately true.
        </p>
        <p>
          Case 2: {mathSpan("b #neq 0")}. Then
        </p>
        {mathDiv("a = a1 = a(bb^{-1}) = (ab)b^{-1} = 0b^{-1} = 0")}
      </>,
    },
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        <p>
          {letField} Let {mathSpan("a #in F")}. Prove that {mathSpan("(-a) = (-1)a")}. 
        </p>
      </>,
      answer: <>
        <p>
          Observe that {mathSpan("(-1)a")} is a negative to {mathSpan("a")}:
        </p>
        {mathDiv("a + (-1)a = 1a + (-1)a = (1-1)a = 0a = 0")}
        <p>
          Since the negative is unique, {mathSpan("(-a) = (-1)a")}.
        </p>
      </>,
    },
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        <p>
          {letField} Let {mathSpan("a,b #in F")}. Prove that {mathSpan("(-a)(-b) = ab")}. You can use the fact
          that {mathSpan("(-x) = (-1)x")}, as well as {mathSpan("-(-x)=x")}, both of which are left for another
          exercise.
        </p>
      </>,
      answer: <>
        {mathDiv("(-a)(-b) = (-a)((-1)b) = ((-1)(-a))b = (-(-a))b = ab")}
      </>,
    },
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        <p>
          This exercise gives a counter-example that is <i>not</i> a field since it does not fulfil the field axioms.
          Therefore, the conclusions made in other exercises cannot be assumed to hold for this counter-example.
          Some of them may hold, but must be proven again since they relied on the field axioms.
        </p>
        <p>
          The counter-example is based on
        </p>
        {mathDiv("#mathbb{N}^+_0 = #{0, 1, 2, 3, ...#}")}
        <p>
          but includes "infinity" as another element. Let
        </p>
        {mathDiv("F = #mathbb{N}^+_0 #cup #{ #infty #}")}
        <p>
          Addition and multiplication for natural numbers retain their original meaning, but we have to "extend" them
          for that new element:
        </p>
        {mathDiv("a + #infty = #infty + a = #infty")}
        {mathDiv("0 #cdot #infty = #infty #cdot 0 = 0")}
        {mathDiv("a #cdot #infty = #infty #cdot a = #infty #text{ for } a #neq 0")}
        <p>
          Prove that this counter-example fulfils all field axioms except the negation and inverse axioms.
        </p>
      </>,
      answer: <>
        <p>
          For all finite elements, additive and multiplicative associativity, commutativity and neutral elements
          are inherited from the natural numbers. There is no additive inverse since the natural numbers do not
          include negative numbers, and no multiplicative inverse since they do not include fractions.
        </p>
        <p>
          What is left to prove is, therefore, that the axioms (except inverses) <i>do</i> hold for the new "infinite"
          element:
        </p>
        
        <h3>Addition</h3>
        <p>
          Let {mathSpan("a, b #in F")}.
        </p>
        <p>
          Associativity:
        </p>
        {mathDiv("a + (b + #infty) = a + #infty = #infty = (a + b) + #infty")}
        {mathDiv("a + (#infty + b) = a + #infty = #infty = #infty + b = (a + #infty) + b")}
        {mathDiv("#infty + (a + b) = #infty = #infty + b = (#infty + a) + b")}
        <p>
          Commutativity:
        </p>
        {mathDiv("a + #infty = #infty = #infty + a")}
        <p>
          Zero:
        </p>
        {mathDiv("0 + #infty = #infty = #infty + 0")}

        <h3>Multiplication</h3>
        <p>
          Let {mathSpan("a, b #in F")}. We first show all cases involving zero (note
          that {mathSpan("a, b")} <i>may</i> be {mathSpan("#infty")} here):
        </p>
        <p>
          Associativity:
        </p>
        {mathDiv("a #cdot (b #cdot 0) = a #cdot 0 = 0 = (a #cdot b) #cdot 0")}
        {mathDiv("a #cdot (0 #cdot b) = a #cdot 0 = 0 = 0 #cdot b = (a #cdot 0) #cdot b")}
        {mathDiv("0 #cdot (a #cdot b) = 0 = 0 #cdot b = (0 #cdot a) #cdot b")}
        <p>
          Commutativity:
        </p>
        {mathDiv("a #cdot 0 = 0 = 0 #cdot a")}
        <p>
          One:
        </p>
        {mathDiv("1 #cdot 0 = 0 = 0 #cdot 1")}
        <p>
          Next, assume that {mathSpan("a, b #neq 0")}.
        </p>
        <p>
          Associativity:
        </p>
        {mathDiv("a #cdot (b #cdot #infty) = a #cdot #infty = #infty = (a #cdot b) #cdot #infty")}
        {mathDiv("a #cdot (#infty #cdot b) = a #cdot #infty = #infty = #infty #cdot b = (a #cdot #infty) #cdot b")}
        {mathDiv("#infty #cdot (a #cdot b) = #infty = #infty #cdot b = (#infty #cdot a) #cdot b")}
        <p>
          Commutativity:
        </p>
        {mathDiv("a #cdot #infty = #infty = #infty #cdot a")}
        <p>
          One:
        </p>
        {mathDiv("1 #cdot #infty = #infty = #infty #cdot 1")}

        <h3>Distributivity</h3>

        <p>
          We have to show that
        </p>
        {mathDiv("x(y + z) = xy + xz")}
        <p>
          We do this by going through all cases that can occur:
        </p>
        <ul>
          <li>Case {mathSpan("x=0")}: {mathSpan("0(y+z) = 0 = 0+0 = 0y + 0z")}</li>
          <li>Case {mathSpan("y=0")}: {mathSpan("x(0+z) = xz = x0 + xz")}</li>
          <li>Case {mathSpan("z=0")}: {mathSpan("x(y+0) = xy = xy + x0")}</li>
          <li>Case {mathSpan("x=#infty; y, z #neq 0")}: {mathSpan("#infty(y+z) = #infty = #infty+#infty = #infty y + #infty z")}</li>
          <li>Case {mathSpan("y=#infty; x, z #neq 0")}: {mathSpan("x(#infty+z) = xz = x#infty + xz")}</li>
          <li>Case {mathSpan("z=#infty; x, y #neq 0")}: {mathSpan("x(y+#infty) = xy = xy + x#infty")}</li>
          <li>All other cases involve only natural numbers.</li>
        </ul>
      </>,
    },
  ],
};
