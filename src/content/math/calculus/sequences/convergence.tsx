import type {Collection} from "../../../../framework/content.tsx";
import {mathDiv, mathSpan} from "../../../../framework/technical-components/Math/Math.tsx";

export const convergence: Collection = {
  id: "convergence",
  name: "Convergence",
  type: "collection",
  exercises: [
    {
      type: "exercise",
      label: "...",
      problem: <>
        <p>From the sequence</p>
        {mathDiv("1, 2, 3, #hskip 5pt 2, 3, 4, #hskip 5pt 1, 2, 3, #hskip 5pt 2, 3, 4, #hskip 5pt 1, 2, 3, #hskip 5pt 2, 3, 4, #dots")}
        <p>(spaces added for easier reading), determine the subsequence that contains all elements less than {mathSpan("3")}.</p>
      </>,
      answer: <>
        {mathDiv("1, 2, 2, 1, 2, 2, 1, 2, 2, #dots")}
      </>,
    },
      
      /*
      TODO
      
      terms: convergent; converges to
      
      converging sequence -> every subsequence converges to the same number
      0, 1, 0, 1, 0, 1, ... how many converging subsequences? 2
      0, 1, 0, 0, 1, 0, 0, 0, 1, ... how many converging subsequences? 2, the increasing distance does not matter since you can alwaays skip a finite number of elements
      0, 1/1, 0, 1/2, 0, 1/3, ... how many converging subsequences? infinite, every subsequence of 1/n also converges
      
      red, green, blue, red, red, red, red, ... converges to red? no, no notion of distance. Define distance (1 or 0) then converges
      // TODO:
      // Menge (rot, grün, blau), Folge RGBRRRRR, konvergiert die? -> nein, kein Abstand definiert, aber
      // man könnte einen Abstand definieren, der die Folge konvergieren lässt: d(x, y) = 0, falls x = y, sonst 1
      
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

      // aufgaben aus dem Ana-Buch
       
       */
  ],
};
