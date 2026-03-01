import type {Collection} from "../../../framework/content.tsx";

export const castHandbook: Collection = {
  id: "castHandbook",
  name: "Book: CAST Handbook",
  type: "collection",
  exercises: [
    {
      type: "exercise",
      label: "CAST and STPA",
      problem: <>
        <p>
          What is the similarioty and the difference between CAST and STPA?
        </p>
      </>,
      answer: <p>
        Both are meant to prevent future accidents. STPA is used <i>before</i> an accident occurs, and tries to predict
        it. CAST is used <i>after</i> an accident or near-miss occurs, to learn as much from it as possible.
      </p>,
    },
    {
      type: "exercise",
      label: "Accident with Acceptable Loss",
      problem: <>
        <p>
          How does the book's definition of an <i>accident</i> deal with losses that are considered desirable or
          acceptable?
        </p>
      </>,
      answer: <>
        <p>
          Such an event is <i>not</i> considered an accident, in the sense the book uses that word. Including such losses
          would make the definition unwieldy: If a person considers a loss desirable or acceptable, they
          will not be interested in preventing such a loss in the future, making CAST useless for that purpose.
        </p>
        <p>
          Note that if there is disagreement, then CAST applies, and so does the definition of "accident": It is
          sufficient that at least <i>some</i> involved stakeholder considers the loss unacceptable.
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "Types of Losses",
      problem: <>
        <p>
          Name some examples of accidents and losses that can be analyzed with CAST?
        </p>
      </>,
      answer: <>
        <ul>
          <li>An industrial accident that kills or injures workers and damages equipment.</li>
          <li>An industrial accident that leads to environmental pollution.</li>
          <li>The execution of undesired financial transactions that cause a loss of money.</li>
          <li>Misplanning that leads to delays.</li>
          <li>Publishing internal information that damages the reputation of a company.</li>
          <li>Publishing internal information that reveals trade secrets or strategical plans to competitors.</li>
          <li>Acts of sabotage.</li>
        </ul>
      </>,
    },
    {
      type: "exercise",
      label: "Accidents and Near-misses (1)",
      problem: <>
        <p>
          What is the similarity and the difference between an <i>accident</i> (or <i>mishap</i>) and
          an <i>incident</i> (or <i>near-miss</i>)?
        </p>
      </>,
      answer: <>
        <p>
          Both are undesired, unacceptable and unplanned events. The difference is that an accident lead to a loss,
          while an incident did not. The difference is caused by the conditions and the environment under which it
          occurs.
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "Accidents and Near-misses (2)",
      problem: <>
        <p>
          Which of the following are accidents, and which are near-misses? What conditions or environmental factors
          could be different to move them to the other category?
        </p>
        <ul>
          <li>A shelf falls over and injures a worker.</li>
          <li>A worker trips over an object and spills his coffee.</li>
          <li>The buying department has to order raw materials, but two different employees do not communicate
            sufficiently and order the desired amount twice.</li>
          <li>A cracked workpiece gets inserted into a lathe. When spinning at high speed, the workpiece explodes
            and severely damages the machine, but does not injure any worker.</li>
          <li>A truck driver uses an outdated map and tries to drive along a route that is closed for maintenance.
            He only notices his error when he arrives at the construction site, so he has to turn around and loses
            a lot of time.</li>
          <li>Consider a context in which two workers must prepare workpieces that can be assembled when both are
            finished. Worker one needs one day, worker two needs two days. But after half finished, worker one notices
            the raw material he used was damaged and has to restart with a new piece.</li>
        </ul>
      </>,
      answer: <>
        <ul>
          <li>The shelf injuring a worker is clearly a loss, so this is an accident. It could have been a near-miss if
            the worker happens to pass by the shelf a little earlier or later, so the shelf misses him.</li>
          <li>Spilt coffee is usually not considered a noteworthy loss (unless you are splitting hairs), so this would
            be a near-miss. It could have been an accident if the worker fell and got injured.</li>
          <li>Ordering material twice is expensive. Even if the material can be returned, a lot of time is lost. So this
            is an accident. It could have been a near-miss if the error gets noticed and corrected before the material
            gets shipped.</li>
          <li>Even without any injured workers, the damaged lathe is expensive, so this is an accident. It could have
            been a near-miss if the piece exploded but by sheer luck, nothing gets damaged, or if the piece happened
            to stay intact despite the high turning speed.</li>
          <li>The lost time for the truck drive is a noticable loss, so this is an accident. It could have been
            a near-miss if road signs warned the driver in time.</li>
          <li>The example of the two workers is a near-miss: Even with worker one starting over, he is finished before
            worker two, so there is no delay in result.</li>
        </ul>
      </>,
    },
    {
      type: "exercise",
      label: "Hazards",
      problem: <>
        <p>
          Idenfity hazards in these examples, and propose how to remove them.
        </p>
        <ul>
          <li>A shelf falls over and injures a worker.</li>
          <li>A worker trips over an object and spills his coffee.</li>
          <li>The buying department has to order raw materials, but two different employees do not communicate
            sufficiently and order the desired amount twice.</li>
          <li>A cracked workpiece gets inserted into a lathe. When spinning at high speed, the workpiece explodes
            and severely damages the machine, but does not injure any worker.</li>
          <li>A truck driver uses an outdated map and tries to drive along a route that is closed for maintenance.
            He only notices his error when he arrives at the construction site, so he has to turn around and loses
            a lot of time.</li>
          <li>Consider a context in which two workers must prepare workpieces that can be assembled when both are
            finished. Worker one needs one day, worker two needs two days. But after half finished, worker one notices
            the raw material he used was damaged and has to restart with a new piece.</li>
        </ul>
      </>,
      answer: <>
        <ul>
          <li>The shelf falling over is a hazard. Solution: Secure the shelf to the wall.</li>
          <li>Objects lying around that people can trip over are a hazard. Solution: tidy up.</li>
          <li>Employees not communicating sufficiently is a hazard. The solution can be talking, written notes, peer
            review of each other's work, or a computer system that keeps track of buying requests and their status.</li>
          <li>A cracked workpiece that is meant to be turned at high speed is a hazard. It was not described in the
            example whether the machine uses a shield for the workers to protect them from flying pieces; not using
            such a shield would be a hazard too. Solution: Install a shield if not yet present. Inspect workpieces
            before turning them and/or investigate why a piece was already damaged.</li>
          <li>Using outdated maps is a hazard. Solution: Keep the maps up-to-date. Cross-check with information about
            road closures if not yet done, and establish a source for this information if necessary.</li>
          <li>The damaged raw material is a hazard. Solution: Inspect the raw material before using it and/or investigate
            why a piece was damaged in the first place.</li>
        </ul>
      </>,
    },
    {
      type: "exercise",
      label: "Root Cause Seduction",
      problem: <>
        <p>
          What errors are made by identifying a "root cause"?
        </p>
      </>,
      answer: <>
        <ul>
          <li>If multiple problems occurred, one of them is selected and the others ignored.</li>
          <li>The events that caused the "root cause" are not investigated.</li>
        </ul>
      </>,
    },
    {
      type: "exercise",
      label: "Overwhelming Whack-a-Mole",
      problem: <>
        <p>
          What approach is suggested by the book for a situation in which too many problems occur to analyze each in
          depth?
        </p>
      </>,
      answer: <>
        <p>
          Select one, or a few, problems, and analyze those in depth. There are likely common systemic factors for many
          of these problems, and a thorough in-depth analysis will therefore help with other problems that have not been
          analyzed.
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "Hindsight bias",
      problem: <>
        <p>
          What approach is suggested by the book to avoid hindsight bias?
        </p>
      </>,
      answer: <>
        <p>
          Focus on why people's judgement -- that turned out to be wrong -- made sense to them at the time.
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "Incident Reporting System (1)",
      problem: <>
        <p>
          Suppose you are analyzing an accident in a factory: The gears for a conveyor belt got stuck. While trying to
          fix the problem, the belt suddenly started and a worker got injured. You are trying to find out why the
          gears got stuck, and why they suddenly started again.
        </p>
        <p>
          The workers tell you that similar problems have repeatedly happened with that belt in the past. None of the
          worker ever reported the problem to the incident reporting system. What is your reaction to this?
        </p>
      </>,
      answer: <>
        <p>
          The reaction should be to understand why the workers did not use the incident reporting system. Start with
          the assumption that the behavior of the workers made sense to them at the time. Why did it make sense? Maybe
          the system is hard to use, or the workers never get feedback for issues they reported. Ask questions to
          understand their motivation, and let them show you what reporting an indicent is like.
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "Incident Reporting System (2)",
      problem: <>
        <p>
          Suppose you are analyzing an accident in a factory, and a worker shows you the incident reporting system.
          She opens a website on a computer in an office room. "First you have to enter your employee number here at
          the top. It's not your normal employee number, it's your old employee number. Everbody has one, but it is
          rarely needed." 
        </p>
        <p>
          "Next you fill out this text field here. Just write what happened. You have to be a bit concise here -- it's
          limited to 5000 letters -- but that is rarely a problem. What's more important is that you may never ever
          tough the escape key, because then everything you typed will be lost, without even asking you if you want
          to save it. I usually write it in Word first and then copy and paste it over, so don't lose my text."
        </p>
        <p>
          "And then you click submit, and that's it. It's actually not complicated. But sometimes the IT guys get angry
          at us because we write so many annoying tickets, and then they remember you and your stuff gets worked on
          last. So writing incident reports has a good chance of them getting back at you when you need them to fix
          the computer."
        </p>
        <p>
          Make a list of things you should investigate further.
        </p>
      </>,
      answer: <>
        <ul>
          <li>The "old" employee number is an obstacle towards using the incident reporting system. This number seems
            to be used rarely, so an employee might have trouble finding it to report an incident.</li>
          <li>The "old" employee number is also an indication that the incident reporting system is severely outdated:
            it is older than the "new" employee numbers, which seem to be quite old already. Why did that system not
            get updated to use the new numbers? There may be a problem maintaining that system which could easily
            cause other problems.</li>
          <li>The 5000 letter limit seems to be no problem for this worker, but you should ask other workers if they
            agree with that assessment. Maybe <i>they</i> have ignored an incident because of that limit.</li>
          <li>A single keypress losing all text is certainly a problem. It is probably not hard to find a case where
            a worker ignored an incident after actually typing it, then losing all text just typed. Using Word to
            avoid the problem should only count as a workaround if everybody is aware of it. Even then, it is an
            obstacle.</li>
          <li>The remark about "the IT guys" is interesting in multiple ways. The obvious one is that writing an
            incident report gets penalized. However, the issue runs deeper: Does the remark mean that incident
            reports get treated as IT service requests? An analysis of the process for dealing with incident
            reports is certainly needed.</li>
        </ul>
      </>,
    },
    {
      type: "exercise",
      label: "Following Procedures",
      problem: <>
        <p>
          Suppose you are analyzing an accident in a factory. When the accident happened, a worker was not following
          written procedures. His superiors argue that him not following procedures caused the accident. How should
          you react to the situation?
        </p>
      </>,
      answer: <>
        <p>
          The argument made by the worker's superiors is unhelpful in several ways:
          <ul>
            <li>The argument focuses on a single "root" cause and neglects that multiple factors could have
              played together.</li>
            <li>The argument does not provide any useful information. It can be used to justify corrective measures,
              such as training, more procedures, punishing the worker, or whatever -- but there won't be any indication
              whether these measures help prevent future accidents.
              </li>
          </ul>
          You should instead find out <i>why</i> the worker did not follow procedures, and learn more about the
          accident.
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "The use of the word 'fail'",
      problem: <>
        <p>
          Here are two descriptions of the same event:
          <ul>
            <li>The worker failed to place a lockout-tagout to prevent the machine from running.</li>
            <li>The worker did not place a lockout-tagout to prevent the machine from running.</li>
          </ul>
          What is the role of the word "fail" in the first description?
        </p>
      </>,
      answer: <>
        <p>
          The word "fail" turns a description into a judgement: It does not only state that the worker did not place
          a LOTO, but also implies that the worker <i>should have</i> placed the LOTO. It puts blame on the worker
          and prevents asking <i>why</i> the worker did not place a LOTO.
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "The drunk worker",
      problem: <>
        <p>
          After an accident in a factory, a team analyzes the causes that lead to the accident. Alice and Bob are part
          of that team. After a thorough analysis, the team concludes that safety practices at the factory are
          exceptionally good. Problems in the past have been analyzed and factors have been reduced. In fact, the
          factory's management has already adopted CAST.
        </p>
        <p>
          The analysis has lead to a few minor suggestions for improvement that have been included into planning by
          management, but the one big factor that is left is that the worker involved in the accident was drunk
          at work and was severely lacking sleep. His colleagues point towards problems in his private life that
          contribute to that behavior and which are beyond the worker's power to fix. 
        </p>
        <p>
          Alice concludes that something has to be done about that worker. Neither the analysis team nor factory
          management can fix the problems in his private life. On the other hand, a future accident is likely if
          the worker continues as before.
        </p>
        <p>
          Bob disgrees: "CAST tells us not to put blame on the worker. And we know that the 'failure' of the
          worker is caused by factors in his private life outside his control. "
        </p>
        <p>
          Suggest an approach to this problem.
        </p>
      </>,
      answer: <>
        <p>
          Alice and Bob are both right. CAST avoids blame because it is useless in understanding why an accident
          has happened. It considers "failure" of the worker to be a useless conclusion because it cannot be acted
          upon -- blaming or punishing the worker will not fix the problem. Instead, CAST suggests to learn as much
          as possible about the safety control structure and why it did not prevent the accident, and then to
          find improvements to prevent future accidents. These changes <i>may</i> involve the worker(s) that have
          been involved in the accident, but then it does so because it improves the safety control structure, not
          because the worker "caused" the accident.
        </p>
        <p>
          In this example, the problems in the worker's private life are out of reach. What is within reach, though,
          is that the worker operates dangerous machinery when being unfit to do so. The worker can be dismissed,
          or moved to different position in the company. These changes should be evaluated by asking whether they
          would have prevented the problem, <b>not</b> by whether they are an adequate punishment.
        </p>
        <p>
          The accident should also be used to gain further knowledge, such as:
          <ul>
            <li>Was it known that the worker was completely unfit for his job? If yes, why was he still assigned
            that job? If it was not known, why not? There is already a hint that his colleagues knew about it.</li>
            <li>The worker was in a state that makes mistakes more likely, but mistakes can happen in a
            perfectly fit state too. Can the potential for mistakes be reduced based on the knowledge gained
            from the accident?</li>
          </ul>
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "Problems with chain-of-events",
      problem: <>
        <p>
          What are the problems with the chain-of-events causality model?
        </p>
      </>,
      answer: <>
        <ul>
          <li>The actual causes are not a linear chain, that is, they form at least a "tree" of events, with multiple
          events as the cause for the next event.</li>
          <li>Although not in principle a limitation of the chain-of-events, in practice the chain stops at the first
          convenient scapegoat, when it is actually much longer.</li>
          <li>Systemic factors that have an effect on all stages of the "chain" are ignored.</li>
        </ul>
      </>,
    },
    {
      type: "exercise",
      label: "Systemic Factors",
      problem: <>
        <p>
          Give some examples for systemic factors that can play a role in accidents.
        </p>
      </>,
      answer: <>
        <ul>
          <li>time pressure</li>
          <li>financial pressure</li>
          <li>lack of training</li>
          <li>understaffing</li>
          <li>employee turnaround</li>
          <li>micromanagement</li>
          <li>different processes in documents and in practice</li>
          <li>perverse incentives</li>
        </ul>
      </>,
    },
    {
      type: "exercise",
      label: "Emergent Properties",
      problem: <>
        <p>
          Alice, Bob and Charlie are part of the planning team for a new machine and process in a factory. They discuss
          how systems thinking approaches the safety around that machine.
        </p>
        <p>
          Alice says: So, systems thinking tells us that we cannot assess the safety based on our machine and the
          processes alone, right? I mean, we considered the usual safety mechanisms, interlocks, training. We considered
          human error. But that's not it, right?
        </p>
        <p>
          Bob says: No, we also have to assess the interactions with other processes, other machines, other departments.
          For example, we have to consider how the workers will react when the sales guys put pressure on them to get
          more work finished in the same time.
        </p>
        <p>
          Charlie points out that even Bob's description falls short, and does not adequately consider emergent
          properties. What could be his answer?
        </p>
      </>,
      answer: <>
        <p>
          Emergent properties can only be understood by looking at the whole system. That includes the whole company,
          and probably more than that. Bob is right in that the interaction between "their" machine and processes and
          other parts of the company have to be considered, but he did not consider how these interactions are shaped
          by things that happen entirely "elsewhere".
        </p>
        <p>
          For example, pressure from the sales department was mentioned, but it was treated as a constant. They did not
          analyze why that department has the power to put pressure on workers, who is keeping that power in check,
          and whether those who keep it in check will continue to do so in the future: The safety around the new
          machine is affected when organizational changes shift more power towards the sales department and enable
          them to pressure the workers into unsafe operating practices.
        </p>
        <p>
          Unfortunately, this also means that many factors that affect safety are out of their control. The problem
          lies in their task: Alice, Bob and Charlie are tasked to assess the safety of the new machine and its
          processes. But safety is an emergent property of the system, that is, the company and its environment.
          Trying to assess safety this way -- even when looking at the interactions with other parts of the company --
          is trying to decompose the system in a way it cannot be decomposed.
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "The Bad Apple",
      problem: <>
        <p>
          The management of a CNC machining shop is unsatisfied with the production rates. Alice and Bob are
          investigating if production can be increased. They found that one of the workers gets significantly fewer
          workpieces finished, or processing steps finished, than other workers. Management knows about this:
          "Yeah, that's Cat. She has been with the company for a long time, so she got a free pass, but she's really
          slow. I think it's time we do something about her."
        </p>
        <p>
          Alice investigates futher while Bob has a day off. When Bob comes back, Alice has a surprise for him:
          "Cat isn't slow, nor is she bad at her job. In fact, she's incredibly good." - "Why is she not getting
          things done, then? Is she the only one doing things right, and all the others are sloppy?"
        </p>
        <p>
          No, that is not the reason. Try to guess why Cat is perceived as "slow".
        </p>
      </>,
      answer: <>
        <p>
          Cat is doing the most difficult work at the machining shop. After all, she has been working there for a long
          time and knows the machines and procedures very well. The assignment of work to workers is done in a
          self-organized manner, and Cat is regularly doing work that other workers don't even know how to do. This
          work takes longer, so she is percieved as slow. Punishing or even firing her would be incredibly harmful
          for the company.
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "Choosing a boundary for the CAST analysis",
      problem: <>
        <p>
          What happens if the boundary for the CAST analysis is set too narrow? What if it is too wide? Give examples.
        </p>
      </>,
      answer: <>
        <p>
          If the boundary is too narrow, then learning is restricted and useful conclusions are missed. Interesting
          things are then mentioned in the analysis but are "out of scope", or they might not be mentioned at all
          and create an "elephant in the room" situation. A likely consequence is that the affected workers are
          blamed as usual. Examples:
          <ul>
            <li>Company policies create a situation in which an accident is "waiting to happen", but the analysis
              boundary is set around the workers, processes and machines of a single department or factory 
              building.</li>
            <li>A company is trying to improve safety but is restricted by government regulations. The analysis
              will then focus on how the company can improve safety despite the regulations, but will evade the
              questions of whether the regulations should be changed.</li>
            <li>A company finds itself with a spoken expectation to improve safety, but financial incentives to
              <i>reduce</i> safety. The analysis can find possible improvements that are financially damaging
              to the company, but it will miss an opportunity to change incentives such that improved safety is
              beneficial to the company.
            </li>
          </ul>
        </p>
        <p>
          If the boundary is too wide, then effort gets wasted with things that did not contribute to the accident
          at all. It may also lead to conclusions that cannot be acted upon due to a lack of power: For example, an
          accident in a small company with a single injured worker is unlikely to have an influence on government
          regulations. 
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "Shell Moerdijk: Losses",
      problem: <>
        <p>
          Describe the losses in the Shell Moerdijk accident.
        </p>
      </>,
      answer: <>
        <p>
          The losses are what we ultimately want to prevent:
          <ul>
            <li>two workers were injured by the explosion</li>
            <li>equipment was destroyed or damaged by the explosion and the fire</li>
            <li>health of the public around the plant was affected due to toxic smoke</li>
          </ul>
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "Shell Moerdijk: Hazards",
      problem: <>
        <p>
          Describe the hazards in the Shell Moerdijk accident.
        </p>
      </>,
      answer: <>
        <p>
          The hazards are what directly lead to the losses. Depending on the environment and circumstances, the same
          hazards could lead to other, more or less severe, losses.
          <ul>
            <li>explosion</li>
            <li>fire</li>
            <li>release of toxic chemicals</li>
          </ul>
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "Shell Moerdijk: Hazards",
      problem: <>
        <p>
          In the Shell Moerdijk accident, there were the following hazards:
        </p>
        <ul>
          <li>explosion</li>
          <li>fire</li>
          <li>release of toxic chemicals</li>
        </ul>
        <p>
          Describe the safety constraints that are related to those hazards.
        </p>
      </>,
      answer: <>
        <p>
          Explosion and fire:
          <ul>
            <li>Runaway reactions must be prevented.</li>
            <li>Workers and the public must be warned when an explosion or fire occurs.</li>
            <li>Explosions and fires must be responded to.</li>
          </ul>
        </p>
        <p>
          Release of toxic chemicals:
          <ul>
            <li>Toxic chemicals must not be released.</li>
            <li>Workers and the public must be warned when a release occurs, and exposure reduced.</li>
            <li>Exposed individuals must be treated.</li>
          </ul>
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "Shell Moerdijk: Hazards (2)",
      problem: <>
        <p>
          In the Shell Moerdijk accident, suppose that the following system hazard gets identified:
        </p>
        <p>
          <i>
            The pressure relief devices failed to limit pressure in the reactor.
          </i>
        </p>
        <p>
          What is wrong here?
        </p>
      </>,
      answer: <>
        <p>
          Failure of the pressure relief devices is only one factor that contributed to the accident, not a 
          system hazard. While it should be analyzed as one of the possible causes of the accident, stating it as a 
          system hazard risks over-emphasizing it and missing other important aspects.
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "Events that lead to a loss",
      problem: <>
        <p>
          What is and isn't the purpose of listing the events that lead to a loss?
        </p>
      </>,
      answer: <>
        <p>
          The purpose is to generate initial questions for the causal analysis. The list of questions will be
          incomplete (more will be added later) and the events are only one possible way to start generating
          questions.
        </p>
        <p>
          The purpose is NOT to find causes -- that would be the purpose of the causal analysis that starts with the
          generated questions. In particular, the wording "events that lead to a loss" should be interpreted as
          "events that precede a loss", and not, "events that caused the loss".
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "Refining the constraints",
      problem: <>
        <p>
          Suppose an accident in which a worker climbs a wooden ladder. One of the rungs has rotted and breaks. The
          worker falls and gets injured.
        </p>
        <p>
          Identify the loss, the hazard, express the hazard as a (high-level) constraint and then refine it to more
          specific constraints.
        </p>
      </>,
      answer: <>
        <p>
          Loss: The worker fell from a ladder and got injured.
        </p>
        <p>
          Hazard: Workers using broken equipment.
        </p>
        <p>
          The hazard, worded as a high-level constraint: Workers must not get injured from using broken equipment.
        </p>
        <p>
          Refinement of this constraint:
          <ul>
            <li>Workers must not use broken equpiment.</li>
            <li>Broken equipment must be recognized as such.</li>
            <li>Broken equipment must be prevented from being used by workers and be scrapped or repaired.</li>
          </ul>
        </p>
      </>,
    },
      /* TODO continue */
  ],
};
