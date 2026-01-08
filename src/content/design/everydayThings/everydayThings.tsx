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

Many stoves have their burners and knobs arranged like this:

(Bild)

but the book argues for either of the following two arrangements:

(Bilder)

Point out two disavantages of these suggestions. One of the problems is solvable with one of the suggestions.

Answer:

Problem #1: Both take up more space than the original arrangement. Space is often a scarce resource in kitchens.
Problem #2: Both suggest to place the knobs on top of the stove, in a place where it is easy to accidentally spill
liquids. This problem is solvable with the second suggestion because the knobs are still arranged in a horizontal
line and can be moved back to the front side of the stove.

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

What are the design questions to ask for the seven stages of action?
- How easily can one determine the function of the device?
- How easily can one tell what actions are possible?
- How easily can one determine the mapping from intention to physical movement?
- How easily can one perform the action?
- How easily can one tell what state the system is in?
- How easily can one determine the mapping from system state to interpretation?
- How easily can one tell if the system is in the desired state?

---

Inside an elevator for a 5-storey building, there are 7 buttons (ground floor, basement, and 5 storeys above).
Pressing a button instructs the elevator to move to that floor; if multiple buttons get pressed in succession,
the elevator will stop at each of them in order. However, for that particular elevator, there are no indicator
lights that show which buttons have been pressed. Which of the seven stages of action are affected by the
missing lights?

Answer:
- Directly and fully affected: Perceiving the state of the world. There is simply no way to know which buttons have
been pressed.
- Indirectly affected: Forming the intention. When entering the elevator, you cannot know whether the button for your
destination has been pressed by somebody else already. You have to press it again to be sure.

Note that since the seven stages are an approximate model, there is room for interpretation when discussing which
stages exactly are affected. The key point is to have a tool to think about, and discuss, the effect of the missing
indicator lights on the usability of the system.

---

The chapter about knowledge in your head and knowledge in the world lists four tools:
* Information is in the world
* Great precision is not required
* Natural constraints are present
* Cultural constraints are present

You are tasked with painting colors into a coloring picture. There is a traffic light in the picture that you
are told is showing "red", so you fill the yellow and green lights with black color, then reach for red.

Give examples how each of them can guide you towards the correct pen, except for natural constraints -- there are
no contraints in this example that prevent you from using the wrong color.

Answer:
- Information is in the world: The body of the pens are in the same color as they draw. The color can also be
observed by looking at the tip. In addition, the names of the colors may be written on the pens, especially
if the set of pens contains many different shades of red.
- Great precision is not required: You only need to decide among the pens available. If there is only one shade of red
in the set, then you have to use it. Furthermore, if the traffic light has a wrong tone of red, it will still be
recognizable, and the somewhat-off color may be perceived as an artistic choice.
- Cultural constraints are present: You know from your driving experience which shade of red is used for traffic lights.

---

The chapter about knowledge in your head and knowledge in the world lists four tools:
* Information is in the world
* Great precision is not required
* Natural constraints are present
* Cultural constraints are present

Imagine you are visiting another country that uses a different standard for electric outlets. You want to charge
your phone, so you use an adapter you took with you and are now looking for an outlet. How do the above four tools
help you?

* Information is in the world: You can look up an image of the outlets for that country on the internet.
* Great precision is not required: If you try to plug the charger into something that is not an outlet, nothing bad
will happen. This is obviously not true when sticking something else into an actual outlet, but that's a
different case.
* Natural constraints are present: The outlet must match the adapter, so by looking at the adapter, you can guess
what the outlet must look like.
* Cultural constraints are present: With some exceptions, there are cultural expectations about where outlets can be
found. You will probably start by looking at the lower and middle part of walls.

---

The structure of memory

The book presents three categories of memory:
- memory for arbitrary things
- memory for meaningful relationships
- memory through explanation

Imagine that a group of people are tasked to remember numbers, one number per person. Given the following numbers,
which categories do they belong to?

relationship:
- ((javascript: current year)
- 911 (Notruf)
explanation:
- 123456789
- 100010001000
arbitrary:
- 6190723
- 94100270

---

The book presents three categories of memory:
- memory for arbitrary things
- memory for meaningful relationships
- memory through explanation

Write instructions that a person can learn and remember, to draw the following pixel-art image:

(Bild:
Ampel mit schwarzen linien, weißer Fläche, alle Lichter an.
)

The instructions should assume that an 8x(???) pixel grid is given, and the following colors to be available:
black, white, red, green, blue, cyan, purple, yellow.

Design the instructions in such a way that it is easy to draw a pixel-perfect replica from memory. Make use of
relationships and explanation as much as possible, resorting to arbitrary instructions only when necessary.

Answer:

Sample instructions, first variant:
Draw traffic lights with all three lights lit, with a black outline and white body. The outline is one pixel on the
border of the image, and one pixel around each light. Each light is a 2x2 block of colored pixels. The lights' outlines
should be the 8 pixels directly next to the light, excluding the diagonal corners.

How this uses the different categories:
- "traffic lights": relationship to a real-world object already known; indicates the colors red, yellow, green, and their arrangement.
- "lit": relationship to the behavior of that object; needed to clarify the use of those colors.
- the fact that all three lights are lit is arbitrary and not usually encountered in real-world traffic lights
- "outline": relationship to another real-world object (coloring books); very concisely indicates the position of many pixels
- "one pixel on the outside", "one pixel around", "2x2 block": short explanations for many actual pixels
- "black", "white": mostly arbitrary colors, though again relate to the patterns found in coloring books
- the exact way these shapes are matched to pixels must be remembered as an arbitrary thing, such as the exact
shape of the outline around the lights.

<br/>

Sample instructions, second variant:
Draw traffic lights with all three lights lit, with a white body, and a black outline on the image border and around
each light. Each light is a 2x2 block of colored pixels. The outline should be enough so no white pixel touches the
image border or a colored pixel, but no more than that.

This variant removes the detailed instructions for the outline, and instead describes the constraints that the outline
must fulfill. Even though the description is hardly shorter, it conveys meaning instead of arbitrary instructions.
Furthermore, with a similar description, the outline for other shapes can be derived.

---

Consider a simple room door. What are examples for knowledge in the world about this door? What are examples for
knowledge in the head?

Answer:

Knowledge in the world:
- Looking at the frame and the hinges tells you whether to push or pull
- The placement of the handle tells you whether to push/pull on the right or on the left
- Whether the door is currently open or closed (unless it is almost-closed, then it is hard to tell)
- If the door is closed: whether it is locked (by trying to open it).
- <b>If</b> an appropriate sign or label is placed: Whether the door ought to be closed while nobody passes through it.

Knowledge in the head:
- Which room the door leads to, especially if closed
- Which key is the right one
- If the door is closed: whether it is locked (just by looking at it).
- <b>If no<b> appropriate sign or label is placed: Whether the door ought to be closed while nobody passes through it.

---

Imagine an electronic device with a detachable power cord. How do you know what to do with the power cord?

Answer:
- Affordances:
  - The power cord has plugs on both sides, and plugs afford ("are for") plugging them in.
  - The device has a socket that affords pluggin a plug into it.
  - The cord affords laying it across the room (among other things).
- Constraints:
  - Physical: The cord uses different types of plugs on its two ends. This constraint prevents the user from touching
    the wires on the device side and getting electrocuted. The wall-side plug will not fit into the device-side
    socket and vice versa.
  - Physical: The wall-side plug can only be inserted in the correct way into the outlet. For some outlet types,
    two orientations are possible (flipped by 180°), but either one will work. If the device is designed well, the
    same is true for the device-side socket.
  - Semantic: Electronic devices need power, so a power cord (or charger) is required for operation.
  - Cultural: You know from experience what a power cord is and how to use it. You know the looks of a wall-side
    plug, and that the device-side plug is something else.
  - Logical: The power cord was in the box for the device, so you are supposed to use it.

---

(Bild vom Kinderspiel mit Holzklötzen und Löcherschablone)

In this kids' toy, a physical constraint dictates which pieces can be placed in which holes. However, there is a
second constraint at work. Which kind of constraint is it? What condition does this second constraint depend on?

Answer:
The second constraint is logical: There are holes in the same shapes as the pieces, so they are meant to be used
for something. This second constraint indicates that it is wrong to put all pieces sideways through the square hole,
even though they would fit. This constraint depends on the task to be accomplished: Are you meant to play with the
toy the way it was intended, or are you meant to put all pieces into the box, no matter how?


---

With computers, a "splash screen" is an image that appears after commanding an application to start, and that stays
visible while the application is loading. What problem does a splash screen solve? In what wqys is it imperfect?

Answer:
The splash screen gives feedback to the user's action to start the application. Typically this happens in addition
to the operating system already acknowledging the command, for example by flashing the application's icon. The splash
screen also makes it visible that the application is loading, and the splash screeen disappearing without any further
controls becoming visible indicates a problem.

The splash screen is imperfect in many ways:
- There is still a visible gap between commanding the application to start and the splash screen appearing. This gap
  originates from the time to load the splash screen.
- The splash screen does not fix the fact that the time to load the application is time wasted for the user.
- If the user misclicked and started the wrong application, most splash screens do not allow to cancel the loading
  process. The user has to wait for the application to fully load, only to close it.
- The splash screen disappearing without any controls becoming visible indicate a problem, but it would be better to
  fix that problem instead (if it is a problem in the application'S program code), or tell the user how to fix it
  (if it is a problem with the user's system). 

---

The simplest of microwave ovens use sound for "visibility" (in a broader sense): The make a beeping or a "ping" noise
when they are done. There are at least two other, less obvious ways, in which they use sound for visibility -- which
are they?

Answer:

1. The microwave oven makes a humming noise while it is running. This is accompanied by a light inside that shines only
while running, but even with the light broken or the oven around a corner or behind you, the humming noise can tell
whether the oven is running.

2. The oven's door makes a clicking noise when latching closed. The exact noise can be used to tell whether the door
is closed properly.

---

Associate the following errors to the different mechanisms for errors.

(useMemo + shuffle)
- capture errors
  - You play a new piece of music that starts similar to a piece you know, then unintentionally continue playing the well-known one.
  - You head towards an appointment near the grocery store that you frequent, but then enter the store instead
- description errors
  - You throw your laundry into the toilet or garbage bin
  - On your computer, you close the wrong one of several similarly-looking programs  
- data-driven errors
  - You try to call some customer service, ready to tell them your customer number that you have in your documents in
    front of you, but dial your customer number instead of the phone number
  - Suppose you have children. You are in the grocery store without your children, then hear a child call "mom" (or
    "dad") and you answer even though it obviously can't be your child.
  - You play hide-and-seek and you are one of the hiders. The seeker starts singing your favorite song and intuitively
    you start singing along and reveal your location. 
- associative activation errors
  - You confuse the ringing of your office telephone with knocking on the door and answer the phone with "come in".
- loss-of-activation errors
  - You enter a room and forget why you went there.
  - You want to add a note to one of your designs in a CAD program that has just come to your mind. You start the
    program, but have to wait for it to load while the program only shows a splash screen. Loading takes long enough
    that you start thinking about the groceries that you have to pick up later. When the CAD program finally finished
    to load, you have difficulties remembering your idea that you wanted to add as a note.
- mode errors
  - You wait for your friend to text you a message, which you already expected an hour ago, only to discover that you
    forgot to put your phone out of "do not disturb".
  - You are at a shooting range. You fire a single shot, then remove the magazine to place the pistol aside and
    inspect how well you aimed. You have been taught that a round may still be in the chamber, but you forget to remove
    it.
  - On the computer, you try to type your password. You are sure that you enter it correctly, but it fails three
    times, permanently locking you out of your account. You then realize that the "caps lock" key was active.

---

Give some examples for how rules can help to avoid mistakes (that is, conscious errors -- not slips). Point out
what is crucial for the rules to work.

Answer:
- Rules can make certain actions inappropriate in general. For example, in home wiring, bypassing a breaker is
prohibited in many countries. An electrician cannot misjudge the conditions for when to bypass the breaker because
there are no conditions. The crucial part is that no judgement is required to know whether the rule applies. This
also helps a lot in preventing social pressure from enforcing a dangerous "judgement". Another crucial part is that
breaking the rule is never required to complete the task, or that not completing the task due to circumstances is
acceptable.
- Rules can demand that operations on a system follow certain pre-defined scripts or checklists. Again, the
crucial part is that no judgement is required to know whether the rule applies. In particular, a clear procedure to
handle unforeseen events is needed, to prevent an error (which should be corrected) to be mistaken for a novel
situation (that warrants deviating from the script).
- Rules can demand that operations on a system are always reviewed by a second person. A crucial part here is that
the second person can actually make an independent judgement, and not be pressured by the first person to accept
an error as correct.

---

A biolab deals with several pathogens, from rhinovirus (common cold) to coronavirus, to Marburg virus (a very
dangerous virus). Every room that deals with the pathogens has to be entered through an airlock, and the doors
marked with the biohazard symbol. Non-lab rooms are not marked and do not use an airlock.

Point out a flaw with this scheme, and suggest a solution.

Answer:
The warning symbols do not distinguish between the different levels of danger: The same biohazard symbol is
being used for deadly viruses and for those that are mostly just annoying. Other perceptible signals are
needed to understand the level of danger. Since the biohazard symbols are often required by law, this means adding
_more_ signs or signals, while not overloading workers with too much information. 

A solution is to present the biohazard symbol and the additional signals at different times. The airlocks may be a
place do to this: Present the biohazard symbol on the outer door to make the worker aware that a lab room is being
entered, then use wall colors inside the airlock to indicate the level of danger. Make sure that the colors are
clearly distinguishable even by the colorblind (this can be done through the use of different levels of brightness).

Note that the level of danger may be indicated on the outside too, together with the biohazard sign, but this is
largely a convenience, not a safety feature -- it allows to know the level of danger without entering the airlock.
When it comes to evaluating the safety, these signs might as well be missing, because somebody who is about to
make an error will not read them at that moment.

------------------------------------------------------------
------------------------------------------------------------

Imagine that you have to design the controls for a special-purpose lifting platform. The platform can be raised and
lowered, but it can also be tilted sideways up to a certain angle (for this exercise, let's just assume that this
is needed for some operation). The platform has flood lights on both sides to work in the dark, but they should
be controllable independently to reduce thermal stress on the flood lights themselves when not needed. The control
panel for this platform is supposed to be on the ground, operated by somebody who is not working on the platform.

- Design the controls. Note that there may not be a single "correct" solution, but different approaches with tradeoffs.
- Describe the affordances of the controls. Note that the platform itself has its own affordances that should be
  considered out-of-scope for this exercise.
- Describe the conceptual model you had in mind when designing the controls.
- Does the number of functions exceed the number of controls? What are the consequences of this?
- Describe the mapping between controls and functions, and between sensors / state and indicators. Which mappings
  are natural mappings? Do they originate in physics, biology or culture? Do they properly bridge the gulf of
  execution and the gulf of evaluation?
- Does your solution give feedback? If so, how?
- What instructions and labels are needed for your solution?
- What contraints are set by your solution? 
- What errors can you anticipate when using the controls? How can they be prevented?
  - Not being able to center the platform -> indicate
  - Not being able to tilt to a specific angle -> indicate
  - Not being able to raise to a specific height -> indicate
  - accidentally operate when bumping into the controls, ...
  - Leave lights on, ... 
  ---> Require to insert a key before operation. Removing the key is only possible if turned off, or alternatievly,
    removing the key turns everything off.
  - Tilt too much so things slide off -> railings should be used anyway; add no-slip floor to the platform.
  (((
    - As much as possible, make errors impossible by design.
    - Minimize the chance for error.
    - Minimize the effects of errors when they do occur.
    - Make errors easy to detect and correct.
    - Make errors easy to recover from.
    - Use errors as a source of information to improve the design.
    - Consider that users may try to hide errors to avoid blame, punishment, or embarrassment.
  )))
- The conceptual model formed by actual operators may be different. How can you find out their conceptual model?
  - Let them use it. To make the process simpler, cheaper, and possible to perform *before* building the platform,
    build the controls, and let them operate a simulated platform on a computer screen.
  - Note that an operator may be unable to describe their conceptual model. Ask them questions like "what would happen
    if I do this..." if that happens.
- You might not know all tradeoffs involved with the different solution. How can you find out more about them?
  - In advance: Use the simulated platform to ask operators about problems they anticipate.
  - In advance: Let operators describe how they anticipate to use the platform, and work together to anticipate
    problems. Make sure they describe, as much as possible, the context in which the platform will be used.
- Ask the seven design questions, relating to the seven stages of action, about your design.
  (((
  - How easily can one determine the function of the device?
  - How easily can one tell what actions are possible?
  - How easily can one determine the mapping from intention to physical movement?
  - How easily can one perform the action?
  - How easily can one tell what state the system is in?
  - How easily can one determine the mapping from system state to interpretation?
  - How easily can one tell if the system is in the desired state?
  )))
  Which of the stages are impeded by something? Can you improve the design?
- Apply the four tools to obtain knowledge. Do they work well for your design?
  * Information is in the world
  * Great precision is not required
  * Natural constraints are present
  * Cultural constraints are present
- What must be kept in memory about your design? Associate each piece to remember with one of the three categories of
  memory.

------------------------------------------------------------
------------------------------------------------------------

Idee für Gruppenaufgabe, separate App: Simulierte Fabrik, und dafür eine Steuerung bauen. Am Ende muss ein dritter,
der nicht dabei war, das bedienen können. Inkl. Bauteile versagen usw. Sandboxed Javascript zum Bauen der Steuerung.

Steuerung steuert auch die "Kamera" für die Fabrik.

---

Idee auch als physisches Spiel: Simulation auf dem Rechner; physische Controls, die programmierbar sind.



 */
