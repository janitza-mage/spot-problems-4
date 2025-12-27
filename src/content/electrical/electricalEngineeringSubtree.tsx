import type {FolderNode} from "../../framework/content.tsx";
import {ohmicResistorExercise} from "./ohmic/ohmicResistorExercise.tsx";
import {basicUnitsExercise} from "./basicUnitsExercise.tsx";
import {sourcesWithInternalResistanceExercise} from "./sourcesWithInternalResistanceExercise.tsx";
import {kirchhoffsLawsExercise} from "./kirchhoffsLawsExercise.tsx";

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

U/I/C/Q-Formeln

Kondensator wird aufgeladen, so dass eine Ladung von 0.1C auf der einen Seite liegt. Wie groß ist die Ladung auf der
anderen Seite?

Unterschied zwischen gespeicherter Ladung und Gesamtladung (Begriffe)?
-> Ein Kondensator wird 1s mit 1A aufgeladen. Alice und Bob sind sich uneinig, welche Ladung der Kondensator danach
hat. Alice sagt, dass die Ladung des Kondensators jetzt 1A*1s=1C beträgt. Bob sagt, dass auf der einen Platte 1C und
auf der anderen Platte -1C liegen, also in Summe die Ladung 0C. Wer hat recht? -> reden von verschiedenen Dingen.

Strom I_1=0.1A fließt eine Sekunde lang in die eine Seite. Danach fließt ein Strom von I_2=0.2A eine Sekunde lang
aus der anderen Seite heraus. Wie groß ist die gespeicherte Ladung im Kondensator?


*** Ladekurve R/C
*** Energie berechnen aus R/C mit herleitung zu 1/2CU^2


 */