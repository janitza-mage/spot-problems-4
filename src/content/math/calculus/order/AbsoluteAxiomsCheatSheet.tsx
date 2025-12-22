import {CheatSheet} from "../../../../framework/technical-components/CheatSheet/CheatSheet.tsx";
import {mathDiv, mathSpan} from "../../../../framework/technical-components/Math/Math.tsx";

export function AbsoluteAxiomsCheatSheet() {
  return <CheatSheet label={"Absolute"}>

    <p>
      Let {mathSpan("F")} be a field and {mathSpan("x, y #in F")}. The <i>absolute</i> of an element {mathSpan("x")},
      denoted as {mathSpan("|x|")}, is a mapping from {mathSpan("F")} into an ordered field that satisfies the
      following axioms:
    </p>
    {mathDiv("|x| #geq 0")}
    {mathDiv("|x| = 0 #iff x = 0")}
    {mathDiv("|xy| = |x||y|")}
    {mathDiv("|x+y| #leq |x| + |y|")}
    <p>
      If {mathSpan("F")} is itself ordered, we define the absolute as the mapping
      from {mathSpan("F")} to {mathSpan("F")} itself with:
    </p>
    {mathDiv("|x| = x #text{ if } x #geq 0")}
    {mathDiv("|x| = -x #text{ if } x < 0")}
    
    <h4>Consequences</h4>
    {mathDiv("|-1| = |1| = 1")}
    {mathDiv("|-x| = |x|")}
    {mathDiv("|#frac{x}{y}| = #frac{|x|}{|y|}")}
    {mathDiv("|x+y| #geq |x|-|y|")}
    {mathDiv("|x-y| #geq |x|-|y|")}
    
  </CheatSheet>;
}
