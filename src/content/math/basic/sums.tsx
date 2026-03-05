import type {Collection} from "../../../framework/content.tsx";
import {mathDiv, mathSpan} from "../../../framework/technical-components/Math/Math.tsx";
import tetrahedronImage from "./tetrahedron.png";
import {Quote} from "../../../framework/technical-components/layout/Quote.tsx";

export const sums: Collection = {
  id: "sums",
  name: "Sums",
  type: "collection",
  exercises: [
    {
      type: "exercise",
      label: <>{mathSpan("#sum_{i=1}^n i")}</>,
      problem: <>
        <p>The sum of the first {mathSpan("n")} natural numbers is written as:</p>
        {mathDiv("#sum_{i=1}^n i = 1 + 2 + 3 + ... + n")}
        <p>Solve:</p>
        {mathDiv("#sum_{i=1}^1 i = #underline{#hspace{2cm}}")}
        {mathDiv("#sum_{i=1}^2 i = #underline{#hspace{2cm}}")}
        {mathDiv("#sum_{i=1}^3 i = #underline{#hspace{2cm}}")}
        {mathDiv("#sum_{i=1}^4 i = #underline{#hspace{2cm}}")}
      </>,
      answer: <>
        {mathDiv("#sum_{i=1}^1 i = 1")}
        {mathDiv("#sum_{i=1}^2 i = 1 + 2 = 3")}
        {mathDiv("#sum_{i=1}^3 i = 1 + 2 + 3 = 6")}
        {mathDiv("#sum_{i=1}^4 i = 1 + 2 + 3 + 4 = 10")}
      </>,
    },
    {
      type: "exercise",
      label: <>{mathSpan("#sum_{i=1}^n i^2")}</>,
      problem: <>
        <p>The sum of the first {mathSpan("n")} square numbers is written as:</p>
        {mathDiv("#sum_{i=1}^n i^2 = 1^2 + 2^2 + 3^2 + ... + n^2")}
        <p>Solve:</p>
        {mathDiv("#sum_{i=1}^4 i^2 = #underline{#hspace{2cm}}")}
        {mathDiv("#sum_{i=1}^4 (i^2 + i) = #underline{#hspace{2cm}}")}
        {mathDiv("#sum_{i=1}^4 i^3 = #underline{#hspace{2cm}}")}
        {mathDiv("#sum_{i=1}^4 2 = #underline{#hspace{2cm}}")}
      </>,
      answer: <>
        {mathDiv("#sum_{i=1}^4 i^2 = 1^2 + 2^2 + 3^2 + 4^2 = 1 + 4 + 9 + 16 = 30")}
        {mathDiv("#sum_{i=1}^4 (i^2 + i) = (1^2 + 1) + (2^2 + 2) + (3^2 + 3) + (4^2 + 4)")}
        {mathDiv("= (1 + 1) + (4 + 2) + (9 + 3) + (16 + 4) = 2 + 6 + 12 + 20 = 40")}
        {mathDiv("#sum_{i=1}^4 i^3 = 1^3 + 2^3 + 3^3 + 4^3 = 1 + 8 + 27 + 64 = 100")}
        {mathDiv("#sum_{i=1}^4 2 = 2 + 2 + 2 + 2 = 8")}
      </>,
    },
    {
      type: "exercise",
      label: <>{mathSpan("#sum_{i=5}^{10} i")}</>,
      problem: <>
        <p>The sum of the numbers from 5 to 10 natural numbers are written as:</p>
        {mathDiv("#sum_{i=5}^{10} i = 5 + 6 + 7 + 8 + 9 + 10")}
        <p>Solve:</p>
        {mathDiv("#sum_{i=3}^5 i = #underline{#hspace{2cm}}")}
        {mathDiv("#sum_{i=3}^5 i^2 = #underline{#hspace{2cm}}")}
        {mathDiv("#sum_{i=3}^5 2 = #underline{#hspace{2cm}}")}
      </>,
      answer: <>
        {mathDiv("#sum_{i=3}^5 i = 3 + 4 + 5 = 12")}
        {mathDiv("#sum_{i=3}^5 i^2 = 3^2 + 4^2 + 5^2 = 9 + 16 + 25 = 50")}
        {mathDiv("#sum_{i=3}^5 2 = 2 + 2 + 2 = 6")}
      </>,
    },
    {
      type: "exercise",
      label: <>Splitting off terms at the top</>,
      problem: <>
        <p>Fill in the blanks:</p>
        {mathDiv("#sum_{i=1}^n i = (#sum_{i=1}^{n - 1} i) + #underline{#hspace{2cm}}")}
        {mathDiv("#sum_{i=1}^n i^2 = (#sum_{i=1}^{n - 1} i^2) + #underline{#hspace{2cm}}")}
        {mathDiv("#sum_{i=1}^{n+1} i^3 = (#sum_{i=1}^{n} i^3) + #underline{#hspace{2cm}}")}
        {mathDiv("#sum_{i=1}^{n+1} i^4 = (#sum_{i=1}^{n-1} i^4) + #underline{#hspace{2cm}}")}
      </>,
      answer: <>
        {mathDiv("#sum_{i=1}^n i = (#sum_{i=1}^{n - 1} i) + n")}
        {mathDiv("#sum_{i=1}^n i^2 = (#sum_{i=1}^{n - 1} i^2) + n^2")}
        {mathDiv("#sum_{i=1}^{n+1} i^3 = (#sum_{i=1}^{n} i^3) + (n+1)^3")}
        {mathDiv("#sum_{i=1}^{n+1} i^4 = (#sum_{i=1}^{n-1} i^4) + (n+1)^4 + n^4")}
      </>,
    },
    {
      type: "exercise",
      label: <>Extending a sum at the top</>,
      problem: <>
        <p>Fill in the blanks to have a single sum on the right:</p>
        {mathDiv("(#sum_{i=1}^n i) + (n + 1) = #underline{#hspace{2cm}}")}
        {mathDiv("(#sum_{i=1}^{2n} i) + (2n + 1) = #underline{#hspace{2cm}}")}
        {mathDiv("(#sum_{i=1}^n i^2) + #underline{#hspace{2cm}} = #sum_{i=1}^{n+1} i^2")}
      </>,
      answer: <>
        {mathDiv("(#sum_{i=1}^n i) + (n + 1) = #sum_{i=1}^{n+1} i")}
        {mathDiv("(#sum_{i=1}^{2n} i) + (2n + 1) = #sum_{i=1}^{2n + 1} i")}
        {mathDiv("(#sum_{i=1}^n i^2) + (i + 1)^2 = (#sum_{i=1}^{n+1} i^2)")}
      </>,
    },
    {
      type: "exercise",
      label: <>Splitting off terms at the bottom</>,
      problem: <>
        <p>Fill in the blanks:</p>
        {mathDiv("#sum_{i=1}^n i = (#sum_{i=2}^n i) + #underline{#hspace{2cm}}")}
        {mathDiv("#sum_{i=1}^n i^2 = (#sum_{i=3}^n i) + #underline{#hspace{2cm}}")}
        {mathDiv("#sum_{i=5}^n i^2 = (#sum_{i=6}^n i^2) + #underline{#hspace{2cm}}")}
      </>,
      answer: <>
        {mathDiv("#sum_{i=1}^n i = (#sum_{i=2}^n i) + 1")}
        {mathDiv("#sum_{i=1}^n i^2 = (#sum_{i=3}^n i) + 1^2 + 2^2")}
        {mathDiv("#sum_{i=5}^n i^2 = (#sum_{i=6}^n i^2) + 5^2")}
      </>,
    },
    {
      type: "exercise",
      label: <>Extending a sum at the bottom</>,
      problem: <>
        <p>Fill in the blanks to have a single sum on the right:</p>
        {mathDiv("(#sum_{i=3}^n i) + #underline{#hspace{2cm}} = (#sum_{i=2}^n i)")}
        {mathDiv("(#sum_{i=3}^n i^2) + #underline{#hspace{2cm}} = (#sum_{i=2}^n i^2)")}
        {mathDiv("(#sum_{i=4}^n i) + #underline{#hspace{2cm}} = (#sum_{i=1}^n i)")}
      </>,
      answer: <>
        {mathDiv("(#sum_{i=3}^n i) + 2 = (#sum_{i=2}^n i)")}
        {mathDiv("(#sum_{i=3}^n i^2) + 2^2 = (#sum_{i=2}^n i^2)")}
        {mathDiv("(#sum_{i=4}^n i) + 1 + 2 + 3 = (#sum_{i=1}^n i)")}
      </>,
    },
    {
      type: "exercise",
      label: <>Extending a sum -- complex example</>,
      problem: <>
        <p>Fill in the blank:</p>
        {mathDiv("(#sum_{i=1}^{2n} i) + (2n + 1) = (#sum_{i=1}^{2n + 2} i) + #underline{#hspace{2cm}}")}
      </>,
      answer: <>
        {mathDiv("(#sum_{i=1}^{2n} i) + (2n + 1) = (#sum_{i=1}^{2n + 2} i) + (-2n - 2)")}
      </>,
    },
    {
      type: "exercise",
      label: <>Index shift</>,
      problem: <>
        <p>Rewrite the left side as a single sum starting at {mathSpan("i=1")}.</p>
        {mathDiv("#sum_{i=3}^{n} i^2 = #underline{#hspace{2cm}}")}
      </>,
      answer: <>
        {mathDiv("#sum_{i=3}^{n} i^2 = #sum_{i=1}^{n-2} (i + 2)^2")}
      </>,
    },
    {
      type: "exercise",
      label: <>Double Sums (1)</>,
      problem: <>
        <p>Suppose a tetrahedron gets build out of spheres like this:</p>
        <div><img src={tetrahedronImage} /></div>
        <p>How many spheres are needed to build a tetrahedron with {mathSpan("n")} layers? Write as a double sum.</p>
      </>,
      answer: <>
        <p>
          Each layer is made up of rows of spheres from length {mathSpan("1")} to a length that is equal to the
          layer number. To get the number of spheres for one layer, add all numbers from {mathSpan("1")} to the
          layer number. To get the total number, add all layers:
        </p>
        {mathDiv("#sum_{i=1}^{n} #sum_{j=1}^{i} j")}
      </>,
    },
    {
      type: "exercise",
      label: <>Double Sums (2)</>,
      problem: <>
        <p>Write the sum of all products that can be made from the numbers {mathSpan("1")} to {mathSpan("n")} as a
          sum-of-products. In this exercise, products like {mathSpan("3#cdot 5")} and {mathSpan("5#cdot 3")} are
          considered different and so should both be added, but swapping the factors of {mathSpan("3#cdot 3")} results
          in the same product and so should be counted only once.</p>
      </>,
      answer: <>
        {mathDiv("#sum_{i=1}^n #sum_{j=1}^n (i #cdot j)")}
      </>,
    },
    {
      type: "exercise",
      label: <>Double Sums (3)</>,
      problem: <>
        <p>Write the sum of all products that can be made from the numbers {mathSpan("1")} to {mathSpan("n")} as a
          sum-of-products. In this exercise, products like {mathSpan("3#cdot 5")} and {mathSpan("5#cdot 3")} are
          considered the same and should be counted only once.</p>
      </>,
      answer: <>
        {mathDiv("#sum_{i=1}^n #sum_{j=1}^i (i #cdot j)")}
      </>,
    },
    {
      type: "exercise",
      label: <>Double Sums (4)</>,
      problem: <>
        <p>Suppose somebody is solving this exercise:</p>
        <Quote>Write the sum of all products that can be made from the numbers {mathSpan("1")} to {mathSpan("n")} as a
          sum-of-products. In this exercise, products like {mathSpan("3#cdot 5")} and {mathSpan("5#cdot 3")} are
          considered different and so should both be added, but swapping the factors of {mathSpan("3#cdot 3")} results
          in the same product and so should be counted only once.</Quote>
        <p>and this is the proposed solution:</p>
        {mathDiv("#sum_{i=1}^n #sum_{i=1}^n (i #cdot i)")}
        <p>This looks like adding squares instead of <i>all</i> products, but something worse is wrong. What is it?</p>
      </>,
      answer: <>
        Both sums use {mathSpan("i")} as the counting index. This is not allowed since {mathSpan("i")} now refers to
        two different numbers at the same time.
      </>,
    },
    {
      type: "exercise",
      label: <>Double Sums (5)</>,
      problem: <>
        <p>Suppose somebody is solving this exercise:</p>
        <Quote>Write a formula for the result of multiplying two numbers. The first is the sum of the
          first {mathSpan("n")} square numbers. The second is the sum of the first {mathSpan("n")} cube numbers.</Quote>
        <p>and this is the proposed solution:</p>
        {mathDiv("(#sum_{i=1}^n i^2) #cdot (#sum_{i=1}^n i^3)")}
        <p>Assess this solution.</p>
      </>,
      answer: <>
        <p>The solution is correct. One might think that there is a problem because both sums use {mathSpan("i")} as
        the counting index. However, this is not a problem because the sums are not nested: Without nesting,
        there is no part of the formula where {mathSpan("i")} refers to two values at once.</p>
      </>,
    },
  ],
};
