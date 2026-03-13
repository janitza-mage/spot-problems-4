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
        {mathDiv("#{0, 2, 4, 6, 8#}")}
      </>,
    },
    {
      type: "exercise",
      label: <>Set Comprehension</>,
      problem: <>
        <p>Let</p>
        {mathDiv("A := #{x #in #mathbb{N}^+_0 | x < 10 #land x #text{ is even }#}")}
        <p>Determine the elements of the following sets.</p>
        {mathDiv("#{x #in A | x #text{ is a multiple of } 3#}")}
      </>,
      answer: <>
        {mathDiv("#{0, 6#}")}
      </>,
    },
    {
      type: "exercise",
      label: <>Set Operators</>,
      problem: <>
        <p>Let</p>
        {mathDiv("A := #{1, 2, 3, 4, 5#}")}
        {mathDiv("B := #{3, 4, 5, 6, 7#}")}
        <p>Determine the elements of the following sets.</p>
        {mathDiv("A #cup B")}
        {mathDiv("A #cap B")}
        {mathDiv("A #setminus B")}
      </>,
      answer: <>
        {mathDiv("A #cup B = #{1, 2, 3, 4, 5, 6, 7#}")}
        {mathDiv("A #cap B = #{3, 4, 5#}")}
        {mathDiv("A #setminus B = #{1, 2#}")}
      </>,
    },
    {
      type: "exercise",
      label: <>The Meaning of "and"</>,
      problem: <>
        <p>Let</p>
        {mathDiv("E := #{x #in #mathbb{N}^+_0 | x #text{ is even }#}")}
        {mathDiv("O := #{x #in #mathbb{N}^+_0 | x #text{ is odd }#}")}
        <p>
          be the sets of even numbers and odd numbers.
        </p>
        <p>
          Next, the set X shall be a set that contains the even numbers <i>and</i> the odd numbers. The symbol for
          logical "and" is {mathSpan("#land")}, so you might write:
        </p>
        {mathDiv("X := #{x #in #mathbb{N}^+_0 | x #text{ is even } #land x #text{ is odd }#}")}
        <p>
          However, this is not correct. Why?
        </p>
      </>,
      answer: <>
        <p>
          The meaning of the set X as defined above is "the set of all numbers that are even <i>and</i> odd, at the
          same time". It is the empty set because there are no such numbers.
        </p>
        <p>
          The problem here is a double meaning of the word "and". When applied to a logical condition, it means that
          both conditions must hold at the same time. When applied to sets, however, it means the union of those sets:
        </p>
        {mathDiv("X := E #cup O")}
        <p>
          Since {mathSpan("E")} and {mathSpan("O")} are defined using logical conditions, {mathSpan("X")} is the set
          of numbers where <i>any</i> of those conditions holds, that is, a logical <i>or</i>:
        </p>
        {mathDiv("X := #{x #in #mathbb{N}^+_0 | x #text{ is even } #lor x #text{ is odd }#}")}
        <p>
          This double meaning of the word "and" must be kept in mind to interpret that word correctly when it appears
          in a problem.
        </p>
      </>,
    },
    {
      type: "exercise",
      label: <>Cartesian Product</>,
      problem: <>
        <p>Determine the following</p>
        {mathDiv("#{1, 2, 3#} #times #{100, 200#}")}
        {mathDiv("#{1, 2, 3#} #times #{1, 2#}")}
        {mathDiv("#{1#} #times #{1#}")}
        {mathDiv("#{1#} #times #{#}")}
        {mathDiv("#{#} #times #{#}")}
      </>,
      answer: <>
        {mathDiv("#{1, 2, 3#} #times #{100, 200#} = ## #{(1, 100), (1, 200), (2, 100), (2, 200), (3, 100), (3, 200)#}")}
        {mathDiv("#{1, 2, 3#} #times #{1, 2#} = ## #{(1, 1), (1, 2), (2, 1), (2, 2), (3, 1), (3, 2)#}")}
        {mathDiv("#{1#} #times #{1#} = #{(1, 1)#}")}
        {mathDiv("#{1#} #times #{#} = #{#}")}
        {mathDiv("#{#} #times #{#} = #{#}")}
      </>,
    },
    {
      type: "exercise",
      label: <>Cartesian Product</>,
      problem: <>
        <p>Let</p>
        {mathDiv("A = #{1, 2, 3#}")}
        <p>Determine {mathSpan("A^0")}, {mathSpan("A^1")} and {mathSpan("A^2")}.</p>
      </>,
      answer: <>
        {mathDiv("A^0 = #{#}")}
        {mathDiv("A^1 = A = #{1, 2, 3#}")}
        {mathDiv("A^2 = A #times A = ## #{(1, 1), (1, 2), (1, 3), (2, 1), (2, 2), (2, 3), (3, 1), (3, 2), (3, 3)#}")}
      </>,
    },
    {
      type: "exercise",
      label: <>Cartesian Product</>,
      problem: <>
        <p>Let</p>
        {mathDiv("A = #{1, 2#}")}
        <p>Determine {mathSpan("A^3")} and {mathSpan("A^*")}.</p>
      </>,
      answer: <>
        {mathDiv("A^3 = A #times A #times A = ## #{(1, 1, 1), (1, 1, 2), (1, 2, 1), (1, 2, 2), ## (2, 1, 1), (2, 1, 2), (2, 2, 1), (2, 2, 2)#}")}
        {mathDiv("A^* = A^0 #cup A^1 #cup A^2 #cup A^3 #cup A^4 #cup #dots ## = #{#{#}, #{1#}, #{2#}, ## #{1, 1#}, #{1, 2#}, #{2, 1#}, #{2, 2#}, #{1, 1, 1#}, #dots#}")}
      </>,
    },
  ],
};
