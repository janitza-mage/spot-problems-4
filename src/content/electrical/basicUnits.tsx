import type {ExerciseNode} from "../../framework/content.tsx";
import {mathDiv, mathSpan} from "../../framework/technical-components/Math/Math.tsx";

export const basicUnits: ExerciseNode = {
  id: "basicUnits",
  name: "Basic Units",
  type: "exercise",
  contentItems: [
    {
      problem: <>
        <p>
          What is the symbol, unit, and unit symbol for the electric current?
        </p>
      </>,
      answer: <>
        <div>Symbol: I</div>
        <div>Unit: ampere</div>
        <div>Unit Symbol: A</div>
      </>
    },
    {
      problem: <>
        <p>
          What is the symbol, unit, and unit symbol for the voltage?
        </p>
      </>,
      answer: <>
        <div>Symbol: U</div>
        <div>Unit: volt</div>
        <div>Unit Symbol: V</div>
      </>
    },
    {
      problem: <>
        <p>
          What is the symbol, unit, and unit symbol for the (electric) power?
        </p>
      </>,
      answer: <>
        <div>Symbol: P</div>
        <div>Unit: watt</div>
        <div>Unit Symbol: W</div>
      </>
    },
    {
      problem: <>
        <p>
          What is the symbol, unit, and unit symbol for the (electric) energy?
        </p>
      </>,
      answer: <>
        <div>Symbol: E</div>
        <div>Unit: joule</div>
        <div>Unit Symbol: J</div>
      </>
    },
    {
      problem: <>
        <p>
          What is the symbol, unit, and unit symbol for the electric charge?
        </p>
      </>,
      answer: <>
        <div>Symbol: q</div>
        <div>Unit: coulomb</div>
        <div>Unit Symbol: C</div>
      </>
    },
    {
      problem: <>
        <p>
          A power of 100 watts is applied to a circuit for 5 seconds. How much energy is used?
        </p>
      </>,
      answer: <>
        {mathDiv("E = P #cdot t = 100W #cdot 5s = 500J")}
      </>
    },
    {
      problem: <>
        <p>
          A voltage of {mathSpan("10V")} is applied to a circuit, resulting in a current of {mathSpan("5A")}. What
          is the power flowing into the circuit?
        </p>
      </>,
      answer: <>
        {mathDiv("P = U #cdot I = 10V #cdot 5A = 50W")}
      </>
    },
    {
      problem: <>
        <p>
          A battery pack is specified to require a charging voltage of {mathSpan("5V")}, but can be configured to
          use different charging currents. This is a common scenario with USB chargers. When empty, charging the
          battery at {mathSpan("500mA")} takes 4 hours. How long will it take to charge the battery
          at {mathSpan("1A")}?
        </p>
      </>,
      answer: <>
        Since the voltage is the same, the charging power scales linearly with the charging current. Therefore,
        charging at {mathSpan("1A")} will take half the time, or 2 hours.
      </>
    },
    {
      problem: <>
        <p>
          A large battery pack can be charged via USB at {mathSpan("5V")} and {mathSpan("1A")}. This takes 4 hours
          when the battery is empty.
        </p>
        <p>
          The battery pack also supports being charged via USB power delivery
          at {mathSpan("20V")} and {mathSpan("3A")}. How long does charging take with these parameters?
        </p>
      </>,
      answer: <>
        <p>
          The total energy stored in the pack is.
        </p>
        {mathDiv("E = 5V #cdot 1A #cdot 4h = 20Wh")}
        <p>
          At the higher charging parameters, the power is
        </p>
        {mathDiv("P = 20V #cdot 3A = 60W")}
        <p>
          so the charging time is
        </p>
        {mathDiv("t = #frac{E}{P} = #frac{20Wh}{60W} = #frac{1}{3}h = 20min")}
      </>
    },
    {
      problem: <>
        <p>
          A current of {mathSpan("2A")} flows through a circuit for {mathSpan("3s")}. What electric charge flows
          through the circuit?
        </p>
      </>,
      answer: <>
        {mathDiv("q = I #cdot t = 2A #cdot 3s = 6C")}
      </>
    },
    {
      problem: <>
        <p>
          A current of {mathSpan("5A")} flows through a circuit for {mathSpan("10s")}. By what amount has the charge
          in the circuit increased after that time?
        </p>
      </>,
      answer: <>
        The charge has not increased at all, since the same current that flows <i>into</i> the circuit also
        flows <i>out</i> of the circuit.
      </>
    },
    {
      problem: <>
        <p>
          Alice says, "I'm transmitting a charge of {mathSpan("5C")} over this wire in one second."
        </p>
        <p>
          Bob says, "I'll top that. I'm transmitting those {mathSpan("5C")} in only one tenth of a second."
        </p>
        <p>
          Determine the electric current for both cases.
        </p>
      </>,
      answer: <>
        <p>
          {mathSpan("I=q/t")}, so the currents are
        </p>
        {mathDiv("I_{Alice} = #frac{5C}{1s} = 5A")}
        {mathDiv("I_{Bob} = #frac{5C}{0.1s} = 50A")}
        <p>
          Bob needs 10 times the current to deliver the same charge in one tenth of the time.
        </p>
      </>
    },
    {
      problem: <>
        <p>
          Alice says, "I'm transmitting a current of {mathSpan("5A")} over this wire for one second."
        </p>
        <p>
          Bob says, "I'll top that. I'm transmitting those {mathSpan("5A")} in only one tenth of a second."
        </p>
        <p>
          Determine the transmitted electric charge for both cases.
        </p>
      </>,
      answer: <>
        <p>
          {mathSpan("q=I#cdot t")}, so the charges are
        </p>
        {mathDiv("q_{Alice} = 5A #cdot 1s = 5C")}
        {mathDiv("q_{Bob} = 5A #cdot 0.1s = 0.5C")}
        <p>
          Bob has actually not topped Alice at all. Since the electric <i>current</i> is the "speed" at which charge
          gets transmitted, applying that same "speed" over one tenth of the time only transmits one tenth of the
          charge.
        </p>
      </>
    },
    {
      problem: <>
        <p>
          Alice says, "I'm transmitting {mathSpan("300J")} of electric energy over this wire in one second."
        </p>
        <p>
          Bob says, "I'll top that. I'm transmitting those {mathSpan("300J")} in only one tenth of a second."
        </p>
        <p>
          Determine the electric power for both cases.
        </p>
      </>,
      answer: <>
        <p>
          {mathSpan("P=E/t")}, so the powers are
        </p>
        {mathDiv("P_{Alice} = #frac{300J}{1s} = 300W")}
        {mathDiv("P_{Bob} = #frac{300J}{0.1s} = 3kW")}
        <p>
          Bob needs 10 times the power to deliver the same energy in one tenth of the time.
        </p>
      </>
    },
    {
      problem: <>
        <p>
          Alice says, "I'm transmitting {mathSpan("300W")} of power over this wire for one second."
        </p>
        <p>
          Bob says, "I'll top that. I'm transmitting those {mathSpan("300W")} in only one tenth of a second."
        </p>
        <p>
          Determine the transmitted electric energy for both cases.
        </p>
      </>,
      answer: <>
        <p>
          {mathSpan("E=P#cdot t")}, so the energies are
        </p>
        {mathDiv("E_{Alice} = 300W #cdot 1s = 300J")}
        {mathDiv("E_{Bob} = 300W #cdot 0.1s = 30J")}
        <p>
          Bob has actually not topped Alice at all. Since the electric <i>power</i> is the "speed" at which energy
          gets transmitted, applying that same "speed" over one tenth of the time only transmits one tenth of the
          energy.
        </p>
      </>
    },
    {
      problem: <>
        <p>
          A stationary battery is specified to be charged at {mathSpan("20V")}, with at most {mathSpan("10A")}, for a
          total of {mathSpan("1kWh")}. Is it possible to charge this battery in two hours?
        </p>
      </>,
      answer: <>
        <p>
          First, determine the power needed:
        </p>
        {mathDiv("P = #frac{E}{t} = #frac{1kWh}{2h} = 500W")}
        <p>
          Then, determine the current needed:
        </p>
        {mathDiv("I = #frac{P}{U} = #frac{500W}{20V} = 25A")}
        <p>
          This exceeds the maximum current of {mathSpan("10A")}, so it is not possible to charge the battery in two
          hours. The minimum time needed is
        </p>
        {mathDiv("t = #frac{E}{P} = #frac{E}{U#cdot I} = #frac{1kWh}{20V#cdot 10A} = #frac{1kWh}{200W} = 5h")}
      </>
    },
    {
      problem: <>
        <p>
          A copper wire with a diameter of {mathSpan("5mm")} and length of {mathSpan("100m")} is used to transmit a
          current of {mathSpan("2A")}. Calculate the speed of electrons in the wire. After applying the current,
          how long does it take until the current can be measured at the end of the wire (assuming that the wire
          is part of a closed circuit, so current <i>can</i> flow at all)?
        </p>
        <p>
          Copper has a free electron density of {mathSpan("8.47#cdot 10^{22}cm^{-3}")}.
        </p>
      </>,
      answer: <>
        <p>
          Each electron has a charge of {mathSpan("1e")}, so the charge density (charge per volume) in the wire is
        </p>
        {mathDiv("8.47#cdot 10^{22}cm^{-3}e")}
        {mathDiv("= 8.47#cdot 10^{22}cm^{-3}e #cdot #frac{6.241509 #cdot 10^{18}e}{6.241509 #cdot 10^{18}e}")}
        {mathDiv("= 8.47#cdot 10^{22}cm^{-3} #cdot #frac{1C}{6.241509 #cdot 10^{18}}")}
        {mathDiv("= #frac{8.47#cdot 10^{22}}{6.241509 #cdot 10^{18}} #frac{C}{cm^3}")}
        {mathDiv("= 1.357043625 #cdot 10^4 #frac{C}{cm^3}")}
        <p>
          Calculate the cross section of the wire:
        </p>
        {mathDiv("A = #pi (#frac{5mm}{2})^2 = 19.634954375 mm^2 = 0.19634954375 cm^2")}
        <p>
          The charge {mathSpan("q")} per length {mathSpan("x")} of wire is therefore:
        </p>
        {mathDiv("#frac{q}{x} = #frac{qA}{V} = A#cdot #frac{q}{V} = 0.266454897 #cdot 10^4 #frac{C}{cm}")}
        <p>
          The current is proportional to the charge density and the speed of the electrons. For a
          length {mathSpan("x")} of wire,
        </p>
        {mathDiv("I = #frac{q}{t} = #frac{q #cdot x}{t #cdot x} = #frac{q}{x} #cdot #frac{x}{t} = #frac{q}{x} #cdot v")}
        {mathDiv("v = #frac{I}{#frac{q}{x}} = #frac{2#frac{C}{s}}{0.266454897 #cdot 10^4 #frac{C}{cm}} = 7,506 #cdot 10^{-4} #frac{cm}{s}")}
        <p>
          Despite this low number, the current can be measured at the end of the wire almost instantly because the
          speed of electrons is not relevant for this. Each electron pushes against the next one by means of the
          electric field almost instantly, and this "push" propagates at roughly half the speed of light.
        </p>
      </>
    },
  ],
};
