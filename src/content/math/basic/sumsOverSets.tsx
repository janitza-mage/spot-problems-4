import type {Collection} from "../../../framework/content.tsx";
import {mathDiv} from "../../../framework/technical-components/Math/Math.tsx";

export const sumsOverSets: Collection = {
  id: "sumsOverSets",
  name: "Sums and Products over Sets",
  type: "collection",
  exercises: [
    {
      type: "exercise",
      label: <>Sum and Product over a Set</>,
      problem: <>
        <p>Let</p>
        {mathDiv("A = #{1, 2, 3, 4#}")}
        <p>Determine the following</p>
        {mathDiv("#sum_{x #in A}x")}
        {mathDiv("#sum_{x #in A}x^2")}
        {mathDiv("#prod_{x #in A}x")}
        {mathDiv("#prod_{x #in A}(x + 1)")}
      </>,
      answer: <>
        {mathDiv("#sum_{x #in A}x = 1 + 2 + 3 + 4 = 10")}
        {mathDiv("#sum_{x #in A}x^2 = 1^2 + 2^2 + 3^2 + 4^2 = 1 + 4 + 9 + 16 = 30")}
        {mathDiv("#prod_{x #in A}x = 1 #cdot 2 #cdot 3 #cdot 4 = 24")}
        {mathDiv("#prod_{x #in A}(x + 1) = 2 #cdot 3 #cdot 4 #cdot 5 = 120")}
      </>,
    },
    {
      type: "exercise",
      label: <>Sum and Product over the empty Set</>,
      problem: <>
        <p>Let</p>
        {mathDiv("A = #{#}")}
        <p>Determine the following</p>
        {mathDiv("#sum_{x #in A}x")}
        {mathDiv("#sum_{x #in A}x^2")}
        {mathDiv("#prod_{x #in A}x")}
        {mathDiv("#prod_{x #in A}(x + 1)")}
      </>,
      answer: <>
        {mathDiv("#sum_{x #in A}x = 0")}
        {mathDiv("#sum_{x #in A}x^2 = 0")}
        {mathDiv("#prod_{x #in A}x = 1")}
        {mathDiv("#prod_{x #in A}(x + 1) = 1")}
      </>,
    },
    {
      type: "exercise",
      label: <>Sum of all integers</>,
      problem: <>
        <p>Assume you are asked what the sum of all integers is:</p>
        {mathDiv("#mathbb{Z} = {..., -2, -1, 0, 1, 2, ...}")}
        {mathDiv("#sum_{x #in #mathbb{Z}}x = ?")}
        <p>Intuitively, the integers contain pairs of positive and negative numbers of equal magnitude. If you
          add these pairs together, you get zero. Can you prove this?</p>
      </>,
      answer: <>
        <p>
          You can't, because it is wrong. You cannot determine the sum of an infinite set because you would
          get different results depending on the order in which you add the numbers -- which just means that there
          is no well-defined sum.
        </p>
        <p>
          For example, adding the integers this way gives positive infinity:
        </p>
        {mathDiv("#sum_{x #in #mathbb{Z}}x")}
        {mathDiv("= 0 + (1 + 2 + (-1)) + (3 + 4 + (-2)) + (5 + 6 + (-3)) + #dots")}
        {mathDiv("= 0 + 2 + 5 + 8 + #dots")}
        {mathDiv("= +#infty")}
        <p>
          But adding them this way gives negative infinity:
        </p>
        {mathDiv("#sum_{x #in #mathbb{Z}}x")}
        {mathDiv("= 0 + ((-1) + (-2) + 1) + ((-3) + (-4) + 2) + #dots")}
        {mathDiv("= 0 + (-2) + (-5) + (-8) + #dots")}
        {mathDiv("= -#infty")}
        <p>
          So the sum of all integers is undefined.
        </p>
      </>,
    },
  ],
};
