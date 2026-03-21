import type {Folder} from "../../../framework/content.tsx";
import {naturalNumbers} from "./naturalNumbers.tsx";
import {sums} from "./sums.tsx";
import {products} from "./products.tsx";
import {sets} from "./sets.tsx";
import {sumsOverSets} from "./sumsOverSets.tsx";
import {relationsSubtree} from "./relations/relationsSubtree.tsx";

export const mathBasicsSubtree: Folder = {
  id: "matheBasics",
  name: "Basics",
  type: "folder",
  elements: [
    naturalNumbers,
    sums,
    products,
    sets,
    sumsOverSets,
    relationsSubtree,
      
      /*
      TODO: proofs
    essentials of a proof -- cannot be wrong
    "positive" proofs (e.g. over finite sets)
    negative proofs
    and/or, symbols
    implication, reverse implication, equivalence
    quantifiers
    meaning of "q.e.d." 
       */
  ],
};
