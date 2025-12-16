import {CheatSheet} from "../../../../framework/technical-components/CheatSheet/CheatSheet.tsx";
import {mathDiv, mathSpan} from "../../../../framework/technical-components/Math/Math.tsx";

export function OrderAxiomsCheatSheet() {
  return <CheatSheet label={"Order Axioms"}>
    <p>
      Let {mathSpan("F")} be a field and {mathSpan("x, y #in F")}.
    </p>
    <p>
      Exactly one of the following is true for each element {mathSpan("x")}:
    </p>
    {mathDiv("x>0, x=0, -x>0")}
    <p>
      The sum of positive elements is positive:
    </p>
    {mathDiv("x>0, y>0 #implies x+y>0")}
    <p>
      The product of positive elements is positive:
    </p>
    {mathDiv("x>0, y>0 #implies xy>0")}
    <p>
      Note that the above are one-way implications. If {mathSpan("x+y>0")} or {mathSpan("xy>0")}, we cannot
      conclude that {mathSpan("x")} or {mathSpan("y")} must be positive.
    </p>
    <p>
      Notation:
    </p>
    <ul>
      <li>{mathSpan("x>y")} means: {mathSpan("x-y>0")}</li>
      <li>{mathSpan("x<y")} means: {mathSpan("y>x")}</li>
      <li>{mathSpan("x #geq y")} means: {mathSpan("x>y")} or  {mathSpan("x=y")}</li>
      <li>{mathSpan("x #leq y")} means: {mathSpan("x<y")} or {mathSpan("x=y")}</li>
    </ul>
  </CheatSheet>;
}
