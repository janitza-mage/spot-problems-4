import type {Collection} from "../../../../framework/content.tsx";
import {mathDiv, mathSpan} from "../../../../framework/technical-components/Math/Math.tsx";

export const relationsSameSet: Collection = {
  id: "relationsSameSet",
  name: "Relations Within the Same Set",
  type: "collection",
  exercises: [
    {
      type: "exercise",
      label: <>Definition (1)</>,
      problem: <p>
        Give the definition of a (binary) relation between elements of a set A.
      </p>,
      answer: <>
        <p>Here are two equivalent definitions:</p>
        <p>A (binary) relation is a set of ordered pairs of the elements of A.</p>
        <p>A (binary) relation is a subset of the cartesian product (cross product) {mathSpan("A #times A")}.</p>
      </>,
    },
    {
      type: "exercise",
      label: <>Definition (2)</>,
      problem: <>
        <p>Let</p>
        {mathDiv("A = #{1, 2, 3, 4, 5#}")}
        <p>
          Which of the following is a (binary) relation between elements of A?
        </p>
        {mathDiv("X_1 = #{3, 4#}")}
        {mathDiv("X_2 = (3, 4)")}
        {mathDiv("X_3 = #{(3, 4)#}")}
        {mathDiv("X_4 = #{#{3, 4#}#}")}
        {mathDiv("X_5 = #{(1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (6, 6), (7, 7)#}")}
        {mathDiv("X_6 = #{(1, 1), (2, 2)#}")}
        {mathDiv("X_7 = #{(1, 2, 3)#}")}
        {mathDiv("X_8 = #{(1, 4), (2, 5)#}")}
        {mathDiv("X_9 = #{(4, 4), (5, 5)#}")}
      </>,
      answer: <>
        <p>Remember the definition: A (binary) relation is a subset of the cartesian product (cross product)
          {mathSpan("A #times A")}.</p>
        {mathDiv("A #times A = #{(1, 1), (1, 2), (1, 3), (1, 4), (1, 5), (2, 1), (2, 2), ## #dots, (5, 4), (5, 5)#}")}
        <ul>
          <li>X_1 contains numbers, not pairs of numbers, so it is not a relation between anything.</li>
          <li>X_2 is a single pair of number, not a set, so it cannot be a subset of anything.</li>
          <li>X_3 is a relation between elements of A.</li>
          <li>X_4 is a set that contains a set of numbers, not pairs of numbers, so it is not a relation between anything.</li>
          <li>X_5 contains pairs, so it qualifies as a relation, but the pairs contain elements that are not in A.</li>
          <li>X_6 is a relation between elements of A.</li>
          <li>X_7 contains a triple of numbers, not a pair. Therefore, it is not a (binary) relation between anything.
          Note that there is a concept of <i>n-ary</i> relations that extends binary relations to more than two
          sets involved, but those are much less widely used, so we will not deal with them here.</li>
          <li>X_8 is a relation between elements of A.</li>
          <li>X_9 is a relation between elements of A.</li>
        </ul>
      </>,
    },
    {
      type: "exercise",
      label: <>...</>,
      problem: <>
        <p>Let</p>
        {mathDiv("A = #{1, 2, 3#}")}
        <p>Give the usual {mathSpan(">")} and {mathSpan("#geq")} relation between elements of A in set notation.</p>
      </>,
      answer: <>
        {mathDiv(">: #{(2, 1), (3, 1), (3, 2)#}")}
        {mathDiv("#geq: #{(1, 1), (2, 1), (2, 2), (3, 1), (3, 2), (3, 3)#}")}
      </>,
    },
    {
      type: "exercise",
      label: <>...</>,
      problem: <>
        <p>Let</p>
        {mathDiv("A = #{1, 2, 3#}")}
        <p>Which of the following relations are reflexive, which are irreflexive, and which are neither?</p>
        {mathDiv("R_1 = #{#}")}
        {mathDiv("R_2 = #{(1, 1)#}")}
        {mathDiv("R_3 = #{(1, 1), (2, 2), (3, 3)#}")}
        {mathDiv("R_4 = #{(1, 1), (1, 2), (2, 1), (2, 2)#}")}
        {mathDiv("R_5 = #{(1, 1), (1, 2), (2, 2), (2, 3), (3, 3)#}")}
        {mathDiv("R_6 = (>)")}
        {mathDiv("R_7 = (#geq)")}
        {mathDiv("R_8 = #{(1, 2), (2, 3), (3, 1)#}")}
      </>,
      answer: <>
        <p>A relation is reflexive if every element in the set is related to itself.</p>
        <p>A relation is irreflexive if no element in the set is related to itself.</p>
        <p>A relation is neither reflexive nor irreflexive if some, but not all, elements in the set are related to
          themselves.</p>
        <p>A relation cannot be reflexive and irreflexive at the same time, except for the special case when the
          underlying set A is the empty set -- which is not the case here.</p>
        <ul>
          <li>{mathSpan("R_1")} is not reflexive because it does not contain {mathSpan("(1, 1)")}, but it is irreflexive.</li>
          <li>{mathSpan("R_2")} is not reflexive because it does not contain {mathSpan("(2, 2)")}. It is also not
          irreflexive because it contains {mathSpan("(1, 1)")}.</li>
          <li>{mathSpan("R_3")} is reflexive but not irreflexive.</li>
          <li>{mathSpan("R_4")} is not reflexive because it does not contain {mathSpan("(3, 3)")}. It is also not
            irreflexive because it contains {mathSpan("(1, 1)")}.</li>
          <li>{mathSpan("R_5")} is reflexive but not irreflexive.</li>
          <li>{mathSpan("R_6")} is not reflexive because it does not contain {mathSpan("(1, 1)")}. In other words, 1 is
            not greater than 1, so the greater-than relation is not reflexive. It is irreflexive because no number
            is greater than itself.</li>
          <li>{mathSpan("R_7")} is reflexive, because each number is greater-than-or-equal itself. It is not
            irreflexive.</li>
        </ul>
      </>,
    },
      
      // TODO symmetric
      // TODO asymmetric if xRy implies that yRx is impossible (vs. not symmetric)
      // TODO antisymmetric
      // TODO transitive
      // TODO examples: > >= < <= = andere äquivalenzklassen z.B. Rest beim Teilen durch 3
      // TODO partial order, total order, strict and nonstrict order (> vs >=)
      
  ],
};
