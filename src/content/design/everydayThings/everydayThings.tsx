import type {Folder} from "../../../framework/content.tsx";

export const everydayThings: Folder = {
  id: "everydayThings",
  name: "Book: The Design of Everyday Things",
  type: "folder",
  elements: [
  ],
};

/*

human error / blame people / blame yourself / coping, vs. bad design

Design principles:
- conceptual models
- feedback. Beispiel Knopf der piept und versucht etwas zu tun, was schiefgehen kann (Aber wenns schiefgeht trotzdem piept!)
- constraints: make "the wrong way" impossible, or make the wrong way right and work
  "when instructions have to be pasted on something, it is badly designed"
- affordances: make appropriate actions perceptible and inappropriate ones invisible
  "percieved affordances"

wording "operators who misdiagnosed the problems", read carefully
-> there were problems in the first place
-> always, "why?"

Conceptual models:
- nur Objekt+Anweisungen -> verstehen
- Objekt, Anweisungen und Interna -> Probleme erkennen (aber Hinweis: echte Benutzer sind die sicherste Methode, erkennen
  kann helfen wenn man noch keinen Zugriff auf echte Benutzer hat, oder um den Test mit echten Benutzern vorzubereiten)
- Objekt+Interna -> Anweisungen schreiben, ohne das Objekt zu verändern
- Objekt+Interna -> Anweisungen schreiben und ggf. das Objekt verändern
--> ähnliche Aufgabentypen für die anderen Kapitel


-----------------------------------------------------------------------------------------------------------------------
kap1
-----------------------------------------------------------------------------------------------------------------------

Imagine you stand in front of a door inside a building. The door has a handle that has to be pressed down to
open the door. Make a list of possible clues that tell you whether you have to pull or push the door; not all clues
have to apply for all doors.

(Bild, damit man sich den Türgriff vorstellen kann und die Aufgabe nicht missversteht; in beiden Richtungen,
damit das nicht als Hinweis mißverstanden wird)

- the door has a sign that says "push" or "pull"
- the door connects a corridor to a room and there is a convention that doors always open into the corridor
- the door connects a corridor to a room and there is a convention that doors always open into the room
- the inside of the door frame is visible and the hinges invisible, so the door must be pushed because it cannot open through the frame
- the inside of the door frame is invisible and the hinges visible, so the door must be pulled because it cannot open through the frame
- other doors next to it open the same way

---

Imagine you are at a restaurant. How can you tell the salt shaker and the pepper shaker apart?
- the salt shaker has an "S" on it and the pepper shaker has a "P" on it
- the salt shaker has fewer holes than the pepper shaker (because salt is considered unhealthy)
- the pepper shaker has fewer holes than the salt shaker (because pepper was historically considered an expensive spice)
- the salt shaker is white and the pepper shaker is black
- the shakers are transparent

---

A light switch -- toggle or rocker switch (Bilder) -- does not provide clues about which side turns the light on and which
side turns the light off. Worse, if multiple switches are connected, then flipping one switch reverses the direction
of the other switches. Yet, this is not a huge problem in practice. Why? When does it become a problem?

- it is visible to the user whether the light is currently on or off
- either the light is in the state it should be, then nothing must be done. Or the light is in the wrong state, then
the switch must be flipped. That is, there are only two states, and in each of them the action is obvious.
- even though the switch can be pressed at the top or bottom, only one of these has an effect -- flipping the switch --
and there is tangible feedback when the switch is flipped

- it becomes a problem when there are multiple lights and multiple switches. The user must then try all switches
to see which switch connects to which light.
- it becomes a problem when the light is broken, because there is no longer feedback about the state of the light.
Then the switch cannot be relied on to safely turn the power off. (Note that this is not the only reason why one
should not rely on the switch to safely turn the power off, making this problem less relevant.)

---

What does "affordance" mean?
- it means what a thing seems to exist for, and how it seems intended to be used. Affordances can or cannot match
the actual purpose of that thing, leaing people to use it the right or wrong way.

---

How do affordances relate to instructions?
- If used right, affordances can make some instructions unnecessary: In particular, those instructions that tell the
user what to do with an object. If used wrong, affordances can make _additional_ instructions necessary.

---

What is the afforance of
- a button
  - to press it
- a chair
  - to sit down
- a cup
  - to fill liquids in and drink from it

---

Suppose you have a small measure of poisonous liquid and have to store it somewhere. Evaporation is not a concern.
Based on afforance, which container is LEAST suited? 
- a glass bottle
- a plastic bottle
- a metal can
- a coffee cup
- a glass jar

Answer: The coffee cup, because part of its afforances is to drink from it. This is not generally true for the
other containers. Note however, that drinking from the other containers is not universally wrong either, which is
why not using a coffee cup alone is not sufficient as a safety measure. 

---

Real-world case: A clothes drier has a button to start it. Alice presses the button, but the drier does not start.
Alice presses the button harder, assuming that the button might be just hard to press, or maybe (partially) broken,
but no effect. Alice starts considering that she has to do "something else first", that is, that the drier's
controls have invisible internal state that must be set up correctly first.

That happens every time Alice tries to start the drier. Each time, she tries multiple times, and eventually it
"somehow" works, leaving her confused and unsure what the problem was.

Try to guess what the problem was, then look up what it actually was.

(Hint) Bob comes by and notices that the button does not seem to move by a perceptible amount when pressed. He
concludes that the button is either broken, or blocked by an internal mechanism. He then gives up, giving a remark
that he does not have a clue about technical things anayway.

(Hint) The button was not broken at all -- Alice and Bob were using it wrong, misled by its affordances.

Answer: The button was operated by touching it, not by pressing it -- that is why it did not move. However, whether the
button is being touched is sampled roughly once per second only, so you have to touch it for longer than a second to
make sure the drier acknowledged the touch. Since pressing a mechanical button happens instantly, users usually do not
touch a button for that long. 

There are two problems here that work together to make the design user-unfriendly. The first is that the button's
afforances -- to press it -- do not match how the button has to be operated. The second is that the button is sampled
only once per second, making it almost impossible to discover the proper way to use it. Fortunately, the designers did
one thing right: The button was rigid enough so pressing it hard does not break it. An easy way to solve the problem
is to sample the button more frequently -- a drier is connected to the power grid, so there is no need to save a tiny
amount of energy by sampling the button infrequently.

---

What is the "psychology of causality" the book refers to?
- if you perform an action, and something happens, you tend to believe that your action caused that effect, even
if the effect was caused by something else.
- if you perform an action, and nothing happens, you tend to believe that your action had no effect, even if the
effect might be invisible.

---

What does the term "conceptual model" mean?
- It means "what the user thinks how the system works and behaves".

---

Imagine three lifting platforms:
- Platform one has two buttons (Bild: Dreiecke hoch/runter)
- Platform two has two buttons and two lights (Bild: zwei runde Knöpfe mit Beschritung: move/change, dreieckige lichter
  hoch/runter)
- Platform three has two buttons and one light (Bild: zwei runde Knöpfe mit Beschritung: move/change, ein rundes Licht)

Try to build and describe a conceptual model about how they work. What kind of state does the system have?
What open questions are left in your model?

->

Bild 1:
One button moves the lift up, the other moves it down. Releasing the button stops the lift. The only state is
the current position of the lift. Open questions:
- what happens if you press both buttons simultaneously?
- what happens if you try to move the lift beyond its lower or upper limit?

Bild 2: 
The system has additional state in that it remembers the direction the lift should move. The "move" button moves the
lift in that direction; the "change" button changes the direction. The lights indicate the current direction, with
one light lit and the other dark. Open
questions:
- what happens if you press both buttons simultaneously?
- what happens if you try to move the lift beyond its lower or upper limit?
- what happens if you press the "change" button while the lift is moving?

Bild 3:
The buttons and lights do not suggest a clear conceptual model. The lift _might_ work similar to the second one, with
the light being lit indicating "up" and dark indicating "down" -- or the other way round, or something entirely different.

---

What statement is made in the book about the number of controls and the number of functions of an object?
- If the number of controls equals the number of functions, each control can be specialized, and mapped to exactly
one function. The controls can be labeled according to their function. If, OTOH, the number of functions is greater
than the number of controls, then at least some controls will be associated with more than one function, and
the object will be more difficult to use.

---

A machine is intended to treat each of multiple workpieces with three different treatments: Apply a coat of paint,
blow hot air to evaporate the solvent, then shine a UV light to cure the paint. The machine has three buttons, one for
each step. (Bild: Drei Knöpfe in waagrechter Reihe) There is a natural mapping between the buttons and the steps (in
the sense the book defines "natural mapping"). Which button operates the first treatment (aply paint)? Does the mapping
originate in physics, biology or culture?

Hint: Try to explain how and why you identified the first button.

Answer: The leftmost button operates the first treatment. The mapping originates in culture, as it is
based on the convention of reading and writing from left to right. Users from countries with right-to-left writing
will likely have more difficulties operating the machine. The problem can be moderated by labeling the buttons with
their function and/or the order in which they should be operated, but the risk of using them in the wrong order
by intuition remains.

---

An elevator has two buttons, one for going up and one for going down. (Bild: Dreiecks-Tasten, Rücken an Rücken).
Can you identify the button for going up? How did you know? Does the mapping originate in physics, biology or culture?

Answer: The mapping is in part physics, in part culture. The physical part of the mapping is that the button for going
up is on the top. The cultural part is the triangular shape, which is a case of using arrow symbols to indicate
direction.

----

Imagine a button that operates a machine: When the user presses the button, the machine performs a specific action.
Alice and Bob are part of the team that builds the machine. Alice argues that there is no need for feedback: The user
knows they just pressed the button. What could be Bob's counter-argument?

Answer:
- The user might press the button halfway before changing their mind. For example, the user might remember that
something else needs to be done first. Feedback is then useful to indicate whether that halfway-press was registered
or not.
- The machine might be used in an environment in which machines are used with gloves. In such an environment, the
user might not be able to feel whether the button was pressed properly or not.
- The machine might be used in an environment in which machines get dirty from dust, grease or other substances.
Feedback is useful to make sure the button is still working as intended.

----

Imagine a button that operates a machine: When the user presses the button, the machine performs a specific action.
The button makes a beeping noise as feedback. In some of the possible states of the machine, the button's operation
is dangerous or impossible, and the machine's specification states that the button should not operate the machine
in this case.

What are two possible problems that should be avoided when designing this button? Suggest a solution that avoids
both problems.

Answer: Consider the situation in which the button's operation is prohibited. Should the beeping noise occur when the
button is pressed?
- Problem #1. If the beeping noise does occur, then the user may falsely believe that the machine is performing the
intended action, when in reality it is not.
- Problem #2. If the beeping noise does not occur, then the user may falsely believe that the button is not working
properly, i.e. broken or blocked by dirt. 

A solution that avoids both problems is to make a distinct beeping noice in this case, preferably one that obviously
different from the "normal" one, and which suggests an abnormal situation. One possibility would be a sequence of
short beeps. Note that such a solution should be tested with users to ensure that it is understood: Confront the
user with the abnormal situation without giving instructions, and observe their reaction.

----

To deal with human error, training, manuals and instructions seem like an obvious solution. What other steps should a
design take to deal with the possibility of human error?

Answer:
- As much as possible, make errors impossible by design.
- Minimize the chance for error.
- Minimize the effects of errors when they do occur.
- Make errors easy to detect and correct.
- Make errors easy to recover from.
- Use errors as a source of information to improve the design.
- Consider that users may try to hide errors to avoid blame, punishment, or embarrassment.

----

Alice's car has a system that combines, among other functions, the car's radio / music player and its navigation system.
The music player and the navigation system have independent volume settings but only a single knob to change them:
While the navigation system's voice is giving instructions, turning the knob changes the volume of the navigation
system. The remaining time, it controls the music volume.

Alice complains to Bob: My car's volume control is totally broken. Yesterday, I wanted the navigation system to guide
me to the nearest gas station, but the voice was so quiet I couldn't understand it. I turned up the volume until my
ears almost hurt from the loud music, but the voice was still too quiet to understand. Am I supposed to get
hearing damage just to understand the directions?

Explain the reason for Alice's frustration using the terminology of the book.

Answer: Alice has the wrong mental model of the system. In her model, there is only a single volume setting that is
shared by both the music player and the navigation system. Using this wrong model, she is trying to understand and
predict the behavior of the system, which is doomed to fail.

----

Gulf of Execution:

Consider a room door. There are only four actions to do: open, close, lock, and unlock. (We'll ignore maintenance
for now). Explore the gulf of execution: What obstacles are there?

- open/close: It may be unclear whether to push or pull.
- open/close: The door might be locked, or "locked while open".
- open/close: The door might be blocked by some object (kids' toys are notorious for this)
- open: There might be a person on the other side. You might even hit them with the door.
- lock/unlock: You might realize they don't have the key with them.
- lock/unlock: You could confuse the key with another key.
- lock/unlock: You could be unsure in which direction to turn the key. There might be conventions for this, but doors might violate them.
- lock/unlock is harder when you came from outside, where it is cold, and your fingers are numb.
- all four are harder when it is totally dark
- all four are harder when you are carrying things

----

Gulf of Evaluation:

Consider a room door. There are two independent variables of state, each with two states: Open or closed; locked or
unlocked. (We'll ignore maintenance for now). Explore the gulf of evaluation: What obstacles are there?

- open/closed: from a distance, it is often not possible to see if the door is closed or almost-closed
- locked/unlocked: It is impossible to see whether the door is locked or unlocked. You have to either try to 
lock/unlock or to open it. If the door is unlocked, opening it just for this purpose might disturb a person in the room.
If the door is blocked by some object, it might appear locked when it is actually unlocked.
- The state of the door must be felt if it is dark on both sides.

---





 */
