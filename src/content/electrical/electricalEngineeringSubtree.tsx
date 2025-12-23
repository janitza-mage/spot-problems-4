import type {FolderNode} from "../../framework/content.tsx";
import {ohmicResistorSubtree} from "./ohmic/ohmicResistorSubtree.tsx";
import {basicUnits} from "./basicUnits.tsx";
import {sourcesWithInternalResistance} from "./sourcesWithInternalResistance.tsx";

export const electricalEngineeringSubtree: FolderNode = {
  id: "electricalEngineering",
  name: "Electrical Engineering",
  type: "folder",
  children: [
    basicUnits,
    ohmicResistorSubtree,
    sourcesWithInternalResistance,
  ],
};

// Maschenregel, Knotenregel

// electric field? magnetic field?
