import type {Collection} from "../../../framework/content.tsx";

import doorHandleImage from "./doorHandle.jpg";
import lightSwitchImage from "./lightSwitch.jpg";
import machineImage from "./machine.jpg";
import platformImage1 from "./platform1.jpg";
import platformImage2 from "./platform2.jpg";
import stoveImage1 from "./stove1.jpg";
import stoveImage2 from "./stove2.jpg";
import stoveImage3 from "./stove3.jpg";
import threeButtonsImage from "./threeButtons.jpg";
import trafficLightsImage from "./trafficLights.png";
import triangleButtonsImage from "./triangleButtons.jpg";
import {Hint} from "../../../framework/technical-components/Hint/Hint.tsx";
import {Shuffled} from "../../../framework/technical-components/layout/Shuffled.tsx";

/*
TODO (Bild vom Kinderspiel mit Holzklötzen und Löcherschablone)

TODO: Bilder: toggle switch, rocker switch

Imagine three lifting platforms:
  <ul>
    <li>Platform one has two buttons (TODO Bild: Dreiecke hoch/runter)</li>
    <li>Platform two has two buttons and two lights (TODO Bild: zwei runde Knöpfe mit Beschritung: move/change, dreieckige lichter
      hoch/runter)</li>
    <li>Platform three has two buttons and one light (TODO Bild: zwei runde Knöpfe mit Beschritung: move/change, ein rundes Licht)</li>
  </ul>

    <p>
      A machine is intended to treat each of multiple workpieces with three different treatments: Apply a coat of
      paint, blow hot air to evaporate the solvent, then shine a UV light to cure the paint. The machine has three
      buttons, one for each step.
    </p>
    <p>
      TODO (Bild: Drei Knöpfe in waagrechter Reihe)
    </p>

    TODO (Bild: Dreiecks-Tasten für Aufzug, Rücken an Rücken).

    <p>
      Many stoves have their burners and knobs arranged like this:
    </p>
    TODO: bild
    <p>
    but the book argues for either of the following two arrangements:
        </p>
    TODO bild mit 2

    <p>
    Write instructions that a person can learn and remember, to draw the following pixel-art image:
        </p>
    TODO (Bild: Ampel mit schwarzen linien, weißer Fläche, alle Lichter an.)

 */

export const everydayThings: Collection = {
  id: "everydayThings",
  name: "Book: The Design of Everyday Things",
  type: "collection",
  exercises: [
    {
      type: "exercise",
      label: "Push or pull?",
      problem: <>
        <p>
          Imagine you stand in front of a door inside a building. The door has a handle that has to be pressed down to
          open the door. Make a list of possible clues that tell you whether you have to pull or push the door; not all clues
          have to apply for all doors.
        </p>
        <div>
          <img src={doorHandleImage} style={{width: "100%"}} />
        </div>
      </>,
      answer: <>
        <ul>
          <li>the door has a sign that says "push" or "pull"</li>
          <li>the door connects a corridor to a room and there is a convention that doors always open into the corridor</li>
          <li>the door connects a corridor to a room and there is a convention that doors always open into the room</li>
          <li>the inside of the door frame is visible and the hinges invisible, so the door must be pushed because it cannot open through the frame</li>
          <li>the inside of the door frame is invisible and the hinges visible, so the door must be pulled because it cannot open through the frame</li>
          <li>other doors next to it open the same way</li>
        </ul>
      </>,
    },
    {
      type: "exercise",
      label: "Salt and Pepper Shakers",
      problem: <>
        <p>
          Imagine you are at a restaurant. How can you tell the salt shaker and the pepper shaker apart?
        </p>
      </>,
      answer: <>
        <ul>
          <li>the salt shaker has an "S" on it and the pepper shaker has a "P" on it</li>
          <li>the salt shaker has fewer holes than the pepper shaker (because salt is considered unhealthy)</li>
          <li>the pepper shaker has fewer holes than the salt shaker (because pepper was historically considered an expensive spice)</li>
          <li>the salt shaker is white and the pepper shaker is black</li>
          <li>the shakers are transparent</li>
        </ul>
      </>,
    },
    {
      type: "exercise",
      label: "Light Switch Direction",
      problem: <>
        <img src={lightSwitchImage} style={{width: "100%"}} />
        <p>
          A light switch -- toggle or rocker switch -- does not provide clues about which side turns the light on and
          which side turns the light off. Worse, if multiple switches are connected, then flipping one switch reverses
          the direction of the other switches. Yet, this is not a huge problem in practice. Why? When does it become
          a problem?
        </p>
      </>,
      answer: <>
        <p>
          It is not a problem because
          <ul>
            <li>it is visible to the user whether the light is currently on or off</li>
            <li>either the light is in the state it should be, then nothing must be done. Or the light is in the wrong
              state, then the switch must be flipped. That is, there are only two states, and in each of them the
              action is obvious.</li>
            <li>even though the switch can be pressed at the top or bottom, only one of these has an effect -- flipping
              the switch -- and there is tangible feedback when the switch is flipped</li>
          </ul>
        </p>
        <p>
          It becomes a problem when
          <ul>
            <li>it becomes a problem when there are multiple lights and multiple switches. The user must then try all
              switches to see which switch connects to which light.</li>
            <li>it becomes a problem when the light is broken, because there is no longer feedback about the state of
              the light. Then the switch cannot be relied on to safely turn the power off. (Note that this is not the
              only reason why one should not rely on the switch to safely turn the power off, making this problem less
              relevant.)</li>
          </ul>
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "Definition: Affordance",
      problem: <>
        <p>
          What does "affordance" mean?
        </p>
      </>,
      answer: <>
        <p>
          It means what a thing seems to exist for, and how it seems intended to be used. Affordances can or cannot
          match the actual purpose of that thing, leaing people to use it the right or wrong way.
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "Affordances and Instructions",
      problem: <>
        <p>
          How do affordances relate to instructions?
        </p>
      </>,
      answer: <>
        <p>
          If used right, affordances can make some instructions unnecessary: In particular, those instructions that
          tell the user what to do with an object. If used wrong, affordances can make <li>additional</li> instructions
          necessary.
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "Affordances of Objects",
      problem: <>
        <p>
          What are the afforances of
          <ul>
            <li>a button</li>
            <li>a chair</li>
            <li>a cup</li>
          </ul>
        </p>
      </>,
      answer: <>
        <ul>
          <li>Button: to press it.</li>
          <li>Chair: to sit down; to place things on top of it; to move it around.</li>
          <li>Cup: to fill liquids in it; to drink from it.</li>
        </ul>
      </>,
    },
    {
      type: "exercise",
      label: "Poisonous Liquid",
      problem: <>
        <p>
          Suppose you have a small measure of poisonous liquid and have to store it somewhere. Evaporation is not a
          concern. Based on afforance, which container is <b>least</b> suited?
          <ul>
            <li>a glass bottle</li>
            <li>a plastic bottle</li>
            <li>a metal can</li>
            <li>a coffee cup</li>
            <li>a glass jar</li>
          </ul>
        </p>
      </>,
      answer: <>
        <p>
          The coffee cup, because part of its afforances is to drink from it. This is not generally true for the other
          containers. Note however, that drinking from the other containers is not universally wrong either, which is
          why not using a coffee cup alone is not sufficient as a safety measure.
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "Clothes Drier Button",
      problem: <>
        <p>
          This problem was a real-world case, not a made up example: A clothes drier has a button to start it. Alice
          presses the button, but the drier does not start. Alice presses the button harder, assuming that the button
          might be just hard to press, or maybe (partially) broken, but no effect. Alice starts considering that she
          has to do "something else first", that is, that the drier's controls have invisible internal state that must
          be set up correctly first.
        </p>
        <p>
          That happens every time Alice tries to start the drier. Each time, she tries multiple times, and eventually
          it "somehow" works, leaving her confused and unsure what the problem was.
        </p>
        <p>
          Try to guess what the problem was, then look up what it actually was.
        </p>
        <Hint label={"Hint 1"}>
          Bob comes by and notices that the button does not seem to move by a perceptible amount when pressed. He
          concludes that the button is either broken, or blocked by an internal mechanism. He then gives up, giving a remark
          that he does not have a clue about technical things anayway.
        </Hint>
        <Hint label={"Hint 2"}>
          The button was not broken at all -- Alice and Bob were using it wrong, misled by its affordances.
        </Hint>
      </>,
      answer: <>
        <p>
          Answer: The button was operated by touching it, not by pressing it -- that is why it did not move. However,
          whether the button is being touched is sampled roughly once per second only, so you have to touch it for
          longer than a second to make sure the drier acknowledged the touch. Since pressing a mechanical button
          happens instantly, users usually do not touch a button for that long.
        </p>
        <p>
          There are two problems here that work together to make the design user-unfriendly. The first is that the
          button's afforances -- to press it -- do not match how the button has to be operated. The second is that
          the button is sampled only once per second, making it almost impossible to discover the proper way to use
          it. Fortunately, the designers did one thing right: The button was rigid enough so pressing it hard does not
          break it. An easy way to solve the problem is to sample the button more frequently -- a drier is connected to
          the power grid, so there is no need to save a tiny amount of energy by sampling the button infrequently.
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "Psychology of Causality",
      problem: <>
        <p>
          What is the "psychology of causality" the book refers to?
        </p>
      </>,
      answer: <>
        <ul>
          <li>if you perform an action, and something happens, you tend to believe that your action caused that effect,
            even if the effect was caused by something else. </li>
          <li>if you perform an action, and nothing happens, you tend to believe that your action had no effect, even
            if the effect might be invisible. </li>
        </ul>
      </>,
    },
    {
      type: "exercise",
      label: "Definition: Conceptual Model",
      problem: <>
        <p>
          What does the term "conceptual model" mean?
        </p>
      </>,
      answer: <>
        <p>
          It means "what the user thinks how the system works and behaves".
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "Lifting Platforms",
      problem: <>
        <p>
          Imagine three lifting platforms:
          <ul>
            <li>Platform one has two buttons (TODO Bild: Dreiecke hoch/runter)</li>
            <li>Platform two has two buttons and two lights (TODO Bild: zwei runde Knöpfe mit Beschritung: move/change, dreieckige lichter
              hoch/runter)</li>
            <li>Platform three has two buttons and one light (TODO Bild: zwei runde Knöpfe mit Beschritung: move/change, ein rundes Licht)</li>
          </ul>
        </p>
        <p>
          Try to build and describe a conceptual model about how they work. What kind of state does the system have?
          What open questions are left in your model?
        </p>
      </>,
      answer: <>
        <h3>Platform One</h3>
        <p>
          One button moves the lift up, the other moves it down. Releasing the button stops the lift.
          The only state is the current position of the lift.
        </p>
        <p>
          Open questions:
          <ul>
            <li>What happens if you press both buttons simultaneously?</li>
            <li>What happens if you try to move the lift beyond its lower or upper limit?</li>
          </ul>
        </p>
        <h3>Platform Two</h3>
        <p>
          The system has additional state in that it remembers the direction the lift should move. The "move" button moves the
          lift in that direction; the "change" button changes the direction. The lights indicate the current direction, with
          one light lit and the other dark.
        </p>
        <p>
          Open questions:
          <ul>
            <li>What happens if you press both buttons simultaneously?</li>
            <li>What happens if you try to move the lift beyond its lower or upper limit?</li>
            <li>What happens if you press the "change" button while the lift is moving?</li>
          </ul>
        </p>
        <h3>Platform Three</h3>
        <p>
          The buttons and lights do not suggest a clear conceptual model. The lift <i>might</i> work similar to the
          second one, with the light being lit indicating "up" and dark indicating "down" -- or the other way round,
          or something entirely different.
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "Number of controls and functions",
      problem: <>
        <p>
          What statement is made in the book about the number of controls and the number of functions of an object?
        </p>
      </>,
      answer: <>
        <p>
          If the number of controls equals the number of functions, each control can be specialized, and mapped to
          exactly one function. The controls can be labeled according to their function. If, OTOH, the number of
          functions is greater than the number of controls, then at least some controls will be associated with more
          than one function, and the object will be more difficult to use.
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "Natural Mapping (1)",
      problem: <>
        <p>
          A machine is intended to treat each of multiple workpieces with three different treatments: Apply a coat of
          paint, blow hot air to evaporate the solvent, then shine a UV light to cure the paint. The machine has three
          buttons, one for each step.
        </p>
        <p>
          TODO (Bild: Drei Knöpfe in waagrechter Reihe)
        </p>
        <p>
          There is a natural mapping between the buttons and the steps (in the sense the book defines "natural
          mapping"). Which button operates the first treatment (aply paint)? Does the mapping originate in physics,
          biology or culture?
        </p>
        <Hint label={"Hint"}>
          Try to explain how and why you identified the first button.
        </Hint>
      </>,
      answer: <>
        <p>
          The leftmost button operates the first treatment. The mapping originates in culture, as it is based on the
          convention of reading and writing from left to right. Users from countries with right-to-left writing will
          likely have more difficulties operating the machine. The problem can be moderated by labeling the buttons with
          their function and/or the order in which they should be operated, but the risk of using them in the wrong
          order by intuition remains.
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "Natural Mapping (2)",
      problem: <>
        TODO (Bild: Dreiecks-Tasten, Rücken an Rücken).
        <p>
          An elevator has two buttons, one for going up and one for going down. Can you identify the button for
          going up? How did you know? Does the mapping originate in physics, biology or culture?
        </p>
      </>,
      answer: <>
        <p>
          The mapping is in part physics, in part culture. The physical part of the mapping is that the button for going
          up is on the top. The cultural part is the triangular shape, which is a case of using arrow symbols to
          indicate direction.
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "Natural Mapping (3)",
      problem: <>
        <p>
          Many stoves have their burners and knobs arranged like this:
        </p>
        TODO: bild
        <p>
          but the book argues for either of the following two arrangements:
        </p>
        TODO bild mit 2
        <p>
          Point out two disavantages of these suggestions. For one suggestion, one of the problems is solvable.
        </p>
      </>,
      answer: <>
        <p>
          Problem #1: Both take up more space than the original arrangement. Space is often a scarce resource in kitchens.
        </p>
        <p>
          Problem #2: Both suggest to place the knobs on top of the stove, in a place where it is easy to accidentally spill
          liquids. This problem is solvable with the second suggestion because the knobs are still arranged in a horizontal
          line and can be moved back to the front side of the stove.
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "Feedback (1)",
      problem: <>
        <p>
          Imagine a button that operates a machine: When the user presses the button, the machine performs a specific
          action. Alice and Bob are part of the team that builds the machine. Alice argues that there is no need for
          feedback: The user knows they just pressed the button. What could be Bob's counter-argument?
        </p>
      </>,
      answer: <>
        <ul>
          <li>The user might press the button halfway before changing their mind. For example, the user might remember
            that something else needs to be done first. Feedback is then useful to indicate whether that halfway-press
            was registered or not.</li>
          <li>The machine might be used in an environment in which machines are used with gloves. In such an
            environment, the user might not be able to feel whether the button was pressed properly or not.</li>
          <li>The machine might be used in an environment in which machines get dirty from dust, grease or other
            substances. Feedback is useful to make sure the button is still working as intended.
          </li>
        </ul>
      </>,
    },
    {
      type: "exercise",
      label: "Feedback (2)",
      problem: <>
        <p>
          Imagine a button that operates a machine: When the user presses the button, the machine performs a specific
          action. The button makes a beeping noise as feedback. In some of the possible states of the machine, the
          button's operation is dangerous or impossible, and the machine's specification states that the button should
          not operate the machine in this case.
        </p>
        <p>
          What are two possible problems that should be avoided when designing this button? Suggest a solution that
          avoids both problems.
        </p>
      </>,
      answer: <>
        <p>
          Consider the situation in which the button's operation is prohibited. Should the beeping noise occur when the
          button is pressed?
          <ul>
            <li>Problem #1. If the beeping noise does occur, then the user may falsely believe that the machine is
              performing the intended action, when in reality it is not.</li>
            <li>Problem #2. If the beeping noise does not occur, then the user may falsely believe that the button is
              not working properly, i.e. broken or blocked by dirt.</li>
          </ul>
        </p>
        <p>
          A solution that avoids both problems is to make a distinct beeping noice in this case, preferably one that
          obviously different from the "normal" one, and which suggests an abnormal situation. One possibility would be
          a sequence of short beeps. Note that such a solution should be tested with users to ensure that it is
          understood: Confront the user with the abnormal situation without giving instructions, and observe their
          reaction.
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "Errors (1)",
      problem: <>
        <p>
          To deal with human error, training, manuals and instructions seem like an obvious solution. What other steps
          should a design take to deal with the possibility of human error?
        </p>
      </>,
      answer: <>
        <ul>
          <li>As much as possible, make errors impossible by design.</li>
          <li>Minimize the chance for error.</li>
          <li>Minimize the effects of errors when they do occur.</li>
          <li>Make errors easy to detect and correct.</li>
          <li>Make errors easy to recover from.</li>
          <li>Use errors as a source of information to improve the design.</li>
          <li>Consider that users may try to hide errors to avoid blame, punishment, or embarrassment.</li>
        </ul>
      </>,
    },
    {
      type: "exercise",
      label: "Errors (2)",
      problem: <>
        <p>
          Alice's car has a system that combines, among other functions, the car's radio / music player and its
          navigation system. The music player and the navigation system have independent volume settings but only a
          single knob to change them: While the navigation system's voice is giving instructions, turning the knob
          changes the volume of the navigation system. The remaining time, it controls the music volume.
        </p>
        <p>
          Alice complains to Bob: My car's volume control is totally broken. Yesterday, I wanted the navigation system
          to guide me to the nearest gas station, but the voice was so quiet I couldn't understand it. I turned up the
          volume until my ears almost hurt from the loud music, but the voice was still too quiet to understand. Am I
          supposed to get hearing damage just to understand the directions?
        </p>
        <p>
          Explain the reason for Alice's frustration using the terminology of the book.
        </p>
      </>,
      answer: <>
        <p>
          Alice has the wrong mental model of the system. In her model, there is only a single volume setting that is
          shared by both the music player and the navigation system. Using this wrong model, she is trying to understand
          and predict the behavior of the system, which is doomed to fail.
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "Gulf of Execution",
      problem: <>
        <p>
          Consider a room door. There are only four actions to do: open, close, lock, and unlock. (We'll ignore
          maintenance for now). Explore the gulf of execution: What obstacles are there?
        </p>
      </>,
      answer: <>
        <ul>
          <li>open/close: It may be unclear whether to push or pull.</li>
          <li>open/close: The door might be locked, or "locked while open".</li>
          <li>open/close: The door might be blocked by some object (kids' toys are notorious for this)</li>
          <li>open: There might be a person on the other side. You might even hit them with the door.</li>
          <li>lock/unlock: You might realize they don't have the key with them.</li>
          <li>lock/unlock: You could confuse the key with another key.</li>
          <li>lock/unlock: You could be unsure in which direction to turn the key. There might be conventions for this,
            but doors might violate them.</li>
          <li>lock/unlock is harder when you came from outside, where it is cold, and your fingers are numb.</li>
          <li>all four are harder when it is totally dark</li>
          <li>all four are harder when you are carrying things</li>
        </ul>
      </>,
    },
    {
      type: "exercise",
      label: "Gulf of Evaluation",
      problem: <>
        <p>
          Consider a room door. There are two independent variables of state, each with two states: Open or closed;
          locked or unlocked. (We'll ignore maintenance for now). Explore the gulf of evaluation: What obstacles are
          there?
        </p>
      </>,
      answer: <>
        <ul>
          <li>open/closed: from a distance, it is often not possible to see if the door is closed or almost-closed</li>
          <li>locked/unlocked: It is impossible to see whether the door is locked or unlocked. You have to either try to
            lock/unlock or to open it. If the door is unlocked, opening it just for this purpose might disturb a person
            in the room. If the door is blocked by some object, it might appear locked when it is actually unlocked.</li>
          <li>The state of the door must be felt if it is dark on both sides.</li>
        </ul>
      </>,
    },
    {
      type: "exercise",
      label: "Seven Stages of Action (1)",
      problem: <>
        <p>
          What are the design questions to ask for the seven stages of action?
        </p>
      </>,
      answer: <>
        <ul>
          <li>How easily can one determine the function of the device?</li>
          <li>How easily can one tell what actions are possible?</li>
          <li>How easily can one determine the mapping from intention to physical movement?</li>
          <li>How easily can one perform the action?</li>
          <li>How easily can one tell what state the system is in?</li>
          <li>How easily can one determine the mapping from system state to interpretation?</li>
          <li>How easily can one tell if the system is in the desired state?</li>
        </ul>
      </>,
    },
    {
      type: "exercise",
      label: "Seven Stages of Action (2)",
      problem: <>
        <p>
          Inside an elevator for a 5-storey building, there are 7 buttons (ground floor, basement, and 5 storeys above).
          Pressing a button instructs the elevator to move to that floor; if multiple buttons get pressed in succession,
          the elevator will stop at each of them in order. However, for that particular elevator, there are no indicator
          lights that show which buttons have been pressed. Which of the seven stages of action are affected by the
          missing lights?
        </p>
      </>,
      answer: <>
        <ul>
          <li>Directly and fully affected: Perceiving the state of the world. There is simply no way to know which
            buttons have been pressed.</li>
          <li>Indirectly affected: Forming the intention. When entering the elevator, you cannot know whether the button
            for your destination has been pressed by somebody else already. You have to press it again to be sure.</li>
        </ul>
        <p>
          Note that since the seven stages are an approximate model, there is room for interpretation when discussing
          which stages exactly are affected. The key point is to have a tool to think about, and discuss, the effect of
          the missing indicator lights on the usability of the system.
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "Knowledge in Your Head and In the World (1)",
      problem: <>
        <p>
          The chapter about knowledge in your head and knowledge in the world lists four tools:
          <ul>
            <li>Information is in the world</li>
            <li>Great precision is not required</li>
            <li>Natural constraints are present</li>
            <li>Cultural constraints are present</li>
          </ul>
        </p>
        <p>
          You are tasked with painting colors into a coloring picture. There is a traffic light in the picture that you
          are told is showing "red", so you fill the yellow and green lights with black color, then reach for red.
        </p>
        <p>
          Give examples how each of them can guide you towards the correct pen, except for natural constraints -- there
          are no contraints in this example that prevent you from using the wrong color.
        </p>
      </>,
      answer: <>
        <ul>
          <li>Information is in the world: The body of the pens are in the same color as they draw. The color can also
            be observed by looking at the tip. In addition, the names of the colors may be written on the pens,
            especially if the set of pens contains many different shades of red.</li>
          <li>Great precision is not required: You only need to decide among the pens available. If there is only one
            shade of red in the set, then you have to use it. Furthermore, if the traffic light has a wrong tone of red,
            it will still be recognizable, and the somewhat-off color may be perceived as an artistic choice.</li>
          <li>Cultural constraints are present: You know from your driving experience which shade of red is used for
            traffic lights.</li>
        </ul>
      </>,
    },
    {
      type: "exercise",
      label: "Knowledge in Your Head and In the World (2)",
      problem: <>
        <p>
          The chapter about knowledge in your head and knowledge in the world lists four tools:
          <ul>
            <li>Information is in the world</li>
            <li>Great precision is not required</li>
            <li>Natural constraints are present</li>
            <li>Cultural constraints are present</li>
          </ul>
        </p>
        <p>
          Imagine you are visiting another country that uses a different standard for electric outlets. You want to
          charge your phone, so you use an adapter you took with you and are now looking for an outlet. How do the above
          four tools help you?
        </p>
      </>,
      answer: <>
        <ul>
          <li>Information is in the world: You can look up an image of the outlets for that country on the
            internet.</li>
          <li>Great precision is not required: If you try to plug the charger into something that is not an outlet,
            nothing bad will happen. This is obviously not true when sticking something else into an actual outlet, but
            that's a different case.</li>
          <li>Natural constraints are present: The outlet must match the adapter, so by looking at the adapter, you can
            guess what the outlet must look like.</li>
          <li>Cultural constraints are present: With some exceptions, there are cultural expectations about where
            outlets can be found. You will probably start by looking at the lower and middle part of walls.</li>
        </ul>
      </>,
    },
    {
      type: "exercise",
      label: "Knowledge in Your Head and In the World (3)",
      problem: <>
        <p>
          Consider a simple room door. What are examples for knowledge in the world about using this door? What are
          examples for knowledge in the head?
        </p>
      </>,
      answer: <>
        <p>
          Knowledge in the world:
          <ul>
            <li>Looking at the frame and the hinges tells you whether to push or pull.</li>
            <li>The placement of the handle tells you whether to push/pull on the right or on the left.</li>
            <li>Whether the door is currently open or closed (unless it is almost-closed, then it is hard to tell).</li>
            <li>If the door is closed: whether it is locked (by trying to open it).</li>
            <li><b>If</b> an appropriate sign or label is placed: Whether the door ought to be closed while nobody
              passes through it.</li>
          </ul>
        </p>
        <p>
          Knowledge in the head:
          <ul>
            <li>Which room the door leads to, especially if closed.</li>
            <li>Which key is the right one.</li>
            <li>If the door is closed: whether it is locked (just by looking at it).</li>
            <li><b>If no</b> appropriate sign or label is placed: Whether the door ought to be closed while nobody
              passes through it.</li>
          </ul>
        </p>
        <p>
          Note that the knowledge in the world can be internalized and become knowledge in the head. This can lead
          to confusion if the world changes and the two pieces of information conflict.
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "The Structure of Memory (1)",
      problem: <>
        <p>
          The book presents three categories of memory:
          <ul>
            <li>memory for arbitrary things</li>
            <li>memory for meaningful relationships</li>
            <li>memory through explanation</li>
          </ul>
        </p>
        <p>
          Imagine that a group of people are tasked to remember numbers, one number per person. Given the following numbers,
          which categories do they belong to?
          <ul>
            <Shuffled>
              <li>{new Date().getFullYear()}</li>
              <li>911</li>
              <li>123456789</li>
              <li>100010001000</li>
              <li>6190723</li>
              <li>94100270</li>
            </Shuffled>
          </ul>
        </p>
      </>,
      answer: <>
        <p>
          Relationship:
          <ul>
            <li>{new Date().getFullYear()} (current year)</li>
            <li>911 (emergency phone number)</li>
          </ul>
        </p>
        <p>
          Explanation:
          <ul>
            <li>123456789 (the digits 1 to 9 in sequence)</li>
            <li>100010001000 (the digits 1000, repeated three times)</li>
          </ul>
        </p>
        <p>
          Arbitrary:
          <ul>
            <li>6190723</li>
            <li>94100270</li>
          </ul>
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "The Structure of Memory (2)",
      problem: <>
        <p>
          The book presents three categories of memory:
          <ul>
            <li>memory for arbitrary things</li>
            <li>memory for meaningful relationships</li>
            <li>memory through explanation</li>
          </ul>
        </p>
        <p>
          Write instructions that a person can learn and remember, to draw the following pixel-art image:
        </p>
        TODO (Bild: Ampel mit schwarzen linien, weißer Fläche, alle Lichter an.)
        <p>
          The instructions should assume that an 8x(???) pixel grid is given, and the following colors to be available:
          black, white, red, green, blue, cyan, purple, yellow.
        </p>
        <p>
          Design the instructions in such a way that it is easy to draw a pixel-perfect replica from memory. Make use of
          relationships and explanation as much as possible, resorting to arbitrary instructions only when necessary.
        </p>
      </>,
      answer: <>
        <p>
          <b>Sample instructions, first variant:</b> Draw traffic lights with all three lights lit, with a black outline
          and white body. The outline is one pixel on the border of the image, and one pixel around each light. Each
          light is a 2x2 block of colored pixels. The lights' outlines should be the 8 pixels directly next to the
          light, excluding the diagonal corners.
        </p>
        <p>
          How this uses the different categories:
          <ul>
            <li>"traffic lights": relationship to a real-world object already known; indicates the colors red, yellow, green, and their arrangement.</li>
            <li>"lit": relationship to the behavior of that object; needed to clarify the use of those colors.</li>
            <li>the fact that all three lights are lit is arbitrary and not usually encountered in real-world traffic lights</li>
            <li>"outline": relationship to another real-world object (coloring books); very concisely indicates the position of many pixels</li>
            <li>"one pixel on the outside", "one pixel around", "2x2 block": short explanations for many actual pixels</li>
            <li>"black", "white": mostly arbitrary colors, though again relate to the patterns found in coloring books</li>
            <li>the exact way these shapes are matched to pixels must be remembered as an arbitrary thing, such as the exact
              shape of the outline around the lights.</li>
          </ul>
        </p>
        <p>
          <b>Sample instructions, second variant:</b> Draw traffic lights with all three lights lit, with a white body,
          and a black outline on the image border and around each light. Each light is a 2x2 block of colored pixels.
          The outline should be enough so no white pixel touches the image border or a colored pixel, but no more than
          that.
        </p>
        <p>
          This variant removes the detailed instructions for the outline, and instead describes the constraints that the
          outline must fulfill. Even though the description is hardly shorter, it conveys meaning instead of arbitrary
          instructions. Furthermore, with a similar description, the outline for other shapes can be derived.
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "Knowing what to do (1)",
      problem: <>
        <p>
          Imagine an electronic device with a detachable power cord. How do you know what to do with the power cord?
        </p>
      </>,
      answer: <>
        <h3>Affordances</h3>
        <ul>
          <li>The power cord has plugs on both sides, and plugs afford ("are for") plugging them in.</li>
          <li>The device has a socket that affords pluggin a plug into it.</li>
          <li>The cord affords laying it across the room (among other things).</li>
        </ul>
        <h3>Constraints</h3>
        <ul>
          <li>Physical: The cord uses different types of plugs on its two ends. This constraint prevents the user from
            touching the wires on the device side and getting electrocuted. The wall-side plug will not fit into the
            device-side socket and vice versa.</li>
          <li>Physical: The wall-side plug can only be inserted in the correct way into the outlet. For some outlet
            types, two orientations are possible (flipped by 180°), but either one will work. If the device is designed
            well, the same is true for the device-side socket.</li>
          <li>Semantic: Electronic devices need power, so a power cord (or charger) is required for operation.</li>
          <li>Cultural: You know from experience what a power cord is and how to use it. You know the looks of a
            wall-side plug, and that the device-side plug is something else.</li>
          <li>Logical: The power cord was in the box for the device, so you are supposed to use it.</li>
        </ul>
      </>,
    },
    {
      type: "exercise",
      label: "Knowing what to do (2)",
      problem: <>
        TODO (Bild vom Kinderspiel mit Holzklötzen und Löcherschablone)
        <p>
          In this kids' toy, a physical constraint dictates which pieces can be placed in which holes. However, there
          is a second constraint at work. Which kind of constraint is it? What condition does this second constraint
          depend on?
        </p>
      </>,
      answer: <>
        <p>
          The second constraint is logical: There are holes in the same shapes as the pieces, so they are meant to be
          used for something. This second constraint indicates that it is wrong to put all pieces sideways through the
          square hole, even though they would fit. This constraint depends on the task to be accomplished: Are you
          meant to play with the toy the way it was intended, or are you meant to put all pieces into the box, no
          matter how?
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "Splash Screen",
      problem: <>
        <p>
          With computers, a "splash screen" is an image that appears after commanding an application to start, and that
          stays visible while the application is loading. What problem does a splash screen solve? In what ways is it
          imperfect?
        </p>
      </>,
      answer: <>
        <p>
          The splash screen gives feedback to the user's action to start the application. Typically this happens in addition
          to the operating system already acknowledging the command, for example by flashing the application's icon. The splash
          screen also makes it visible that the application is loading, and the splash screeen disappearing without any further
          controls becoming visible indicates a problem.
        </p>
        <p>
          The splash screen is imperfect in many ways:
          <ul>
            <li>There is still a visible gap between commanding the application to start and the splash screen
              appearing. This gap originates from the time to load the splash screen and the program code that displays
              it.</li>
            <li>The splash screen does not fix the fact that the time to load the application is time wasted for the
              user.</li>
            <li>If the user misclicked and started the wrong application, most splash screens do not allow to cancel the
              loading process. The user has to wait for the application to fully load, only to close it.</li>
            <li>The splash screen disappearing without any controls becoming visible indicate a problem, but it would
              be better to fix that problem instead (if it is a problem in the application's program code), or tell the
              user how to fix it (if it is a problem with the user's system).</li>
          </ul>
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "Sound for Visibility",
      problem: <>
        <p>
          The simplest of microwave ovens use sound for "visibility" (in a broader sense): The make a beeping or a
          "ping" noise when they are done. There are at least two other, less obvious ways, in which they use sound for
          visibility -- which are they?
        </p>
      </>,
      answer: <>
        <p>
          1. The microwave oven makes a humming noise while it is running. This is accompanied by a light inside that
          shines only while running, but even with the light broken or the oven around a corner or behind you, the
          humming noise can tell whether the oven is running.
        </p>
        <p>
          2. The oven's door makes a clicking noise when latching closed. The exact noise can be used to tell whether
          the door is closed properly.
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "Errors (3)",
      problem: <>
        <p>
          Associate the following errors to the different mechanisms for errors.
          <ul>
            <Shuffled>
              <li>You play a new piece of music that starts similar to a piece you know, then unintentionally continue
                playing the well-known one.</li>
              <li>You head towards an appointment near the grocery store that you frequent, but then enter the store
                instead</li>
              <li>You throw your laundry into the toilet or garbage bin</li>
              <li>On your computer, you close the wrong one of several similarly-looking programs</li>
              <li>You try to call some customer service, ready to tell them your customer number that you have in your
                documents in
                front of you, but dial your customer number instead of the phone number</li>
              <li>Suppose you have children. You are in the grocery store without your children, then hear a child call
                "mom" (or "dad") and you answer even though it obviously can't be your child.</li>
              <li>You play hide-and-seek and you are one of the hiders. The seeker starts singing your favorite song and
                intuitively you start singing along and reveal your location.</li>
              <li>You confuse the ringing of your office telephone with knocking on the door and answer the phone with
                "come in".</li>
              <li>You enter a room and forget why you went there.</li>
              <li>You want to add a note to one of your designs in a CAD program that has just come to your mind. You
                start the program, but have to wait for it to load while the program only shows a splash screen. Loading
                takes long enough that you start thinking about the groceries that you have to pick up later. When the
                CAD program finally finished to load, you have difficulties remembering your idea that you wanted to add
                as a note.</li>
              <li>You wait for your friend to text you a message, which you already expected an hour ago, only to
                discover that you forgot to put your phone out of "do not disturb".</li>
              <li>You are at a shooting range. You fire a single shot, then remove the magazine to place the pistol
                aside and inspect how well you aimed. You have been taught that a round may still be in the chamber,
                but you forget to remove it.</li>
              <li>On the computer, you try to type your password. You are sure that you enter it correctly, but it fails
                three times, permanently locking you out of your account. You then realize that the "caps lock" key was
                active.</li>
            </Shuffled>
          </ul>
        </p>
      </>,
      answer: <>
        <li>capture errors:
          <ul>
            <li>You play a new piece of music that starts similar to a piece you know, then unintentionally continue
              playing the well-known one.</li>
            <li>You head towards an appointment near the grocery store that you frequent, but then enter the store
              instead</li>
          </ul>
        </li>
        <li>description errors:
          <ul>
            <li>You throw your laundry into the toilet or garbage bin</li>
            <li>On your computer, you close the wrong one of several similarly-looking programs</li>
          </ul>
        </li>
        <li>data-driven errors:
          <ul>
            <li>You try to call some customer service, ready to tell them your customer number that you have in your
              documents in front of you, but dial your customer number instead of the phone number</li>
            <li>Suppose you have children. You are in the grocery store without your children, then hear a child call
              "mom" (or "dad") and you answer even though it obviously can't be your child.</li>
            <li>You play hide-and-seek and you are one of the hiders. The seeker starts singing your favorite song and
              intuitively you start singing along and reveal your location. </li>
          </ul>
        </li>
        <li>associative activation errors:
          <ul>
            <li>You confuse the ringing of your office telephone with knocking on the door and answer the phone with
              "come in".</li>
          </ul>
        </li>
        <li>loss-of-activation errors:
          <ul>
            <li>You enter a room and forget why you went there.</li>
            <li>You want to add a note to one of your designs in a CAD program that has just come to your mind. You
              start the program, but have to wait for it to load while the program only shows a splash screen. Loading
              takes long enough that you start thinking about the groceries that you have to pick up later. When the
              CAD program finally finished to load, you have difficulties remembering your idea that you wanted to add
              as a note.</li>
          </ul>
        </li>
        <li>mode errors:
          <ul>
            <li>You wait for your friend to text you a message, which you already expected an hour ago, only to discover
              that you forgot to put your phone out of "do not disturb".</li>
            <li>You are at a shooting range. You fire a single shot, then remove the magazine to place the pistol aside
              and inspect how well you aimed. You have been taught that a round may still be in the chamber, but you
              forget to remove it.</li>
            <li>On the computer, you try to type your password. You are sure that you enter it correctly, but it fails
              three times, permanently locking you out of your account. You then realize that the "caps lock" key was
              active.</li>
          </ul>
        </li>
      </>,
    },
    {
      type: "exercise",
      label: "Avoiding Mistakes With Rules",
      problem: <>
        <p>
          Give some examples for how rules can help to avoid mistakes (that is, conscious errors -- not slips). Point
          out what is crucial for the rules to work.
        </p>
      </>,
      answer: <>
        <ul>
          <li>Rules can make certain actions inappropriate in general. For example, in home wiring, bypassing a breaker
            is prohibited in many countries. An electrician cannot misjudge the conditions for when to bypass the
            breaker because there are no conditions. The crucial part is that no judgement is required to know whether
            the rule applies. This also helps a lot in preventing social pressure from enforcing a dangerous
            "judgement". Another crucial part is that breaking the rule is never required to complete the task, or that
            not completing the task due to circumstances is acceptable.</li>
          <li>Rules can demand that operations on a system follow certain pre-defined scripts or checklists. Again, the
            crucial part is that no judgement is required to know whether the rule applies. In particular, a clear
            procedure to handle unforeseen events is needed, to prevent an error (which should be corrected) to be
            mistaken for a novel situation (that warrants deviating from the script).</li>
          <li>Rules can demand that operations on a system are always reviewed by a second person. A crucial part here
            is that the second person can actually make an independent judgement, and not be pressured by the first
            person to accept an error as correct.</li>
        </ul>
      </>,
    },
    {
      type: "exercise",
      label: "Biolab Example",
      problem: <>
        <p>
          A biolab deals with several pathogens, from rhinovirus (common cold) to coronavirus, to Marburg virus (a very
          dangerous virus). Every room that deals with the pathogens has to be entered through an airlock, and the doors
          marked with the biohazard symbol. Non-lab rooms are not marked and do not use an airlock.
        </p>
        <p>
          Point out a flaw with this scheme, and suggest a solution.
        </p>
      </>,
      answer: <>
        <p>
          The warning symbols do not distinguish between the different levels of danger: The same biohazard symbol is
          being used for deadly viruses and for those that are mostly just annoying. Other perceptible signals are
          needed to understand the level of danger. Since the biohazard symbols are often required by law, this means
          adding <i>more</i> signs or signals, while not overloading workers with too much information.
        </p>
        <p>
          A solution is to present the biohazard symbol and the additional signals at different times. The airlocks may
          be a place do to this: Present the biohazard symbol on the outer door to make the worker aware that a lab room
          is being entered, then use wall colors inside the airlock to indicate the level of danger. Make sure that the
          colors are clearly distinguishable even by the colorblind (this can be done through the use of different
          levels of brightness).
        </p>
        <p>
          Note that the level of danger may be indicated on the outside too, together with the biohazard sign, but this
          is largely a convenience, not a safety feature -- it allows to know the level of danger without entering the
          airlock. When it comes to evaluating the safety, these signs might as well be absent, because somebody who
          is about to make an error will not read them at that moment.
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "Fireplace and Kitchen Hood",
      problem: <>
        <p>
          Assume a house with a fireplace that can be closed with a glass door. The house also has a kitchen hood above
          the stove. This presents a problem in well-insulated houses: The outer walls are sufficiently airtight to make
          the kitchen hood create an underpressure that pull smoke out of the fireplace and into the living room. This
          is usually just an annoyance, but can become dangerous when the problem is not noticed.
        </p>
        <p>
          A smoke detector is an obvious starting point to deal with the problem, but we want to look for other
          solutions: Suggest an interlock to prevent the problem altogether. (Such an interlock is required by code in
          some countries.) Point out problems with your design.
        </p>
      </>,
      answer: <>
        <p>
          One possible interlock is a magnetic sensor at one or more windows that control the power supply for the
          kitchen hood. One of those windows must be opened for the kitchen hood to work. The wiring can be done in such
          a way that only power to the fan is cut, not power to the lights.
        </p>
        <p>
          Problem with that approach:
          <ul>
            <li>Wiring. However, Solutions exist in which the power switch and the sensor are separated, with radio
              communication.</li>
            <li>The sensor may fail, either turning of the kitchen hood even when the window is open, or allowing it to
              run with the window closed (and possibly pull smoke into the living room).</li>
            <li>One must open a specific window, not just any window. Multiple sensors can extend this to multiple
              windows, but there is usually a limit, and doing so is more expensive.</li>
            <li>The wireless communication may be unreliable, especially in a metal-clad house, or may interfere with
              similar solutions in neighboring houses.</li>
            <li>Some modern kitchen hoods misbehave when their power is cut off.</li>
          </ul>
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "Microwave with Display",
      problem: <>
        <p>
          Alice describes the design of a microwave oven to Bob. The design was prompted by difficulties in sourcing the
          turning knobs for power and cooking time in an older model. The new knobs are incremental rotary encoders:
          They do not have an abolute position, but can only sense the direction and amount when turning them. In
          consequence, a numeric display is needed to show the resulting power and cooking time when turning them. In
          our example, assume that the problems with obtaining the old knobs are so severe that even using a display is
          a more viable solution.
        </p>
        <p>
          Bob responds: So the display will show the selected power when turning the power knob, the selected time when
          turning the time knob, and the remaining time when the oven is running, right? Then when the microwave is not
          running, the display can be used to show the time of day. Knowing the time of day is useful for most people,
          and the rest can just ignore it. The user can easily see and hear that the oven is not running, so it won't be
          mistaken for cooking time.
        </p>
        <p>
          What should be Alice's response?
        </p>
      </>,
      answer: <>
        <p>
          Alice should question the need for this feature. After all, it was just Bob's idea, not a feature requested by
          an actual user, let alone a relevant fraction of all users. Without further investigation, a reasonable
          starting point is to assume that everybody can easily look up the time of day on their phone or watch, or ask
          somebody. This is without even considering that setting the time of day, and keeping it up-to-date with DST
          changes, requires either additional controls or a connection to an NTP server.
        </p>
      </>,
    },
  ],
};
