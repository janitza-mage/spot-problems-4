import {calculusSubtree} from "./calculus/calculusSubtree.tsx";
import type {Folder} from "../../framework/content.tsx";
import {mathBasicsSubtree} from "./basic/mathBasicsSubtree.tsx";

export const mathSubtree: Folder = {
  id: "math",
  name: "Math",
  type: "folder",
  elements: [mathBasicsSubtree, calculusSubtree],
};

