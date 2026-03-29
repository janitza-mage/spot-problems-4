import {inductionSubtree} from "./induction/inductionSubtree.tsx";
import type {Folder} from "../../../framework/content.tsx";
import {fieldSubtree} from "./field/fieldSubtree.tsx";
import {orderSubtree} from "./order/orderSubtree.tsx";

export const calculusSubtree: Folder = {
  id: "calculus",
  name: "Calculus",
  type: "folder",
  elements: [
      inductionSubtree,
      fieldSubtree,
      orderSubtree,
      
      // TODO:
      // definition for cauchy sequence (immer kleinerer Abstand vs beliebig kleiner Abstand) --> 
      // Folge abwechselnd -1 und 1/n, wird immer kleiner aber nicht beliebig klein
      // Tip: Finde ein Beispiel für eine Folge die das eine aber nicht das andere ist
      
      // TODO:
      // Cauchy-Folge, die nicht konvergiert? sqrt(2)-Folge in Q
      
      // TODO:
      // Kann es sein, dass R auch noch Lücken hat? -> nein, dann könnte man eine Folge konstruieren, die
      // gegen die Lücke konvergiert, und man weiß dass sie konvergiert weil es in R ist und eine Cauchy-Folge ist
      
      // TODO:
      // Menge (rot, grün, blau), Folge RGBRRRRR, konvergiert die? -> nein, kein Abstand definiert, aber
      // man könnte einen Abstand definieren, der die Folge konvergieren lässt: d(x, y) = 0, falls x = y, sonst 1
      
      // TODO unterfolgen, teilfolgen (unterschied?)
      
      // TODO
      // konvergenz gegen x (noch ohne Cauchy-Folge)
      // beschränktheit
      // monotonie
      // Teilfolge, Konvergenz von Teilfolgen https://de.wikipedia.org/wiki/Teilfolge
      // Häufungspunkt, auch vs. grenzwert (Von einem Grenzwert wird gefordert, dass in jeder Umgebung fast alle Folgenglieder liegen. Bei einem Häufungspunkt müssen dies nur unendlich viele sein)
      // ... 

        // Aufgabe: Sofern die Topologie des Raumes nicht allzu 'verklumpt' ist, ist ein Punkt p bereits dann Häufungspunkt, wenn in jeder Umgebung von
        // p ein von p verschiedenes Folgenglied liegt.

    // (Aufgabe?) Der Grenzwert einer konvergenten Folge ist immer auch Häufungspunkt der Folge, denn per Definition enthält jede noch so kleine Umgebung des Grenzwertes alle bis auf endlich viele Folgenglieder.
      // In metrischen Räumen und allgemeiner in Hausdorff-Räumen ist der Grenzwert einer konvergenten Folge eindeutig und ist auch der einzige Häufungspunkt der Folge.
// Im Raum der reellen Zahlen (und allgemeiner in allen das erste Abzählbarkeitsaxiom erfüllenden topologischen Räumen) gibt es zu jedem Häufungspunkt eine Teilfolge, die gegen diesen Häufungspunkt konvergiert.


// summ, produkt, differenz konvergenter folgen
      // quotient konvergenter folgen
      // reihen

// Beweis als aufgabe: rellen zahlen sind lückenlos -- kann man das überhaupt sinnvoll formulieren?
      
      // aufgaben aus dem Ana-Buch
      
  ],
};
