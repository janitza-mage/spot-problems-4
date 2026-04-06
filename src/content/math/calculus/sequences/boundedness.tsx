import type {Collection} from "../../../../framework/content.tsx";
import {mathDiv, mathSpan} from "../../../../framework/technical-components/Math/Math.tsx";

const a_n = mathSpan("(a_n)_{n #in #mathbb{N}^+}");
const k = mathSpan("k #in #mathbb{R}");
const forAllN = <>for all {mathSpan("n #in #mathbb{N}^+")}</>;

export const boundedness: Collection = {
  id: "boundedness",
  name: "Boundedness",
  type: "collection",
  exercises: [
    {
      type: "exercise",
      label: "...",
      problem: <>
        <p>In the context of a sequence {a_n} of real numbers, give a definition of the terms <i>bounded from
          above</i>, <i>bounded from below</i>, <i>bounded</i>, <i>upper bound</i> and <i>lower bound</i>.</p>
      </>,
      answer: <>
        <ul>
          <li>upper bound: a number {k} such that {mathSpan("a_n #le k")} {forAllN}.</li>
          <li>lower bound: a number {k} such that {mathSpan("a_n #ge k")} {forAllN}.</li>
          <li>bounded from above: has an upper bound</li>
          <li>bounded from below: has a lower bound</li>
          <li>bounded: is bounded both from above and from below</li>
        </ul>
      </>,
    },
    {
      type: "exercise",
      label: "...",
      problem: <>
        <p>Is the following statement correct?</p>
        <p><i>A sequence that is bounded from above is bounded.</i></p>
      </>,
      answer: <>
        <p>No, it is not correct. A sequence is bounded if it is both bounded from above <i>and from below</i></p>.
      </>,
    },
    {
      type: "exercise",
      label: "...",
      problem: <>
        <p>Which of the following sequences are bounded from above/below? Give bounds when possible.</p>
        {mathDiv("a_n = 3")}
        {mathDiv("b_n = n")}
        {mathDiv("c_n = #frac{1}{n}")}
        {mathDiv("d_n = (-1)^n")}
      </>,
      answer: <ul>
        <li>{mathSpan("a_n")} has an upper and lower bound of {mathSpan("3")}</li>
        <li>{mathSpan("b_n")} has a lower bound of {mathSpan("1")} but no upper bound</li>
        <li>{mathSpan("c_n")} has a lower bound of {mathSpan("0")} and an upper bound of {mathSpan("1")}</li>
        <li>{mathSpan("d_n")} has a lower bound of {mathSpan("-1")} and an upper bound of{mathSpan(" 1")}</li>
      </ul>,
    },
    {
      type: "exercise",
      label: "...",
      problem: <>
        <p>Observe that {mathSpan("#frac{1}{(3.5-x)^2}")} becomes arbitrarily large the closer you get
          to {mathSpan("x=3.5")}.</p>
        <p>Is the sequence {a_n},</p>
        {mathDiv("a_n = #frac{1}{(3.5-n)^2}")}
        <p>bounded from above? Is it bounded from below?</p>
      </>,
      answer: <>
        <p>It is bounded from above because {mathSpan("n")} only takes on values from
          {mathSpan("#mathbb{N}")} and so does not come arbitrarily close to {mathSpan("3.5")}. The highest values
        are at {mathSpan("n=3")} and at {mathSpan("n=4")}, with</p>
        {mathDiv("#frac{1}{(3.5-3)^2} = #frac{1}{(3.5-4)^2} = #frac{1}{0.5^2} = 4")}
        <p>It is bounded from below because all values are positive.</p>
      </>,
    },
  ],
};
