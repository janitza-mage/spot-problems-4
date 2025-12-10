/*
Utilities to prove formulas using induction, e.g. sums, products, ...
 */

import type {ReactNode} from "react";
import {mathDivOrCustom} from "../../util/math-util.tsx";
import type {ContentItem} from "../../../../framework/content.tsx";
import {isNatPlus} from "../../util/math-atoms.tsx";
import {mathSpan} from "../../../../framework/technical-components/Math/Math.tsx";

export interface StandardFomulaInductionItemExtraOptions {
  solutionFooter?: ReactNode | null | undefined;
  baseCase: number | string,
}

const defaultExtraOptions: StandardFomulaInductionItemExtraOptions = {
  solutionFooter: <></>,
  baseCase: 1,
};

export function observeThat(...formulas: (string | ReactNode)[]) {
  return <>
    <p>Observe that</p>
    {formulas.map(mathDivOrCustom)}
  </>;
}

export function standardFomulaInductionItem(
    problemPrelude: ReactNode, // not in ExtraOptions because in this section we need it almost everywhere
    equationToProve: string | ReactNode,
    baseCaseProof: string | ReactNode, // a string will be fed to mathDiv, a ReactNode will be used as-is
    nextEquationToProve: string | ReactNode,
    nextEquationProof: (string | ReactNode)[],
    extraOptions?: StandardFomulaInductionItemExtraOptions | null | undefined,
): ContentItem {
  const materializedExtraOptions: StandardFomulaInductionItemExtraOptions = {...defaultExtraOptions, ...extraOptions};
  const equationToProveDiv = mathDivOrCustom(equationToProve);
  const nextEquationToProveDiv = mathDivOrCustom(nextEquationToProve);
  return {
    problem: <>
      {problemPrelude}
      <p>Use induction to show that</p>
      {equationToProveDiv}
      <p>
        {materializedExtraOptions.baseCase === 1 ? <>for </> : <><b>assuming that {mathSpan("n #geq " + materializedExtraOptions.baseCase)}</b>, </>}
        {isNatPlus("n")}.
      </p>
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

