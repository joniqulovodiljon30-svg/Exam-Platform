import { Theme, Variant } from './types';

const createVariant = (id: number, themeTitle: string, data: any): Variant => ({
  id,
  title: `Variant ${id} - ${themeTitle}`,
  taskI: {
    sentences: data.taskI || []
  },
  taskII: {
    items: data.taskII || []
  },
  taskIII: { items: data.taskIII || [] },
  taskIV: { comparisons: data.taskIV || [] },
  taskV: { words: data.taskV || [] }
});

export const THEMES: Theme[] = [
  {
    id: "media",
    title: "THEME 1: THE MEDIA",
    category: "Communication",
    description: "Newspaper collocations, materials, sections, and phrasal verbs.",
    icon: "Newspaper",
    variants: [
      createVariant(1, "Press Terminology", {
        taskI: [
          { text: "The morning ________ usually arrives at 7 AM.", answer: "newspaper" },
          { text: "I enjoy reading the ________ column for advice on relationships.", answer: "agony" },
          { text: "The journalist refused to ________ their confidential source.", answer: "divulge" },
          { text: "Tabloids often focus on ________ gossip and scandals.", answer: "celebrity" },
          { text: "The story was ________ on the front page of every paper.", answer: "featured" },
          { text: "A ________ is a serious, large-format newspaper.", answer: "broadsheet" },
          { text: "The government tried to ________ the sensitive report.", answer: "suppress" },
          { text: "He works as a foreign ________ for a global news agency.", answer: "correspondent" },
          { text: "The paper has a massive ________ in the capital city.", answer: "circulation" },
          { text: "The ________ section is full of job advertisements.", answer: "classified" },
          { text: "I check the TV ________ to see what is on tonight.", answer: "listings" },
          { text: "Information was ________ through various media outlets.", answer: "disseminated" }
        ],
        taskII: [
          { term: "Tabloid", definition: "A newspaper with smaller pages and simpler style.", key: "a" },
          { term: "Broadsheet", definition: "A serious newspaper using large sheets of paper.", key: "b" },
          { term: "Leaflet", definition: "A small piece of paper with information.", key: "c" },
          { term: "Journal", definition: "A publication dealing with a professional subject.", key: "d" },
          { term: "Pamphlet", definition: "A thin book with a paper cover on one topic.", key: "e" }
        ],
        taskIII: ["Classified ads", "Front page", "Letter to the editor", "Gossip column"],
        taskIV: [{ termA: "Article", termB: "Headline" }, { termA: "Journalist", termB: "Editor" }],
        taskV: ["Paparazzi", "Circulation", "Editorial", "Censorship", "Subscription"]
      }),
      createVariant(2, "Media Actions", {
        taskI: [
          { text: "The news finally ________ after hours of tense waiting.", answer: "broke" },
          { text: "The editor decided to ________ the story until further notice.", answer: "hold" },
          { text: "I need to ________ up on the latest current events.", answer: "read" },
          { text: "The magazine is ________ every two weeks.", answer: "published" },
          { text: "They are ________ a new investigative piece.", answer: "running" },
          { text: "The story was ________ up by several national tabloids.", answer: "picked" },
          { text: "The journalist was ________ to get the interview.", answer: "struggling" },
          { text: "We need to ________ the facts before we go to print.", answer: "verify" },
          { text: "The scandal ________ public outrage.", answer: "triggered" },
          { text: "The paper decided to ________ the column.", answer: "retract" },
          { text: "He handles the ________ for the sports section.", answer: "copy" },
          { text: "The ________ has increased this year.", answer: "readership" }
        ],
        taskII: [
          { term: "Feature", definition: "A long article about a particular person.", key: "a" },
          { term: "Column", definition: "A regular section written by an expert.", key: "b" },
          { term: "Supplement", definition: "A separate part added to a newspaper.", key: "c" },
          { term: "Lead", definition: "The opening sentence of a news story.", key: "d" },
          { term: "Byline", definition: "A line giving the name of the writer.", key: "e" }
        ],
        taskIII: ["Run a story", "Gloss over", "Bring out", "Tune in"],
        taskIV: [{ termA: "Tabloid", termB: "Glossy" }, { termA: "Scoop", termB: "Exclusive" }],
        taskV: ["Libel", "Defamation", "Syndication", "Sensationalism", "Copywriter"]
      }),
      createVariant(3, "Journalistic Ethics", {
        taskI: [
          { text: "Media ________ can be a barrier to objective reporting.", answer: "bias" },
          { text: "Disinformation can easily ________ public opinion.", answer: "manipulate" },
          { text: "The ________ estate refers to the press.", answer: "fourth" },
          { text: "Freedom of the ________ is a pillar of society.", answer: "press" },
          { text: "A media ________ owns multiple news outlets.", answer: "conglomerate" },
          { text: "They were accused of ________ a false narrative.", answer: "fabricating" },
          { text: "The ________ cycle is instantaneous today.", answer: "news" },
          { text: "Investigative ________ requires research.", answer: "journalism" },
          { text: "The ________ section contains opinion pieces.", answer: "oped" },
          { text: "Clickbait is used to ________ web traffic.", answer: "generate" },
          { text: "The ________ of information is a weapon.", answer: "flow" },
          { text: "News outlets must maintain ________.", answer: "integrity" }
        ],
        taskII: [
          { term: "Propaganda", definition: "Info used to promote a political cause.", key: "a" },
          { term: "Muckraker", definition: "A person who exposes alleged scandal.", key: "b" },
          { term: "Spin doctor", definition: "A spokesperson giving favorable interpretations.", key: "c" },
          { term: "Yellow journalism", definition: "Journalism based on exaggeration.", key: "d" },
          { term: "Sound bite", definition: "A short extract from a recorded interview.", key: "e" }
        ],
        taskIII: ["Character assassination", "Echo chamber", "Citizen journalism", "Checkbook journalism"],
        taskIV: [{ termA: "Privacy", termB: "Public interest" }, { termA: "Objectivity", termB: "Subjectivity" }],
        taskV: ["Gatekeeper", "Infotainment", "Syndicate", "Plagiarism", "Masthead"]
      })
    ]
  },
  {
    id: "medical",
    title: "THEME 2: MEDICAL LANGUAGE",
    category: "Science",
    description: "Health collocations, metaphors, and phrasal verbs related to illness.",
    icon: "Stethoscope",
    variants: [
      createVariant(1, "Basic Healthcare", {
        taskI: [
          { text: "The patient made a ________ recovery.", answer: "speedy" },
          { text: "The doctor ________ a course of antibiotics.", answer: "prescribed" },
          { text: "She was ________ with a mild infection.", answer: "diagnosed" },
          { text: "You should ________ a specialist.", answer: "consult" },
          { text: "The nurse ________ the medicine.", answer: "administered" },
          { text: "He had to ________ a simple procedure.", answer: "undergo" },
          { text: "The wound is starting to ________.", answer: "heal" },
          { text: "Exercise helps ________ chronic diseases.", answer: "prevent" },
          { text: "She is ________ from the flu.", answer: "recovering" },
          { text: "The medicine will ________ your symptoms.", answer: "relieve" },
          { text: "He was ________ from the hospital.", answer: "discharged" },
          { text: "Many people ________ from allergies.", answer: "suffer" }
        ],
        taskII: [
          { term: "Symptom", definition: "A physical feature indicating a condition.", key: "a" },
          { term: "Diagnosis", definition: "Identification of the nature of an illness.", key: "b" },
          { term: "Prescription", definition: "An instruction written by a doctor.", key: "c" },
          { term: "Infection", definition: "The state of being infected.", key: "d" },
          { term: "Clinic", definition: "A place for medical treatment.", key: "e" }
        ],
        taskIII: ["Run a temperature", "Catch a cold", "Blood pressure", "Pain relief"],
        taskIV: [{ termA: "Doctor", termB: "Nurse" }, { termA: "Surgery", termB: "Therapy" }],
        taskV: ["Pills", "Antibiotics", "Medication", "Immunity", "Hygiene"]
      }),
      createVariant(2, "Recovery Paths", {
        taskI: [
          { text: "It took him a month to ________ over the flu.", answer: "get" },
          { text: "She ________ down with a heavy cold.", answer: "came" },
          { text: "He ________ out after seeing the needles.", answer: "passed" },
          { text: "The doctor is helping her ________ off the infection.", answer: "fight" },
          { text: "She ________ round after the anesthesia.", answer: "came" },
          { text: "The old injury ________ up again.", answer: "flare" },
          { text: "He finally ________ through.", answer: "pulled" },
          { text: "I think I'm ________ down with something.", answer: "coming" },
          { text: "She ________ up a nasty virus.", answer: "picked" },
          { text: "The swelling should ________ down.", answer: "go" },
          { text: "The old man ________ away peacefully.", answer: "passed" },
          { text: "The painkillers didn't ________ off yet.", answer: "wear" }
        ],
        taskII: [
          { term: "Prognosis", definition: "The likely course of a disease.", key: "a" },
          { term: "Remission", definition: "A temporary diminution of severity.", key: "b" },
          { term: "Relapse", definition: "A deterioration after improvement.", key: "c" },
          { term: "Chronic", definition: "Persisting for a long time.", key: "d" },
          { term: "Acute", definition: "Experienced to a severe degree.", key: "e" }
        ],
        taskIII: ["On the mend", "Under the weather", "Back on your feet", "Pick up a bug"],
        taskIV: [{ termA: "Inpatient", termB: "Outpatient" }, { termA: "Benign", termB: "Malignant" }],
        taskV: ["Convalescence", "Remedy", "Condition", "Fatigue", "Relapse"]
      }),
      createVariant(3, "Health Metaphors", {
        taskI: [
          { text: "Corruption is a ________ on society.", answer: "cancer" },
          { text: "The crisis was a bitter ________ to swallow.", answer: "pill" },
          { text: "He has deep emotional ________.", answer: "scars" },
          { text: "The city was ________ by fear.", answer: "paralyzed" },
          { text: "They are only ________ the symptoms.", answer: "treating" },
          { text: "The bank is in a ________ condition.", answer: "critical" },
          { text: "The decision ________ out to be a mistake.", answer: "turned" },
          { text: "She has a ________ block.", answer: "mental" },
          { text: "Education is the only ________ to toxicity.", answer: "antidote" },
          { text: "The relationship is at a ________ stage.", answer: "terminal" },
          { text: "The surgeon is ________ on the policy.", answer: "operating" },
          { text: "The news was a ________ of fresh air.", answer: "breath" }
        ],
        taskII: [
          { term: "Epidemiology", definition: "The study of how diseases spread.", key: "a" },
          { term: "Therapeutic", definition: "Relating to the healing of disease.", key: "b" },
          { term: "Pathogen", definition: "A bacterium or virus causing disease.", key: "c" },
          { term: "Palliative", definition: "Relieving pain without dealing with the cause.", key: "d" },
          { term: "Placebo", definition: "A medicine with no physical effect.", key: "e" }
        ],
        taskIII: ["Social cancer", "Bitter pill", "Breath of life", "Shot in the arm"],
        taskIV: [{ termA: "Prognosis", termB: "Diagnosis" }, { termA: "Epidemic", termB: "Pandemic" }],
        taskV: ["Efficacy", "Morbidity", "Pathology", "Immunotherapy", "Placebo"]
      })
    ]
  },
  {
    id: "tech",
    title: "THEME 3: TECHNOLOGY",
    category: "Science",
    description: "Vocabulary for digital life, devices, and the impact of the internet.",
    icon: "Cpu",
    variants: [
      createVariant(1, "Hardware & Software", {
        taskI: [
          { text: "I need to ________ up my data.", answer: "back" },
          { text: "You must ________ in with your username.", answer: "log" },
          { text: "The computer ________ when I opened the video.", answer: "froze" },
          { text: "He spends hours ________ the internet.", answer: "surfing" },
          { text: "We need a ________ Wi-Fi connection.", answer: "stable" },
          { text: "This app is ________ with my phone.", answer: "incompatible" },
          { text: "The laptop is ________ by a good card.", answer: "powered" },
          { text: "I accidentally ________ an email.", answer: "deleted" },
          { text: "They decided to ________ the system.", answer: "upgrade" },
          { text: "We need to ________ the file.", answer: "upload" },
          { text: "The battery ________ quickly.", answer: "drains" },
          { text: "I can't ________ to the network.", answer: "connect" }
        ],
        taskII: [
          { term: "Hardware", definition: "The physical components of a system.", key: "a" },
          { term: "Software", definition: "The programs used by a computer.", key: "b" },
          { term: "Browser", definition: "A program used to view websites.", key: "c" },
          { term: "Server", definition: "A computer managing central resources.", key: "d" },
          { term: "Peripheral", definition: "Any device that connects to a computer.", key: "e" }
        ],
        taskIII: ["External drive", "Social media", "Touch screen", "Cloud storage"],
        taskIV: [{ termA: "Desktop", termB: "Laptop" }, { termA: "Download", termB: "Upload" }],
        taskV: ["Gadget", "Connection", "System", "Device", "Storage"]
      }),
      createVariant(2, "Online Interaction", {
        taskI: [
          { text: "I'll help you ________ up the laptop.", answer: "set" },
          { text: "The system will ________ down.", answer: "shut" },
          { text: "You need to ________ into your account.", answer: "sign" },
          { text: "The hackers ________ in through a port.", answer: "break" },
          { text: "I'll ________ up the document.", answer: "bring" },
          { text: "Can you ________ in the printer?", answer: "plug" },
          { text: "The computer ________ off unexpectedly.", answer: "went" },
          { text: "I need to ________ up my files.", answer: "clean" },
          { text: "He ________ down the job offer.", answer: "turned" },
          { text: "The battery ________ out.", answer: "ran" },
          { text: "I'll ________ through the settings.", answer: "go" },
          { text: "They are ________ a new version.", answer: "bringing" }
        ],
        taskII: [
          { term: "Firewall", definition: "A system preventing unauthorized access.", key: "a" },
          { term: "Encryption", definition: "Converting info into a secret code.", key: "b" },
          { term: "Algorithm", definition: "A set of rules for calculations.", key: "c" },
          { term: "Bandwidth", definition: "Capacity for data transfer.", key: "d" },
          { term: "Interface", definition: "The way a user interacts with a program.", key: "e" }
        ],
        taskIII: ["Hack into", "Log off", "Print out", "Wipe out"],
        taskIV: [{ termA: "Search engine", termB: "Browser" }, { termA: "Hardware", termB: "Software" }],
        taskV: ["Automation", "Artificial", "Intelligence", "Database", "Bandwidth"]
      }),
      createVariant(3, "Societal Impact", {
        taskI: [
          { text: "AI is ________ the workforce.", answer: "reshaping" },
          { text: "Digital ________ is a concern.", answer: "privacy" },
          { text: "Tech can ________ isolation.", answer: "exacerbate" },
          { text: "The ________ divide is growing.", answer: "digital" },
          { text: "Automation ________ many jobs.", answer: "threatens" },
          { text: "We are too ________ on gadgets.", answer: "reliant" },
          { text: "The ________ of info is seamless.", answer: "integration" },
          { text: "Cyber ________ is a priority.", answer: "warfare" },
          { text: "Algorithms can ________ misinformation.", answer: "amplify" },
          { text: "The ________ cycle is fast.", answer: "news" },
          { text: "The ________ of new tech is rapid.", answer: "adoption" },
          { text: "We must ________ ethical implications.", answer: "address" }
        ],
        taskII: [
          { term: "Interoperability", definition: "Ability of systems to exchange info.", key: "a" },
          { term: "Sustainability", definition: "Ability to be maintained without harm.", key: "b" },
          { term: "Disruption", definition: "Disturbance which interrupts an event.", key: "c" },
          { term: "Innovation", definition: "The process of innovating a method.", key: "d" },
          { term: "Paradigm", definition: "A typical example or model.", key: "e" }
        ],
        taskIII: ["Digital footprint", "Social media detox", "Tech-savvy", "Online presence"],
        taskIV: [{ termA: "Convenience", termB: "Privacy" }, { termA: "Evolution", termB: "Revolution" }],
        taskV: ["Scalability", "Cybersecurity", "Blockchain", "Infrastructure", "Ecosystem"]
      })
    ]
  },
  {
    id: "study",
    title: "THEME 4: STUDY & LEARNING",
    category: "Education",
    description: "Academic verbs, learning habits, and formal education vocabulary.",
    icon: "BookOpen",
    variants: [
      createVariant(1, "Academic Routine", {
        taskI: [
          { text: "He decided to ________ for a degree.", answer: "read" },
          { text: "Students must ________ lectures.", answer: "attend" },
          { text: "I need to ________ some research.", answer: "do" },
          { text: "The professor ________ a lecture.", answer: "delivered" },
          { text: "You should ________ notes.", answer: "take" },
          { text: "He wants to ________ a career.", answer: "pursue" },
          { text: "I ________ my final paper.", answer: "submitted" },
          { text: "The uni ________ scholarships.", answer: "offers" },
          { text: "I hope to ________ a high grade.", answer: "get" },
          { text: "She had to ________ for the missed lab.", answer: "compensate" },
          { text: "You must ________ your sources.", answer: "cite" },
          { text: "The school ________ a strict policy.", answer: "enforces" }
        ],
        taskII: [
          { term: "Curriculum", definition: "The subjects comprising a course.", key: "a" },
          { term: "Syllabus", definition: "An outline of subjects in a course.", key: "b" },
          { term: "Tuition", definition: "Instruction given to a student.", key: "c" },
          { term: "Thesis", definition: "A long essay involving research.", key: "d" },
          { term: "Faculty", definition: "A group of university departments.", key: "e" }
        ],
        taskIII: ["Academic record", "Rote learning", "Vocational training", "Higher education"],
        taskIV: [{ termA: "Sit an exam", termB: "Fail an exam" }, { termA: "Degree", termB: "Diploma" }],
        taskV: ["Seminar", "Lecture", "Assignment", "Literacy", "Scholarship"]
      }),
      createVariant(2, "Formal Education", {
        taskI: [
          { text: "They decided to ________ a survey.", answer: "conduct" },
          { text: "She managed to ________ her goals.", answer: "achieve" },
          { text: "Findings ________ our theory.", answer: "corroborate" },
          { text: "We need to ________ the data.", answer: "examine" },
          { text: "The report ________ social issues.", answer: "highlights" },
          { text: "They were ________ to participate.", answer: "required" },
          { text: "The course ________ of ten modules.", answer: "consists" },
          { text: "He ________ from university.", answer: "graduated" },
          { text: "She ________ in History.", answer: "majored" },
          { text: "The study ________ to show a link.", answer: "aimed" },
          { text: "We must ________ the impact.", answer: "assess" },
          { text: "Results were ________ in a journal.", answer: "published" }
        ],
        taskII: [
          { term: "Pedagogy", definition: "Practice of teaching as a subject.", key: "a" },
          { term: "Cognitive", definition: "Relating to knowledge acquisition.", key: "b" },
          { term: "Didactic", definition: "Intended to teach moral instruction.", key: "c" },
          { term: "Literacy", definition: "Ability to read and write fluently.", key: "d" },
          { term: "Numeracy", definition: "Ability to understand numbers.", key: "e" }
        ],
        taskIII: ["Conduct research", "Acquire knowledge", "Deliver a presentation", "Exceed expectations"],
        taskIV: [{ termA: "Qualitative", termB: "Quantitative" }, { termA: "Theory", termB: "Evidence" }],
        taskV: ["Plagiarism", "Assessment", "Criterion", "Methodology", "Synthesis"]
      }),
      createVariant(3, "Professional Skills", {
        taskI: [
          { text: "I have ________ several projects.", answer: "spearheaded" },
          { text: "She ________ a team.", answer: "managed" },
          { text: "He ________ an increase in sales.", answer: "achieved" },
          { text: "I have ________ leadership skills.", answer: "developed" },
          { text: "She ________ the training.", answer: "implemented" },
          { text: "He ________ our presence.", answer: "enhanced" },
          { text: "I ________ the budget.", answer: "oversaw" },
          { text: "She ________ with the team.", answer: "collaborated" },
          { text: "He ________ a solution.", answer: "devised" },
          { text: "I ________ with clients.", answer: "negotiate" },
          { text: "She ________ efficiency.", answer: "improved" },
          { text: "He ________ his targets.", answer: "surpassed" }
        ],
        taskII: [
          { term: "Competency", definition: "Ability to do something successfully.", key: "a" },
          { term: "Objective", definition: "A thing aimed at or sought.", key: "b" },
          { term: "Credential", definition: "A qualification or achievement.", key: "c" },
          { term: "Reference", definition: "A letter testifying to ability.", key: "d" },
          { term: "Internship", definition: "Period of work experience.", key: "e" }
        ],
        taskIII: ["Self-motivated", "Team player", "Strong work ethic", "Problem solver"],
        taskIV: [{ termA: "Skills", termB: "Qualifications" }, { termA: "Experience", termB: "Aptitude" }],
        taskV: ["Tenure", "Expertise", "Reliability", "Ambition", "Versatility"]
      })
    ]
  },
  {
    id: "work-business",
    title: "THEME 5: WORK AND BUSINESS",
    category: "Professional",
    description: "Office language and business strategy.",
    icon: "Briefcase",
    variants: [
      createVariant(1, "The Office", {
        taskI: [
          { text: "I have to ________ calls.", answer: "make" },
          { text: "She was ________ with hiring.", answer: "charged" },
          { text: "He decided to ________ in his resignation.", answer: "hand" },
          { text: "The company is ________ for a manager.", answer: "scouting" },
          { text: "We need to ________ a deal.", answer: "strike" },
          { text: "I have a heavy ________.", answer: "workload" },
          { text: "We are ________ schedule.", answer: "behind" },
          { text: "We must ________ the deadline.", answer: "meet" },
          { text: "She works in ________ resources.", answer: "human" },
          { text: "He was ________ redundant.", answer: "made" },
          { text: "The business is ________ a profit.", answer: "turning" },
          { text: "I have to ________ early.", answer: "leave" }
        ],
        taskII: [
          { term: "Blue-collar", definition: "Relating to manual work.", key: "a" },
          { term: "White-collar", definition: "Relating to office work.", key: "b" },
          { term: "Overhead", definition: "Costs of running a business.", key: "c" },
          { term: "Turnover", definition: "Rate at which employees leave.", key: "d" },
          { term: "Incentive", definition: "A thing that motivates.", key: "e" }
        ],
        taskIII: ["Take a break", "Meeting deadline", "Working hard", "Office job"],
        taskIV: [{ termA: "Manager", termB: "Employee" }, { termA: "Salary", termB: "Wage" }],
        taskV: ["Profit", "Loss", "Contract", "Promotion", "Staff"]
      }),
      createVariant(2, "Business Strategy", {
        taskI: [
          { text: "I'll ________ up with you later.", answer: "catch" },
          { text: "The meeting was ________ off.", answer: "called" },
          { text: "We need to ________ through details.", answer: "go" },
          { text: "He ________ down the offer.", answer: "turned" },
          { text: "She ________ on too much work.", answer: "took" },
          { text: "They are ________ out a plan.", answer: "bringing" },
          { text: "I need to ________ down costs.", answer: "keep" },
          { text: "The deal ________ through.", answer: "fell" },
          { text: "He ________ up late.", answer: "showed" },
          { text: "We should ________ out a solution.", answer: "find" },
          { text: "I'll ________ into the matter.", answer: "look" },
          { text: "They ________ up the company.", answer: "set" }
        ],
        taskII: [
          { term: "Stakeholder", definition: "A person with an interest in business.", key: "a" },
          { term: "Revenue", definition: "Total income generated.", key: "b" },
          { term: "Asset", definition: "A useful or valuable thing.", key: "c" },
          { term: "Liability", definition: "State of being responsible by law.", key: "d" },
          { term: "Capital", definition: "Wealth in form of money.", key: "e" }
        ],
        taskIII: ["Touch base", "Keep in the loop", "Go the extra mile", "Think outside the box"],
        taskIV: [{ termA: "Hire", termB: "Fire" }, { termA: "Asset", termB: "Liability" }],
        taskV: ["Dividend", "Acquisition", "Strategy", "Liabilities", "Investment"]
      }),
      createVariant(3, "Modern Slang", {
        taskI: [
          { text: "Hit the ________ running.", answer: "ground" },
          { text: "It's a ________-win situation.", answer: "win" },
          { text: "The ________ line matters.", answer: "bottom" },
          { text: "Let's ________ out of the box.", answer: "think" },
          { text: "Burning the ________ oil.", answer: "midnight" },
          { text: "Climb the ________ ladder.", answer: "corporate" },
          { text: "It's a dog-________-dog world.", answer: "eat" },
          { text: "Jack of all ________.", answer: "trades" },
          { text: "Bring in ________ blood.", answer: "fresh" },
          { text: "It was a ________-up call.", answer: "wake" },
          { text: "Fighting for a ________ of the pie.", answer: "piece" },
          { text: "A ________ on the horizon.", answer: "cloud" }
        ],
        taskII: [
          { term: "Leverage", definition: "Power to influence a situation.", key: "a" },
          { term: "Synergy", definition: "Combined interaction of two orgs.", key: "b" },
          { term: "Sustainability", definition: "Ability to be maintained.", key: "c" },
          { term: "Infrastructure", definition: "Basic physical structures.", key: "d" },
          { term: "Benchmarking", definition: "Evaluating by comparison.", key: "e" }
        ],
        taskIII: ["Glass ceiling", "Rat race", "Cash cow", "Vulture capitalist"],
        taskIV: [{ termA: "Equity", termB: "Equality" }, { termA: "Gross", termB: "Net" }],
        taskV: ["Merger", "Remuneration", "Subcontractor", "Volatility", "Scalability"]
      })
    ]
  },
  {
    id: "law",
    title: "THEME 6: LAW AND ORDER",
    category: "Society",
    description: "Legal terminology and judicial procedures.",
    icon: "Gavel",
    variants: [
      createVariant(1, "Judicial", {
        taskI: [
          { text: "The jury reached a ________.", answer: "verdict" },
          { text: "The witness will ________.", answer: "testify" },
          { text: "Critical DNA ________.", answer: "evidence" },
          { text: "He was an ________.", answer: "accomplice" },
          { text: "Punishment is a ________.", answer: "deterrent" },
          { text: "The state will ________.", answer: "prosecute" },
          { text: "A serious ________.", answer: "felony" },
          { text: "An ________ of the innocent.", answer: "acquittal" },
          { text: "Lengthy ________.", answer: "litigation" },
          { text: "The ________ presided.", answer: "magistrate" },
          { text: "________ analysis.", answer: "forensic" },
          { text: "The judge gave a ________.", answer: "sentence" }
        ],
        taskII: [
          { term: "Indictment", definition: "Formal charge of serious crime.", key: "a" },
          { term: "Perjury", definition: "Telling an untruth in court.", key: "b" },
          { term: "Subpoena", definition: "Writ ordering attendance in court.", key: "c" },
          { term: "Defendant", definition: "Individual accused in court.", key: "d" },
          { term: "Plaintiff", definition: "Person bringing a case.", key: "e" }
        ],
        taskIII: ["Beyond reasonable doubt", "Mitigating circumstances", "Contempt of court", "Capital punishment"],
        taskIV: [{ termA: "Solicitor", termB: "Barrister" }, { termA: "Civil law", termB: "Criminal law" }],
        taskV: ["Jurisdiction", "Habeas corpus", "Amnesty", "Culpability", "Precedent"]
      }),
      createVariant(2, "Crime", {
        taskI: [
          { text: "They were caught ________.", answer: "embezzling" },
          { text: "Granted ________.", answer: "clemency" },
          { text: "Issued a ________.", answer: "summons" },
          { text: "To ________ the witness.", answer: "cross-examine" },
          { text: "Issued an ________.", answer: "injunction" },
          { text: "Held in ________.", answer: "custody" },
          { text: "Committed ________.", answer: "perjury" },
          { text: "The ________ failed.", answer: "mediation" },
          { text: "Legal ________.", answer: "fees" },
          { text: "A ________ represents clients.", answer: "barrister" },
          { text: "A ________ to search.", answer: "warrant" },
          { text: "Found ________.", answer: "guilty" }
        ],
        taskII: [
          { term: "Libel", definition: "Published false statement.", key: "a" },
          { term: "Slander", definition: "Spoken false statement.", key: "b" },
          { term: "Larceny", definition: "Theft of personal property.", key: "c" },
          { term: "Arson", definition: "Act of setting fire to property.", key: "d" },
          { term: "Battery", definition: "Physical act of hitting someone.", key: "e" }
        ],
        taskIII: ["Serve a sentence", "Out of court settlement", "Plead guilty", "Burden of proof"],
        taskIV: [{ termA: "Theft", termB: "Robbery" }, { termA: "Burglary", termB: "Shoplifting" }],
        taskV: ["Rehabilitation", "Retribution", "Exoneration", "Extradition", "Incarceration"]
      }),
      createVariant(3, "Global Justice", {
        taskI: [
          { text: "UN called for ________.", answer: "amnesty" },
          { text: "Suspect ________.", answer: "extradition" },
          { text: "No ________ over waters.", answer: "jurisdiction" },
          { text: "To ________ the senator.", answer: "indict" },
          { text: "Last minute ________.", answer: "reprieve" },
          { text: "Modern ________ systems.", answer: "surveillance" },
          { text: "The prison ________.", answer: "warden" },
          { text: "The ________ vigilante.", answer: "acted" },
          { text: "A minor ________.", answer: "misdemeanor" },
          { text: "Sought ________.", answer: "redress" },
          { text: "International ________.", answer: "arbitration" },
          { text: "The ________ arrested.", answer: "constable" }
        ],
        taskII: [
          { term: "Tribunal", definition: "Court of justice or person with power.", key: "a" },
          { term: "Statute", definition: "Written law passed by a body.", key: "b" },
          { term: "Codex", definition: "Ancient manuscript in book form.", key: "c" },
          { term: "Protocol", definition: "Official procedure governing affairs.", key: "d" },
          { term: "Diplomatic immunity", definition: "Exemption from laws for diplomats.", key: "e" }
        ],
        taskIII: ["Rule of law", "Conflict of interest", "Due process", "Human rights violation"],
        taskIV: [{ termA: "Justice", termB: "Equity" }, { termA: "Law", termB: "Ethics" }],
        taskV: ["Sovereignty", "Treaty", "Sanction", "Ratification", "Nullification"]
      })
    ]
  },
  {
    id: "nature",
    title: "THEME 7: ENVIRONMENT",
    category: "Science",
    description: "Ecology and conservation.",
    icon: "Leaf",
    variants: [
      createVariant(1, "Ecology", {
        taskI: [
          { text: "The ________ protects us.", answer: "ozone" },
          { text: "Carbon ________.", answer: "emissions" },
          { text: "Water is ________.", answer: "stagnant" },
          { text: "Switch to ________ energy.", answer: "renewable" },
          { text: "Not ________ plastic.", answer: "biodegradable" },
          { text: "The local ________.", answer: "ecosystem" },
          { text: "Illegal ________.", answer: "deforestation" },
          { text: "Losing natural ________.", answer: "habitat" },
          { text: "Prolonged ________.", answer: "drought" },
          { text: "Glaciers ________.", answer: "melt" },
          { text: "Wildlife ________.", answer: "preservation" },
          { text: "Earth's ________.", answer: "biosphere" }
        ],
        taskII: [
          { term: "Atmosphere", definition: "Envelope of gases surrounding Earth.", key: "a" },
          { term: "Toxicity", definition: "Quality of being poisonous.", key: "b" },
          { term: "Sustainability", definition: "Ability to be maintained.", key: "c" },
          { term: "Pollutant", definition: "Substance that pollutes.", key: "d" },
          { term: "Condensation", definition: "Water droplets on surface.", key: "e" }
        ],
        taskIII: ["Carbon footprint", "Global warming", "Natural resources", "Renewable energy"],
        taskIV: [{ termA: "Conservation", termB: "Preservation" }, { termA: "Climate", termB: "Weather" }],
        taskV: ["Precipitation", "Biodiversity", "Permaculture", "Greenhouse", "Aquifer"]
      }),
      createVariant(2, "Resources", {
        taskI: [
          { text: "Use ________ energy.", answer: "geothermal" },
          { text: "Living ________.", answer: "sustainable" },
          { text: "Natural ________.", answer: "catastrophe" },
          { text: "Use ________ systems.", answer: "irrigation" },
          { text: "Island ________.", answer: "sanctuary" },
          { text: "Excessive ________.", answer: "pesticide" },
          { text: "Ends in ________.", answer: "landfill" },
          { text: "Soil ________.", answer: "depletion" },
          { text: "Autumn ________.", answer: "harvest" },
          { text: "Hitting ________ regions.", answer: "arctic" },
          { text: "Buy ________.", answer: "organic" },
          { text: "Forest ________.", answer: "preservation" }
        ],
        taskII: [
          { term: "Compost", definition: "Decayed organic material.", key: "a" },
          { term: "Hydroponics", definition: "Growing plants in liquid.", key: "b" },
          { term: "Monoculture", definition: "Cultivation of single crop.", key: "c" },
          { term: "Erosion", definition: "Process of eroding by wind.", key: "d" },
          { term: "Sediment", definition: "Matter settling at bottom.", key: "e" }
        ],
        taskIII: ["Intensive farming", "Organic fertilizer", "Water scarcity", "Soil fertility"],
        taskIV: [{ termA: "Flora", termB: "Fauna" }, { termA: "Herbicide", termB: "Pesticide" }],
        taskV: ["Salination", "Afforestation", "Topography", "Urbanization", "Desalination"]
      }),
      createVariant(3, "Disasters", {
        taskI: [
          { text: "Low ________ level.", answer: "reservoir" },
          { text: "High ________.", answer: "altitudes" },
          { text: "Severe ________.", answer: "erosion" },
          { text: "Use a ________ bin.", answer: "compost" },
          { text: "Torrential ________.", answer: "downpour" },
          { text: "Water ________.", answer: "purification" },
          { text: "The ________ gases.", answer: "greenhouse" },
          { text: "Marine ________.", answer: "ecology" },
          { text: "The local ________.", answer: "fauna" },
          { text: "Alpine ________.", answer: "flora" },
          { text: "River ________.", answer: "sediment" },
          { text: "Illegal ________.", answer: "poaching" }
        ],
        taskII: [
          { term: "Tsunami", definition: "Long sea wave caused by earthquake.", key: "a" },
          { term: "Tremor", definition: "Quivering movement; earthquake.", key: "b" },
          { term: "Avalanche", definition: "Snow falling down mountain.", key: "c" },
          { term: "Aftershock", definition: "Smaller quake following main shock.", key: "d" },
          { term: "Epicenter", definition: "Surface point above focus.", key: "e" }
        ],
        taskIII: ["Oil spill", "Toxic waste", "Acid rain", "Nuclear fallout"],
        taskIV: [{ termA: "Endangered", termB: "Extinct" }, { termA: "Wild", termB: "Domesticated" }],
        taskV: ["Metamorphism", "Seismology", "Vulnerability", "Resilience", "Displacement"]
      })
    ]
  },
  {
    id: "travel",
    title: "THEME 8: TRAVEL",
    category: "Leisure",
    description: "Tourism and transport.",
    icon: "Plane",
    variants: [
      createVariant(1, "Traveler", {
        taskI: [
          { text: "Planned the ________.", answer: "itinerary" },
          { text: "Top ________.", answer: "destination" },
          { text: "Missed our ________.", answer: "transit" },
          { text: "Known for ________.", answer: "hospitality" },
          { text: "Airport ________.", answer: "terminal" },
          { text: "Must ________ the ship.", answer: "embark" },
          { text: "Day ________.", answer: "excursion" },
          { text: "Spent a year as a ________.", answer: "backpacker" },
          { text: "Small ________.", answer: "souvenir" },
          { text: "The ________ helped.", answer: "concierge" },
          { text: "Long ________.", answer: "layover" },
          { text: "Process of ________.", answer: "embarkation" }
        ],
        taskII: [
          { term: "Customs", definition: "Place where officials check goods.", key: "a" },
          { term: "Immigration", definition: "Place where officials check passports.", key: "b" },
          { term: "Jet lag", definition: "Tiredness from crossing zones.", key: "c" },
          { term: "Voucher", definition: "Paper entitling holder to discount.", key: "d" },
          { term: "Brochure", definition: "Small book with info and pictures.", key: "e" }
        ],
        taskIII: ["Package holiday", "Off the beaten track", "Travel insurance", "Sightseeing tour"],
        taskIV: [{ termA: "Tourist", termB: "Traveler" }, { termA: "Hotel", termB: "Hostel" }],
        taskV: ["Visa", "Check-in", "Boarding", "Expedition", "Pilgrimage"]
      }),
      createVariant(2, "Descriptive", {
        taskI: [
          { text: "Majestic ________.", answer: "backdrop" },
          { text: "Panoramic ________.", answer: "view" },
          { text: "Rustic ________.", answer: "cabin" },
          { text: "Scenic ________.", answer: "drive" },
          { text: "Remote ________.", answer: "village" },
          { text: "Vibrant ________.", answer: "city" },
          { text: "Pristine ________.", answer: "beach" },
          { text: "Exotic ________.", answer: "locations" },
          { text: "Bustling ________.", answer: "market" },
          { text: "Tranquil ________.", answer: "afternoon" },
          { text: "Quaint ________.", answer: "streets" },
          { text: "Historical ________.", answer: "significance" }
        ],
        taskII: [
          { term: "Landmark", definition: "Feature easily seen from distance.", key: "a" },
          { term: "Heritage", definition: "Property that is inherited.", key: "b" },
          { term: "Metropolis", definition: "Capital or chief city.", key: "c" },
          { term: "Hamlet", definition: "Small settlement.", key: "d" },
          { term: "Citadel", definition: "Fortress on high ground.", key: "e" }
        ],
        taskIII: ["Breathtaking scenery", "Local cuisine", "Hospitality industry", "Untouched nature"],
        taskIV: [{ termA: "Voyage", termB: "Journey" }, { termA: "Trip", termB: "Tour" }],
        taskV: ["Stupendous", "Ethereal", "Serendipity", "Wanderlust", "Globetrotter"]
      }),
      createVariant(3, "Impact", {
        taskI: [
          { text: "Rise of ________.", answer: "ecotourism" },
          { text: "Cultural ________.", answer: "globalization" },
          { text: "Need better ________.", answer: "infrastructure" },
          { text: "Every ________.", answer: "amenity" },
          { text: "Package ________.", answer: "deal" },
          { text: "Apply for ________.", answer: "visa" },
          { text: "Exchange ________.", answer: "currency" },
          { text: "Went through ________.", answer: "customs" },
          { text: "Universal ________.", answer: "heritage" },
          { text: "Atlantic ________.", answer: "voyage" },
          { text: "Luxury ________.", answer: "cruise" },
          { text: "Lifestyle ________.", answer: "nomadic" }
        ],
        taskII: [
          { term: "Over-tourism", definition: "Excessive numbers of tourists.", key: "a" },
          { term: "Gentrification", definition: "Changing character of neighborhood.", key: "b" },
          { term: "Displacement", definition: "Moving something from position.", key: "c" },
          { term: "Monetization", definition: "Earning revenue from asset.", key: "d" },
          { term: "Authenticity", definition: "Quality of being authentic.", key: "e" }
        ],
        taskIII: ["Sustainable tourism", "Cultural heritage", "Economic impact", "High season"],
        taskIV: [{ termA: "Inbound", termB: "Outbound" }, { termA: "Domestic", termB: "International" }],
        taskV: ["Revenue", "Accessibility", "Saturation", "Degradation", "Seasonality"]
      })
    ]
  },
  {
    id: "food",
    title: "THEME 9: FOOD",
    category: "Lifestyle",
    description: "Culinary terminology.",
    icon: "Utensils",
    variants: [
      createVariant(1, "Culinary", {
        taskI: [
          { text: "Let it ________.", answer: "simmer" },
          { text: "Use to ________.", answer: "garnish" },
          { text: "Let it ________.", answer: "marinate" },
          { text: "To ________ onions.", answer: "sauté" },
          { text: "Lemon ________.", answer: "zest" },
          { text: "To ________ eggs.", answer: "whisk" },
          { text: "To ________ dough.", answer: "knead" },
          { text: "To ________ veg.", answer: "blanch" },
          { text: "To ________ meat.", answer: "braise" },
          { text: "To ________ eggs.", answer: "poach" },
          { text: "To ________ garlic.", answer: "mince" },
          { text: "To ________ carrots.", answer: "julienne" }
        ],
        taskII: [
          { term: "Sauté", definition: "Fried quickly in hot fat.", key: "a" },
          { term: "Blanch", definition: "Scald in water briefly.", key: "b" },
          { term: "Infuse", definition: "Soak to extract flavor.", key: "c" },
          { term: "Glaze", definition: "Thin liquid coating.", key: "d" },
          { term: "Zest", definition: "Outer part of citrus peel.", key: "e" }
        ],
        taskIII: ["Culinary excellence", "Staple food", "Balanced diet", "Nutritional value"],
        taskIV: [{ termA: "Roasting", termB: "Grilling" }, { termA: "Baking", termB: "Braising" }],
        taskV: ["Gourmet", "Appetizer", "Delicacy", "Seasoning", "Ingredients"]
      }),
      createVariant(2, "Nutrition", {
        taskI: [
          { text: "Intake of ________.", answer: "calories" },
          { text: "Boost ________.", answer: "metabolism" },
          { text: "Source of ________.", answer: "protein" },
          { text: "Simple ________.", answer: "carbohydrates" },
          { text: "Essential ________.", answer: "vitamins" },
          { text: "Lack of ________.", answer: "minerals" },
          { text: "High in ________.", answer: "fibre" },
          { text: "Proper ________.", answer: "hydration" },
          { text: "Full of ________.", answer: "antioxidants" },
          { text: "Variety of ________.", answer: "nutrients" },
          { text: "High ________.", answer: "cholesterol" },
          { text: "Daily ________.", answer: "supplements" }
        ],
        taskII: [
          { term: "Carbohydrate", definition: "Organic compounds in food.", key: "a" },
          { term: "Antioxidant", definition: "Substance inhibiting oxidation.", key: "b" },
          { term: "Metabolism", definition: "Chemical processes in organism.", key: "c" },
          { term: "Fiber", definition: "Dietary material like cellulose.", key: "d" },
          { term: "Calorie", definition: "Unit of energy measurement.", key: "e" }
        ],
        taskIII: ["Dietary requirements", "Vitamins and minerals", "Calorie deficit", "Processed food"],
        taskIV: [{ termA: "Saturated", termB: "Unsaturated" }, { termA: "Vegan", termB: "Vegetarian" }],
        taskV: ["Glucose", "Digestion", "Amino", "Probiotic", "Lactose"]
      }),
      createVariant(3, "Industry", {
        taskI: [
          { text: "The ________.", answer: "appetizer" },
          { text: "A grand ________.", answer: "banquet" },
          { text: "A huge ________.", answer: "buffet" },
          { text: "A ________ chef.", answer: "gourmet" },
          { text: "Rare ________.", answer: "delicacy" },
          { text: "The ________ label.", answer: "ingredients" },
          { text: "Thai ________.", answer: "cuisine" },
          { text: "Large ________.", answer: "platter" },
          { text: "Old ________.", answer: "recipe" },
          { text: "Salt ________.", answer: "seasoning" },
          { text: "Expensive ________.", answer: "silverware" },
          { text: "The ________.", answer: "sommelier" }
        ],
        taskII: [
          { term: "Gastronomy", definition: "Art of choosing and eating good food.", key: "a" },
          { term: "A la carte", definition: "Ordered as separate items.", key: "b" },
          { term: "Maitre d'", definition: "Head waiter of restaurant.", key: "c" },
          { term: "Confectionery", definition: "Sweets and chocolates.", key: "d" },
          { term: "Vintage", definition: "Year or place of high quality.", key: "e" }
        ],
        taskIII: ["Fine dining", "Street food", "Farm-to-table", "Hospitality management"],
        taskIV: [{ termA: "Buffet", termB: "Set menu" }, { termA: "Waitstaff", termB: "Kitchen staff" }],
        taskV: ["Pantry", "Utensils", "Crockery", "Beverage", "Gourmand"]
      })
    ]
  },
  {
    id: "psychology",
    title: "THEME 10: PSYCHOLOGY",
    category: "Science",
    description: "Cognitive processes and behavior.",
    icon: "Brain",
    variants: [
      createVariant(1, "Cognitive", {
        taskI: [
          { text: "His ________.", answer: "perception" },
          { text: "Strong ________.", answer: "stimulus" },
          { text: "Info ________.", answer: "retrieval" },
          { text: "Mnemonic ________.", answer: "device" },
          { text: "Sensory ________.", answer: "input" },
          { text: "Focus ________.", answer: "attention" },
          { text: "Strange ________.", answer: "behavior" },
          { text: "Idea ________.", answer: "association" },
          { text: "Pavlov ________.", answer: "conditioning" },
          { text: "Brain's ________.", answer: "neuroplasticity" },
          { text: "IQ ________.", answer: "intelligence" },
          { text: "Thinking ________.", answer: "process" }
        ],
        taskII: [
          { term: "Cognition", definition: "Mental action of acquiring knowledge.", key: "a" },
          { term: "Neurosis", definition: "Relatively mild mental illness.", key: "b" },
          { term: "Psychosis", definition: "Severe impaired mental disorder.", key: "c" },
          { term: "Subconscious", definition: "Part of mind not fully aware.", key: "d" },
          { term: "Schema", definition: "Representation of a plan or theory.", key: "e" }
        ],
        taskIII: ["Cognitive dissonance", "Short-term memory", "Emotional intelligence", "Critical thinking"],
        taskIV: [{ termA: "Conscious", termB: "Subconscious" }, { termA: "Nature", termB: "Nurture" }],
        taskV: ["Perception", "Inference", "Stimulus", "Response", "Abstract"]
      }),
      createVariant(2, "Emotions", {
        taskI: [
          { text: "Show ________.", answer: "empathy" },
          { text: "Her ________.", answer: "resilience" },
          { text: "Public ________.", answer: "anxiety" },
          { text: "Calm ________.", answer: "temperament" },
          { text: "An ________.", answer: "introvert" },
          { text: "An ________.", answer: "extrovert" },
          { text: "A ________.", answer: "phobia" },
          { text: "The ________ mind.", answer: "subconscious" },
          { text: "Lacked ________.", answer: "motivation" },
          { text: "Natural ________.", answer: "instinct" },
          { text: "True ________.", answer: "character" },
          { text: "On your ________.", answer: "mood" }
        ],
        taskII: [
          { term: "Empathy", definition: "Ability to share feelings of another.", key: "a" },
          { term: "Resilience", definition: "Capacity to recover quickly.", key: "b" },
          { term: "Introversion", definition: "Interested in own mental life.", key: "c" },
          { term: "Narcissism", definition: "Excessive interest in oneself.", key: "d" },
          { term: "Altruism", definition: "Practice of concern for others.", key: "e" }
        ],
        taskIII: ["Inner child", "Self-esteem", "Defense mechanism", "Personal growth"],
        taskIV: [{ termA: "Introvert", termB: "Extrovert" }, { termA: "Optimist", termB: "Pessimist" }],
        taskV: ["Affect", "Ambivalence", "Disorder", "Trauma", "Temperament"]
      }),
      createVariant(3, "Social", {
        taskI: [
          { text: "Group ________.", answer: "conformity" },
          { text: "Reduce ________.", answer: "prejudice" },
          { text: "Avoid ________.", answer: "stereotype" },
          { text: "Media ________.", answer: "influence" },
          { text: "Strong ________.", answer: "leadership" },
          { text: "Random ________.", answer: "altruism" },
          { text: "Form of ________.", answer: "aggression" },
          { text: "Clear ________.", answer: "hierarchy" },
          { text: "Identity ________.", answer: "identity" },
          { text: "Used ________.", answer: "persuasion" },
          { text: "Social ________.", answer: "norm" },
          { text: "High ________.", answer: "status" }
        ],
        taskII: [
          { term: "Conformity", definition: "Compliance with standards or laws.", key: "a" },
          { term: "Stereotype", definition: "Fixed oversimplified image.", key: "b" },
          { term: "Prejudice", definition: "Preconceived opinion not based on reason.", key: "c" },
          { term: "Authority", definition: "Power or right to give orders.", key: "d" },
          { term: "Bias", definition: "Prejudice in favor or against one.", key: "e" }
        ],
        taskIII: ["Peer pressure", "Social stigma", "Cultural identity", "Groupthink"],
        taskIV: [{ termA: "Individualism", termB: "Collectivism" }, { termA: "Cooperation", termB: "Competition" }],
        taskV: ["Ostracism", "Hierarchy", "Ideology", "Intervention", "Normative"]
      })
    ]
  },
  {
    id: "finance",
    title: "THEME 11: FINANCE",
    category: "Professional",
    description: "Banking and economics.",
    icon: "DollarSign",
    variants: [
      createVariant(1, "Banking", {
        taskI: [
          { text: "Severe ________.", answer: "recession" },
          { text: "High ________.", answer: "inflation" },
          { text: "Annual ________.", answer: "revenue" },
          { text: "Total ________.", answer: "liabilities" },
          { text: "Tangible ________.", answer: "assets" },
          { text: "Board ________.", answer: "dividend" },
          { text: "Investment ________.", answer: "portfolio" },
          { text: "He works for ________.", answer: "brokerage" },
          { text: "High ________.", answer: "liquidity" },
          { text: "Took a ________.", answer: "mortgage" },
          { text: "Remained ________.", answer: "solvent" },
          { text: "Charged an ________.", answer: "overdraft" }
        ],
        taskII: [
          { term: "Equity", definition: "Value of shares issued by company.", key: "a" },
          { term: "Annuity", definition: "Fixed sum paid each year.", key: "b" },
          { term: "Audit", definition: "Official inspection of accounts.", key: "c" },
          { term: "Deficit", definition: "Amount by which sum is too small.", key: "d" },
          { term: "Arbitrage", definition: "Simultaneous buying and selling.", key: "e" }
        ],
        taskIII: ["Bull market", "Capital gains", "Venture capital", "Credit rating"],
        taskIV: [{ termA: "Gross", termB: "Net" }, { termA: "Fixed", termB: "Variable" }],
        taskV: ["Bankruptcy", "Collateral", "Fiscal", "Hedging", "Speculation"]
      }),
      createVariant(2, "Investment", {
        taskI: [
          { text: "Yield ________.", answer: "securities" },
          { text: "Central ________.", answer: "hike" },
          { text: "To ________.", answer: "allocate" },
          { text: "Seeking ________.", answer: "equity" },
          { text: "To ________.", answer: "liquidate" },
          { text: "Remittances ________.", answer: "remittances" },
          { text: "Requires ________.", answer: "collateral" },
          { text: "Reached a ________.", answer: "settlement" },
          { text: "Fiscal ________.", answer: "discipline" },
          { text: "New ________.", answer: "bonds" },
          { text: "High ________.", answer: "return" },
          { text: "Several ________.", answer: "discrepancies" }
        ],
        taskII: [
          { term: "Bullion", definition: "Gold or silver in bulk.", key: "a" },
          { term: "Foreclosure", definition: "Taking possession of mortgaged property.", key: "b" },
          { term: "Amortization", definition: "Gradually writing off cost.", key: "c" },
          { term: "Underwriting", definition: "Accepting liability under policy.", key: "d" },
          { term: "Leverage", definition: "Use of borrowed capital.", key: "e" }
        ],
        taskIII: ["Floating a company", "Insider trading", "Tax evasion", "Blue-chip stocks"],
        taskIV: [{ termA: "Debit", termB: "Credit" }, { termA: "Current", termB: "Savings" }],
        taskV: ["Solvency", "Expenditure", "Depreciation", "Legacy", "Incentive"]
      }),
      createVariant(3, "Economics", {
        taskI: [
          { text: "Global ________.", answer: "globalization" },
          { text: "A ________.", answer: "shortage" },
          { text: "The ________.", answer: "fiscal" },
          { text: "A ________.", answer: "surplus" },
          { text: "Price ________.", answer: "index" },
          { text: "Market ________.", answer: "volatility" },
          { text: "Currency ________.", answer: "devaluation" },
          { text: "Growth ________.", answer: "growth" },
          { text: "Monetary ________.", answer: "monetary" },
          { text: "Tax ________.", answer: "rebates" },
          { text: "Viability ________.", answer: "viability" },
          { text: "Wealth ________.", answer: "inequality" }
        ],
        taskII: [
          { term: "Macroeconomics", definition: "Part concerned with large-scale factors.", key: "a" },
          { term: "Tariff", definition: "Tax to be paid on imports.", key: "b" },
          { term: "Subsidy", definition: "Sum granted by gov to assist.", key: "c" },
          { term: "Protectionism", definition: "Shielding domestic industries.", key: "d" },
          { term: "Commodity", definition: "Raw material bought and sold.", key: "e" }
        ],
        taskIII: ["Emerging markets", "Supply and demand", "Free trade", "Laissez-faire"],
        taskIV: [{ termA: "Direct", termB: "Indirect" }, { termA: "Imports", termB: "Exports" }],
        taskV: ["Inflation", "Deflation", "Stagnation", "Monopoly", "Subsidiary"]
      })
    ]
  },
  {
    id: "arts",
    title: "THEME 12: ARTS",
    category: "Culture",
    description: "Fine arts and creativity.",
    icon: "Palette",
    variants: [
      createVariant(1, "Exhibitions", {
        taskI: [
          { text: "Curator ________.", answer: "curator" },
          { text: "Style ________.", answer: "avant-garde" },
          { text: "Acquired ________.", answer: "sculpture" },
          { text: "Modern ________.", answer: "abstract" },
          { text: "Unique ________.", answer: "aesthetic" },
          { text: "Art ________.", answer: "masterpiece" },
          { text: "Linear ________.", answer: "perspective" },
          { text: "Stunning ________.", answer: "portrait" },
          { text: "Favorite ________.", answer: "genre" },
          { text: "Harsh ________.", answer: "critique" },
          { text: "Versatile ________.", answer: "medium" },
          { text: "Vibrant ________.", answer: "palette" }
        ],
        taskII: [
          { term: "Impressionism", definition: "Style with visible brush strokes.", key: "a" },
          { term: "Canvas", definition: "Cloth used for oil painting.", key: "b" },
          { term: "Sketch", definition: "Rough unfinished drawing.", key: "c" },
          { term: "Mural", definition: "Art executed on a wall.", key: "d" },
          { term: "Gallery", definition: "Room for display or sale.", key: "e" }
        ],
        taskIII: ["Artistic integrity", "Visual arts", "Contemporary art", "Artistic license"],
        taskIV: [{ termA: "Realism", termB: "Surrealism" }, { termA: "Original", termB: "Reproduction" }],
        taskV: ["Aesthetic", "Exhibition", "Gallantry", "Installation", "Tapestry"]
      }),
      createVariant(2, "Performance", {
        taskI: [
          { text: "The ________.", answer: "protagonist" },
          { text: "Weeks in ________.", answer: "rehearsal" },
          { text: "To ________.", answer: "audition" },
          { text: "Play's ________.", answer: "backdrop" },
          { text: "Musical ________.", answer: "choreography" },
          { text: "Playwright ________.", answer: "playwright" },
          { text: "Movie ________.", answer: "plot" },
          { text: "Professional ________.", answer: "conductor" },
          { text: "Theater ________.", answer: "auditorium" },
          { text: "Film ________.", answer: "soundtrack" },
          { text: "Received ________.", answer: "accolades" },
          { text: "Dialogue ________.", answer: "dialogue" }
        ],
        taskII: [
          { term: "Prologue", definition: "Separate introductory section.", key: "a" },
          { term: "Encore", definition: "Repeated performance at end.", key: "b" },
          { term: "Intermission", definition: "Pause between parts of play.", key: "c" },
          { term: "Monologue", definition: "Long speech by one actor.", key: "d" },
          { term: "Scenario", definition: "Written outline of work.", key: "e" }
        ],
        taskIII: ["Opening night", "Method acting", "Box office hit", "Stage fright"],
        taskIV: [{ termA: "Comedy", termB: "Tragedy" }, { termA: "Soloist", termB: "Ensemble" }],
        taskV: ["Aria", "Cadence", "Dramaturgy", "Overture", "Virtuoso"]
      }),
      createVariant(3, "Writing", {
        taskI: [
          { text: "Used a ________.", answer: "pseudonym" },
          { text: "Book an ________.", answer: "autobiography" },
          { text: "Poetic ________.", answer: "metaphor" },
          { text: "Story ________.", answer: "theme" },
          { text: "Descriptive ________.", answer: "prose" },
          { text: "Slow ________.", answer: "narrative" },
          { text: "Short ________.", answer: "anthology" },
          { text: "Book ________.", answer: "preface" },
          { text: "Prize for ________.", answer: "non-fiction" },
          { text: "Poem ________.", answer: "meter" },
          { text: "Idea ________.", answer: "juxtaposition" },
          { text: "Layered ________.", answer: "symbolism" }
        ],
        taskII: [
          { term: "Stanza", definition: "Group of lines in poem.", key: "a" },
          { term: "Alliteration", definition: "Occurrence of same letter.", key: "b" },
          { term: "Satire", definition: "Use of humor to expose stupidity.", key: "c" },
          { term: "Epic", definition: "Long poem from ancient tradition.", key: "d" },
          { term: "Hyperbole", definition: "Exaggerated statements.", key: "e" }
        ],
        taskIII: ["Literary devices", "Narrative arc", "Character development", "Creative writing"],
        taskIV: [{ termA: "Fiction", termB: "Non-fiction" }, { termA: "Poetry", termB: "Prose" }],
        taskV: ["Allegory", "Climax", "Diction", "Protagonist", "Rhetoric"]
      })
    ]
  },
  {
    id: "social-media",
    title: "THEME 13: SOCIAL MEDIA",
    category: "Communication",
    description: "Online behavior and connectivity.",
    icon: "MessageSquare",
    variants: [
      createVariant(1, "Influence", {
        taskI: [
          { text: "The ________.", answer: "algorithm" },
          { text: "High ________.", answer: "engagement" },
          { text: "Video went ________.", answer: "viral" },
          { text: "Famous ________.", answer: "influencer" },
          { text: "Dance is ________.", answer: "trending" },
          { text: "To ________.", answer: "monetize" },
          { text: "Lost many ________.", answer: "followers" },
          { text: "Use ________.", answer: "hashtag" },
          { text: "Popular ________.", answer: "platform" },
          { text: "Track ________.", answer: "metrics" },
          { text: "High ________.", answer: "content" },
          { text: "To ________.", answer: "stream" }
        ],
        taskII: [
          { term: "Handle", definition: "Person's username.", key: "a" },
          { term: "Bio", definition: "Short text describing user.", key: "b" },
          { term: "Feed", definition: "Updated list of content.", key: "c" },
          { term: "Tag", definition: "Link user to post.", key: "d" },
          { term: "DM", definition: "Private message sent directly.", key: "e" }
        ],
        taskIII: ["Digital footprint", "Social media marketing", "User-generated content", "Online persona"],
        taskIV: [{ termA: "Public", termB: "Private" }, { termA: "Organic", termB: "Paid" }],
        taskV: ["Engagement", "Monetization", "Transparency", "Authenticity", "Connectivity"]
      }),
      createVariant(2, "Ethics", {
        taskI: [
          { text: "Cyber ________.", answer: "bullying" },
          { text: "Privacy ________.", answer: "settings" },
          { text: "Fake ________.", answer: "news" },
          { text: "Platform ________.", answer: "guidelines" },
          { text: "Banned ________.", answer: "user" },
          { text: "An ________ user.", answer: "anonymous" },
          { text: "Digital ________.", answer: "detox" },
          { text: "Promoting ________.", answer: "narrative" },
          { text: "Data ________.", answer: "security" },
          { text: "Verify ________.", answer: "sources" },
          { text: "Unfollow ________.", answer: "accounts" },
          { text: "Info ________.", answer: "leak" }
        ],
        taskII: [
          { term: "Troll", definition: "Person posting inflammatory messages.", key: "a" },
          { term: "Clickbait", definition: "Content to attract attention.", key: "b" },
          { term: "Doxing", definition: "Revealing private info online.", key: "c" },
          { term: "Shadowban", definition: "Blocking content without knowing.", key: "d" },
          { term: "Astroturfing", definition: "False impression of support.", key: "e" }
        ],
        taskIII: ["Privacy policy", "Community standards", "Data protection", "Ethical hacking"],
        taskIV: [{ termA: "Anonymity", termB: "Accountability" }, { termA: "Truth", termB: "Disinformation" }],
        taskV: ["Moderation", "Polarization", "Syndication", "Vulnerability", "Integrity"]
      }),
      createVariant(3, "Networking", {
        taskI: [
          { text: "Professional ________.", answer: "networking" },
          { text: "To ________.", answer: "connect" },
          { text: "To ________.", answer: "repost" },
          { text: "Internet ________.", answer: "ubiquity" },
          { text: "User ________.", answer: "multitude" },
          { text: "New ________.", answer: "adoption" },
          { text: "Need ________.", answer: "transparency" },
          { text: "App ________.", answer: "integration" },
          { text: "Feel ________.", answer: "connected" },
          { text: "Internet ________.", answer: "impact" },
          { text: "Profile ________.", answer: "customize" },
          { text: "Network ________.", answer: "reach" }
        ],
        taskII: [
          { term: "Interface", definition: "Device enabling user communication.", key: "a" },
          { term: "Bandwidth", definition: "Transmission capacity of network.", key: "b" },
          { term: "Latency", definition: "Delay before transfer begins.", key: "c" },
          { term: "Synchronous", definition: "Existing at same time.", key: "d" },
          { term: "Cloud", definition: "Remote servers hosted on internet.", key: "e" }
        ],
        taskIII: ["Global connectivity", "Professional profile", "User interface", "Real-time updates"],
        taskIV: [{ termA: "Active", termB: "Passive" }, { termA: "Broadcasting", termB: "Interaction" }],
        taskV: ["Interactivity", "Globalization", "Accessibility", "Convergence", "Standardization"]
      })
    ]
  },
  {
    id: "science",
    title: "THEME 14: SCIENCE",
    category: "Science",
    description: "Laboratory research and scientific breakthrough.",
    icon: "Cpu",
    variants: [
      createVariant(1, "Lab", {
        taskI: [
          { text: "New ________.", answer: "hypothesis" },
          { text: "Empirical ________.", answer: "data" },
          { text: "Detailed ________.", answer: "analysis" },
          { text: "Control ________.", answer: "variable" },
          { text: "Control ________.", answer: "group" },
          { text: "Paradigm ________.", answer: "shift" },
          { text: "Quantum ________.", answer: "physics" },
          { text: "Genetic ________.", answer: "mutation" },
          { text: "Genetic ________.", answer: "engineering" },
          { text: "Chemical ________.", answer: "catalyst" },
          { text: "Cell ________.", answer: "osmosis" },
          { text: "New ________.", answer: "synthesis" }
        ],
        taskII: [
          { term: "Titration", definition: "Technique to find concentration.", key: "a" },
          { term: "Centrifuge", definition: "Machine with rotating container.", key: "b" },
          { term: "Pipette", definition: "Tube for transferring liquid.", key: "c" },
          { term: "Crucible", definition: "Container for melting metal.", key: "d" },
          { term: "Solvent", definition: "Liquid in which solute dissolves.", key: "e" }
        ],
        taskIII: ["Scientific rigor", "Peer review", "Clinical trial", "Double-blind study"],
        taskIV: [{ termA: "Inductive", termB: "Deductive" }, { termA: "Falsifiable", termB: "Verifiable" }],
        taskV: ["Precision", "Accuracy", "Validity", "Reliability", "Replicability"]
      }),
      createVariant(2, "Theory", {
        taskI: [
          { text: "Theory of ________.", answer: "relativity" },
          { text: "Constant ________.", answer: "expansion" },
          { text: "Laws of ________.", answer: "thermodynamics" },
          { text: "Theory of ________.", answer: "evolution" },
          { text: "Gravitational ________.", answer: "forces" },
          { text: "Particle ________.", answer: "attraction" },
          { text: "Composed of ________.", answer: "particles" },
          { text: "Energy ________.", answer: "transformation" },
          { text: "Constant ________.", answer: "velocity" },
          { text: "Light ________.", answer: "reflection" },
          { text: "Light ________.", answer: "refraction" },
          { text: "Modern ________.", answer: "cosmology" }
        ],
        taskII: [
          { term: "Entropy", definition: "Quantity of thermal unavailability.", key: "a" },
          { term: "Inertia", definition: "Property of matter in rest.", key: "b" },
          { term: "Isotope", definition: "Forms of same element.", key: "c" },
          { term: "Fission", definition: "Dividing something into parts.", key: "d" },
          { term: "Fusion", definition: "Joining things together.", key: "e" }
        ],
        taskIII: ["String theory", "Black hole", "Event horizon", "Particle accelerator"],
        taskIV: [{ termA: "Fission", termB: "Fusion" }, { termA: "Potential", termB: "Kinetic" }],
        taskV: ["Momentum", "Friction", "Viscosity", "Convection", "Radiation"]
      }),
      createVariant(3, "Inno", {
        taskI: [
          { text: "Silicon ________.", answer: "chip" },
          { text: "Surgery ________.", answer: "robot" },
          { text: "Renewable ________.", answer: "energy" },
          { text: "High ________.", answer: "efficiency" },
          { text: "Digital ________.", answer: "transformation" },
          { text: "Software ________.", answer: "launch" },
          { text: "Expert in ________.", answer: "nanotechnology" },
          { text: "User ________.", answer: "design" },
          { text: "Advancement of ________.", answer: "AI" },
          { text: "Approach ________.", answer: "sustainable" },
          { text: "Several ________.", answer: "patents" },
          { text: "Company ________.", answer: "merger" }
        ],
        taskII: [
          { term: "Algorithm", definition: "Process for calculations.", key: "a" },
          { term: "Prototype", definition: "Typical model of something.", key: "b" },
          { term: "Automation", definition: "Use of automatic equipment.", key: "c" },
          { term: "Interoperability", definition: "Systems exchanging info.", key: "d" },
          { term: "Scalability", definition: "Capacity to be changed in size.", key: "e" }
        ],
        taskIII: ["Machine learning", "Smart home", "Internet of things", "Augmented reality"],
        taskIV: [{ termA: "Analog", termB: "Digital" }, { termA: "Hardware", termB: "Software" }],
        taskV: ["Bandwidth", "Connectivity", "Infrastructure", "Innovation", "Redundancy"]
      })
    ]
  },
  {
    id: "fashion",
    title: "THEME 15: FASHION",
    category: "Culture",
    description: "Industry trends.",
    icon: "User",
    variants: [
      createVariant(1, "Design", {
        taskI: [
          { text: "High-end ________.", answer: "couture" },
          { text: "Vintage ________.", answer: "clothing" },
          { text: "Walked down ________.", answer: "runway" },
          { text: "Dress ________.", answer: "textile" },
          { text: "Life-sized ________.", answer: "mannequin" },
          { text: "Coat ________.", answer: "silhouette" },
          { text: "Formal ________.", answer: "attire" },
          { text: "Bespoke ________.", answer: "suits" },
          { text: "Garment ________.", answer: "made" },
          { text: "Looked ________.", answer: "chic" },
          { text: "Current ________.", answer: "trend" },
          { text: "Sports ________.", answer: "apparel" }
        ],
        taskII: [
          { term: "Textile", definition: "Type of cloth or fabric.", key: "a" },
          { term: "Fabric", definition: "Material produced by weaving.", key: "b" },
          { term: "Tailor", definition: "Person making fitted clothes.", key: "c" },
          { term: "Embroidery", definition: "Art of embroidering cloth.", key: "d" },
          { term: "Haut couture", definition: "Expensive fashionable clothes.", key: "e" }
        ],
        taskIII: ["Fashion statement", "Ready-to-wear", "Brand identity", "Artistic direction"],
        taskIV: [{ termA: "Retail", termB: "Wholesale" }, { termA: "Casual", termB: "Formal" }],
        taskV: ["Aesthetic", "Accessory", "Catalogue", "Collection", "Runway"]
      }),
      createVariant(2, "Style", {
        taskI: [
          { text: "Vibrant ________.", answer: "colors" },
          { text: "Eclectic ________.", answer: "style" },
          { text: "Jewelry ________.", answer: "craftsmanship" },
          { text: "Minimalist ________.", answer: "look" },
          { text: "Shoes ________.", answer: "fit" },
          { text: "To ________.", answer: "elevate" },
          { text: "Fabric ________.", answer: "texture" },
          { text: "True ________.", answer: "trendsetter" },
          { text: "Dress ________.", answer: "pattern" },
          { text: "Silk ________.", answer: "tie" },
          { text: "Dress ________.", answer: "code" },
          { text: "Growing ________.", answer: "concern" }
        ],
        taskII: [
          { term: "Vogue", definition: "Prevailing fashion at time.", key: "a" },
          { term: "Dapper", definition: "Neat trim in appearance.", key: "b" },
          { term: "Gaudy", definition: "Extravagantly bright showy.", key: "c" },
          { term: "Somber", definition: "Dark dull in color.", key: "d" },
          { term: "Avant-garde", definition: "New unusual ideas.", key: "e" }
        ],
        taskIII: ["Wardrobe staples", "Mix and match", "Fast fashion", "Personal style"],
        taskIV: [{ termA: "Trendy", termB: "Timeless" }, { termA: "Synthetic", termB: "Natural" }],
        taskV: ["Attire", "Cosmetic", "Costume", "Garment", "Style"]
      }),
      createVariant(3, "Consumer", {
        taskI: [
          { text: "Flagship ________.", answer: "store" },
          { text: "Holiday ________.", answer: "discount" },
          { text: "Brand ________.", answer: "logo" },
          { text: "Consumer ________.", answer: "behavior" },
          { text: "Display ________.", answer: "window" },
          { text: "Fashion ________.", answer: "buyer" },
          { text: "Successful ________.", answer: "opening" },
          { text: "Social ________.", answer: "influencers" },
          { text: "Product ________.", answer: "packaging" },
          { text: "To ________.", answer: "return" },
          { text: "The ________.", answer: "mall" },
          { text: "Special ________.", answer: "points" }
        ],
        taskII: [
          { term: "Merchandise", definition: "Goods to be bought and sold.", key: "a" },
          { term: "Wholesale", definition: "Selling in large quantities.", key: "b" },
          { term: "Franchise", definition: "Authorization granted by gov.", key: "c" },
          { term: "Boutique", definition: "Small store selling clothes.", key: "d" },
          { term: "Consumerism", definition: "Promotion of consumer interests.", key: "e" }
        ],
        taskIII: ["Brand loyalty", "E-commerce", "High-street fashion", "Outlet store"],
        taskIV: [{ termA: "Luxury", termB: "Budget" }, { termA: "Department", termB: "Specialty" }],
        taskV: ["Commerce", "Inventory", "Logistics", "Purchasing", "Revenue"]
      })
    ]
  },
  {
    id: "relationships",
    title: "THEME 16: RELATIONSHIPS",
    category: "Lifestyle",
    description: "Social bonds.",
    icon: "Heart",
    variants: [
      createVariant(1, "Family", {
        taskI: [
          { text: "Maternal ________.", answer: "bonds" },
          { text: "Estranged ________.", answer: "since" },
          { text: "Sibling ________.", answer: "rivalry" },
          { text: "To ________.", answer: "nurture" },
          { text: "Unbreakable ________.", answer: "bond" },
          { text: "Strict ________.", answer: "upbringing" },
          { text: "Kindred ________.", answer: "spirits" },
          { text: "Displays of ________.", answer: "affection" },
          { text: "Couple ________.", answer: "reconciliation" },
          { text: "Nuclear ________.", answer: "household" },
          { text: "Relatives ________.", answer: "extended" },
          { text: "Mutual ________.", answer: "interest" }
        ],
        taskII: [
          { term: "Kinship", definition: "Blood relationship.", key: "a" },
          { term: "Rivalry", definition: "Competition for superiority.", key: "b" },
          { term: "Nurture", definition: "Encourage growth of child.", key: "c" },
          { term: "Estranged", definition: "No longer affectionate to one.", key: "d" },
          { term: "Bond", definition: "Relationship based on shared feelings.", key: "e" }
        ],
        taskIII: ["Sibling rivalry", "Nuclear family", "Blood is thicker than water", "Close-knit"],
        taskIV: [{ termA: "Biological", termB: "Adoptive" }, { termA: "Friendship", termB: "Romance" }],
        taskV: ["Ancestry", "Lineage", "Matriarch", "Patriarch", "Heritage"]
      }),
      createVariant(2, "Social", {
        taskI: [
          { text: "Networking ________.", answer: "opportunities" },
          { text: "Foundation of ________.", answer: "genuine" },
          { text: "Resolve ________.", answer: "differences" },
          { text: "Requires ________.", answer: "skills" },
          { text: "Values ________.", answer: "authenticity" },
          { text: "Maintaining ________.", answer: "contact" },
          { text: "Earn ________.", answer: "trust" },
          { text: "Connect with ________.", answer: "pain" },
          { text: "Common ________.", answer: "vision" },
          { text: "Peer ________.", answer: "pressure" },
          { text: "Sense of ________.", answer: "unity" },
          { text: "Social ________.", answer: "support" }
        ],
        taskII: [
          { term: "Interpersonal", definition: "Relationships between people.", key: "a" },
          { term: "Reciprocity", definition: "Exchanging for mutual benefit.", key: "b" },
          { term: "Altruism", definition: "Selfless concern for others.", key: "c" },
          { term: "Camaraderie", definition: "Mutual trust among people.", key: "d" },
          { term: "Affiliation", definition: "Process of affiliating org.", key: "e" }
        ],
        taskIII: ["Circle of friends", "Mutual acquaintance", "Networking event", "Social butterfly"],
        taskIV: [{ termA: "Acquaintance", termB: "Confidant" }, { termA: "Empathy", termB: "Sympathy" }],
        taskV: ["Solidarity", "Tolerance", "Vulnerability", "Diplomacy", "Rapport"]
      }),
      createVariant(3, "Modern", {
        taskI: [
          { text: "Rise of ________.", answer: "apps" },
          { text: "Digital ________.", answer: "ghosting" },
          { text: "Online ________.", answer: "personas" },
          { text: "Sense of ________.", answer: "isolation" },
          { text: "Maintain ________.", answer: "balance" },
          { text: "Virtual ________.", answer: "meetings" },
          { text: "Primary ________.", answer: "concern" },
          { text: "Rapid ________.", answer: "spread" },
          { text: "Impact on ________.", answer: "health" },
          { text: "Ethical ________.", answer: "use" },
          { text: "Enhance ________.", answer: "bonds" },
          { text: "Meaningful ________.", answer: "connections" }
        ],
        taskII: [
          { term: "Ghosting", definition: "Ending relationship by withdrawing.", key: "a" },
          { term: "Breadcrumbing", definition: "Sending flirtatious noncommittal messages.", key: "b" },
          { term: "Catfishing", definition: "Luring into relation by persona.", key: "c" },
          { term: "Gaslighting", definition: "Manipulating someone's sanity.", key: "d" },
          { term: "Networking", definition: "Process of interacting with others.", key: "e" }
        ],
        taskIII: ["Digital detox", "Online etiquette", "Long-distance", "Social media profile"],
        taskIV: [{ termA: "Synchronous", termB: "Asynchronous" }, { termA: "Public", termB: "Private" }],
        taskV: ["Ubiquity", "Anonymity", "Interactivity", "Platform", "Community"]
      })
    ]
  },
  {
    id: "sports",
    title: "THEME 17: SPORTS",
    category: "Leisure",
    description: "Athletics and physical health.",
    icon: "Smile",
    variants: [
      createVariant(1, "Edge", {
        taskI: [
          { text: "Physical ________.", answer: "endurance" },
          { text: "Remained ________.", answer: "undefeated" },
          { text: "To ________.", answer: "qualify" },
          { text: "Showing ________.", answer: "sportsmanship" },
          { text: "Game ________.", answer: "tactics" },
          { text: "To ________.", answer: "outperform" },
          { text: "Fierce ________.", answer: "rivalry" },
          { text: "Loud ________.", answer: "spectators" },
          { text: "Gold ________.", answer: "medal" },
          { text: "Track ________.", answer: "progress" },
          { text: "Build ________.", answer: "strength" },
          { text: "Fast ________.", answer: "tempo" }
        ],
        taskII: [
          { term: "Amateur", definition: "Person engaging on unpaid basis.", key: "a" },
          { term: "Professional", definition: "Person engaged in paid occupation.", key: "b" },
          { term: "Tactics", definition: "Carefully planned strategy.", key: "c" },
          { term: "Stamina", definition: "Ability to sustain effort.", key: "d" },
          { term: "Referee", definition: "Official watching game closely.", key: "e" }
        ],
        taskIII: ["Level playing field", "Keep fit", "Personal best", "Out of breath"],
        taskIV: [{ termA: "Individual", termB: "Team" }, { termA: "Offense", termB: "Defense" }],
        taskV: ["Athleticism", "Discipline", "Conditioning", "Agility", "Velocity"]
      }),
      createVariant(2, "Spirit", {
        taskI: [
          { text: "Mental ________.", answer: "toughness" },
          { text: "World ________.", answer: "record" },
          { text: "Full ________.", answer: "capacity" },
          { text: "Swim ________.", answer: "tryout" },
          { text: "Diet is ________.", answer: "essential" },
          { text: "Minor ________.", answer: "injury" },
          { text: "Final ________.", answer: "decision" },
          { text: "Analyze ________.", answer: "form" },
          { text: "Trophy ________.", answer: "pinnacle" },
          { text: "Training ________.", answer: "hard" },
          { text: "Successful ________.", answer: "season" },
          { text: "Losing ________.", answer: "humility" }
        ],
        taskII: [
          { term: "Marathon", definition: "Long-distance running race.", key: "a" },
          { term: "Gymnastics", definition: "Exercises developing agility.", key: "b" },
          { term: "Tournament", definition: "Series of contests.", key: "c" },
          { term: "Champion", definition: "Person who surpassed all rivals.", key: "d" },
          { term: "Coach", definition: "Person directing athlete.", key: "e" }
        ],
        taskIII: ["Training camp", "Sports injury", "Win by a landslide", "Break a record"],
        taskIV: [{ termA: "Sprint", termB: "Jog" }, { termA: "Victory", termB: "Defeat" }],
        taskV: ["Perseverance", "Coordination", "Dedication", "Consistency", "Endurance"]
      }),
      createVariant(3, "Fitness", {
        taskI: [
          { text: "Flexibility and ________.", answer: "balance" },
          { text: "Is ________.", answer: "crucial" },
          { text: "To the ________.", answer: "gym" },
          { text: "Vital to ________.", answer: "prevent" },
          { text: "Prefer ________.", answer: "aerobic" },
          { text: "A good ________.", answer: "routine" },
          { text: "Protein for ________.", answer: "growth" },
          { text: "Weight ________.", answer: "training" },
          { text: "Daily ________.", answer: "steps" },
          { text: "Cornerstone of ________.", answer: "plan" },
          { text: "Mental ________.", answer: "health" },
          { text: "Decided to ________.", answer: "run" }
        ],
        taskII: [
          { term: "Cardio", definition: "Exercise increasing heart rate.", key: "a" },
          { term: "Metabolism", definition: "Chemical processes in organism.", key: "b" },
          { term: "Flexibility", definition: "Quality of bending easily.", key: "c" },
          { term: "Nutrient", definition: "Substance providing nourishment.", key: "d" },
          { term: "Dehydration", definition: "Reduction in water in body.", key: "e" }
        ],
        taskIII: ["Healthy lifestyle", "Fitness tracker", "Personal trainer", "Muscle memory"],
        taskIV: [{ termA: "Aerobic", termB: "Anaerobic" }, { termA: "Strength", termB: "Agility" }],
        taskV: ["Conditioning", "Resilience", "Wellness", "Sustainability", "Intensity"]
      })
    ]
  },
  {
    id: "politics",
    title: "THEME 18: POLITICS",
    category: "Society",
    description: "Governance and policy.",
    icon: "Handshake",
    variants: [
      createVariant(1, "Elections", {
        taskI: [
          { text: "Issue ________.", answer: "referendum" },
          { text: "Party ________.", answer: "manifesto" },
          { text: "Stay in ________.", answer: "power" },
          { text: "Combat ________.", answer: "legislation" },
          { text: "Results ________.", answer: "electorate" },
          { text: "Accused of ________.", answer: "lobbying" },
          { text: "Complex ________.", answer: "bureaucracy" },
          { text: "President faced ________.", answer: "impeachment" },
          { text: "Rogue state ________.", answer: "sanctions" },
          { text: "Key to ________.", answer: "diplomacy" },
          { text: "Federal ________.", answer: "system" },
          { text: "The ________.", answer: "mayor" }
        ],
        taskII: [
          { term: "Democracy", definition: "Gov system by population.", key: "a" },
          { term: "Autocracy", definition: "Gov by one absolute person.", key: "b" },
          { term: "Bureaucracy", definition: "Gov with decisions by officials.", key: "c" },
          { term: "Manifesto", definition: "Public declaration of policy.", key: "d" },
          { term: "Sovereignty", definition: "Authority to govern itself.", key: "e" }
        ],
        taskIII: ["Foreign policy", "Political spectrum", "Grassroots movement", "Checks and balances"],
        taskIV: [{ termA: "Democracy", termB: "Dictatorship" }, { termA: "Liberal", termB: "Conservative" }],
        taskV: ["Suffrage", "Ratification", "Partisan", "Secularism", "Ideology"]
      }),
      createVariant(2, "Relations", {
        taskI: [
          { text: "Historic ________.", answer: "treaty" },
          { text: "Humanitarian ________.", answer: "aid" },
          { text: "Sensitive ________.", answer: "security" },
          { text: "Global ________.", answer: "effort" },
          { text: "Cut ________.", answer: "ties" },
          { text: "Promote ________.", answer: "stability" },
          { text: "Trade ________.", answer: "agreements" },
          { text: "Growing ________.", answer: "displacement" },
          { text: "New ________.", answer: "ambassador" },
          { text: "Economic ________.", answer: "cooperation" },
          { text: "Building ________.", answer: "trust" },
          { text: "Shift in ________.", answer: "balance" }
        ],
        taskII: [
          { term: "Diplomacy", definition: "Managing international relations.", key: "a" },
          { term: "Treaty", definition: "Ratified agreement between countries.", key: "b" },
          { term: "Embassy", definition: "Official office of ambassador.", key: "c" },
          { term: "Sanction", definition: "Penalty for disobeying law.", key: "d" },
          { term: "Alliance", definition: "Union for mutual benefit.", key: "e" }
        ],
        taskIII: ["International law", "Bilateral talks", "Global summit", "Peacekeeping mission"],
        taskIV: [{ termA: "Ally", termB: "Adversary" }, { termA: "Import", termB: "Export" }],
        taskV: ["Ratification", "Jurisdiction", "Neutrality", "Hegemony", "Embargo"]
      }),
      createVariant(3, "Society", {
        taskI: [
          { text: "Freedom of ________.", answer: "speech" },
          { text: "Gained ________.", answer: "momentum" },
          { text: "Seat in ________.", answer: "parliament" },
          { text: "Very ________.", answer: "opinion" },
          { text: "Healthy ________.", answer: "democracy" },
          { text: "Law was ________.", answer: "protest" },
          { text: "Democratic ________.", answer: "process" },
          { text: "Social ________.", answer: "justice" },
          { text: "Constitutional ________.", answer: "rule" },
          { text: "Major ________.", answer: "obstacle" },
          { text: "Leading ________.", answer: "governmental" },
          { text: "The ________.", answer: "rule" }
        ],
        taskII: [
          { term: "Activism", definition: "Action to bring change.", key: "a" },
          { term: "Constitution", definition: "Principles state is governed by.", key: "b" },
          { term: "Lobbyist", definition: "Person influencing legislators.", key: "c" },
          { term: "Parliament", definition: "Highest legislature body.", key: "d" },
          { term: "Electorate", definition: "People entitled to vote.", key: "e" }
        ],
        taskIII: ["Civil rights", "Political party", "Public service", "Voter turnout"],
        taskIV: [{ termA: "Candidate", termB: "Incumbent" }, { termA: "Federal", termB: "Local" }],
        taskV: ["Pluralism", "Secularism", "Advocacy", "Accountability", "Bureaucracy"]
      })
    ]
  },
  {
    id: "architecture",
    title: "THEME 19: ARCHITECTURE",
    category: "Society",
    description: "Built environment.",
    icon: "Briefcase",
    variants: [
      createVariant(1, "Environment", {
        taskI: [
          { text: "Final ________.", answer: "blueprint" },
          { text: "Structural ________.", answer: "integrity" },
          { text: "Modern ________.", answer: "aesthetic" },
          { text: "Massive ________.", answer: "skyscraper" },
          { text: "Urban ________.", answer: "sprawl" },
          { text: "The ________.", answer: "facade" },
          { text: "Growing ________.", answer: "affordable" },
          { text: "Focused on ________.", answer: "sustainable" },
          { text: "The ________.", answer: "exterior" },
          { text: "Modern ________.", answer: "dwellings" },
          { text: "Construction ________.", answer: "process" },
          { text: "The ________.", answer: "masonry" }
        ],
        taskII: [
          { term: "Facade", definition: "Principal front of building.", key: "a" },
          { term: "Column", definition: "Upright pillar of stone.", key: "b" },
          { term: "Foundation", definition: "Lowest part of building.", key: "c" },
          { term: "Aesthetic", definition: "Guiding principles of artist.", key: "d" },
          { term: "Infrastructure", definition: "Basic physical structures.", key: "e" }
        ],
        taskIII: ["Urban planning", "Historical landmark", "Structural engineering", "Zoning laws"],
        taskIV: [{ termA: "Interior", termB: "Exterior" }, { termA: "Modern", termB: "Gothic" }],
        taskV: ["Avenue", "Boulevard", "Dwelling", "Renovation", "Scaffolding"]
      }),
      createVariant(2, "Styles", {
        taskI: [
          { text: "Cathedral ________.", answer: "gothic" },
          { text: "Building ________.", answer: "design" },
          { text: "Ruins ________.", answer: "preserve" },
          { text: "Museum ________.", answer: "historical" },
          { text: "Classical ________.", answer: "architecture" },
          { text: "Defense ________.", answer: "wall" },
          { text: "Carried ________.", answer: "aqueduct" },
          { text: "Styles ________.", answer: "heritage" },
          { text: "Church ________.", answer: "ceiling" },
          { text: "Hidden ________.", answer: "chamber" },
          { text: "Residence ________.", answer: "royal" },
          { text: "Technology ________.", answer: "modern" }
        ],
        taskII: [
          { term: "Gothic", definition: "Western Europe style 12th-16th c.", key: "a" },
          { term: "Renaissance", definition: "Period between 14th and 17th c.", key: "b" },
          { term: "Baroque", definition: "Style 17th and 18th c.", key: "c" },
          { term: "Victorian", definition: "Reign of Queen Victoria.", key: "d" },
          { term: "Neoclassical", definition: "Revival of classical style.", key: "e" }
        ],
        taskIII: ["Ancient ruins", "Cultural heritage site", "Stained glass", "Architectural style"],
        taskIV: [{ termA: "Restoration", termB: "Demolition" }, { termA: "Traditional", termB: "Contemporary" }],
        taskV: ["Ornamentation", "Preservation", "Symmetry", "Hierarchy", "Authenticity"]
      }),
      createVariant(3, "Sustainable", {
        taskI: [
          { text: "Green ________.", answer: "roofs" },
          { text: "Clean ________.", answer: "energy" },
          { text: "Spaces ________.", answer: "pedestrian" },
          { text: "Reduces ________.", answer: "emissions" },
          { text: "Everyone ________.", answer: "facilities" },
          { text: "Haven ________.", answer: "biodiversity" },
          { text: "Library ________.", answer: "recycled" },
          { text: "Farming ________.", answer: "urban" },
          { text: "Carbon ________.", answer: "neutral" },
          { text: "Optimize ________.", answer: "technology" },
          { text: "Reduce ________.", answer: "reduce" },
          { text: "Conservation ________.", answer: "water" }
        ],
        taskII: [
          { term: "Sustainability", definition: "Ability to be maintained.", key: "a" },
          { term: "Biodiversity", definition: "Variety of life in world.", key: "b" },
          { term: "Sprawl", definition: "Expansion of urban area.", key: "c" },
          { term: "Infrastructure", definition: "Basic physical structures.", key: "d" },
          { term: "Walkability", definition: "Measure of friendly walking.", key: "e" }
        ],
        taskIII: ["Zero-waste city", "Eco-friendly design", "Urban regeneration", "Vertical forest"],
        taskIV: [{ termA: "Renewable", termB: "Finite" }, { termA: "Compact", termB: "Spread out" }],
        taskV: ["Resilience", "Equitability", "Density", "Integration", "Permeability"]
      })
    ]
  },
  {
    id: "ethics",
    title: "THEME 20: ETHICS",
    category: "Science",
    description: "Moral reasoning.",
    icon: "Brain",
    variants: [
      createVariant(1, "Dilemmas", {
        taskI: [
          { text: "Difficult ________.", answer: "dilemma" },
          { text: "Maintaining ________.", answer: "integrity" },
          { text: "Random ________.", answer: "altruism" },
          { text: "Guide ________.", answer: "conscience" },
          { text: "Every ________.", answer: "consequence" },
          { text: "Dependent ________.", answer: "subjective" },
          { text: "Need ________.", answer: "obligation" },
          { text: "Virtue ________.", answer: "virtue" },
          { text: "Premise ________.", answer: "premise" },
          { text: "Feeling ________.", answer: "dread" },
          { text: "Principles ________.", answer: "principles" },
          { text: "Impartial ________.", answer: "impartial" }
        ],
        taskII: [
          { term: "Logic", definition: "Reasoning by strict principles.", key: "a" },
          { term: "Ethics", definition: "Moral principles governing behavior.", key: "b" },
          { term: "Morality", definition: "Principles distinguishing right/wrong.", key: "c" },
          { term: "Altruism", definition: "Selfless concern for others.", key: "d" },
          { term: "Paradox", definition: "Self-contradictory statement.", key: "e" }
        ],
        taskIII: ["Moral compass", "Common good", "Ethical dilemma", "Free will"],
        taskIV: [{ termA: "Objective", termB: "Subjective" }, { termA: "Good", termB: "Evil" }],
        taskV: ["Axiom", "Cognition", "Determinism", "Nihilism", "Pragmatism"]
      }),
      createVariant(2, "Reality", {
        taskI: [
          { text: "Observation ________.", answer: "observation" },
          { text: " रियलिटी ________.", answer: "reality" },
          { text: "Reason ________.", answer: "reason" },
          { text: "Consciousness ________.", answer: "consciousness" },
          { text: "Pragmatic ________.", answer: "pragmatic" },
          { text: "Origin ________.", answer: "origin" },
          { text: "Existence ________.", answer: "meaning" },
          { text: "Arguments ________.", answer: "distinguish" },
          { text: "Soul ________.", answer: "immortality" },
          { text: "Challenge ________.", answer: "challenge" },
          { text: "Theory ________.", answer: "theory" },
          { text: "Information ________.", answer: "processing" }
        ],
        taskII: [
          { term: "Epistemology", definition: "Theory of knowledge methods.", key: "a" },
          { term: "Metaphysics", definition: "Branch dealing with first things.", key: "b" },
          { term: "Skepticism", definition: "Theory that knowledge is impossible.", key: "c" },
          { term: "Rationalism", definition: "Reason foundation of knowledge.", key: "d" },
          { term: "Empiricism", definition: "Knowledge derived from experience.", key: "e" }
        ],
        taskIII: ["Absolute truth", "Human nature", "Tabula rasa", "Thought experiment"],
        taskIV: [{ termA: "Physical", termB: "Metaphysical" }, { termA: "Finite", termB: "Infinite" }],
        taskV: ["Dualism", "Monism", "Syllogism", "Phenomenology", "Existentialism"]
      }),
      createVariant(3, "Existentialism", {
        taskI: [
          { text: "Absurdity ________.", answer: "absurdity" },
          { text: "Creating ________.", answer: "creating" },
          { text: "Deep ________.", answer: "solitude" },
          { text: "Subjective ________.", answer: "subjective" },
          { text: "Life ________.", answer: "path" },
          { text: "Discovery ________.", answer: "discovery" },
          { text: "Authentically ________.", answer: "authentically" },
          { text: "Heavy ________.", answer: "burden" },
          { text: "Peace ________.", answer: "peace" },
          { text: "Existence ________.", answer: "existence" },
          { text: "Accept ________.", answer: "accept" },
          { text: "Uncertainty ________.", answer: "uncertainty" }
        ],
        taskII: [
          { term: "Existentialism", definition: "Individual as responsible agent.", key: "a" },
          { term: "Absurdism", definition: "Human exist in chaotic universe.", key: "b" },
          { term: "Nihilism", definition: "Rejection of moral principles.", key: "c" },
          { term: "Authenticity", definition: "Quality of being authentic.", key: "d" },
          { term: "Solitude", definition: "Situation of being alone.", key: "e" }
        ],
        taskIII: ["Sense of self", "Existential crisis", "Free agency", "Leap of faith"],
        taskIV: [{ termA: "Being", termB: "Nothingness" }, { termA: "Essence", termB: "Existence" }],
        taskV: ["Aesthetics", "Anguish", "Duality", "Transcendent", "Immanence"]
      })
    ]
  }
];
