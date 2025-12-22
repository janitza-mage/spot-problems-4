import type {FolderNode} from "../../framework/content.tsx";
import {ohmicResistorSubtree} from "./ohmicResistorSubtree.tsx";

export const electricalEngineeringSubtree: FolderNode = {
  id: "electricalEngineering",
  name: "Electrical Engineering",
  type: "folder",
  children: [
    ohmicResistorSubtree,
  ],
};
