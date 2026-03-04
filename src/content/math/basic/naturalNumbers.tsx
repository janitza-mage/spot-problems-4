import type {Collection, Exercise} from "../../../framework/content.tsx";
import {mathDiv, mathSpan} from "../../../framework/technical-components/Math/Math.tsx";
import {CheatSheets} from "../../../framework/technical-components/CheatSheet/CheatSheets.tsx";
import {CheatSheet} from "../../../framework/technical-components/CheatSheet/CheatSheet.tsx";
import type {ReactNode} from "react";

const naturalNumbersDefinitionCheatSheet = <CheatSheet label={"Natural Numbers -- Definition"}>
  {mathDiv("#mathbb{N}^+ = {1, 2, 3, ...}")}
  {mathDiv("#mathbb{N}^+_0 = {0, 1, 2, 3, ...}")}
  <p>
    When working on problems from other sources, watch out for whether the definition of the natural numbers include
    zero.
  </p>
  <p>
    The basic arithmetic operations ({mathSpan("+")}, {mathSpan("-")}, {mathSpan("#cdot")} and {mathSpan("#div")}
    are defined on the natural numbers. {mathSpan("-")} and {mathSpan("#div")} are not <i>closed</i>, that is,
    they are not defined for all operands: Negative numbers and fractions are not natural numbers, and division by
    zero is not defined.
  </p>
</CheatSheet>;
  
const exponentiationCheatSheet = <CheatSheet label={"Exponentiation"}>
  <p>
    Exponentiation using two natural numbers is defined as usual, and with the usual rules:
  </p>
  {mathDiv("a^n = #underbrace{a #cdot a #cdot #dots #cdot a}_{n#text{ times}}")}
  {mathDiv("a^0 = 1 #text{ for } a #neq 0")}
  {mathDiv("0^0 #text{ is not defined }")}
  {mathDiv("a^{n + m} = a^n #cdot a^m")}
  {mathDiv("(a^n)^m = a^{n #cdot m}")}
</CheatSheet>;

const factorialCheatSheet = <CheatSheet label={"Factorial"}>
  <p>
    The factorial of a natural number is defined as:
  </p>
  {mathDiv("n! = 1 #cdot 2 #cdot #dots #cdot n")}
  <p>
    Rules:
  </p>
  {mathDiv("0! = 1")}
  {mathDiv("n! #cdot (n + 1) = (n + 1)!")}
</CheatSheet>;

const intro1 = <CheatSheets>
  {naturalNumbersDefinitionCheatSheet}
</CheatSheets>;

const intro2 = <CheatSheets>
  {naturalNumbersDefinitionCheatSheet}
  {exponentiationCheatSheet}
</CheatSheets>;

const intro3 = <CheatSheets>
  {naturalNumbersDefinitionCheatSheet}
  {factorialCheatSheet}
</CheatSheets>;

function solve(intro: ReactNode, label: ReactNode, terms: string[], results: string[]): Exercise {
  return {
    type: "exercise",
    label,
    intro,
    problem: <>
      <p>
        Solve:
      </p>
      {terms.map(term => mathDiv(`${term} = #underline{#hspace{2cm}}`))}
    </>,
    answer: <>
      {terms.map((term, i) => mathDiv(`${term} = ${results[i]}`))}
    </>,
  };
}

function solveExp(label: ReactNode, terms: string[], results: string[]): Exercise {
  return solve(intro2, label, terms, results);
}

function solveFac(label: ReactNode, terms: string[], results: string[]): Exercise {
  return solve(intro3, label, terms, results);
}

function rewriteExp(term: string, other: string | null): Exercise {
  return {
    type: "exercise",
    label: <>Rewrite {mathSpan(term)}</>,
    intro: intro2,
    problem: <>
      <p>
        Is it possible to write {mathSpan("(" + term + ")")} in another way? Which?
      </p>
    </>,
    answer: other ? <>
      <p>Yes:</p>
      {mathDiv(term + " = " + other)}
    </> : <>
      No, at least not without any further information about the value of those variables.
    </>,
  };
}

export const naturalNumbers: Collection = {
  id: "naturalNumbers",
  name: "Natural Numbers",
  type: "collection",
  exercises: [
    {
      type: "exercise",
      label: "Natural Numbers -- Definition",
      intro: intro1,
      problem: <>
        <p>
          Which of the following are natural numbers in {mathSpan("#mathbb{N}^+")}?
          Which are in {mathSpan("#mathbb{N}^+_0")}?
        </p>
        <p>
          0, 1, 2, 3, 100^100, -1, -2, -100^100, 0.5, -0.5
        </p>
      </>,
      answer: <>
        <p>
          These are both in {mathSpan("#mathbb{N}^+")} and {mathSpan("#mathbb{N}^+_0")}:
        </p>
        <p>
          1, 2, 3, 100^100
        </p>
        <p>
          These are neither in {mathSpan("#mathbb{N}^+")} nor in {mathSpan("#mathbb{N}^+_0")}:
        </p>
        <ul>
          <li>-1, -2, -100^100 (because they are negative, and the natural numbers do not include negative numbers</li>
          <li>0.5, -0.5 (because they are not integers, and the natural numbers do not include any non-integers</li>
        </ul>
        <p>
          The number 0 is in {mathSpan("#mathbb{N}^+_0")}, but not in {mathSpan("#mathbb{N}^+")}.
        </p>
      </>,
    },
    solveExp("Exponentiation (1)", ["1^1", "2^1", "3^1", "4^1"], ["1", "2", "3", "4"]),
    solveExp("Exponentiation (2)", ["1^2", "2^2", "3^2", "4^2"], ["1", "4", "9", "16"]),
    solveExp("Exponentiation (3)", ["1^3", "2^3", "3^3", "4^3"], ["1", "8", "27", "64"]),
    solveExp("Exponentiation (4)", ["1^0", "2^0", "3^0", "4^0"], ["1", "1", "1", "1"]),
    solveExp("Exponentiation (5)", ["10^0", "10^1", "10^2", "10^3", "10^4"], ["1", "10", "100", "1000", "10000"]),
    solveExp("Exponentiation (6)", ["0^1", "0^2", "0^3", "0^4"], ["0", "0", "0", "0"]),
    rewriteExp("a^n + b^n", null),
    rewriteExp("a^n - b^n", null),
    rewriteExp("a^n #cdot b^n", "(ab)^n"),
    rewriteExp("#frac{a^n}{b^n}", "(#frac{a}{b})^n"),
    rewriteExp("a^p + a^q", "a^p(1 + a^{q-p})"),
    rewriteExp("a^p - a^q", "a^p(1 - a^{q-p})"),
    rewriteExp("a^p #cdot a^q", "a^{p+q}"),
    rewriteExp("#frac{a^p}{a^q}", "a^{p-q}"),
    rewriteExp("(a^p)^q", "a^{p#cdot q}"),
    rewriteExp("a^{p^q}", null),
    solveFac("Factorial",
        ["0!", "1!", "2!", "3!", "4!"],
        ["1", "1", "1#cdot 2 = 2", "1#cdot 2#cdot 3 = 6", "1#cdot 2#cdot 3#cdot 4 = 24"]
    ),
  ],
};
