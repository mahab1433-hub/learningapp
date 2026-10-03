// GRADE 4 CURRICULUM
// English, Mathematics, Social Science

export const grade4Data = {
  grade: 4,
  gradeTitle: "Grade 4 - Smart Navigators",
  gradeDescription: "Tackle large numbers, decimal concepts, preposition mastery, and the physical geography of India!",
  mascot: "🏆",
  subjects: {
    english: {
      id: "english",
      title: "English Adventures",
      tagline: "Prepositions, Sentence Types & Vocabulary",
      icon: "BookOpen",
      themeColor: "#0284C7",
      bgColor: "#E0F2FE",
      units: [
        {
          id: "g4-eng-u1",
          unitNumber: 1,
          title: "Prepositions & Sentence Mastery",
          description: "Connect words with prepositions of place, time, and movement!",
          lessons: [
            {
              id: "g4-eng-u1-l1",
              title: "Prepositions: In, On, Under, Between & Through",
              courseTitle: "Language Architecture",
              unitTitle: "Unit 1: Prepositions & Sentences",
              duration: "8 mins",
              xp: 80,
              badgeIcon: "🎯",
              summary: "Prepositions describe the exact position, time, or direction of a noun!",
              explanation: `
### What is a Preposition?
A **Preposition** shows where someone or something is located in relation to another object or time!

* **Prepositions of Place:**
  * "The cat slept **under** the bed."
  * "A secret gift is **inside** the colorful box."
  * "Delhi is situated **between** Punjab and Uttar Pradesh."
* **Prepositions of Time:**
  * "School begins **at** 8:00 AM."
  * "My birthday falls **in** September."
  * "We play games **on** Saturday."
* **Prepositions of Movement:**
  * "The train zipped **through** the long tunnel."
  * "The squirrel dashed **across** the lawn."
              `,
              visualExamples: [
                { icon: "📦", title: "In / Inside", text: "The treasure is safe inside the wooden chest.", tag: "Place" },
                { icon: "🛏️", title: "Under", text: "The playful puppy hid under the table.", tag: "Position" },
                { icon: "🌉", title: "Across", text: "The bridge stretches across the roaring river.", tag: "Movement" }
              ],
              activity: {
                type: "preposition_picker",
                title: "Complete the Preposition",
                instruction: "Pick the preposition that best completes the sentence!",
                sentences: [
                  { text: "The owl perched quietly ___ the tree branch.", answer: "on", options: ["on", "under", "into"] },
                  { text: "The swimmer dove ___ the cool water.", answer: "into", options: ["into", "onto", "at"] },
                  { text: "We sat ___ the shade of an old banyan tree.", answer: "under", options: ["under", "between", "on"] }
                ]
              },
              practiceQuestions: [
                {
                  id: "pq1",
                  question: "Which preposition fits: 'The apple fell ___ the tree.'?",
                  options: ["from", "at", "during"],
                  correctAnswer: "from",
                  explanation: "'From' shows the origin of movement!"
                }
              ],
              quiz: [
                {
                  id: "q1",
                  type: "multiple-choice",
                  question: "Identify the preposition in: 'The boy walked across the wooden bridge.'",
                  options: ["boy", "walked", "across", "bridge"],
                  correctAnswer: "across",
                  explanation: "'Across' is the preposition showing movement from one side to another.",
                  hint: "Shows direction of travel."
                },
                {
                  id: "q2",
                  type: "multiple-choice",
                  question: "Which preposition is used for specific clock times?",
                  options: ["In", "On", "At", "By"],
                  correctAnswer: "At",
                  explanation: "We use 'at' for precise clock times (e.g., at 7:30 AM).",
                  hint: "E.g., ___ 9 o'clock."
                },
                {
                  id: "q3",
                  type: "true-false",
                  question: "True or False: We say 'on July' instead of 'in July'.",
                  options: ["True", "False"],
                  correctAnswer: "False",
                  explanation: "We use 'in' for months (in July) and 'on' for specific days and dates (on Monday, on July 4th).",
                  hint: "Think: in months and years, on days."
                },
                {
                  id: "q4",
                  type: "fill-in-the-blank",
                  question: "The rabbit squeezed ___ the two fence pickets.",
                  options: ["between", "at", "to", "during"],
                  correctAnswer: "between",
                  explanation: "'Between' is used when something is in the middle of two items.",
                  hint: "Middle of two."
                },
                {
                  id: "q5",
                  type: "multiple-choice",
                  question: "Which sentence uses the preposition correctly?",
                  options: [
                    "I will meet you at Monday.",
                    "I will meet you on Monday.",
                    "I will meet you in Monday.",
                    "I will meet you to Monday."
                  ],
                  correctAnswer: "I will meet you on Monday.",
                  explanation: "Days of the week always take the preposition 'on'.",
                  hint: "Days take 'on'."
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
      tagline: "Factors, Decimals & Large Numbers",
      icon: "Calculator",
      themeColor: "#059669",
      bgColor: "#D1FAE5",
      units: [
        {
          id: "g4-math-u1",
          unitNumber: 1,
          title: "Factors & Multiples",
          description: "Discover what divides a number cleanly and unlock skip-counting multiples!",
          lessons: [
            {
              id: "g4-math-u1-l1",
              title: "Factors, Multiples & Prime Numbers",
              courseTitle: "Number Theory",
              unitTitle: "Unit 1: Factors & Multiples",
              duration: "9 mins",
              xp: 80,
              badgeIcon: "🧮",
              summary: "Factors divide a number without leaving any remainder!",
              explanation: `
### Factors vs Multiples!
These two mathematical concepts are like opposite sides of the same coin!

* **Factors:** Numbers that divide into a given number completely with **0 remainder**.
  * Factors of **12**: $1, 2, 3, 4, 6, 12$
  * Because $1 \\times 12 = 12$, $2 \\times 6 = 12$, and $3 \\times 4 = 12$.
* **Multiples:** The numbers you get when multiplying a number by $1, 2, 3, 4...$
  * Multiples of **5**: $5, 10, 15, 20, 25, 30...$
* **Prime Numbers:** Numbers greater than 1 with **ONLY 2 factors**: $1$ and itself!
  * Examples: $2, 3, 5, 7, 11, 13, 17, 19...$
  * **2** is the ONLY even prime number!
              `,
              visualExamples: [
                { icon: "🔢", title: "Factors of 6", text: "1, 2, 3, and 6 can divide 6 with no leftover.", tag: "Factors" },
                { icon: "📈", title: "Multiples of 4", text: "4, 8, 12, 16, 20, 24... count by 4s!", tag: "Multiples" },
                { icon: "💎", title: "Prime Number 7", text: "Only 1 × 7 gives 7. No other whole numbers work!", tag: "Prime" }
              ],
              activity: {
                type: "prime_composite_sorter",
                title: "Prime or Composite?",
                instruction: "Determine whether the number 9 is Prime or Composite!",
                number: 9,
                factors: [1, 3, 9],
                options: ["Prime", "Composite"],
                correctAnswer: "Composite"
              },
              practiceQuestions: [
                {
                  id: "pq1",
                  question: "Is 11 a Prime number or Composite number?",
                  options: ["Prime", "Composite"],
                  correctAnswer: "Prime",
                  explanation: "11 has only two factors: 1 and 11, so it is Prime."
                }
              ],
              quiz: [
                {
                  id: "q1",
                  type: "multiple-choice",
                  question: "Which of the following is a factor of 15?",
                  options: ["2", "4", "5", "7"],
                  correctAnswer: "5",
                  explanation: "15 ÷ 5 = 3 with no remainder, so 5 is a factor.",
                  hint: "5 × 3 = 15."
                },
                {
                  id: "q2",
                  type: "multiple-choice",
                  question: "What is the only EVEN prime number?",
                  options: ["0", "2", "4", "6"],
                  correctAnswer: "2",
                  explanation: "2 has only two factors (1 and 2). All other even numbers can be divided by 2!",
                  hint: "The smallest prime."
                },
                {
                  id: "q3",
                  type: "true-false",
                  question: "True or False: Every number is a multiple of itself.",
                  options: ["True", "False"],
                  correctAnswer: "True",
                  explanation: "Yes! Since n × 1 = n, any number is its own first multiple.",
                  hint: "Any number multiplied by 1 is itself."
                },
                {
                  id: "q4",
                  type: "fill-in-the-blank",
                  question: "The smallest prime number is ___.",
                  options: ["1", "2", "3", "0"],
                  correctAnswer: "2",
                  explanation: "1 is neither prime nor composite. 2 is the smallest prime.",
                  hint: "First positive even number."
                },
                {
                  id: "q5",
                  type: "multiple-choice",
                  question: "Which list shows the first four multiples of 6?",
                  options: [
                    "6, 12, 18, 24",
                    "1, 2, 3, 6",
                    "6, 10, 16, 22",
                    "6, 12, 16, 20"
                  ],
                  correctAnswer: "6, 12, 18, 24",
                  explanation: "6×1=6, 6×2=12, 6×3=18, 6×4=24.",
                  hint: "Skip count by 6."
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
      tagline: "Indian Geography & Natural Resources",
      icon: "Globe",
      themeColor: "#EA580C",
      bgColor: "#FFEDD5",
      units: [
        {
          id: "g4-soc-u1",
          unitNumber: 1,
          title: "Physical Geography of India",
          description: "Explore the Himalayas, Northern Plains, and Deccan Plateau!",
          lessons: [
            {
              id: "g4-soc-u1-l1",
              title: "Physical Features: Himalayas to Coastal Plains",
              courseTitle: "Land & Heritage",
              unitTitle: "Unit 1: Physical Geography of India",
              duration: "9 mins",
              xp: 80,
              badgeIcon: "🏔️",
              summary: "Discover the 5 major physical divisions that make India so diverse!",
              explanation: `
### The Diverse Landforms of India!
India has one of the most varied landscapes on the planet, divided into 5 major physical regions:

1. **The Northern Mountains (The Himalayas):**
   * The highest mountain range in the world with snow-capped peaks like Mount Kanchenjunga!
   * Source of perennial holy rivers like Ganga, Yamuna, and Brahmaputra 🏔️
2. **The Northern Fertile Plains:**
   * Flat and fertile river basins ideal for farming grains, often called the "Food Bowl of India" 🌾
3. **The Great Indian Desert (Thar Desert):**
   * Vast sandy dunes in Rajasthan with scarce rainfall and camel caravans 🐪
4. **The Peninsular Plateau (Deccan Plateau):**
   * Triangular tableland rich in minerals like coal and iron ore ⛰️
5. **The Coastal Plains & Islands:**
   * Eastern & Western coastal strips, plus Andaman & Nicobar and Lakshadweep islands 🏝️
              `,
              visualExamples: [
                { icon: "🏔️", title: "The Himalayas", text: "Towering snow walls acting as India's natural northern shield.", tag: "Mountains" },
                { icon: "🌾", title: "Northern Plains", text: "Rich alluvium soil watered by river Ganga.", tag: "Plains" },
                { icon: "🐪", title: "Thar Desert", text: "Golden sand dunes known for extreme hot days and cool nights.", tag: "Desert" }
              ],
              activity: {
                type: "landform_matcher",
                title: "Match Landform to Feature",
                instruction: "Match each region with its distinctive characteristic!",
                pairs: [
                  { region: "Himalayas", feature: "Highest snow peaks" },
                  { region: "Northern Plains", feature: "Food bowl of India" },
                  { region: "Thar Desert", feature: "Golden sand dunes" },
                  { region: "Deccan Plateau", feature: "Mineral rich tableland" }
                ]
              },
              practiceQuestions: [
                {
                  id: "pq1",
                  question: "Which mountain range guards India's northern boundary?",
                  options: ["Himalayas", "Alps", "Rockies"],
                  correctAnswer: "Himalayas",
                  explanation: "The mighty Himalayas lie along India's northern borders."
                }
              ],
              quiz: [
                {
                  id: "q1",
                  type: "multiple-choice",
                  question: "Which river originates in the Himalayas and flows across the Northern Plains?",
                  options: ["Ganga", "Thames", "Amazon", "Nile"],
                  correctAnswer: "Ganga",
                  explanation: "The Ganga originates from the Gangotri glacier in the Himalayas.",
                  hint: "India's revered national river."
                },
                {
                  id: "q2",
                  type: "multiple-choice",
                  question: "The Thar Desert is primarily located in which Indian state?",
                  options: ["Rajasthan", "Kerala", "Assam", "West Bengal"],
                  correctAnswer: "Rajasthan",
                  explanation: "The Thar Desert spans large parts of western Rajasthan.",
                  hint: "Famous for royal forts and camel safaris."
                },
                {
                  id: "q3",
                  type: "true-false",
                  question: "True or False: A plateau is flat land elevated high above its surroundings.",
                  options: ["True", "False"],
                  correctAnswer: "True",
                  explanation: "A plateau is often described as a 'tableland' because it has a flat top.",
                  hint: "Think of a table standing on the floor."
                },
                {
                  id: "q4",
                  type: "fill-in-the-blank",
                  question: "The animal known as the 'Ship of the Desert' is the ___.",
                  options: ["camel", "horse", "elephant", "yak"],
                  correctAnswer: "camel",
                  explanation: "Camels have wide padded feet and hump energy reserves adapted for deserts.",
                  hint: "Has a hump on its back."
                },
                {
                  id: "q5",
                  type: "multiple-choice",
                  question: "Which island group of India lies in the Bay of Bengal?",
                  options: [
                    "Andaman and Nicobar Islands",
                    "Lakshadweep Islands",
                    "Maldives",
                    "Sri Lanka"
                  ],
                  correctAnswer: "Andaman and Nicobar Islands",
                  explanation: "The Andaman and Nicobar Islands are in the Bay of Bengal, while Lakshadweep is in the Arabian Sea.",
                  hint: "A union territory in eastern waters."
                }
              ]
            }
          ]
        }
      ]
    }
  }
};
