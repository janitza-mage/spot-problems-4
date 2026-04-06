import type {Collection} from "../../../../framework/content.tsx";
import {mathDiv, mathSpan} from "../../../../framework/technical-components/Math/Math.tsx";

export const monotonicity: Collection = {
  id: "monotonicity",
  name: "Monotonicity",
  type: "collection",
  exercises: [
    {
      type: "exercise",
      label: "...",
      problem: <>
        <p>Which of the following properties can be true for the same sequence, and which can't?</p>
        <ul>
          <li>strictly increasing</li>
          <li>strictly decreasing</li>
          <li>weakly increasing</li>
          <li>weakly decreasing</li>
        </ul>
      </>,
      answer: <>
        <p>
          A sequence can falls into one of these cases:
        </p>
        <ul>
          <li>Strictly (and thus weakly) increasing, but neither strictly nor weakly decreasing</li>
          <li>Strictly (and thus weakly) decreasing, but neither strictly nor weakly increasing</li>
          <li>Weakly but not strictly increasing, and neither strictly nor weakly decreasing</li>
          <li>Weakly but not strictly decreasing, and neither strictly nor weakly increasing</li>
          <li>None of these properties</li>
        </ul>
      </>,
    },
    {
      type: "exercise",
      label: "...",
      problem: <>
        <p>Which of the following sequences are</p>
        <ul>
          <li>strictly increasing,</li>
          <li>strictly decreasing,</li>
          <li>weakly increasing,</li>
          <li>weakly decreasing?</li>
        </ul>
        {mathDiv("a_n = n")}
        {mathDiv("b_n = 5 - n")}
        {mathDiv("c_n = (-1)^n")}
        {mathDiv("d_n = #frac{1}{n}")}
        {mathDiv("e_n = #text{ the result of rounding } #frac{n}{10}")}
        {mathDiv("f_n = #text{ the remainder of } #frac{n}{10}")}
      </>,
      answer: <>
        <p></p>
        <ul>{mathSpan("a_n")} is strictly increasing</ul>
        <ul>{mathSpan("b_n")} is strictly decreasing</ul>
        <ul>{mathSpan("c_n")} is none of those</ul>
        <ul>{mathSpan("d_n")} is strictly decreasing</ul>
        <ul>{mathSpan("e_n")} is weakly increasing</ul>
        <ul>{mathSpan("f_n")} is none of those</ul>
      </>,
    },
  ],
};
