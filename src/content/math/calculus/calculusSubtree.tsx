import {inductionSubtree} from "./induction/inductionSubtree.tsx";
import type {Folder} from "../../../framework/content.tsx";
import {fieldSubtree} from "./field/fieldSubtree.tsx";
import {orderSubtree} from "./order/orderSubtree.tsx";

export const calculusSubtree: Folder = {
  id: "calculus",
  name: "Calculus",
  type: "folder",
  elements: [
      inductionSubtree,
      fieldSubtree,
      orderSubtree,
  ],
};
