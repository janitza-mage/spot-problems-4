import {CheatSheet} from "../../../../framework/technical-components/CheatSheet/CheatSheet.tsx";
import {mathDiv, mathSpan} from "../../../../framework/technical-components/Math/Math.tsx";

export function ArchimedeanAxiomsCheatSheet() {
  return <CheatSheet label={"Archimedean Axioms"}>

    <p>
      Let {mathSpan("F")} be an ordered field. {mathSpan("F")} is called
      an <i>archimedean field</i> if the following axiom holds:
    </p>
    <p>
      For every {mathSpan("x, y #in F")} there exists a natural number {mathSpan("n #in N")} such
      that {mathSpan("nx > y")}. Here, the product {mathSpan("nx")} is defined by
      adding {mathSpan("x")} {mathSpan("n")} times.
    </p>

    <h4>Consequences</h4>
    <p>
      Let {mathSpan("x #in F")}.
    </p>
    {mathDiv("n > x #text{ for some } n #in #mathbb{N}")}
    {mathDiv("-n < x #text{ for some } n #in #mathbb{N}")}
    <p>
      There is a unique integer, denoted as {mathSpan("#lfloor x #rfloor")}, such that
    </p>
    {mathDiv("#lfloor x #rfloor #leq x < #lfloor x #rfloor + 1")}
    <p>
      There is a unique integer, denoted as {mathSpan("#lceil x #rceil")}, such that
    </p>
    {mathDiv("#lceil x #rceil - 1 < x #leq #lceil x #rceil")}
    <p>
      For {mathSpan("#varepsilon #in F")}, there exists {mathSpan("n #in #mathbb{N}")} such that
    </p>
    {mathDiv("#frac{1}{n} < #varepsilon")}
    <p>
      For {mathSpan("x #in F")}, {mathSpan("x #geq -1")} and {mathSpan("n #in #mathbb{N}")},
    </p>
    {mathDiv("(1 + x)^n #geq 1 + nx")}
    <p>
      For {mathSpan("a, b #in F")}, {mathSpan("a > 1")} there exists {mathSpan("n #in #mathbb{N}")}, such that
    </p>
    {mathDiv("a^n > b")}
    <p>
      For {mathSpan("a, #varepsilon #in F")}, {mathSpan("0 < a < 1")} there exists {mathSpan("n #in #mathbb{N}")},
      such that
    </p>
    {mathDiv("a^n < #varepsilon")}
    
  </CheatSheet>;
}
