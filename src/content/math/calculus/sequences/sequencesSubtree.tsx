import type {Folder} from "../../../../framework/content.tsx";
import {subsequence} from "./subsequence.tsx";
import {convergence} from "./convergence.tsx";
import {boundedness} from "./boundedness.tsx";
import {monotonicity} from "./monotonicity.tsx";

export const sequencesSubtree: Folder = {
  id: "sequences",
  name: "Sequences",
  type: "folder",
  elements: [
    subsequence,
    boundedness,
    monotonicity,
    convergence,
  ]
};
