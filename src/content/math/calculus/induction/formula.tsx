/*
Utilities to prove formulas using induction, e.g. sums, products, ...
 */

import type {ReactNode} from "react";
import {mathDivOrCustom, mathSpanOrCustom} from "../../util/math-util.tsx";
import type {Exercise} from "../../../../framework/content.tsx";
import {isNat0, isNatPlus} from "../../util/math-atoms.tsx";
import {mathSpan} from "../../../../framework/technical-components/Math/Math.tsx";

export interface StandardFomulaInductionItemExtraOptions {
  problemFooter?: ReactNode | null | undefined;
  solutionFooter?: ReactNode | null | undefined;
  baseCase: number | string,
}

const defaultExtraOptions: StandardFomulaInductionItemExtraOptions = {
  problemFooter: undefined,
  solutionFooter: undefined,
  baseCase: 1,
};

export function observeThat(...formulas: (string | ReactNode)[]) {
  return <>
    <p>Observe that</p>
    {formulas.map(mathDivOrCustom)}
  </>;
}

export function standardFomulaInductionItem(
    problemPrelude: ReactNode, // not in ExtraOptions because we need it almost everywhere
    equationToProve: string | ReactNode,
    baseCaseProof: string | ReactNode, // a string will be fed to mathDiv, a ReactNode will be used as-is
    nextEquationToProve: string | ReactNode,
    nextEquationProof: (string | ReactNode)[],
    extraOptions?: StandardFomulaInductionItemExtraOptions | null | undefined,
): Exercise {
  const materializedExtraOptions: StandardFomulaInductionItemExtraOptions = {...defaultExtraOptions, ...extraOptions};
  const equationToProveDiv = mathDivOrCustom(equationToProve);
  const nextEquationToProveDiv = mathDivOrCustom(nextEquationToProve);
  return {
    type: "exercise",
    label: mathSpanOrCustom(equationToProve),
    problem: <>
      {problemPrelude}
      <p>Use induction to show that</p>
      {equationToProveDiv}
      <p>
        {(materializedExtraOptions.baseCase === 0 || materializedExtraOptions.baseCase === 1) ? <>for </> : <><b>assuming that {mathSpan("n #geq " + materializedExtraOptions.baseCase)}</b>, </>}
        {materializedExtraOptions.baseCase === 0 ? isNat0("n") : isNatPlus("n")}.
      </p>
      {materializedExtraOptions.problemFooter}
    </>,
    answer: <>
      <p>Base case ({mathSpan("n = " + materializedExtraOptions.baseCase)}):</p>
      {mathDivOrCustom(baseCaseProof)}
      <p>Induction step: Assume that</p>
      {equationToProveDiv}
      <p>(induction hypothesis). Then show that</p>
      {nextEquationToProveDiv}
      <p>Proof:</p>
      {nextEquationProof.map(mathDivOrCustom)}
      {materializedExtraOptions.solutionFooter}
    </>,
  };
}

