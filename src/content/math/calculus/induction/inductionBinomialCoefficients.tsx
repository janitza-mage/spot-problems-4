import type {ExerciseNode} from "../../../../framework/content.tsx";
import {mathDiv, mathSpan} from "../../../../framework/technical-components/Math/Math.tsx";
import {isNat0} from "../../util/math-atoms.tsx";

const letBinomial = <>
  <p>
    Let {isNat0("n, k")}
  </p>
  {mathDiv(`#binom{n}{k} = #frac{n!}{(n-k)!k!}`)}
  <p>
    The special cases {mathSpan("n<0")}, {mathSpan("k<0")} and {mathSpan("k>n")} are defined as
  </p>
  {mathDiv(`#binom{n}{k} = 0 #text{\u00a0\u00a0\u00a0for all special cases}`)}
</>;

export const inductionBinomialCoefficients: ExerciseNode = {
  id: "binomial",
  name: "Binomial Coefficients",
  type: "exercise",
  contentItems: [
    {
      problem: <>
        <p>
          {letBinomial}
        </p>
        <hr />
        <p>
          For the case that {mathSpan("n #geq 1")}, use induction to prove that
        </p>
        {mathDiv("#binom{n}{k}#frac{1}{n^k} #leq #frac{1}{k!}")}
      </>,
      answer: <>
        <p>
          TODO
          Base case ({mathSpan("n=1")}):
        </p>
        {mathDiv("#binom{n}{k}#frac{1}{n^k} = #binom{1}{k}#frac{1}{1^k} = #binom{1}{k}")}
        <p>
          For the special cases,
        </p>
        {mathDiv("#binom{1}{k} = 0 #leq #frac{1}{k!}")}
        <p>
          For the normal cases, {mathSpan("k #in #{0, 1#}")} and
        </p>
        {mathDiv("#binom{1}{k} = #frac{1}{(1-k)!k!} = 1 = #frac{1}{k!}")}
        <p>
          Induction step: Let
        </p>
        {mathDiv("#binom{n}{k}#frac{1}{n^k} #leq #frac{1}{k!}")}
        <p>
          We have to show that
        </p>
        {mathDiv("#binom{n+1}{k}#frac{1}{(n+1)^k} #leq #frac{1}{k!}")}
        <p>
          Again, for the special cases,
        </p>
        {mathDiv("#binom{n+1}{k}#frac{1}{(n+1)^k} = 0 #cdot #frac{1}{(n+1)^k} = 0 #leq #frac{1}{k!}")}
        <p>
          For the normal cases,
        </p>
        {mathDiv("#binom{n+1}{k} #cdot #frac{1}{(n+1)^k}")}
        {mathDiv("= #frac{(n+1)!}{k!((n+1)-k)!} #cdot #frac{1}{(n+1)^k}")}
        {mathDiv("= #frac{n+1}{(n+1)-k} #cdot #frac{n!}{k!(n-k)!} #cdot #frac{1}{(n+1)^k}")}
        {mathDiv("= #frac{n+1}{(n+1)-k} #cdot #binom{n}{k} #cdot #frac{1}{n^k} #cdot  #frac{n^k}{(n+1)^k}")}
        {mathDiv("#leq #frac{n+1}{(n+1)-k} #cdot #frac{1}{k!} #cdot  #frac{n^k}{(n+1)^k}")}
      </>,
    },
  ],
};
