import type {FolderNode} from "../../../../framework/content.tsx";
import {inductionSums} from "./inductionSums.tsx";
import {inductionDivisibility} from "./inductionDivisibility.tsx";

export const inductionSubtree: FolderNode = {
  id: "induction",
  name: "Induction",
  type: "folder",
  children: [inductionSums, inductionDivisibility],
};
