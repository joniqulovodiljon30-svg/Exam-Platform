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
    title: "THEME 1: THE MEDIA (PRINT & PRESS)",
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
          { term: "Tabloid", definition: "A newspaper with smaller pages and simpler style, often sensational.", key: "a" },
          { term: "Broadsheet", definition: "A serious newspaper using large sheets of paper.", key: "b" },
          { term: "Leaflet", definition: "A small piece of paper with information or advertising.", key: "c" },
          { term: "Journal", definition: "A publication dealing with a specific professional subject.", key: "d" },
          { term: "Pamphlet", definition: "A thin book with a paper cover and information on one topic.", key: "e" }
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
          { text: "The magazine is ________ every two weeks by the same house.", answer: "published" },
          { text: "They are ________ a new investigative piece on local politics.", answer: "running" },
          { text: "The story was ________ up by several national tabloids.", answer: "picked" },
          { text: "The journalist was ________ to get the exclusive interview.", answer: "struggling" },
          { text: "We need to ________ the facts before we go to print.", answer: "verify" },
          { text: "The scandal ________ public outrage across the country.", answer: "triggered" },
          { text: "The paper decided to ________ the controversial column.", answer: "retract" },
          { text: "He handles the ________ for the sports section.", answer: "copy" },
          { text: "The ________ of the magazine has increased this year.", answer: "readership" }
        ],
        taskII: [
          { term: "Feature", definition: "A long article about a particular person or subject.", key: "a" },
          { term: "Column", definition: "A regular section written by a specific person or expert.", key: "b" },
          { term: "Supplement", definition: "A separate part added to a newspaper, often on weekends.", key: "c" },
          { term: "Lead", definition: "The opening sentence or paragraph of a news story.", key: "d" },
          { term: "Byline", definition: "A line giving the name of the writer of an article.", key: "e" }
        ],
        taskIII: ["Run a story", "Gloss over", "Bring out", "Tune in"],
        taskIV: [{ termA: "Tabloid", termB: "Glossy" }, { termA: "Scoop", termB: "Exclusive" }],
        taskV: ["Libel", "Defamation", "Syndication", "Sensationalism", "Copywriter"]
      }),
      createVariant(3, "Journalistic Ethics", {
        taskI: [
          { text: "Media ________ can be a barrier to objective reporting.", answer: "bias" },
          { text: "Disinformation can easily ________ public opinion.", answer: "manipulate" },
          { text: "The ________ estate refers to the press as an influential power.", answer: "fourth" },
          { text: "Freedom of the ________ is a pillar of a free society.", answer: "press" },
          { text: "A media ________ owns multiple news outlets across the globe.", answer: "conglomerate" },
          { text: "They were accused of ________ a false narrative for clicks.", answer: "fabricating" },
          { text: "The ________ cycle is instantaneous in the digital age.", answer: "news" },
          { text: "Investigative ________ requires extensive research and risks.", answer: "journalism" },
          { text: "The ________ section often contains guest opinion pieces.", answer: "oped" },
          { text: "Clickbait is used to ________ web traffic for ads.", answer: "generate" },
          { text: "The ________ of information is now used as a political weapon.", answer: "flow" },
          { text: "News outlets must maintain ________ to stay credible.", answer: "integrity" }
        ],
        taskII: [
          { term: "Propaganda", definition: "Information used to promote a political cause or point of view.", key: "a" },
          { term: "Muckraker", definition: "A person who searches for and exposes real or alleged scandal.", key: "b" },
          { term: "Spin doctor", definition: "A spokesperson who gives a favorable interpretation of events.", key: "c" },
          { term: "Yellow journalism", definition: "Journalism based on sensationalism and crude exaggeration.", key: "d" },
          { term: "Sound bite", definition: "A short extract from a recorded interview chosen for its impact.", key: "e" }
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
          { text: "The patient made a ________ recovery after the operation.", answer: "speedy" },
          { text: "The doctor ________ a full course of antibiotics.", answer: "prescribed" },
          { text: "She was ________ with a mild infection this morning.", answer: "diagnosed" },
          { text: "You should ________ a specialist for that back pain.", answer: "consult" },
          { text: "The nurse ________ the medicine exactly at noon.", answer: "administered" },
          { text: "He had to ________ a simple procedure yesterday.", answer: "undergo" },
          { text: "The wound is starting to ________ nicely after the stitches.", answer: "heal" },
          { text: "Regular exercise helps ________ many chronic diseases.", answer: "prevent" },
          { text: "She is ________ from a severe bout of the flu.", answer: "recovering" },
          { text: "The medicine will ________ your symptoms within an hour.", answer: "relieve" },
          { text: "He was ________ from the hospital earlier today.", answer: "discharged" },
          { text: "Many people ________ from chronic seasonal allergies.", answer: "suffer" }
        ],
        taskII: [
          { term: "Symptom", definition: "A physical or mental feature indicating a condition.", key: "a" },
          { term: "Diagnosis", definition: "Identification of the nature of an illness by examination.", key: "b" },
          { term: "Prescription", definition: "An instruction written by a doctor for medicine.", key: "c" },
          { term: "Infection", definition: "The state of being infected by a microorganism.", key: "d" },
          { term: "Clinic", definition: "A place where patients are given medical treatment or advice.", key: "e" }
        ],
        taskIII: ["Run a temperature", "Catch a cold", "Blood pressure", "Pain relief"],
        taskIV: [{ termA: "Doctor", termB: "Nurse" }, { termA: "Surgery", termB: "Therapy" }],
        taskV: ["Pills", "Antibiotics", "Medication", "Immunity", "Hygiene"]
      }),
      createVariant(2, "Recovery Paths", {
        taskI: [
          { text: "It took him a month to ________ over the severe flu.", answer: "get" },
          { text: "She ________ down with a heavy cold after the rain.", answer: "came" },
          { text: "He ________ out after seeing the needles.", answer: "passed" },
          { text: "The doctor is trying to help her ________ off the infection.", answer: "fight" },
          { text: "She ________ round slowly after the heavy anesthesia.", answer: "came" },
          { text: "The old injury ________ up again last night.", answer: "flared" },
          { text: "He finally ________ through after the medical crisis.", answer: "pulled" },
          { text: "I think I'm ________ down with something today.", answer: "coming" },
          { text: "She ________ up a nasty virus at the playground.", answer: "picked" },
          { text: "The swelling should ________ down in a few days.", answer: "go" },
          { text: "The old man ________ away peacefully in his sleep.", answer: "passed" },
          { text: "The painkillers didn't ________ off for several hours.", answer: "wear" }
        ],
        taskII: [
          { term: "Prognosis", definition: "The likely course of a disease or ailment.", key: "a" },
          { term: "Remission", definition: "A temporary diminution of severity of disease.", key: "b" },
          { term: "Relapse", definition: "A deterioration in health after temporary improvement.", key: "c" },
          { term: "Chronic", definition: "Persisting for a long time or constantly recurring.", key: "d" },
          { term: "Acute", definition: "Present or experienced to a severe or intense degree.", key: "e" }
        ],
        taskIII: ["On the mend", "Under the weather", "Back on your feet", "Pick up a bug"],
        taskIV: [{ termA: "Inpatient", termB: "Outpatient" }, { termA: "Benign", termB: "Malignant" }],
        taskV: ["Convalescence", "Remedy", "Condition", "Fatigue", "Relapse"]
      }),
      createVariant(3, "Health Metaphors", {
        taskI: [
          { text: "Institutional corruption is a ________ on our society.", answer: "cancer" },
          { text: "The harsh economic crisis was a bitter ________ to swallow.", answer: "pill" },
          { text: "He has some deep emotional ________ from his past.", answer: "scars" },
          { text: "The city was ________ by fear during the emergency.", answer: "paralyzed" },
          { text: "They are only ________ the symptoms, not the cause.", answer: "treating" },
          { text: "The banking system is currently in a ________ condition.", answer: "critical" },
          { text: "The decision ________ out to be a fatal mistake.", answer: "turned" },
          { text: "She has a ________ block and cannot finish her novel.", answer: "mental" },
          { text: "Education is the only ________ to this social toxicity.", answer: "antidote" },
          { text: "The relationship has reached a ________ stage, unfortunately.", answer: "terminal" },
          { text: "The surgeon general is ________ on the new health policy.", answer: "operating" },
          { text: "The news was like a ________ of fresh air for the staff.", answer: "breath" }
        ],
        taskII: [
          { term: "Epidemiology", definition: "The study of how diseases spread and can be controlled.", key: "a" },
          { term: "Therapeutic", definition: "Relating to the healing of disease.", key: "b" },
          { term: "Pathogen", definition: "A bacterium, virus, or other microorganism causing disease.", key: "c" },
          { term: "Palliative", definition: "Relieving pain without dealing with the cause of the condition.", key: "d" },
          { term: "Placebo", definition: "A medicine with no physical effect, given for psychological benefit.", key: "e" }
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
          { text: "I need to ________ up my data to an external drive.", answer: "back" },
          { text: "You must ________ in with your secure username.", answer: "log" },
          { text: "The computer ________ when I tried to open the video.", answer: "froze" },
          { text: "He spends far too many hours ________ the internet.", answer: "surfing" },
          { text: "We need a more ________ Wi-Fi connection in this room.", answer: "stable" },
          { text: "This legacy app is ________ with my new phone.", answer: "incompatible" },
          { text: "The laptop is ________ by a high-end graphics card.", answer: "powered" },
          { text: "I accidentally ________ an important work email.", answer: "deleted" },
          { text: "They decided to ________ the system firmware.", answer: "upgrade" },
          { text: "We need to ________ the file to the shared drive.", answer: "upload" },
          { text: "The battery ________ quickly while recording 4K video.", answer: "drains" },
          { text: "I can't ________ to the network in this basement.", answer: "connect" }
        ],
        taskII: [
          { term: "Hardware", definition: "The physical components of a computer system.", key: "a" },
          { term: "Software", definition: "The programs and other operating info used by a computer.", key: "b" },
          { term: "Browser", definition: "A program used to navigate and view websites.", key: "c" },
          { term: "Server", definition: "A computer that manages access to a centralized resource.", key: "d" },
          { term: "Peripheral", definition: "Any auxiliary device that connects to a computer.", key: "e" }
        ],
        taskIII: ["External drive", "Social media", "Touch screen", "Cloud storage"],
        taskIV: [{ termA: "Desktop", termB: "Laptop" }, { termA: "Download", termB: "Upload" }],
        taskV: ["Gadget", "Connection", "System", "Device", "Storage"]
      }),
      createVariant(2, "Online Interaction", {
        taskI: [
          { text: "I'll help you ________ up the new laptop later.", answer: "set" },
          { text: "The system will ________ down automatically at midnight.", answer: "shut" },
          { text: "You need to ________ into your cloud account first.", answer: "sign" },
          { text: "The hackers managed to ________ in through an open port.", answer: "break" },
          { text: "I'll ________ up the document for the meeting.", answer: "bring" },
          { text: "Can you ________ in the printer for me?", answer: "plug" },
          { text: "The computer ________ off unexpectedly during the save.", answer: "went" },
          { text: "I need to ________ up my old local files.", answer: "clean" },
          { text: "He ________ down the job offer from the tech giant.", answer: "turned" },
          { text: "The battery ________ out in the middle of my game.", answer: "ran" },
          { text: "I'll ________ through the settings to fix it.", answer: "go" },
          { text: "They are ________ a new version of the OS soon.", answer: "bringing out" }
        ],
        taskII: [
          { term: "Firewall", definition: "A system designed to prevent unauthorized access to a network.", key: "a" },
          { term: "Encryption", definition: "The process of converting information into a secret code.", key: "b" },
          { term: "Algorithm", definition: "A set of rules to be followed in calculations by a computer.", key: "c" },
          { term: "Bandwidth", definition: "The capacity for data transfer of an electronic connection.", key: "d" },
          { term: "Interface", definition: "The way a user interacts with a computer program.", key: "e" }
        ],
        taskIII: ["Hack into", "Log off", "Print out", "Wipe out"],
        taskIV: [{ termA: "Search engine", termB: "Browser" }, { termA: "Hardware", termB: "Software" }],
        taskV: ["Automation", "Artificial", "Intelligence", "Database", "Bandwidth"]
      }),
      createVariant(3, "Societal Impact", {
        taskI: [
          { text: "AI is ________ the global workforce.", answer: "reshaping" },
          { text: "Digital ________ is a major ethical concern today.", answer: "privacy" },
          { text: "Technology can ________ feelings of social isolation.", answer: "exacerbate" },
          { text: "The ________ divide between generations is growing.", answer: "digital" },
          { text: "Automation ________ many traditional entry-level jobs.", answer: "threatens" },
          { text: "We are becoming overly ________ on gadgets for basic tasks.", answer: "reliant" },
          { text: "The ________ of information across devices is seamless.", answer: "integration" },
          { text: "Cyber ________ is now a national security priority.", answer: "warfare" },
          { text: "Social media algorithms can ________ misinformation.", answer: "amplify" },
          { text: "The ________ cycle is driven by engagement metrics.", answer: "news" },
          { text: "The ________ of new tech is historically rapid.", answer: "adoption" },
          { text: "We must ________ the ethical implications of AI.", answer: "address" }
        ],
        taskII: [
          { term: "Interoperability", definition: "The ability of computer systems to exchange information.", key: "a" },
          { term: "Sustainability", definition: "The ability to be maintained at a certain rate without harm.", key: "b" },
          { term: "Disruption", definition: "Disturbance which interrupts an event or process.", key: "c" },
          { term: "Innovation", definition: "The action or process of innovating a new method.", key: "d" },
          { term: "Paradigm", definition: "A typical example or pattern of something; a model.", key: "e" }
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
          { text: "He decided to ________ for a prestigious degree in Law.", answer: "read" },
          { text: "Students must ________ all their core lectures.", answer: "attend" },
          { text: "I need to ________ some thorough research for my project.", answer: "do" },
          { text: "The professor ________ an exceptionally inspiring lecture.", answer: "delivered" },
          { text: "You should ________ detailed notes during the class.", answer: "take" },
          { text: "He wants to ________ a career in pediatric medicine.", answer: "pursue" },
          { text: "I finally ________ my final paper this morning.", answer: "submitted" },
          { text: "The university ________ many merit-based scholarship options.", answer: "offers" },
          { text: "I hope to ________ a high grade in the midterm exam.", answer: "get" },
          { text: "She had to ________ for the missed lab seminar.", answer: "compensate" },
          { text: "You must ________ your sources correctly using APA style.", answer: "cite" },
          { text: "The school ________ a very strict attendance policy.", answer: "enforces" }
        ],
        taskII: [
          { term: "Curriculum", definition: "The subjects comprising a full course of study.", key: "a" },
          { term: "Syllabus", definition: "An outline or summary of the subjects in a specific course.", key: "b" },
          { term: "Tuition", definition: "Instruction given to a student or group.", key: "c" },
          { term: "Thesis", definition: "A long essay or dissertation involving personal research.", key: "d" },
          { term: "Faculty", definition: "A group of departments in a university or college.", key: "e" }
        ],
        taskIII: ["Academic record", "Rote learning", "Vocational training", "Higher education"],
        taskIV: [{ termA: "Sit an exam", termB: "Fail an exam" }, { termA: "Degree", termB: "Diploma" }],
        taskV: ["Seminar", "Lecture", "Assignment", "Literacy", "Scholarship"]
      }),
      createVariant(2, "Formal Education", {
        taskI: [
          { text: "They decided to ________ a wide-scale survey.", answer: "conduct" },
          { text: "She managed to ________ all her academic goals.", answer: "achieve" },
          { text: "The latest findings ________ our previous theory.", answer: "corroborate" },
          { text: "We need to ________ the qualitative data carefully.", answer: "examine" },
          { text: "The report ________ several important social issues.", answer: "highlights" },
          { text: "They were ________ to participate in the controlled study.", answer: "required" },
          { text: "The online course ________ of ten distinct modules.", answer: "consists" },
          { text: "He ________ from a top-tier university last spring.", answer: "graduated" },
          { text: "She ________ in English Literature and History.", answer: "majored" },
          { text: "The study ________ to show a link between diet and sleep.", answer: "aimed" },
          { text: "We must ________ the long-term impact of the changes.", answer: "assess" },
          { text: "The results were ________ in a peer-reviewed journal.", answer: "published" }
        ],
        taskII: [
          { term: "Pedagogy", definition: "The method and practice of teaching, especially as a subject.", key: "a" },
          { term: "Cognitive", definition: "Relating to the mental process of knowledge acquisition.", key: "b" },
          { term: "Didactic", definition: "Intended to teach, particularly in having moral instruction.", key: "c" },
          { term: "Literacy", definition: "The ability to read and write fluently.", key: "d" },
          { term: "Numeracy", definition: "The ability to understand and work with numbers.", key: "e" }
        ],
        taskIII: ["Conduct research", "Acquire knowledge", "Deliver a presentation", "Exceed expectations"],
        taskIV: [{ termA: "Qualitative", termB: "Quantitative" }, { termA: "Theory", termB: "Evidence" }],
        taskV: ["Plagiarism", "Assessment", "Criterion", "Methodology", "Synthesis"]
      }),
      createVariant(3, "Professional Skills", {
        taskI: [
          { text: "I have ________ several successful cross-team projects.", answer: "spearheaded" },
          { text: "She ________ a team of ten highly skilled people.", answer: "managed" },
          { text: "He ________ a significant increase in annual sales.", answer: "achieved" },
          { text: "I have ________ strong communication and leadership skills.", answer: "developed" },
          { text: "She ________ the new employee training program.", answer: "implemented" },
          { text: "He ________ the company's overall online presence.", answer: "enhanced" },
          { text: "I ________ the annual budget for the entire department.", answer: "oversaw" },
          { text: "She ________ closely with the creative design team.", answer: "collaborated" },
          { text: "He ________ a cost-effective solution to the problem.", answer: "devised" },
          { text: "I ________ with major clients on a daily basis.", answer: "negotiate" },
          { text: "She ________ the efficiency of the internal workflow.", answer: "improved" },
          { text: "He ________ his performance targets every single year.", answer: "surpassed" }
        ],
        taskII: [
          { term: "Competency", definition: "The ability to do something successfully or efficiently.", key: "a" },
          { term: "Objective", definition: "A thing aimed at or sought; a goal.", key: "b" },
          { term: "Credential", definition: "A qualification, achievement, or aspect of background.", key: "c" },
          { term: "Reference", definition: "A letter from a previous employer testifying to ability.", key: "d" },
          { term: "Internship", definition: "A period of work experience offered by an organization.", key: "e" }
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
    description: "Vocabulary related to the workplace, business terminology, and professional slang.",
    icon: "Briefcase",
    variants: [
      createVariant(1, "The Office Environment", {
        taskI: [
          { text: "I have to ________ several phone calls before lunch.", answer: "make" },
          { text: "She was ________ with the task of hiring new staff.", answer: "charged" },
          { text: "He decided to ________ in his resignation yesterday.", answer: "hand" },
          { text: "The company is ________ for a new general manager.", answer: "scouting" },
          { text: "We need to ________ a fair deal by this Friday.", answer: "strike" },
          { text: "I have an exceptionally heavy ________ this month.", answer: "workload" },
          { text: "The project is currently ________ schedule.", answer: "behind" },
          { text: "We must ________ the deadline at any cost.", answer: "meet" },
          { text: "She works in the ________ resources department.", answer: "human" },
          { text: "He was ________ redundant after the merger last week.", answer: "made" },
          { text: "The business is finally ________ a healthy profit.", answer: "turning" },
          { text: "I have to ________ the office early for an appointment.", answer: "leave" }
        ],
        taskII: [
          { term: "Blue-collar", definition: "Relating to manual work, typically in a factory.", key: "a" },
          { term: "White-collar", definition: "Relating to office work or clerical tasks.", key: "b" },
          { term: "Overhead", definition: "The general costs of running a business (rent, etc).", key: "c" },
          { term: "Turnover", definition: "The rate at which employees leave and are replaced.", key: "d" },
          { term: "Incentive", definition: "A thing that motivates or encourages someone.", key: "e" }
        ],
        taskIII: ["Take a break", "Meeting deadline", "Working hard", "Office job"],
        taskIV: [{ termA: "Manager", termB: "Employee" }, { termA: "Salary", termB: "Wage" }],
        taskV: ["Profit", "Loss", "Contract", "Promotion", "Staff"]
      }),
      createVariant(2, "Business Strategy", {
        taskI: [
          { text: "I'll ________ up with you later to discuss the plan.", answer: "catch" },
          { text: "The morning meeting was ________ off due to rain.", answer: "called" },
          { text: "We need to ________ through the finer details again.", answer: "go" },
          { text: "He ________ down the offer because the pay was low.", answer: "turned" },
          { text: "She ________ on too much work and is now stressed.", answer: "took" },
          { text: "They are ________ out a new plan for the department.", answer: "bringing" },
          { text: "I need to ________ down the cost of materials.", answer: "keep" },
          { text: "The deal ________ through at the very last minute.", answer: "fell" },
          { text: "He ________ up for the board meeting quite late.", answer: "showed" },
          { text: "We should ________ out a permanent solution.", answer: "find" },
          { text: "I'll ________ into the matter as soon as possible.", answer: "look" },
          { text: "They ________ up the parent company last year.", answer: "set" }
        ],
        taskII: [
          { term: "Stakeholder", definition: "A person with an interest or concern in a business.", key: "a" },
          { term: "Revenue", definition: "The total income generated by a company.", key: "b" },
          { term: "Asset", definition: "A useful or valuable thing, person, or quality.", key: "c" },
          { term: "Liability", definition: "The state of being responsible for something by law.", key: "d" },
          { term: "Capital", definition: "Wealth in the form of money or other assets owned.", key: "e" }
        ],
        taskIII: ["Touch base", "Keep in the loop", "Go the extra mile", "Think outside the box"],
        taskIV: [{ termA: "Hire", termB: "Fire" }, { termA: "Asset", termB: "Liability" }],
        taskV: ["Dividend", "Acquisition", "Strategy", "Liabilities", "Investment"]
      }),
      createVariant(3, "Modern Slang", {
        taskI: [
          { text: "We need to hit the ________ running on this project.", answer: "ground" },
          { text: "It's a ________ situation for every party involved.", answer: "win-win" },
          { text: "The ________ line is what matters most for the board.", answer: "bottom" },
          { text: "Let's ________ out of the box to solve this issue.", answer: "think" },
          { text: "He's ________ the midnight oil again to finish the report.", answer: "burning" },
          { text: "We all need to ________ the corporate ladder to succeed.", answer: "climb" },
          { text: "It's a dog-________-dog world in high finance.", answer: "eat" },
          { text: "He's a ________ of all trades but master of none.", answer: "jack" },
          { text: "We need to ________ some fresh blood to stay innovative.", answer: "bring in" },
          { text: "It was a real ________-up call for the management.", answer: "wake" },
          { text: "They are all ________ for a piece of the pie.", answer: "fighting" },
          { text: "There is a ________ on the horizon for the economy.", answer: "cloud" }
        ],
        taskII: [
          { term: "Leverage", definition: "The power to influence a person or situation.", key: "a" },
          { term: "Synergy", definition: "The interaction of two organizations to produce a combined effect.", key: "b" },
          { term: "Sustainability", definition: "The ability to be maintained at a certain rate.", key: "c" },
          { term: "Infrastructure", definition: "Basic physical and organizational structures needed.", key: "d" },
          { term: "Benchmarking", definition: "Evaluating something by comparison with a standard.", key: "e" }
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
    description: "Legal terminology, judicial procedures, and crime-related vocabulary.",
    icon: "Gavel",
    variants: [
      createVariant(1, "Judicial Process", {
        taskI: [
          { text: "The jury reached a unanimous ________ after ten hours.", answer: "verdict" },
          { text: "The witness was called to ________ under oath.", answer: "testify" },
          { text: "Critical DNA ________ linked the suspect to the scene.", answer: "evidence" },
          { text: "He was accused of being an ________ in the bank robbery.", answer: "accomplice" },
          { text: "Harsh punishments act as a ________ for future crimes.", answer: "deterrent" },
          { text: "The state decided to ________ the CEO for fraud.", answer: "prosecute" },
          { text: "A ________ is a more serious crime than a misdemeanor.", answer: "felony" },
          { text: "The ________ of the innocent man was a relief to all.", answer: "acquittal" },
          { text: "High-profile lawsuits often result in lengthy ________.", answer: "litigation" },
          { text: "The ________ presided over the local county court.", answer: "magistrate" },
          { text: "Modern detectives rely heavily on ________ analysis.", answer: "forensic" },
          { text: "The judge handed down a maximum ________ of ten years.", answer: "sentence" }
        ],
        taskII: [
          { term: "Indictment", definition: "A formal charge or accusation of a serious crime.", key: "a" },
          { term: "Perjury", definition: "The offense of willfully telling an untruth in court.", key: "b" },
          { term: "Subpoena", definition: "A writ ordering a person to attend a court.", key: "c" },
          { term: "Defendant", definition: "An individual sued or accused in a court of law.", key: "d" },
          { term: "Plaintiff", definition: "A person who brings a case against another in court.", key: "e" }
        ],
        taskIII: ["Beyond reasonable doubt", "Mitigating circumstances", "Contempt of court", "Capital punishment"],
        taskIV: [{ termA: "Solicitor", termB: "Barrister" }, { termA: "Civil law", termB: "Criminal law" }],
        taskV: ["Jurisdiction", "Habeas corpus", "Amnesty", "Culpability", "Precedent"]
      }),
      createVariant(2, "Crime and Punishment", {
        taskI: [
          { text: "They were caught ________ with the company's funds.", answer: "embezzling" },
          { text: "The prisoner was granted ________ by the governor.", answer: "clemency" },
          { text: "He was issued a ________ to appear for jury duty.", answer: "summons" },
          { text: "The lawyer prepared to ________ the expert witness.", answer: "cross-examine" },
          { text: "The court issued an ________ to stop the construction.", answer: "injunction" },
          { text: "The suspect was held in ________ until the trial.", answer: "custody" },
          { text: "He committed ________ by lying about his whereabouts.", answer: "perjury" },
          { text: "The ________ between the parties failed last night.", answer: "mediation" },
          { text: "His legal ________ cost him thousands of dollars.", answer: "fees" },
          { text: "A ________ is a lawyer who represents clients in court.", answer: "barrister" },
          { text: "The police had a ________ to search the premises.", answer: "warrant" },
          { text: "He was found ________ of second-degree murder.", answer: "guilty" }
        ],
        taskII: [
          { term: "Libel", definition: "A published false statement that is damaging to a person.", key: "a" },
          { term: "Slander", definition: "The action of making a false spoken statement damaging to a person.", key: "b" },
          { term: "Larceny", definition: "Theft of personal property.", key: "c" },
          { term: "Arson", definition: "The criminal act of deliberately setting fire to property.", key: "d" },
          { term: "Battery", definition: "The physical act of hitting someone.", key: "e" }
        ],
        taskIII: ["Serve a sentence", "Out of court settlement", "Plead guilty", "Burden of proof"],
        taskIV: [{ termA: "Theft", termB: "Robbery" }, { termA: "Burglary", termB: "Shoplifting" }],
        taskV: ["Rehabilitation", "Retribution", "Exoneration", "Extradition", "Incarceration"]
      }),
      createVariant(3, "Global Justice", {
        taskI: [
          { text: "The UN called for ________ of the political prisoners.", answer: "amnesty" },
          { text: "The ________ of suspects can be a complex treaty process.", answer: "extradition" },
          { text: "The court had no ________ over international waters.", answer: "jurisdiction" },
          { text: "The grand jury decided to ________ the senator.", answer: "indict" },
          { text: "The execution was delayed by a last-minute ________.", answer: "reprieve" },
          { text: "Modern ________ systems monitor city streets 24/7.", answer: "surveillance" },
          { text: "The prison ________ was responsible for the facility.", answer: "warden" },
          { text: "The ________ acted outside the law to seek revenge.", answer: "vigilante" },
          { text: "Speeding is usually considered a minor ________.", answer: "misdemeanor" },
          { text: "The victim's family sought ________ through the law.", answer: "redress" },
          { text: "International ________ is governed by various treaties.", answer: "arbitration" },
          { text: "The ________ arrested the suspect in the park.", answer: "constable" }
        ],
        taskII: [
          { term: "Tribunal", definition: "A court of justice or some other person with power.", key: "a" },
          { term: "Statute", definition: "A written law passed by a legislative body.", key: "b" },
          { term: "Codex", definition: "An ancient manuscript text in book form.", key: "c" },
          { term: "Protocol", definition: "The official procedure or system of rules governing affairs.", key: "d" },
          { term: "Diplomatic immunity", definition: "The privilege of exemption from certain laws for diplomats.", key: "e" }
        ],
        taskIII: ["Rule of law", "Conflict of interest", "Due process", "Human rights violation"],
        taskIV: [{ termA: "Justice", termB: "Equity" }, { termA: "Law", termB: "Ethics" }],
        taskV: ["Sovereignty", "Treaty", "Sanction", "Ratification", "Nullification"]
      })
    ]
  },
  {
    id: "nature",
    title: "THEME 7: THE ENVIRONMENT AND NATURE",
    category: "Science",
    description: "Ecological concepts, climate change, and conservation vocabulary.",
    icon: "Leaf",
    variants: [
      createVariant(1, "Ecology and Climate", {
        taskI: [
          { text: "The ________ protects us from harmful UV radiation.", answer: "ozone" },
          { text: "Carbon ________ are at an all-time high globally.", answer: "emissions" },
          { text: "Water in the ________ pond became dangerous to drink.", answer: "stagnant" },
          { text: "We must switch to ________ energy sources immediately.", answer: "renewable" },
          { text: "Plastic that isn't ________ persists for centuries.", answer: "biodegradable" },
          { text: "The local ________ was disrupted by the oil spill.", answer: "ecosystem" },
          { text: "Illegal ________ is destroying the Amazon rainforest.", answer: "deforestation" },
          { text: "Many species are losing their natural ________ to urban sprawl.", answer: "habitat" },
          { text: "The prolonged ________ led to a severe crop failure.", answer: "drought" },
          { text: "Rising temperatures cause the ________ to melt rapidly.", answer: "glaciers" },
          { text: "Wildlife ________ is the primary goal of the park.", answer: "preservation" },
          { text: "The ________ includes all living organisms on Earth.", answer: "biosphere" }
        ],
        taskII: [
          { term: "Atmosphere", definition: "The envelope of gases surrounding the earth or another planet.", key: "a" },
          { term: "Toxicity", definition: "The quality of being toxic or poisonous.", key: "b" },
          { term: "Sustainability", definition: "The ability to be maintained at a certain rate or level.", key: "c" },
          { term: "Pollutant", definition: "A substance that pollutes something, especially water or the atmosphere.", key: "d" },
          { term: "Condensation", definition: "Water which collects as droplets on a cold surface.", key: "e" }
        ],
        taskIII: ["Carbon footprint", "Global warming", "Natural resources", "Renewable energy"],
        taskIV: [{ termA: "Conservation", termB: "Preservation" }, { termA: "Climate", termB: "Weather" }],
        taskV: ["Precipitation", "Biodiversity", "Permaculture", "Greenhouse effect", "Aquifer"]
      }),
      createVariant(2, "Agriculture and Resources", {
        taskI: [
          { text: "They used ________ energy to heat the entire town.", answer: "geothermal" },
          { text: "Living a ________ lifestyle requires conscious choices.", answer: "sustainable" },
          { text: "The hurricane was a natural ________ for the island.", answer: "catastrophe" },
          { text: "Farmers rely on ________ systems during dry spells.", answer: "irrigation" },
          { text: "The island serves as a ________ for migrating birds.", answer: "sanctuary" },
          { text: "Excessive ________ use can harm local bee populations.", answer: "pesticide" },
          { text: "Organic waste shouldn't end up in the ________.", answer: "landfill" },
          { text: "The ________ of the soil led to poor harvests.", answer: "depletion" },
          { text: "The autumn ________ was smaller than expected.", answer: "harvest" },
          { text: "Climate change is hitting the ________ regions hardest.", answer: "arctic" },
          { text: "She prefers buying ________ produce at the market.", answer: "organic" },
          { text: "The forest ________ was a major local news story.", answer: "preservation" }
        ],
        taskII: [
          { term: "Compost", definition: "Decayed organic material used as a plant fertilizer.", key: "a" },
          { term: "Hydroponics", definition: "The process of growing plants in sand, gravel, or liquid.", key: "b" },
          { term: "Monoculture", definition: "The cultivation of a single crop in a given area.", key: "c" },
          { term: "Erosion", definition: "The process of eroding or being eroded by wind or water.", key: "d" },
          { term: "Sediment", definition: "Matter that settles to the bottom of a liquid.", key: "e" }
        ],
        taskIII: ["Intensive farming", "Organic fertilizer", "Water scarcity", "Soil fertility"],
        taskIV: [{ termA: "Flora", termB: "Fauna" }, { termA: "Herbicide", termB: "Pesticide" }],
        taskV: ["Salination", "Afforestation", "Topography", "Urbanization", "Desalination"]
      }),
      createVariant(3, "Environmental Disasters", {
        taskI: [
          { text: "The city's ________ levels reached a critical low.", answer: "reservoir" },
          { text: "Plants grow differently at high ________.", answer: "altitudes" },
          { text: "Heavy rain caused severe ________ on the hillside.", answer: "erosion" },
          { text: "We use a ________ bin for all our food scraps.", answer: "compost" },
          { text: "A ________ downpour flooded the city streets.", answer: "torrential" },
          { text: "Water ________ plants are vital for public health.", answer: "purification" },
          { text: "The ________ gases trap heat in the atmosphere.", answer: "greenhouse" },
          { text: "Marine ________ is the study of sea organisms.", answer: "ecology" },
          { text: "The local ________ includes several rare bird species.", answer: "fauna" },
          { text: "Alpine ________ is adapted to extreme cold.", answer: "flora" },
          { text: "River ________ can block navigation over time.", answer: "sediment" },
          { text: "Illegal ________ is a threat to the rhino population.", answer: "poaching" }
        ],
        taskII: [
          { term: "Tsunami", definition: "A long high sea wave caused by an earthquake.", key: "a" },
          { term: "Tremor", definition: "An involuntary quivering movement; a slight earthquake.", key: "b" },
          { term: "Avalanche", definition: "A mass of snow, ice, and rocks falling rapidly down a mountainside.", key: "c" },
          { term: "Aftershock", definition: "A smaller earthquake following the main shock.", key: "d" },
          { term: "Epicenter", definition: "The point on the earth's surface vertically above the focus of an earthquake.", key: "e" }
        ],
        taskIII: ["Oil spill", "Toxic waste", "Acid rain", "Nuclear fallout"],
        taskIV: [{ termA: "Endangered", termB: "Extinct" }, { termA: "Wild", termB: "Domesticated" }],
        taskV: ["Metamorphism", "Seismology", "Vulnerability", "Resilience", "Displacement"]
      })
    ]
  },
  {
    id: "travel",
    title: "THEME 8: TRAVEL AND TOURISM",
    category: "Leisure",
    description: "Vocabulary for tourism, hospitality, transport, and global travel.",
    icon: "Plane",
    variants: [
      createVariant(1, "The Traveler's Path", {
        taskI: [
          { text: "I carefully planned our ten-day ________ for Europe.", answer: "itinerary" },
          { text: "Paris remains a top ________ for honeymooners.", answer: "destination" },
          { text: "Our flight was delayed, so we missed our ________.", answer: "transit" },
          { text: "The country is known for its incredible ________.", answer: "hospitality" },
          { text: "We waited for three hours at the airport ________.", answer: "terminal" },
          { text: "Passengers must ________ the ship before noon.", answer: "embark" },
          { text: "We took a day ________ to see the ancient ruins.", answer: "excursion" },
          { text: "He spent a year as a ________ in South America.", answer: "backpacker" },
          { text: "I bought a small ________ to remember the trip.", answer: "souvenir" },
          { text: "The hotel ________ helped us book dinner tickets.", answer: "concierge" },
          { text: "We had a long ________ in Dubai on our way home.", answer: "layover" },
          { text: "The ________ process was quick and efficient.", answer: "embarkation" }
        ],
        taskII: [
          { term: "Customs", definition: "The place at a port or airport where officials check goods.", key: "a" },
          { term: "Immigration", definition: "The place at an airport where government officials check passports.", key: "b" },
          { term: "Jet lag", definition: "Extreme tiredness felt by a person after a long flight across time zones.", key: "c" },
          { term: "Voucher", definition: "A small printed piece of paper that entitles the holder to a discount.", key: "d" },
          { term: "Brochure", definition: "A small book or magazine containing pictures and information about a product.", key: "e" }
        ],
        taskIII: ["Package holiday", "Off the beaten track", "Travel insurance", "Sightseeing tour"],
        taskIV: [{ termA: "Tourist", termB: "Traveler" }, { termA: "Hotel", termB: "Hostel" }],
        taskV: ["Visa", "Check-in", "Boarding pass", "Expedition", "Pilgrimage"]
      }),
      createVariant(2, "Descriptive Travel", {
        taskI: [
          { text: "The mountains provided a ________ backdrop for photos.", answer: "majestic" },
          { text: "We enjoyed a ________ view of the city from the tower.", answer: "panoramic" },
          { text: "The cabin had a ________ and cozy atmosphere.", answer: "rustic" },
          { text: "The ________ drive through the valley was breath-taking.", answer: "scenic" },
          { text: "They live in a ________ village in the Himalayas.", answer: "remote" },
          { text: "Barcelona is a ________ and colorful city.", answer: "vibrant" },
          { text: "The beach was ________ with white sand and clear water.", answer: "pristine" },
          { text: "I've always wanted to visit ________ locations like Bali.", answer: "exotic" },
          { text: "The ________ market was full of noise and smells.", answer: "bustling" },
          { text: "We spent a ________ afternoon by the quiet lake.", answer: "tranquil" },
          { text: "The town has many ________ little streets to explore.", answer: "quaint" },
          { text: "The city has immense ________ significance.", answer: "historical" }
        ],
        taskII: [
          { term: "Landmark", definition: "An object or feature of a landscape that is easily seen from a distance.", key: "a" },
          { term: "Heritage", definition: "Property that is or may be inherited; an inheritance.", key: "b" },
          { term: "Metropolis", definition: "The capital or chief city of a country or region.", key: "c" },
          { term: "Hamlet", definition: "A small settlement, generally one smaller than a village.", key: "d" },
          { term: "Citadel", definition: "A fortress, typically one on high ground above a city.", key: "e" }
        ],
        taskIII: ["Breathtaking scenery", "Local cuisine", "Hospitality industry", "Untouched nature"],
        taskIV: [{ termA: "Voyage", termB: "Journey" }, { termA: "Trip", termB: "Tour" }],
        taskV: ["Stupendous", "Ethereal", "Serendipity", "Wanderlust", "Globetrotter"]
      }),
      createVariant(3, "Impact and Infrastructure", {
        taskI: [
          { text: "The rise of ________ helps protect local wildlife.", answer: "ecotourism" },
          { text: "Cultural ________ is a side effect of mass travel.", answer: "globalization" },
          { text: "The city needs better ________ to handle more tourists.", answer: "infrastructure" },
          { text: "The resort offers every ________ you could imagine.", answer: "amenity" },
          { text: "A ________ deal often includes flights and hotel.", answer: "package" },
          { text: "You must apply for a ________ before visiting China.", answer: "visa" },
          { text: "I need to exchange some ________ at the bank.", answer: "currency" },
          { text: "They went through ________ without any issues.", answer: "customs" },
          { text: "UNESCO protects sites of universal ________.", answer: "heritage" },
          { text: "The long ________ across the Atlantic was rough.", answer: "voyage" },
          { text: "We decided to book a luxury ________ for our anniversary.", answer: "cruise" },
          { text: "The ________ lifestyle isn't for everyone.", answer: "nomadic" }
        ],
        taskII: [
          { term: "Over-tourism", definition: "The phenomenon of excessive numbers of tourists visiting a place.", key: "a" },
          { term: "Gentrification", definition: "The process of changing the character of a neighborhood.", key: "b" },
          { term: "Displacement", definition: "The moving of something from its place or position.", key: "c" },
          { term: "Monetization", definition: "The action or process of earning revenue from an asset.", key: "d" },
          { term: "Authenticity", definition: "The quality of being authentic.", key: "e" }
        ],
        taskIII: ["Sustainable tourism", "Cultural heritage", "Economic impact", "High season"],
        taskIV: [{ termA: "Inbound", termB: "Outbound" }, { termA: "Domestic", termB: "International" }],
        taskV: ["Revenue", "Accessibility", "Saturation", "Degradation", "Seasonality"]
      })
    ]
  },
  {
    id: "food",
    title: "THEME 9: FOOD AND NUTRITION",
    category: "Lifestyle",
    description: "Culinary terminology, nutrition science, and kitchen collocations.",
    icon: "Utensils",
    variants: [
      createVariant(1, "Culinary Techniques", {
        taskI: [
          { text: "You should ________ the sauce over a low heat to thicken it.", answer: "simmer" },
          { text: "Add a sprig of parsley to ________ the dish before serving.", answer: "garnish" },
          { text: "It's best to ________ the steak in wine and herbs overnight.", answer: "marinate" },
          { text: "The chef began to ________ the onions until they were translucent.", answer: "sauté" },
          { text: "Use a grater to add some lemon ________ to the cake batter.", answer: "zest" },
          { text: "You need to ________ the egg whites until they form stiff peaks.", answer: "whisk" },
          { text: "It takes effort to ________ the dough by hand for ten minutes.", answer: "knead" },
          { text: "You should ________ the vegetables briefly then plunge them in ice.", answer: "blanch" },
          { text: "The tough cut of meat is best if you ________ it slowly.", answer: "braise" },
          { text: "He learned how to ________ eggs in gently boiling water.", answer: "poach" },
          { text: "Use a sharp knife to ________ the garlic into tiny pieces.", answer: "mince" },
          { text: "The recipe asks you to ________ the carrots into matchsticks.", answer: "julienne" }
        ],
        taskII: [
          { term: "Sauté", definition: "Fried quickly in a little hot fat.", key: "a" },
          { term: "Blanch", definition: "To scald or parboil in water or steam.", key: "b" },
          { term: "Infuse", definition: "To soak in liquid to extract the flavor or properties.", key: "c" },
          { term: "Glaze", definition: "A thin liquid coating applied to food to give it a shiny surface.", key: "d" },
          { term: "Zest", definition: "The outer colored part of the peel of citrus fruit.", key: "e" }
        ],
        taskIII: ["Culinary excellence", "Staple food", "Balanced diet", "Nutritional value"],
        taskIV: [{ termA: "Roasting", termB: "Grilling" }, { termA: "Baking", termB: "Braising" }],
        taskV: ["Gourmet", "Appetizer", "Delicacy", "Seasoning", "Ingredients"]
      }),
      createVariant(2, "Nutrition and Health", {
        taskI: [
          { text: "Reducing your intake of ________ can help with weight loss.", answer: "calories" },
          { text: "Exercise is known to boost your ________ significantly.", answer: "metabolism" },
          { text: "Lean meat is an excellent source of high-quality ________.", answer: "protein" },
          { text: "Simple ________ provide a quick energy boost but fade fast.", answer: "carbohydrates" },
          { text: "Leafy greens are packed with essential ________ and minerals.", answer: "vitamins" },
          { text: "A lack of certain ________ can lead to deficiency diseases.", answer: "minerals" },
          { text: "Whole grains are much higher in ________ than white bread.", answer: "fibre" },
          { text: "Drinking enough water is vital for proper ________.", answer: "hydration" },
          { text: "Berries are full of ________ that protect your cells.", answer: "antioxidants" },
          { text: "The body needs a variety of ________ to function well.", answer: "nutrients" },
          { text: "Eating too much saturated fat can raise your ________.", answer: "cholesterol" },
          { text: "Some people take daily ________ to improve their health.", answer: "supplements" }
        ],
        taskII: [
          { term: "Carbohydrate", definition: "Any of a large group of organic compounds occurring in foods.", key: "a" },
          { term: "Antioxidant", definition: "A substance that inhibits oxidation.", key: "b" },
          { term: "Metabolism", definition: "The chemical processes that occur within a living organism.", key: "c" },
          { term: "Fiber", definition: "Dietary material containing substances such as cellulose.", key: "d" },
          { term: "Calorie", definition: "A unit of energy often used to measure food energy.", key: "e" }
        ],
        taskIII: ["Dietary requirements", "Vitamins and minerals", "Calorie deficit", "Processed food"],
        taskIV: [{ termA: "Saturated fat", termB: "Unsaturated fat" }, { termA: "Vegan", termB: "Vegetarian" }],
        taskV: ["Glucose", "Digestion", "Amino acid", "Probiotic", "Lactose"]
      }),
      createVariant(3, "The Food Industry", {
        taskI: [
          { text: "The ________ was served before the main course arrived.", answer: "appetizer" },
          { text: "The royal family hosted a grand ________ for the visitors.", answer: "banquet" },
          { text: "The hotel serves a huge ________ breakfast every morning.", answer: "buffet" },
          { text: "He is a ________ chef with three Michelin stars.", answer: "gourmet" },
          { text: "Truffles are considered a rare and expensive ________.", answer: "delicacy" },
          { text: "Always check the ________ label for potential allergens.", answer: "ingredients" },
          { text: "Thai ________ is famous for its bold and spicy flavors.", answer: "cuisine" },
          { text: "The waiter brought a large ________ of roasted meats.", answer: "platter" },
          { text: "I found an old family ________ for apple pie.", answer: "recipe" },
          { text: "Salt and pepper are the most common forms of ________.", answer: "seasoning" },
          { text: "The formal table was set with expensive ________.", answer: "silverware" },
          { text: "The ________ recommended a white wine for the fish.", answer: "sommelier" }
        ],
        taskII: [
          { term: "Gastronomy", definition: "The practice or art of choosing, cooking, and eating good food.", key: "a" },
          { term: "A la carte", definition: "Referring to food that can be ordered as separate items.", key: "b" },
          { term: "Maitre d'", definition: "The head waiter of a restaurant.", key: "c" },
          { term: "Confectionery", definition: "Sweets and chocolates considered collectively.", key: "d" },
          { term: "Vintage", definition: "The year or place in which wine, especially high quality, was produced.", key: "e" }
        ],
        taskIII: ["Fine dining", "Street food", "Farm-to-table", "Hospitality management"],
        taskIV: [{ termA: "Buffet", termB: "Set menu" }, { termA: "Waitstaff", termB: "Kitchen staff" }],
        taskV: ["Pantry", "Utensils", "Crockery", "Beverage", "Gourmand"]
      })
    ]
  },
  {
    id: "psychology",
    title: "THEME 10: PSYCHOLOGY AND BEHAVIOR",
    category: "Science",
    description: "Vocabulary for cognitive processes, human behavior, and emotional health.",
    icon: "Brain",
    variants: [
      createVariant(1, "Cognitive Science", {
        taskI: [
          { text: "His ________ of the event was different from mine.", answer: "perception" },
          { text: "The loud noise provided a strong ________ for the reflex.", answer: "stimulus" },
          { text: "She struggled with the ________ of information for the test.", answer: "retrieval" },
          { text: "Using a ________ device helped him remember the list.", answer: "mnemonic" },
          { text: "Humans process a lot of ________ input every second.", answer: "sensory" },
          { text: "Focusing your ________ on one task improves efficiency.", answer: "attention" },
          { text: "His strange ________ was a cause for concern in the group.", answer: "behavior" },
          { text: "The ________ of ideas is a key part of creativity.", answer: "association" },
          { text: "Pavlov used ________ to train dogs to salivate.", answer: "conditioning" },
          { text: "The brain's ________ allows it to change over time.", answer: "neuroplasticity" },
          { text: "IQ tests are designed to measure human ________.", answer: "intelligence" },
          { text: "The ________ process involves thinking and reasoning.", answer: "cognition" }
        ],
        taskII: [
          { term: "Cognition", definition: "The mental action or process of acquiring knowledge.", key: "a" },
          { term: "Neurosis", definition: "A relatively mild mental illness that is not caused by organic disease.", key: "b" },
          { term: "Psychosis", definition: "A severe mental disorder in which thought and emotions are so impaired.", key: "c" },
          { term: "Subconscious", definition: "Concerning the part of the mind of which one is not fully aware.", key: "d" },
          { term: "Schema", definition: "A representation of a plan or theory in the form of an outline or model.", key: "e" }
        ],
        taskIII: ["Cognitive dissonance", "Short-term memory", "Emotional intelligence", "Critical thinking"],
        taskIV: [{ termA: "Conscious", termB: "Subconscious" }, { termA: "Nature", termB: "Nurture" }],
        taskV: ["Perception", "Inference", "Stimulus", "Response", "Abstract"]
      }),
      createVariant(2, "Emotions and Personality", {
        taskI: [
          { text: "Showing ________ involves understanding others' feelings.", answer: "empathy" },
          { text: "Her ________ allowed her to bounce back from failure.", answer: "resilience" },
          { text: "Public speaking often causes high levels of ________.", answer: "anxiety" },
          { text: "The baby had a very calm and happy ________.", answer: "temperament" },
          { text: "An ________ typically enjoys spending time alone.", answer: "introvert" },
          { text: "An ________ gains energy from being around people.", answer: "extrovert" },
          { text: "A ________ is an irrational and extreme fear of something.", answer: "phobia" },
          { text: "Many fears are buried deep in our ________ mind.", answer: "subconscious" },
          { text: "He lacked the ________ to finish his difficult degree.", answer: "motivation" },
          { text: "The bird has a natural ________ to build a nest.", answer: "instinct" },
          { text: "The story revealed the true ________ of the hero.", answer: "character" },
          { text: "Seasonal changes can have an effect on your ________.", answer: "mood" }
        ],
        taskII: [
          { term: "Empathy", definition: "The ability to understand and share the feelings of another.", key: "a" },
          { term: "Resilience", definition: "The capacity to recover quickly from difficulties.", key: "b" },
          { term: "Introversion", definition: "The state of or tendency toward being wholly or predominantly concerned with and interested in one's own mental life.", key: "c" },
          { term: "Narcissism", definition: "Excessive interest in or admiration of oneself and one's physical appearance.", key: "d" },
          { term: "Altruism", definition: "The belief in or practice of disinterested and selfless concern for the well-being of others.", key: "e" }
        ],
        taskIII: ["Inner child", "Self-esteem", "Defense mechanism", "Personal growth"],
        taskIV: [{ termA: "Introvert", termB: "Extrovert" }, { termA: "Optimist", termB: "Pessimist" }],
        taskV: ["Affect", "Ambivalence", "Disorder", "Trauma", "Temperament"]
      }),
      createVariant(3, "Social Dynamics", {
        taskI: [
          { text: "Group pressure can lead to high levels of ________.", answer: "conformity" },
          { text: "Education is the key to reducing social ________.", answer: "prejudice" },
          { text: "We should avoid using a ________ when describing people.", answer: "stereotype" },
          { text: "Media has a powerful ________ on public behavior.", answer: "influence" },
          { text: "Strong ________ is needed to guide the organization.", answer: "leadership" },
          { text: "The random act of ________ surprised the stranger.", answer: "altruism" },
          { text: "Violence is often a physical form of ________.", answer: "aggression" },
          { text: "Society is often organized into a clear ________.", answer: "hierarchy" },
          { text: "Cultural ________ is formed by shared history and values.", answer: "identity" },
          { text: "The politician used ________ to win the voters.", answer: "persuasion" },
          { text: "A social ________ is an unwritten rule for behavior.", answer: "norm" },
          { text: "He was very proud of his high social ________.", answer: "status" }
        ],
        taskII: [
          { term: "Conformity", definition: "Compliance with standards, rules, or laws.", key: "a" },
          { term: "Stereotype", definition: "A widely held but fixed and oversimplified image or idea.", key: "b" },
          { term: "Prejudice", definition: "Preconceived opinion that is not based on reason or actual experience.", key: "c" },
          { term: "Authority", definition: "The power or right to give orders, make decisions, and enforce obedience.", key: "d" },
          { term: "Bias", definition: "Prejudice in favor of or against one thing, person, or group compared with another.", key: "e" }
        ],
        taskIII: ["Peer pressure", "Social stigma", "Cultural identity", "Groupthink"],
        taskIV: [{ termA: "Individualism", termB: "Collectivism" }, { termA: "Cooperation", termB: "Competition" }],
        taskV: ["Ostracism", "Hierarchy", "Ideology", "Intervention", "Normative"]
      })
    ]
  },
  {
    id: "finance",
    title: "THEME 11: MONEY AND FINANCE",
    category: "Professional",
    description: "Banking, investment, global economics, and fiscal vocabulary.",
    icon: "DollarSign",
    variants: [
      createVariant(1, "Banking & Markets", {
        taskI: [
          { text: "A severe ________ often leads to high unemployment rates.", answer: "recession" },
          { text: "The high rate of ________ decreased the value of the currency.", answer: "inflation" },
          { text: "The company reported a massive increase in annual ________.", answer: "revenue" },
          { text: "Total ________ include all debts and financial obligations.", answer: "liabilities" },
          { text: "Tangible ________ like property are generally stable investments.", answer: "assets" },
          { text: "The board announced a quarterly ________ for all shareholders.", answer: "dividend" },
          { text: "I need to diversify my investment ________ to reduce risk.", answer: "portfolio" },
          { text: "He works for a leading ________ firm on Wall Street.", answer: "brokerage" },
          { text: "High ________ ensures that assets can be converted to cash fast.", answer: "liquidity" },
          { text: "They took out a 30-year ________ to buy their first home.", answer: "mortgage" },
          { text: "The firm remained ________ despite the sudden market crash.", answer: "solvent" },
          { text: "I was charged a fee for an unarranged ________ on my account.", answer: "overdraft" }
        ],
        taskII: [
          { term: "Equity", definition: "The value of the shares issued by a company.", key: "a" },
          { term: "Annuity", definition: "A fixed sum of money paid to someone each year.", key: "b" },
          { term: "Audit", definition: "An official inspection of an individual's or organization's accounts.", key: "c" },
          { term: "Deficit", definition: "The amount by which something, especially a sum of money, is too small.", key: "d" },
          { term: "Arbitrage", definition: "The simultaneous buying and selling of securities to take advantage of differing prices.", key: "e" }
        ],
        taskIII: ["Bull market", "Capital gains", "Venture capital", "Credit rating"],
        taskIV: [{ termA: "Gross profit", termB: "Net profit" }, { termA: "Fixed rate", termB: "Variable rate" }],
        taskV: ["Bankruptcy", "Collateral", "Fiscal", "Hedging", "Speculation"]
      }),
      createVariant(2, "Investment & Debt", {
        taskI: [
          { text: "High-yield ________ can be risky but very profitable.", answer: "securities" },
          { text: "The central bank decided to ________ interest rates.", answer: "hike" },
          { text: "We need to ________ the budget for the upcoming quarter.", answer: "allocate" },
          { text: "The start-up is seeking ________ to fund its expansion.", answer: "equity" },
          { text: "He was forced to ________ his stocks during the slump.", answer: "liquidate" },
          { text: "International ________ can affect the local exchange rate.", answer: "remittances" },
          { text: "The bank requires ________ for such a large business loan.", answer: "collateral" },
          { text: "They reached a ________ with their creditors last month.", answer: "settlement" },
          { text: "Fiscal ________ is necessary to avoid a national debt crisis.", answer: "discipline" },
          { text: "The government issued new ________ to fund infrastructure.", answer: "bonds" },
          { text: "Many investors seek a high ________ on their investment.", answer: "return" },
          { text: "The audit revealed several ________ in the bookkeeping.", answer: "discrepancies" }
        ],
        taskII: [
          { term: "Bullion", definition: "Gold or silver in bulk before coining, or valued by weight.", key: "a" },
          { term: "Foreclosure", definition: "The action of taking possession of a mortgaged property when the mortgagor fails to keep up payments.", key: "b" },
          { term: "Amortization", definition: "The action or process of gradually writing off the initial cost of an asset.", key: "c" },
          { term: "Underwriting", definition: "Sign and accept liability under (an insurance policy).", key: "d" },
          { term: "Leverage", definition: "The use of borrowed capital for an investment.", key: "e" }
        ],
        taskIII: ["Floating a company", "Insider trading", "Tax evasion", "Blue-chip stocks"],
        taskIV: [{ termA: "Debit", termB: "Credit" }, { termA: "Current account", termB: "Savings account" }],
        taskV: ["Solvency", "Expenditure", "Depreciation", "Legacy", "Incentive"]
      }),
      createVariant(3, "Economic Trends", {
        taskI: [
          { text: "Global ________ has transformed local manufacturing.", answer: "globalization" },
          { text: "A ________ of workers led to an increase in wages.", answer: "shortage" },
          { text: "The government's ________ policy affects public spending.", answer: "fiscal" },
          { text: "The trade ________ has reached an all-time high.", answer: "surplus" },
          { text: "Consumer ________ index is a key measure of inflation.", answer: "price" },
          { text: "Market ________ makes short-term investing very difficult.", answer: "volatility" },
          { text: "The ________ of the currency made exports cheaper.", answer: "devaluation" },
          { text: "Sustainable ________ is a goal for many developing nations.", answer: "growth" },
          { text: "The central bank oversees the country's ________ policy.", answer: "monetary" },
          { text: "Tax ________ help encourage investment in certain areas.", answer: "rebates" },
          { text: "The ________ of small businesses is vital for the economy.", answer: "viability" },
          { text: "Wealth ________ remains a major social issue globally.", answer: "inequality" }
        ],
        taskII: [
          { term: "Macroeconomics", definition: "The part of economics concerned with large-scale or general economic factors.", key: "a" },
          { term: "Tariff", definition: "A tax or duty to be paid on a particular class of imports or exports.", key: "b" },
          { term: "Subsidy", definition: "A sum of money granted by the government to assist an industry.", key: "c" },
          { term: "Protectionism", definition: "The theory or practice of shielding a country's domestic industries from foreign competition.", key: "d" },
          { term: "Commodity", definition: "A raw material or primary agricultural product that can be bought and sold.", key: "e" }
        ],
        taskIII: ["Emerging markets", "Supply and demand", "Free trade agreement", "Laissez-faire"],
        taskIV: [{ termA: "Direct tax", termB: "Indirect tax" }, { termA: "Imports", termB: "Exports" }],
        taskV: ["Inflation", "Deflation", "Stagnation", "Monopoly", "Subsidiary"]
      })
    ]
  },
  {
    id: "arts",
    title: "THEME 12: ARTS AND ENTERTAINMENT",
    category: "Culture",
    description: "Vocabulary for fine arts, performance, literature, and creative industry.",
    icon: "Palette",
    variants: [
      createVariant(1, "Fine Arts & Exhibitions", {
        taskI: [
          { text: "The ________ spent months preparing for the new exhibition.", answer: "curator" },
          { text: "His ________ style was often misunderstood by traditionalists.", answer: "avant-garde" },
          { text: "The museum recently acquired a rare marble ________.", answer: "sculpture" },
          { text: "Modern ________ art often focuses on emotion over realism.", answer: "abstract" },
          { text: "The building has a very unique and modern ________.", answer: "aesthetic" },
          { text: "The Mona Lisa is considered a true ________ of art.", answer: "masterpiece" },
          { text: "Linear ________ is used to create depth on a flat surface.", answer: "perspective" },
          { text: "The artist painted a stunning ________ of the queen.", answer: "portrait" },
          { text: "Science fiction is his favorite ________ of literature.", answer: "genre" },
          { text: "The newspaper published a harsh ________ of the play.", answer: "critique" },
          { text: "Oil paint is a versatile ________ for professional artists.", answer: "medium" },
          { text: "She carefully chose a vibrant ________ of colors.", answer: "palette" }
        ],
        taskII: [
          { term: "Impressionism", definition: "A style of painting characterized by small, thin, yet visible brush strokes.", key: "a" },
          { term: "Canvas", definition: "A strong, coarse unbleached cloth used as a surface for oil painting.", key: "b" },
          { term: "Sketch", definition: "A rough or unfinished drawing or painting.", key: "c" },
          { term: "Mural", definition: "A painting or other work of art executed directly on a wall.", key: "d" },
          { term: "Gallery", definition: "A room or building for the display or sale of works of art.", key: "e" }
        ],
        taskIII: ["Artistic integrity", "Visual arts", "Contemporary art", "Artistic license"],
        taskIV: [{ termA: "Realism", termB: "Surrealism" }, { termA: "Original", termB: "Reproduction" }],
        taskV: ["Aesthetic", "Exhibition", "Gallantry", "Installation", "Tapestry"]
      }),
      createVariant(2, "Performance Arts", {
        taskI: [
          { text: "The lead ________ received a standing ovation.", answer: "protagonist" },
          { text: "The actors spent weeks in ________ before the premiere.", answer: "rehearsal" },
          { text: "She decided to ________ for the role of the lead singer.", answer: "audition" },
          { text: "The play's ________ was set in 19th-century London.", answer: "backdrop" },
          { text: "The ________ of the musical was truly breathtaking.", answer: "choreography" },
          { text: "The ________ wrote a script that challenged social norms.", answer: "playwright" },
          { text: "The movie's ________ was full of unexpected twists.", answer: "plot" },
          { text: "He works as a professional ________ for the city orchestra.", answer: "conductor" },
          { text: "The theater's ________ was almost completely full.", answer: "auditorium" },
          { text: "The ________ was written by a famous film composer.", answer: "soundtrack" },
          { text: "The film received many ________ for its cinematography.", answer: "accolades" },
          { text: "The ________ between the two main characters was witty.", answer: "dialogue" }
        ],
        taskII: [
          { term: "Prologue", definition: "A separate introductory section of a literary or musical work.", key: "a" },
          { term: "Encore", definition: "A repeated or additional performance of an item at the end of a concert.", key: "b" },
          { term: "Intermission", definition: "A pause or break between parts of a play, movie, or concert.", key: "c" },
          { term: "Monologue", definition: "A long speech by one actor in a play or movie.", key: "d" },
          { term: "Scenario", definition: "A written outline of a movie, novel, or stage work.", key: "e" }
        ],
        taskIII: ["Opening night", "Method acting", "Box office hit", "Stage fright"],
        taskIV: [{ termA: "Comedy", termB: "Tragedy" }, { termA: "Soloist", termB: "Ensemble" }],
        taskV: ["Aria", "Cadence", "Dramaturgy", "Overture", "Virtuoso"]
      }),
      createVariant(3, "Literature & Writing", {
        taskI: [
          { text: "The author used a ________ to hide his true identity.", answer: "pseudonym" },
          { text: "The book is an ________ of the author's early life.", answer: "autobiography" },
          { text: "The poet used a beautiful ________ to describe the sea.", answer: "metaphor" },
          { text: "The ________ of the story is the struggle for freedom.", answer: "theme" },
          { text: "The writer's ________ is very descriptive and poetic.", answer: "prose" },
          { text: "The novel's ________ was slow but very detailed.", answer: "narrative" },
          { text: "She spent years compiling an ________ of short stories.", answer: "anthology" },
          { text: "The ________ of the book was very informative.", answer: "preface" },
          { text: "He won the prize for his ________ work on history.", answer: "non-fiction" },
          { text: "The poem's ________ was complex and irregular.", answer: "meter" },
          { text: "The ________ of the two ideas was very clever.", answer: "juxtaposition" },
          { text: "The story has many layers of ________.", answer: "symbolism" }
        ],
        taskII: [
          { term: "Stanza", definition: "A group of lines forming the basic recurring metrical unit in a poem.", key: "a" },
          { term: "Alliteration", definition: "The occurrence of the same letter or sound at the beginning of adjacent words.", key: "b" },
          { term: "Satire", definition: "The use of humor, irony, or exaggeration to expose people's stupidity.", key: "c" },
          { term: "Epic", definition: "A long poem, typically one derived from ancient oral tradition.", key: "d" },
          { term: "Hyperbole", definition: "Exaggerated statements or claims not meant to be taken literally.", key: "e" }
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
    description: "Digital presence, networking, online behavior, and viral trends.",
    icon: "MessageSquare",
    variants: [
      createVariant(1, "Digital Presence & Influence", {
        taskI: [
          { text: "The new ________ determines which posts users see first.", answer: "algorithm" },
          { text: "The post received a high level of user ________.", answer: "engagement" },
          { text: "The video went ________ within hours of being posted.", answer: "viral" },
          { text: "She is a famous lifestyle ________ with millions of fans.", answer: "influencer" },
          { text: "This new dance challenge is currently ________.", answer: "trending" },
          { text: "Creators can ________ their content through ads.", answer: "monetize" },
          { text: "He lost many ________ after his controversial post.", answer: "followers" },
          { text: "Use a relevant ________ to reach a wider audience.", answer: "hashtag" },
          { text: "Instagram is a popular ________ for photo sharing.", answer: "platform" },
          { text: "Marketers track various ________ to measure success.", answer: "metrics" },
          { text: "High-quality ________ is essential for growth.", answer: "content" },
          { text: "They will ________ the gaming event live tonight.", answer: "stream" }
        ],
        taskII: [
          { term: "Handle", definition: "A person's username on a social media platform.", key: "a" },
          { term: "Bio", definition: "A short piece of text that describes a user's profile.", key: "b" },
          { term: "Feed", definition: "The constantly updated list of content on a social media site.", key: "c" },
          { term: "Tag", definition: "To link another user's profile to a post or photo.", key: "d" },
          { term: "DM", definition: "A private message sent directly to another user.", key: "e" }
        ],
        taskIII: ["Digital footprint", "Social media marketing", "User-generated content", "Online persona"],
        taskIV: [{ termA: "Public profile", termB: "Private account" }, { termA: "Organic reach", termB: "Paid promotion" }],
        taskV: ["Engagement", "Monetization", "Transparency", "Authenticity", "Connectivity"]
      }),
      createVariant(2, "Online Behavior & Ethics", {
        taskI: [
          { text: "Cyber ________ is a serious issue for many teenagers.", answer: "bullying" },
          { text: "Always check your ________ settings to stay safe.", answer: "privacy" },
          { text: "Be careful of ________ news spreading on social apps.", answer: "fake" },
          { text: "The platform's ________ are very strict about hate speech.", answer: "guidelines" },
          { text: "He was ________ from the group for breaking the rules.", answer: "banned" },
          { text: "An ________ user posted several rude comments.", answer: "anonymous" },
          { text: "Digital ________ is becoming a popular wellness trend.", answer: "detox" },
          { text: "They were accused of ________ a false narrative.", answer: "promoting" },
          { text: "The ________ of personal data is a major concern.", answer: "security" },
          { text: "Always ________ sources before sharing information.", answer: "verify" },
          { text: "She decided to ________ all the toxic accounts.", answer: "unfollow" },
          { text: "The ________ of information can happen instantly.", answer: "leak" }
        ],
        taskII: [
          { term: "Troll", definition: "A person who post inflammatory or off-topic messages online.", key: "a" },
          { term: "Clickbait", definition: "Content whose main purpose is to attract attention and encourage clicking.", key: "b" },
          { term: "Doxing", definition: "The act of revealing someone's private information online.", key: "c" },
          { term: "Shadowban", definition: "Blocking a user's content without them knowing.", key: "d" },
          { term: "Astroturfing", definition: "Creating a false impression of widespread grassroots support.", key: "e" }
        ],
        taskIII: ["Privacy policy", "Community standards", "Data protection", "Ethical hacking"],
        taskIV: [{ termA: "Anonymity", termB: "Accountability" }, { termA: "Truth", termB: "Disinformation" }],
        taskV: ["Moderation", "Polarization", "Syndication", "Vulnerability", "Integrity"]
      }),
      createVariant(3, "Networking & Connectivity", {
        taskI: [
          { text: "LinkedIn is the best site for professional ________.", answer: "networking" },
          { text: "The app allows you to ________ with friends globally.", answer: "connect" },
          { text: "You can ________ interesting posts to your own profile.", answer: "repost" },
          { text: "The ________ of social apps has changed how we talk.", answer: "ubiquity" },
          { text: "A ________ of users complained about the new update.", answer: "multitude" },
          { text: "The ________ of the new features was very rapid.", answer: "adoption" },
          { text: "We need more ________ in how data is used.", answer: "transparency" },
          { text: "The ________ between different apps is improving.", answer: "integration" },
          { text: "Social media can ________ lonely people feel connected.", answer: "make" },
          { text: "The ________ of the internet is felt everywhere.", answer: "impact" },
          { text: "Users can ________ their profiles with various widgets.", answer: "customize" },
          { text: "The ________ of the network is growing every day.", answer: "reach" }
        ],
        taskII: [
          { term: "Interface", definition: "A device or program enabling a user to communicate with a computer.", key: "a" },
          { term: "Bandwidth", definition: "The transmission capacity of a computer network.", key: "b" },
          { term: "Latency", definition: "The delay before a transfer of data begins.", key: "c" },
          { term: "Synchronous", definition: "Existing or occurring at the same time.", key: "d" },
          { term: "Cloud", definition: "A network of remote servers hosted on the internet.", key: "e" }
        ],
        taskIII: ["Global connectivity", "Professional profile", "User interface", "Real-time updates"],
        taskIV: [{ termA: "Active user", termB: "Passive observer" }, { termA: "Broadcasting", termB: "Interaction" }],
        taskV: ["Interactivity", "Globalization", "Accessibility", "Convergence", "Standardization"]
      })
    ]
  },
  {
    id: "science",
    title: "THEME 14: SCIENCE & INNOVATION",
    category: "Science",
    description: "Laboratory research, scientific methodology, and technological breakthroughs.",
    icon: "Cpu",
    variants: [
      createVariant(1, "Laboratory Procedures", {
        taskI: [
          { text: "The researcher formulated a new ________ for the study.", answer: "hypothesis" },
          { text: "They collected ________ data over a period of six months.", answer: "empirical" },
          { text: "The detailed ________ of the results took several weeks.", answer: "analysis" },
          { text: "We need to control every ________ in the experiment.", answer: "variable" },
          { text: "The ________ group received a placebo instead of the drug.", answer: "control" },
          { text: "The new discovery caused a ________ shift in the field.", answer: "paradigm" },
          { text: "He is an expert in ________ physics and mechanics.", answer: "quantum" },
          { text: "A genetic ________ can lead to unexpected traits.", answer: "mutation" },
          { text: "She is studying ________ engineering and CRISPR tech.", answer: "genetic" },
          { text: "The chemical ________ accelerated the entire reaction.", answer: "catalyst" },
          { text: "Cells absorb water through the process of ________.", answer: "osmosis" },
          { text: "The ________ of the two compounds created a new material.", answer: "synthesis" }
        ],
        taskII: [
          { term: "Titration", definition: "A technique where a solution of known concentration is used to determine the concentration of an unknown solution.", key: "a" },
          { term: "Centrifuge", definition: "A machine with a rapidly rotating container that applies centrifugal force to its contents.", key: "b" },
          { term: "Pipette", definition: "A slender tube attached to or incorporating a bulb, for transferring small quantities of liquid.", key: "c" },
          { term: "Crucible", definition: "A ceramic or metal container in which metals or other substances may be melted.", key: "d" },
          { term: "Solvent", definition: "The liquid in which a solute is dissolved to form a solution.", key: "e" }
        ],
        taskIII: ["Scientific rigor", "Peer review", "Clinical trial", "Double-blind study"],
        taskIV: [{ termA: "Inductive reasoning", termB: "Deductive reasoning" }, { termA: "Falsifiable", termB: "Verifiable" }],
        taskV: ["Precision", "Accuracy", "Validity", "Reliability", "Replicability"]
      }),
      createVariant(2, "Scientific Theory", {
        taskI: [
          { text: "Einstein's theory of ________ changed our view of space.", answer: "relativity" },
          { text: "The universe is in a constant state of ________.", answer: "expansion" },
          { text: "The laws of ________ are fundamental to all physics.", answer: "thermodynamics" },
          { text: "The ________ of evolution is supported by fossil records.", answer: "theory" },
          { text: "Gravitational ________ pull objects toward each other.", answer: "forces" },
          { text: "The ________ between the two particles was magnetic.", answer: "attraction" },
          { text: "Matter is composed of tiny ________ called atoms.", answer: "particles" },
          { text: "The ________ of energy can occur in many forms.", answer: "transformation" },
          { text: "Light travels at a constant ________ in a vacuum.", answer: "velocity" },
          { text: "The ________ of light occurs when it hits a mirror.", answer: "reflection" },
          { text: "The ________ of light happens as it passes through water.", answer: "refraction" },
          { text: "Modern ________ is the study of the entire universe.", answer: "cosmology" }
        ],
        taskII: [
          { term: "Entropy", definition: "A thermodynamic quantity representing the unavailability of a system's thermal energy for conversion into mechanical work.", key: "a" },
          { term: "Inertia", definition: "A property of matter by which it continues in its existing state of rest or uniform motion.", key: "b" },
          { term: "Isotope", definition: "Each of two or more forms of the same element that contain equal numbers of protons but different numbers of neutrons.", key: "c" },
          { term: "Fission", definition: "The action of dividing or splitting something into two or more parts.", key: "d" },
          { term: "Fusion", definition: "The process or result of joining two or more things together to form a single entity.", key: "e" }
        ],
        taskIII: ["String theory", "Black hole", "Event horizon", "Particle accelerator"],
        taskIV: [{ termA: "Fission", termB: "Fusion" }, { termA: "Potential energy", termB: "Kinetic energy" }],
        taskV: ["Momentum", "Friction", "Viscosity", "Convection", "Radiation"]
      }),
      createVariant(3, "Technological Innovation", {
        taskI: [
          { text: "The new ________ chip is much faster than the old one.", answer: "silicon" },
          { text: "They are developing a ________ to perform surgery.", answer: "robot" },
          { text: "Renewable energy is a ________ for the future.", answer: "necessity" },
          { text: "The ________ of the new engine is remarkably high.", answer: "efficiency" },
          { text: "Digital ________ is a major trend in all industries.", answer: "transformation" },
          { text: "The ________ of the new software was a success.", answer: "launch" },
          { text: "She is an expert in ________ and micro-tech.", answer: "nanotechnology" },
          { text: "The ________ of the new device is very user-friendly.", answer: "design" },
          { text: "The ________ of AI will change the workforce.", answer: "advancement" },
          { text: "We need a more ________ approach to energy use.", answer: "sustainable" },
          { text: "The company holds several ________ for its inventions.", answer: "patents" },
          { text: "The ________ of the two companies led to better tech.", answer: "merger" }
        ],
        taskII: [
          { term: "Algorithm", definition: "A process or set of rules to be followed in calculations.", key: "a" },
          { term: "Prototype", definition: "A first, typical or preliminary model of something.", key: "b" },
          { term: "Automation", definition: "The use of largely automatic equipment in a system of manufacturing.", key: "c" },
          { term: "Interoperability", definition: "The ability of computer systems to exchange and make use of information.", key: "d" },
          { term: "Scalability", definition: "The capacity to be changed in size or scale.", key: "e" }
        ],
        taskIII: ["Machine learning", "Smart home", "Internet of things", "Augmented reality"],
        taskIV: [{ termA: "Analog", termB: "Digital" }, { termA: "Hardware", termB: "Software" }],
        taskV: ["Bandwidth", "Connectivity", "Infrastructure", "Innovation", "Redundancy"]
      })
    ]
  },
  {
    id: "fashion",
    title: "THEME 15: FASHION AND STYLE",
    category: "Culture",
    description: "Industry trends, clothing design, textiles, and consumer behavior.",
    icon: "User",
    variants: [
      createVariant(1, "Industry & Design", {
        taskI: [
          { text: "High-end ________ is only affordable for the wealthy.", answer: "couture" },
          { text: "She loves wearing ________ clothing from the 1950s.", answer: "vintage" },
          { text: "The models walked down the ________ with confidence.", answer: "runway" },
          { text: "The ________ of the dress was a high-quality silk.", answer: "textile" },
          { text: "The clothes were displayed on a life-sized ________.", answer: "mannequin" },
          { text: "The ________ of the new coat is very slimming.", answer: "silhouette" },
          { text: "Formal ________ is required for the charity gala.", answer: "attire" },
          { text: "He only wears ________ suits made by a tailor.", answer: "bespoke" },
          { text: "The ________ was made from a rare wool blend.", answer: "garment" },
          { text: "She looked very ________ in her black cocktail dress.", answer: "chic" },
          { text: "The current ________ is for oversized blazers.", answer: "trend" },
          { text: "The store sells a wide range of sports ________.", answer: "apparel" }
        ],
        taskII: [
          { term: "Textile", definition: "A type of cloth or woven fabric.", key: "a" },
          { term: "Fabric", definition: "Cloth or other material produced by weaving or knitting fibers.", key: "b" },
          { term: "Tailor", definition: "A person whose occupation is making fitted clothes.", key: "c" },
          { term: "Embroidery", definition: "The art or pastime of embroidering cloth.", key: "d" },
          { term: "Haut couture", definition: "Expensive, fashionable clothes produced by leading fashion houses.", key: "e" }
        ],
        taskIII: ["Fashion statement", "Ready-to-wear", "Brand identity", "Artistic direction"],
        taskIV: [{ termA: "Retail", termB: "Wholesale" }, { termA: "Casual", termB: "Formal" }],
        taskV: ["Aesthetic", "Accessory", "Catalogue", "Collection", "Runway"]
      }),
      createVariant(2, "Trends & Style", {
        taskI: [
          { text: "The new collection is full of ________ colors.", answer: "vibrant" },
          { text: "She has a very ________ and unique sense of style.", answer: "eclectic" },
          { text: "The ________ of the jewelry was exquisite.", answer: "craftsmanship" },
          { text: "He prefers a ________ look with simple pieces.", answer: "minimalist" },
          { text: "The ________ of the shoes was surprisingly comfortable.", answer: "fit" },
          { text: "Accessories can help ________ a basic outfit.", answer: "elevate" },
          { text: "The ________ of the fabric was soft and smooth.", answer: "texture" },
          { text: "She is a true ________ who always stays ahead.", answer: "trendsetter" },
          { text: "The ________ of the dress was inspired by nature.", answer: "pattern" },
          { text: "He wore a ________ tie to match his pocket square.", answer: "silk" },
          { text: "The ________ of the event was 'black tie only'.", answer: "dress-code" },
          { text: "Sustainability is a growing ________ in fashion.", answer: "concern" }
        ],
        taskII: [
          { term: "Vogue", definition: "The prevailing fashion or style at a particular time.", key: "a" },
          { term: "Dapper", definition: "Neat and trim in dress and appearance (typically of a man).", key: "b" },
          { term: "Gaudy", definition: "Extravagantly bright or showy, typically so as to be tasteless.", key: "c" },
          { term: "Somber", definition: "Dark or dull in color or tone.", key: "d" },
          { term: "Avant-garde", definition: "New and unusual or experimental ideas.", key: "e" }
        ],
        taskIII: ["Wardrobe staples", "Mix and match", "Fast fashion", "Personal style"],
        taskIV: [{ termA: "Trendy", termB: "Timeless" }, { termA: "Synthetic", termB: "Natural" }],
        taskV: ["Attire", "Cosmetic", "Costume", "Garment", "Style"]
      }),
      createVariant(3, "Retail & Consumerism", {
        taskI: [
          { text: "The flagship store is located in a ________ area.", answer: "prestigious" },
          { text: "They are offering a massive ________ for the holidays.", answer: "discount" },
          { text: "The ________ of the brand is globally recognized.", answer: "logo" },
          { text: "Consumer ________ has shifted toward online shopping.", answer: "behavior" },
          { text: "The ________ window was decorated for Christmas.", answer: "display" },
          { text: "She works as a ________ buyer for a major retailer.", answer: "fashion" },
          { text: "The ________ of the new shop was very successful.", answer: "opening" },
          { text: "They use ________ influencers to promote the brand.", answer: "social-media" },
          { text: "The ________ of the product was high-quality.", answer: "packaging" },
          { text: "He decided to ________ the item because it was small.", answer: "return" },
          { text: "The ________ was full of people during the sale.", answer: "mall" },
          { text: "Loyal customers receive special ________ points.", answer: "reward" }
        ],
        taskII: [
          { term: "Merchandise", definition: "Goods to be bought and sold.", key: "a" },
          { term: "Wholesale", definition: "The selling of goods in large quantities to be retailed by others.", key: "b" },
          { term: "Franchise", definition: "An authorization granted by a government or company to an individual or group.", key: "c" },
          { term: "Boutique", definition: "A small store selling fashionable clothes or accessories.", key: "d" },
          { term: "Consumerism", definition: "The protection or promotion of the interests of consumers.", key: "e" }
        ],
        taskIII: ["Brand loyalty", "E-commerce", "High-street fashion", "Outlet store"],
        taskIV: [{ termA: "Luxury", termB: "Budget" }, { termA: "Department store", termB: "Specialty shop" }],
        taskV: ["Commerce", "Inventory", "Logistics", "Purchasing", "Revenue"]
      })
    ]
  }
];