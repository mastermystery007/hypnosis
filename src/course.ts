export type QuizQuestion = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

export type Lesson = {
  id: number;
  title: string;
  summary: string;
  duration: string;
  level: string;
  objectives: string[];
  sections: { heading: string; body: string[] }[];
  procedure: string[];
  script: string[];
  drills: string[];
  troubleshooting: { problem: string; response: string }[];
  safety: string[];
  assignment: string;
  quiz: QuizQuestion[];
  media: string[];
};

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "What Hypnosis Is—and Is Not",
    summary: "Build a practical, evidence-aware model of hypnosis based on attention, expectation, imagination, absorption and voluntary responsiveness.",
    duration: "35–50 min",
    level: "Foundation",
    objectives: [
      "Explain hypnosis without using myths about sleep, control or weak-mindedness.",
      "Recognise the roles of expectation, imagination, context and cooperation.",
      "Describe variable responsiveness without labelling a participant a success or failure."
    ],
    sections: [
      {
        heading: "A useful working model",
        body: [
          "Hypnosis is best treated as a structured situation in which a person focuses attention, engages imagination and responds to suggestions. The experience can feel automatic even though the participant remains an active part of it.",
          "No single explanation covers every hypnotic response. Expectation, social context, absorption, motivation, imagination and learned response all contribute. A professional practitioner does not need to pretend that a mysterious force has taken control."
        ]
      },
      {
        heading: "The experience of automaticity",
        body: [
          "A suggestion becomes interesting when the response feels as though it is happening by itself. Magnetic fingers may move together even though the person understands that muscles are producing the movement. That altered sense of agency is more important than dramatic theatre.",
          "Do not demand automaticity. Invite the participant to notice small changes: warmth, heaviness, movement, a shift in breathing or a moment of mental quiet. Reinforcing genuine changes is more effective than insisting that something spectacular must occur."
        ]
      },
      {
        heading: "Myths to remove",
        body: [
          "Hypnosis is not ordinary sleep, unconsciousness, truth serum or guaranteed obedience. People can hear, think, question instructions and stop participating. They do not lose their moral agency merely because an induction has been used.",
          "Responsiveness varies by person, suggestion, setting and moment. A person may respond strongly to movement suggestions and weakly to amnesia. Treat this as information for adapting the session, not as a contest between performer and participant."
        ]
      }
    ],
    procedure: [
      "Ask the learner to recall a time of deep absorption in a film, game, book, prayer, music or repetitive journey.",
      "Identify the components: narrowed attention, reduced awareness of distractions, vivid imagination and altered sense of time.",
      "Compare those ordinary experiences with a guided suggestion exercise.",
      "Practise explaining hypnosis in plain language without the words control, unconscious or weak-minded.",
      "Invite questions and answer uncertainty directly rather than using theatrical intimidation."
    ],
    script: [
      "Hypnosis is a guided attention exercise. You remain able to hear me, think and stop at any time. I will give you suggestions to imagine and respond to, and you can simply notice what happens without forcing it.",
      "Some people notice movement, heaviness or vivid imagery quickly. Others notice subtler changes. Neither response says anything about intelligence or strength of mind."
    ],
    drills: [
      "Record three 60-second explanations: clinical-neutral, friendly and stage-performance styles.",
      "List ten hypnosis myths and write one accurate sentence correcting each.",
      "Practise answering: Will I lose control? Can I get stuck? What if nothing happens?"
    ],
    troubleshooting: [
      { problem: "The explanation sounds defensive or overly technical.", response: "Use one ordinary absorption example and one sentence about consent; remove unnecessary theory." },
      { problem: "The learner promises that everyone can be hypnotised.", response: "Replace guarantees with an invitation to explore responsiveness and adapt to the individual." },
      { problem: "The participant fears being unconscious.", response: "Explain that hearing and thinking normally continue and agree on a visible stop signal." }
    ],
    safety: [
      "Never claim hypnosis guarantees control, confession, recovered memory or medical improvement.",
      "Do not frame non-response as stubbornness, weakness or failure.",
      "Use this course for education, consensual demonstrations and self-practice—not treatment."
    ],
    assignment: "Deliver a 90-second pre-course explanation to a consenting adult, invite two questions, and rewrite your explanation based on what confused them.",
    quiz: [
      { question: "Which description is most accurate?", options: ["A form of unconscious sleep", "Guided attention and suggestion with active participation", "A method that removes moral control", "A reliable truth serum"], answer: 1, explanation: "Hypnosis involves attention, expectation, imagination and participation; it does not reliably remove agency." },
      { question: "A weak response should be treated as:", options: ["Proof of resistance", "A personal failure", "Feedback for adapting the exercise", "Evidence that hypnosis is fake"], answer: 2, explanation: "Responses vary across people and suggestions. Adaptation is more useful than judgement." }
    ],
    media: ["Introductory explainer video", "Animated myth-versus-fact cards", "Two-minute absorption exercise audio"]
  },
  {
    id: 2,
    title: "Consent, Screening and Safety",
    summary: "Create a repeatable safety process before any partner exercise, induction or performance demonstration.",
    duration: "40–55 min",
    level: "Foundation",
    objectives: ["Obtain informed and specific consent.", "Screen for obvious reasons not to proceed.", "Prepare posture, stop signals, cancellation and debriefing."],
    sections: [
      { heading: "Consent is a process", body: ["A participant should know the general nature of the exercise, what kinds of responses may be suggested, that participation is voluntary and that stopping will be respected immediately.", "Consent to a relaxation exercise is not automatic consent to amnesia, touch, filming or public performance. Ask again when the activity changes materially."] },
      { heading: "Simple screening", body: ["Do not proceed with a person who appears intoxicated, acutely distressed, unable to understand instructions, pressured by others or physically unsafe. Avoid exercises while driving, near stairs, in water or around hazards.", "This course does not train clinical assessment. When health, trauma, psychiatric symptoms or medical treatment are involved, stay within ordinary education and refer to qualified professionals."] },
      { heading: "A safe environment", body: ["Use a stable chair or clear standing space, remove obstacles and decide how you will end the exercise. Tell the participant that opening their eyes, speaking or changing position is acceptable.", "Every temporary suggestion must include removal. Finish by restoring ordinary movement, memory, sensation and alertness, then ask the participant to describe how they feel."] }
    ],
    procedure: ["Explain the activity and likely duration.", "Ask whether the person has concerns, feels comfortable and wishes to continue.", "Agree on a stop signal and permission to speak or open the eyes.", "Check posture, floor, furniture and surrounding hazards.", "State what will not be attempted.", "Afterward, remove suggestions, reorient, verify comfort and debrief."],
    script: ["Before we begin: this is voluntary, you can speak or stop at any point, and I will not use embarrassing or distressing suggestions. Is that acceptable?", "If you want to stop, say stop or raise this hand. I will end the exercise immediately—no explanation required."],
    drills: ["Role-play consent for relaxation, hand levitation and a playful performance effect as three separate conversations.", "Create a ten-item physical safety inspection.", "Practise ending a session early while remaining calm and respectful."],
    troubleshooting: [
      { problem: "A friend pressures someone to volunteer.", response: "Decline the volunteer and explain that clear personal willingness is required." },
      { problem: "The participant reveals a serious mental-health concern.", response: "Do not improvise treatment. End the demonstration politely and recommend appropriate professional support." },
      { problem: "The participant becomes uncomfortable mid-exercise.", response: "Stop suggestions, orient them to the room, restore normal movement and ask what support they want." }
    ],
    safety: ["Never combine hypnosis practice with alcohol or drugs.", "Never surprise-induce a person who has not already consented.", "Do not film or publish a session without separate permission."],
    assignment: "Create a one-page consent, environment and debrief checklist and use it in every later partner exercise.",
    quiz: [
      { question: "Consent to relaxation also permits name amnesia.", options: ["True", "False"], answer: 1, explanation: "Consent should be specific. Ask again before materially different phenomena." },
      { question: "The first response to discomfort is to:", options: ["Push through", "Distract the participant", "Stop and reorient", "Test a different phenomenon"], answer: 2, explanation: "Participant welfare overrides performance goals." }
    ],
    media: ["Consent walkthrough video", "Printable safety checklist", "Early-exit demonstration"]
  },
  {
    id: 3,
    title: "The Pre-Talk",
    summary: "Use explanation and expectation to make participation understandable, safe and responsive before an induction begins.",
    duration: "35–50 min",
    level: "Foundation",
    objectives: ["Remove common fears without overexplaining.", "Create a cooperative success frame.", "Adapt the pre-talk to informal, self-hypnosis and performance contexts."],
    sections: [
      { heading: "Why the pre-talk matters", body: ["The participant arrives with beliefs from films, stage shows and social media. Those beliefs affect attention and response. The pre-talk replaces unhelpful expectations with a simple task: follow the instructions, imagine the experience and notice what occurs.", "The goal is not to persuade someone that you possess power. It is to make the activity predictable enough to feel safe and interesting enough to deserve attention."] },
      { heading: "A four-part structure", body: ["First define hypnosis in one sentence. Second explain agency and the stop option. Third describe what the participant should do. Fourth create curiosity about automatic responses.", "Keep the wording conversational. A memorised lecture delivered mechanically can increase anxiety. Learn the structure and speak naturally."] },
      { heading: "Success without pressure", body: ["Avoid telling participants that only intelligent or imaginative people respond. Such statements create social pressure and shame. Instead say that responses vary and you will begin with simple exercises.", "Use observable feedback: a finger movement, slower breathing or focused gaze. Reinforce what genuinely happens rather than pretending a response exists."] }
    ],
    procedure: ["Ask what the participant currently believes about hypnosis.", "Correct only the misconceptions relevant to safety and participation.", "Describe their role: listen, imagine, allow and report.", "Explain that small responses are useful.", "Confirm consent and begin promptly before the explanation becomes a lecture."],
    script: ["You do not need to force anything. Follow the instructions, imagine them as clearly as you comfortably can, and notice any changes that begin on their own.", "You will still hear me and can stop at any point. We will start with a small movement exercise, so there is nothing you have to prove."],
    drills: ["Deliver a 45-second, 90-second and three-minute version.", "Record answers to five common objections without becoming argumentative.", "Rewrite the pre-talk for an analytical participant who asks how it works."],
    troubleshooting: [
      { problem: "The participant keeps asking whether it is real.", response: "Shift from debate to a brief consensual exercise and let them evaluate their own experience." },
      { problem: "The pre-talk sounds like a sales pitch.", response: "Remove claims about power and replace them with clear instructions and uncertainty." },
      { problem: "The learner talks for ten minutes.", response: "Use the four-part structure and begin within two minutes unless questions require longer." }
    ],
    safety: ["Never use fear, humiliation or false medical authority to gain compliance.", "Do not imply that consent is irrevocable once an induction starts.", "Answer uncertainty honestly."],
    assignment: "Record and transcribe your 90-second pre-talk. Delete every sentence that does not improve safety, understanding or participation.",
    quiz: [
      { question: "The participant’s main task is to:", options: ["Obey without thinking", "Pretend to be asleep", "Follow, imagine and notice", "Prove they are suggestible"], answer: 2, explanation: "Clear participation instructions are more useful than pressure or mythology." },
      { question: "A strong pre-talk should primarily establish:", options: ["Performer dominance", "Cooperation and accurate expectations", "Fear of failure", "Clinical authority"], answer: 1, explanation: "Understanding and cooperation support safe responsiveness." }
    ],
    media: ["Calm pre-talk audio", "Performance pre-talk video", "Annotated transcript"]
  },
  {
    id: 4,
    title: "Suggestibility and Ideomotor Exercises",
    summary: "Learn magnetic fingers, magnetic hands, light-and-heavy hands, pendulum movement and early hand levitation.",
    duration: "50–70 min",
    level: "Beginner practical",
    objectives: ["Deliver clear sensory suggestions.", "Notice and reinforce small responses.", "Use exercises as exploration rather than pass/fail tests."],
    sections: [
      { heading: "Suggestion design", body: ["Effective suggestions describe an experience in concrete sensory terms: pressure between fingertips, warmth in the palms, a balloon lifting one wrist or a book pressing down on the other.", "Use a sequence: direct attention, describe an image, predict a small change, notice evidence and reinforce it. Repetition should deepen imagery rather than repeat identical words mechanically."] },
      { heading: "Ideomotor response", body: ["Ideas and expectations can influence small muscular movements without a deliberate decision to move. Pendulums, finger attraction and hand drift demonstrate this well.", "Do not claim that every movement reveals hidden truth. The movement reflects expectation, attention and subtle muscle activity, and can be used theatrically with accurate framing."] },
      { heading: "From exercise to induction", body: ["A successful movement provides a bridge: ask the participant to focus on the automatic quality, close the eyes if comfortable and allow the same responsiveness to spread through breathing and posture.", "If movement is minimal, continue without embarrassment. Ask what they noticed, simplify the imagery or choose a different modality."] }
    ],
    procedure: ["Explain that the exercise is exploratory.", "Set a stable position and clear physical target.", "Focus attention on one sensory image.", "Allow 20–45 seconds before judging the response.", "Reinforce actual changes precisely.", "Cancel the exercise and restore ordinary movement.", "Ask the participant what they experienced."],
    script: ["Bring your index fingers close, leaving a small gap. Imagine a gentle magnetic pull between them. You may notice the gap narrowing, even slightly, and the closer they move, the stronger that pull can feel.", "In your left hand imagine a heavy book; in the right, a cluster of balloons. Notice any difference in height, weight, temperature or effort. There is no correct amount—just observe."],
    drills: ["Practise each exercise from memory in under two minutes.", "Create visual, auditory and body-sensation versions of hand levitation.", "Track response latency and participant comments without ranking people."],
    troubleshooting: [
      { problem: "The fingers do not visibly move.", response: "Ask about pressure or sensation, reduce the starting gap and avoid declaring failure." },
      { problem: "The participant deliberately moves quickly.", response: "Accept the movement, then invite them to slow down and notice the transition from deliberate to easier movement." },
      { problem: "The performer repeats stronger and stronger.", response: "Add new sensory detail or pause; intensity words alone rarely improve imagery." }
    ],
    safety: ["Avoid prolonged arm positions that cause strain.", "Do not label an exercise a test of intelligence or compliance.", "Restore movement and comfort after every inhibition or heaviness suggestion."],
    assignment: "Run magnetic fingers and light/heavy hands with three consenting adults. Record exact wording, observed response and participant description.",
    quiz: [
      { question: "Ideomotor movement should be presented as:", options: ["Proof of hidden truth", "A response influenced by ideas and expectation", "Evidence of possession", "A diagnostic test"], answer: 1, explanation: "Ideomotor response is real movement influenced by attention and expectation, not a reliable truth detector." },
      { question: "When a response is small, the best action is:", options: ["Call it failure", "Increase pressure", "Notice genuine changes and adapt", "Accuse resistance"], answer: 2, explanation: "Accurate reinforcement and adaptation preserve safety and rapport." }
    ],
    media: ["Five exercise demonstrations", "Pendulum calibration animation", "Printable response log"]
  },
  {
    id: 5,
    title: "The Anatomy of an Induction",
    summary: "Understand the reusable structure behind fixation, breathing, hand-focus, imagery and conversational inductions.",
    duration: "55–75 min",
    level: "Beginner practical",
    objectives: ["Identify six functional stages of an induction.", "Write an original induction instead of memorising blindly.", "Adapt pace and modality to the participant."],
    sections: [
      { heading: "Six functions", body: ["A practical induction gains attention, narrows focus, establishes a response, labels the experience, extends absorption and transitions into the first suggestion.", "Different inductions perform these functions through different activities. Eye fixation uses visual fatigue and focused attention; breathing uses rhythm and internal sensation; hand focus uses movement and anticipation."] },
      { heading: "Induction is not a magic switch", body: ["The word sleep can be a theatrical cue, but it does not cause literal sleep. The participant’s understanding, expectation and ongoing engagement matter more than the dramatic moment.", "Judge an induction by whether it creates a useful working context, not by whether the head drops or the person appears motionless."] },
      { heading: "Adaptation", body: ["An analytical participant may prefer observable tasks and permission to evaluate. An imaginative participant may enjoy metaphor and imagery. Someone uncomfortable closing their eyes can work with an open-eye focus.", "Use the participant’s words. If they describe lightness as floating, continue with floating; do not replace it with unrelated imagery merely because it appears in a script."] }
    ],
    procedure: ["Choose one attentional target.", "Give a clear physical or mental task.", "Observe and pace what is actually occurring.", "Invite a small response such as eye comfort, slower breathing or hand movement.", "Name the state without making grand claims.", "Deepen involvement briefly.", "Test with an easy agreed suggestion."],
    script: ["Keep your attention on that point while also noticing your breathing. You do not need to stare rigidly; simply let the rest of the room become less important for a moment.", "As your eyes become comfortable, you may close them when you choose, carrying that focused attention inward. Notice one small change, and allow it to continue."],
    drills: ["Mark the six functions in three published-style induction scripts.", "Write a five-minute eye-focus induction and a five-minute hand-focus induction.", "Practise replacing scripted wording with participant-generated language."],
    troubleshooting: [
      { problem: "The participant opens their eyes.", response: "Treat it as normal, ask what they noticed and continue with open-eye focus or invite closure again." },
      { problem: "The performer rushes after saying sleep.", response: "Continue directing attention and response; the cue is a transition, not the end of the induction." },
      { problem: "The script feels too long.", response: "Remove repeated relaxation language and preserve the six functions." }
    ],
    safety: ["Do not physically force eye closure or head movement.", "Keep seated participants supported and standing participants balanced.", "Avoid language suggesting they cannot stop or return."],
    assignment: "Write, rehearse and record a five-minute induction. Annotate where each of the six functions occurs.",
    quiz: [
      { question: "Which is not required for an induction?", options: ["Focused attention", "Ongoing participation", "Literal sleep", "A transition into suggestion"], answer: 2, explanation: "Literal sleep is not required; hypnosis can occur with eyes open and active awareness." },
      { question: "The best adaptation is based on:", options: ["A fixed script", "The performer’s preferred metaphor", "The participant’s responses and language", "Maximum speed"], answer: 2, explanation: "Responsive adaptation improves clarity and comfort." }
    ],
    media: ["Eye-focus demonstration", "Hand-focus demonstration", "Six-stage induction diagram"]
  },
  {
    id: 6,
    title: "Rapid and Pattern-Interrupt Inductions",
    summary: "Understand rapid transitions and pattern interruption while preserving explicit consent, balance and participant dignity.",
    duration: "45–65 min",
    level: "Intermediate",
    objectives: ["Explain what a rapid induction does and does not do.", "Rehearse physical safety before live practice.", "Recover naturally when the dramatic response does not occur."],
    sections: [
      { heading: "What interruption contributes", body: ["A familiar action can be interrupted, briefly increasing uncertainty and attention. Immediate, clear instructions then redirect that attention into an agreed hypnotic task.", "The interruption does not remove agency. It works within prior expectation, consent and cooperation. Without that context it is merely confusing or intrusive."] },
      { heading: "Safety before drama", body: ["Rapid inductions must be pre-framed. The participant should know that a quick physical cue may occur and agree to it. Use stable posture, minimal force and no neck twisting, pulling or fall risk.", "Practise hand positions and release paths with a peer while fully alert. The performer must be able to stop the motion instantly and support balance."] },
      { heading: "Recovery is part of the method", body: ["If the participant laughs, remains upright or asks what happened, continue conversationally: acknowledge the surprise, direct breathing and attention, and transition into a slower induction.", "Never blame the participant or repeat increasingly aggressive motions. A graceful recovery protects both people and often produces a better experience."] }
    ],
    procedure: ["Obtain explicit consent for a rapid transition.", "Explain and rehearse the physical position.", "Check stable footing or use a chair.", "Begin a familiar action and interrupt gently.", "Give one short immediate instruction.", "Continue with paced suggestions rather than waiting for a dramatic pose.", "If uncertain, abandon the rapid method and use a calm induction."],
    script: ["In a moment I will interrupt this hand movement and say relax. Nothing will be forced; simply let that word become a cue to close your eyes and focus inward. Is that acceptable?", "Good—focus here… and relax now. Eyes comfortably closed, breathing steady, letting the surprise become focused attention."],
    drills: ["Practise the full sequence without surprise at half speed.", "Role-play laughter, no eye closure and a participant stepping back.", "Write three seamless transitions into a standard breathing induction."],
    troubleshooting: [
      { problem: "The participant stiffens or pulls away.", response: "Release immediately, confirm comfort and switch to a non-contact method." },
      { problem: "The performer relies on shouting.", response: "Use concise direction and timing; volume is not hypnosis." },
      { problem: "The dramatic drop does not occur.", response: "Continue with ordinary focused-attention instructions without commenting on failure." }
    ],
    safety: ["Never perform a surprise induction without explicit pre-consent.", "Never manipulate the neck, cause a fall or use pain.", "Do not practise rapid inductions with intoxicated, distressed or medically vulnerable people."],
    assignment: "Record a slow-motion rehearsal showing consent, hand position, balance protection, instruction and three recovery paths before any live attempt.",
    quiz: [
      { question: "A pattern interrupt primarily creates:", options: ["Permanent control", "A brief moment of redirected attention", "Unconsciousness", "Amnesia"], answer: 1, explanation: "The interruption can create focused uncertainty; subsequent suggestion and context do the rest." },
      { question: "When the participant pulls away, you should:", options: ["Hold more firmly", "Repeat quickly", "Release and check comfort", "Challenge them"], answer: 2, explanation: "Physical autonomy and safety come first." }
    ],
    media: ["Slow-motion safety breakdown", "Consent-and-rehearsal video", "Recovery-path practice clip"]
  },
  {
    id: 7,
    title: "Deepeners and Fractionation",
    summary: "Increase engagement through counting, imagery, hand lowering, repeated eye opening and participant-led sensory focus.",
    duration: "40–60 min",
    level: "Intermediate",
    objectives: ["Use deepening as increased engagement rather than a mystical depth scale.", "Apply fractionation briefly and purposefully.", "Match deepeners to the participant’s preferred experience."],
    sections: [
      { heading: "What deepening means", body: ["Deepening is any process that increases concentration, absorption or responsiveness. It is not proof that the participant has entered a measurable underground level.", "A useful deepener also gives the participant a task: count down, imagine descending, feel a hand lowering or notice growing comfort."] },
      { heading: "Fractionation", body: ["Fractionation alternates partial reorientation and renewed focus, commonly through opening and closing the eyes. The contrast can make the next inward-focus phase feel easier and more distinct.", "Use two or three cycles, not endless repetition. Explain that the participant remains in control of eye opening and comfort."] },
      { heading: "Participant-led imagery", body: ["Ask what place, movement or sensation represents settling for them. Their own staircase, lift, shoreline or darkened theatre may be more vivid than a stock script.", "Avoid imagery that could be uncomfortable, such as enclosed spaces or falling, unless the participant specifically chooses it."] }
    ],
    procedure: ["Observe what is already working.", "Select one compatible deepener.", "Give a clear end point such as five counts or the hand reaching the lap.", "Pace genuine changes in breathing or posture.", "Invite increased focus rather than demanding depth.", "Check comfort before proceeding to stronger phenomena."],
    script: ["As that hand lowers at its own pace, let each small movement become a reminder to focus more completely on the next suggestion.", "Open your eyes briefly, take in the room, and when you close them again notice how quickly you can return to that focused state—only as far as comfortable."],
    drills: ["Write one counting, one movement and one participant-generated imagery deepener.", "Practise two cycles of fractionation without rushing.", "Remove every vague phrase from a deepener and replace it with an observable task."],
    troubleshooting: [
      { problem: "The staircase image creates anxiety.", response: "Stop the imagery and ask the participant to choose a neutral settling experience." },
      { problem: "Counting becomes monotonous.", response: "Attach each count to a specific response or shorten the sequence." },
      { problem: "The performer keeps deepening without purpose.", response: "Move to an agreed phenomenon once attention and responsiveness are sufficient." }
    ],
    safety: ["Never use imagery that the participant finds frightening.", "Do not imply that deeper means less able to stop.", "Maintain physical support and normal breathing."],
    assignment: "Create and record three four-minute deepeners: movement-based, sensory and participant-generated.",
    quiz: [
      { question: "Deepening is best understood as:", options: ["Literal descent", "Loss of control", "Increasing engagement and responsiveness", "Falling asleep"], answer: 2, explanation: "Deepening is a functional increase in absorption or engagement." },
      { question: "Fractionation usually alternates:", options: ["Pain and relief", "Eye opening/reorientation and renewed focus", "Truth and lies", "Sleep and waking"], answer: 1, explanation: "The contrast between partial reorientation and renewed focus can strengthen the subjective experience." }
    ],
    media: ["Three-minute counting audio", "Hand-lowering video", "Fractionation demonstration"]
  },
  {
    id: 8,
    title: "The Phenomena Ladder",
    summary: "Progress from simple movement responses toward catalepsy, inhibition, sensation and temporary amnesia without turning the session into a test.",
    duration: "50–70 min",
    level: "Intermediate",
    objectives: ["Order suggestions from lower to higher complexity.", "Use each response to select the next exercise.", "Simplify, change modality or stop while preserving dignity."],
    sections: [
      { heading: "Build success progressively", body: ["Begin with experiences that require little conflict: relaxation, finger movement, hand attraction or heaviness. Then move toward catalepsy, temporary inhibition, sensory alteration and only later amnesia or vivid hallucination.", "The ladder is not universal. A participant may find imagery easier than motor inhibition. Use the observed response rather than treating the sequence as a rigid hierarchy."] },
      { heading: "Testing without challenge", body: ["A test should invite curiosity: try to bend the arm and notice what happens. Avoid confrontational language such as prove you cannot or try as hard as possible.", "Stop a test as soon as the effect is clear. Prolonged struggle adds strain and can turn cooperation into embarrassment."] },
      { heading: "Preserve the participant’s story", body: ["When a suggestion is partial, describe what worked accurately. If the hand felt heavy but still moved, acknowledge the heaviness and use it as a bridge.", "Never announce failure to an audience. Thank the volunteer, adapt the effect or end on a successful experience."] }
    ],
    procedure: ["Choose an easy opening response.", "Observe movement, imagery and comfort.", "Select the next suggestion in the same successful modality.", "Test gently and briefly.", "Remove each phenomenon before proceeding unless continuity requires otherwise.", "Stop escalation when comfort or responsiveness decreases.", "End with a successful, benign experience."],
    script: ["You may find the arm can still move, but only with more effort than before. Test gently for one moment, notice the difference, and now let it return completely to normal.", "Good—that movement tells us imagery is working well for you, so we will use the same skill in the next exercise."],
    drills: ["Design three ladders: seated relaxation, informal demonstration and stage-safe demonstration.", "Write a respectful line for partial response at each stage.", "Practise cancelling every phenomenon before moving on."],
    troubleshooting: [
      { problem: "A later phenomenon fails after early success.", response: "Return to the earlier successful modality or finish there; do not push upward automatically." },
      { problem: "The participant strains during a test.", response: "End the test immediately and restore normal movement." },
      { problem: "The performer labels the person resistant.", response: "Describe the specific response and adapt without judging character." }
    ],
    safety: ["Avoid painful, prolonged or weight-bearing tests.", "Keep inhibition suggestions brief and fully reversible.", "Do not escalate for the sake of impressing an audience."],
    assignment: "Design a five-step, ten-minute ladder with exact entry criteria, cancellation language and recovery options for every stage.",
    quiz: [
      { question: "The ladder should be:", options: ["Rigid for everyone", "Adapted to observed responses", "Skipped to amnesia", "Used as a competition"], answer: 1, explanation: "Responsiveness is individual and modality-specific." },
      { question: "A test should continue until:", options: ["The participant is exhausted", "The audience laughs", "The effect is clear or discomfort begins", "The performer wins"], answer: 2, explanation: "Tests should be brief and non-confrontational." }
    ],
    media: ["Interactive ladder planner", "Partial-response case studies", "Cancellation checklist"]
  },
  {
    id: 9,
    title: "Catalepsy, Sticking and Motor Suggestions",
    summary: "Create temporary rigidity, heaviness and harmless inhibition with clear installation, gentle testing and complete cancellation.",
    duration: "55–75 min",
    level: "Intermediate",
    objectives: ["Structure a motor suggestion from imagery to test.", "Use safe body positions and minimal effort.", "Restore ordinary movement explicitly."],
    sections: [
      { heading: "Motor suggestion structure", body: ["Direct attention to a body part, create a compatible image, describe developing sensation, reinforce genuine signs and invite a gentle test.", "Examples include a rigid forearm, fingers comfortably locked or a palm feeling attached to a table. Keep the duration short."] },
      { heading: "Testing correctly", body: ["Use language that permits a small attempt. The participant should never be asked to strain. The moment resistance or altered effort is apparent, end the test and reinforce the experience.", "A strong effect does not require theatrical pain. Avoid human bridges, weight placed on the body, falls and any action that could injure joints or muscles."] },
      { heading: "Cancellation", body: ["Cancellation should be specific: the hand releases, fingers separate, arm bends normally and all comfort returns. Ask the participant to move and confirm verbally.", "Do not rely on a general wake-up alone. Remove each motor instruction directly before final reorientation."] }
    ],
    procedure: ["Obtain consent for the specific effect.", "Position the limb comfortably.", "Use an image such as a light splint, magnet or temporary adhesive.", "Notice genuine tension or stillness.", "Invite a gentle two-second test.", "Cancel immediately.", "Verify full range of motion and comfort."],
    script: ["Imagine a comfortable support around that forearm, holding it in this position. Test it gently for just a moment—not with force—and notice any unusual steadiness.", "Now the support dissolves completely. The arm bends freely, all muscles loose and comfortable. Move it normally and confirm that it feels ordinary."],
    drills: ["Rehearse hand-stick, finger-lock and arm-catalepsy wording.", "Practise a two-second test timer.", "Create a cancellation checklist for each body area."],
    troubleshooting: [
      { problem: "The participant strains hard.", response: "Stop the test, cancel the suggestion and remind them that effort is unnecessary." },
      { problem: "Movement remains slightly stiff afterward.", response: "Repeat explicit cancellation, invite stretching and verify comfort before ending." },
      { problem: "The effect is partial.", response: "Acknowledge heaviness or changed effort, cancel and move to another safe response." }
    ],
    safety: ["Never use painful positions, bridges, falls or added weight.", "Avoid existing injuries and ask about comfort.", "Always verify ordinary movement afterward."],
    assignment: "Perform one seated hand-stick routine with consent, record the full cancellation and collect the participant’s description afterward.",
    quiz: [
      { question: "A motor test should involve:", options: ["Maximum effort", "A brief gentle attempt", "Pain", "Public pressure"], answer: 1, explanation: "Brief gentle testing is enough to demonstrate altered effort without strain." },
      { question: "After cancellation you should:", options: ["Assume it worked", "Immediately leave", "Verify normal movement and comfort", "Install another effect"], answer: 2, explanation: "Specific verification is part of responsible practice." }
    ],
    media: ["Hand-stick demonstration", "Arm-catalepsy safety video", "Motor cancellation audio"]
  },
  {
    id: 10,
    title: "Temporary Amnesia and Name Forgetting",
    summary: "Structure reversible forgetting demonstrations using neutral information, clear metaphors, multiple outs and explicit restoration.",
    duration: "55–75 min",
    level: "Advanced performance",
    objectives: ["Begin with neutral, low-stakes information.", "Use metaphors that frame temporary access rather than permanent loss.", "Restore recall and orientation fully."],
    sections: [
      { heading: "What to forget", body: ["Begin with a number in a counting sequence, a neutral word or an invented label. Do not target important memories, trauma, identity details or private information.", "Name forgetting can be theatrical but should only be attempted after clear consent and prior responsiveness. It must be short, respectful and immediately reversible."] },
      { heading: "Metaphor and expectation", body: ["Useful metaphors include a word temporarily hidden behind a curtain, a blank space on a page or a label placed in a closed drawer. The language should imply temporary inaccessibility, not damage.", "Avoid repeatedly commanding forget. Build the experience through expectation, competing attention and a clear test."] },
      { heading: "Outs and restoration", body: ["If recall remains normal, reframe the exercise as delay or tip-of-the-tongue sensation, then move on. Never argue that the participant secretly forgot.", "Restore explicitly: the word returns now, memory is clear, normal access is complete. Ask the participant to say the item and confirm comfort."] }
    ],
    procedure: ["Confirm consent for temporary forgetting.", "Choose neutral information.", "Establish a successful earlier response.", "Introduce a temporary-access metaphor.", "Test once without pressure.", "Use a graceful out if recall is immediate.", "Restore the information explicitly and verify."],
    script: ["For a few seconds only, imagine the number seven printed on a card sliding face down. You know a card belongs there, but the label is temporarily unavailable.", "And now turn that card face up. Seven returns clearly, every number is in place, memory functioning normally. Count through and confirm."],
    drills: ["Write number-amnesia, neutral-word and name-forgetting scripts with separate consent language.", "Practise three outs for immediate recall.", "Rehearse restoration twice as often as installation."],
    troubleshooting: [
      { problem: "The participant remembers immediately.", response: "Acknowledge it lightly, restore explicitly anyway and move to a different phenomenon." },
      { problem: "The participant appears distressed.", response: "End immediately, restore all memory and orientation, and debrief calmly." },
      { problem: "The audience laughs at the volunteer.", response: "Stop the routine, protect the participant and redirect applause toward their imagination and participation." }
    ],
    safety: ["Never target traumatic, identity-critical or emotionally important memories.", "Never imply permanent memory damage.", "Do not use amnesia to conceal actions or bypass consent."],
    assignment: "Write and role-play a number-amnesia routine containing consent, installation, one test, two outs, restoration and verification.",
    quiz: [
      { question: "The safest first target is:", options: ["A traumatic memory", "A neutral number", "A secret password", "A family member"], answer: 1, explanation: "Neutral information minimises emotional risk." },
      { question: "Restoration should be:", options: ["Implied", "Delayed", "Explicit and verified", "Optional"], answer: 2, explanation: "Temporary memory suggestions require clear removal and confirmation." }
    ],
    media: ["Number-amnesia demonstration", "Restoration comparison video", "Outs practice cards"]
  },
  {
    id: 11,
    title: "Sensory Change and Imaginative Hallucination",
    summary: "Guide harmless changes in temperature, weight, taste, sound and imagery while avoiding distressing content.",
    duration: "50–70 min",
    level: "Advanced performance",
    objectives: ["Build believable sensory contrasts.", "Use participant-generated imagery.", "Cancel sensory suggestions and verify ordinary perception."],
    sections: [
      { heading: "Start with contrast", body: ["Sensory suggestions become easier when the contrast is familiar: one hand warmer than the other, a light object feeling heavier, or water imagined as slightly sweeter or more refreshing.", "Do not use unknown substances, allergens or deceptive ingestion. Many sensory effects can be created with imagination alone."] },
      { heading: "Vivid but safe imagery", body: ["Ask the participant to select pleasant, neutral sensations. Their remembered sun warmth, cool breeze or favourite harmless scent is usually more vivid than a generic description.", "Avoid frightening sights, voices, insects, suffocation imagery or anything tied to trauma. Advanced hallucination is not necessary for a strong demonstration."] },
      { heading: "Reality orientation", body: ["After the effect, state that perception returns to normal and the imagined quality fades completely. Invite ordinary comparison and ask whether anything remains unusual.", "Treat vivid reports respectfully without claiming supernatural or diagnostic meaning."] }
    ],
    procedure: ["Choose a benign sensory channel.", "Establish a real baseline comparison.", "Invite a familiar memory or image.", "Layer two or three sensory details.", "Test through description, not confrontation.", "Cancel the suggestion.", "Verify normal perception."],
    script: ["Remember the feeling of sunlight on one hand—comfortable warmth spreading across the palm. Compare it with the other hand and notice any difference, even a subtle one.", "Now let both hands return to the same ordinary temperature. The imagined warmth fades, normal sensation clear and balanced."],
    drills: ["Write warmth/coolness, object-weight and imagined-sound exercises.", "Practise asking neutral descriptive questions without leading the answer.", "Create a list of prohibited distressing themes."],
    troubleshooting: [
      { problem: "No sensory difference is reported.", response: "Accept the report and shift to imagery or movement rather than insisting." },
      { problem: "The image becomes unpleasant.", response: "Stop it, orient to the room and replace it only if the participant requests a neutral image." },
      { problem: "Sensation lingers after cancellation.", response: "Repeat cancellation, encourage normal movement and sensory comparison, and end the session." }
    ],
    safety: ["Do not introduce allergens, unsafe tastes or unknown substances.", "Avoid frightening or trauma-related hallucinations.", "Verify ordinary perception before the participant leaves."],
    assignment: "Guide one warmth/coolness exercise and one object-weight exercise; document exact cancellation and participant feedback.",
    quiz: [
      { question: "The strongest safe starting point is usually:", options: ["A frightening hallucination", "A familiar benign sensory contrast", "A diagnostic claim", "An unknown substance"], answer: 1, explanation: "Familiar contrasts are easier and safer." },
      { question: "After a sensory effect you should:", options: ["Leave it active", "Claim paranormal ability", "Restore and verify ordinary perception", "Increase intensity"], answer: 2, explanation: "Responsible practice includes specific cancellation and verification." }
    ],
    media: ["Warmth/coolness audio", "Object-weight demonstration", "Sensory safety checklist"]
  },
  {
    id: 12,
    title: "Post-Hypnotic Suggestions",
    summary: "Install only benign, agreed, time-limited cues with precise definitions, testing and complete removal.",
    duration: "45–65 min",
    level: "Advanced performance",
    objectives: ["Define cue, response, duration and cancellation.", "Use participant-selected beneficial or playful responses.", "Remove and verify every cue."],
    sections: [
      { heading: "Four required elements", body: ["A responsible post-hypnotic suggestion defines the exact cue, the exact response, how long it may operate and how it will be removed.", "Vague instructions such as later you will obey me are unacceptable. The response must remain harmless, specific and within prior consent."] },
      { heading: "Appropriate uses", body: ["Examples include taking a comfortable breath when hearing an agreed word, recalling a practice intention, smiling at a harmless cue or briefly performing a playful gesture in a controlled demonstration.", "The participant should be able to decline the response. Do not use sexual, financial, humiliating, covert or relationship-manipulating suggestions."] },
      { heading: "Testing and removal", body: ["Test once or twice in the agreed environment. Then state clearly that the cue has no further effect and all ordinary choices remain normal.", "Ask the participant to hear or imagine the cue after removal and confirm that no compelled response remains."] }
    ],
    procedure: ["Agree on the purpose and exact response.", "Choose a distinctive cue unlikely to occur accidentally.", "Set a short duration and context.", "Install using clear, simple language.", "Test once.", "Remove explicitly.", "Retest and verify removal."],
    script: ["For this demonstration only, when I tap the table once, you may notice a comfortable smile appearing for a moment. You remain free to respond or not.", "That demonstration is now finished. The table tap has no special meaning, no automatic response remains, and all choices are completely ordinary."],
    drills: ["Draft one breathing cue, one rehearsal cue and one playful cue.", "Audit each for accidental activation and ambiguity.", "Practise removal and verification wording."],
    troubleshooting: [
      { problem: "The cue could occur accidentally later.", response: "Choose a more distinctive context-bound cue and shorten the duration." },
      { problem: "The participant dislikes the response after installation.", response: "Remove it immediately and verify normal choice." },
      { problem: "A cue appears to persist.", response: "Repeat specific cancellation, orient fully and do not add further suggestions." }
    ],
    safety: ["Never install covert, sexual, financial, coercive or humiliating suggestions.", "Do not use post-hypnotic cues to bypass future consent.", "Always remove and retest."],
    assignment: "Write a complete benign cue protocol with consent, installation, test, removal and post-removal test.",
    quiz: [
      { question: "A complete cue protocol defines:", options: ["Only the trigger", "Cue, response, duration and cancellation", "Performer authority", "Permanent obedience"], answer: 1, explanation: "Precision reduces ambiguity and risk." },
      { question: "Which is appropriate?", options: ["Covert financial influence", "A participant-selected breathing reminder", "Sexual compliance", "A humiliating public action"], answer: 1, explanation: "Benign participant-selected cues are appropriate; coercive uses are not." }
    ],
    media: ["Installation/removal demonstration", "Cue design worksheet", "Ethical red-flag cards"]
  },
  {
    id: 13,
    title: "Conversational Hypnosis and Metaphor",
    summary: "Use pacing, attention direction, metaphor and naturalistic suggestion without exaggerated claims of covert control.",
    duration: "50–70 min",
    level: "Intermediate",
    objectives: ["Pace observable experience before leading.", "Use permissive language and participant vocabulary.", "Distinguish guided suggestion from covert manipulation."],
    sections: [
      { heading: "Pacing and leading", body: ["Pacing means accurately describing what is already true: sitting in a chair, hearing sounds, noticing breathing. Leading then invites a new experience: focusing more closely or imagining a sensation.", "Accuracy matters. Pretending to know hidden internal states damages trust. Use statements the participant can verify."] },
      { heading: "Permissive language", body: ["Words such as may, can, perhaps and notice allow variability while still directing attention. Permissive does not mean vague; the participant still needs a clear task.", "Offer genuine choices: focus on breath or hand sensation, eyes open or closed. Do not disguise a command as a false choice when refusal is not respected."] },
      { heading: "Metaphor", body: ["Metaphor can organise imagination: thoughts settling like snow, attention narrowing like a camera lens or practice becoming a familiar path.", "Use metaphors for benign experience and rehearsal, not to implant hidden motives or claim psychological treatment."] }
    ],
    procedure: ["Observe and pace three external facts.", "Invite one internal observation.", "Offer a genuine choice of focus.", "Use the participant’s chosen words.", "Introduce a short metaphor.", "Invite feedback and reorient normally."],
    script: ["You are sitting here, hearing my voice and the sounds around us, and you can notice whichever sensation is easiest—the breath or the contact of your hands. As attention settles there, perhaps everything else can become less important for a minute.", "Some people describe focus like a camera lens. You can allow that lens to frame just one useful rehearsal and then widen again whenever you choose."],
    drills: ["Write ten verifiable pacing statements.", "Convert five controlling statements into genuine invitations.", "Guide a two-minute exercise without using sleep, trance or deeper."],
    troubleshooting: [
      { problem: "The language becomes vague poetry.", response: "Return to a concrete sensory task and observable pacing." },
      { problem: "The performer claims covert control.", response: "Reframe the skill as transparent attention guidance requiring cooperation." },
      { problem: "The participant rejects a metaphor.", response: "Ask for their own comparison and adopt it." }
    ],
    safety: ["Do not present conversation techniques as a way to bypass consent.", "Avoid therapeutic claims unless appropriately qualified.", "Respect refusal and ordinary disagreement."],
    assignment: "Record a three-minute naturalistic focus exercise using pacing, a genuine choice and a participant-generated metaphor.",
    quiz: [
      { question: "Pacing should describe:", options: ["Hidden motives", "Observable or verifiable experience", "Guaranteed future behaviour", "A diagnosis"], answer: 1, explanation: "Accurate pacing builds trust and attention." },
      { question: "Permissive language is effective when it is:", options: ["Vague and meaningless", "Clear while allowing variation", "Covertly coercive", "Based on false choices"], answer: 1, explanation: "A clear task can still respect autonomy and variable response." }
    ],
    media: ["Annotated conversational transcript", "Pacing-and-leading audio", "Metaphor worksheet"]
  },
  {
    id: 14,
    title: "Self-Hypnosis",
    summary: "Create a repeatable personal practice for relaxation, mental rehearsal, study preparation and performance confidence.",
    duration: "55–75 min",
    level: "All levels",
    objectives: ["Choose one realistic behavioural objective.", "Build a brief induction, rehearsal, suggestion and reorientation sequence.", "Track results without making medical claims."],
    sections: [
      { heading: "Choose a behavioural target", body: ["Use goals such as beginning a study session, rehearsing a presentation, practising calm breathing or visualising a performance routine. Avoid broad promises such as cure anxiety forever.", "Define what you will do, where and when. A suggestion linked to a concrete behaviour is easier to evaluate."] },
      { heading: "A seven-minute structure", body: ["Spend one minute settling posture and breathing, two minutes narrowing attention, two minutes rehearsing the desired behaviour, one minute repeating concise suggestions and one minute reorienting.", "Longer is not automatically better. Consistency and realistic practice matter more than dramatic depth."] },
      { heading: "Measure honestly", body: ["Track whether the target behaviour occurred, not whether the session felt mystical. Record start time, duration, perceived focus and the next action taken.", "If the practice increases distress, stop and seek appropriate professional support rather than intensifying suggestions."] }
    ],
    procedure: ["Select one safe measurable goal.", "Set a timer and comfortable position.", "Use breathing or fixed attention.", "Rehearse the exact desired behaviour in context.", "State two concise realistic suggestions.", "Count up and reorient fully.", "Record the behavioural outcome."],
    script: ["For the next few minutes I focus only on rehearsing the first ten minutes of my study session: opening the document, reading the first section and writing one note.", "At five I am fully alert: one, breathing normally; two, energy returning; three, eyes ready to open; four, stretching; five, awake and oriented."],
    drills: ["Write scripts for study initiation, public-speaking rehearsal and relaxation.", "Record one seven-minute audio in your own voice.", "Track practice for seven days using behaviour rather than mood alone."],
    troubleshooting: [
      { problem: "The user falls asleep.", response: "Practise seated, earlier in the day and with a shorter session." },
      { problem: "The suggestion is too broad.", response: "Convert it into one observable action in a specific context." },
      { problem: "The practice increases distress.", response: "Stop, orient normally and seek suitable support rather than continuing." }
    ],
    safety: ["Do not practise while driving, bathing or operating equipment.", "Do not use the app as a substitute for medical or psychological care.", "End every session with full orientation."],
    assignment: "Create a seven-day self-hypnosis experiment for one behaviour, including baseline, daily script and outcome log.",
    quiz: [
      { question: "The strongest self-hypnosis goal is:", options: ["Become perfect", "Cure every fear", "Begin a 25-minute study block at 7 pm", "Never feel stress"], answer: 2, explanation: "Specific observable behaviours are realistic and measurable." },
      { question: "Progress should mainly be measured by:", options: ["Mystical depth", "Behavioural follow-through", "How long the script is", "Dramatic sensations"], answer: 1, explanation: "The useful outcome is whether the intended safe behaviour improves." }
    ],
    media: ["Seven-minute guided audio", "Editable script template", "Seven-day tracker"]
  },
  {
    id: 15,
    title: "A Complete Safe Demonstration",
    summary: "Combine consent, pre-talk, ideomotor response, induction, deepening, one benign phenomenon, cancellation and debriefing.",
    duration: "70–95 min",
    level: "Capstone",
    objectives: ["Run a coherent 10–15 minute session.", "Handle partial response, laughter, discomfort and early termination.", "Document consent, cancellation and participant feedback."],
    sections: [
      { heading: "A professional sequence", body: ["A compact demonstration can include consent, a one-minute pre-talk, magnetic fingers, a seated induction, a hand-lowering deepener, hand catalepsy, full cancellation, reorientation and debrief.", "Do not overload the session with every phenomenon learned. One clear experience with excellent care is more valuable than a rushed chain of tests."] },
      { heading: "Managing uncertainty", body: ["If laughter appears, treat it as ordinary release and continue only if the participant is comfortable. If responsiveness is partial, use what worked or end with relaxation.", "If discomfort, confusion or a stop signal appears, terminate immediately. A clean early ending demonstrates competence."] },
      { heading: "Debrief and review", body: ["Ask what felt deliberate, automatic, comfortable or unclear. Confirm that all temporary suggestions are removed and ordinary memory, movement and perception are present.", "Review video only with permission. Evaluate wording, pacing, touch, participant posture, cancellation and the amount of pressure created by the setting."] }
    ],
    procedure: ["Complete consent and environment check.", "Deliver the pre-talk.", "Run one ideomotor exercise.", "Use a seated induction.", "Deepen briefly.", "Attempt one agreed benign phenomenon.", "Cancel all suggestions specifically.", "Count up and orient.", "Debrief and collect feedback."],
    script: ["We will do one movement exercise and, if that feels comfortable, a brief focused-attention routine. You can stop at any time and we will not use embarrassing suggestions.", "All temporary suggestions are now cancelled. Movement, memory and sensation are ordinary, eyes open when ready, alert and comfortable in the room."],
    drills: ["Rehearse the full session with a role-playing peer.", "Run scenarios for laughter, no response, stop signal and forgotten script.", "Use the assessment rubric to review a recording."],
    troubleshooting: [
      { problem: "The learner forgets the next step.", response: "Pause, ask the participant to breathe comfortably and move directly to reorientation." },
      { problem: "The participant gives only a small response.", response: "Reinforce it accurately, avoid escalation and end positively." },
      { problem: "The setting becomes performative or pressuring.", response: "Remove the audience or end the session; consent must remain meaningful." }
    ],
    safety: ["No unsafe stunts, falls, painful tests or humiliating suggestions.", "Use a seated format for the first complete session.", "Verify all cancellation and obtain feedback before the participant leaves."],
    assignment: "Record one complete 10–15 minute consent-first demonstration and score it for clarity, safety, adaptation, cancellation and participant comfort.",
    quiz: [
      { question: "The best first capstone includes:", options: ["Many extreme phenomena", "One or two benign responses with excellent care", "A surprise induction", "Public humiliation"], answer: 1, explanation: "Quality, safety and adaptation matter more than quantity." },
      { question: "When the learner loses their place, the safest response is:", options: ["Invent a dramatic command", "Continue touching the participant", "Pause and reorient", "Blame the participant"], answer: 2, explanation: "A calm early ending is always available." }
    ],
    media: ["Complete model session", "Capstone assessment rubric", "Consent and debrief forms"]
  }
];
