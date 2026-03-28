import type {Collection} from "../../../../framework/content.tsx";
import {mathDiv, mathSpan} from "../../../../framework/technical-components/Math/Math.tsx";

export const functionsSubtree: Collection = {
  id: "functions",
  name: "Functions",
  type: "collection",
  exercises: [
    {
      type: "exercise",
      label: <>Definition (1)</>,
      problem: <p>
        Let {mathSpan("A")} and {mathSpan("B")} be sets. Give the definitions of a partial and total
        function {mathSpan("A #rightarrow B")} as a special case of a relation.
      </p>,
      answer: <>
        <p>A partial function {mathSpan("A #rightarrow B")} is a relation between elements of {mathSpan("A")} (on the
          left side) and {mathSpan("B")} (on the right side), such that each {mathSpan("x #in A")} appears in at most
          one element of the relation.</p>
        <p>A total function {mathSpan("A #rightarrow B")} is a relation between elements of {mathSpan("A")} (on the
          left side) and {mathSpan("B")} (on the right side), such that each {mathSpan("x #in A")} appears in exactly
          one element of the relation.</p>
      </>,
    },
    {
      type: "exercise",
      label: <>Image and Preimage</>,
      problem: <>
        <p>Given the function</p>
        {mathDiv("f(x) = x^2")}
        <p>What are the image and preimage of the interval {mathSpan("[3, 5]")}?</p>
      </>,
      answer: <>
        <p>Image: {mathSpan("[9, 25]")}</p>
        <p>Preimage: {mathSpan("[-#sqrt{5}, -#sqrt{3}] #cup [#sqrt{3}, #sqrt{5}]")}</p>
      </>,
    },
    {
      type: "exercise",
      label: <>Injectivity, Surjectivity, Bijectivity</>,
      problem: <>
        <p>Given the following functions from {mathSpan("#mathbb{R} #rightarrow #mathbb{R}")}, which of them are
          injective, surjective, and bijective?</p>
        {mathDiv("f_1(x) = x + 5")}
        {mathDiv("f_2(x) = x^2")}
        {mathDiv("f_3(x) = #sqrt{x}")}
        {mathDiv("f_4(x) = x^3 - x")}
      </>,
      answer: <>
        <ul>
          <li>{mathSpan("f_1")} is injective: For any {mathSpan("a")} and {mathSpan("b")}</li>
          {mathDiv("f_1(a) = f_1(b) #implies a + 5 = b + 5 #implies a = b")}
          <li>{mathSpan("f_1")} is surjective: Given {mathSpan("y")},</li>
          {mathDiv("f_1(y - 5) = (y - 5) + 5 = y")}
          <li>{mathSpan("f_2")} is not injective: </li>
          {mathDiv("f_2(-1) = f_2(1)")}
          <li>{mathSpan("f_2")} is not surjective: </li>
          {mathDiv("f_2(x) #neq 1")}
          <li>{mathSpan("f_3")} is injective: For any {mathSpan("a")} and {mathSpan("b")}</li>
          {mathDiv("#sqrt{a} = #sqrt{b} #implies a = b")}
          <li>{mathSpan("f_3")} is not surjective: </li>
          {mathDiv("#sqrt{x} #neq -1")}
          <li>{mathSpan("f_4")} is not injective: </li>
          {mathDiv("f_4(-1) = f_4(1)")}
          <li>{mathSpan("f_4")} is surjective since it is continuous and goes from {mathSpan("-#infty")} to {mathSpan("+#infty")}. </li>
          <li><i>bijective</i> is just short for "injective and surjective", so {mathSpan("f_1")} is bijective,
            while the others are not.</li>
        </ul>
      </>,
    },
    {
      type: "exercise",
      label: <>Composition</>,
      problem: <>
        {mathDiv("f_1(x) = x + 1")}
        {mathDiv("f_2(x) = x^2")}
        {mathDiv("f_3 = f_1 #circ f_2")}
        {mathDiv("f_4 = f_2 #circ f_1")}
        <p>Give a formula for {mathSpan("f_3")} and {mathSpan("f_4")}.</p>
      </>,
      answer: <>
        {mathDiv("f_3(x) = f_1(f_2(x)) = x^2 + 1")}
        {mathDiv("f_4(x) = f_2(f_1(x)) = (x + 1)^2")}
      </>,
    },
    {
      type: "exercise",
      label: <>Inverse (1)</>,
      problem: <>
        <p>Let</p>
        {mathDiv("f(x) = 3x + 5")}
        <p>Give a formula for the inverse function.</p>
      </>,
      answer: <>
        {mathDiv("f^-1(y) = #frac13(y - 5)")}
      </>,
    },
    {
      type: "exercise",
      label: <>Inverse (2)</>,
      problem: <>
        <p>Why are the functions</p>
        {mathDiv("f_1: #mathbb{R} #rightarrow #mathbb{R}; f_1(x) = x^2")}
        {mathDiv("f_2: #mathbb{R} #rightarrow #mathbb{R}; f_2(x) = #sqrt{x}")}
        <p>not the inverse of each other, although intuitively they are? What must be changed about them to math
        the intuition?</p>
      </>,
      answer: <>
        <p>They are not the inverse of each other for negative numbers. For example,</p>
        {mathDiv("#sqrt{(-5)^2} #neq -5")}
        <p>To match the intuition, the domain must be restricted to non-negative numbers:</p>
        {mathDiv("f_1: #mathbb{R}_0^+ #rightarrow #mathbb{R}_0^+; f_1(x) = x^2")}
        {mathDiv("f_2: #mathbb{R}_0^+ #rightarrow #mathbb{R}_0^+; f_2(x) = #sqrt{x}")}
      </>,
    },
  ],
};
