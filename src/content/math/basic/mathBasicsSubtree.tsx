import type {Folder} from "../../../framework/content.tsx";
import {naturalNumbers} from "./naturalNumbers.tsx";
import {sums} from "./sums.tsx";
import {products} from "./products.tsx";

export const mathBasicsSubtree: Folder = {
  id: "matheBasics",
  name: "Basics",
  type: "folder",
  elements: [
    naturalNumbers,
    sums,
    products,
  ],
};
