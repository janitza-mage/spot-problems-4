import type {Folder} from "../../../../framework/content.tsx";
import {subsequence} from "./subsequence.tsx";

export const sequencesSubtree: Folder = {
  id: "sequences",
  name: "Sequences",
  type: "folder",
  elements: [
    subsequence,
  ]
};
