import type {Collection, Exercise} from "../../../../framework/content.tsx";
import {inductionSumsBeginnerItems} from "./inductionSums.tsx";
import {inductionDivisibilityBeginnerItems} from "./inductionDivisibility.tsx";
import {inductionInequalitiesBeginnerItems} from "./inductionInequalities.tsx";
import {inductionVariousBeginnerItems} from "./inductionVarious.tsx";
import {mathDiv, mathSpan} from "../../../../framework/technical-components/Math/Math.tsx";

const baseCaseOtherThanOneExercise: Exercise = {
  type: "exercise",
  label: <>Base cases other than {mathSpan("n=1")}</>,
  problem: <>
    <p>
      Prove that for {mathSpan("n#ge 3")},
    </p>
    {mathDiv("n^2 + n + 1 #ge 13")}
  </>,
  answer: <>
    <p>
      Base case ({mathSpan("n = 3")}):
    </p>
    {mathDiv("n^2 + n + 1 = 3^2 + 3 + 1 = 9 + 3 + 1 = 13 #ge 13")}
    <p>
      Induction step: Assume that
    </p>
    {mathDiv("n^2 + n + 1 #ge 13")}
    <p>
      (induction hypothesis). Then show that
    </p>
    {mathDiv("(n+1)^2 + (n+1) + 1 #ge 13")}
    <p>
      Proof:
    </p>
    {mathDiv("(n+1)^2 + (n+1) + 1")}
    {mathDiv("= n^2 + 2n + 1 + n + 1 + 1")}
    {mathDiv("= (n^2 + n + 1) + (2n + 2)")}
    <p>
      using the induction hypothesis:
    </p>
    {mathDiv("#ge 13 + (2n + 2)")}
    <p>
      using {mathSpan("n>3")}:
    </p>
    {mathDiv("#ge 13 + (2#cdot 3 + 2)")}
    {mathDiv("#ge 13")}
  </>,
};

    export const inductionBeginners: Collection = {
  id: "beginners",
  name: "Beginners",
  type: "collection",
  exercises: [
      ...inductionSumsBeginnerItems,
      ...inductionDivisibilityBeginnerItems,
    baseCaseOtherThanOneExercise,
      ...inductionInequalitiesBeginnerItems,
      ...inductionVariousBeginnerItems,
  ],
};
