import type {Collection} from "../../../../framework/content.tsx";
import {mathDiv, mathSpan} from "../../../../framework/technical-components/Math/Math.tsx";

export const subsequence: Collection = {
  id: "subsequence",
  name: "Subsequence",
  type: "collection",
  exercises: [
    {
      type: "exercise",
      label: "...",
      problem: <>
        <p>From the sequence</p>
        {mathDiv("1, 2, 3, #hskip 5pt 2, 3, 4, #hskip 5pt 1, 2, 3, #hskip 5pt 2, 3, 4, #hskip 5pt 1, 2, 3, #hskip 5pt 2, 3, 4, #dots")}
        <p>(spaces added for easier reading), determine the subsequence that contains all elements less than {mathSpan("3")}.</p>
      </>,
      answer: <>
        {mathDiv("1, 2, 2, 1, 2, 2, 1, 2, 2, #dots")}
      </>,
    },
    {
      type: "exercise",
      label: "...",
      problem: <>
        <p>Is the sequence of natural numbers a subsequence of the following sequence?</p>
        {mathDiv("0, #hskip 5pt 0, 1, #hskip 5pt 0, 1, 2, #hskip 5pt 0, 1, 2, 3, #dots")}
      </>,
      answer: <>
        <p>Yes -- just take the last number from each "block" of numbers.</p>
      </>,
    },
    {
      type: "exercise",
      label: "...",
      problem: <>
        <p>Is the sequence of natural numbers a subsequence of the following sequence?</p>
        {mathDiv("0, 2, 4, 6, 8,#hskip 5pt 1, 3, 5, 7, 9, #hskip 5pt 10, 12, 14, 16, 18, #hskip 5pt 11, 13, #dots")}
      </>,
      answer: <>
        <p>No, since there is no {mathSpan("2")} after {mathSpan("1")}.</p>
      </>,
    },
  ],
};
