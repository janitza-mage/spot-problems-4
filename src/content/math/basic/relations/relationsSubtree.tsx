import type {Folder} from "../../../../framework/content.tsx";
import {relationsSameSet} from "./relationsSameSet.tsx";
import {relationsDifferentSets} from "./relationsDifferentSets.tsx";

export const relationsSubtree: Folder = {
  id: "relations",
  name: "Relations",
  type: "folder",
  elements: [
      relationsSameSet,
      relationsDifferentSets,
  ],
};
