import type {Collection} from "../../../../framework/content.tsx";
import {inductionSumsBeginnerItems} from "./inductionSums.tsx";
import {inductionDivisibilityBeginnerItems} from "./inductionDivisibility.tsx";
import {inductionInequalitiesBeginnerItems} from "./inductionInequalities.tsx";
import {inductionVariousBeginnerItems} from "./inductionVarious.tsx";

export const inductionBeginners: Collection = {
  id: "beginners",
  name: "Beginners",
  type: "collection",
  exercises: [
      ...inductionSumsBeginnerItems,
      ...inductionDivisibilityBeginnerItems,
      ...inductionInequalitiesBeginnerItems,
      ...inductionVariousBeginnerItems,
  ],
};
