import type {Folder} from "../../framework/content.tsx";
import {ohmicResistorCollection} from "./ohmic/ohmicResistorCollection.tsx";
import {basicUnitsCollection} from "./basicUnitsCollection.tsx";
import {sourcesWithInternalResistanceCollection} from "./sourcesWithInternalResistanceCollection.tsx";
import {kirchhoffsLawsCollection} from "./kirchhoffsLawsCollection.tsx";
import {capacitorCollection} from "./capacitor/capacitorCollection.tsx";

export const electricalEngineeringSubtree: Folder = {
  id: "electricalEngineering",
  name: "Electrical Engineering",
  type: "folder",
  elements: [
    basicUnitsCollection,
    ohmicResistorCollection,
    sourcesWithInternalResistanceCollection,
    // TODO diodeCollection,
    capacitorCollection,
    kirchhoffsLawsCollection,
  ],
};

// Maschenregel, Knotenregel

// electric field? magnetic field?

/*
Kondensator, Diode:


 */