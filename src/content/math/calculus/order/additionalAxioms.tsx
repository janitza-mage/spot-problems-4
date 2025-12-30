import type {Collection} from "../../../../framework/content.tsx";
import {CheatSheets} from "../../../../framework/technical-components/CheatSheet/CheatSheets.tsx";
import {FieldAxiomsCheatSheet} from "../field/FieldAxiomsCheatSheet.tsx";
import {OrderAxiomsCheatSheet} from "./OrderAxiomsCheatSheet.tsx";
import {AbsoluteAxiomsCheatSheet} from "./AbsoluteAxiomsCheatSheet.tsx";
import {ArchimedeanAxiomsCheatSheet} from "./ArchimedeanAxiomsCheatSheet.tsx";
import {isNat0, isNatPlus} from "../../util/math-atoms.tsx";
import {mathDiv, mathSpan} from "../../../../framework/technical-components/Math/Math.tsx";

const letBinomial = <>
  <p>
    Let {isNat0("n, k")}
  </p>
  {mathDiv(`#binom{n}{k} = #frac{n!}{(n-k)!k!}`)}
  <p>
    The special cases {mathSpan("n<0")}, {mathSpan("k<0")} and {mathSpan("k>n")} are defined as
  </p>
  {mathDiv(`#binom{n}{k} = 0 #text{\u00a0\u00a0\u00a0for all special cases}`)}
</>;

export const additionalAxioms: Collection = {
  id: "additionalAxioms",
  name: "Absolute and Archimedean Axioms",
  type: "collection",
  exercises: [
    {
      type: "exercise",
      label: mathSpan("#binom{n}{k}#frac{1}{n^k} #leq #frac{1}{k!}"),
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
        <OrderAxiomsCheatSheet />
        <AbsoluteAxiomsCheatSheet />
        <ArchimedeanAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        <p>
          {letBinomial}
        </p>
        <hr />
        <p>
          For the case that {mathSpan("n #geq 1")}, prove that
        </p>
        {mathDiv("#binom{n}{k}#frac{1}{n^k} #leq #frac{1}{k!}")}
      </>,
      answer: <>
        <p>
          TODO
        </p>
      </>,
    },
    {
      type: "exercise",
      label: mathSpan("(1 + #frac{1}{n})^n #leq #sum_{k=0}^{n}#frac{1}{k!}"),
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
        <OrderAxiomsCheatSheet />
        <AbsoluteAxiomsCheatSheet />
        <ArchimedeanAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        <p>
          Let {isNatPlus("n")}.
        </p>
        {mathDiv("(1 + #frac{1}{n})^n #leq #sum_{k=0}^{n}#frac{1}{k!}")}
      </>,
      answer: <>
        <p>
          TODO
        </p>
      </>,
    },
    {
      type: "exercise",
      label: mathSpan("#sum_{k=0}^{n}#frac{1}{k!} < 3"),
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
        <OrderAxiomsCheatSheet />
        <AbsoluteAxiomsCheatSheet />
        <ArchimedeanAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        <p>
          Let {isNatPlus("n")}.
        </p>
        {mathDiv("#sum_{k=0}^{n}#frac{1}{k!} < 3")}
      </>,
      answer: <>
        <p>
          TODO
        </p>
      </>,
    },
    {
      type: "exercise",
      label: mathSpan("(#frac{n}{3})^n #leq #frac{n!}{3}"),
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
        <OrderAxiomsCheatSheet />
        <AbsoluteAxiomsCheatSheet />
        <ArchimedeanAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        <p>
          Let {isNatPlus("n")}.
        </p>
        {mathDiv("(#frac{n}{3})^n #leq #frac{n!}{3}")}
      </>,
      answer: <>
        <p>
          TODO
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "define min/max using absolute",
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
        <OrderAxiomsCheatSheet />
        <AbsoluteAxiomsCheatSheet />
        <ArchimedeanAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        <p>
          Prove that
        </p>
        {mathDiv("min(x, y) = #frac{1}{2}(x + y - |x-y|)")}
        {mathDiv("max(x, y) = #frac{1}{2}(x + y + |x-y|)")}
      </>,
      answer: <>
        <p>
          TODO
        </p>
      </>,
    },
    {
      type: "exercise",
      label: <>{mathSpan("#lfloor x #rfloor")} and {mathSpan("#lceil x #rceil")} with negation</>,
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
        <OrderAxiomsCheatSheet />
        <AbsoluteAxiomsCheatSheet />
        <ArchimedeanAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        <p>
          Prove that
        </p>
        {mathDiv("#lceil x #rceil = - #lfloor - x #rfloor #text{ \u00a0\u00a0\u00a0for }x #in #mathbb{R}")}
        {mathDiv("#lceil x #rceil = #lfloor x #rfloor + 1 #text{ \u00a0\u00a0\u00a0for }x #in #mathbb{R}#setminus #mathbb{Z}")}
        {mathDiv("#lceil #frac{n}{k} #rceil = #lfloor #frac{n+k-1}{k} #rfloor #text{ \u00a0\u00a0\u00a0for }n,k #in #mathbb{Z}, k #geq 1")}
      </>,
      answer: <>
        <p>
          TODO
        </p>
      </>,
    },

    // TODO weiter s.28 aufgaben: 3.5, 3.6, 
  ],
};
