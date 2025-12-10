import type {ExerciseNode} from "../../../../framework/content.tsx";
import {mathSpan} from "../../../../framework/technical-components/Math/Math.tsx";
import {isNat0, isNatPlus} from "../../util/math-atoms.tsx";

// TODO review

export const inductionVarious: ExerciseNode = {
  id: "various",
  name: "Various Exercises",
  type: "exercise",
  contentItems: [
    {
      problem: <>
        Let {isNat0("n")}. Use induction to prove that every finite set of size {mathSpan("n")} has {mathSpan("2^n")} subsets.
      </>,
      answer: <>
        <p>
          Base case ({mathSpan("n = 0")}): {mathSpan("A")} is the empty set which has only one subset, which is {mathSpan("A")} itself.
          The number of subsets of {mathSpan("A")} is therefore equal to {mathSpan("2^n = 2^0 = 1")}.
        </p>
        <p>
          Induction step: Assume that every set of size {mathSpan("n")} has {mathSpan("2^n")} subsets. Let {mathSpan("A")} be a set
          of size {mathSpan("n + 1")}. Pick an element {mathSpan("a")} from {mathSpan("A")}, and let {mathSpan("B = A #setminus {a}")}.
          Then {mathSpan("B")} is a set of size {mathSpan("n")}. By the induction
          hypothesis, {mathSpan("B")} has {mathSpan("2^n")} subsets. For each of those subsets of {mathSpan("B")},
          we can construct two distinct subsets of {mathSpan("A")} by including or not including {mathSpan("a")} --
          all these sets are distinct because {mathSpan("B")} no longer contains {mathSpan("a")}. This gives
          us {mathSpan("2^n #cdot 2 = 2^{n + 1}")} subsets of {mathSpan("A")}.
        </p>
      </>,
    },
    {
      problem: <>
        Let {isNat0("n")}. Use induction to prove that the elements of every finite set of size {mathSpan("n")} can
        be arranged as an {mathSpan("n")}-tuple in {mathSpan("n!")} different ways. (note that {mathSpan("0! = 1")}).
      </>,
      answer: <>
        <p>
          Base case ({mathSpan("n = 0")}): {mathSpan("A")} is the empty set which can only be arranged as a 0-tuple,
          in only one way. The number of different tuples is therefore equal to {mathSpan("n! = 0! = 1")}.
        </p>
        <p>
          Induction step: Assume that the elements of every set of size {mathSpan("n")} can be arranged as
          an {mathSpan("n")}-tuple in {mathSpan("n!")} different ways. Let {mathSpan("A")} be a set of
          size {mathSpan("n + 1")}. Then there are {mathSpan("n+1")} elements to pick for the first position of the
          correponding {mathSpan("(n+1)")}-tuple. Assume that one of them has been picked for the first position.
          Then the set of remaining elements is a set of size {mathSpan("n")}. By the induction hypothesis, there
          are {mathSpan("n!")} ways to arrange these remaining elements as an {mathSpan("n")}-tuple to fill the
          remaining {mathSpan("n")} positions of the {mathSpan("(n+1)")}-tuple. For {mathSpan("A")}, there are
          therefore {mathSpan("(n+1)#cdot n! = (n+1)!")} ways to arrange its elements as an {mathSpan("(n+1)")}-tuple.
        </p>
      </>,
    },
    {
      problem: <>
        Let {isNatPlus("n")}.
        The <i>Pigeonhole Principle</i> says that if you put {mathSpan("(n+1)")} objects
        into {mathSpan("n")} containers, then at least one container must contain at least two objects.
        Use induction to prove this principle. (Note that there are different ways to express this principle, as
        well as generalizations. For this exercise, stick to the simple form as described.)
      </>,
      answer: <>
        <p>
          Base case ({mathSpan("n = 1")}): If you put {mathSpan("(n+1)=2")} objects into {mathSpan("n=1")} containers,
          then both objects must go into that container and it will contain more than one object.
        </p>
        <p>
          Induction step: Assume that the Pigeonhole Principle is true for {mathSpan("(n+1)")} objects
          and {mathSpan("n")} containers. Then consider {mathSpan("(n+2)")} objects and {mathSpan("(n+1)")} containers.
          Consider the first of those containers. There are three cases: In the first case, more than one object is
          placed into this first container, and the principle is immediately true. In the second case, only one
          object is placed into this first container. Then there are {mathSpan("(n+1)")} objects left to be placed
          into the {mathSpan("n")} remaining containers. By the induction hypothesis, there must be at least one
          container that contains at least two objects. This container must also contain at least two objects when
          considering the {mathSpan("(n+2)")} objects. In the third case, no object is placed into this first
          container, and again, at least one of the other containers must contain at least two objects.
        </p>
      </>,
    },
    {
      problem: <>
        Let {isNatPlus("n")}, {mathSpan("n #geq 3")}. Use induction to show that every convex polygon
        with {mathSpan("n")} vertices has {mathSpan("#frac{n(n-3)}{2}")} diagonals.
      </>,
      answer: <>
        <p>
          Base case ({mathSpan("n = 3")}): A triangle has no diagonals and
        </p>
        {mathDiv("#frac{n(n-3)}{2} = #frac{3(3-3)}{2} = 0")}
        <p>
          Induction step: Assume that every convex polygon with {mathSpan("n")} vertices
          has {mathSpan("#frac{n(n-3)}{2}")} diagonals. Consider a convex polygon with {mathSpan("(n+1)")} vertices.
          Choose one vertex, and consider the polygon that consists of the remaining vertices. This polygon is convex,
          has {mathSpan("n")} vertices and by the induction hypothesis, has {mathSpan("#frac{n(n-3)}{2}")} diagonals.
          Each of these diagonals is also a diagonal of the original {mathSpan("(n+1)")}-gon. In addition to that,
          the line connecting the to neighbors of the selected vertex is a diagonal in the {mathSpan("(n+1)")}-gon.
          Finally, for every vertex other than these neighbors, a diagonal can be found by connecting the sellected
          vertex with one of the other {mathSpan("(n-2)")} non-neighbor vertices. Taken together, this makes
        </p>
        {mathDiv("#frac{n(n-3)}{2} + 1 + (n-2)")}
        {mathDiv("= #frac{n(n-3)}{2} + #frac{2}{2} + #frac{2(n-2)}{2}")}
        {mathDiv("= #frac{n(n-3) + 2 + 2(n-2)}{2}")}
        {mathDiv("= #frac{n^2 - 3n + 2 + 2n - 4}{2}")}
        {mathDiv("= #frac{n^2 - n - 2}{2}")}
        {mathDiv("= #frac{(n+1)(n-2)}{2}")}
        {mathDiv("= #frac{(n+1)((n+1)-3)}{2}")}
      </>,
    },
  ],
};
