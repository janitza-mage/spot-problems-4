import {mathDiv, mathSpan} from "../../../../framework/technical-components/Math/Math.tsx";
import {isNat0} from "../../util/math-atoms.tsx";
import type {CheatSheet} from "../../../../framework/content.tsx";

export function ExponentiationCheatSheetContent() {
  return <>
    <p>
      Let {mathSpan("F")} be a field, {mathSpan("x #in F")} and {isNat0("n")}. We define
    </p>
    {mathDiv("x^0 := 1")}
    {mathDiv("x^{n+1} := x^nx")}
    {mathDiv("x^{-n} := (x^{-1})^n")}
    <p>
      Note that by this definition, {mathSpan("0^0=1")} and {mathSpan("x^{-0}=x^0=1")}.
    </p>
  </>;
}

const exponentiationCheatSheetDeduplicationToken = {};

export const exponentiationCheatSheet: CheatSheet = {
  label: "Exponentiation",
  content: <ExponentiationCheatSheetContent />,
  deduplicationToken: exponentiationCheatSheetDeduplicationToken,
}
