import type {ExerciseNode} from "../../../../framework/content.tsx";
import {CheatSheets} from "../../../../framework/technical-components/CheatSheet/CheatSheets.tsx";
import {FieldAxiomsCheatSheet} from "../field/FieldAxiomsCheatSheet.tsx";
import {OrderAxiomsCheatSheet} from "./OrderAxiomsCheatSheet.tsx";
import {AbsoluteAxiomsCheatSheet} from "./AbsoluteAxiomsCheatSheet.tsx";
import {ArchimedeanAxiomsCheatSheet} from "./ArchimedeanAxiomsCheatSheet.tsx";

export const additionalAxioms: ExerciseNode = {
  id: "additionalAxioms",
  name: "Absolute and Archimedean Axioms",
  type: "exercise",
  contentItems: [
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
        <OrderAxiomsCheatSheet />
        <AbsoluteAxiomsCheatSheet />
        <ArchimedeanAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        <p>
          problem
        </p>
      </>,
      answer: <>
        <p>
          answer
        </p>
      </>,
    },

    // TODO weiter s.28 aufgaben: 3.3, 3.5, 3.6, 
  ],
};
