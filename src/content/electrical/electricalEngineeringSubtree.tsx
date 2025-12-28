import type {FolderNode} from "../../framework/content.tsx";
import {ohmicResistorExercise} from "./ohmic/ohmicResistorExercise.tsx";
import {basicUnitsExercise} from "./basicUnitsExercise.tsx";
import {sourcesWithInternalResistanceExercise} from "./sourcesWithInternalResistanceExercise.tsx";
import {kirchhoffsLawsExercise} from "./kirchhoffsLawsExercise.tsx";
import {capacitorExercise} from "./capacitor/capacitorExercise.tsx";

export const electricalEngineeringSubtree: FolderNode = {
  id: "electricalEngineering",
  name: "Electrical Engineering",
  type: "folder",
  children: [
    basicUnitsExercise,
    ohmicResistorExercise,
    sourcesWithInternalResistanceExercise,
    // TODO diodeExercise,
    capacitorExercise,
    kirchhoffsLawsExercise,
  ],
};

// Maschenregel, Knotenregel

// electric field? magnetic field?

/*
Kondensator, Diode:


 */