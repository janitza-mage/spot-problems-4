import type {Exercise, Collection} from "../../../../framework/content.tsx";
import {mathDiv, mathSpan} from "../../../../framework/technical-components/Math/Math.tsx";
import {isNat0, isNatPlus} from "../../util/math-atoms.tsx";

export const inductionVariousBeginnerItems: Exercise[] = [
  {
    type: "exercise",
    label: "Number of subsets",
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
    type: "exercise",
    label: "Number of arrangements",
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
    type: "exercise",
    label: "Pigeonhole Principle",
    problem: <>
      Let {isNatPlus("n")}.
      The <i>Pigeonhole Principle</i> says that if you put {mathSpan("(n+1)")} objects
      into {mathSpan("n")} containers, then at least one container must contain at least two objects.
      Use induction to prove this principle. (Note that there are different ways to express this principle, as
      well as generalizations. For this problem, stick to the simple form as described.)
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
        of those containers that contains at least two objects. In the third case, no object is placed into this
        first container, and again, at least one of the other containers must contain at least two objects.
      </p>
    </>,
  },
  {
    type: "exercise",
    label: "Number of Diagonals",
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
        Finally, for every vertex other than these neighbors, a diagonal can be found by connecting it with the
        previously selected vertex, adding another {mathSpan("(n-2)")} diagonals. Taken together, this makes
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
];

export const inductionVarious: Collection = {
  id: "various",
  name: "Various Problems",
  type: "collection",
  exercises: [
    {
      type: "exercise",
      label: <>{mathSpan("101010..._2")}</>,
      problem: <>
        <p>
          Let {isNatPlus("n")}. Let {isNatPlus("x")} be a number that is obtained by repeating, in binary (base-2)
          notation, the digits {mathSpan("10")} for {mathSpan("n")} times. Examples:
        </p>
        <div style={{fontSize: "0.8em"}}>
          <div>{mathSpan("n=1 #implies x=10_{(2)} = 1#cdot 2^1 + 0#cdot 2^0")}</div>
          <div>{mathSpan("n=2 #implies x=1010_{(2)} = 1#cdot 2^3 + 0#cdot 2^2 + 1#cdot 2^1 + 0#cdot 2^0")}</div>
          <div>{mathSpan("n=3 #implies x=101010_{(2)} = 1#cdot 2^5 + 0#cdot 2^4 + 1#cdot 2^3 + 0#cdot 2^2 + 1#cdot 2^1 + 0#cdot 2^0")}</div>
          <div>{mathSpan("#ldots")}</div>
        </div>
        <p>
          Use induction to prove that {mathSpan("x = #frac{2(4^n-1)}{3}")}.
        </p>
      </>,
      answer: <>
        <p>
          We first write {mathSpan("x")} as a sum:
        </p>
        {mathDiv("x = #sum_{i=1}^{n}2^{2i-1}")}
        <p>Base case ({mathSpan("n = 1")}):</p>
        {mathDiv("#sum_{i=1}^{n}2^{2i-1} = #sum_{i=1}^{1}2^{2i-1} = 2^{2#cdot 1-1} = 2^1 = 2")}
        <p>and</p>
        {mathDiv("#frac{2(4^n-1)}{3} = #frac{2(4^1-1)}{3} = #frac{2(4-1)}{3} = #frac{6}{3} = 2")}
        <p>Induction step: Assume that</p>
        {mathDiv("#sum_{i=1}^{n}2^{2i-1} = #frac{2(4^n-1)}{3}")}
        <p>(induction hypothesis). Then show that</p>
        {mathDiv("#sum_{i=1}^{n+1}2^{2i-1} = #frac{2(4^{n+1}-1)}{3}")}
        <p>Proof:</p>
        {mathDiv("#sum_{i=1}^{n+1}2^{2i-1}")}
        {mathDiv("= 2^{2(n+1)-1} + #sum_{i=1}^{n}2^{2i-1}")}
        <div>using the induction hypothesis:</div>
        {mathDiv("= 2^{2n+1} + #frac{2(4^n-1)}{3}")}
        {mathDiv("= #frac{3#cdot 2^{2n+1}}{3} + #frac{2(4^n-1)}{3}")}
        {mathDiv("= #frac{3#cdot 2^{2n+1} + 2(4^n-1)}{3}")}
        {mathDiv("= #frac{6#cdot 2^{2n} + 2(4^n-1)}{3}")}
        {mathDiv("= #frac{6#cdot 4^{n} + 2(4^n-1)}{3}")}
        {mathDiv("= #frac{2#cdot (3#cdot 4^n + 4^n - 1)}{3}")}
        {mathDiv("= #frac{2#cdot (4#cdot 4^n - 1)}{3}")}
        {mathDiv("= #frac{2#cdot (4^{n+1} - 1)}{3}")}
      </>,
    },
    {
      type: "exercise",
      label: <>Sum of numbers whose product is {mathSpan("1")}</>,
      problem: <>
        <p>
          Let {isNatPlus("n")}. Let
        </p>
        {mathDiv("x_1, x_2, ..., x_n #in #mathbb{R}, x_i>0")}
        <p>
          and
        </p>
        {mathDiv("x_1#cdot x_2#cdot x_3#cdot ...#cdot x_n=1")}
        <p>
          Use induction to prove that
        </p>
        {mathDiv("x_1+x_2+x_3+...+x_n #geq n")}
      </>,
      answer: <>
        <p>
          Base case ({mathSpan("n=1")}): There is only {mathSpan("x_1")} with the condition
          that {mathSpan("x_1=1")}, so {mathSpan("x_1 = 1 #geq 1 = n")}.
        </p>
        <p>
          Induction step: Let
        </p>
        {mathDiv("x_1, x_2, ..., x_n, n_{n+1} #in #mathbb{R}, x_i > 0")}
        <p>
          and
        </p>
        {mathDiv("x_1#cdot x_2#cdot x_3#cdot ...#cdot x_n#cdot x_{n+1}=1")}
        <p>
          We pick the smallest and largest of these numbers and call them {mathSpan("x_p")} and {mathSpan("x_q")}, respectively.
          Then {mathSpan("x_p #leq 1")} and {mathSpan("x_q #geq 1")}, otherwise the product of
          all {mathSpan("x_i")} cannot be {mathSpan("1")}.
        </p>
        <p>
          Next, we define {mathSpan("n")} numbers called {mathSpan("y_i")} by setting
        </p>
        {mathDiv("y_1 = x_p#cdot x_q")}
        <p>
          and {mathSpan("y_{2..n}")} as the remaining {mathSpan("x_i")}. The product of all {mathSpan("y_i")} is
          the same as that of the {mathSpan("x_i")}, and {mathSpan("y_i > 0")}. Using the induction hypothesis,
        </p>
        {mathDiv("y_1 + y_2 + y_3 + ... + y_n #geq n")}
        {mathDiv("#iff y_2 + y_3 + ... + y_n #geq n - y_1")}
        {mathDiv("#iff y_2 + y_3 + ... + y_n + x_p + x_q #geq n - y_1 + x_p + x_q")}
        {mathDiv("#iff #sum_ix_i #geq n - y_1 + x_p + x_q")}
        <p>
          and
        </p>
        {mathDiv("n - y_1 + x_p + x_q")}
        {mathDiv("= n - x_px_q + x_p + x_q")}
        {mathDiv("= n + x_p(1 - x_q) + x_q")}
        {mathDiv("= n - x_p(x_q - 1) + x_q - 1 + 1")}
        {mathDiv("= n + (1 - x_p)(x_q - 1) + 1")}
        <p>
          Since {mathSpan("x_p #leq 1")}, {mathSpan("1 - x_p #geq 0")}.
          Since {mathSpan("x_q #geq 1")}, {mathSpan("x_q - 1 #geq 0")}.
          Therefore, the above is
        </p>
        {mathDiv("#geq n + 1")}
      </>,
    },
    {
      type: "exercise",
      label: <>"All horses are the same color."</>,
      problem: <>
        <p>
          This problem shows how wrong usage of induction can lead to seemingly "prove" a false claim. Your task
          is to find the error in that "proof".
        </p>
        <p>
          Claim: "All horses are the same color."
        </p>
        <p>
          To write that claim more precisely, let {isNatPlus("n")}. This "proof" will use induction to show that for
          every group of {mathSpan("n")} horses, all horses are the same color.
        </p>
        <p>
          Base case: in a group of only one horse, all horses in that group obviously are the same color.
        </p>
        <p>
          Induction step: Assume that for every group of {mathSpan("n")} horses, all those horses are the same color
          (induction hypothesis). The induction step then has to show that for every group
          of {mathSpan("(n+1)")} horses, all horses in that group are the same color.
        </p>
        <p>
          Proof: Choose two horses from the group of {mathSpan("(n+1)")} horses -- call them A and B. The group of
          horses that are remaining when A is exlcuded has {mathSpan("n")} horses, which by the induction hypothesis
          all are the same color. Similarly, the group of horses that are remaining when B is excluded also
          has {mathSpan("n")} horses, which by the induction hypothesis all are the same color. All horses other
          than A and B therefore are the same color as both A and B, which implies that A and B also are that color,
          and therefore all (n+1) horses are the same color.
        </p>
        <p>
          Since the original claim is obviously false, the error must be in the reasoning. Find that error.
        </p>
      </>,
      answer: <>
        <p>
          The error is in the "proof" for the induction step. It <i>is</i> valid to choose two horses A and B
          since the group of {mathSpan("(n+1)")} horses has at least two horses. Similarly, it is valid to state
          that the groups of remaining horses when excluding either one are all the same color, by the
          induction hypothesis.
        </p>
        <p>
          However, the "proof" next says: "All horses other than A and B therefore are the same color as both A and B".
          This <i>is</i> true, but it is important to note that if {mathSpan("n=1")}, then A and B are the only horses
          in the group of {mathSpan("(n+1)")} horses, so the set of "all other horses" is the empty set. This does
          not invalidate the above statement, since a statement about an element of the empty set is always true.
        </p>
        <p>
          It does, however, invalidate the next conclusion, which is that "A and B also are that color". If A and B
          are the only horses, then the subsets obtained by removing either one do not share any common element.
          Without a common element -- that is, a third horse to choose which is both the same color as A and the
          same color as B -- claiming that A and B must be the same color is wrong.
        </p>
      </>,
    },
  ],
};
