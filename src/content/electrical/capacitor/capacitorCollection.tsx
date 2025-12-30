import type {Collection} from "../../../framework/content.tsx";
import {mathDiv, mathSpan} from "../../../framework/technical-components/Math/Math.tsx";
import capacitorBankImage from "./capacitor-bank.jpg";

export const capacitorCollection: Collection = {
  id: "capacitor",
  name: "Capacitors",
  type: "collection",
  exercises: [
    {
      type: "exercise",
      label: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      problem: <>
        <p>
          A capacitor is intended to have a voltage of {mathSpan("U=5V")} when charged with a charge
          of {mathSpan("0.1mC")}. What is the required capacitance?
        </p>
      </>,
      answer: <>
        {mathDiv("C = #frac{Q}{U} = #frac{0.1mC}{5V} = 20#mu F")}
      </>
    },
    {
      type: "exercise",
      label: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      problem: <>
        <p>
          A {mathSpan("150#mu F")} gets charged for {mathSpan("0.3s")} with a constant current of {mathSpan("20mA")}.
          What is the capcitor's voltage and energy after charging?
        </p>
      </>,
      answer: <>
        {mathDiv("U = #frac{Q}{C} = #frac{I #cdot t}{C} = #frac{0.02A #cdot 0.3s}{150#mu F} = 40V")}
        {mathDiv("E = #frac{1}{2} #cdot C #cdot U^2 = #frac{1}{2} #cdot 150#mu F #cdot (40V)^2 = 0.12J")}
      </>
    },
    {
      type: "exercise",
      label: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      problem: <>
        <p>
          A plate capacitor gets charged until a charge of {mathSpan("0.01C")} is on one plate of the capacitor.
          What is the charge on the other plate?
        </p>
      </>,
      answer: <>
        <p>
          The charge on the other plate is equal in magnitude, but opposite in sign, so {mathSpan("-0.01C")}.
        </p>
      </>
    },
    {
      type: "exercise",
      label: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      problem: <>
        <p>
          A capacitor of {mathSpan("500#mu F")} is used in the following way: First, a current of {mathSpan("20mA")} flows
          into one side for {mathSpan("0.1s")}. Then, a current of {mathSpan("25mA")} flows out of the other side for
          {mathSpan("0.2s")}. What is the charge stored in the capacitor?
        </p>
      </>,
      answer: <>
        <p>
          The current flowing into one side is always equal to the current flowing out of the other side of the
          capacitor. Since the first current flows into the first side, and the second current flows out of the other
          side, both currents flow into the same direction, so they charge the capacitor in the same way. The total
          charge is therefore:
        </p>
        {mathDiv("Q = I_1t_1 + I_2t_1 = 20mA #cdot 0.1s + 25mA #cdot 0.2s")}
        {mathDiv("= 2mC + 5mC = 7mC")}
      </>
    },
    {
      type: "exercise",
      label: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      problem: <>
        <p>
          A capacitor gets charged with a current of {mathSpan("10mA")} for {mathSpan("0.1s")}. Alice argues that the
          capacitor now holds a charge of {mathSpan("1mC")} according to {mathSpan("Q=I#cdot t")}. Bob argues that
          the same current that has flowed <i>into</i> the capacitor on one side has flowed out on the other side,
          so one plate now holds a charge of {mathSpan("1mC")} and the other plate holds a charge
          of {mathSpan("-1mC")}, and the capacitor as a whole therefore holds a charge of zero. Who is right?
        </p>
      </>,
      answer: <>
        <p>
          Both are right, but they are talking about different things: The charged capacitor as a
          whole <i>does</i> hold a charge of zero, i.e. is electrically neutral, and the plates <i>do</i> hold a
          charge that is equal in magnitude and opposite in sign. Alice and Bob should be more specific in what
          they are talking about to clear up the misunderstanding.
        </p>
        <p>
          It should be said, however, that "the charge of a capacitor" usually refers to the charge on a single
          plate -- that is, what Alice is talking about. The reason is that charging a capacitor in such a way
          that the plate charges do not add up to zero (what Bob is talking about) is typically not useful in an
          electrical circuit, while Alice's case is very typical, and is what using a capacitor is all about.
        </p>
      </>
    },
    {
      type: "exercise",
      label: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      problem: <>
        <p>
          A {mathSpan("500#mu F")} gets charged for {mathSpan("0.2s")} with a constant current of {mathSpan("10mA")}.
          The capacitor's voltage is then equal to {mathSpan("4V")}.
        </p>
        <p>
          Alice argues that the energy stored in the capacitor can be calculated as
        </p>
        {mathDiv("E = #frac{1}{2} #cdot C #cdot U^2 = #frac{1}{2} #cdot 500#mu F #cdot (4V)^2 = 4mJ")}
        <p>
          Bob observes that the capacitor did not dissipate any measurable amount of heat, and concludes that no energy
          has been lost. He argues that the energy stored should therefore be equal to the energy flowing into the
          capacitor, which can be calculated as power times time, with power equal to voltage times current:
        </p>
        {mathDiv("E = UIt = 4V #cdot 10mA #cdot 0.2s = 8mJ")}
        <p>
          Who is right, and why?
        </p>
      </>,
      answer: <>
        <p>
          Alice is right. Bob made the mistake that the voltage is not a constant {mathSpan("4V")}, but starts at zero
          and builds up as the capacitor is being charged. With a constant current, the charge rises linearly.
          By {mathSpan("U=#frac{Q}{C}")}, the voltage also rises linearly, so the average voltage is half of the final
          voltage, or {mathSpan("2V")}. With that value, Bob gets the same result as Alice:
        </p>
        {mathDiv("E = U_{avg}It = 2V #cdot 10mA #cdot 0.2s = 4mJ")}
      </>
    },
    {
      type: "exercise",
      label: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      problem: <>
        <p>
          A component catalog lists a one capacitor as {mathSpan("100#mu F")} with a maximum voltage
          of {mathSpan("3V")} -- that is, if the capacitor gets charged beyond {mathSpan("3V")}, then it might be
          destroyed. This capacitor model shall be used to build a capacitor bank with a capacitance
          of {mathSpan("10mF")} that is intended to be charged to a voltage of {mathSpan("5V")}. Describe the schematic
          for that capacitor bank.
        </p>
      </>,
      answer: <>
        <p>
          For a voltage of {mathSpan("5V")}, two capacitors must be connected in series. This raises the allowed
          voltage to {mathSpan("2#cdot 3V=6V")}, which is enough for our capacitor bank.
        </p>
        <p>
          Such a pair of capacitors has half the capacitance of a single capacitor, or {mathSpan("50#mu F")}. For a
          total capacitance of {mathSpan("10mF")}, we need {mathSpan("200")} of these pairs:
        </p>
        <img src={capacitorBankImage} />
        <p>
          Note the dotted line: Another approach might arrive at a parallel connection of {mathSpan("200")} single
          capacitors, and two of these groups connected in series. That would be a similar circuit, except with all
          middle points connected. In our simplified model of the circuit, each pair of capacitors gets charged
          in the same way, so their middle points are at the same potential, and connecting them has no effect.
          A more detailed model is needed to determine whether connecting the middle points is better or worse for
          a real-world capacitor bank.
        </p>
      </>
    },
    {
      type: "exercise",
      label: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      problem: <>
        <p>
          A capacitor gets charged by connecting it to a voltage source. An additional component should be used for
          this -- which is it, and why?
        </p>
      </>,
      answer: <>
        <p>
          A resistor should be placed in series with the capacitor. Without the resistor, the initial current (while
          the capacitor is empty or nearly empty) is not limited by the capacitor, and so short-circuits the
          voltage source.
        </p>
      </>
    },
    {
      type: "exercise",
      label: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      problem: <>
        <p>
          A {mathSpan("250#mu F")} capacitor gets charged by a {mathSpan("5V")} voltage source through a resistor.
          The capacitor is considered fully charged when no measurable current is flowing anymore. The capacitor
          then gets discharged through another resistor with a resistance of {mathSpan("2k#Omega")}. What is
          the initial current when starting to discharge the capacitor?
        </p>
      </>,
      answer: <>
        <p>
          The initial current does not depend on the capacitance but only on the voltage of the capacitor. Since the
          capacitor has been charged to {mathSpan("5V")} until the charging current stopped, its voltage
          is {mathSpan("5V")}, so the initial current is 
        </p>
        {mathDiv("I_0 = #frac{U_0}{R} = #frac{5V}{2k#Omega} = 2.5mA")}
      </>
    },
    {
      type: "exercise",
      label: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      problem: <>
        <p>
          A {mathSpan("200#mu F")} capacitor and {mathSpan("1k#Omega")} resistor in series get connected to
          a {mathSpan("5V")} voltage source. This will charge the capacitor, but doing that will take some time.
          Determine the function that describes the capacitor's charge and voltage over time.
        </p>
      </>,
      answer: <>
        <p>
          At each time {mathSpan("t")}, the voltage drop across the capacitor is equal to
        </p>
        {mathDiv("U_{cap} = #frac{Q_{cap}}{C}")}
        <p>
          The total voltage gets divided by the capacitor and resistor:
        </p>
        {mathDiv("U_{total} = U_{cap} + U_{res}")}
        <p>
          The capacitor does not limit the current, but the resistor does, according to
        </p>
        {mathDiv("I = #frac{U_{res}}{R}")}
        <p>
          Putting these together, we get:
        </p>
        {mathDiv("I = #frac{U_{res}}{R} = #frac{U_{total} - U_{cap}}{R} = #frac{U_{total} - #frac{Q_{cap}}{C}}{R}")}
        <p>
          Let's properly write down which of these values are changing over time:
        </p>
        {mathDiv("I(t) = #frac{U_{res}(t)}{R} = #frac{U_{total} - U_{cap}(t)}{R} = #frac{U_{total} - #frac{Q_{cap}(t)}{C}}{R}")}
        <p>
          To solve this equation, we first take the time-derivative on both sides. This removes {mathSpan("U_{total}")} since
          it is constant:
        </p>
        {mathDiv("#frac{dI}{dt}(t) = - #frac{#frac{dQ_{cap}}{dt}(t)}{RC}")}
        <p>
          Finally, the current is what is putting charge into the capacitor:
        </p>
        {mathDiv("I = #frac{dQ_{cap}}{dt}")}
        {mathDiv("#implies #frac{dI}{dt}(t) = -#frac{1}{RC} I(t)")}
        <p>
          which gets solved by
        </p>
        {mathDiv("I(t) = I_0 #cdot e^{-#frac{t}{RC}}")}
        <p>
          We use the time-integral to get back to the charge:
        </p>
        {mathDiv("Q(t) = #int_0^tI(t)dt = #int_0^tI_0e^{-#frac{t}{RC}}dt + Q_0")}
        {mathDiv("= (-I_0RCe^{-#frac{t}{RC}}) - (-I_0RCe^{-#frac{0}{RC}}) + Q_0")}
        <p>
          A condition that we have not yet used is that the capacitor is initially uncharged, so
        </p>
        {mathDiv("Q(0) = (-I_0RCe^{-#frac{0}{RC}}) - (-I_0RCe^{-#frac{0}{RC}}) + Q_0 = Q_0 ")}
        <p>
          This means that {mathSpan("Q_0")} <i>is</i> the initial charge, which is zero, so
        </p>
        {mathDiv("Q(t) = (-I_0RCe^{-#frac{t}{RC}}) - (-I_0RCe^{-#frac{0}{RC}})")}
        {mathDiv(" = I_0RC #cdot (1 - e^{-#frac{t}{RC}})")}
        <p>
          To determine {mathSpan("I_0")}, we can set {mathSpan("t=0")} in
        </p>
        {mathDiv("I(t) = I_0 #cdot e^{-#frac{t}{RC}}")}
        <p>
          to get
        </p>
        {mathDiv("I(0) = I_0")}
        <p>
          and use the formula from the beginning:
        </p>
        {mathDiv("I_0 = I(t=0) = #frac{U_{total} - #frac{Q_{cap}(t=0)}{C}}{R} = #frac{U_{total}}{R}")}
        <p>
          We can now finally write formulas for the current, charge and voltage over time:
        </p>
        {mathDiv("I(t) = #frac{U_{total}}{R}e^{-#frac{t}{RC}}")}
        {mathDiv("U(t) = U_{total}(1 - e^{-#frac{t}{RC}})")}
        {mathDiv("Q(t) = U_{total}C(1 - e^{-#frac{t}{RC}})")}
      </>
    },

      /*



TODO
*** Energie berechnen aus R/C mit herleitung zu 1/2CU^2
      
       */
  ],
};
