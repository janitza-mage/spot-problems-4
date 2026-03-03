import type {FolderNode} from "../../framework/content.tsx";
import {ohmicResistorCollection} from "./ohmic/ohmicResistorCollection.tsx";
import {basicUnitsExercise} from "./basicUnitsExercise.tsx";
import {sourcesWithInternalResistanceExercise} from "./sourcesWithInternalResistanceExercise.tsx";
import {kirchhoffsLawsExercise} from "./kirchhoffsLawsExercise.tsx";
import {capacitorCollection} from "./capacitor/capacitorCollection.tsx";

export const electricalEngineeringSubtree: FolderNode = {
  id: "electricalEngineering",
  name: "Electrical Engineering",
  type: "folder",
  children: [
    basicUnitsExercise,
    ohmicResistorCollection,
    sourcesWithInternalResistanceExercise,
    // TODO diodeExercise,
    capacitorCollection,
    kirchhoffsLawsExercise,
  ],
};

// Maschenregel, Knotenregel

// electric field? magnetic field?

/*
Kondensator, Diode:


 */