import type {ReactNode} from "react";
import {mathDiv, mathSpan} from "../../../framework/technical-components/Math/Math.tsx";

export function mathDivOrCustom(input: string | ReactNode): ReactNode {
  return (typeof input === "string") ? mathDiv(input) : input;
}

export function mathSpanOrCustom(input: string | ReactNode): ReactNode {
  return (typeof input === "string") ? mathSpan(input) : input;
}
