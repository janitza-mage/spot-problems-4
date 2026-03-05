import type {Folder} from "../../../framework/content.tsx";
import {naturalNumbers} from "./naturalNumbers.tsx";
import {sums} from "./sums.tsx";
import {products} from "./products.tsx";
import {sets} from "./sets.tsx";

export const mathBasicsSubtree: Folder = {
  id: "matheBasics",
  name: "Basics",
  type: "folder",
  elements: [
    naturalNumbers,
    sums,
    products,
    sets,
  ],
};
