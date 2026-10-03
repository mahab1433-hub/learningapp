// GRADE 3 CURRICULUM
// English, Mathematics, Social Science

export const grade3Data = {
  grade: 3,
  gradeTitle: "Grade 3 - Active Builders",
  gradeDescription: "Unlock fractions, master tenses, understand directions and maps, and explore Indian diversity!",
  mascot: "⚡",
  subjects: {
    english: {
      id: "english",
      title: "English Adventures",
      tagline: "Tenses, Parts of Speech & Paragraphs",
      icon: "BookOpen",
      themeColor: "#0284C7",
      bgColor: "#E0F2FE",
      units: [
        {
          id: "g3-eng-u1",
          unitNumber: 1,
          title: "Verb Tenses: Past, Present & Future",
          description: "Learn how time changes verbs: yesterday, today, and tomorrow!",
          lessons: [
            {
              id: "g3-eng-u1-l1",
              title: "Tenses: Past, Present & Future",
              courseTitle: "Grammar & Composition",
              unitTitle: "Unit 1: Verb Tenses",
              duration: "8 mins",
              xp: 70,
              badgeIcon: "⏳",
              summary: "Verbs change their forms to tell us WHEN an action happens!",
              explanation: `
### What are Verb Tenses?
Tense tells us about time. Every action happened in the past, is happening right now in the present, or will happen in the future!

1. **Present Tense (Happening Now):**
   * "I **walk** to school."
   * "The sun **shines** brightly."
2. **Past Tense (Already Happened):**
   * Most regular verbs add **-ed**: *walk → walked*, *play → played*, *paint → painted*.
   * Some verbs change irregularly: *eat → ate*, *go → went*, *run → ran*.
3. **Future Tense (Will Happen Later):**
   * Add **will** before the base verb: "I **will visit** my grandparents tomorrow."
              `,
              visualExamples: [
                { icon: "⏮️", title: "Past (Yesterday)", text: "She painted a lovely picture yesterday.", tag: "Past (-ed)" },
                { icon: "▶️", title: "Present (Today)", text: "She paints every afternoon.", tag: "Present" },
                { icon: "⏭️", title: "Future (Tomorrow)", text: "She will paint a castle tomorrow.", tag: "Future (will)" }
              ],
              activity: {
                type: "tense_time_sorter",
                title: "Sort into Past, Present, Future",
                instruction: "Drag or select the correct tense bucket for each sentence!",
                items: [
                  { sentence: "Rahul played football.", tense: "Past" },
                  { sentence: "Meera is reading a mystery book.", tense: "Present" },
                  { sentence: "We will fly kites tomorrow.", tense: "Future" },
                  { sentence: "Birds build cozy nests.", tense: "Present" }
                ]
              },
              practiceQuestions: [
                {
                  id: "pq1",
                  question: "What is the past tense of 'play'?",
                  options: ["played", "playing", "will play"],
                  correctAnswer: "played",
                  explanation: "Regular verbs add '-ed' in the past: played."
                }
              ],
              quiz: [
                {
                  id: "q1",
                  type: "multiple-choice",
                  question: "Which sentence is in the PAST tense?",
                  options: [
                    "I will drink milk.",
                    "I am drinking milk.",
                    "I drank milk this morning.",
                    "I drink milk every day."
                  ],
                  correctAnswer: "I drank milk this morning.",
                  explanation: "'Drank' is the irregular past tense of drink.",
                  hint: "Look for an action already finished."
                },
                {
                  id: "q2",
                  type: "multiple-choice",
                  question: "How do you make the future tense of 'read'?",
                  options: ["readed", "will read", "reading", "readen"],
                  correctAnswer: "will read",
                  explanation: "Add 'will' before the base verb to indicate the future.",
                  hint: "Think about 'will'."
                },
                {
                  id: "q3",
                  type: "true-false",
                  question: "True or False: 'Yesterday' is a time clue word for the past tense.",
                  options: ["True", "False"],
                  correctAnswer: "True",
                  explanation: "'Yesterday' specifically refers to the day before today.",
                  hint: "Does yesterday mean in the past?"
                },
                {
                  id: "q4",
                  type: "fill-in-the-blank",
                  question: "Choose the correct verb: 'Tomorrow, we ___ to the science museum.'",
                  options: ["will go", "went", "goes", "gone"],
                  correctAnswer: "will go",
                  explanation: "'Tomorrow' refers to future time, so we use 'will go'.",
                  hint: "It hasn't happened yet."
                },
                {
                  id: "q5",
                  type: "multiple-choice",
                  question: "What is the past tense of 'run'?",
                  options: ["runned", "ran", "running", "runs"],
                  correctAnswer: "ran",
                  explanation: "'Run' is an irregular verb: run → ran.",
                  hint: "Not 'runned', but an irregular one-syllable word."
                },
                {
                  id: "q6",
                  type: "multiple-choice",
                  question: "Which word signals the present continuous tense?",
                  options: ["-ed", "-ing", "will", "-ly"],
                  correctAnswer: "-ing",
                  explanation: "Adding '-ing' (like singing, dancing) shows an ongoing present action.",
                  hint: "Think: play + ___"
                }
              ]
            }
          ]
        }
      ]
    },
    mathematics: {
      id: "mathematics",
      title: "Math Adventures",
      tagline: "Fractions, Division & Geometry",
      icon: "Calculator",
      themeColor: "#059669",
      bgColor: "#D1FAE5",
      units: [
        {
          id: "g3-math-u1",
          unitNumber: 1,
          title: "Introduction to Fractions",
          description: "Understand equal parts of a whole: halves, thirds, and quarters!",
          lessons: [
            {
              id: "g3-math-u1-l1",
              title: "Fractions: Parts of a Whole",
              courseTitle: "Fractions & Division",
              unitTitle: "Unit 1: Introduction to Fractions",
              duration: "8 mins",
              xp: 70,
              badgeIcon: "🍕",
              summary: "A fraction represents equal parts of a single whole item!",
              explanation: `
### What is a Fraction?
Imagine slicing a delicious round pizza into equal pieces to share with friends!

A fraction is written with two numbers:
$$\\frac{\\text{Numerator}}{\\text{Denominator}}$$

* **Numerator (Top Number):** How many parts you have or count.
* **Denominator (Bottom Number):** Total equal parts the whole is divided into!

**Common Friendly Fractions:**
* **One Half ($\\frac{1}{2}$):** 1 piece out of 2 equal slices.
* **One Quarter ($\\frac{1}{4}$):** 1 piece out of 4 equal slices.
* **Three Quarters ($\\frac{3}{4}$):** 3 pieces out of 4 equal slices.
              `,
              visualExamples: [
                { icon: "🍕", title: "Half Pizza (1/2)", text: "A circle split straight down the middle into 2 equal halves.", tag: "1/2" },
                { icon: "🍰", title: "Quarter Cake (1/4)", text: "Cut into 4 equal quarters. 1 quarter eaten.", tag: "1/4" },
                { icon: "🍫", title: "Chocolate Bar (3/4)", text: "3 small squares shaded out of 4 total squares.", tag: "3/4" }
              ],
              activity: {
                type: "fraction_slicer",
                title: "Fraction Visualizer",
                instruction: "Select the fraction that represents 2 shaded parts out of 4 equal parts!",
                totalParts: 4,
                shadedParts: 2,
                options: ["1/4", "2/4", "3/4", "4/4"],
                correctAnswer: "2/4"
              },
              practiceQuestions: [
                {
                  id: "pq1",
                  question: "In the fraction 3/5, what is the denominator?",
                  options: ["3", "5", "8"],
                  correctAnswer: "5",
                  explanation: "The bottom number is the denominator, which is 5."
                }
              ],
              quiz: [
                {
                  id: "q1",
                  type: "multiple-choice",
                  question: "What does the bottom number of a fraction call?",
                  options: ["Numerator", "Denominator", "Dividend", "Quotient"],
                  correctAnswer: "Denominator",
                  explanation: "The denominator shows the total number of equal parts in the whole.",
                  hint: "D stands for Down (Denominator)!"
                },
                {
                  id: "q2",
                  type: "multiple-choice",
                  question: "If a chocolate bar is cut into 4 equal pieces and you eat 1 piece, what fraction did you eat?",
                  options: ["1/2", "1/4", "3/4", "4/1"],
                  correctAnswer: "1/4",
                  explanation: "1 piece out of 4 total pieces is 1/4 (one quarter).",
                  hint: "1 on top, 4 on bottom."
                },
                {
                  id: "q3",
                  type: "true-false",
                  question: "True or False: 2/4 is equal to 1/2.",
                  options: ["True", "False"],
                  correctAnswer: "True",
                  explanation: "Yes! 2 out of 4 parts is half of the entire item.",
                  hint: "Both represent half of the whole."
                },
                {
                  id: "q4",
                  type: "fill-in-the-blank",
                  question: "When a shape is divided into 2 equal parts, each part is called a ___.",
                  options: ["half", "third", "quarter", "fifth"],
                  correctAnswer: "half",
                  explanation: "Two equal parts of a whole are halves (1/2 each).",
                  hint: "Spelled h-a-l-f."
                },
                {
                  id: "q5",
                  type: "multiple-choice",
                  question: "Which fraction represents the entire whole?",
                  options: ["1/4", "2/4", "3/4", "4/4"],
                  correctAnswer: "4/4",
                  explanation: "When numerator equals denominator (4/4), you have the complete whole (1).",
                  hint: "All 4 parts out of 4."
                }
              ]
            }
          ]
        }
      ]
    },
    social_science: {
      id: "social_science",
      title: "Social Science",
      tagline: "Maps, Directions & Indian Culture",
      icon: "Globe",
      themeColor: "#EA580C",
      bgColor: "#FFEDD5",
      units: [
        {
          id: "g3-soc-u1",
          unitNumber: 1,
          title: "Maps, Directions & India Basics",
          description: "Learn cardinal directions, reading map symbols, and India's symbols!",
          lessons: [
            {
              id: "g3-soc-u1-l1",
              title: "Directions & How to Read a Map",
              courseTitle: "Geography & Society",
              unitTitle: "Unit 1: Maps & Directions",
              duration: "8 mins",
              xp: 70,
              badgeIcon: "🧭",
              summary: "Master the 4 cardinal directions: North, South, East, and West!",
              explanation: `
### Finding Your Way with Directions!
Whenever you look at a map, directions tell you where to go!

There are **4 Cardinal Directions**:
* **North (N):** Usually points towards the top of a map ⬆️
* **South (S):** Points towards the bottom of a map ⬇️
* **East (E):** Points to the right (where the sun rises! 🌅) ➡️
* **West (W):** Points to the left (where the sun sets! 🌇) ⬅️

**Catchy Mnemonic:** **N**ever **E**at **S**oggy **W**affles (**N**orth, **E**ast, **S**outh, **W**est clockwise)!

A **Compass** is a magical instrument with a magnetic needle that always points to the magnetic North!
              `,
              visualExamples: [
                { icon: "🧭", title: "The Compass Rose", text: "N on top, S at bottom, E on right, W on left.", tag: "Compass" },
                { icon: "🌅", title: "Sunrise in the East", text: "Stand facing the morning sun: you face East, behind you is West.", tag: "Sun Guide" },
                { icon: "🗺️", title: "Map Legend / Key", text: "Symbols and colors show rivers, hills, roads, and cities.", tag: "Map Key" }
              ],
              activity: {
                type: "direction_compass",
                title: "Compass Rose Navigator",
                instruction: "If you face North, what direction is directly behind you?",
                options: ["South", "East", "West", "North-East"],
                correctAnswer: "South"
              },
              practiceQuestions: [
                {
                  id: "pq1",
                  question: "In which direction does the Sun rise every morning?",
                  options: ["East", "West", "North"],
                  correctAnswer: "East",
                  explanation: "The Earth rotates so the morning Sun always rises in the East!"
                }
              ],
              quiz: [
                {
                  id: "q1",
                  type: "multiple-choice",
                  question: "On a standard map, which direction is at the top?",
                  options: ["South", "West", "North", "East"],
                  correctAnswer: "North",
                  explanation: "Standard maps are oriented with North pointing straight up.",
                  hint: "Opposite of South."
                },
                {
                  id: "q2",
                  type: "multiple-choice",
                  question: "Which tool has a magnetic needle that points North?",
                  options: ["Thermometer", "Compass", "Clock", "Barometer"],
                  correctAnswer: "Compass",
                  explanation: "A magnetic compass needle naturally aligns with Earth's magnetic poles.",
                  hint: "Sailors and hikers carry this."
                },
                {
                  id: "q3",
                  type: "true-false",
                  question: "True or False: The Sun sets in the West in the evening.",
                  options: ["True", "False"],
                  correctAnswer: "True",
                  explanation: "Yes! The Sun rises in the East and sets in the West.",
                  hint: "Opposite of sunrise direction."
                },
                {
                  id: "q4",
                  type: "fill-in-the-blank",
                  question: "A book of maps is called an ___.",
                  options: ["atlas", "encyclopedia", "dictionary", "novel"],
                  correctAnswer: "atlas",
                  explanation: "An atlas contains collections of regional and world maps.",
                  hint: "Starts with the letter A."
                },
                {
                  id: "q5",
                  type: "multiple-choice",
                  question: "Which of the following is our national animal in India?",
                  options: ["Lion", "Royal Bengal Tiger", "Elephant", "Leopard"],
                  correctAnswer: "Royal Bengal Tiger",
                  explanation: "The Royal Bengal Tiger is the majestic National Animal of India.",
                  hint: "A striped big cat known for strength and grace."
                }
              ]
            }
          ]
        }
      ]
    }
  }
};
