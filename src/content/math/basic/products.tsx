import type {Collection} from "../../../framework/content.tsx";
import {mathDiv, mathSpan} from "../../../framework/technical-components/Math/Math.tsx";

export const products: Collection = {
  id: "products",
  name: "Products",
  type: "collection",
  exercises: [
    {
      type: "exercise",
      label: <>{mathSpan("#prod_{i=1}^n i")}</>,
      problem: <>
        <p>The product of the first {mathSpan("n")} natural numbers is written as:</p>
        {mathDiv("#prod_{i=1}^n i = 1 #cdot 2 #cdot 3 #cdot #dots #cdot n")}
        <p>Note that this is just the definition of the factorial:</p>
        {mathDiv("n! := #prod_{i=1}^n i")}
        <p>Solve:</p>
        {mathDiv("#prod_{i=1}^1 i = #underline{#hspace{2cm}}")}
        {mathDiv("#prod_{i=1}^2 i = #underline{#hspace{2cm}}")}
        {mathDiv("#prod_{i=1}^3 i = #underline{#hspace{2cm}}")}
        {mathDiv("#prod_{i=1}^4 i = #underline{#hspace{2cm}}")}
      </>,
      answer: <>
        {mathDiv("#prod_{i=1}^1 i = 1")}
        {mathDiv("#prod_{i=1}^2 i = 1 #cdot 2 = 2")}
        {mathDiv("#prod_{i=1}^3 i = 1 #cdot 2 #cdot 3 = 6")}
        {mathDiv("#prod_{i=1}^4 i = 1 #cdot 2 #cdot 3 #cdot 4 = 24")}
      </>,
    },
    {
      type: "exercise",
      label: <>Exponentiation written as a Product</>,
      problem: <>
        <p>Define exponentiation using the product symbol:</p>
        {mathDiv("a^n = #underline{#hspace{2cm}}")}
      </>,
      answer: <>
         {mathDiv("a^n = #prod_{i=1}^n a")}
      </>,
    },
    {
      type: "exercise",
      label: <>Sum of factorials</>,
      problem: <>
        <p>Write the sum of the first n factorials as a sum-of-products.</p>
      </>,
      answer: <>
         {mathDiv("#sum_{i=1}^n i! = #sum_{i=1}^n #prod_{j=1}^i j")}
      </>,
    },
  ],
};
