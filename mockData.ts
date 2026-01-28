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
    title: "THEME 1: THE MEDIA & JOURNALISM",
    category: "Communication",
    description: "In-depth analysis of press ethics, sensationalism, and digital dissemination.",
    icon: "Newspaper",
    variants: [
      createVariant(1, "Press Ethics & Scrutiny", {
        taskI: [
          { text: "The publication was accused of heavy ________ when reporting on the election.", answer: "bias" },
          { text: "Whistleblowers often risk their careers to ________ systemic corruption.", answer: "expose" },
          { text: "The editor refused to ________ the identity of the confidential informant.", answer: "divulge" },
          { text: "Tabloids frequently resort to ________ to drive up their circulation numbers.", answer: "sensationalism" },
          { text: "A ________ is expected to provide unbiased, factual reporting on current events.", answer: "broadsheet" },
          { text: "The government's attempt to ________ the report was met with public outcry.", answer: "suppress" },
          { text: "Journalistic ________ is paramount when dealing with sensitive political data.", answer: "integrity" },
          { text: "The news agency has a global ________ of foreign correspondents.", answer: "network" },
          { text: "Information was rapidly ________ through various social media channels.", answer: "disseminated" },
          { text: "The ________ section of the paper often reflects the board's political stance.", answer: "editorial" },
          { text: "Constant ________ from the paparazzi can be detrimental to a celebrity's mental health.", answer: "scrutiny" },
          { text: "Digital ________ has drastically altered the landscape of traditional print media.", answer: "disruption" }
        ],
        taskII: [
          { term: "Sensationalism", definition: "The use of exciting or shocking stories at the expense of accuracy.", key: "a" },
          { term: "Broadsheet", definition: "A newspaper with a large format, typically considered more serious.", key: "b" },
          { term: "Libel", definition: "A published false statement that is damaging to a person's reputation.", key: "c" },
          { term: "Pundit", definition: "An expert in a particular subject who is frequently called on to give opinions.", key: "d" },
          { term: "Syndication", definition: "The transfer of something for publication in multiple newspapers or stations.", key: "e" }
        ],
        taskIII: ["Unbiased reporting", "Investigative journalism", "Character assassination", "Propaganda machine"],
        taskIV: [{ termA: "Objectivity", termB: "Subjectivity" }, { termA: "Tabloid", termB: "Journal" }],
        taskV: ["Censorship", "Dissemination", "Muckraker", "Infotainment", "Whistleblower"]
      }),
      createVariant(2, "The Digital Paradigm", {
        taskI: [
          { text: "Algorithms can ________ create echo chambers that polarize public opinion.", answer: "inadvertently" },
          { text: "The speed of news ________ in the digital age often compromises accuracy.", answer: "transmission" },
          { text: "Media ________ own a vast majority of local news outlets.", answer: "conglomerates" },
          { text: "Citizen journalism has ________ the way local events are recorded.", answer: "revolutionized" },
          { text: "Many users are now ________ to clickbait headlines designed for ad revenue.", answer: "susceptible" },
          { text: "The ________ of information is no longer controlled by a few gatekeepers.", answer: "flow" },
          { text: "Fact-checking organizations strive to ________ misinformation online.", answer: "combat" },
          { text: "The ________ of digital media has led to a decline in print subscriptions.", answer: "ascendancy" },
          { text: "Journalists must ________ the ethical implications of using AI in writing.", answer: "grapple" },
          { text: "Social media platforms have become the primary ________ for news consumption.", answer: "conduits" },
          { text: "Public trust in the media has ________ significantly over the last decade.", answer: "eroded" },
          { text: "The ________ of news cycles means stories are forgotten within days.", answer: "transience" }
        ],
        taskII: [
          { term: "Clickbait", definition: "Content whose main purpose is to attract attention and encourage clicks.", key: "a" },
          { term: "Gatekeeper", definition: "An attendant at a gate who controls who is allowed to enter or leave.", key: "b" },
          { term: "Disinformation", definition: "False information which is intended to mislead public opinion.", key: "c" },
          { term: "Echo chamber", definition: "An environment where a person only encounters information that reflects their own.", key: "d" },
          { term: "Viral", definition: "Relating to or involving an image or video that is circulated rapidly.", key: "e" }
        ],
        taskIII: ["Digital footprint", "Verification process", "Media literacy", "Algorithm bias"],
        taskIV: [{ termA: "Analog", termB: "Digital" }, { termA: "Scoop", termB: "Exclusive" }],
        taskV: ["Monetization", "Engagement", "Accessibility", "Transparency", "Authenticity"]
      }),
      createVariant(3, "Global Communication", {
        taskI: [
          { text: "Freedom of the press is often ________ in authoritarian regimes.", answer: "curtailed" },
          { text: "The ________ of global news agencies ensures a wide reach for major stories.", answer: "interconnectivity" },
          { text: "Language barriers can often ________ the accurate reporting of local issues.", answer: "hinder" },
          { text: "Transnational media corporations ________ the global information market.", answer: "dominate" },
          { text: "The ________ of cultural values through media is a form of soft power.", answer: "diffusion" },
          { text: "International correspondents must often navigate ________ political landscapes.", answer: "volatile" },
          { text: "The ________ of news reporting varies greatly between different cultures.", answer: "cadence" },
          { text: "Global media events can foster a sense of ________ solidarity.", answer: "transnational" },
          { text: "The ________ of the internet has made it harder to censor information.", answer: "ubiquity" },
          { text: "Journalists in conflict zones face ________ dangers while reporting.", answer: "unprecedented" },
          { text: "The ________ of perspectives is essential for a healthy democracy.", answer: "plurality" },
          { text: "Technological ________ has allowed for real-time global broadcasting.", answer: "innovation" }
        ],
        taskII: [
          { term: "Soft power", definition: "A persuasive approach to international relations, involving cultural influence.", key: "a" },
          { term: "Hegemony", definition: "Leadership or dominance, especially by one country or social group.", key: "b" },
          { term: "Diffusion", definition: "The spreading of something more widely.", key: "c" },
          { term: "Ubiquity", definition: "The state of being everywhere at once.", key: "d" },
          { term: "Pluralism", definition: "A system in which two or more states or groups coexist.", key: "e" }
        ],
        taskIII: ["Global village", "Cultural imperialism", "Press freedom index", "Cross-cultural communication"],
        taskIV: [{ termA: "Global", termB: "Local" }, { termA: "Mainstream", termB: "Alternative" }],
        taskV: ["Diplomacy", "Sovereignty", "Standardization", "Globalization", "Convergence"]
      })
    ]
  },
  {
    id: "medical",
    title: "THEME 2: ADVANCED MEDICINE",
    category: "Science",
    description: "Clinical diagnostic terminology, pathology, and healthcare ethics.",
    icon: "Stethoscope",
    variants: [
      createVariant(1, "Diagnostic Precision", {
        taskI: [
          { text: "The patient's condition began to ________ rapidly despite intervention.", answer: "deteriorate" },
          { text: "A definitive ________ was only possible after the MRI results.", answer: "diagnosis" },
          { text: "The physician ________ a regimen of immunosuppressants.", answer: "prescribed" },
          { text: "Early ________ of symptoms is crucial for successful treatment.", answer: "detection" },
          { text: "The study focused on the clinical ________ of the new vaccine.", answer: "efficacy" },
          { text: "Chronic pain can significantly ________ a patient's quality of life.", answer: "impair" },
          { text: "The ________ of the disease remains a subject of ongoing research.", answer: "etiology" },
          { text: "Palliative care aims to ________ suffering in terminal patients.", answer: "alleviate" },
          { text: "The patient was ________ with a rare autoimmune disorder.", answer: "afflicted" },
          { text: "Medical ________ requires strict adherence to ethical guidelines.", answer: "research" },
          { text: "The ________ of the surgical procedure was complicated by the patient's age.", answer: "execution" },
          { text: "Effective communication between doctor and patient is ________ for compliance.", answer: "paramount" }
        ],
        taskII: [
          { term: "Etiology", definition: "The cause, set of causes, or manner of causation of a disease.", key: "a" },
          { term: "Prognosis", definition: "The likely course of a disease or ailment.", key: "b" },
          { term: "Efficacy", definition: "The ability to produce a desired or intended result.", key: "c" },
          { term: "Palliative", definition: "Relieving pain without dealing with the cause of the condition.", key: "d" },
          { term: "Remission", definition: "A temporary diminution of severity of disease or pain.", key: "e" }
        ],
        taskIII: ["Holistic approach", "Clinical trial", "Differential diagnosis", "Preventative medicine"],
        taskIV: [{ termA: "Acute", termB: "Chronic" }, { termA: "Benign", termB: "Malignant" }],
        taskV: ["Pathology", "Epidemiology", "Immunotherapy", "Morbidity", "Convalescence"]
      }),
      createVariant(2, "Pathological Analysis", {
        taskI: [
          { text: "The virus ________ at an exponential rate within the host.", answer: "replicated" },
          { text: "Researchers are searching for the ________ that triggers the immune response.", answer: "antigen" },
          { text: "Genetic ________ can predispose individuals to certain cancers.", answer: "mutations" },
          { text: "The ________ of the epidemic was traced back to a local market.", answer: "outbreak" },
          { text: "Antibiotic ________ is a growing threat to global health.", answer: "resistance" },
          { text: "The body's ________ system works to neutralize foreign pathogens.", answer: "immune" },
          { text: "Pathological ________ of tissue samples revealed malignant cells.", answer: "examination" },
          { text: "The ________ of toxins in the liver can lead to organ failure.", answer: "accumulation" },
          { text: "Pharmacological ________ is necessary to manage complex conditions.", answer: "intervention" },
          { text: "The ________ of symptoms often coincides with the onset of fever.", answer: "exacerbation" },
          { text: "Successful treatment requires a ________ understanding of the underlying biology.", answer: "comprehensive" },
          { text: "Medical ________ has led to the development of life-saving technologies.", answer: "innovation" }
        ],
        taskII: [
          { term: "Antigen", definition: "A toxin or other foreign substance which induces an immune response.", key: "a" },
          { term: "Pathogen", definition: "A bacterium, virus, or other microorganism that can cause disease.", key: "b" },
          { term: "Mutation", definition: "The changing of the structure of a gene.", key: "c" },
          { term: "Exacerbation", definition: "A worsening of a clinical condition.", key: "d" },
          { term: "Phagocytosis", definition: "The ingestion of bacteria or other material by phagocytes.", key: "e" }
        ],
        taskIII: ["Genetic engineering", "Viral replication", "Immune deficiency", "Toxic shock"],
        taskIV: [{ termA: "Symptomatic", termB: "Asymptomatic" }, { termA: "Endemic", termB: "Pandemic" }],
        taskV: ["Metastasis", "Virulence", "Incubation", "Susceptibility", "Prevalence"]
      }),
      createVariant(3, "Healthcare Ethics", {
        taskI: [
          { text: "Informed ________ is a legal and ethical requirement for surgery.", answer: "consent" },
          { text: "The principle of ________ dictates that doctors must act in the patient's best interest.", answer: "beneficence" },
          { text: "Patient ________ must be protected at all times.", answer: "confidentiality" },
          { text: "Ethical ________ often arise in the allocation of scarce medical resources.", answer: "dilemmas" },
          { text: "The ________ of human subjects in research is strictly regulated.", answer: "protection" },
          { text: "Medical ________ involves the study of moral values in healthcare.", answer: "ethics" },
          { text: "The ________ of life is a central theme in bioethical debates.", answer: "sanctity" },
          { text: "Healthcare providers have a ________ to provide equal care to all patients.", answer: "duty" },
          { text: "The ________ of the physician-patient relationship is based on trust.", answer: "integrity" },
          { text: "Advances in biotechnology ________ new ethical questions every day.", answer: "pose" },
          { text: "The ________ of universal healthcare is a major political issue.", answer: "implementation" },
          { text: "Physicians must ________ the potential risks and benefits of any treatment.", answer: "weigh" }
        ],
        taskII: [
          { term: "Beneficence", definition: "The quality of being kind or helpful or generous.", key: "a" },
          { term: "Autonomy", definition: "The right or condition of self-government.", key: "b" },
          { term: "Equity", definition: "The quality of being fair and impartial.", key: "c" },
          { term: "Justice", definition: "The quality of being just; righteousness, equitableness, or moral rightness.", key: "d" },
          { term: "Non-maleficence", definition: "The ethical principle of doing no harm.", key: "e" }
        ],
        taskIII: ["Euthanasia debate", "Resource allocation", "Hippocratic Oath", "Medical malpractice"],
        taskIV: [{ termA: "Moral", termB: "Legal" }, { termA: "Public health", termB: "Individual rights" }],
        taskV: ["Accountability", "Transparency", "Vulnerability", "Dignity", "Integrity"]
      })
    ]
  },
  {
    id: "tech",
    title: "THEME 3: CUTTING-EDGE TECHNOLOGY",
    category: "Science",
    description: "Artificial intelligence, cybersecurity, and the societal impact of automation.",
    icon: "Cpu",
    variants: [
      createVariant(1, "The AI Revolution", {
        taskI: [
          { text: "Machine learning ________ enable computers to learn from massive datasets.", answer: "algorithms" },
          { text: "Artificial Intelligence has the potential to ________ various industries.", answer: "disrupt" },
          { text: "The ________ of autonomous vehicles raises significant safety concerns.", answer: "deployment" },
          { text: "Natural Language Processing allows machines to ________ human speech.", answer: "decipher" },
          { text: "Neural ________ are modeled after the human brain's architecture.", answer: "networks" },
          { text: "The ________ of AI into everyday life is happening rapidly.", answer: "integration" },
          { text: "Ethical ________ surrounding AI include bias and privacy.", answer: "considerations" },
          { text: "Generative models can ________ highly realistic images and text.", answer: "synthesize" },
          { text: "The ________ of superintelligence is a subject of intense debate.", answer: "feasibility" },
          { text: "AI systems require robust ________ to ensure they operate safely.", answer: "safeguards" },
          { text: "The ________ of information through AI can be exceptionally efficient.", answer: "processing" },
          { text: "Technological ________ is a theoretical point in the future where AI surpasses human intelligence.", answer: "singularity" }
        ],
        taskII: [
          { term: "Algorithm", definition: "A set of rules to be followed in calculations by a computer.", key: "a" },
          { term: "Neural Network", definition: "A computer system modeled on the human brain.", key: "b" },
          { term: "Singularity", definition: "A hypothetical point in time at which technological growth becomes uncontrollable.", key: "c" },
          { term: "Deployment", definition: "The action of bringing resources into effective action.", key: "d" },
          { term: "Synthesize", definition: "To combine elements into a whole.", key: "e" }
        ],
        taskIII: ["Deep learning", "Algorithmic bias", "Facial recognition", "Predictive analytics"],
        taskIV: [{ termA: "Human intelligence", termB: "Artificial intelligence" }, { termA: "Automation", termB: "Augmentation" }],
        taskV: ["Heuristics", "Architecture", "Scalability", "Optimization", "Inference"]
      }),
      createVariant(2, "Cybersecurity & Cryptography", {
        taskI: [
          { text: "Encryption is essential for protecting sensitive data from ________.", answer: "interception" },
          { text: "Cyber ________ are becoming increasingly sophisticated and frequent.", answer: "attacks" },
          { text: "Multi-factor ________ adds an extra layer of security to accounts.", answer: "authentication" },
          { text: "Vulnerability ________ involves searching for weaknesses in a system.", answer: "scanning" },
          { text: "A ________ acts as a barrier between a trusted and untrusted network.", answer: "firewall" },
          { text: "The ________ of digital assets is a major priority for businesses.", answer: "security" },
          { text: "Blockchain technology provides a decentralized and ________ ledger.", answer: "immutable" },
          { text: "Phishing scams use ________ emails to steal personal information.", answer: "deceptive" },
          { text: "The ________ of a system depends on its weakest link.", answer: "integrity" },
          { text: "Cyber ________ is the practice of protecting systems and networks.", answer: "hygiene" },
          { text: "Ransomware ________ can cripple large organizations.", answer: "infiltrations" },
          { text: "Zero-day ________ are weaknesses that are not yet known to the software vendor.", answer: "vulnerabilities" }
        ],
        taskII: [
          { term: "Encryption", definition: "The process of converting information into a secret code.", key: "a" },
          { term: "Authentication", definition: "The process of proving that something is genuine.", key: "b" },
          { term: "Immutable", definition: "Unchanging over time or unable to be changed.", key: "c" },
          { term: "Phishing", definition: "The fraudulent practice of sending emails masquerading as reputable companies.", key: "d" },
          { term: "Vulnerability", definition: "The quality or state of being exposed to the possibility of being attacked.", key: "e" }
        ],
        taskIII: ["Data breach", "End-to-end encryption", "Social engineering", "Cyber warfare"],
        taskIV: [{ termA: "Encryption", termB: "Decryption" }, { termA: "White-hat", termB: "Black-hat" }],
        taskV: ["Penetration", "Redundancy", "Protocol", "Surveillance", "Anonymity"]
      }),
      createVariant(3, "The Internet of Things (IoT)", {
        taskI: [
          { text: "Smart devices ________ with each other to create a seamless ecosystem.", answer: "interoperate" },
          { text: "The ________ of IoT devices has led to concerns about data privacy.", answer: "proliferation" },
          { text: "Connected sensors can ________ real-time data for analysis.", answer: "collect" },
          { text: "The ________ of 5G networks will accelerate the adoption of IoT.", answer: "implementation" },
          { text: "Edge computing allows for data ________ closer to the source.", answer: "processing" },
          { text: "The ________ of the power grid is being improved through smart technology.", answer: "resilience" },
          { text: "IoT applications ________ from smart homes to industrial automation.", answer: "range" },
          { text: "The ________ of massive datasets generated by IoT is a major challenge.", answer: "management" },
          { text: "Security ________ in IoT devices can expose users to cyber threats.", answer: "flaws" },
          { text: "The ________ of the digital and physical worlds is a key feature of IoT.", answer: "convergence" },
          { text: "Smart cities use IoT to ________ urban services and infrastructure.", answer: "optimize" },
          { text: "The ________ of IoT technology requires robust connectivity.", answer: "sustainability" }
        ],
        taskII: [
          { term: "Proliferation", definition: "Rapid increase in numbers.", key: "a" },
          { term: "Interoperability", definition: "The ability of computer systems to exchange and make use of information.", key: "b" },
          { term: "Convergence", definition: "The process of moving toward union or uniformity.", key: "c" },
          { term: "Optimization", definition: "The action of making the best or most effective use of a situation.", key: "d" },
          { term: "Latency", definition: "The delay before a transfer of data begins.", key: "e" }
        ],
        taskIII: ["Connected home", "Industrial automation", "Smart grid", "Wearable technology"],
        taskIV: [{ termA: "Centralized", termB: "Decentralized" }, { termA: "Edge", termB: "Cloud" }],
        taskV: ["Bandwidth", "Scalability", "Reliability", "Infrastructure", "Ecosystem"]
      })
    ]
  },
  {
    id: "study",
    title: "THEME 4: ACADEMIC RIGOR",
    category: "Education",
    description: "Pedagogy, cognitive acquisition, and the ethics of academic research.",
    icon: "BookOpen",
    variants: [
      createVariant(1, "Pedagogical Approaches", {
        taskI: [
          { text: "Modern ________ emphasizes student-centered learning and critical thinking.", answer: "pedagogy" },
          { text: "Differentiated instruction aims to ________ the diverse needs of learners.", answer: "address" },
          { text: "Formative ________ provides ongoing feedback to improve learning outcomes.", answer: "assessment" },
          { text: "The ________ of educational technology has transformed the classroom.", answer: "integration" },
          { text: "Inquiry-based learning encourages students to ________ and investigate.", answer: "explore" },
          { text: "The ________ of a curriculum should reflect current academic standards.", answer: "content" },
          { text: "Scaffolding is a technique used to ________ students as they learn new skills.", answer: "support" },
          { text: "Metacognition involves thinking about one's own ________ processes.", answer: "learning" },
          { text: "Collaborative learning fosters a sense of ________ and teamwork.", answer: "community" },
          { text: "The ________ of inclusive education is a global priority.", answer: "promotion" },
          { text: "Teachers must ________ their teaching styles to suit different environments.", answer: "adapt" },
          { text: "Academic ________ is essential for student success in higher education.", answer: "rigor" }
        ],
        taskII: [
          { term: "Pedagogy", definition: "The method and practice of teaching.", key: "a" },
          { term: "Curriculum", definition: "The subjects comprising a course of study in a school or college.", key: "b" },
          { term: "Metacognition", definition: "Awareness and understanding of one's own thought processes.", key: "c" },
          { term: "Formative", definition: "Serving to form something, especially having a profound influence.", key: "d" },
          { term: "Inquiry", definition: "An act of asking for information.", key: "e" }
        ],
        // Fixed: removed incorrect escaped quotes which caused parsing errors for taskIV and taskV
        taskIII: ["Flipped classroom", "Project-based learning", "Critical pedagogy", "Holistic education"],
        taskIV: [{ termA: "Formative", termB: "Summative" }, { termA: "Pedagogy", termB: "Andragogy" }],
        taskV: ["Didactic", "Cognitive", "Synthesis", "Evaluation", "Assessment"]
      }),
      createVariant(2, "Research Methodology", {
        taskI: [
          { text: "A rigorous ________ is essential for the validity of scientific findings.", answer: "methodology" },
          { text: "Quantitative research involves the ________ of numerical data.", answer: "analysis" },
          { text: "Qualitative ________ focuses on understanding human experiences and perspectives.", answer: "research" },
          { text: "The ________ of a hypothesis requires empirical evidence.", answer: "testing" },
          { text: "Researchers must ensure their study is ________ and unbiased.", answer: "objective" },
          { text: "Sample ________ is a critical step in the research process.", answer: "selection" },
          { text: "The ________ of data should be conducted with high precision.", answer: "collection" },
          { text: "Statistical ________ is used to determine the significance of results.", answer: "analysis" },
          { text: "Ethical approval is ________ for research involving human participants.", answer: "mandatory" },
          { text: "The ________ of the findings should be supported by the data.", answer: "interpretation" },
          { text: "Peer ________ ensures the quality and credibility of academic publications.", answer: "review" },
          { text: "Replicability is a ________ of scientific research.", answer: "cornerstone" }
        ],
        taskII: [
          { term: "Methodology", definition: "A system of methods used in a particular area of study or activity.", key: "a" },
          { term: "Quantitative", definition: "Relating to, measuring, or measured by the quantity of something.", key: "b" },
          { term: "Qualitative", definition: "Relating to, measuring, or measured by the quality of something.", key: "c" },
          { term: "Empirical", definition: "Based on, concerned with, or verifiable by observation or experience.", key: "d" },
          { term: "Significance", definition: "The quality of being worthy of attention; importance.", key: "e" }
        ],
        taskIII: ["Double-blind study", "Case study analysis", "Longitudinal research", "Meta-analysis"],
        taskIV: [{ termA: "Variable", termB: "Constant" }, { termA: "Theory", termB: "Fact" }],
        taskV: ["Validity", "Reliability", "Inference", "Hypothesis", "Correlation"]
      }),
      createVariant(3, "Academic Integrity", {
        taskI: [
          { text: "Plagiarism is a serious ________ of academic integrity.", answer: "violation" },
          { text: "Students must properly ________ all sources used in their work.", answer: "cite" },
          { text: "Academic ________ involves being honest and responsible in research.", answer: "honesty" },
          { text: "The ________ of academic records is essential for institutional credibility.", answer: "integrity" },
          { text: "Institutions have strict policies to ________ academic misconduct.", answer: "prevent" },
          { text: "Collaboration is encouraged, but students must ________ their own work.", answer: "produce" },
          { text: "The ________ of research ethics is a fundamental part of academic training.", answer: "study" },
          { text: "Intellectual ________ must be respected at all times.", answer: "property" },
          { text: "Falsifying data is a ________ form of academic fraud.", answer: "grave" },
          { text: "The ________ of academic standards is necessary to maintain the value of degrees.", answer: "upholding" },
          { text: "Students should seek ________ if they are unsure about citation rules.", answer: "guidance" },
          { text: "Academic ________ allows for the free exchange of ideas.", answer: "freedom" }
        ],
        taskII: [
          { term: "Plagiarism", definition: "The practice of taking someone else's work or ideas and passing them off as one's own.", key: "a" },
          { term: "Citation", definition: "A quotation from or reference to a book, paper, or author.", key: "b" },
          { term: "Integrity", definition: "The quality of being honest and having strong moral principles.", key: "c" },
          { term: "Honesty", definition: "The quality of being honest.", key: "d" },
          { term: "Misconduct", definition: "Unacceptable or improper behavior.", key: "e" }
        ],
        taskIII: ["Intellectual property", "Honor code", "Academic probation", "Peer evaluation"],
        taskIV: [{ termA: "Paraphrase", termB: "Quote" }, { termA: "Original", termB: "Copy" }],
        taskV: ["Authenticity", "Transparency", "Accountability", "Ethics", "Verification"]
      })
    ]
  },
  {
    id: "work-business",
    title: "THEME 5: CORPORATE STRATEGY",
    category: "Professional",
    description: "Fiscal management, market volatility, and organizational psychology.",
    icon: "Briefcase",
    variants: [
      createVariant(1, "Organizational Dynamics", {
        taskI: [
          { text: "Effective ________ is the cornerstone of any successful corporation.", answer: "leadership" },
          { text: "Corporate ________ has shifted toward more flexible and remote models.", answer: "culture" },
          { text: "Employee ________ is a key metric for measuring organizational health.", answer: "retention" },
          { text: "Strategic ________ involves setting long-term goals and objectives.", answer: "planning" },
          { text: "The ________ of a company often reflects its core values.", answer: "hierarchy" },
          { text: "Change ________ is necessary to navigate periods of transition.", answer: "management" },
          { text: "Diversity and inclusion initiatives foster a more ________ workplace.", answer: "equitable" },
          { text: "Performance ________ provide regular feedback to employees.", answer: "appraisals" },
          { text: "Conflict ________ skills are essential for managers.", answer: "resolution" },
          { text: "The ________ of internal communication can affect overall efficiency.", answer: "clarity" },
          { text: "Corporate social ________ is becoming increasingly important for consumers.", answer: "responsibility" },
          { text: "Team ________ activities help improve collaboration and trust.", answer: "building" }
        ],
        taskII: [
          { term: "Leadership", definition: "The action of leading a group of people or an organization.", key: "a" },
          { term: "Retention", definition: "The continued possession, use, or control of something.", key: "b" },
          { term: "Equitable", definition: "Fair and impartial.", key: "c" },
          { term: "Appraisal", definition: "An act of assessing something or someone.", key: "d" },
          { term: "Resolution", definition: "The action of solving a problem, dispute, or contentious matter.", key: "e" }
        ],
        taskIII: ["Corporate culture", "Employee engagement", "Vertical integration", "Horizontal management"],
        taskIV: [{ termA: "Manager", termB: "Leader" }, { termA: "Centralized", termB: "Decentralized" }],
        taskV: ["Accountability", "Transparency", "Vulnerability", "Resilience", "Integrity"]
      }),
      createVariant(2, "Fiscal Management", {
        taskI: [
          { text: "Budget ________ involves dividing resources among different departments.", answer: "allocation" },
          { text: "Fiscal ________ is necessary to ensure long-term stability.", answer: "discipline" },
          { text: "The company reported a significant increase in ________ revenue.", answer: "annual" },
          { text: "Market ________ makes financial forecasting extremely difficult.", answer: "volatility" },
          { text: "Diversification of the ________ helps mitigate financial risk.", answer: "portfolio" },
          { text: "The ________ of a company includes its cash and properties.", answer: "assets" },
          { text: "Total ________ represent the company's financial obligations.", answer: "liabilities" },
          { text: "Audit ________ ensure the accuracy of financial reports.", answer: "procedures" },
          { text: "Capital ________ is needed to fund new projects and expansions.", answer: "expenditure" },
          { text: "The ________ of dividends is determined by the board of directors.", answer: "distribution" },
          { text: "Economic ________ can lead to a decrease in consumer spending.", answer: "recessions" },
          { text: "Financial ________ is the study of money and investments.", answer: "analysis" }
        ],
        taskII: [
          { term: "Allocation", definition: "The action or process of allocating or distributing something.", key: "a" },
          { term: "Volatility", definition: "Liability to change rapidly and unpredictably.", key: "b" },
          { term: "Portfolio", definition: "A range of investments held by a person or organization.", key: "c" },
          { term: "Asset", definition: "A useful or valuable thing, person, or quality.", key: "d" },
          { term: "Liability", definition: "The state of being responsible for something, especially by law.", key: "e" }
        ],
        taskIII: ["Capital gains", "Net profit margin", "Fiscal policy", "Monetary policy"],
        taskIV: [{ termA: "Revenue", termB: "Profit" }, { termA: "Gross", termB: "Net" }],
        taskV: ["Bankruptcy", "Liquidity", "Solvency", "Inflation", "Deflation"]
      }),
      createVariant(3, "Global Commerce", {
        taskI: [
          { text: "Globalization has ________ the interconnectedness of world economies.", answer: "proliferated" },
          { text: "International trade ________ help reduce barriers to commerce.", answer: "agreements" },
          { text: "Market ________ involves entering a new geographical area.", answer: "expansion" },
          { text: "Supply chain ________ can disrupt global manufacturing.", answer: "disruptions" },
          { text: "The ________ of a local brand can be a complex process.", answer: "globalization" },
          { text: "Exchange rate ________ affect the profitability of exports.", answer: "fluctuations" },
          { text: "Multinational corporations ________ a vast majority of global wealth.", answer: "control" },
          { text: "Cultural ________ is essential for successful international business.", answer: "sensitivity" },
          { text: "The ________ of universal standards facilitates global trade.", answer: "adoption" },
          { text: "Global ________ can foster a sense of international cooperation.", answer: "commerce" },
          { text: "Trade ________ are often used to protect domestic industries.", answer: "tariffs" },
          { text: "The ________ of the global market is constantly evolving.", answer: "landscape" }
        ],
        taskII: [
          { term: "Proliferate", definition: "Increase rapidly in numbers; multiply.", key: "a" },
          { term: "Expansion", definition: "The action of becoming larger or more extensive.", key: "b" },
          { term: "Fluctuation", definition: "An irregular rising and falling in number or amount.", key: "c" },
          { term: "Sensitivity", definition: "The quality or condition of being sensitive.", key: "d" },
          { term: "Tariff", definition: "A tax or duty to be paid on a particular class of imports or exports.", key: "e" }
        ],
        taskIII: ["Emerging markets", "Free trade zone", "Outsourcing strategy", "Joint venture"],
        taskIV: [{ termA: "Imports", termB: "Exports" }, { termA: "Multinational", termB: "Transnational" }],
        taskV: ["Hegemony", "Sovereignty", "Sanction", "Embargo", "Ratification"]
      })
    ]
  },
  {
    id: "law",
    title: "THEME 6: JURISPRUDENCE & JUSTICE",
    category: "Society",
    description: "Judicial procedures, legislative drafting, and international law.",
    icon: "Gavel",
    variants: [
      createVariant(1, "Judicial Procedures", {
        taskI: [
          { text: "The ________ of the court is final and cannot be appealed.", answer: "judgment" },
          { text: "Due ________ is a fundamental right guaranteed by the constitution.", answer: "process" },
          { text: "The ________ presided over the complex civil lawsuit.", answer: "magistrate" },
          { text: "A ________ is a written law passed by a legislative body.", answer: "statute" },
          { text: "The ________ of the jury must be unanimous in criminal cases.", answer: "verdict" },
          { text: "Legal ________ involves the study of previous court decisions.", answer: "precedent" },
          { text: "The ________ presented a compelling case against the defendant.", answer: "prosecutor" },
          { text: "A ________ is a formal charge or accusation of a serious crime.", answer: "indictment" },
          { text: "The ________ system is designed to ensure a fair trial.", answer: "adversarial" },
          { text: "Expert ________ can be critical in complex forensic cases.", answer: "testimony" },
          { text: "The ________ of the innocent man was a victory for justice.", answer: "exoneration" },
          { text: "Legal ________ can be a barrier to justice for the poor.", answer: "fees" }
        ],
        taskII: [
          { term: "Statute", definition: "A written law passed by a legislative body.", key: "a" },
          { term: "Precedent", definition: "An earlier event or action that is regarded as an example.", key: "b" },
          { term: "Indictment", definition: "A formal charge or accusation of a serious crime.", key: "c" },
          { term: "Exoneration", definition: "The action of officially absolving someone from blame.", key: "d" },
          { term: "Testimony", definition: "A formal written or spoken statement, especially one given in a court of law.", key: "e" }
        ],
        taskIII: ["Habeas corpus", "Burden of proof", "Contempt of court", "Capital punishment"],
        taskIV: [{ termA: "Solicitor", termB: "Barrister" }, { termA: "Civil law", termB: "Criminal law" }],
        taskV: ["Jurisdiction", "Litigation", "Arbitration", "Mediation", "Subpoena"]
      }),
      createVariant(2, "Legislative Drafting", {
        taskI: [
          { text: "The ________ of new laws requires careful consideration of societal impact.", answer: "drafting" },
          { text: "A ________ is a proposed law presented to parliament for discussion.", answer: "bill" },
          { text: "The ________ of a treaty involves formal approval by the state.", answer: "ratification" },
          { text: "Legislative ________ are often used to refine the language of a bill.", answer: "amendments" },
          { text: "The ________ of a law is as important as its writing.", answer: "enforcement" },
          { text: "Regulatory ________ ensure that businesses comply with environmental laws.", answer: "frameworks" },
          { text: "The ________ of powers is a key principle of modern governance.", answer: "separation" },
          { text: "A ________ is a public declaration of policy and aims.", answer: "manifesto" },
          { text: "The ________ of a statute can lead to legal disputes.", answer: "ambiguity" },
          { text: "Public ________ is often sought before passing major legislation.", answer: "consultation" },
          { text: "The ________ of a law should be clear and concise.", answer: "language" },
          { text: "Constitutional ________ is the study of a country's founding principles.", answer: "law" }
        ],
        taskII: [
          { term: "Drafting", definition: "The action of writing a first version of a document.", key: "a" },
          { term: "Ratification", definition: "The action of signing or giving formal consent to a treaty.", key: "b" },
          { term: "Amendment", definition: "A minor change or addition designed to improve a text.", key: "c" },
          { term: "Framework", definition: "A basic structure underlying a system, concept, or text.", key: "d" },
          { term: "Manifesto", definition: "A public declaration of policy and aims.", key: "e" }
        ],
        taskIII: ["Checks and balances", "Rule of law", "Public interest", "Judicial review"],
        taskIV: [{ termA: "Legislative", termB: "Executive" }, { termA: "Statutory", termB: "Regulatory" }],
        taskV: ["Sovereignty", "Protocol", "Nullification", "Mandate", "Jurisprudence"]
      }),
      createVariant(3, "International Law", {
        taskI: [
          { text: "The ________ of human rights is a cornerstone of international law.", answer: "protection" },
          { text: "Treaties are ________ agreements between sovereign states.", answer: "binding" },
          { text: "The ________ of suspects can be a complex legal process.", answer: "extradition" },
          { text: "International ________ is used to resolve disputes between nations.", answer: "arbitration" },
          { text: "The ________ has no jurisdiction over the internal affairs of a state.", answer: "court" },
          { text: "Diplomatic ________ protects ambassadors from local laws.", answer: "immunity" },
          { text: "The UN works to promote global ________ and security.", answer: "peace" },
          { text: "Economic ________ are often used to pressure rogue states.", answer: "sanctions" },
          { text: "The ________ of a treaty requires the consent of all parties.", answer: "amendment" },
          { text: "Humanitarian ________ is sent to conflict zones to help civilians.", answer: "aid" },
          { text: "The ________ of sovereignty is a fundamental principle of the UN.", answer: "respect" },
          { text: "International ________ is governed by various conventions and protocols.", answer: "maritime" }
        ],
        taskII: [
          { term: "Extradition", definition: "The action of extraditing a person accused or convicted of a crime.", key: "a" },
          { term: "Arbitration", definition: "The use of an arbitrator to settle a dispute.", key: "b" },
          { term: "Immunity", definition: "Exemption from an obligation or penalty.", key: "c" },
          { term: "Sanction", definition: "A threatened penalty for disobeying a law or rule.", key: "d" },
          { term: "Sovereignty", definition: "The authority of a state to govern itself or another state.", key: "e" }
        ],
        taskIII: ["Universal jurisdiction", "War crimes tribunal", "Geneva Convention", "Diplomatic protocol"],
        taskIV: [{ termA: "Bilateral", termB: "Multilateral" }, { termA: "Ally", termB: "Adversary" }],
        taskV: ["Amnesty", "Hegemony", "Sanctity", "Redress", "Expatriation"]
      })
    ]
  },
  {
    id: "nature",
    title: "THEME 7: ECOLOGICAL SUSTAINABILITY",
    category: "Science",
    description: "Biodiversity loss, climate mitigation, and regenerative agriculture.",
    icon: "Leaf",
    variants: [
      createVariant(1, "Climate Mitigation", {
        taskI: [
          { text: "Carbon ________ is the process of capturing and storing atmospheric CO2.", answer: "sequestration" },
          { text: "The ________ of renewable energy is vital to meet climate goals.", answer: "acceleration" },
          { text: "Greenhouse gas ________ must be drastically reduced globally.", answer: "emissions" },
          { text: "Climate ________ involves adjusting to the changes already underway.", answer: "adaptation" },
          { text: "The ________ of the polar ice caps is a visible sign of global warming.", answer: "melting" },
          { text: "Carbon ________ schemes allow businesses to compensate for their emissions.", answer: "offset" },
          { text: "The ________ of fossil fuels is the primary driver of climate change.", answer: "combustion" },
          { text: "Sustainable ________ is necessary to protect the planet for future generations.", answer: "development" },
          { text: "The ________ of biodiversity is an urgent ecological crisis.", answer: "loss" },
          { text: "Technological ________ can help decarbonize various industries.", answer: "innovation" },
          { text: "The ________ of environmental policies requires international cooperation.", answer: "implementation" },
          { text: "Public ________ is essential to drive large-scale climate action.", answer: "awareness" }
        ],
        taskII: [
          { term: "Sequestration", definition: "The action of sequestering or being sequestered.", key: "a" },
          { term: "Emissions", definition: "The production and discharge of something, especially gas or radiation.", key: "b" },
          { term: "Adaptation", definition: "The action or process of adapting or being adapted.", key: "c" },
          { term: "Combustion", definition: "The process of burning something.", key: "d" },
          { term: "Decarbonize", definition: "To reduce the amount of gaseous carbon compounds released.", key: "e" }
        ],
        taskIII: ["Carbon footprint", "Global warming potential", "Renewable energy source", "Net zero goal"],
        taskIV: [{ termA: "Mitigation", termB: "Adaptation" }, { termA: "Renewable", termB: "Finite" }],
        taskV: ["Atmosphere", "Biosphere", "Ecosystem", "Sustainability", "Resilience"]
      }),
      createVariant(2, "Regenerative Agriculture", {
        taskI: [
          { text: "Regenerative ________ focuses on improving soil health and biodiversity.", answer: "agriculture" },
          { text: "Cover ________ help prevent soil erosion and improve fertility.", answer: "cropping" },
          { text: "Rotational ________ allows pastures to recover and sequester carbon.", answer: "grazing" },
          { text: "The ________ of synthetic fertilizers can harm local ecosystems.", answer: "overuse" },
          { text: "Agroforestry ________ trees into agricultural landscapes.", answer: "integrates" },
          { text: "Soil ________ is a major threat to global food security.", answer: "degradation" },
          { text: "Organic ________ avoids the use of harmful pesticides and herbicides.", answer: "farming" },
          { text: "The ________ of water resources is critical for sustainable agriculture.", answer: "management" },
          { text: "Farmers are ________ adopting regenerative practices to build resilience.", answer: "increasingly" },
          { text: "The ________ of food production should be transparent and sustainable.", answer: "cycle" },
          { text: "Biodiverse ________ systems are more resilient to pests and diseases.", answer: "cropping" },
          { text: "The ________ of small-scale farmers is vital for local food systems.", answer: "support" }
        ],
        taskII: [
          { term: "Regenerative", definition: "Of, relating to, or characterized by regeneration.", key: "a" },
          { term: "Erosion", definition: "The gradual destruction or diminution of something.", key: "b" },
          { term: "Biodiversity", definition: "The variety of life in the world or in a particular habitat.", key: "c" },
          { term: "Resilience", definition: "The capacity to recover quickly from difficulties.", key: "d" },
          { term: "Sustainability", definition: "The ability to be maintained at a certain rate or level.", key: "e" }
        ],
        taskIII: ["Soil health", "Carbon sink", "Permaculture design", "No-till farming"],
        taskIV: [{ termA: "Intensive", termB: "Extensive" }, { termA: "Organic", termB: "Conventional" }],
        taskV: ["Fertility", "Irrigation", "Pesticide", "Herbicide", "Depletion"]
      }),
      createVariant(3, "Conservation Biology", {
        taskI: [
          { text: "Wildlife ________ aim to protect endangered species and their habitats.", answer: "corridors" },
          { text: "Habitat ________ is a major cause of biodiversity loss.", answer: "fragmentation" },
          { text: "The ________ of invasive species can disrupt local ecosystems.", answer: "introduction" },
          { text: "Conservation ________ focus on the protection of entire landscapes.", answer: "efforts" },
          { text: "The ________ of environmental laws is necessary to prevent poaching.", answer: "enforcement" },
          { text: "Ecological ________ involves repairing damaged ecosystems.", answer: "restoration" },
          { text: "Genetic ________ is essential for the long-term survival of a species.", answer: "diversity" },
          { text: "The ________ of natural resources should be sustainable and fair.", answer: "use" },
          { text: "Public ________ plays a key role in the success of conservation projects.", answer: "engagement" },
          { text: "The ________ of protected areas is a global priority.", answer: "establishment" },
          { text: "Conservationists work to ________ the impact of human activities on nature.", answer: "mitigate" },
          { text: "The ________ of the biosphere depends on the health of its ecosystems.", answer: "integrity" }
        ],
        taskII: [
          { term: "Fragmentation", definition: "The process or state of breaking or being broken into small parts.", key: "a" },
          { term: "Restoration", definition: "The action of returning something to its former condition.", key: "b" },
          { term: "Diversity", definition: "A range of different things.", key: "c" },
          { term: "Mitigate", definition: "Make less severe, serious, or painful.", key: "d" },
          { term: "Integrity", definition: "The state of being whole and undivided.", key: "e" }
        ],
        taskIII: ["Keystone species", "Invasive species", "Ecological niche", "Trophic cascade"],
        taskIV: [{ termA: "Endangered", termB: "Extinct" }, { termA: "Wild", termB: "Captive" }],
        taskV: ["Preservation", "Sustainability", "Vulnerability", "Resilience", "Displacement"]
      })
    ]
  },
  {
    id: "travel",
    title: "THEME 8: GLOBAL TOURISM",
    category: "Leisure",
    description: "Socio-economic impacts of tourism, gentrification, and eco-travel.",
    icon: "Plane",
    variants: [
      createVariant(1, "The Socio-Economic Impact", {
        taskI: [
          { text: "Tourism can provide a significant ________ boost to developing nations.", answer: "economic" },
          { text: "Mass tourism can lead to the ________ of local cultures and traditions.", answer: "commodification" },
          { text: "Gentrification often occurs in areas with a high ________ of tourists.", answer: "concentration" },
          { text: "The ________ of tourism infrastructure can displace local residents.", answer: "expansion" },
          { text: "Sustainable tourism aims to ________ the negative impacts of travel.", answer: "minimize" },
          { text: "Cultural ________ is a side effect of global travel and communication.", answer: "homogenization" },
          { text: "The ________ of local businesses is vital for a sustainable tourism industry.", answer: "support" },
          { text: "Over-tourism can ________ local resources and infrastructure.", answer: "strain" },
          { text: "The ________ of the tourism industry varies depending on the season.", answer: "profitability" },
          { text: "Tourists should strive to ________ the local customs and etiquette.", answer: "respect" },
          { text: "The ________ of tourism policies requires collaboration between various stakeholders.", answer: "implementation" },
          { text: "Public ________ is necessary to promote responsible travel behavior.", answer: "awareness" }
        ],
        taskII: [
          { term: "Commodification", definition: "The action or process of treating something as a mere commodity.", key: "a" },
          { term: "Gentrification", definition: "The process of changing the character of a neighborhood.", key: "b" },
          { term: "Homogenization", definition: "The process of making things uniform or similar.", key: "c" },
          { term: "Concentration", definition: "The action or power of focusing one's attention or mental effort.", key: "d" },
          { term: "Infrastructure", definition: "The basic physical and organizational structures and facilities.", key: "e" }
        ],
        taskIII: ["Social displacement", "Cultural heritage site", "Economic dependency", "Sustainable travel"],
        taskIV: [{ termA: "Inbound", termB: "Outbound" }, { termA: "Domestic", termB: "International" }],
        taskV: ["Accessibility", "Vulnerability", "Authenticity", "Saturation", "Degradation"]
      }),
      createVariant(2, "Ecotourism & Ethics", {
        taskI: [
          { text: "Ecotourism focuses on ________ travel to natural areas.", answer: "responsible" },
          { text: "Conservation ________ are often funded through ecotourism revenue.", answer: "projects" },
          { text: "The ________ of environmental impacts is a key goal of eco-travel.", answer: "minimization" },
          { text: "Tourists can ________ in local conservation and community projects.", answer: "participate" },
          { text: "The ________ of ecotourism labels can sometimes be misleading.", answer: "use" },
          { text: "Sustainable ________ practices help protect fragile ecosystems.", answer: "travel" },
          { text: "The ________ of cultural heritage is a major priority for ecotourism.", answer: "preservation" },
          { text: "Eco-travelers should ________ their carbon footprint.", answer: "minimize" },
          { text: "The ________ of ethical guidelines is necessary to ensure the integrity of ecotourism.", answer: "establishment" },
          { text: "Local communities should ________ from the revenue generated through tourism.", answer: "benefit" },
          { text: "The ________ of the tourism industry depends on the health of the planet.", answer: "sustainability" },
          { text: "Public ________ is essential to promote the benefits of eco-travel.", answer: "engagement" }
        ],
        taskII: [
          { term: "Ecotourism", definition: "Tourism directed toward exotic, often threatened, natural environments.", key: "a" },
          { term: "Minimization", definition: "The action or process of reducing something to the smallest possible amount.", key: "b" },
          { term: "Revenue", definition: "The total income generated by a company.", key: "c" },
          { term: "Integrity", definition: "The quality of being honest and having strong moral principles.", key: "d" },
          { term: "Engagement", definition: "The action of engaging or being engaged.", key: "e" }
        ],
        taskIII: ["Biodiversity conservation", "Carbon offsetting", "Ethical travel guide", "Community-based tourism"],
        taskIV: [{ termA: "Eco", termB: "Mass" }, { termA: "Conservation", termB: "Preservation" }],
        taskV: ["Fragility", "Resilience", "Transparency", "Accountability", "Authenticity"]
      }),
      createVariant(3, "The Future of Travel", {
        taskI: [
          { text: "Technological ________ will drastically change the way we travel.", answer: "innovation" },
          { text: "Hyperloop technology aims to ________ travel times between cities.", answer: "reduce" },
          { text: "Space tourism is a ________ frontier for the travel industry.", answer: "nascent" },
          { text: "The ________ of sustainable travel options is becoming more common.", answer: "availability" },
          { text: "Digital ________ is a major trend in the hospitality sector.", answer: "transformation" },
          { text: "The ________ of autonomous vehicles will impact transportation.", answer: "deployment" },
          { text: "Smart ________ use technology to optimize tourism services.", answer: "cities" },
          { text: "The ________ of the global travel market is constantly shifting.", answer: "landscape" },
          { text: "Travelers are ________ seeking more personalized and unique experiences.", answer: "increasingly" },
          { text: "The ________ of the travel industry depends on its ability to adapt.", answer: "resilience" },
          { text: "Artificial Intelligence can ________ personalized travel itineraries.", answer: "generate" },
          { text: "The ________ of a global pandemic showed the vulnerability of the travel sector.", answer: "impact" }
        ],
        taskII: [
          { term: "Nascent", definition: "Just coming into existence and beginning to display signs of future potential.", key: "a" },
          { term: "Transformation", definition: "A thorough or dramatic change in form or appearance.", key: "b" },
          { term: "Deployment", definition: "The action of bringing resources into effective action.", key: "c" },
          { term: "Resilience", definition: "The capacity to recover quickly from difficulties.", key: "d" },
          { term: "Landscape", definition: "The visible features of an area of countryside or land.", key: "e" }
        ],
        taskIII: ["Space exploration", "Autonomous transport", "Virtual reality travel", "Personalized itinerary"],
        taskIV: [{ termA: "Physical", termB: "Virtual" }, { termA: "Evolution", termB: "Revolution" }],
        taskV: ["Innovation", "Scalability", "Accessibility", "Saturation", "Connectivity"]
      })
    ]
  },
  {
    id: "food",
    title: "THEME 9: GASTRONOMY & NUTRITION",
    category: "Lifestyle",
    description: "Culinary heritage, nutrition science, and the global food industry.",
    icon: "Utensils",
    variants: [
      createVariant(1, "Culinary Heritage", {
        taskI: [
          { text: "Traditional ________ is a vital part of a country's cultural identity.", answer: "cuisine" },
          { text: "The ________ of ancient recipes is necessary to protect culinary heritage.", answer: "preservation" },
          { text: "Culinary ________ often involve a combination of diverse flavors and techniques.", answer: "traditions" },
          { text: "Local ingredients are the ________ of any authentic dish.", answer: "cornerstone" },
          { text: "The ________ of international cuisines is a side effect of globalization.", answer: "diffusion" },
          { text: "Food festivals celebrate the ________ and creativity of culinary arts.", answer: "diversity" },
          { text: "The ________ of the farm-to-table movement promotes local food systems.", answer: "growth" },
          { text: "Traditional cooking methods are often passed down through ________.", answer: "generations" },
          { text: "The ________ of the food industry is influenced by global trends.", answer: "landscape" },
          { text: "Gourmet dining offers a unique and ________ experience for foodies.", answer: "exquisite" },
          { text: "The ________ of food production should be transparent and ethical.", answer: "cycle" },
          { text: "Public ________ is essential to promote the benefits of healthy eating.", answer: "awareness" }
        ],
        taskII: [
          { term: "Cuisine", definition: "A style or method of cooking, especially as characteristic of a particular country.", key: "a" },
          { term: "Preservation", definition: "The action of preserving something.", key: "b" },
          { term: "Diffusion", definition: "The spreading of something more widely.", key: "c" },
          { term: "Exquisite", definition: "Extremely beautiful and, typically, delicate.", key: "d" },
          { term: "Gastronomy", definition: "The practice or art of choosing, cooking, and eating good food.", key: "e" }
        ],
        taskIII: ["Farm-to-table", "Culinary arts", "Traditional recipe", "Slow food movement"],
        taskIV: [{ termA: "Gourmet", termB: "Fast food" }, { termA: "Authentic", termB: "Fusion" }],
        taskV: ["Delicacy", "Ingredients", "Seasoning", "Appetizer", "Banquet"]
      }),
      createVariant(2, "Nutrition Science", {
        taskI: [
          { text: "Nutritional ________ focuses on the study of nutrients and their impact on health.", answer: "science" },
          { text: "A ________ diet is essential for maintaining optimal well-being.", answer: "balanced" },
          { text: "The ________ of metabolism varies greatly between individuals.", answer: "rate" },
          { text: "Micronutrients like ________ and minerals are vital for bodily functions.", answer: "vitamins" },
          { text: "The ________ of calories should be appropriate for one's activity level.", answer: "intake" },
          { text: "Fiber is necessary for proper ________ and gut health.", answer: "digestion" },
          { text: "Antioxidants help ________ cells from damage caused by free radicals.", answer: "protect" },
          { text: "The ________ of processed foods is linked to various health issues.", answer: "consumption" },
          { text: "Public health ________ aim to promote healthy eating habits.", answer: "initiatives" },
          { text: "The ________ of nutritional information can be complex and confusing.", answer: "interpretation" },
          { text: "Nutritional ________ are often needed for people with specific deficiencies.", answer: "supplements" },
          { text: "The ________ of a healthy lifestyle requires long-term commitment.", answer: "adoption" }
        ],
        taskII: [
          { term: "Metabolism", definition: "The chemical processes that occur within a living organism.", key: "a" },
          { term: "Nutrient", definition: "A substance that provides nourishment essential for growth.", key: "b" },
          { term: "Antioxidant", definition: "A substance that inhibits oxidation.", key: "c" },
          { term: "Digestion", definition: "The process of breaking down food by mechanical and enzymatic action.", key: "d" },
          { term: "Well-being", definition: "The state of being comfortable, healthy, or happy.", key: "e" }
        ],
        taskIII: ["Dietary requirement", "Calorie deficit", "Glycemic index", "Amino acid"],
        taskIV: [{ termA: "Saturated", termB: "Unsaturated" }, { termA: "Vitamin", termB: "Mineral" }],
        taskV: ["Glucose", "Hydration", "Fiber", "Cholesterol", "Probiotic"]
      }),
      createVariant(3, "The Food Industry", {
        taskI: [
          { text: "The global ________ industry is a major driver of world economies.", answer: "food" },
          { text: "Food ________ systems ensure that food is safe and high-quality.", answer: "security" },
          { text: "The ________ of food production has reached an industrial scale.", answer: "efficiency" },
          { text: "Waste ________ is a major challenge for the food sector.", answer: "management" },
          { text: "The ________ of sustainable food options is becoming more common.", answer: "availability" },
          { text: "Consumer ________ has shifted toward healthier and more ethical choices.", answer: "behavior" },
          { text: "The ________ of international standards facilitates global food trade.", answer: "adoption" },
          { text: "Food ________ can provide information about ingredients and nutrients.", answer: "labeling" },
          { text: "The ________ of food supply chains can lead to price fluctuations.", answer: "instability" },
          { text: "Innovative technology is used to ________ food production and processing.", answer: "optimize" },
          { text: "The ________ of the food industry depends on its ability to adapt to changes.", answer: "sustainability" },
          { text: "Public ________ is essential to promote responsible food consumption.", answer: "engagement" }
        ],
        taskII: [
          { term: "Efficiency", definition: "The state or quality of being efficient.", key: "a" },
          { term: "Availability", definition: "The quality of being able to be used or obtained.", key: "b" },
          { term: "Adoption", definition: "The action or fact of choosing to take up, follow, or use something.", key: "c" },
          { term: "Labeling", definition: "The action of attaching a label to something.", key: "d" },
          { term: "Optimization", definition: "The action of making the best or most effective use of a situation.", key: "e" }
        ],
        taskIII: ["Global food chain", "Sustainable agriculture", "Food waste management", "Consumer behavior analysis"],
        taskIV: [{ termA: "Retail", termB: "Wholesale" }, { termA: "Local", termB: "Global" }],
        taskV: ["Revenue", "Accessibility", "Inventory", "Logistics", "Transparency"]
      })
    ]
  },
  {
    id: "psychology",
    title: "THEME 10: COGNITIVE PSYCHOLOGY",
    category: "Science",
    description: "Behavioral economics, neuroplasticity, and human development.",
    icon: "Brain",
    variants: [
      createVariant(1, "Behavioral Economics", {
        taskI: [
          { text: "Behavioral ________ combines psychology and economics to explain human decision-making.", answer: "economics" },
          { text: "The ________ of cognitive biases can lead to irrational choices.", answer: "presence" },
          { text: "Heuristics are mental ________ that help us make decisions fast.", answer: "shortcuts" },
          { text: "The ________ of information can affect how it is perceived.", answer: "framing" },
          { text: "Loss ________ is the tendency to prefer avoiding losses over acquiring gains.", answer: "aversion" },
          { text: "The ________ effect describes our tendency to overvalue things we own.", answer: "endowment" },
          { text: "Sunk ________ fallacy involves continuing a behavior due to previous investment.", answer: "cost" },
          { text: "Public ________ can be used to influence consumer behavior.", answer: "nudges" },
          { text: "The ________ of individual behavior is essential for economic modeling.", answer: "study" },
          { text: "Social ________ can significantly impact personal choices.", answer: "norms" },
          { text: "The ________ of rationality is a key theme in behavioral economics.", answer: "limit" },
          { text: "Researchers use ________ to test economic theories in controlled settings.", answer: "experiments" }
        ],
        taskII: [
          { term: "Heuristic", definition: "A mental shortcut that allows people to solve problems and make judgments quickly.", key: "a" },
          { term: "Aversion", definition: "A strong dislike or disinclination.", key: "b" },
          { term: "Endowment", definition: "The action of endowing something or someone.", key: "c" },
          { term: "Nudge", definition: "A light touch or push.", key: "d" },
          { term: "Rationality", definition: "The quality of being based on or in accordance with reason or logic.", key: "e" }
        ],
        taskIII: ["Cognitive bias", "Game theory", "Choice architecture", "Consumer psychology"],
        taskIV: [{ termA: "Rational", termB: "Irrational" }, { termA: "Heuristic", termB: "Algorithm" }],
        taskV: ["Perception", "Inference", "Stimulus", "Incentive", "Paradigm"]
      }),
      createVariant(2, "Neuroplasticity", {
        taskI: [
          { text: "Neuroplasticity is the brain's ________ to reorganize itself by forming new neural connections.", answer: "ability" },
          { text: "The ________ of the human brain is highly adaptable.", answer: "architecture" },
          { text: "Learning a new skill can ________ structural changes in the brain.", answer: "induce" },
          { text: "Recovery from brain ________ often relies on neuroplasticity.", answer: "injury" },
          { text: "Cognitive ________ involves training the brain to improve its functions.", answer: "rehabilitation" },
          { text: "The ________ of neural pathways depends on regular use and stimulation.", answer: "strength" },
          { text: "Environmental ________ can have a positive impact on brain health.", answer: "enrichment" },
          { text: "The ________ of neurogenesis continues throughout adulthood.", answer: "process" },
          { text: "Synaptic ________ is the process by which extra neurons and synaptic connections are eliminated.", answer: "pruning" },
          { text: "The brain's ________ allows it to compensate for lost functions.", answer: "resilience" },
          { text: "Mental ________ can help protect the brain from cognitive decline.", answer: "exercise" },
          { text: "The ________ of neuroplasticity has revolutionized our understanding of the brain.", answer: "discovery" }
        ],
        taskII: [
          { term: "Neuroplasticity", definition: "The ability of the brain to form and reorganize synaptic connections.", key: "a" },
          { term: "Induce", definition: "Succeed in persuading or influencing someone to do something.", key: "b" },
          { term: "Rehabilitation", definition: "The action of restoring someone to health or normal life through training.", key: "c" },
          { term: "Neurogenesis", definition: "The growth and development of nervous tissue.", key: "d" },
          { term: "Resilience", definition: "The capacity to recover quickly from difficulties.", key: "e" }
        ],
        taskIII: ["Neural pathway", "Cognitive reserve", "Brain development", "Synaptic connection"],
        taskIV: [{ termA: "Structural", termB: "Functional" }, { termA: "Nature", termB: "Nurture" }],
        taskV: ["Cognition", "Perception", "Inference", "Architecture", "Complexity"]
      }),
      createVariant(3, "Human Development", {
        taskI: [
          { text: "Developmental ________ focuses on the study of human growth across the lifespan.", answer: "psychology" },
          { text: "Early ________ experiences are critical for social and emotional development.", answer: "childhood" },
          { text: "The ________ between nature and nurture is a central theme in development.", answer: "interaction" },
          { text: "Adolescence is a period of significant ________ and psychological change.", answer: "biological" },
          { text: "Cognitive ________ involves the gradual acquisition of knowledge and skills.", answer: "acquisition" },
          { text: "Attachment ________ explains the importance of early bonds with caregivers.", answer: "theory" },
          { text: "The ________ of social skills is essential for successful integration.", answer: "development" },
          { text: "Aging is a ________ process that involves both growth and decline.", answer: "continuous" },
          { text: "The ________ of developmental milestones can vary between individuals.", answer: "timing" },
          { text: "Educational ________ should be tailored to the developmental stage of the learner.", answer: "interventions" },
          { text: "The ________ of the family environment can significantly impact development.", answer: "quality" },
          { text: "Research in development ________ inform social policies and practices.", answer: "should" }
        ],
        taskII: [
          { term: "Developmental", definition: "Concerned with the development of someone or something.", key: "a" },
          { term: "Interaction", definition: "Reciprocal action or influence.", key: "b" },
          { term: "Acquisition", definition: "An asset or object bought or obtained.", key: "c" },
          { term: "Attachment", definition: "An extra part or extension that is or can be attached to something.", key: "d" },
          { term: "Milestone", definition: "A significant stage or event in the development of something.", key: "e" }
        ],
        taskIII: ["Cognitive development", "Social emotional learning", "Identity formation", "Lifespan perspective"],
        taskIV: [{ termA: "Childhood", termB: "Adolescence" }, { termA: "Growth", termB: "Maturation" }],
        taskV: ["Ambivalence", "Disorder", "Trauma", "Temperament", "Cognition"]
      })
    ]
  },
  {
    id: "finance",
    title: "THEME 11: FISCAL GOVERNANCE",
    category: "Professional",
    description: "Macroeconomic stability, hedge funds, and sovereign debt analysis.",
    icon: "DollarSign",
    variants: [
      createVariant(1, "Macroeconomic Stability", {
        taskI: [
          { text: "Fiscal policy aims to manage the country's ________ and spending.", answer: "revenue" },
          { text: "Monetary policy is controlled by the ________ bank to regulate money supply.", answer: "central" },
          { text: "The high rate of ________ can erode the purchasing power of consumers.", answer: "inflation" },
          { text: "A trade ________ occurs when a country exports more than it imports.", answer: "surplus" },
          { text: "Economic ________ is necessary for long-term prosperity.", answer: "stability" },
          { text: "The government's ________ of resources can impact overall growth.", answer: "allocation" },
          { text: "The ________ of the national debt is a major political issue.", answer: "management" },
          { text: "Tax ________ help encourage investment in certain sectors.", answer: "rebates" },
          { text: "The ________ of the currency can affect the exchange rate.", answer: "valuation" },
          { text: "Sustainable ________ is a goal for many developing nations.", answer: "growth" },
          { text: "Market ________ makes short-term investing very difficult.", answer: "volatility" },
          { text: "The ________ of the economy depends on its ability to adapt.", answer: "resilience" }
        ],
        taskII: [
          { term: "Macroeconomic", definition: "Relating to the branch of economics concerned with large-scale factors.", key: "a" },
          { term: "Inflation", definition: "A general increase in prices and fall in the purchasing value of money.", key: "b" },
          { term: "Surplus", definition: "An amount of something left over when requirements have been met.", key: "c" },
          { term: "Allocation", definition: "The action or process of allocating or distributing something.", key: "d" },
          { term: "Volatility", definition: "Liability to change rapidly and unpredictably.", key: "e" }
        ],
        taskIII: ["Gross Domestic Product", "Consumer Price Index", "Interest rate hike", "Economic recession"],
        taskIV: [{ termA: "Fiscal", termB: "Monetary" }, { termA: "Surplus", termB: "Deficit" }],
        taskV: ["Bankruptcy", "Liquidity", "Solvency", "Inflation", "Deflation"]
      }),
      createVariant(2, "Investment Strategy", {
        taskI: [
          { text: "Hedge funds use various ________ to generate high returns.", answer: "strategies" },
          { text: "Diversification of the ________ helps mitigate financial risk.", answer: "portfolio" },
          { text: "High-yield ________ can be risky but very profitable.", answer: "securities" },
          { text: "The start-up is seeking ________ to fund its expansion.", answer: "equity" },
          { text: "Venture ________ provide funding to early-stage companies.", answer: "capitalists" },
          { text: "The ________ of dividends is determined by the board.", answer: "distribution" },
          { text: "Market ________ involves entering a new geographical area.", answer: "expansion" },
          { text: "Asset ________ is the process of dividing resources among investments.", answer: "allocation" },
          { text: "Financial ________ is necessary to assess the viability of projects.", answer: "analysis" },
          { text: "The ________ of a system depends on its weakest link.", answer: "integrity" },
          { text: "Investors seek a high ________ on their investment.", answer: "return" },
          { text: "Risk ________ is essential for long-term investing.", answer: "management" }
        ],
        taskII: [
          { term: "Strategy", definition: "A plan of action or policy designed to achieve a major or overall aim.", key: "a" },
          { term: "Portfolio", definition: "A range of investments held by a person or organization.", key: "b" },
          { term: "Equity", definition: "The value of the shares issued by a company.", key: "c" },
          { term: "Capitalist", definition: "A person who invests capital in a business, especially a large one.", key: "d" },
          { term: "Analysis", definition: "Detailed examination of the elements or structure of something.", key: "e" }
        ],
        taskIII: ["Insider trading", "Bull market", "Capital gains", "Brokerage fee"],
        taskIV: [{ termA: "Active", termB: "Passive" }, { termA: "Asset", termB: "Liability" }],
        taskV: ["Dividend", "Acquisition", "Volatility", "Liquidity", "Hedging"]
      }),
      createVariant(3, "Sovereign Debt", {
        taskI: [
          { text: "Sovereign debt ________ can have a devastating impact on a country's economy.", answer: "crises" },
          { text: "The government's ________ to repay its debt is essential for credibility.", answer: "ability" },
          { text: "International ________ can provide financial aid to struggling nations.", answer: "organizations" },
          { text: "A ________ is a formal charge or accusation of a serious crime.", answer: "indictment" },
          { text: "The ________ of the national budget requires fiscal discipline.", answer: "management" },
          { text: "Sovereign credit ________ help investors assess the risk of lending.", answer: "ratings" },
          { text: "The ________ of a state to govern its internal affairs is its sovereignty.", answer: "authority" },
          { text: "Debt ________ involves negotiating new terms for repayment.", answer: "restructuring" },
          { text: "Financial ________ is needed to prevent global economic instability.", answer: "cooperation" },
          { text: "The ________ of a treaty involves formal approval by the state.", answer: "ratification" },
          { text: "The ________ of the global market is constantly evolving.", answer: "landscape" },
          { text: "Economic ________ are often used to pressure rogue states.", answer: "sanctions" }
        ],
        taskII: [
          { term: "Crisis", definition: "A time of intense difficulty, trouble, or danger.", key: "a" },
          { term: "Credibility", definition: "The quality of being trusted and believed in.", key: "b" },
          { term: "Rating", definition: "A classification or ranking of someone or something.", key: "c" },
          { term: "Sovereignty", definition: "The authority of a state to govern itself.", key: "d" },
          { term: "Restructuring", definition: "Organize something differently of a company or system.", key: "e" }
        ],
        taskIII: ["National debt limit", "Fiscal austerity", "Budget deficit", "Economic stimulus"],
        taskIV: [{ termA: "Public", termB: "Private" }, { termA: "Internal", termB: "External" }],
        taskV: ["Bankruptcy", "Ratification", "Hegemony", "Sanction", "Embargo"]
      })
    ]
  },
  {
    id: "arts",
    title: "THEME 12: AESTHETIC PHILOSOPHY",
    category: "Culture",
    description: "Visual semantics, curation ethics, and postmodern literary theory.",
    icon: "Palette",
    variants: [
      createVariant(1, "Visual Semantics", {
        taskI: [
          { text: "Visual ________ involves the study of how images convey meaning.", answer: "semantics" },
          { text: "The artist used ________ to represent complex ideas and emotions.", answer: "symbolism" },
          { text: "The ________ of the painting was influence by the artist's experiences.", answer: "composition" },
          { text: "Modern art often ________ traditional conventions of realism.", answer: "challenges" },
          { text: "The ________ of colors can evoke strong emotional responses.", answer: "palette" },
          { text: "Abstract art focuses on ________ and emotion over realistic representation.", answer: "form" },
          { text: "The ________ between light and shadow creates a sense of depth.", answer: "contrast" },
          { text: "Visual ________ is the ability to interpret and create meaning from images.", answer: "literacy" },
          { text: "The ________ of the image can affect how it is perceived.", answer: "context" },
          { text: "Artistic ________ allows for the free expression of ideas.", answer: "freedom" },
          { text: "The ________ of a masterpiece is often a subject of intense study.", answer: "analysis" },
          { text: "The ________ between different artistic styles can lead to innovation.", answer: "interaction" }
        ],
        taskII: [
          { term: "Semantics", definition: "The branch of linguistics and logic concerned with meaning.", key: "a" },
          { term: "Symbolism", definition: "The use of symbols to represent ideas or qualities.", key: "b" },
          { term: "Composition", definition: "The nature of something's ingredients or constituents.", key: "c" },
          { term: "Contrast", definition: "The state of being strikingly different from something else.", key: "d" },
          { term: "Literacy", definition: "The ability to read and write.", key: "e" }
        ],
        taskIII: ["Artistic expression", "Visual metaphor", "Abstract expressionism", "Postmodern art"],
        taskIV: [{ termA: "Objective", termB: "Subjective" }, { termA: "Realism", termB: "Abstaction" }],
        taskV: ["Aesthetic", "Iconography", "Installation", "Tapestry", "Gallery"]
      }),
      createVariant(2, "Curation Ethics", {
        taskI: [
          { text: "The ________ of an exhibition requires careful consideration of cultural sensitivities.", answer: "curation" },
          { text: "Museums have a ________ to protect and preserve cultural heritage.", answer: "responsibility" },
          { text: "The ________ of artifacts should be conducted with high ethical standards.", answer: "acquisition" },
          { text: "Repatriation involves returning ________ to their country of origin.", answer: "artifacts" },
          { text: "The ________ of human remains in museums is a controversial issue.", answer: "display" },
          { text: "Curatorial ________ involves being honest and transparent about the history of items.", answer: "integrity" },
          { text: "The ________ between different stakeholders is essential for ethical curation.", answer: "collaboration" },
          { text: "Public ________ is necessary to promote the benefits of museums.", answer: "engagement" },
          { text: "The ________ of cultural values through art is a form of soft power.", answer: "diffusion" },
          { text: "Museums should strive to provide an ________ and diverse experience.", answer: "inclusive" },
          { text: "The ________ of artifacts depends on their condition and significance.", answer: "valuation" },
          { text: "Ethical ________ often arise in the management of museum collections.", answer: "dilemmas" }
        ],
        taskII: [
          { term: "Curation", definition: "The action or process of selecting, organizing, and looking after items.", key: "a" },
          { term: "Artifact", definition: "An object made by a human being, typically one of cultural or historical interest.", key: "b" },
          { term: "Repatriation", definition: "The return of someone to their own country.", key: "c" },
          { term: "Integrity", definition: "The quality of being honest and having strong moral principles.", key: "d" },
          { term: "Engagement", definition: "The action of engaging or being engaged.", key: "e" }
        ],
        taskIII: ["Cultural heritage preservation", "Ethical curation guide", "Museum management", "Artistic integrity"],
        taskIV: [{ termA: "Original", termB: "Reproduction" }, { termA: "Private", termB: "Public" }],
        taskV: ["Aesthetic", "Provenance", "Restoration", "Exhibition", "Gallantry"]
      }),
      createVariant(3, "Postmodern Theory", {
        taskI: [
          { text: "Postmodernism ________ traditional grand narratives and structures.", answer: "rejects" },
          { text: "Intertextuality is the ________ between different literary works.", answer: "relationship" },
          { text: "The ________ of reality is a central theme in postmodern theory.", answer: "subjectivity" },
          { text: "Metafiction is a form of writing that ________ about its own construction.", answer: "reflects" },
          { text: "The ________ between high and low culture is blurred in postmodernism.", answer: "distinction" },
          { text: "Deconstruction involves ________ the underlying assumptions of a text.", answer: "analyzing" },
          { text: "The ________ of the individual is often seen as fragmented in postmodernity.", answer: "identity" },
          { text: "Hyperreality describes a state where the ________ is indistinguishable from reality.", answer: "simulated" },
          { text: "The ________ of absolute truth is challenged in postmodern thought.", answer: "existence" },
          { text: "Pastiche is a work of art that ________ the style of another work.", answer: "imitates" },
          { text: "The ________ of language in constructing meaning is a major focus of theory.", answer: "role" },
          { text: "Postmodern ________ often incorporates humor, irony, and parody.", answer: "literature" }
        ],
        taskII: [
          { term: "Deconstruction", definition: "A method of critical analysis of philosophical and literary language.", key: "a" },
          { term: "Intertextuality", definition: "The relationship between literary texts.", key: "b" },
          { term: "Metafiction", definition: "Fiction in which the author self-consciously alludes to the artificiality.", key: "c" },
          { term: "Pastiche", definition: "An artistic work in a style that imitates that of another work.", key: "d" },
          { term: "Hyperreality", definition: "An inability of consciousness to distinguish reality from a simulation.", key: "e" }
        ],
        taskIII: ["Post-structuralism", "Narrative arc", "Literary device", "Critical theory"],
        taskIV: [{ termA: "Modernism", termB: "Postmodernism" }, { termA: "Fiction", termB: "Non-fiction" }],
        taskV: ["Allegory", "Climax", "Diction", "Protagonist", "Rhetoric"]
      })
    ]
  },
  {
    id: "social-media",
    title: "THEME 13: DIGITAL SOCIOLOGY",
    category: "Communication",
    description: "Algorithmic governance, echo chambers, and the erosion of digital privacy.",
    icon: "MessageSquare",
    variants: [
      createVariant(1, "Algorithmic Governance", {
        taskI: [
          { text: "Algorithms ________ control the flow of information on social media platforms.", answer: "significantly" },
          { text: "The ________ of data-driven governance raises ethical concerns.", answer: "rise" },
          { text: "Personalized ________ can inadvertently create polarized echo chambers.", answer: "feeds" },
          { text: "The ________ of user behavior through AI is exceptionally detailed.", answer: "tracking" },
          { text: "Transparency in how algorithms ________ is necessary for accountability.", answer: "operate" },
          { text: "The ________ of digital platforms has led to a shift in political power.", answer: "ascendancy" },
          { text: "Algorithmic ________ can perpetuate existing social inequalities.", answer: "bias" },
          { text: "The ________ of misinformation is accelerated through viral algorithms.", answer: "spread" },
          { text: "Users are ________ to the subtle influence of recommendation systems.", answer: "susceptible" },
          { text: "The ________ of public discourse is increasingly mediated by AI.", answer: "nature" },
          { text: "Data ________ is a major priority for digital platforms.", answer: "security" },
          { text: "The ________ of the digital landscape is constantly evolving.", answer: "architecture" }
        ],
        taskII: [
          { term: "Algorithm", definition: "A process or set of rules to be followed in calculations.", key: "a" },
          { term: "Bias", definition: "Prejudice in favor of or against one thing, person, or group.", key: "b" },
          { term: "Ascendancy", definition: "Occupation of a position of dominant power or influence.", key: "c" },
          { term: "Discourse", definition: "Written or spoken communication or debate.", key: "d" },
          { term: "Architecture", definition: "The complex or carefully designed structure of something.", key: "e" }
        ],
        taskIII: ["Algorithmic transparency", "Data privacy policy", "User engagement metric", "Digital ecosystem"],
        taskIV: [{ termA: "Human", termB: "Algorithm" }, { termA: "Public", termB: "Private" }],
        taskV: ["Monetization", "Engagement", "Accessibility", "Transparency", "Authenticity"]
      }),
      createVariant(2, "Digital Privacy", {
        taskI: [
          { text: "The ________ of personal data is a fundamental human right.", answer: "protection" },
          { text: "Digital surveillance has become a ________ part of modern life.", answer: "pervasive" },
          { text: "Encryption is essential for ________ sensitive communication.", answer: "securing" },
          { text: "The ________ of data breaches can have severe consequences.", answer: "impact" },
          { text: "Privacy settings should be ________ and easy to manage.", answer: "transparent" },
          { text: "The ________ of user information for ad revenue is a major concern.", answer: "exploitation" },
          { text: "Data ________ laws are necessary to regulate digital platforms.", answer: "privacy" },
          { text: "The ________ of anonymity online is being challenged by tracking tech.", answer: "eroding" },
          { text: "Users must ________ the ethical implications of sharing data.", answer: "consider" },
          { text: "Digital ________ is the practice of protecting systems and networks.", answer: "hygiene" },
          { text: "The ________ of personal information should be carefully managed.", answer: "flow" },
          { text: "The ________ of digital rights is a growing movement.", answer: "promotion" }
        ],
        taskII: [
          { term: "Pervasive", definition: "Spreading widely throughout an area or a group of people.", key: "a" },
          { term: "Surveillance", definition: "Close observation, especially of a suspected spy or criminal.", key: "b" },
          { term: "Encryption", definition: "The process of converting information into a secret code.", key: "c" },
          { term: "Exploitation", definition: "The action or fact of treating someone unfairly.", key: "d" },
          { term: "Hygiene", definition: "Conditions or practices conducive to maintaining health.", key: "e" }
        ],
        taskIII: ["Data protection regulation", "Online anonymity", "Privacy advocacy", "Social engineering"],
        taskIV: [{ termA: "Anonymity", termB: "Accountability" }, { termA: "Public", termB: "Private" }],
        taskV: ["Transparency", "Accessibility", "Vulnerability", "Integrity", "Connectivity"]
      }),
      createVariant(3, "The Echo Chamber", {
        taskI: [
          { text: "Echo chambers ________ existing beliefs and polarize opinions.", answer: "reinforce" },
          { text: "The ________ of misinformation is faster within closed networks.", answer: "spread" },
          { text: "Users are often ________ to information that challenges their views.", answer: "resistant" },
          { text: "Social media ________ can inadvertently create polarized groups.", answer: "platforms" },
          { text: "The ________ of critical thinking is necessary to combat echo chambers.", answer: "promotion" },
          { text: "Diversity of ________ is essential for a healthy democracy.", answer: "perspectives" },
          { text: "The ________ of digital communication has led to a shift in social dynamics.", answer: "nature" },
          { text: "Algorithmic ________ can perpetuate existing social divisions.", answer: "bias" },
          { text: "The ________ of public discourse is increasingly fragmented.", answer: "quality" },
          { text: "Digital literacy ________ can help users navigate online information.", answer: "programs" },
          { text: "The ________ of a balanced news consumption is a major challenge.", answer: "maintenance" },
          { text: "The ________ of echo chambers on political outcomes is significant.", answer: "impact" }
        ],
        taskII: [
          { term: "Reinforce", definition: "Strengthen or support.", key: "a" },
          { term: "Polarize", definition: "Restrict the vibrations of to one direction.", key: "b" },
          { term: "Perspective", definition: "A particular attitude toward or way regarding something.", key: "c" },
          { term: "Discourse", definition: "Written or spoken communication or debate.", key: "d" },
          { term: "Maintenance", definition: "The process of maintaining or preserving someone or something.", key: "e" }
        ],
        taskIII: ["Confirmation bias", "Digital literacy", "Public discourse", "Social media filter"],
        taskIV: [{ termA: "Inbound", termB: "Outbound" }, { termA: "Truth", termB: "Fake" }],
        taskV: ["Moderation", "Polarization", "Syndication", "Vulnerability", "Integrity"]
      })
    ]
  },
  {
    id: "science",
    title: "THEME 14: SCIENTIFIC INNOVATION",
    category: "Science",
    description: "Quantum mechanics, genetic modification, and theoretical cosmology.",
    icon: "Cpu",
    variants: [
      createVariant(1, "Quantum Mechanics", {
        taskI: [
          { text: "Quantum ________ allows for particles to be in multiple states simultaneously.", answer: "superposition" },
          { text: "Entanglement describes a state where particles are ________ linked.", answer: "intrinsically" },
          { text: "The ________ of quantum computing is a subject of intense research.", answer: "feasibility" },
          { text: "Heisenberg's ________ principle states that certain pairs of physical properties cannot be known exactly.", answer: "uncertainty" },
          { text: "Quantum ________ involves the study of the smallest particles in the universe.", answer: "physics" },
          { text: "The ________ of quantum mechanics has revolutionized our understanding of reality.", answer: "discovery" },
          { text: "Researchers are searching for a ________ to unify quantum mechanics and general relativity.", answer: "theory" },
          { text: "The ________ of quantum communication is exceptionally secure.", answer: "nature" },
          { text: "Schrödinger's ________ is a famous thought experiment in quantum physics.", answer: "cat" },
          { text: "The ________ between the two particles was instantaneous.", answer: "connection" },
          { text: "Quantum ________ is the study of how information can be processed using quantum systems.", answer: "information" },
          { text: "The ________ of the new tech depends on its ability to scale.", answer: "scalability" }
        ],
        taskII: [
          { term: "Superposition", definition: "The action of placing one thing on or above another.", key: "a" },
          { term: "Entanglement", definition: "The action or fact of entangling or being entangled.", key: "b" },
          { term: "Uncertainty", definition: "The state of being uncertain.", key: "c" },
          { term: "Feasibility", definition: "The state or degree of being easily or conveniently done.", key: "d" },
          { term: "Scalability", definition: "The capacity to be changed in size or scale.", key: "e" }
        ],
        taskIII: ["Wave-particle duality", "Quantum entanglement", "Uncertainty principle", "String theory"],
        taskIV: [{ termA: "Classical", termB: "Quantum" }, { termA: "Particle", termB: "Wave" }],
        taskV: ["Superposition", "Architecture", "Complexity", "Optimization", "Inference"]
      }),
      createVariant(2, "Genetic Modification", {
        taskI: [
          { text: "CRISPR-Cas9 is a revolutionary tool for ________ editing.", answer: "genome" },
          { text: "Genetic ________ has the potential to cure various hereditary diseases.", answer: "modification" },
          { text: "The ________ of genetically modified organisms is strictly regulated.", answer: "use" },
          { text: "Ethical ________ surrounding gene editing include off-target effects.", answer: "considerations" },
          { text: "The ________ of new traits into a species is a complex process.", answer: "introduction" },
          { text: "Bioethical ________ are needed to guide the development of genetic technologies.", answer: "frameworks" },
          { text: "The ________ of genetic information should be transparent and ethical.", answer: "management" },
          { text: "Genetic ________ can provide valuable information about a person's health.", answer: "testing" },
          { text: "The ________ of the new technology is constantly evolving.", answer: "landscape" },
          { text: "Successful gene therapy requires a ________ understanding of the underlying biology.", answer: "comprehensive" },
          { text: "The ________ of genetic modification on ecosystems is a major concern.", answer: "impact" },
          { text: "Public ________ is essential to drive the ethical development of genetics.", answer: "engagement" }
        ],
        taskII: [
          { term: "Genome", definition: "The haploid set of chromosomes in a gamete or microorganism.", key: "a" },
          { term: "Modification", definition: "The action of modifying something.", key: "b" },
          { term: "Hereditary", definition: "Conferred by or based on inheritance.", key: "c" },
          { term: "Framework", definition: "A basic structure underlying a system, concept, or text.", key: "d" },
          { term: "Engagement", definition: "The action of engaging or being engaged.", key: "e" }
        ],
        taskIII: ["Genetic engineering", "Germline editing", "Ethical framework", "Gene therapy trial"],
        taskIV: [{ termA: "Inherent", termB: "Acquired" }, { termA: "Natural", termB: "Synthetic" }],
        taskV: ["Mutation", "Inheritance", "Sovereignty", "Sanctity", "Authenticity"]
      }),
      createVariant(3, "Theoretical Cosmology", {
        taskI: [
          { text: "The Big Bang ________ is the prevailing model for the origin of the universe.", answer: "theory" },
          { text: "Cosmic ________ describes the rapid expansion of the early universe.", answer: "inflation" },
          { text: "Dark matter and dark energy ________ for a vast majority of the universe's mass.", answer: "account" },
          { text: "The ________ of the cosmic microwave background provides evidence for the Big Bang.", answer: "discovery" },
          { text: "Theoretical ________ focuses on the study of the entire universe.", answer: "cosmology" },
          { text: "The ________ of black holes is a subject of intense research.", answer: "nature" },
          { text: "Researchers are searching for a ________ to unify gravity and quantum mechanics.", answer: "theory" },
          { text: "The ________ of space-time is influenced by gravity.", answer: "curvature" },
          { text: "The ________ of the universe depends on its density.", answer: "fate" },
          { text: "Modern ________ use massive telescopes and satellites to observe the cosmos.", answer: "observatories" },
          { text: "The ________ of gravitational waves has opened a new window into the universe.", answer: "detection" },
          { text: "The ________ of information through light and other radiation is exceptionally fast.", answer: "transmission" }
        ],
        taskII: [
          { term: "Theory", definition: "A system of ideas intended to explain something.", key: "a" },
          { term: "Inflation", definition: "The action of inflating something or the condition of being inflated.", key: "b" },
          { term: "Cosmology", definition: "The science of the origin and development of the universe.", key: "c" },
          { term: "Curvature", definition: "The fact of being curved or the degree to which something is curved.", key: "d" },
          { term: "Detection", definition: "The action or process of identifying the presence of something.", key: "e" }
        ],
        taskIII: ["Event horizon", "Cosmic microwave background", "Gravitational wave", "Multiverse theory"],
        taskIV: [{ termA: "Static", termB: "Dynamic" }, { termA: "Visible", termB: "Dark" }],
        taskV: ["Momentum", "Radiation", "Symmetry", "Hierarchy", "Authenticity"]
      })
    ]
  },
  {
    id: "fashion",
    title: "THEME 15: THE FASHION INDUSTRY",
    category: "Culture",
    description: "Haute couture, fast fashion ethics, and consumer behavior analysis.",
    icon: "User",
    variants: [
      createVariant(1, "Haute Couture & Design", {
        taskI: [
          { text: "Haute couture involves the creation of exclusive, ________ clothing.", answer: "bespoke" },
          { text: "The ________ of the design reflects the artist's creative vision.", answer: "integrity" },
          { text: "Paris is considered the global ________ for high-end fashion.", answer: "epicenter" },
          { text: "Fine textiles like silk and ________ are essential for couture.", answer: "cashmere" },
          { text: "The ________ of the runway show is meticulously planned.", answer: "choreography" },
          { text: "Artistic ________ allows for the free expression of fashion ideas.", answer: "freedom" },
          { text: "The ________ of a masterpiece is often a subject of intense study.", answer: "analysis" },
          { text: "Traditional ________ is a vital part of the couture process.", answer: "craftsmanship" },
          { text: "The ________ between different fashion styles can lead to innovation.", answer: "interaction" },
          { text: "High-end fashion ________ a small but influential market.", answer: "targets" },
          { text: "The ________ of a brand is built through quality and consistency.", answer: "prestige" },
          { text: "The ________ of the new collection was a resounding success.", answer: "launch" }
        ],
        taskII: [
          { term: "Bespoke", definition: "Made for a particular customer or user.", key: "a" },
          { term: "Epicenter", definition: "The point on the earth's surface vertically above the focus of an earthquake.", key: "b" },
          { term: "Integrity", definition: "The quality of being honest and having strong moral principles.", key: "c" },
          { term: "Craftsmanship", definition: "Skill in a particular craft.", key: "d" },
          { term: "Prestige", definition: "Widespread respect and admiration felt for someone or something.", key: "e" }
        ],
        taskIII: ["Artistic direction", "Visual semantics", "Traditional embroidery", "Couture atelier"],
        taskIV: [{ termA: "Bespoke", termB: "Retail" }, { termA: "Original", termB: "Copy" }],
        taskV: ["Aesthetic", "Accessory", "Catalogue", "Collection", "Runway"]
      }),
      createVariant(2, "Fast Fashion Ethics", {
        taskI: [
          { text: "Fast fashion is characterized by the ________ production of cheap clothing.", answer: "rapid" },
          { text: "The environmental ________ of the fashion industry is exceptionally high.", answer: "impact" },
          { text: "Labor ________ in developing nations are a major ethical concern.", answer: "conditions" },
          { text: "Sustainable fashion ________ to reduce the negative impacts of the industry.", answer: "strives" },
          { text: "Consumer ________ has shifted toward more ethical and transparent brands.", answer: "behavior" },
          { text: "The ________ of textile waste in landfills is a major problem.", answer: "accumulation" },
          { text: "Ethical ________ are often fund through fair trade premiums.", answer: "initiatives" },
          { text: "Transparency in the ________ is necessary for consumer trust.", answer: "supply-chain" },
          { text: "The ________ of sustainable materials is becoming more common.", answer: "adoption" },
          { text: "Fashion ________ can provide valuable information about a person's values.", answer: "choices" },
          { text: "The ________ of the fashion industry depends on its ability to adapt.", answer: "sustainability" },
          { text: "Public ________ is essential to promote responsible fashion consumption.", answer: "awareness" }
        ],
        taskII: [
          { term: "Accumulation", definition: "The acquisition or gradual gathering of something.", key: "a" },
          { term: "Transparency", definition: "The quality of being done in an open way.", key: "b" },
          { term: "Sustainability", definition: "The ability to be maintained at a certain rate or level.", key: "c" },
          { term: "Condition", definition: "The state of something with regard to its appearance.", key: "d" },
          { term: "Exploitation", definition: "The action or fact of treating someone unfairly.", key: "e" }
        ],
        taskIII: ["Circular economy", "Fair trade agreement", "Textile recycling", "Consumer behavior analysis"],
        taskIV: [{ termA: "Slow", termB: "Fast" }, { termA: "Synthetic", termB: "Natural" }],
        taskV: ["Revenue", "Accessibility", "Saturation", "Degradation", "Accountability"]
      }),
      createVariant(3, "Consumer Behavior", {
        taskI: [
          { text: "Consumer behavior is ________ by various psychological and social factors.", answer: "influenced" },
          { text: "Brand ________ is built through positive customer experiences.", answer: "loyalty" },
          { text: "Market ________ involves dividing a broad market into subsets.", answer: "segmentation" },
          { text: "Digital ________ is a major priority for modern retailers.", answer: "transformation" },
          { text: "The ________ of social media has changed how we shop.", answer: "ascendancy" },
          { text: "Personalized ________ can inadvertently create polarized groups.", answer: "feeds" },
          { text: "Data ________ is necessary for accurate market analysis.", answer: "security" },
          { text: "Transparency in how data ________ is necessary for accountability.", answer: "operate" },
          { text: "The ________ of digital platforms has led to a shift in consumer power.", answer: "rise" },
          { text: "Social ________ can significantly impact personal choices.", answer: "norms" },
          { text: "The ________ of the global market is constantly evolving.", answer: "landscape" },
          { text: "Public ________ is essential to drive the ethical development of retail.", answer: "engagement" }
        ],
        taskII: [
          { term: "Influence", definition: "The capacity to have an effect on the character.", key: "a" },
          { term: "Loyalty", definition: "The quality of being loyal.", key: "b" },
          { term: "Segmentation", definition: "Division into separate parts or sections.", key: "c" },
          { term: "Ascendancy", definition: "Occupation of a position of dominant power or influence.", key: "d" },
          { term: "Engagement", definition: "The action of engaging or being engaged.", key: "e" }
        ],
        taskIII: ["Market research", "Consumer trend", "Brand positioning", "Purchase decision"],
        taskIV: [{ termA: "Rational", termB: "Irrational" }, { termA: "Public", termB: "Private" }],
        taskV: ["Monetization", "Transparency", "Vulnerability", "Integrity", "Connectivity"]
      })
    ]
  },
  {
    id: "relationships",
    title: "THEME 16: SOCIAL PSYCHOLOGY",
    category: "Lifestyle",
    description: "Interpersonal dynamics, conflict resolution, and the erosion of social cohesion.",
    icon: "Heart",
    variants: [
      createVariant(1, "Interpersonal Dynamics", {
        taskI: [
          { text: "Interpersonal ________ involves the study of relationships between individuals.", answer: "psychology" },
          { text: "Empathy is the ________ to understand and share others' feelings.", answer: "ability" },
          { text: "Conflict ________ skills are essential for healthy relationships.", answer: "resolution" },
          { text: "Effective communication requires ________ and active listening.", answer: "clarity" },
          { text: "Trust is the ________ of any meaningful connection.", answer: "foundation" },
          { text: "Social ________ is vital for mental and emotional well-being.", answer: "support" },
          { text: "The ________ of a relationship depends on the effort of both parties.", answer: "quality" },
          { text: "Vulnerability allows for ________ and deeper bonds.", answer: "authenticity" },
          { text: "Shared ________ and interests can strengthen social connections.", answer: "values" },
          { text: "The ________ of social norms can lead to social ostracism.", answer: "violation" },
          { text: "Human ________ is a complex process that involves both growth and change.", answer: "development" },
          { text: "The ________ of digital communication has altered social dynamics.", answer: "nature" }
        ],
        taskII: [
          { term: "Resolution", definition: "The action of solving a problem.", key: "a" },
          { term: "Foundation", definition: "The lowest load-bearing part of a building.", key: "b" },
          { term: "Authenticity", definition: "The quality of being authentic.", key: "c" },
          { term: "Ostracism", definition: "Exclusion from a society or group.", key: "d" },
          { term: "Cohesion", definition: "The action or fact of forming a united whole.", key: "e" }
        ],
        taskIII: ["Social exchange theory", "Conflict management", "Interpersonal communication", "Social support network"],
        taskIV: [{ termA: "Empathy", termB: "Sympathy" }, { termA: "Formal", termB: "Informal" }],
        taskV: ["Solidarity", "Tolerance", "Vulnerability", "Diplomacy", "Rapport"]
      }),
      createVariant(2, "The Erosion of Social Cohesion", {
        taskI: [
          { text: "Social ________ describes the bonds that hold a society together.", answer: "cohesion" },
          { text: "Polarization can ________ social cohesion and lead to conflict.", answer: "erode" },
          { text: "The ________ of public discourse is essential for a healthy democracy.", answer: "quality" },
          { text: "Digital echo chambers can ________ existing social divisions.", answer: "reinforce" },
          { text: "Economic ________ can lead to a decrease in social trust.", answer: "inequality" },
          { text: "The ________ of traditional communities has altered the social landscape.", answer: "fragmentation" },
          { text: "Public trust in institutions has ________ significantly over the last decade.", answer: "eroded" },
          { text: "Diversity of ________ is essential for a healthy and vibrant society.", answer: "perspectives" },
          { text: "Social media algorithms can inadvertent ________ misinformation.", answer: "amplify" },
          { text: "The ________ of social isolation is a major concern in modern life.", answer: "rise" },
          { text: "Public health ________ aim to promote the well-being of the entire community.", answer: "initiatives" },
          { text: "The ________ of social justice is a global priority.", answer: "promotion" }
        ],
        taskII: [
          { term: "Cohesion", definition: "The action or fact of forming a united whole.", key: "a" },
          { term: "Polarization", definition: "The division of two sharply contrasting groups or sets of opinions.", key: "b" },
          { term: "Inequality", definition: "Difference in size, degree, circumstances, etc.; lack of equality.", key: "c" },
          { term: "Fragmentation", definition: "The process or state of breaking or being broken into small or separate parts.", key: "d" },
          { term: "Initiative", definition: "The ability to assess and initiate things independently.", key: "e" }
        ],
        taskIII: ["Social capital", "Cultural identity", "Economic inequality", "Civil discourse"],
        taskIV: [{ termA: "Harmony", termB: "Conflict" }, { termA: "Unity", termB: "Division" }],
        taskV: ["Solidarity", "Tolerance", "Vulnerability", "Diplomacy", "Rapport"]
      }),
      createVariant(3, "Modern Relationships", {
        taskI: [
          { text: "The rise of digital platforms has ________ the way we interact.", answer: "transformed" },
          { text: "Online ________ can sometimes be misleading and deceptive.", answer: "personas" },
          { text: "Ghosting is a ________ practice in modern dating.", answer: "common" },
          { text: "Remote work can lead to a sense of social ________.", answer: "isolation" },
          { text: "Maintaining ________ in your digital life is vital for mental health.", answer: "boundaries" },
          { text: "Virtual ________ are now a common part of our professional lives.", answer: "meetings" },
          { text: "The ________ of information can happen instantly online.", answer: "spread" },
          { text: "Digital ________ is becoming a popular term for ghosting.", answer: "disappearance" },
          { text: "The ________ of privacy is a major concern for many users.", answer: "erosion" },
          { text: "Technology can ________ feelings of social connection but also isolation.", answer: "exacerbate" },
          { text: "We must ________ the ethical use of social data by digital platforms.", answer: "ensure" },
          { text: "Meaningful ________ are still possible in the digital age.", answer: "connections" }
        ],
        taskII: [
          { term: "Transformation", definition: "A thorough or dramatic change in form or appearance.", key: "a" },
          { term: "Boundary", definition: "A line that marks the limits of an area.", key: "b" },
          { term: "Isolation", definition: "The process or fact of isolating or being isolated.", key: "c" },
          { term: "Exacerbate", definition: "Make (a problem, bad situation, or negative feeling) worse.", key: "d" },
          { term: "Persona", definition: "The aspect of someone's character that is presented to or perceived by others.", key: "e" }
        ],
        taskIII: ["Digital detox", "Online etiquette", "Long-distance relationship", "Social media profile"],
        taskIV: [{ termA: "Synchronous", termB: "Asynchronous" }, { termA: "Public", termB: "Private" }],
        taskV: ["Ubiquity", "Anonymity", "Interactivity", "Platform", "Community"]
      })
    ]
  },
  {
    id: "sports",
    title: "THEME 17: COMPETITIVE KINETICS",
    category: "Leisure",
    description: "Athletic conditioning, strategic game theory, and sports psychology.",
    icon: "Smile",
    variants: [
      createVariant(1, "Athletic Conditioning", {
        taskI: [
          { text: "Peak performance requires a rigorous ________ of physical training and nutrition.", answer: "regimen" },
          { text: "Muscular ________ is essential for explosive movements and speed.", answer: "power" },
          { text: "Flexibility and ________ help prevent injuries and improve overall form.", answer: "balance" },
          { text: "The ________ of a training plan should be tailored to the individual's goals.", answer: "intensity" },
          { text: "Athletes must ________ their progress through various performance metrics.", answer: "monitor" },
          { text: "Rest and ________ are vital for muscle repair and long-term success.", answer: "recovery" },
          { text: "A balanced diet provides the ________ needed for peak performance.", answer: "nutrients" },
          { text: "Hydration is ________ during intense physical activity to prevent fatigue.", answer: "critical" },
          { text: "The ________ of the new training equipment was a success.", answer: "launch" },
          { text: "Mental ________ is just as important as physical strength in competitive sports.", answer: "toughness" },
          { text: "The ________ of a healthy lifestyle requires long-term commitment.", answer: "adoption" },
          { text: "Public ________ is essential to promote the benefits of physical activity.", answer: "awareness" }
        ],
        taskII: [
          { term: "Regimen", definition: "A prescribed course of medical treatment, way of life, or diet.", key: "a" },
          { term: "Intensity", definition: "The quality of being intense.", key: "b" },
          { term: "Monitor", definition: "Observe and check the progress or quality of (something).", key: "c" },
          { term: "Toughness", definition: "The state of being strong enough to withstand adverse conditions.", key: "d" },
          { term: "Conditioning", definition: "The process of training to become physically fit.", key: "e" }
        ],
        taskIII: ["Aerobic capacity", "Muscle memory", "Personal training", "Fitness tracker"],
        taskIV: [{ termA: "Individual", termB: "Team" }, { termA: "Offense", termB: "Defense" }],
        taskV: ["Athleticism", "Discipline", "Conditioning", "Agility", "Velocity"]
      }),
      createVariant(2, "Strategic Game Theory", {
        taskI: [
          { text: "Game ________ is used to analyze the strategic decisions of players.", answer: "theory" },
          { text: "Tactical ________ involves planning the best course of action during a game.", answer: "analysis" },
          { text: "The ________ of a game can change rapidly due to a single decision.", answer: "tempo" },
          { text: "Coaches must ________ their strategies to suit the strengths of their team.", answer: "adapt" },
          { text: "The ________ of the opponent's behavior is essential for success.", answer: "study" },
          { text: "Fierce ________ can drive athletes to reach their full potential.", answer: "rivalry" },
          { text: "Sportsmanship ________ the importance of fair play and respect.", answer: "emphasizes" },
          { text: "The ________ of a game is influenced by various psychological factors.", answer: "outcome" },
          { text: "Team ________ activities help improve communication and trust.", answer: "building" },
          { text: "Innovative technology is used to ________ performance and game strategy.", answer: "optimize" },
          { text: "The ________ of the sports industry depends on its ability to evolve.", answer: "sustainability" },
          { text: "Public ________ is essential to drive the ethical development of sports.", answer: "engagement" }
        ],
        taskII: [
          { term: "Theory", definition: "A system of ideas intended to explain something.", key: "a" },
          { term: "Tempo", definition: "The speed at which a passage of music is or should be played.", key: "b" },
          { term: "Rivalry", definition: "Competition for the same objective or for superiority.", key: "c" },
          { term: "Emphasize", definition: "Give special importance or prominence to (something) in speaking or writing.", key: "d" },
          { term: "Optimization", definition: "The action of making the best or most effective use of a situation.", key: "e" }
        ],
        taskIII: ["Strategic planning", "Game management", "Competitive edge", "Tactical maneuver"],
        taskIV: [{ termA: "Win", termB: "Lose" }, { termA: "Ally", termB: "Adversary" }],
        taskV: ["Perseverance", "Coordination", "Dedication", "Consistency", "Endurance"]
      }),
      createVariant(3, "Sports Psychology", {
        taskI: [
          { text: "Sports psychology focuses on the ________ factors that impact performance.", answer: "mental" },
          { text: "Focus and ________ are essential for peak performance under pressure.", answer: "concentration" },
          { text: "Motivation ________ an athlete's drive and determination to succeed.", answer: "influences" },
          { text: "Visualization is a technique used to mentally ________ for a performance.", answer: "prepare" },
          { text: "Self-confidence is a key ________ of athletic success.", answer: "predictor" },
          { text: "Stress ________ techniques help athletes manage anxiety and pressure.", answer: "management" },
          { text: "The ________ of mental toughness is essential for long-term success.", answer: "development" },
          { text: "Emotional ________ is the ability to manage one's emotions during a game.", answer: "regulation" },
          { text: "Team ________ activities help foster a sense of unity and shared goals.", answer: "building" },
          { text: "The ________ of a positive mindset can significantly impact performance.", answer: "maintenance" },
          { text: "Athletes must ________ the mental challenges of competition.", answer: "overcome" },
          { text: "Sports psychology ________ are often needed for high-performing athletes.", answer: "interventions" }
        ],
        taskII: [
          { term: "Predictor", definition: "A person or thing that predicts that something will happen.", key: "a" },
          { term: "Regulation", definition: "A rule or directive made and maintained by an authority.", key: "b" },
          { term: "Intervention", definition: "The action or process of intervening.", key: "c" },
          { term: "Maintenance", definition: "The process of maintaining or preserving someone or something.", key: "d" },
          { term: "Resilience", definition: "The capacity to recover quickly from difficulties.", key: "e" }
        ],
        taskIII: ["Mental resilience", "Focus technique", "Peak performance mindset", "Goal setting strategy"],
        taskIV: [{ termA: "Intrinsic", termB: "Extrinsic" }, { termA: "Nature", termB: "Nurture" }],
        taskV: ["Conditioning", "Resilience", "Wellness", "Sustainability", "Intensity"]
      })
    ]
  },
  {
    id: "politics",
    title: "THEME 18: BUREAUCRATIC SYSTEMS",
    category: "Society",
    description: "Sovereign governance, legislative drafting, and geopolitical strategy.",
    icon: "Handshake",
    variants: [
      createVariant(1, "Sovereign Governance", {
        taskI: [
          { text: "Governance involves the ________ through which a society is controlled.", answer: "processes" },
          { text: "The ________ of a state to govern itself is its sovereignty.", answer: "authority" },
          { text: "A democracy is a system of government by the entire ________.", answer: "population" },
          { text: "Transparency is vital for the ________ of a healthy democracy.", answer: "maintenance" },
          { text: "The ________ of powers is a key constitutional principle.", answer: "separation" },
          { text: "Public trust in government institutions has ________ over the last decade.", answer: "eroded" },
          { text: "The ________ of resources should be fair and equitable for all citizens.", answer: "allocation" },
          { text: "Political ________ can lead to a shift in government power.", answer: "instability" },
          { text: "The ________ of new policies requires collaboration between various stakeholders.", answer: "implementation" },
          { text: "Constitutional ________ is the study of a country's founding principles.", answer: "law" },
          { text: "The ________ of public discourse is essential for an informed electorate.", answer: "quality" },
          { text: "Good governance ________ that all citizens are treated equally under the law.", answer: "ensures" }
        ],
        taskII: [
          { term: "Governance", definition: "The action or manner of governing.", key: "a" },
          { term: "Sovereignty", definition: "The authority of a state to govern itself.", key: "b" },
          { term: "Transparency", definition: "The quality of being done in an open way.", key: "c" },
          { term: "Allocation", definition: "The action or process of allocating or distributing something.", key: "d" },
          { term: "Stability", definition: "The state of being stable.", key: "e" }
        ],
        taskIII: ["Civil society", "Public administration", "Voter turnout", "Check and balance"],
        taskIV: [{ termA: "Federal", termB: "Local" }, { termA: "Legislative", termB: "Executive" }],
        taskV: ["Suffrage", "Ratification", "Partisan", "Secularism", "Ideology"]
      }),
      createVariant(2, "Legislative Drafting", {
        taskI: [
          { text: "Legislative drafting is the process of ________ clear and effective laws.", answer: "writing" },
          { text: "A ________ is a proposed law presented to the legislature for discussion.", answer: "bill" },
          { text: "The ________ of a bill involves various stages of review and debate.", answer: "ratification" },
          { text: "Drafting ________ ensure that laws are technically sound and accurate.", answer: "protocols" },
          { text: "The ________ of a statute can lead to legal disputes and confusion.", answer: "ambiguity" },
          { text: "Public ________ is often sought before major legislation is passed.", answer: "consultation" },
          { text: "The ________ of a law should be accessible and easy to understand.", answer: "language" },
          { text: "Constitutional ________ inform the drafting of all new legislation.", answer: "principles" },
          { text: "The ________ of a law's impact should be assessed during the drafting stage.", answer: "valuation" },
          { text: "Legislative ________ are often used to refine the language of a bill.", answer: "amendments" },
          { text: "Drafting ________ involves being honest and transparent about the intent of the law.", answer: "integrity" },
          { text: "Effective drafting ________ that the law can be enforced correctly.", answer: "ensures" }
        ],
        taskII: [
          { term: "Drafting", definition: "The action of writing a first version of a document.", key: "a" },
          { term: "Ratification", definition: "The action of signing or giving formal consent to a treaty.", key: "b" },
          { term: "Ambiguity", definition: "The quality of being open to more than one interpretation.", key: "c" },
          { term: "Consultation", definition: "The action or process of formally consulting or discussing.", key: "d" },
          { term: "Amendment", definition: "A minor change or addition designed to improve a text.", key: "e" }
        ],
        taskIII: ["Statutory law", "Constitutional amendment", "Regulatory framework", "Public policy"],
        taskIV: [{ termA: "Bill", termB: "Act" }, { termA: "Draft", termB: "Final" }],
        taskV: ["Ratification", "Jurisdiction", "Neutrality", "Hegemony", "Embargo"]
      }),
      createVariant(3, "Geopolitical Strategy", {
        taskI: [
          { text: "Geopolitical strategy involves the study of ________ and its impact on politics.", answer: "geography" },
          { text: "Sovereign ________ are formed to protect national interests.", answer: "alliances" },
          { text: "The ________ of power in the global landscape is constantly shifting.", answer: "balance" },
          { text: "International ________ is used to settle disputes between sovereign nations.", answer: "diplomacy" },
          { text: "Economic ________ can be used to influence the behavior of other states.", answer: "sanctions" },
          { text: "A ________ of energy resources can impact geopolitical stability.", answer: "shortage" },
          { text: "The ________ of a state to protect its borders is its security.", answer: "ability" },
          { text: "Geopolitical ________ can have significant impacts on global trade.", answer: "volatile" },
          { text: "The ________ of a global pandemic showed the vulnerability of world systems.", answer: "impact" },
          { text: "Strategic ________ involves setting long-term goals for national security.", answer: "planning" },
          { text: "The ________ of international law is essential for global order.", answer: "promotion" },
          { text: "Geopolitical ________ inform the decision-making of world leaders.", answer: "analyses" }
        ],
        taskII: [
          { term: "Geopolitical", definition: "Relating to politics, especially international relations.", key: "a" },
          { term: "Alliance", definition: "A union or association formed for mutual benefit.", key: "b" },
          { term: "Diplomacy", definition: "The profession of managing international relations.", key: "c" },
          { term: "Sanction", definition: "A threatened penalty for disobeying a law or rule.", key: "d" },
          { term: "Analysis", definition: "Detailed examination of the elements of something.", key: "e" }
        ],
        taskIII: ["Foreign policy analysis", "Soft power strategy", "Hegemonic stability theory", "Global security framework"],
        taskIV: [{ termA: "Unilateral", termB: "Bilateral" }, { termA: "Ally", termB: "Adversary" }],
        taskV: ["Sovereignty", "Pluralism", "Secularism", "Advocacy", "Accountability"]
      })
    ]
  },
  {
    id: "architecture",
    title: "THEME 19: ARCHITECTURAL SEMANTICS",
    category: "Society",
    description: "Structural engineering, Bauhaus principles, and urban revitalization.",
    icon: "Briefcase",
    variants: [
      createVariant(1, "Bauhaus Principles", {
        taskI: [
          { text: "Bauhaus ________ emphasizes the unity of art, craft, and technology.", answer: "philosophy" },
          { text: "The ________ of 'form follows function' is a central tenet of Bauhaus.", answer: "principle" },
          { text: "Minimalism ________ the beauty of simple lines and geometric shapes.", answer: "celebrates" },
          { text: "Modern ________ has been significantly influenced by Bauhaus ideas.", answer: "design" },
          { text: "The ________ of new materials allowed for more creative expression.", answer: "use" },
          { text: "Bauhaus ________ often features flat roofs and large windows.", answer: "architecture" },
          { text: "The ________ between different artistic disciplines led to innovation.", answer: "interaction" },
          { text: "Functional ________ is a key focus of Bauhaus design.", answer: "beauty" },
          { text: "The ________ of the Bauhaus school in Germany had a global impact.", answer: "establishment" },
          { text: "Artistic ________ allows for the free expression of architectural ideas.", answer: "freedom" },
          { text: "The ________ of a masterpiece is often a subject of intense study.", answer: "analysis" },
          { text: "Bauhaus principles continue to ________ contemporary design.", answer: "inform" }
        ],
        taskII: [
          { term: "Philosophy", definition: "The study of the fundamental nature of knowledge, reality, and existence.", key: "a" },
          { term: "Principle", definition: "A fundamental truth or proposition that serves as the foundation.", key: "b" },
          { term: "Minimalism", definition: "A style or technique characterized by extreme spareness and simplicity.", key: "c" },
          { term: "Functional", definition: "Of or having a special activity, purpose, or task; relating to the way in which something works or operates.", key: "d" },
          { term: "Architecture", definition: "The complex or carefully designed structure of something.", key: "e" }
        ],
        taskIII: ["Form follows function", "Modernist movement", "Industrial design", "Artistic integrity"],
        taskIV: [{ termA: "Ornate", termB: "Minimalist" }, { termA: "Traditional", termB: "Modern" }],
        taskV: ["Avenue", "Boulevard", "Dwelling", "Renovation", "Scaffolding"]
      }),
      createVariant(2, "Urban Revitalization", {
        taskI: [
          { text: "Urban ________ involves the social and physical repair of cities.", answer: "revitalization" },
          { text: "Gentrification can ________ local residents and alter social dynamics.", answer: "displace" },
          { text: "Sustainable ________ development focuses on long-term ecological health.", answer: "urban" },
          { text: "Adaptive ________ involves repurposing old buildings for new uses.", answer: "reuse" },
          { text: "Public ________ should be accessible and inclusive for all citizens.", answer: "spaces" },
          { text: "The ________ of urban services requires innovative smart technology.", answer: "optimization" },
          { text: "Community ________ is essential for the success of revitalization projects.", answer: "engagement" },
          { text: "The ________ of green areas can improve urban air quality.", answer: "expansion" },
          { text: "Affordable ________ is a major challenge for growing cities.", answer: "housing" },
          { text: "The ________ of urban policies should be fair and transparent.", answer: "implementation" },
          { text: "Urban ________ is a major problem for local wildlife and habitats.", answer: "sprawl" },
          { text: "The ________ of a city depends on the health of its infrastructure.", answer: "integrity" }
        ],
        taskII: [
          { term: "Revitalization", definition: "The action of imbuing something with new life and vitality.", key: "a" },
          { term: "Gentrification", definition: "The process of changing the character of a neighborhood.", key: "b" },
          { term: "Optimization", definition: "The action of making the best or most effective use of a situation.", key: "c" },
          { term: "Engagement", definition: "The action of engaging or being engaged.", key: "d" },
          { term: "Infrastructure", definition: "The basic physical and organizational structures and facilities.", key: "e" }
        ],
        taskIII: ["Urban regeneration", "Gentrification impact", "Smart city design", "Public housing policy"],
        taskIV: [{ termA: "Compact", termB: "Spread-out" }, { termA: "Interior", termB: "Exterior" }],
        taskV: ["Ornamentation", "Preservation", "Symmetry", "Hierarchy", "Authenticity"]
      }),
      createVariant(3, "Structural Integrity", {
        taskI: [
          { text: "Structural ________ is essential for the safety and longevity of buildings.", answer: "integrity" },
          { text: "Engineering ________ involve various calculations and simulations.", answer: "analyses" },
          { text: "The ________ of a building must be able to support its weight.", answer: "foundation" },
          { text: "Seismic ________ are needed to protect buildings from earthquakes.", answer: "safeguards" },
          { text: "The ________ of materials affects the overall strength of a structure.", answer: "quality" },
          { text: "Regular ________ is necessary to prevent structural degradation.", answer: "maintenance" },
          { text: "Modern ________ helps us design and build safer structures.", answer: "technology" },
          { text: "The ________ of a bridge depends on its design and construction.", answer: "reliability" },
          { text: "Load ________ is the process of distributing weight throughout a building.", answer: "bearing" },
          { text: "Innovative materials like ________ and glass are used in modern construction.", answer: "carbon-fiber" },
          { text: "The ________ of environmental factors should be considered in design.", answer: "impact" },
          { text: "Structural ________ is a critical part of the construction process.", answer: "testing" }
        ],
        taskII: [
          { term: "Integrity", definition: "The state of being whole and undivided.", key: "a" },
          { term: "Analysis", definition: "Detailed examination of the elements of something.", key: "b" },
          { term: "Foundation", definition: "The lowest load-bearing part of a building.", key: "c" },
          { term: "Maintenance", definition: "The process of preserving something.", key: "d" },
          { term: "Reliability", definition: "The quality of being trustworthy or of performing consistently well.", key: "e" }
        ],
        taskIII: ["Structural engineering", "Seismic design", "Material strength", "Building safety code"],
        taskIV: [{ termA: "Tensile", termB: "Compressive" }, { termA: "Solid", termB: "Hollow" }],
        taskV: ["Resilience", "Equitability", "Density", "Integration", "Permeability"]
      })
    ]
  },
  {
    id: "ethics",
    title: "THEME 20: ETHICAL PHILOSOPHY",
    category: "Science",
    description: "Utilitarianism, existentialism, and the ethics of artificial intelligence.",
    icon: "Brain",
    variants: [
      createVariant(1, "Utilitarianism & Duty", {
        taskI: [
          { text: "Utilitarianism is an ethical theory that focuses on maximizing ________.", answer: "happiness" },
          { text: "Deontology ________ the importance of moral duty and rules.", answer: "emphasizes" },
          { text: "The ________ of an action is determined by its consequences.", answer: "morality" },
          { text: "Ethical ________ often arise in the conflict between duty and consequence.", answer: "dilemmas" },
          { text: "The ________ of human life is a central theme in moral philosophy.", answer: "sanctity" },
          { text: "Justice should be ________ and fair for all individuals.", answer: "impartial" },
          { text: "The ________ between self-interest and the common good is a major focus of ethics.", answer: "interaction" },
          { text: "Moral ________ involves being honest and responsible in your choices.", answer: "integrity" },
          { text: "The ________ of ethical guidelines is necessary for a healthy society.", answer: "maintenance" },
          { text: "Philosophical ________ inform our understanding of right and wrong.", answer: "theories" },
          { text: "The ________ of an action depends on its context and intent.", answer: "quality" },
          { text: "Public ________ is essential to drive the ethical development of society.", answer: "engagement" }
        ],
        taskII: [
          { term: "Utilitarianism", definition: "The doctrine that actions are right if they are useful or for the benefit of a majority.", key: "a" },
          { term: "Deontology", definition: "The study of the nature of duty and obligation.", key: "b" },
          { term: "Morality", definition: "Principles concerning the distinction between right and wrong.", key: "c" },
          { term: "Integrity", definition: "The quality of being honest and having strong moral principles.", key: "d" },
          { term: "Engagement", definition: "The action of engaging or being engaged.", key: "e" }
        ],
        taskIII: ["Utilitarian calculus", "Moral dilemma", "Ethical framework", "Categorical imperative"],
        taskIV: [{ termA: "Duty", termB: "Desire" }, { termA: "Individual", termB: "Society" }],
        taskV: ["Axiom", "Cognition", "Determinism", "Nihilism", "Pragmatism"]
      }),
      createVariant(2, "Existential Ethics", {
        taskI: [
          { text: "Existentialism emphasizes individual freedom and ________.", answer: "responsibility" },
          { text: "We are all responsible for ________ our own meaning and purpose.", answer: "creating" },
          { text: "The ________ of choice can be a significant source of anxiety.", answer: "burden" },
          { text: "Authenticity involves being ________ and true to one's own values.", answer: "genuine" },
          { text: "The ________ of human existence is a mystery for many.", answer: "nature" },
          { text: "Sartre argued that humans are ________ to be free.", answer: "condemned" },
          { text: "The ________ between the self and others is a key theme in existentialism.", answer: "interaction" },
          { text: "Living ________ involves making choices that reflect your true self.", answer: "authentically" },
          { text: "The ________ of the absurd can lead to a sense of freedom.", answer: "discovery" },
          { text: "Existential ________ is a common feeling in modern life.", answer: "dread" },
          { text: "We must ________ the uncertainty of the future.", answer: "accept" },
          { text: "The ________ of the individual is a central focus of existential ethics.", answer: "discovery" }
        ],
        taskII: [
          { term: "Responsibility", definition: "The state or fact of having a duty to deal with something.", key: "a" },
          { term: "Authenticity", definition: "The quality of being authentic.", key: "b" },
          { term: "Condemned", definition: "Sentenced to a particular punishment.", key: "c" },
          { term: "Absurd", definition: "Wildly unreasonable, illogical, or inappropriate.", key: "d" },
          { term: "Discovery", definition: "The action or process of discovering.", key: "e" }
        ],
        taskIII: ["Existential dread", "Freedom of choice", "Sense of purpose", "Self-actualization"],
        taskIV: [{ termA: "Subjective", termB: "Objective" }, { termA: "Existence", termB: "Essence" }],
        taskV: ["Dualism", "Monism", "Syllogism", "Phenomenology", "Existentialism"]
      }),
      createVariant(3, "The Ethics of AI", {
        taskI: [
          { text: "The ethics of AI involves the study of the ________ implications of artificial intelligence.", answer: "moral" },
          { text: "Transparency in how algorithms ________ is necessary for accountability.", answer: "operate" },
          { text: "The ________ of algorithmic bias is a major concern.", answer: "presence" },
          { text: "Safeguards must be ________ to ensure that AI operates safely.", answer: "implemented" },
          { text: "The ________ of user data should be transparent and ethical.", answer: "management" },
          { text: "Artificial Intelligence ________ significant questions about bias and privacy.", answer: "poses" },
          { text: "Ethical ________ are necessary to guide the development of AI.", answer: "frameworks" },
          { text: "The ________ of AI into everyday life is happening rapidly.", answer: "integration" },
          { text: "Successful AI development requires a ________ understanding of ethics.", answer: "comprehensive" },
          { text: "The ________ of AI on employment is a major topic of debate.", answer: "impact" },
          { text: "Public ________ is essential to drive the ethical development of AI.", answer: "engagement" },
          { text: "The ________ of the digital landscape is constantly evolving.", answer: "architecture" }
        ],
        taskII: [
          { term: "Transparency", definition: "The quality of being done in an open way.", key: "a" },
          { term: "Accountability", definition: "The fact or condition of being accountable.", key: "b" },
          { term: "Implementation", definition: "The process of putting a decision or plan into effect.", key: "c" },
          { term: "Integrity", definition: "The quality of being honest and having strong moral principles.", key: "d" },
          { term: "Architecture", definition: "The complex or carefully designed structure of something.", key: "e" }
        ],
        taskIII: ["Algorithmic ethics", "Data privacy legislation", "AI governance model", "Machine bias"],
        taskIV: [{ termA: "Autonomous", termB: "Controlled" }, { termA: "Digital", termB: "Human" }],
        taskV: ["Aesthetics", "Anguish", "Duality", "Transcendent", "Immanence"]
      })
    ]
  }
];
