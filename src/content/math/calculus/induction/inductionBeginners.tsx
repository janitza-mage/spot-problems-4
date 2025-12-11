import type {ExerciseNode} from "../../../../framework/content.tsx";
import {inductionSumsBeginnerItems} from "./inductionSums.tsx";
import {inductionDivisibilityBeginnerItems} from "./inductionDivisibility.tsx";
import {inductionInequalitiesBeginnerItems} from "./inductionInequalities.tsx";
import {inductionVariousBeginnerItems} from "./inductionVarious.tsx";

export const inductionBeginners: ExerciseNode = {
  id: "beginners",
  name: "Beginners",
  type: "exercise",
  contentItems: [
      ...inductionSumsBeginnerItems,
      ...inductionDivisibilityBeginnerItems,
      ...inductionInequalitiesBeginnerItems,
      ...inductionVariousBeginnerItems,
  ],
};
