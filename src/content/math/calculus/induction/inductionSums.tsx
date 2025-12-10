import type {ExerciseNode} from "../../../../framework/content.tsx";
import {mathDiv, mathSpan} from "../../../../framework/technical-components/Math/Math.tsx";
import {isNatPlus, isNatPlusWithoutDefinition} from "../../util/math-atoms.tsx";
import {observeThat, standardFomulaInductionItem} from "./formula.tsx";

export const inductionSums: ExerciseNode = {
  id: "sums",
  name: "Sums",
  type: "exercise",
  contentItems: [
    {
      problem: <>
        Use induction to show that the sum of the first {mathSpan("n")} positive integers is equal to
        {mathSpan("#frac{n(n+1)}{2}")} for {isNatPlus("n")}.
      </>,
      answer: <>
        <p>
          The sum of the first {mathSpan("n")} positive integers is written as {mathSpan("#sum_{i=1}^ni")}. The problem
          then reads:
        </p>
        {mathDiv("#sum_{i=1}^ni = #frac{n(n+1)}{2}")}
        <p>
          Base case ({mathSpan("n = 1")}):
        </p>
        {mathDiv("#sum_{i=1}^ni = #sum_{i=1}^1i = 1 = #frac{1(1+1)}{2} = #frac{n(n+1)}{2}")}
        <p>
          Induction step: Assume that
        </p>
        {mathDiv("#sum_{i=1}^ni = #frac{n(n+1)}{2}")}
        <p>
          (induction hypothesis). Then show that
        </p>
        {mathDiv("#sum_{i=1}^{n+1}i = #frac{(n+1)(n+2)}{2}")}
        <p>
          Proof:
        </p>
        {mathDiv("#sum_{i=1}^{n+1}i")}
        {mathDiv("= (n+1) + #sum_{i=1}^ni")}
        {mathDiv("= (n+1) + #frac{n(n+1)}2")}
        {mathDiv("= #frac{2(n+1)}2 + #frac{n(n+1)}2")}
        {mathDiv("= #frac{2(n+1) + n(n+1)}2")}
        {mathDiv("= #frac{(n+1)(n+2)}2")}
      </>,
    },
    {
      problem: <>
        Use induction to show that the sum of the first {mathSpan("n")} <b>odd</b> positive integers is equal
        to {mathSpan("n^2")} for {isNatPlus("n")}.
      </>,
      answer: <>
        <p>
          The sum of the first {mathSpan("n")} odd positive integers is written
          as {mathSpan("#sum_{i=1}^n(2i-1)")}. The problem then reads:
        </p>
        {mathDiv("#sum_{i=1}^{n}(2i-1) = n^2")}
        <p>
          Base case ({mathSpan("n = 1")}):
        </p>
        {mathDiv("#sum_{i=1}^n(2i-1) = #sum_{i=1}^1(2i-1) = 2#cdot 1 - 1 = 1 = 1^2 = n^2")}
        <p>
          Induction step: Assume that
        </p>
        {mathDiv("#sum_{i=1}^{n}(2i-1) = n^2")}
        <p>
          (induction hypothesis). Then show that
        </p>
        {mathDiv("#sum_{i=1}^{n+1}(2i-1) = (n+1)^2")}
        <p>
          Proof:
        </p>
        {mathDiv("#sum_{i=1}^{n+1}(2i-1)")}
        {mathDiv("= (2(n+1)-1) + #sum_{i=1}^n(2i-1)")}
        {mathDiv("= (2n+1) + #sum_{i=1}^n(2i-1)")}
        {mathDiv("= 2n + 1 + n^2")}
        {mathDiv("= (n+1)^2")}
      </>,
    },
    standardFomulaInductionItem(
        observeThat("1^2 + 2^2 + 3^2 + ... + n^2 = #sum_{i=1}^ni^2"),
        "#sum_{i=1}^ni^2 = #frac{n(n+1)(2n+1)}6",
        "#sum_{i=1}^ni^2 = #sum_{i=1}^1i^2 = 1^2 = 1 = #frac{1#cdot 2#cdot 3}6 = #frac{n(n+1)(2n+1)}6",
        <>
          {mathDiv("#sum_{i=1}^{n+1}i^2 = #frac{(n+1)((n+1)+1)(2(n+1)+1)}6")}
          {mathDiv("= #frac{(n+1)(n+2)(2n+3)}6")}
        </>,
        [
          "#sum_{i=1}^{n+1}i^2",
          "= (n+1)^2 + #sum_{i=1}^ni^2",
          <div>using the induction hypothesis:</div>,
          "= (n+1)^2 + #frac{n(n+1)(2n+1)}6",
          "= #frac{6(n+1)^2}6 + #frac{n(n+1)(2n+1)}6",
          "= #frac{6(n+1)^2 + n(n+1)(2n+1)}6",
          "= #frac{(n+1)(6(n+1) + n(2n+1))}6",
          "= #frac{(n+1)(6n + 6 + 2n^2 + n))}6",
          "= #frac{(n+1)(2n^2 + 7n + 6))}6",
          "= #frac{(n+1)(n+2)(2n+3)}6",
        ],
    ),
    standardFomulaInductionItem(
        observeThat("1^3 + 2^3 + 3^3 + ... + n^3 = #sum_{i=1}^ni^3"),
        "#sum_{i=1}^ni^3 = #frac{n^2(n+1)^2}4",
        "#sum_{i=1}^ni^3 = #sum_{i=1}^1i^3 = 1^3 = 1 = #frac44 = #frac{1^2(1+1)^2}4 = #frac{n^2(n+1)^2}4",
        "#sum_{i=1}^{n+1}i^3 = #frac{(n+1)^2(n+2)^2}4",
        [
          "#sum_{i=1}^{n+1}i^3",
          "= (n+1)^3 + #sum_{i=1}^ni^3",
          <div>using the induction hypothesis:</div>,
          "= (n+1)^3 + #frac{n^2(n+1)^2}4",
          "= #frac{4(n+1)^3}4 + #frac{n^2(n+1)^2}4",
          "= #frac{4(n+1)^3 + n^2(n+1)^2}4",
          "= #frac{(n+1)^2(4(n+1) + n^2)}4",
          "= #frac{(n+1)^2(n^2 + 4n + 4)}4",
          "= #frac{(n+1)^2(n+2)^2}4",
        ],
    ),
    standardFomulaInductionItem(
        observeThat("1^4 + 2^4 + 3^4 + ... + n^4 = #sum_{i=1}^ni^4"),
        "#sum_{i=1}^ni^4 = #frac{n(n+1)(2n+1)(3n^2+3n-1)}{30}",
        <>
          {mathDiv("#sum_{i=1}^ni^4 = #sum_{i=1}^1i^4 = 1^4 = 1 = #frac{30}{30}")}
          {mathDiv("= #frac{1#cdot 2#cdot 3#cdot 5}{30}")}
          {mathDiv("= #frac{1(1+1)(2#cdot 1+1)(3#cdot 1^2+3#cdot 1-1)}{30}")}
          {mathDiv("= #frac{n(n+1)(2n+1)(3n^2+3n-1)}{30}")}
        </>,
        <>
          {mathDiv("#sum_{i=1}^{n+1}i^4 = #frac{(n+1)((n+1)+1)(2(n+1)+1)(3(n+1)^2+3(n+1)-1)}{30}", 0.8)}
          {mathDiv("= #frac{(n+1)(n+2)(2n+3)(3(n^2+2n+1)+3n+2)}{30}", 0.8)}
          {mathDiv("= #frac{(n+1)(n+2)(2n+3)(3n^2+6n+3+3n+2)}{30}", 0.8)}
          {mathDiv("= #frac{(n+1)(n+2)(2n+3)(3n^2+9n+5)}{30}", 0.8)}
        </>,
        [
          "#sum_{i=1}^{n+1}i^4",
          "= (n+1)^4 + #sum_{i=1}^ni^4",
          <div>using the induction hypothesis:</div>,
          "= (n+1)^4 + #frac{n(n+1)(2n+1)(3n^2+3n-1)}{30}",
          "= #frac{30(n+1)^4}{30} + #frac{n(n+1)(2n+1)(3n^2+3n-1)}{30}",
          "= #frac{30(n+1)^4 + n(n+1)(2n+1)(3n^2+3n-1)}{30}",
          "= #frac{n+1}{30}(30(n+1)^3 + n(2n+1)(3n^2+3n-1))",
          "= #frac{n+1}{30}(30(n+1)^3 + (2n^2+n)(3n^2+3n-1))",
          mathDiv("= #frac{n+1}{30}(30n^3 + 90n^2 + 90n + 30 + 6n^4 + 6n^3 - 2n^2 + 3n^3 + 3n^2 - n)", 0.87),
          "= #frac{n+1}{30}(6n^4 + 39n^3 + 91n^2 + 89n + 30)",
          "= #frac{(n+1)(n+2)}{30}(6n^3 + 27n^2 + 37n + 15)",
          "= #frac{(n+1)(n+2)(2n + 3)(3n^2 + 9n + 5)}{30}",
        ],
    ),
    standardFomulaInductionItem(
        observeThat("1^2 + 3^2 + 5^2 + ... + (2n-1)^2 = #sum_{i=1}^n(2i-1)^2"),
        "#sum_{i=1}^n(2i-1)^2 = #frac{(2n-1)2n(2n+1)}{6}",
        <>
          {mathDiv("#sum_{i=1}^n(2i-1)^2 = #sum_{i=1}^1(2i-1)^2 = (2#cdot 1 - 1)^2 = 1")}
          {mathDiv("= #frac{1#cdot 2#cdot 3}{6} = #frac{(2-1)#cdot 2#cdot (2+1)}{6} = #frac{(2n-1)2n(2n+1)}{6}")}
        </>,
        <>
          {mathDiv("#sum_{i=1}^{n + 1}(2i-1)^2 = #frac{(2(n+1)-1)2(n+1)(2(n+1)+1)}{6}")}
          {mathDiv(" = #frac{(2n+1)(2n+2)(2n+3)}{6}")}
        </>,
        [
          "#sum_{i=1}^{n + 1}(2i-1)^2",
          "= (2(n+1)-1)^2 + #sum_{i=1}^n(2i-1)^2",
          "= (2n+1)^2 + #sum_{i=1}^n(2i-1)^2",
          <div>using the induction hypothesis:</div>,
          "= (2n+1)^2 + #frac{(2n-1)2n(2n+1)}{6}",
          "= #frac{6(2n+1)^2}{6} + #frac{(2n-1)2n(2n+1)}{6}",
          "= #frac{6(2n+1)^2 + (2n-1)2n(2n+1)}{6}",
          "= #frac{(2n+1)(6(2n+1) + (2n-1)2n)}{6}",
          "= #frac{(2n+1)(12n + 6 + 4n^4 - 2n)}{6}",
          "= #frac{(2n+1)(4n^4 + 10n + 6)}{6}",
          " = #frac{(2n+1)(2n+2)(2n+3)}{6}",
        ],
    ),
    standardFomulaInductionItem(
        observeThat("1 + 4 + 7 + 10 + 13 + ... + (3n-2) = #sum_{i=1}^n(3i-2)"),
        "#sum_{i=1}^n(3i-2) = #frac{n(3n-1)}{2}",
        <>
          {mathDiv("#sum_{i=1}^n(3i-2) = #sum_{i=1}^1(3i-2) = (3#cdot 1-2) = 1")}
          {mathDiv(" = #frac{2}{2} = #frac{1#cdot (3#cdot 1 - 1)}{2} = #frac{n(3n-1)}{2}")}
        </>,
        <>
          {mathDiv("#sum_{i=1}^{n+1}(3i-2) = #frac{(n+1)(3(n+1)-1)}{2}")}
          {mathDiv(" = #frac{(n+1)(3n+2)}{2}")}
        </>,
        [
          "#sum_{i=1}^{n+1}(3i-2)",
          "= 3(n+1)-2 + #sum_{i=1}^n(3i-2)",
          <div>using the induction hypothesis:</div>,
          "= 3(n+1)-2 + #frac{n(3n-1)}{2}",
          "= #frac{2(3(n+1)-2)}{2} + #frac{n(3n-1)}{2}",
          "= #frac{2(3(n+1)-2) + n(3n-1)}{2}",
          "= #frac{6n + 6 - 4 + 3n^2 - n}{2}",
          "= #frac{3n^2 + 5n + 2}{2}",
          "= #frac{(n+1)(3n+2)}{2}",
        ],
    ),
    standardFomulaInductionItem(
        observeThat("3+7+11+...+(4n-1) = #sum_{i=1}^n(4i-1)"),
        "#sum_{i=1}^n(4i-1) = 2n^2 + n",
        "#sum_{i=1}^n(4i-1) = #sum_{i=1}^1(4i-1) = 4#cdot 1 - 1 = 3 = 2 + 1 = 2#cdot n^2 + 1",
        "#sum_{i=1}^{n+1}(4i-1) = 2(n+1)^2 + (n+1)",
        [
          "#sum_{i=1}^{n+1}(4i-1)",
          "= 4(n+1)-1 + #sum_{i=1}^n(4i-1)",
          <div>using the induction hypothesis:</div>,
          "= 4(n+1)-1 + 2n^2 + n",
          "= 4n + 3 + 2n^2 + n",
          "= 2n^2 + 5n + 3",
          "= (2n^2 + 4n + 2) + (n + 1)",
          "= 2(n+1)^2 + (n + 1)",
        ],
    ),
    standardFomulaInductionItem(
        observeThat("1+2+4+8+...+2^n = #sum_{i=0}^n2^i"),
        "#sum_{i=0}^n2^i = 2^{n+1}-1",
        "#sum_{i=0}^n2^i = #sum_{i=0}^12^i = 2^0 + 2^1 = 3 = 4 - 1 = 2^2 - 1 = 2^{n+1}-1",
        "#sum_{i=0}^{n+1}2^i = 2^{(n+1)+1}-1",
        [
          "#sum_{i=0}^{n+1}2^i",
          "= #sum_{i=0}^{n}2^i + 2^{n+1}",
          <div>using the induction hypothesis:</div>,
          "= 2^{n+1}-1 + 2^{n+1}",
          "= 2#cdot 2^{n+1} - 1",
          "= 2^{n+2} - 1",
          "= 2^{(n+1)+1} - 1",
        ],
    ),
    standardFomulaInductionItem(
        <>
          <p>Let {isNatPlusWithoutDefinition("a")}. Observe that</p>
          {mathDiv("1 + a + a^2 + ... + a^n = #sum_{i=0}^na^i")}
        </>,
        "#sum_{i=0}^na^i = #frac{a^{n+1}-1}{a-1}",
        <>
          {mathDiv("#sum_{i=0}^na^i = #sum_{i=0}^1a^i = a^0 + a^1 = a + 1")}
          <div>and</div>
          {mathDiv("#frac{a^{n+1}-1}{a-1} = #frac{a^{1+1}-1}{a-1} = #frac{a^2-1}{a-1} = #frac{(a+1)(a-1)}{a-1} = a + 1")}
        </>,
        "#sum_{i=0}^{n+1}a^i = #frac{a^{(n+1)+1}-1}{a-1}",
        [
          "#sum_{i=0}^{n+1}a^i",
          "= #sum_{i=0}^na^i + a^{n+1}",
          <div>using the induction hypothesis:</div>,
          "= #frac{a^{n+1}-1}{a-1} + a^{n+1}",
          "= #frac{a^{n+1}-1}{a-1} + #frac{a^{n+1}(a-1)}{a-1}",
          "= #frac{a^{n+1}-1 + a^{n+1}(a-1)}{a-1}",
          "= #frac{a^{n+1}(1 + (a-1)) - 1}{a-1}",
          "= #frac{a^{n+1}#cdot a - 1}{a-1}",
          "= #frac{a^{n+2} - 1}{a-1}",
          "= #frac{a^{(n+1) + 1}-1}{a-1}",
        ],
    ),
    standardFomulaInductionItem(
        observeThat("1 + #frac{2^0}{3^1} + #frac{2^2}{3^2} + #frac{2^4}{3^3} + ... + #frac{2^{2(n-1)}}{3^n} = 1 + #sum_{i=1}^n#frac{2^{2(i-1)}}{3^i}"),
        "1 + #sum_{i=1}^n#frac{2^{2(i-1)}}{3^i} = (#frac{4}{3})^n",
        <>
          {mathDiv("1 + #sum_{i=1}^n#frac{2^{2(i-1)}}{3^i} = 1 + #sum_{i=1}^1#frac{2^{2(i-1)}}{3^i} = 1 + #frac{2^{2(1-1)}}{3^1}")}
          {mathDiv("= 1 + #frac{2^0}{3} = 1 + #frac{1}{3} = (#frac{4}{3})^1 = (#frac{4}{3})^n")}
        </>,
        "1 + #sum_{i=1}^{n+1}#frac{2^{2(i-1)}}{3^i} = (#frac{4}{3})^{n+1}",
        [
          "1 + #sum_{i=1}^{n+1}#frac{2^{2(i-1)}}{3^i}",
          "= 1 + #sum_{i=1}^n#frac{2^{2(i-1)}}{3^i} + #frac{2^{2((n+1)-1)}}{3^{n+1}}",
          <div>using the induction hypothesis:</div>,
          "= (#frac{4}{3})^n + #frac{2^{2((n+1)-1)}}{3^{n+1}}",
          "= (#frac{4}{3})^n + #frac{2^{2n}}{3^{n+1}}",
          "= (#frac{4}{3})^n + #frac{1}{3}#cdot #frac{4^n}{3^n}",
          "= 1#cdot (#frac{4}{3})^n + #frac{1}{3}#cdot (#frac{4}{3})^n",
          "= (1 + #frac{1}{3})#cdot (#frac{4}{3})^n",
          "= #frac{4}{3}#cdot (#frac{4}{3})^n",
          "= (#frac{4}{3})^{n+1}",
        ],
    ),
    standardFomulaInductionItem(
        observeThat("1^2 - 2^2 + 3^2 - 4^2 + ... + -1^{n-1}n^2 = #sum_{i=1}^n-1^{i-1}i^2"),
        "#sum_{i=1}^n-1^{i-1}i^2 = -1^{n-1}#frac{n(n+1)}{2}",
        <>
          {mathDiv("#sum_{i=1}^n-1^{i-1}i^2 = #sum_{i=1}^1-1^{i-1}i^2 = -1^{1-1}1^2 = -1^0#cdot 1 = 1")}
          <div>and</div>
          {mathDiv("-1^{n-1}#frac{n(n+1)}{2} = -1^{1-1}#frac{1(1+1)}{2} = #frac{1#cdot 2}{2} = 1")}
        </>,
        "#sum_{i=1}^{n+1}-1^{i-1}i^2 = -1^{(n+1)-1}#frac{(n+1)((n+1)+1)}{2}",
        [
          "#sum_{i=1}^{n+1}-1^{i-1}i^2",
          "= #sum_{i=1}^n-1^{i-1}i^2 + (-1^{(n+1)-1}(n+1)^2)",
          <div>using the induction hypothesis:</div>,
          "= (-1^{n-1}#frac{n(n+1)}{2}) + (-1^{(n+1)-1}(n+1)^2)",
          "= (-1^{n-1}#frac{n(n+1)}{2}) - (-1^{n-1}(n+1)^2)",
          "= (-1^{n-1})(n+1)(#frac{n}{2} - (n+1))",
          "= (-1^{n-1})(n+1)(-#frac{n}{2} - 1))",
          "= -1^{n-1}#frac{(n+1)(-n - 2))}{2}",
          "= -(-1^{n-1}#frac{(n+1)(n+2)}{2})",
          "= -(-1^{n-1}#frac{(n+1)((n+1)+1)}{2})",
          "= -1^{(n+1)-1}#frac{(n+1)((n+1)+1)}{2}",
        ],
    ),
    standardFomulaInductionItem(
        observeThat("1#cdot 2 + 2#cdot 3 + 3#cdot 4 + ... + n(n+1) = #sum_{i=1}^ni(i+1)"),
        "#sum_{i=1}^ni(i+1) = #frac{n(n+1)(n+2)}{3}",
        <>
          {mathDiv("#sum_{i=1}^ni(i+1) = #sum_{i=1}^1i(i+1) = 1(1+1) = 2")}
          {mathDiv("= #frac{6}{3} = #frac{1#cdot 2#cdot 3}{3} = #frac{n(n+1)(n+2)}{3}")}
        </>,
        "#sum_{i=1}^{n+1}i(i+1) = #frac{(n+1)(n+2)(n+3)}{3}",
        [
          "#sum_{i=1}^{n+1}i(i+1)",
          "= #sum_{i=1}^ni(i+1) + (n+1)((n+1)+1)",
          <div>using the induction hypothesis:</div>,
          "= #frac{n(n+1)(n+2)}{3} + (n+1)(n+2)",
          "= (n+1)(n+2)(#frac{n}{3} + 1)",
          "= (n+1)(n+2)(#frac{n}{3} + #frac{3}{3})",
          "= #frac{(n+1)(n+2)(n+3)}{3}",
        ],
    ),
    standardFomulaInductionItem(
        observeThat("1#cdot 1! + 2#cdot 2! + 3#cdot 3! + ... + n#cdot n! = #sum_{i=1}^ni#cdot i!"),
        "#sum_{i=1}^ni#cdot i! = (n+1)!-1",
        "#sum_{i=1}^ni#cdot i! = #sum_{i=1}^1i#cdot i! = 1#cdot 1! = 1 = 2 - 1 = 2! - 1 = (n+1)! - 1",
        "#sum_{i=1}^{n+1}i#cdot i! = ((n+1)+1)!-1",
        [
          "#sum_{i=1}^{n+1}i#cdot i!",
          "= #sum_{i=1}^ni#cdot i! + (n+1)#cdot (n+1)!",
          <div>using the induction hypothesis:</div>,
          "= (n+1)!-1 + (n+1)#cdot (n+1)!",
          "= (n+1)!(1 + (n+1)) - 1",
          "= (n+1)!(n+2) - 1",
          "= (n+2)! - 1",
        ],
    ),
    standardFomulaInductionItem(
        observeThat(
            "1#cdot 2#cdot 3 + 2#cdot 3#cdot 4 + 3#cdot 4#cdot 5 + ... + n(n+1)(n+2)",
            "= #sum_{i=1}^ni(i+1)(i+2)"
        ),
        "#sum_{i=1}^ni(i+1)(i+2) = #frac{n(n+1)(n+2)(n+3)}{4}",
        <>
          {mathDiv("#sum_{i=1}^ni(i+1)(i+2) = #sum_{i=1}^1i(i+1)(i+2) = 1(1+1)(1+2)")}
          {mathDiv("= 1#cdot 2#cdot 3 = #frac{1#cdot 2#cdot 3#cdot 4}{4}")}
        </>,
        "#sum_{i=1}^{n+1}i(i+1)(i+2) = #frac{(n+1)(n+2)(n+3)(n+4)}{4}",
        [
          "#sum_{i=1}^{n+1}i(i+1)(i+2)",
          "= (n+1)((n+1)+1)((n+1)+2) + #sum_{i=1}^ni(i+1)(i+2)",
          <div>using the induction hypothesis:</div>,
          "= (n+1)((n+1)+1)((n+1)+2) + #frac{n(n+1)(n+2)(n+3)}{4}",
          "= #frac{4(n+1)(n+2)(n+3)}{4} + #frac{n(n+1)(n+2)(n+3)}{4}",
          "= #frac{4(n+1)(n+2)(n+3) + n(n+1)(n+2)(n+3)}{4}",
          "= #frac{(n+1)(n+2)(n+3)(n+4)}{4}",
        ],
    ),
    standardFomulaInductionItem(
      observeThat(
        "#frac{1}{1} - #frac{1}{2} + #frac{1}{3} - #frac{1}{4} + ... + #frac{1}{2n-1} - #frac{1}{2n} = #sum_{i=1}^{n}(#frac{1}{2i-1} - #frac{1}{2i})",
        <p>and</p>,
        "#frac{1}{n+1} + #frac{1}{n+2} + #frac{1}{n+3} + ... + #frac{1}{2n} = #sum_{i=n+1}^{2n}#frac{1}{i}",
      ),
      "#sum_{i=1}^{n}(#frac{1}{2i-1} - #frac{1}{2i}) = #sum_{i=n+1}^{2n}#frac{1}{i}",
      <>
        {mathDiv("#sum_{i=1}^{n}(#frac{1}{2i-1} - #frac{1}{2i})")}
        {mathDiv("= #sum_{i=1}^{1}(#frac{1}{2i-1} - #frac{1}{2i})")}
        {mathDiv("= #frac{1}{2#cdot 1-1} - #frac{1}{2#cdot 1}")}
        {mathDiv("= #frac{1}{2 - 1} - #frac{1}{2}")}
        {mathDiv("= 1 - #frac{1}{2} = #frac{1}{2} = #sum_{i=2}^{2}#frac{1}{i} = #sum_{i=1+1}^{2#cdot 1}#frac{1}{i} = #sum_{i=n+1}^{2n}#frac{1}{i}")}
      </>,
      "#sum_{i=1}^{n+1}(#frac{1}{2i-1} - #frac{1}{2i}) = #sum_{i=(n+1)+1}^{2(n+1)}#frac{1}{i}",
      [
        "#sum_{i=1}^{n+1}(#frac{1}{2i-1} - #frac{1}{2i})",
        "= (#frac{1}{2(n+1)-1} - #frac{1}{2(n+1)}) + #sum_{i=1}^n(#frac{1}{2i-1} - #frac{1}{2i})",
        <div>using the induction hypothesis:</div>,
        "= (#frac{1}{2n+1} - #frac{1}{2n+2}) + #sum_{i=n+1}^{2n}#frac{1}{i}",
        "= (#frac{1}{2n+1} - #frac{1}{2n+2}) + (#frac{1}{n+1} - #frac{1}{2n+1} - #frac{1}{2n+2}) + #sum_{i=n+2}^{2n+2}#frac{1}{i}",
        <>(rearranging the terms)</>,
        "= (#frac{1}{2n+1} - #frac{1}{2n+1}) + (#frac{1}{n+1} - #frac{1}{2n+2} - #frac{1}{2n+2}) + #sum_{i=n+2}^{2n+2}#frac{1}{i}",
        "= (#frac{2}{2n+2} - #frac{1}{2n+2} - #frac{1}{2n+2}) + #sum_{i=n+2}^{2n+2}#frac{1}{i}",
        "= #sum_{i=(n+1)+1}^{2(n+1)}#frac{1}{i}",
      ],
    ),
    standardFomulaInductionItem(
        observeThat("#frac{1}{2} + #frac{1}{4} + #frac{1}{8} + ... + #frac{1}{2^n} = #sum_{i=1}^{n}#frac{1}{2^i}"),
        "#sum_{i=1}^{n}#frac{1}{2^i} = 1 - #frac{1}{2^n}",
        "#sum_{i=1}^{n}#frac{1}{2^i} = #sum_{i=1}^{1}#frac{1}{2^i} = #frac{1}{2^1} = #frac{1}{2} = 1 - #frac{1}{2} = 1 - #frac{1}{2^n}",
        "#sum_{i=1}^{n+1}#frac{1}{2^i} = 1 - #frac{1}{2^{n+1}}",
        [
          "#sum_{i=1}^{n+1}#frac{1}{2^i}",
          "= #frac{1}{2^{n+1}} + #sum_{i=1}^{n}#frac{1}{2^i}",
          <div>using the induction hypothesis:</div>,
          "= #frac{1}{2^{n+1}} + 1 - #frac{1}{2^n}",
          "= 1 - (#frac{1}{2^n} - #frac{1}{2^{n+1}})",
          "= 1 - #frac{1}{2^{n+1}}",
        ],
    ),
    standardFomulaInductionItem(
        observeThat("#frac{1}{1#cdot 2} + #frac{1}{2#cdot 3} + #frac{1}{3#cdot 4} + ... + #frac{1}{n(n+1)} = #sum_{i=1}^{n}#frac{1}{i(i+1)}"),
        "#sum_{i=1}^{n}#frac{1}{i(i+1)} = #frac{n}{n+1}",
        "#sum_{i=1}^{n}#frac{1}{i(i+1)} = #sum_{i=1}^{1}#frac{1}{i(i+1)} = #frac{1}{1(1+1)} = #frac{1}{2} = #frac{1}{1#cdot 2} = #frac{n}{n+1}",
        "#sum_{i=1}^{n+1}#frac{1}{i(i+1)} = #frac{n+1}{n+2}",
        [
          "#sum_{i=1}^{n+1}#frac{1}{i(i+1)}",
          "= #frac{1}{(n+1)(n+2)} + #sum_{i=1}^{n}#frac{1}{i(i+1)}",
          <div>using the induction hypothesis:</div>,
          "= #frac{1}{(n+1)(n+2)} + #frac{n}{n+1}",
          "= #frac{1}{(n+1)(n+2)} + #frac{n(n+2)}{(n+1)(n+2)}",
          "= #frac{1 + n(n+2)}{(n+1)(n+2)}",
          "= #frac{n^2 + 2n + 1}{(n+1)(n+2)}",
          "= #frac{(n+1)^2}{(n+1)(n+2)}",
          "= #frac{n+1}{n+2}",
        ],
    ),
    standardFomulaInductionItem(
        observeThat(
            "#frac{1}{1#cdot 3} + #frac{1}{3#cdot 5} + #frac{1}{5#cdot 7} + ... + #frac{1}{(2n-1)(2n+1)}",
            "= #sum_{i=1}^{n}#frac{1}{(2i-1)(2i+1)}"
        ),
        "#sum_{i=1}^{n}#frac{1}{(2i-1)(2i+1)} = #frac{n}{2n+1}",
        <>
          {mathDiv("#sum_{i=1}^{n}#frac{1}{(2i-1)(2i+1)} = #sum_{i=1}^{1}#frac{1}{(2i-1)(2i+1)}")}
          {mathDiv("= #frac{1}{(2#cdot 1-1)(2#cdot 1+1)} = #frac{n}{1#cdot (2n+1)}")}
        </>,
        "#sum_{i=1}^{n+1}#frac{1}{(2i-1)(2i+1)} = #frac{n+1}{2(n+1)+1}",
        [
          "#sum_{i=1}^{n+1}#frac{1}{(2i-1)(2i+1)}",
          "= #frac{1}{(2(n+1)-1)(2(n+1)+1)} + #sum_{i=1}^{n}#frac{1}{(2i-1)(2i+1)}",
          <div>using the induction hypothesis:</div>,
          "= #frac{1}{(2n+1)(2n+3)} + #frac{n}{2n+1}",
          "= #frac{1}{(2n+1)(2n+3)} + #frac{n(2n+3)}{(2n+1)(2n+3)}",
          "= #frac{1 + n(2n+3)}{(2n+1)(2n+3)}",
          "= #frac{2n^2 + 3n + 1}{(2n+1)(2n+3)}",
          "= #frac{(2n+1)(n+1)}{(2n+1)(2n+3)}",
          "= #frac{n+1}{2n+3}",
          "= #frac{n+1}{2(n+1)+1}",
        ],
    ),
    standardFomulaInductionItem(
        observeThat(
            "#frac{1}{1#cdot 4} + #frac{1}{4#cdot 7} + #frac{1}{7#cdot 10} + ... + #frac{1}{(3n-2)(3n+1)}",
            "= #sum_{i=1}^{n}#frac{1}{(3i-2)(3i+1)}",
        ),
        "#sum_{i=1}^{n}#frac{1}{(3i-2)(3i+1)} = #frac{n}{3n+1}",
        <>
          {mathDiv("#sum_{i=1}^{n}#frac{1}{(3i-2)(3i+1)} = #sum_{i=1}^{1}#frac{1}{(3i-2)(3i+1)}")}
          {mathDiv("= #frac{1}{(3#cdot 1-2)(3#cdot 1+1)} = #frac{n}{1#cdot (3n+1)}")}
        </>,
        "#sum_{i=1}^{n+1}#frac{1}{(3i-2)(3i+1)} = #frac{n+1}{3(n+1)+1}",
        [
          "#sum_{i=1}^{n+1}#frac{1}{(3i-2)(3i+1)}",
          "= #frac{1}{(3(n+1)-2)(3(n+1)+1)} + #sum_{i=1}^{n}#frac{1}{(3i-2)(3i+1)}",
          <div>using the induction hypothesis:</div>,
          "= #frac{1}{(3n+1)(3n+4)} + #frac{n}{3n+1}",
          "= #frac{1}{(3n+1)(3n+4)} + #frac{n(3n+4)}{(3n+1)(3n+4)}",
          "= #frac{1 + n(3n+4)}{(3n+1)(3n+4)}",
          "= #frac{3n^2 + 4n + 1}{(3n+1)(3n+4)}",
          "= #frac{(3n+1)(n+1)}{(3n+1)(3n+4)}",
          "= #frac{n+1}{3n+4}",
          "= #frac{n+1}{3(n+1)+1}",
        ],
    ),
    standardFomulaInductionItem(
        observeThat(
            "#frac{1}{1#cdot 5} + #frac{1}{5#cdot 9} + #frac{1}{9#cdot 13} + ... + #frac{1}{(4n-3)(4n+1)}",
            "= #sum_{i=1}^{n}#frac{1}{(4i-3)(4i+1)}",
        ),
        "#sum_{i=1}^{n}#frac{1}{(4i-3)(4i+1)} = #frac{n}{4n+1}",
        <>
          {mathDiv("#sum_{i=1}^{n}#frac{1}{(4i-3)(4i+1)} = #sum_{i=1}^{1}#frac{1}{(4i-3)(4i+1)}")}
          {mathDiv("= #frac{1}{(4#cdot 1-3)(4#cdot 1+1)} = #frac{n}{1#cdot (4n+1)}")}
        </>,
        "#sum_{i=1}^{n+1}#frac{1}{(4i-3)(4i+1)} = #frac{n+1}{4(n+1)+1}",
        [
          "#sum_{i=1}^{n+1}#frac{1}{(4i-3)(4i+1)}",
          "= #frac{1}{(4(n+1)-3)(4(n+1)+1)} + #sum_{i=1}^{n}#frac{1}{(4i-3)(4i+1)}",
          <div>using the induction hypothesis:</div>,
          "= #frac{1}{(4n+1)(4n+5)} + #frac{n}{4n+1}",
          "= #frac{1}{(4n+1)(4n+5)} + #frac{n(4n+5)}{(4n+1)(4n+5)}",
          "= #frac{1 + n(4n+5)}{(4n+1)(4n+5)}",
          "= #frac{4n^2 + 5n + 1}{(4n+1)(4n+5)}",
          "= #frac{(4n+1)(n+1)}{(4n+1)(4n+5)}",
          "= #frac{n+1}{4n+5}",
          "= #frac{n+1}{4(n+1)+1}",
        ],
    ),
    standardFomulaInductionItem(
        observeThat(
            "#frac{1}{4#cdot 5} + #frac{1}{5#cdot 6} + #frac{1}{6#cdot 7} + ... + #frac{1}{(n+3)(n+4)}",
            "= #sum_{i=1}^{n}#frac{1}{(i+3)(i+4)}",
        ),
        "#sum_{i=1}^{n}#frac{1}{(i+3)(i+4)} = #frac{n}{4(n+4)}",
        <>
          {mathDiv("#sum_{i=1}^{n}#frac{1}{(i+3)(i+4)} = #sum_{i=1}^{1}#frac{1}{(i+3)(i+4)}")}
          {mathDiv("= #frac{1}{(1+3)(1+4)} = #frac{n}{4(n+4)}")}
        </>,
        "#sum_{i=1}^{n+1}#frac{1}{(i+3)(i+4)} = #frac{n+1}{4((n+1)+4)}",
        [
          "#sum_{i=1}^{n+1}#frac{1}{(i+3)(i+4)}",
          "= #frac{1}{((n+1)+3)((n+1)+4)} + #sum_{i=1}^{n}#frac{1}{(i+3)(i+4)}",
          <div>using the induction hypothesis:</div>,
          "= #frac{1}{(n+4)(n+5)} + #frac{n}{4(n+4)}",
          "= #frac{4}{4(n+4)(n+5)} + #frac{n(n+5)}{4(n+4)(n+5)}",
          "= #frac{4 + n(n+5)}{4(n+4)(n+5)}",
          "= #frac{n^2 + 5n + 4}{4(n+4)(n+5)}",
          "= #frac{(n+1)(n+4)}{4(n+4)(n+5)}",
          "= #frac{n+1}{4(n+5)}",
          "= #frac{n+1}{4((n+1)+4)}",
        ],
    ),
    standardFomulaInductionItem(
        observeThat(
            "#frac{4}{1#cdot 3} + #frac{4}{2#cdot 4} + #frac{4}{3#cdot 5} + ... + #frac{4}{n(n+2)}",
            "= #sum_{i=1}^{n}#frac{4}{i(i+2)}",
        ),
        "#sum_{i=1}^{n}#frac{4}{i(i+2)} = #frac{n(3n+5)}{(n+1)(n+2)}",
        <>
          {mathDiv("#sum_{i=1}^{n}#frac{4}{i(i+2)} = #sum_{i=1}^{1}#frac{4}{i(i+2)} = #frac{4}{1#cdot (1+2)} = #frac{4}{3}")}
          <p>and</p>
          {mathDiv("#frac{n(3n+5)}{(n+1)(n+2)} = #frac{1#cdot (3#cdot 1+5)}{(1+1)(1+2)} = #frac{3+5}{2#cdot 3} = #frac{8}{6} = #frac{4}{3}")}
        </>,
        "#sum_{i=1}^{n+1}#frac{4}{i(i+2)} = #frac{(n+1)(3(n+1)+5)}{((n+1)+1)((n+1)+2)}",
        [
          "#sum_{i=1}^{n+1}#frac{4}{i(i+2)}",
          "= #frac{4}{(n+1)((n+1)+2)} + #sum_{i=1}^{n}#frac{4}{i(i+2)}",
          <div>using the induction hypothesis:</div>,
          "= #frac{4}{(n+1)(n+3)} + #frac{n(3n+5)}{(n+1)(n+2)}",
          "= #frac{4(n+2)}{(n+1)(n+2)(n+3)} + #frac{n(3n+5)(n+3)}{(n+1)(n+2)(n+3)}",
          "= #frac{4(n+2) + n(3n+5)(n+3)}{(n+1)(n+2)(n+3)}",
          "= #frac{4n + 8 + 3n^3 + 14n^2 + 15n}{(n+1)(n+2)(n+3)}",
          "= #frac{3n^3 + 14n^2 + 19n + 8}{(n+1)(n+2)(n+3)}",
          "= #frac{(n^2 + 2n + 1)(3n + 8)}{(n+1)(n+2)(n+3)}",
          "= #frac{(n + 1)(n + 1)(3n + 8)}{(n+1)(n+2)(n+3)}",
          "= #frac{(n + 1)(3n + 8)}{(n+2)(n+3)}",
          "= #frac{(n + 1)(3(n+1) + 5)}{((n+1)+1)((n+1)+2)}",
        ],
    ),
    standardFomulaInductionItem(
        observeThat(
            "#frac{4}{1#cdot 2#cdot 3} + #frac{4}{2#cdot 3#cdot 4} + #frac{4}{3#cdot 4#cdot 5} + ... + #frac{4}{n(n+1)(n+2)}",
            "= #sum_{i=1}^{n}#frac{4}{i(i+1)(i+2)}",
        ),
        "#sum_{i=1}^{n}#frac{4}{i(i+1)(i+2)} = #frac{n(n+3)}{(n+1)(n+2)}",
        <>
          {mathDiv("#sum_{i=1}^{n}#frac{4}{i(i+1)(i+2)} = #sum_{i=1}^{1}#frac{4}{i(i+1)(i+2)}")}
          {mathDiv("= #frac{4}{1(1+1)(1+2)} = #frac{4}{1#cdot 2#cdot 3} = #frac{2}{3}")}
          <p>and</p>
          {mathDiv("#frac{n(n+3)}{(n+1)(n+2)} = #frac{1(1+3)}{(1+1)(1+2)} = #frac{1#cdot 4}{2#cdot 3} = #frac{2}{3}")}
        </>,
        "#sum_{i=1}^{n+1}#frac{4}{i(i+1)(i+2)} = #frac{(n+1)((n+1)+3)}{((n+1)+1)((n+1)+2)}",
        [
          "#sum_{i=1}^{n+1}#frac{4}{i(i+1)(i+2)}",
          "= #frac{4}{(n+1)((n+1)+1)((n+1)+2)} + #sum_{i=1}^{n}#frac{4}{i(i+1)(i+2)}",
          <div>using the induction hypothesis:</div>,
          "= #frac{4}{(n+1)(n+2)(n+3)} + #frac{n(n+3)}{(n+1)(n+2)}",
          "= #frac{4}{(n+1)(n+2)(n+3)} + #frac{n(n+3)(n+3)}{(n+1)(n+2)(n+3)}",
          "= #frac{4 + n(n+3)^2}{(n+1)(n+2)(n+3)}",
          "= #frac{4 + n(n^2 + 6n + 9)}{(n+1)(n+2)(n+3)}",
          "= #frac{n^3 + 6n^2 + 9n + 4}{(n+1)(n+2)(n+3)}",
          <p>and</p>,
          "#frac{(n+1)((n+1)+3)}{((n+1)+1)((n+1)+2)}",
          "= #frac{(n+1)(n+4)}{(n+2)(n+3)}",
          "= #frac{(n+1)^2(n+4)}{(n+1)(n+2)(n+3)}",
          "= #frac{(n^2 + 2n + 1)(n+4)}{(n+1)(n+2)(n+3)}",
          "= #frac{n^3 + 6n^2 + 9n + 4}{(n+1)(n+2)(n+3)}",
        ],
    ),
    standardFomulaInductionItem(
        observeThat(
            "#frac{1^2}{1#cdot 3} + #frac{2^2}{3#cdot 5} + #frac{3^2}{5#cdot 7} + ... + #frac{n^2}{(2n-1)(2n+1)}",
            "= #sum_{i=1}^{n}#frac{i^2}{(2i-1)(2i+1)}",
        ),
        "#sum_{i=1}^{n}#frac{i^2}{(2i-1)(2i+1)} = #frac{n(n+1)}{2(2n+1)}",
        <>
          {mathDiv("#sum_{i=1}^{n}#frac{i^2}{(2i-1)(2i+1)} = #sum_{i=1}^{1}#frac{i^2}{(2i-1)(2i+1)}")}
          {mathDiv("#frac{1^2}{(2#cdot 1-1)(2#cdot 1+1)} = #frac{1}{(2-1)(2+1)} = #frac{1}{1#cdot 3} = #frac{1}{3}")}
          <p>and</p>
          {mathDiv("#frac{n(n+1)}{2(2n+1)} = #frac{1(1+1)}{2(2#cdot 1+1)} = #frac{1#cdot 2}{2(2+1)} = #frac{1}{3}")}
        </>,
        "#sum_{i=1}^{n+1}#frac{i^2}{(2i-1)(2i+1)} = #frac{(n+1)((n+1)+1)}{2(2(n+1)+1)}",
        [
          "#sum_{i=1}^{n+1}#frac{i^2}{(2i-1)(2i+1)}",
          "= #frac{(n+1)^2}{(2(n+1)-1)(2(n+1)+1)} + #sum_{i=1}^{n}#frac{i^2}{(2i-1)(2i+1)}",
          <div>using the induction hypothesis:</div>,
          "= #frac{(n+1)^2}{(2n+1)(2n+3)} + #frac{n(n+1)}{2(2n+1)}",
          "= #frac{2(n+1)^2}{2(2n+1)(2n+3)} + #frac{n(n+1)(2n+3)}{2(2n+1)(2n+3)}",
          "= #frac{2(n+1)^2 + n(n+1)(2n+3)}{2(2n+1)(2n+3)}",
          "= #frac{(n+1)(2(n+1) + n(2n+3))}{2(2n+1)(2n+3)}",
          "= #frac{(n+1)(2n^2 + 5n + 2)}{2(2n+1)(2n+3)}",
          <p>and</p>,
          "#frac{(n+1)((n+1)+1)}{2(2(n+1)+1)}",
          "= #frac{(n+1)(n+2)}{2(2n+3)}",
          "= #frac{(n+1)(n+2)(2n+1)}{2(2n+3)(2n+1)}",
          "= #frac{(n+1)(2n^2 + 5n + 2)}{2(2n+1)(2n+3)}",
        ],
    ),
    standardFomulaInductionItem(
        observeThat("#frac{1}{2^1} + #frac{2}{2^2} + #frac{3}{2^3} + ... + #frac{n}{2^n} = #sum_{i=1}^{n}#frac{i}{2^i}"),
        "#sum_{i=1}^{n}#frac{i}{2^i} = 2 - #frac{n+2}{2^n}",
        <>
          {mathDiv("#sum_{i=1}^{n}#frac{i}{2^i} = #sum_{i=1}^{1}#frac{i}{2^i}")}
          {mathDiv("= #frac{1}{2^1} = #frac{1}{2} = 2 - #frac{3}{2} = 2 - #frac{n+2}{2}")}
        </>,
        "#sum_{i=1}^{n+1}#frac{i}{2^i} = 2 - #frac{(n+1)+2}{2^{n+1}}",
        [
          "#sum_{i=1}^{n+1}#frac{i}{2^i}",
          "= #frac{n+1}{2^{n+1}} + #sum_{i=1}^{n}#frac{i}{2^i}",
          <div>using the induction hypothesis:</div>,
          "= #frac{n+1}{2^{n+1}} + 2 - #frac{n+2}{2^n}",
          "= 2 + #frac{n+1}{2^{n+1}} - #frac{2(n+2)}{2^{n+1}}",
          "= 2 + #frac{n + 1 - 2(n+2)}{2^{n+1}}",
          "= 2 + #frac{n + 1 - 2n - 4}{2^{n+1}}",
          "= 2 + #frac{-n - 3}{2^{n+1}}",
          "= 2 - #frac{n+3}{2^{n+1}}",
          "= 2 - #frac{(n+1)+2}{2^{n+1}}",
        ],
    ),
    standardFomulaInductionItem(
        observeThat("#frac{1}{2!} + #frac{2}{3!} + #frac{3}{4!} + ... + #frac{n}{(n+1)!} = #sum_{i=1}^{n}#frac{i}{(i+1)!}"),
        "#sum_{i=1}^{n}#frac{i}{(i+1)!} = #frac{(n+1)!-1}{(n+1)!}",
        <>
          {mathDiv("#sum_{i=1}^{n}#frac{i}{(i+1)!} = #sum_{i=1}^{1}#frac{i}{(i+1)!}")}
          {mathDiv("= #frac{1}{(1+1)!} = #frac{1}{2!} = #frac{1}{2}")}
          <p>and</p>
          {mathDiv("#frac{(n+1)!-1}{(n+1)!} = #frac{(1+1)!-1}{(1+1)!} = #frac{2!-1}{2!} = #frac{1}{2}")}
        </>,
        "#sum_{i=1}^{n+1}#frac{i}{(i+1)!} = #frac{((n+1)+1)!-1}{((n+1)+1)!}",
        [
          "#sum_{i=1}^{n+1}#frac{i}{(i+1)!}",
          "= #frac{n+1}{((n+1)+1)!} + #sum_{i=1}^{n}#frac{i}{(i+1)!}",
          <div>using the induction hypothesis:</div>,
          "= #frac{n+1}{(n+2)!} + #frac{(n+1)!-1}{(n+1)!}",
          "= #frac{n+1}{(n+2)!} + #frac{(n+2)((n+1)!-1)}{(n+2)!}",
          "= #frac{(n+1) + (n+2)((n+1)!-1)}{(n+2)!}",
          "= #frac{(n+1) + (n+2)(n+1)! - (n+2)}{(n+2)!}",
          "= #frac{(n+2)! - 1}{(n+2)!}",
          "= #frac{((n+1)+1)!-1}{((n+1)+1)!}",
        ],
    ),
    standardFomulaInductionItem(
        observeThat("1#cdot 2^1 + 2#cdot 2^2 + 3#cdot 2^3 + ... + n#cdot 2^n = #sum_{i=1}^{n}i#cdot 2^i"),
        "#sum_{i=1}^{n}i#cdot 2^i = (n-1)#cdot 2^{n+1}+2",
        <>
          {mathDiv("#sum_{i=1}^{n}i#cdot 2^i = #sum_{i=1}^{1}i#cdot 2^i")}
          {mathDiv(" = 1#cdot 2^1 = 2 = 0#cdot 2^{2} + 2 = (n-1)#cdot 2^{n+1} + 2")}
        </>,
        "#sum_{i=1}^{n+1}i#cdot 2^i = ((n+1)-1)#cdot 2^{(n+1)+1}+2",
        [
          "#sum_{i=1}^{n+1}i#cdot 2^i",
          "= (n+1)#cdot 2^{n+1} + #sum_{i=1}^{n}i#cdot 2^i",
          <div>using the induction hypothesis:</div>,
          "= (n+1)#cdot 2^{n+1} + (n-1)#cdot 2^{n+1} + 2",
          "= ((n+1) + (n-1))#cdot 2^{n+1} + 2",
          "= 2n#cdot 2^{n+1} + 2",
          "= n#cdot 2^{n+2} + 2",
          "= ((n + 1) - 1)#cdot 2^{(n + 1) + 1} + 2",
        ],
    ),
  ],
};
