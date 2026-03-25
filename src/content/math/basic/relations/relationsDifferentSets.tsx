import type {Collection} from "../../../../framework/content.tsx";
import {mathDiv, mathSpan} from "../../../../framework/technical-components/Math/Math.tsx";

export const relationsDifferentSets: Collection = {
  id: "relationsDifferentSets",
  name: "Relations Between Different Sets",
  type: "collection",
  exercises: [
    {
      type: "exercise",
      label: <>Definition (1)</>,
      problem: <p>
        Give the definition of a (binary) relation between elements of the sets A and B.
      </p>,
      answer: <>
        <p>Here are two equivalent definitions:</p>
        <p>A (binary) relation is a set of ordered pairs, with the first component of each pair taken from A and
        the second one from B.</p>
        <p>A (binary) relation is a subset of the cartesian product (cross product) {mathSpan("A #times B")}.</p>
      </>,
    },
    {
      type: "exercise",
      label: <>Definition (2)</>,
      problem: <>
        <p>Let</p>
        {mathDiv("A = #{1, 2, 3, 4, 5#}")}
        {mathDiv("B = #{3, 4, 5, 6, 7#}")}
        <p>
          Which of the following is a (binary) relation between elements of
          <ul>
            <li>A and B</li>
            <li>B and A</li>
            <li>A and itself</li>
            <li>B and itself</li>
          </ul>
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
          {mathSpan("A #times B")}.</p>
        <p>A relation between elements of A and itself is therefore a subset of {mathSpan("A #times A")}.</p>
        {mathDiv("A #times B = #{(1, 3), (1, 4), (1, 5), (1, 6), (1, 7), (2, 3), (3, 3), ## #dots, (5, 6), (5, 7)#}")}
        {mathDiv("A #times A = #{(1, 1), (1, 2), (1, 3), (1, 4), (1, 5), (2, 1), (2, 2), ## #dots, (5, 4), (5, 5)#}")}
        <ul>
          <li>X_1 contains numbers, not pairs of numbers, so it is not a relation between anything.</li>
          <li>X_2 is a single pair of number, not a set, so it cannot be a subset of anything.</li>
          <li>
            X_3 is a relation between elements of
            <ul>
              <li>A and itself</li>
              <li>B and itself</li>
              <li>A and B</li>
              <li>B and A</li>
            </ul>
          </li>
          <li>X_4 is a set that contains a set of numbers, not pairs of numbers, so it is not a relation between anything.</li>
          <li>X_5 contains pairs, so it qualifies as a relation. However, both sides of the pairs contain the
            numbers from 1 to 7, which is not true for either A or B, so it cannot be a relation between any
            of <i>those</i> two sets.</li>
          <li>
            X_6 is a relation between elements of A and itself, but <b>not</b> between any of
            <ul>
              <li>B and itself</li>
              <li>A and B</li>
              <li>B and A</li>
            </ul>
            This is because B does not contain the number 1, which appears on both sides of a pair.
          </li>
          <li>X_7 contains a triple of numbers, not a pair. Therefore, it is not a (binary) relation between anything.
          Note that there is a concept of <i>n-ary</i> relations that extends binary relations to more than two
          sets involved, but those are much less widely used, so we will not deal with them here.</li>
          <li>X_8 is a relation between elements of A and itself, as well as A and B, but not between B and A nor B and itself.</li>
          <li>
            X_9 is a relation between elements of
            <ul>
              <li>A and itself</li>
              <li>B and itself</li>
              <li>A and B</li>
              <li>B and A</li>
            </ul>
          </li>
        </ul>
      </>,
    },
    {
      type: "exercise",
      label: <>...</>,
      problem: <>
        <p>Let</p>
        {mathDiv("A = #{1, 2, 3, 4, 5#}")}
        {mathDiv("B = #{3, 4, 5, 6, 7#}")}
        <p>Give the usual {mathSpan(">")} and {mathSpan("#geq")} relation between elements of A and B in set notation.</p>
      </>,
      answer: <>
        {mathDiv(">: #{(4, 3), (5, 3), (5, 4)#}")}
        {mathDiv("#geq: #{(3, 3), (4, 3), (4, 4), (5, 3), (5, 4), (5, 5)#}")}
      </>,
    },
  ],
};
