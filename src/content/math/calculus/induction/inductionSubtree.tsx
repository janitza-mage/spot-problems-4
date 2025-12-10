import type {FolderNode} from "../../../../framework/content.tsx";
import {inductionSums} from "./inductionSums.tsx";
import {inductionDivisibility} from "./inductionDivisibility.tsx";
import {inductionProducts} from "./inductionProducts.tsx";
import {inductionInequalities} from "./inductionInequalities.tsx";
import {inductionVarious} from "./inductionVarious.tsx";

export const inductionSubtree: FolderNode = {
  id: "induction",
  name: "Induction",
  type: "folder",
  children: [inductionSums, inductionDivisibility, inductionProducts, inductionInequalities, inductionVarious],
};

// TODO base case other than n=1
// TODO cases where induction fails / is used wrong

// TODO new section -- binomial coefficients and pascal's triangle; prob fits into induction chapter
//   https://www.emath.de/Referate/induktion-aufgaben-loesungen.pdf
//     p.3; 26, 31, 32

// TODO new section -- working with ln(), is an induction exercise but fits better with ln() exercises
//   https://www.emath.de/Referate/induktion-aufgaben-loesungen.pdf
//     p.3; 28 

// TODO unclear: p.3, D9

// TODO p.4 sequences -> move to sequences chapter

// TODO p.4 derivatives -> move to derivatives chapter
