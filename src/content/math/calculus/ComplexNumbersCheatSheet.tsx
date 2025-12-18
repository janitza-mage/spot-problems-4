import {mathDiv, mathSpan} from "../../../framework/technical-components/Math/Math.tsx";
import {CheatSheet} from "../../../framework/technical-components/CheatSheet/CheatSheet.tsx";

export function ComplexNumbersCheatSheet() {
  return <CheatSheet label={"Definition: Complex Numbers"}>
    <p>
      The <i>Complex Numbers</i> {mathSpan("#mathbb{C}")} can be defined as the set of pairs of real
      numbers {mathSpan("(c_1, c_2)")}, {mathSpan("c_1, c_2 #in #mathbb{R}")}, with the following operations:
      <ul>
        <li>{mathSpan("(c_1, c_2) + (d_1, d_2) = (c_1 + d_1, c_2 + d_2)")}</li>
        <li>{mathSpan("(c_1, c_2) #cdot (d_1, d_2) = (c_1d_1 - c_2d_2, c_1d_2 + c_2d_1)")}</li>
        <li>{mathSpan("0 = (0, 0)")}</li>
        <li>{mathSpan("1 = (1, 0)")}</li>
      </ul>
    </p>
    <p>
      The real numbers are embedded in the complex numbers. Let {mathSpan("a #in #mathbb{R}")}. Then we define that
    </p>
    {mathDiv("a #stackrel{!}{=} (a, 0)")}
    <p>
      Let {mathSpan("i := (0, 1)")} and {mathSpan("a, b #in #mathbb{R}")}. Then
    </p>
    {mathDiv("ai = (a, 0)(0, 1) = (a#cdot 0 - 0#cdot 1, a#cdot 1 + 0#cdot 0) = (0, a)")}
    {mathDiv("ai+b = (0, a) + (b, 0) = (a, b)")}
    {mathDiv("i^2 = (0, 1)(0, 1) = (0-1, 0+0) = (-1, 0) = -1")}
    <p>
      We will occasionally use the second equation to write complex numbers as either of the following:
    </p>
    {mathDiv("(c_1, c_2) = c_1i + c_2")}
  </CheatSheet>;
}
