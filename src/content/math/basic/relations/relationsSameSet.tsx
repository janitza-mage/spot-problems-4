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
    {
      type: "exercise",
      label: <>...</>,
      problem: <>
        <p>Note that an <i>irreflexive</i> relation is also called <i>strict</i></p>.
        <p>Let</p>
        {mathDiv("A = #{1, 2, 3#}")}
        <p>Given a relation R between elements on A, that relation can be made reflexive by including all missing pairs:</p>
        {mathDiv("R #cup #{(x, y) | x #in A#}")}
        <p>Similarly, R can be made irreflexive (strict) by removing all present pairs:</p>
        {mathDiv("R #setminus #{(x, y) | x #in A#}")}
        <p>What happens with the following relations when making them reflexive or
          irreflexive (strict): {mathSpan(">")}, {mathSpan("#geq")}, {mathSpan("<")}, {mathSpan("#leq")}</p>
      </>,
      answer: <>
        <p>Making {mathSpan(">")} reflexive gives {mathSpan("#geq")}</p>
        <p>Making {mathSpan(">")} strict has no effect since it is already strict</p>
        <p>Making {mathSpan("#geq")} reflexive has no effect since it is already reflexive</p>
        <p>Making {mathSpan("#geq")} strict gives {mathSpan(">")}</p>
        <p>Making {mathSpan("<")} reflexive gives {mathSpan("#leq")}</p>
        <p>Making {mathSpan("<")} strict has no effect since it is already strict</p>
        <p>Making {mathSpan("#leq")} reflexive has no effect since it is already reflexive</p>
        <p>Making {mathSpan("#leq")} strict gives {mathSpan("<")}</p>
      </>,
    },
    {
      type: "exercise",
      label: <>...</>,
      problem: <>
        <p>The following six terms mean six different things. Give their definition in terms of element pairs.</p>
        <ul>
          <li>symmetric</li>
          <li>not symmetric</li>
          <li>asymmetric</li>
          <li>not asymmetric</li>
          <li>antisymmetric</li>
          <li>not antisymmetric</li>
        </ul>
      </>,
      answer: <>
        <p>This answer uses the term "flipped" pair as follows: Flipping {mathSpan("(x, y)")} gives {mathSpan("(y, x)")}.</p>
        <ul>
          <li>symmetric: If a pair is present in R, then the flipped pair is also present. </li>
          <li>not symmetric: R contains a pair for which it is missing the flipped pair. </li>
          <li>asymmetric: If a pair is present in R, then the flipped pair is missing. </li>
          <li>not asymmetric: R contains both a pair and the flipped pair. </li>
          <li>antisymmetric: If a pair with unequal sides is present in R, then the flipped pair is missing. </li>
          <li>not antisymmetric: R contains a pair with unequal sides and the flipped pair. </li>
        </ul>
        <p></p>
      </>,
    },
    {
      type: "exercise",
      label: <>...</>,
      problem: <>
        <p>Let A be a set, and R a relation between elements of A. </p>
        <p>Explain the difference between the terms <i>symmetric</i>, <i>asymmetric</i> and <i>antisymmetric</i>
        in terms of an arbitrary element {mathSpan("(x, y) #in R")}.</p>
      </>,
      answer: <>
        <ul>
          <li>symmetric: {mathSpan("(y, x) #in R")}</li>
          <li>asymmetric: {mathSpan("(y, x) #notin R")}</li>
          <li>antisymmetric: {mathSpan("(y, x) #in R #implies x = y")}</li>
        </ul>
      </>,
    },
    {
      type: "exercise",
      label: <>...</>,
      problem: <>
        <p>Let A be a set and {mathSpan("#lhd")}, {mathSpan("#unlhd")}, {mathSpan("#rhd")}, {mathSpan("#unrhd")}, {mathSpan("#bowtie")} relations
          between elements of A. What properties can you expect from these relations <i>by convention</i>, based on the
          symbols used for them?</p>
        <p>Note that convention does not replace a formal definition. Rather, when choosing symbols to use, one
          should choose symbols that match the formal definition of the relations.</p>
      </>,
      answer: <>
        <p>By convention, a flipped symbol is used for a flipped (or "inverted") relation, and a symmetric symbol is
        used for a symmetric relation. An equals sign (or at least a horizontal line) below a symbol typically
        indicates the reflexive closure of another relation.</p>
        {mathDiv("#forall x, y #in A. #hskip 1em x #lhd y #iff y #rhd x")}
        {mathDiv("#forall x, y #in A. #hskip 1em x #unlhd y #iff y #unrhd x")}
        {mathDiv("#forall x, y #in A. #hskip 1em x #unlhd y #iff x #lhd y #lor x = y")}
        {mathDiv("#forall x, y #in A. #hskip 1em x #unrhd y #iff x #rhd y #lor x = y")}
        {mathDiv("#forall x, y #in A. #hskip 1em x #bowtie y #iff y #bowtie x")}
      </>,
    },
    {
      type: "exercise",
      label: <>...</>,
      problem: <>
        <p>Let A be a set and R be a relation between elements of A. Give a definition for the term <i>transitive</i> in
        terms of element pairs.</p>
      </>,
      answer: <p>
        If {mathSpan("(x, y) #in R")} and {mathSpan("(y, z) #in R")}, then {mathSpan("(x, z) #in R")}.
      </p>,
    },
    {
      type: "exercise",
      label: <>...</>,
      problem: <>
        <p>The {mathSpan("#leq")} relation on natural numbers are reflexive, transitive
          and antisymmetric. Now consider the relation {mathSpan("#leq'")} that is defined as</p>
        {mathDiv("x #leq' y #iff x #leq y #land x #geq y - 3")}
        <p>That is, {mathSpan("x #leq' y")} if x is equal to y or less than y, but not <i>much</i> less (at most
          3). Show that {mathSpan("#leq'")} is reflexive and antisymmetric, but not transitive.</p>
      </>,
      answer: <>
        <p>Reflexive:</p>
        {mathDiv("x #leq' x #iff x #leq x #land x #geq x - 3")}
        <p>Both conditions are obviously true.</p>
        <p>Antisymmetric: Assume that {mathSpan("x #leq' y")} and {mathSpan("y #leq' x")}. Then four conditions hold:</p>
        {mathDiv("x #leq y")}
        {mathDiv("y #leq x")}
        {mathDiv("x #geq y - 3")}
        {mathDiv("y #geq x - 3")}
        <p>The first two conditions imply that {mathSpan("x=y")}</p>
        <p>Not transitive:</p>
        {mathDiv("1 #leq' 4 #leq' 7")}
        <p>but</p>
        {mathDiv("1 #nleq' 7")}
      </>,
    },
      

      // TODO partial order, total order, strict and nonstrict order (> vs >=)

  ],
};
