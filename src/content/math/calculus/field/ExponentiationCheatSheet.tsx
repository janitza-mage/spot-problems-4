import {CheatSheet} from "../../../../framework/technical-components/CheatSheet/CheatSheet.tsx";
import {mathDiv, mathSpan} from "../../../../framework/technical-components/Math/Math.tsx";
import {isNat0} from "../../util/math-atoms.tsx";

export function ExponentiationCheatSheet() {
  return <CheatSheet label={"Exponentiation"}>
    <p>
      Let {mathSpan("F")} be a field, {mathSpan("x #in F")} and {isNat0("n")}. We define
    </p>
    {mathDiv("x^0 := 1")}
    {mathDiv("x^{n+1} := x^nx")}
    {mathDiv("x^{-n} := (x^{-1})^n")}
    <p>
      Note that by this definition, {mathSpan("0^0=1")} and {mathSpan("x^{-0}=x^0=1")}.
    </p>
  </CheatSheet>;
}
