import type {FolderNode} from "../../../../framework/content.tsx";
import {inductionSums} from "./inductionSums.tsx";
import {inductionDivisibility} from "./inductionDivisibility.tsx";

export const inductionSubtree: FolderNode = {
  id: "induction",
  name: "Induction",
  type: "folder",
  children: [inductionSums, inductionDivisibility],
};

// TODO base case other than n=1
// TODO cases where induction fails / is used wrong

// TODO new section
//   https://www.emath.de/Referate/induktion-aufgaben-loesungen.pdf
//     p.3; 26, 31, 32
// TODO new section
//   https://www.emath.de/Referate/induktion-aufgaben-loesungen.pdf
//     p.3; 28 
