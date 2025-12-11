import {calculusSubtree} from "./calculus/calculusSubtree.tsx";
import type {FolderNode} from "../../framework/content.tsx";

export const mathSubtree: FolderNode = {
  id: "math",
  name: "Math",
  type: "folder",
  children: [calculusSubtree],
};

// TODO SChreibweisen: a^b (b in nat) + rechenregeln, Summe (auch Elemente rein/rausziehen, indexverschiebung, leere summe), Produkt, Fakultät, "q.e.d."
// TODO Grundlagen: Mengen, Beweisverfahren, wchtige Mengen zb nat, Funktionen, Relationen, Kreuzprodukt/Tupel
// Quantoren, und/oder/implikation/äquivalenz

/*

5. Let the set A consist of the youths of a given group, and the
set B o f the girls of the same group. Find A\JB, AO B, A\B . Also,
consider the case when A or B is an empty set.
"find" -> "what is the meaning of"



 */
