import {CheatSheet} from "../../../../framework/technical-components/CheatSheet/CheatSheet.tsx";
import {mathSpan} from "../../../../framework/technical-components/Math/Math.tsx";

export function FieldAxiomsCheatSheet() {
  return <CheatSheet label={"Field Axioms"}>
    <p>
      A <i>Field</i> consists of a set S of elements and two operations, <i>addition</i> (denoted by {mathSpan("+")}),
      and <i>multiplication</i> (denoted by {mathSpan("#cdot")}). Addition and multiplication satisfy the following axioms:
    </p>
    
    <h4>Addition Axioms</h4>
    <ul>
      <li>Associativity: {mathSpan("(a + b) + c = a + (b + c)")}</li>
      <li>Commutativity: {mathSpan("a + b = b + a")}</li>
      <li>Zero: There is an element {mathSpan("0 #in S")} such that {mathSpan("a + 0 = a")} for all {mathSpan("a #in S")}</li>
      <li>Negation: For every {mathSpan("a #in S")} there is an element {mathSpan("-a #in S")} such that {mathSpan("a + (-a) = 0")}</li>
    </ul>
    <p>By applying commutativity, it follows that</p>
    <ul>
      <li>{mathSpan("0 + a = a")}</li>
      <li>{mathSpan("(-a) + a = 0")}</li>
    </ul>

    <h4>Multiplication Axioms</h4>
    <ul>
      <li>Associativity: {mathSpan("(a#cdot b)#cdot c = a#cdot (b#cdot c)")}</li>
      <li>Commutativity: {mathSpan("a#cdot b = b#cdot a")}</li>
      <li>One: There is an element {mathSpan("1 #in S")} such that {mathSpan("1 #neq 0")} and {mathSpan("a#cdot 1 = a")} for all {mathSpan("a #in S")}</li>
      <li>Inverse: For every {mathSpan("a #in S")} with {mathSpan("a #neq 0")} there is an element {mathSpan("a^{-1} #in S")} such that {mathSpan("a#cdot a^{-1} = 1")}</li>
    </ul>
    <p>By applying commutativity, it follows that</p>
    <ul>
      <li>{mathSpan("1#cdot a = a")}</li>
      <li>{mathSpan("a^{-1} #cdot a = 1")}</li>
    </ul>

    <h4>Distributivity Axiom</h4>
    <ul>
      <li>{mathSpan("x#cdot (y + z) = x#cdot y + x#cdot z")}</li>
    </ul>

    <h4>Notation</h4>
    <p>
      By convention, multiplication takes precedence over addition. That
      is, {mathSpan("a+b#cdot c = a+(b#cdot c)")}. Note that this is not an axiom, but a notational convention,
      without which the expression {mathSpan("a #cdot b + c")} would not have a well-defined meaning and we would be
      forced to use parentheses everywhere.
    </p>
    <p>
      We will write {mathSpan("a-b")} to mean {mathSpan("a + (-b)")} when this is not ambiguous.
    </p>
    <p>
      We will write {mathSpan("a + b + c")} to mean {mathSpan("a + (b + c)")} or {mathSpan("(a + b) + c")} since
      the two are equal.
    </p>
    <p>
      We will write {mathSpan("ab")} to mean {mathSpan("a #cdot b")} when this is not ambiguous.
    </p>
    <p>
      We will write {mathSpan("#frac{a}{b}")} to mean {mathSpan("a #cdot b^{-1}")}.
    </p>
    <p>
      We will write {mathSpan("abc")} to mean {mathSpan("a(bc)")} or {mathSpan("(ab)c")} since the two are equal.
    </p>
  </CheatSheet>;
}
