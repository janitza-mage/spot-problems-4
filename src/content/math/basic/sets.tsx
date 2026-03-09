import type {Collection} from "../../../framework/content.tsx";
import {mathDiv, mathSpan} from "../../../framework/technical-components/Math/Math.tsx";

export const sets: Collection = {
  id: "sets",
  name: "Sets",
  type: "collection",
  exercises: [
    {
      type: "exercise",
      label: <>Set Size</>,
      problem: <>
        <p>What are the sizes of the following sets:</p>
        {mathDiv("#{1, 2, 3#}")}
        {mathDiv("#{4, 5, 6#}")}
        {mathDiv("#{10#}")}
        {mathDiv("#{#}")}
        {mathDiv("#{#{#}#}")}
        {mathDiv("#{#{#{#}#}#}")}
        {mathDiv("#{#{1, 2, 3#}#}")}
        <p>Notation: The size of set {mathSpan("S")} is written as {mathSpan("|S|")}.  </p>
      </>,
      answer: <>
        {mathDiv("|#{1, 2, 3#}| = 3")}
        <p>This is a set with three elements: 1, 2, 3.</p>
        {mathDiv("|#{4, 5, 6#}| = 3")}
        <p>This is a set with three elements: 4, 5, 6.</p>
        {mathDiv("|#{10#}| = 1")}
        <p>This is a set with one element: the number 10.</p>
        {mathDiv("|#{#}| = 0")}
        <p>This is the empty set, that is, a set with no elements.</p>
        {mathDiv("|#{#{#}#}| = 1")}
        <p>This is a set with one element, which is the empty set.</p>
        {mathDiv("|#{#{#{#}#}#}| = 1")}
        <p>This is a set with one element, which is the set {mathSpan("#{#{#}#}")}.</p>
        {mathDiv("|#{#{1, 2, 3#}#}| = 1")}
        <p>This is a set with one element. That element is a set which contains three numbers, but the outer set
          only contains that one set as its only element.</p>
      </>,
    },
    {
      type: "exercise",
      label: <>Multiplicity of Elements (1)</>,
      problem: <>
        <p>What are the sizes of the following sets:</p>
        {mathDiv("#{1, 2, 3, 1, 2, 3#}")}
        {mathDiv("#{4, 5, 6, 6#}")}
        {mathDiv("#{#{#}, #{#}, #{#}#}")}
        {mathDiv("#{#{#}, #{#{#}#}, #{#{#{#}#}#}#}")}
        <p>Notation: The size of set {mathSpan("S")} is written as {mathSpan("|S|")}.  </p>
      </>,
      answer: <>
        <p>An element either is or isn't in a set. It cannot be in the set multiple times. Writing it multiple times
          should be avoided to avoid confusion, but if it happens, it counts only once. Another exercise will
          give examples for when this is useful.</p>
        {mathDiv("|#{1, 2, 3, 1, 2, 3#}| = 3")}
        <p>This is a set with three elements: 1, 2, 3.</p>
        {mathDiv("|#{4, 5, 6, 6#}| = 3")}
        <p>This is a set with three elements: 4, 5, 6.</p>
        {mathDiv("|#{#{#}, #{#}, #{#}#}| = 1")}
        <p>This is a set with one element, which is the empty set.</p>
        {mathDiv("|#{#{#}, #{#{#}#}, #{#{#{#}#}#}#}| = 3")}
        <p>The empty set is not equal to a set which contains the empty set. So here the outer set contains three
          different elements.</p>
      </>,
    },
    {
      type: "exercise",
      label: <>Multiplicity of Elements (2)</>,
      problem: <>
        <p>Let {mathSpan("n #in #mathbb{N}^+_0")}. What are the sizes of the following sets:</p>
        {mathDiv("#{n, n + 1, n + 2#}")}
        {mathDiv("#{0, 1, 2, #dots, n#}")}
        {mathDiv("#{n, 2n, 3n#}")}
        {mathDiv("#{0, n^2, 3n, 17#}")}
      </>,
      answer: <>
        {mathDiv("|#{n, n + 1, n + 2#}| = 3")}
        <p>This is a set with three numbers starting at {mathSpan("n")}.</p>
        {mathDiv("|#{0, 1, 2, #dots, n#}| = n + 1")}
        <p>This is a set with all numbers from {mathSpan("0")} to {mathSpan("n")}.</p>
        {mathDiv("|#{n, 2n, 3n#}| = #begin{cases} 1 &#text{if } n=0 ## 3 &#text{otherwise } #end{cases}")}
        <p>If {mathSpan("n=0")}, then {mathSpan("2n=3n=0")}, so this set really has only one element. Otherwise
          the three numbers are distinct.</p>
        {mathDiv("|#{0, n^2, 3n, 17#}| = #begin{cases} 2 &#text{if } n=0 ## 3 &#text{if } n=3 ## 4 &#text{otherwise } #end{cases}")}
        <p>This set has at least two elements -- 0 and 17 -- and at most four elements since four terms are stated
          explicitly. For {mathSpan("n=0")}, {mathSpan("n^2=3n=0")} and the set has two elements.
          Otherwise, {mathSpan("n^2>0")} and {mathSpan("3n>0")}. Also, {mathSpan("17")} is neither square nor divisible
          by {mathSpan("3")}, so it is always distinct. So for {mathSpan("n>0")}, the set has at least three elements.
          It has three if {mathSpan("n^2=3n")}, which for {mathSpan("n>0")} is only the case if {mathSpan("n=3")}.
          In all other cases, the set has four elements.</p>
      </>,
    },
    {
      type: "exercise",
      label: <>Set Comprehension</>,
      problem: <>
        <p>Determine the elements of the following sets.</p>
        {mathDiv("#{x #in #mathbb{N}^+_0 | x < 10 #land x #text{ is even }#}")}
      </>,
      answer: <>
      </>,
    },
  ],
};

// circle the best description of union(A, B): "C and D" (???), C but not D, D but not C, C or D or both
// same for intersection
// "and" logical operator vs "and" which could mean union or intersection
// A = 1, 2, 3, 4, 5
// B = 3, 4, 5, 6, 7
// union(A, B) = 1, 2, 3, 4, 5, 6, 7
// intersection(A, B) = 3, 4, 5
// same with \

