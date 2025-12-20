import type {ExerciseNode} from "../../../../framework/content.tsx";
import {mathDiv, mathSpan} from "../../../../framework/technical-components/Math/Math.tsx";
import {CheatSheets} from "../../../../framework/technical-components/CheatSheet/CheatSheets.tsx";
import {FieldAxiomsCheatSheet} from "./FieldAxiomsCheatSheet.tsx";
import {ComplexNumbersCheatSheet} from "../ComplexNumbersCheatSheet.tsx";
import type {ReactNode} from "react";
import {Grid} from "@mui/material";

interface OperationTableCellProps {
  color: string;
  children: ReactNode;
}

function OperationTableCell(props: OperationTableCellProps) {
  return <td style={{width: "2em", height: "2em", backgroundColor: props.color, border: "2px solid #888", textAlign: "center"}}>
    {props.children}
  </td>;
}

interface OperationTableProps {
  operationSymbol: ReactNode;
  elements: ReactNode[];
  results: ReactNode[][];
}

function OperationTable(props: OperationTableProps) {
  return <table style={{borderCollapse: "collapse"}}>
    <tbody>
      <tr>
        <OperationTableCell color="#aaa" children={props.operationSymbol} />
        {props.elements.map(element => <OperationTableCell color="#ccc" children={element} />)}
      </tr>
      {props.elements.map((elementLeft, indexLeft) => <tr>
        <OperationTableCell color="#ccc" children={elementLeft} />
        {props.results[indexLeft].map(result => <OperationTableCell color="#eee" children={result} />)}
      </tr>)}
    </tbody>
  </table>;
}

export const fieldAxioms: ExerciseNode = {
  id: "axioms",
  name: "Axioms",
  type: "exercise",
  contentItems: [
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        <p>
          This exercise gives a counter-example that is <i>not</i> a field since it does not fulfil the field axioms.
          Therefore, the conclusions made in other exercises cannot be assumed to hold for this counter-example.
          Some of them may hold, but must be proven again since they relied on the field axioms.
        </p>
        <p>
          The counter-example is based on
        </p>
        {mathDiv("#mathbb{N}^+_0 = #{0, 1, 2, 3, ...#}")}
        <p>
          but includes "infinity" as another element. Let
        </p>
        {mathDiv("F = #mathbb{N}^+_0 #cup #{ #infty #}")}
        <p>
          Addition and multiplication for natural numbers retain their original meaning, but we have to "extend" them
          for that new element:
        </p>
        {mathDiv("a + #infty = #infty + a = #infty")}
        {mathDiv("0 #cdot #infty = #infty #cdot 0 = 0")}
        {mathDiv("a #cdot #infty = #infty #cdot a = #infty #text{ for } a #neq 0")}
        <p>
          Prove that this counter-example fulfils all field axioms except the negation and inverse axioms.
        </p>
      </>,
      answer: <>
        <p>
          For all finite elements, additive and multiplicative associativity, commutativity and neutral elements
          are inherited from the natural numbers. There is no additive inverse since the natural numbers do not
          include negative numbers, and no multiplicative inverse since they do not include fractions.
        </p>
        <p>
          What is left to prove is, therefore, that the axioms (except inverses) <i>do</i> hold for the new "infinite"
          element:
        </p>
        
        <h3>Addition</h3>
        <p>
          Let {mathSpan("a, b #in F")}.
        </p>
        <p>
          Associativity:
        </p>
        {mathDiv("a + (b + #infty) = a + #infty = #infty = (a + b) + #infty")}
        {mathDiv("a + (#infty + b) = a + #infty = #infty = #infty + b = (a + #infty) + b")}
        {mathDiv("#infty + (a + b) = #infty = #infty + b = (#infty + a) + b")}
        <p>
          Commutativity:
        </p>
        {mathDiv("a + #infty = #infty = #infty + a")}
        <p>
          Zero:
        </p>
        {mathDiv("0 + #infty = #infty = #infty + 0")}

        <h3>Multiplication</h3>
        <p>
          Let {mathSpan("a, b #in F")}. We first show all cases involving zero (note
          that {mathSpan("a, b")} <i>may</i> be {mathSpan("#infty")} here):
        </p>
        <p>
          Associativity:
        </p>
        {mathDiv("a #cdot (b #cdot 0) = a #cdot 0 = 0 = (a #cdot b) #cdot 0")}
        {mathDiv("a #cdot (0 #cdot b) = a #cdot 0 = 0 = 0 #cdot b = (a #cdot 0) #cdot b")}
        {mathDiv("0 #cdot (a #cdot b) = 0 = 0 #cdot b = (0 #cdot a) #cdot b")}
        <p>
          Commutativity:
        </p>
        {mathDiv("a #cdot 0 = 0 = 0 #cdot a")}
        <p>
          One:
        </p>
        {mathDiv("1 #cdot 0 = 0 = 0 #cdot 1")}
        <p>
          Next, assume that {mathSpan("a, b #neq 0")}.
        </p>
        <p>
          Associativity:
        </p>
        {mathDiv("a #cdot (b #cdot #infty) = a #cdot #infty = #infty = (a #cdot b) #cdot #infty")}
        {mathDiv("a #cdot (#infty #cdot b) = a #cdot #infty = #infty = #infty #cdot b = (a #cdot #infty) #cdot b")}
        {mathDiv("#infty #cdot (a #cdot b) = #infty = #infty #cdot b = (#infty #cdot a) #cdot b")}
        <p>
          Commutativity:
        </p>
        {mathDiv("a #cdot #infty = #infty = #infty #cdot a")}
        <p>
          One:
        </p>
        {mathDiv("1 #cdot #infty = #infty = #infty #cdot 1")}

        <h3>Distributivity</h3>

        <p>
          We have to show that
        </p>
        {mathDiv("x(y + z) = xy + xz")}
        <p>
          We do this by going through all cases that can occur:
        </p>
        <ul>
          <li>Case {mathSpan("x=0")}: {mathSpan("0(y+z) = 0 = 0+0 = 0y + 0z")}</li>
          <li>Case {mathSpan("y=0")}: {mathSpan("x(0+z) = xz = x0 + xz")}</li>
          <li>Case {mathSpan("z=0")}: {mathSpan("x(y+0) = xy = xy + x0")}</li>
          <li>Case {mathSpan("x=#infty; y, z #neq 0")}: {mathSpan("#infty(y+z) = #infty = #infty+#infty = #infty y + #infty z")}</li>
          <li>Case {mathSpan("y=#infty; x, z #neq 0")}: {mathSpan("x(#infty+z) = xz = x#infty + xz")}</li>
          <li>Case {mathSpan("z=#infty; x, y #neq 0")}: {mathSpan("x(y+#infty) = xy = xy + x#infty")}</li>
          <li>All other cases involve only natural numbers.</li>
        </ul>
      </>,
    },
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        <ComplexNumbersCheatSheet />
        <p>
          Use the above definition of the complex numbers to prove that they are a field by proving the individual
          field axioms. Find a definition for the additive inverse (negative) and for the multiplicative inverse.
        </p>
      </>,
      answer: <>
        
        <h3>Addition</h3>
        <p>
          associativity:
        </p>
        {mathDiv("((a_1, a_2) + (b_1, b_2)) + (c_1, c_2)")}
        {mathDiv("= (a_1 + b_1, a_2 + b_2) + (c_1, c_2)")}
        {mathDiv("= ((a_1 + b_1) + c_1, (a_2 + b_2) + c_2)")}
        {mathDiv("= (a_1 + (b_1 + c_1), a_2 + (b_2 + c_2))")}
        {mathDiv("= (a_1, a_2) + (b_1 + c_1, b_2 + c_2)")}
        {mathDiv("= (a_1, a_2) + ((b_1, b_2) + (c_1, c_2))")}
        <p>
          commutativity:
        </p>
        {mathDiv("(a_1, a_2) + (b_1, b_2)")}
        {mathDiv("= (a_1 + b_1, a_2 + b_2)")}
        {mathDiv("= (b_1 + a_1, b_2 + a_2)")}
        {mathDiv("= (b_1, b_2) + (a_1, a_2)")}
        <p>
          zero:
        </p>
        {mathDiv("(a_1, a_2) + (0, 0) = (a_1 + 0, a_2 + 0) = (a_1, a_2)")}
        <p>
          negative: Let {mathSpan("-(a_1, a_2) = (-a_1, -a_2)")}
        </p>
        {mathDiv("(a_1, a_2) + -(a_1, a_2) = (a_1, a_2) + (-a_1, -a_2)")}
        {mathDiv("= (a_1 - a_1, a_2 - a_2) = (0, 0) = 0")}

        <h3>Multiplication</h3>
        <p>
          associativity:
        </p>
        {mathDiv("((a_1, a_2) #cdot (b_1, b_2)) #cdot (c_1, c_2)")}
        {mathDiv("= (a_1b_1 - a_2b_2, a_1b_2 + a_2b_1) #cdot (c_1, c_2)")}
        {mathDiv("= ((a_1b_1 - a_2b_2)c_1 - (a_1b_2 + a_2b_1)c_2, (a_1b_1 - a_2b_2)c_2 + (a_1b_2 + a_2b_1)c_1)", 0.85)}
        {mathDiv("= (a_1b_1c_1 - a_2b_2c_1 - a_1b_2c_2 - a_2b_1c_2, a_1b_1c_2 - a_2b_2c_2 + a_1b_2c_1 + a_2b_1c_1)", 0.85)}
        {mathDiv("= (a_1b_1c_1 - a_1b_2c_2 - a_2b_2c_1 - a_2b_1c_2, a_1b_1c_2 + a_1b_2c_1 - a_2b_2c_2 + a_2b_1c_1)", 0.85)}
        {mathDiv("= (a_1(b_1c_1 - b_2c_2) - a_2(b_2c_1 + b_1c_2), a_1(b_1c_2 + b_2c_1) + a_2(b_1c_1 - b_2c_2))", 0.85)}
        {mathDiv("= (a_1, a_2) #cdot (b_1c_1 - b_2c_2), b_2c_1 + b_1c_2)")}
        {mathDiv("= (a_1, a_2) #cdot ((b_1, b_2) #cdot (c_1, c_2))")}
        <p>
          commutativity:
        </p>
        {mathDiv("(a_1, a_2) #cdot (b_1, b_2)")}
        {mathDiv("= (a_1b_1 - a_2b_2, a_1b_2 + a_2b_1)")}
        {mathDiv("= (b_1a_1 - b_2a_2, b_2a_1 + b_1a_2)")}
        {mathDiv("= (b_1a_1 - b_2a_2, b_1a_2 + b_2a_1)")}
        {mathDiv("= (b_1, b_2) #cdot (a_1, a_2)")}
        <p>
          one:
        </p>
        {mathDiv("1 #cdot (a_1, a_2)")}
        {mathDiv("= (1, 0) #cdot (a_1, a_2)")}
        {mathDiv("= (1 #cdot a_1 - 0 #cdot a_2, 1 #cdot a_2 - 0 #cdot a_1)")}
        {mathDiv("= (a_1, a_2)")}
        <p>
          inverse: Let 
        </p>
        {mathDiv("(a_1, a_2)^{-1} = (#frac{a_1}{a_1^2 + a_2^2}, -#frac{a_2}{a_1^2 + a_2^2})")}
        <p>
          Then,
        </p>
        {mathDiv("(a_1, a_2)(a_1, a_2)^{-1}")}
        {mathDiv("= (a_1, a_2)(#frac{a_1}{a_1^2 + a_2^2}, -#frac{a_2}{a_1^2 + a_2^2})")}
        {mathDiv("= (#frac{a_1^2}{a_1^2 + a_2^2} + #frac{a_2^2}{a_1^2 + a_2^2}, #frac{a_1a_2}{a_1^2 + a_2^2} - #frac{a_1a_2}{a_1^2 + a_2^2})")}
        {mathDiv("= (#frac{a_1^2 + a_2^2}{a_1^2 + a_2^2}, #frac{a_1a_2 - a_1a_2}{a_1^2 + a_2^2})")}
        {mathDiv("= (1, 0) = 1")}

        <h3>Distributivity</h3>
        {mathDiv("(x_1, x_2) #cdot ((y_1, y_2) + (z_1, z_2))")}
        {mathDiv("= (x_1, x_2) #cdot (y_1 + z_1, y_2 + z_2)")}
        {mathDiv("= (x_1(y_1 + z_1) - x_2(y_2 + z_2), x_1(y_2 + z_2) + x_2(y_1 + z_1))")}
        {mathDiv("= (x_1y_1 + x_1z_1 - x_2y_2 - x_2z_2, x_1y_2 + x_1z_2 + x_2y_1 + x_2z_1)")}
        {mathDiv("= (x_1y_1 - x_2y_2 + x_1z_1 - x_2z_2, x_1y_2 + x_2y_1 + x_1z_2 + x_2z_1)")}
        {mathDiv("= (x_1y_1 - x_2y_2, x_1y_2 + x_2y_1) + (x_1z_1 - x_2z_2, x_1z_2 + x_2z_1)")}
        {mathDiv("= (x_1, x_2)(y_1, y_2) + (x_1, x_2)(z_1, z_2)")}

      </>,
    },
    {
      intro: <CheatSheets>
        <FieldAxiomsCheatSheet />
      </CheatSheets>,
      problem: <>
        <p>
          Let {mathSpan("F")} be a field that has exactly three elements. Since {mathSpan("0 #neq 1")}, two
          of those three elements are already quite familiar to us. Let's call the third element #spadesuit.
          We know that {mathSpan("F")} is a field, so we can use the field axioms to learn about that third
          element. Use the axioms to fill out tables for the addition and multiplication of elements:
        </p>
        <Grid container spacing={2}>
          <Grid size={6}>
            <div style={{marginLeft: "auto", marginRight: "auto", width: "60%"}}>
              <OperationTable
                  operationSymbol={"+"}
                  elements={["0", "1", "♠"]}
                  results={[
                    ["", "", ""],
                    ["", "", ""],
                    ["", "", ""],
                  ]}
              />
            </div>
          </Grid>
          <Grid size={6}>
            <div style={{marginLeft: "auto", marginRight: "auto", width: "60%"}}>
              <OperationTable
                  operationSymbol={"·"}
                  elements={["0", "1", "♠"]}
                  results={[
                    ["", "", ""],
                    ["", "", ""],
                    ["", "", ""],
                  ]}
              />
            </div>
          </Grid>
        </Grid>
        <br />
      </>,
      answer: <>
      </>,
    },
  ],
};
