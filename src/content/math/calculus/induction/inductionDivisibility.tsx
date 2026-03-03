import type {Exercise, Collection} from "../../../../framework/content.tsx";
import {mathDiv, mathSpan} from "../../../../framework/technical-components/Math/Math.tsx";
import {isNatPlus, isNatPlusWithoutDefinition} from "../../util/math-atoms.tsx";
import type {ReactNode} from "react";
import {mathDivOrCustom, mathSpanOrCustom} from "../../util/math-util.tsx";

interface ExtraOptions {
  useDivsForDividend: boolean;
  problemPrelude?: ReactNode | null | undefined;
  solutionFooter?: ReactNode | null | undefined;
}

const defaultExtraOptions: ExtraOptions = {
  useDivsForDividend: false,
  problemPrelude: <></>,
  solutionFooter: <></>,
};

function standardDivisibilityContentItem(
    dividendFormula: string | ReactNode,
    nextDividendFormula: string | ReactNode,
    divisorFormula: string | number,
    baseCaseProof: string | ReactNode, // a string will be fed to mathDiv, a ReactNode will be used as-is
    inductionStepProofFormulas: (string | ReactNode)[],
    inductionStepConclusion: ReactNode,
    extraOptions?: Partial<ExtraOptions>,
): Exercise {
  const materializedExtraOptions: ExtraOptions = {...defaultExtraOptions, ...extraOptions};
  const dividendMapper = materializedExtraOptions.useDivsForDividend ? mathDivOrCustom : mathSpanOrCustom;
  const mappedDividend = dividendMapper(dividendFormula);
  const mappedNextDividend = dividendMapper(nextDividendFormula);
  const divisorSpan = mathSpan(String(divisorFormula));
  return {
    type: "exercise",
    label: <>{mathSpan(String(divisorFormula))} | {mathSpanOrCustom(dividendFormula)}</>,
    problem: <>
      {materializedExtraOptions.problemPrelude}
      Use induction to show that {mappedDividend} is divisible by {divisorSpan} for {isNatPlus("n")}.
    </>,
    answer: <>
      <p>
        Base case ({mathSpan("n = 1")}):
      </p>
      {mathDivOrCustom(baseCaseProof)}
      <p>
        which is obviously divisible by {divisorSpan}.
      </p>
      <p>
        Induction step: Assume that {mappedDividend} is divisible by {divisorSpan} (induction hypothesis). Then show
        that {mappedNextDividend} is divisible by {divisorSpan} too.
      </p>
      <p>
        Proof:
      </p>
      {inductionStepProofFormulas.map(mathDivOrCustom)}
      {inductionStepConclusion}
      {materializedExtraOptions.solutionFooter}
  </>,
  };
}

function firstSecondPartDivisible(divisorFormula: string | number): ReactNode {
  const divisorSpan = mathSpan(String(divisorFormula));
  return <div>The first part is divisible by {divisorSpan} by the induction hypothesis. The second part has an obvious
    factor of {divisorSpan}. Therefore, the sum is divible by {divisorSpan} too.</div>;
}

export const inductionDivisibilityBeginnerItems: Exercise[] = [
  standardDivisibilityContentItem(
      "n^2+n",
      "(n+1)^2+(n+1)",
      2,
      "n^2+n = 1^2+1 = 1+1 = 2",
      [
        "(n+1)^2 + (n+1)",
        "= n^2 + 2n + 1 + n + 1",
        "= n^2 + 3n + 2",
        "= (n^2 + n) + (2n + 2)",
        "= (n^2 + n) + 2#cdot (n + 1)",
      ],
      firstSecondPartDivisible(2),
  ),
  standardDivisibilityContentItem(
      "n^3+2n",
      "(n+1)^3 + 2#cdot (n+1)",
      3,
      "n^3+2n = 1^3+2#cdot 1 = 1 + 2 = 3",
      [
        "(n+1)^3 + 2#cdot (n+1)",
        "= (n^3 + 3n^2 + 3n + 1) + (2n + 2)",
        <>(rearranging the terms)</>,
        "= (n^3 + 2n) + (3n^2 + 3n + 3)",
        "= (n^3 + 2n) + 3#cdot (n^2 + n + 1)",
      ],
      firstSecondPartDivisible(3),
  ),
  standardDivisibilityContentItem(
      "4n^3-n",
      "4(n+1)^3-(n+1)",
      3,
      "4n^3-n = 4#cdot 1^3 - 1 = 4#cdot 1 - 1 = 4 - 1 = 3",
      [
        "4(n+1)^3-(n+1)",
        "= 4#cdot (n^3 + 3n^2 + 3n + 1) - n - 1",
        "= 4n^3 + 12n^2 + 12n + 4 - n - 1",
        <>(rearranging the terms)</>,
        "= (4n^3 - n) + (12n^2 + 12n + 3)",
        "= (4n^3 - n) + 3#cdot (4n^2 + 4n + 1)",
      ],
      firstSecondPartDivisible(3),
  ),
  standardDivisibilityContentItem(
      "n^3-n",
      "(n+1)^3 - (n+1)",
      6,
      "n^3-n = 1^3-1 = 0",
      [
        "(n+1)^3 - (n+1)",
        "= (n^3 + 3n^2 + 3n + 1) - (n + 1)",
        <>(rearranging the terms)</>,
        "= (n^3 - n) + (3n^2 + 3n)",
        "= (n^3 - n) + 3n(n + 1)",
      ],
      <div>The first part is divisible by 6 by the induction hypothesis. The second part is divisible by 6 because
        of the obvious factor of {mathSpan("3")}, as well as the fact that either {mathSpan("n")} or
        {mathSpan("(n+1)")} is even.</div>
  ),
];

export const inductionDivisibility: Collection = {
  id: "divisibility",
  name: "Divisibility",
  type: "collection",
  exercises: [
    standardDivisibilityContentItem(
        "2n^3+3n^2+n",
        "2(n+1)^3+3(n+1)^2+(n+1)",
        6,
        "2n^3+3n^2+n = 2#cdot 1^3 + 3#cdot 1^2 + 1 = 2 + 3 + 1 = 6",
        [
          "2(n+1)^3+3(n+1)^2+(n+1)",
          "= 2(n^3 + 3n^2 + 3n + 1) + 3(n^2 + 2n + 1) + (n + 1)",
          "= (2n^3 + 6n^2 + 6n + 2) + (3n^2 + 6n + 3) + (n + 1)",
          <>(rearranging the terms)</>,
          "= (2n^3 + 3n^2 + n) + (6n^2 + 6n + 2 + 6n + 3 + 1)",
          "= (2n^3 + 3n^2 + n) + (6n^2 + 12n + 6)",
          "= (2n^3 + 3n^2 + n) + 6(n^2 + 2n + 1)",
        ],
        firstSecondPartDivisible(6),
    ),
    standardDivisibilityContentItem(
        "n^3-6n^2+14n",
        "(n+1)^3-6(n+1)^2+14(n+1)",
        3,
        "n^3-6n^2+14n = 1^3-6#cdot 1^2+14#cdot 1 = 1 - 6 + 14 = 9",
        [
          "(n+1)^3-6(n+1)^2+14(n+1)",
          "= (n^3 + 3n^2 + 3n + 1) - 6(n^2 + 2n + 1) + 14(n+1)",
          "= (n^3 + 3n^2 + 3n + 1) + (-6n^2 - 12n - 6) + (14n + 14)",
          <>(rearranging the terms)</>,
          "= (n^3 - 6n^2 + 14n) + (3n^2 + 3n + 1 - 12n - 6 + 14)",
          "= (n^3 - 6n^2 + 14n) + (3n^2 + - 9n + 9)",
          "= (n^3 - 6n^2 + 14n) + 3(n^2 + - 3n + 3)",
        ],
        firstSecondPartDivisible(3),
    ),
    standardDivisibilityContentItem(
        "3^n - 3",
        "3^{n+1} - 3",
        6,
        "3^n - 3 = 3^1 - 3 = 3 - 3 = 0",
        [
          "3^{n+1} - 3",
          "= (3#cdot 3^n) + (6 - 9)",
          "= (3#cdot 3^n - 9) + 6",
          "= 3#cdot (3^n - 3) + 6",
        ],
        firstSecondPartDivisible(6),
    ),
    standardDivisibilityContentItem(
        "n^3 + (n+1)^3 + (n+2)^3",
        "(n+1)^3 + ((n+1)+1)^3 + ((n+1)+2)^3",
        9,
        <>
          {mathDiv("n^3 + (n+1)^3 + (n+2)^3")}
          {mathDiv("= 1^3 + (1+1)^3 + (1+2)^3")}
          {mathDiv("= 1 + 2^3 + 3^3")}
          {mathDiv("= 1 + 8 + 27")}
          {mathDiv("= 36")}
        </>,
        [
          "(n+1)^3 + ((n+1)+1)^3 + ((n+1)+2)^3",
          "= (n+1)^3 + (n+2)^3 + (n+3)^3",
          "= (n+1)^3 + (n+2)^3 + (n^3 + 9n^2 + 27n + 27)",
          "= n^3 + (n+1)^3 + (n+2)^3 + (9n^2 + 27n + 27)",
          "= (n^3 + (n+1)^3 + (n+2)^3) + 9#cdot (n^2 + 3n + 3)",
        ],
        firstSecondPartDivisible(9),
        {useDivsForDividend: true},
    ),
    standardDivisibilityContentItem(
        "7^{2n}-2^n",
        "7^{2(n+1)}-2^{n+1}",
        47,
        "7^{2n}-2^n = 7^2-2^1 = 49 - 2 = 47",
        [
          "7^{2(n+1)}-2^{n+1}",
          "= 7^{2n+2}-2^{n+1}",
          "= 49#cdot 7^{2n} - 2#cdot 2^n",
          "= 2#cdot 7^{2n} - 2#cdot 2^n + 47#cdot 7^{2n}",
          "= 2#cdot (7^{2n} - 2^n) + 47#cdot 7^{2n}",
        ],
        firstSecondPartDivisible(47),
    ),
    standardDivisibilityContentItem(
        "5^n + 7",
        "5^{n+1} + 7",
        4,
        "5^n + 7 = 5^1 + 7 = 5 + 7 = 12",
        [
          "5^{n+1} + 7",
          "= 5#cdot 5^n + 7",
          "= (5^n + 7) + 4#cdot 5^n",
        ],
        firstSecondPartDivisible(4),
    ),
    standardDivisibilityContentItem(
        "5^{2n} - 3^{2n}",
        "5^{2(n + 1)} - 3^{2(n + 1)}",
        8,
        "5^{2#cdot 1} - 3^{2#cdot 1} = 5^2 - 3^2 = 25 - 9 = 16",
        [
          "5^{2(n + 1)} - 3^{2(n + 1)}",
          "= 5^{2n + 2} - 3^{2n + 2}",
          "= 25#cdot 5^{2n} - 9#cdot 3^{2n}",
          "= 9#cdot 5^{2n} - 9#cdot 3^{2n} + 16#cdot 5^{2n}",
          "= 9#cdot (5^{2n} - 3^{2n}) + 16#cdot 5^{2n}",
        ],
        firstSecondPartDivisible(8),
    ),
    standardDivisibilityContentItem(
        "2^{3n} + 13",
        "2^{3(n + 1)} + 13",
        7,
        "2^{3n} + 13 = 2^{3#cdot 1} + 13 = 2^3 + 13 = 8 + 13 = 21",
        [
          "2^{3(n + 1)} + 13",
          "= 2^{3n + 3} + 13",
          "= 8#cdot 2^{3n} + 13",
          "= 1#cdot 2^{3n} + 13 + 7#cdot 2^{3n}",
          "= (2^{3n} + 13) + 7#cdot 2^{3n}",
        ],
        firstSecondPartDivisible(7),
    ),
    standardDivisibilityContentItem(
        "a^n-1",
        "a^{n+1}-1",
        "a-1",
        "a^n-1 = a^1-1 = a-1",
        [
          "a^{n+1}-1",
          "= a#cdot a^n - 1",
          "= a#cdot a^n - a + a - 1",
          "= a#cdot (a^n - 1) + (a - 1)",
        ],
        firstSecondPartDivisible("(a-1)"),
        {
          problemPrelude: <>Let {isNatPlusWithoutDefinition("a")}, and {mathSpan("a>1")}. </>,
        },
    ),
    standardDivisibilityContentItem(
        "n^7 - n",
        "(n+1)^7 - (n+1)",
        7,
        "n^7 - n = 1^7 - 1 = 1 - 1 = 0",
        [
          "(n+1)^7 - (n+1)",
          "= (n^7 + 7n^6 + 21n^5 + 35n^4 + 35n^3 + 21n^2 + 7n + 1) - (n + 1)",
          "= (n^7 - n) + (7n^6 + 21n^5 + 35n^4 + 35n^3 + 21n^2 + 7n + 1 - 1)",
          "= (n^7 - n) + 7(n^6 + 3n^5 + 5n^4 + 5n^3 + 3n^2 + n)",
        ],
        firstSecondPartDivisible(7),
    ),
    standardDivisibilityContentItem(
        "3^{n+1} + 2^{3n+1}",
        "3^{(n+1)+1} + 2^{3(n+1)+1}",
        5,
        "3^{n+1} + 2^{3n+1} = 3^{1+1} + 2^{3+1} = 3^2 + 2^4 = 9 + 16 = 25",
        [
          "3^{(n+1)+1} + 2^{3(n+1)+1}",
          "= 3^{n+2} + 2^{3n+4}",
          "= 3#cdot 3^{n+1} + 8#cdot 2^{3n+1}",
          "= 3#cdot 3^{n+1} + 3#cdot 2^{3n+1} + 5#cdot 2^{3n+1}",
          "= 3#cdot (3^{n+1} + 2^{3n+1}) + 5#cdot 2^{3n+1}",
        ],
        firstSecondPartDivisible(5),
    ),
    standardDivisibilityContentItem(
        "3n^5 + 5n^3 + 7n",
        "3(n + 1)^5 + 5(n + 1)^3 + 7(n + 1)",
        15,
        "3n^5 + 5n^3 + 7n = 3#cdot 1^5 + 5#cdot 1^3 + 7#cdot 1 = 3 + 5 + 7 = 15",
        [
          "3(n + 1)^5 + 5(n + 1)^3 + 7(n + 1)",
          "= 3(n^5 + 5n^4 + 10n^3 + 10n^2 + 5n + 1) ## + 5(n^3 + 3n^2 + 3n + 1) + 7(n + 1)",
          "= (3n^5 + 15n^4 + 30n^3 + 30n^2 + 15n + 3) ## + (5n^3 + 15n^2 + 15n + 5) + (7n + 7)",
          <>(rearranging and combining the terms)</>,
          "= (3n^5 + 5n^3 + 7n) + (15n^4 + 30n^3 + 45n^2 + 30n + 15)",
          "= (3n^5 + 5n^3 + 7n) + 15(n^4 + 2n^3 + 3n^2 + 2n + 1)",
        ],
        firstSecondPartDivisible(15),
        {useDivsForDividend: true},
    ),
    standardDivisibilityContentItem(
        "3^{2n} + 7",
        "3^{2(n+1)} + 7",
        8,
        "3^{2n} + 7 = 3^2 + 7 = 9 + 7 = 16",
        [
          "3^{2(n+1)} + 7",
          "= 3^{2n+2} + 7",
          "= 9#cdot 3^{2n} + 7",
          "= (3^{2n} + 7) + 8#cdot 3^{2n}",
        ],
        firstSecondPartDivisible(8),
    ),
    standardDivisibilityContentItem(
        "n^3 + 5n",
        "(n + 1)^3 + 5(n + 1)",
        6,
        "n^3 + 5n = 1^3 + 5#cdot 1 = 1 + 5 = 6",
        [
          "(n + 1)^3 + 5(n + 1)",
          "= (n^3 + 3n^2 + 3n + 1) + (5n + 5)",
          "= (n^3 + 5n) + (3n^2 + 3n + 1 + 5)",
          "= (n^3 + 5n) + 3(n^2 + n + 2)",
        ],
        <div>The first part is divisible by 6 by the induction hypothesis. The second part is obviously divisible by
          3, and it is also even because {mathSpan("n^2")} and {mathSpan("n")} are either both odd or both even.</div>
    ),
    standardDivisibilityContentItem(
        "10^n + 3#cdot 4^{n + 2} + 5",
        "10^{n + 1} + 3#cdot 4^{(n + 1) + 2} + 5",
        9,
        <>
          {mathDiv("10^n + 3#cdot 4^{n + 2} + 5")}
          {mathDiv("= 10^1 + 3#cdot 4^{1 + 2} + 5")}
          {mathDiv("= 10 + 3#cdot 4^3 + 5")}
          {mathDiv("= 15 + 3#cdot 64")}
          {mathDiv("= 15 + 192")}
          {mathDiv("= 207")}
        </>,
        [
          "10^{n + 1} + 3#cdot 4^{(n + 1) + 2} + 5",
          "= 10#cdot 10^n + 4#cdot 3#cdot 4^{n + 2} + 5",
          "= 1#cdot 10^n + 9#cdot 10^n + 1#cdot 3#cdot 4^{n + 2} + 3#cdot 3#cdot 4^{n + 2} + 5",
          <>(rearranging the terms)</>,
          "= 10^n + 3#cdot 4^{n + 2} + 5 + 9#cdot 10^n + 9#cdot 4^{n + 2}",
          "= (10^n + 3#cdot 4^{n + 2} + 5) + 9(10^n + 4^{n + 2})",
        ],
        firstSecondPartDivisible(9),
        {useDivsForDividend: true}
    ),
    standardDivisibilityContentItem(
        "4^n + 15n - 1",
        "4^{n+1} + 15(n+1) - 1",
        9,
        "4^n + 15n - 1 = 4^1 + 15 - 1 = 18",
        [
          "4^{n+1} + 15(n+1) - 1",
          "= 4#cdot 4^n + 15n + 15 - 1",
          "= 4#cdot 4^n + 15n + 14",
          "= 4#cdot 4^n + 60n - 45n + 18 - 4",
          "= 4#cdot 4^n + 60n - 4 - 45n + 18",
          "= 4#cdot (4^n + 15n - 1) + 9#cdot (-5n + 2)",
        ],
        firstSecondPartDivisible(9),
    ),
    standardDivisibilityContentItem(
        "5^{2n} + 24n - 1",
        "5^{2(n + 1)} + 24(n + 1) - 1",
        48,
        "5^{2n} + 24n - 1 = 5^2 + 24 - 1 = 25 + 24 - 1 = 48",
        [
          "5^{2(n + 1)} + 24(n + 1) - 1",
          "= 5^{2n + 2} + 24n + 24 - 1",
          "= 25#cdot 5^{2n} + 24n - 1 + 24",
          "= 1#cdot 5^{2n} + 24#cdot 5^{2n} + 24n - 1 + 24",
          <>(rearranging the terms)</>,
          "= 5^{2n} + 24n - 1 + 24#cdot 5^{2n} + 24",
          "= (5^{2n} + 24n - 1) + 24#cdot(5^{2n} + 1)",
        ],
        <div>The first part is divisible by 48 by the induction hypothesis. The second part has an obvious factor of
          24, and {mathSpan("(1 + 5^{2n})")} is even, so the second part (and thus the sum) is divisible by 48 too.</div>
    ),
    standardDivisibilityContentItem(
        "11^{n+1} + 12^{2n-1}",
        "11^{(n+1)+1} + 12^{2(n+1)-1}",
        133,
        "11^{n+1} + 12^{2n-1} = 11^{1+1} + 12^{2-1} ## = 11^2 + 12^1 = 121 + 12 = 133",
        [
          "11^{(n+1)+1} + 12^{2(n+1)-1}",
          "11^{n+2} + 12^{2n+1}",
          "11#cdot 11^{n+1} + 144#cdot 12^{2n-1}",
          "144#cdot 11^{n+1} + 144#cdot 12^{2n-1} - 133#cdot 11^{n+1}",
          "144#cdot (11^{n+1} + 12^{2n-1}) - 133#cdot 11^{n+1}",
        ],
        firstSecondPartDivisible(133),
        {useDivsForDividend: true}
    ),
    standardDivisibilityContentItem(
        "(2a-1)^n - 1",
        "(2a-1)^{n+1} - 1",
        2,
        "(2a-1)^n - 1 = (2a-1)^1 - 1 = 2a - 1 - 1 = 2(a - 1)",
        [
          "(2a-1)^{n+1} - 1",
          "= (2a-1)#cdot (2a-1)^n - 1",
          "= (2a-1)#cdot (2a-1)^n - 1 + (2a-1) - (2a-1)",
          "= (2a-1)#cdot (2a-1)^n - (2a-1) - 1 + (2a-1)",
          "= (2a-1)#cdot ((2a-1)^n-1) + 2a - 2",
          "= (2a-1)#cdot ((2a-1)^n-1) + 2(a - 1)",
        ],
        firstSecondPartDivisible(2),
        {
          problemPrelude: <>Let {isNatPlusWithoutDefinition("a")}. </>,
        }
    ),
    standardDivisibilityContentItem(
        "a^{n+1} + (a+1)^{2n-1}",
        "a^{(n+1)+1} + (a+1)^{2(n+1)-1}",
        "(a^2+a+1)",
        <>
          {mathDiv("a^{n+1} + (a+1)^{2n-1}")}
          {mathDiv("= a^{1+1} + (a+1)^{2-1}")}
          {mathDiv("= a^2 + (a+1)^1")}
          {mathDiv("= a^2+a+1")}
        </>,
        [
          "a^{(n+1)+1} + (a+1)^{2(n+1)-1}",
          "= a^{n+2} + (a+1)^{2n+1}",
          "= a#cdot a^{n+1} + (a+1)^2(a+1)^{2n-1}",
          "= a#cdot a^{n+1} + (a^2+2a+1)(a+1)^{2n-1}",
          "= a#cdot a^{n+1} + (a^2+a+1)(a+1)^{2n-1} + a(a+1)^{2n-1}",
          <>(rearranging the terms)</>,
          "= a#cdot (a^{n+1} + (a+1)^{2n-1}) + (a^2+a+1)(a+1)^{2n-1}",
        ],
        firstSecondPartDivisible("(a^2+a+1)"),
        {
          useDivsForDividend: true,
          problemPrelude: <>Let {isNatPlusWithoutDefinition("a")}. </>,
        }
    ),
  ],
};
