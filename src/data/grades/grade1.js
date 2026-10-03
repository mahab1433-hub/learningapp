// GRADE 1 CURRICULUM
// English, Mathematics, Social Science

export const grade1Data = {
  grade: 1,
  gradeTitle: "Grade 1 - Little Explorers",
  gradeDescription: "Embark on an exciting journey of letters, counting, shapes, and the lovely world around you!",
  mascot: "🌟",
  subjects: {
    english: {
      id: "english",
      title: "English Adventures",
      tagline: "Alphabet, Phonics & First Words",
      icon: "BookOpen",
      themeColor: "#0284C7",
      bgColor: "#E0F2FE",
      units: [
        {
          id: "g1-eng-u1",
          unitNumber: 1,
          title: "Alphabet & Phonics Magic",
          description: "Discover short vowel sounds (A, E, I, O, U) and letter sounds.",
          lessons: [
            {
              id: "g1-eng-u1-l1",
              title: "Short Vowel 'A' & Magic CVC Words",
              courseTitle: "Early Phonics",
              unitTitle: "Unit 1: Alphabet & Phonics Magic",
              duration: "6 mins",
              xp: 50,
              badgeIcon: "🔤",
              summary: "Learn how the letter 'A' makes the /æ/ sound in words like Cat, Bat, and Hat!",
              explanation: `
### Welcome to the Short Vowel 'A' Sound!
Every vowel has a magical sound. Today we are learning the short **A** sound, like the sound you make when biting into a crisp apple: **/æ/**!

* When **C** + **A** + **T** join hands, they sound like /k/ - /æ/ - /t/ = **CAT**! 🐱
* When **B** + **A** + **T** join hands, they sound like /b/ - /æ/ - /t/ = **BAT**! 🦇
* When **H** + **A** + **T** join hands, they sound like /h/ - /æ/ - /t/ = **HAT**! 🎩

**Friendly Tip:** C-V-C means **C**onsonant - **V**owel - **C**onsonant. The vowel sits snugly in the middle!
              `,
              visualExamples: [
                { icon: "🐱", title: "C - A - T", text: "A furry friend that says meow! Rhymes with hat.", tag: "Cat" },
                { icon: "🍎", title: "A - P - P - L - E", text: "A sweet red fruit starting with the /æ/ sound.", tag: "Apple" },
                { icon: "🦇", title: "B - A - T", text: "A flying creature with wings or a toy for cricket!", tag: "Bat" },
                { icon: "🎩", title: "H - A - T", text: "Something cozy you wear on top of your head!", tag: "Hat" }
              ],
              activity: {
                type: "word_match",
                title: "Spell the CVC Word",
                instruction: "Click the missing vowel to complete each word!",
                words: [
                  { prefix: "C", suffix: "T", target: "A", meaning: "A pet animal", options: ["A", "O", "E"] },
                  { prefix: "M", suffix: "T", target: "A", meaning: "You wipe your shoes on it", options: ["A", "U", "I"] },
                  { prefix: "P", suffix: "N", target: "A", meaning: "Used for cooking yummy eggs", options: ["A", "E", "O"] }
                ]
              },
              practiceQuestions: [
                {
                  id: "pq1",
                  question: "Which word rhymes with 'CAT'?",
                  options: ["DOG", "BAT", "SUN"],
                  correctAnswer: "BAT",
                  explanation: "CAT and BAT have the same ending sound '-at'!"
                },
                {
                  id: "pq2",
                  question: "What is the first sound in the word 'Apple'?",
                  options: ["/b/", "/æ/", "/d/"],
                  correctAnswer: "/æ/",
                  explanation: "Apple starts with the short 'A' sound /æ/!"
                }
              ],
              quiz: [
                {
                  id: "q1",
                  type: "multiple-choice",
                  question: "Which letter is the vowel in the word 'HAT'?",
                  options: ["H", "A", "T", "None"],
                  correctAnswer: "A",
                  explanation: "In 'HAT', H and T are consonants, and A is the middle vowel.",
                  hint: "It makes the /æ/ sound!"
                },
                {
                  id: "q2",
                  type: "multiple-choice",
                  question: "Choose the word that has the short 'A' sound:",
                  options: ["BED", "PIG", "PAN", "SUN"],
                  correctAnswer: "PAN",
                  explanation: "PAN has the short 'A' sound /æ/.",
                  hint: "Look for the letter 'A' in the middle!"
                },
                {
                  id: "q3",
                  type: "true-false",
                  question: "True or False: The words 'FAN' and 'MAN' rhyme.",
                  options: ["True", "False"],
                  correctAnswer: "True",
                  explanation: "Yes! Both 'FAN' and 'MAN' end with the '-an' sound family.",
                  hint: "Say both words out loud!"
                },
                {
                  id: "q4",
                  type: "fill-in-the-blank",
                  question: "Fill in the missing letter: B _ T (used to hit a ball)",
                  options: ["A", "O", "U", "E"],
                  correctAnswer: "A",
                  explanation: "B + A + T spells BAT!",
                  hint: "Think of our short 'A' vowel."
                },
                {
                  id: "q5",
                  type: "multiple-choice",
                  question: "Which animal name has a short 'A' sound?",
                  options: ["FROG", "CAT", "PIG", "DUCK"],
                  correctAnswer: "CAT",
                  explanation: "CAT contains the short 'A' sound /æ/.",
                  hint: "It loves milk and says meow!"
                },
                {
                  id: "q6",
                  type: "multiple-choice",
                  question: "How many letters are in the CVC word 'JAM'?",
                  options: ["2", "3", "4", "5"],
                  correctAnswer: "3",
                  explanation: "J-A-M has 3 letters: Consonant, Vowel, Consonant.",
                  hint: "Count J, A, and M!"
                }
              ]
            },
            {
              id: "g1-eng-u1-l2",
              title: "Sight Words & Building Easy Sentences",
              courseTitle: "Early Phonics",
              unitTitle: "Unit 1: Alphabet & Phonics Magic",
              duration: "7 mins",
              xp: 50,
              badgeIcon: "📖",
              summary: "Learn sight words: THE, IS, ON, A, and how to read full sentences!",
              explanation: `
### Sight Words are Magic Words!
Sight words are special words you see everywhere. When you know them by sight, reading feels super fast and fun!

* **THE** - "The cat is asleep."
* **IS** - "The sun is bright."
* **ON** - "The frog is on a log."
* **SEE** - "I see a blue bird."

**Sentence Rule:** Every sentence begins with a **Capital Letter** and ends with a **Full Stop (.)**!
              `,
              visualExamples: [
                { icon: "🐸", title: "Frog on a log", text: "'The frog is on the log.' 6 words!", tag: "Sight Words" },
                { icon: "☀️", title: "The sun is up", text: "Starts with Capital 'T' and ends with '.'", tag: "Sentence" },
                { icon: "⭐", title: "I see a star", text: "'I' and 'see' are magic sight words.", tag: "Reading" }
              ],
              activity: {
                type: "word_match",
                title: "Match Sight Words to Sentences",
                instruction: "Select the word that correctly fits the sentence!",
                words: [
                  { prefix: "The cat ", suffix: " soft.", target: "is", meaning: "Action/state", options: ["is", "on", "at"] },
                  { prefix: "A bird is ", suffix: " the tree.", target: "in", meaning: "Location", options: ["in", "to", "go"] },
                  { prefix: "I ", suffix: " my teacher.", target: "like", meaning: "Feeling", options: ["like", "is", "up"] }
                ]
              },
              practiceQuestions: [
                {
                  id: "pq1",
                  question: "What must every sentence end with?",
                  options: ["A comma (,)", "A full stop (.)", "A number"],
                  correctAnswer: "A full stop (.)",
                  explanation: "A full stop shows the thought has finished!"
                }
              ],
              quiz: [
                {
                  id: "q1",
                  type: "multiple-choice",
                  question: "Which of these is a sight word?",
                  options: ["THE", "ELEPHANT", "CROCODILE", "AIRPLANE"],
                  correctAnswer: "THE",
                  explanation: "'THE' is one of the most common sight words in English.",
                  hint: "It has only 3 letters!"
                },
                {
                  id: "q2",
                  type: "true-false",
                  question: "A sentence should begin with a small letter.",
                  options: ["True", "False"],
                  correctAnswer: "False",
                  explanation: "Sentences must ALWAYS start with a capital letter!",
                  hint: "Think about the big uppercase letter at the start."
                },
                {
                  id: "q3",
                  type: "multiple-choice",
                  question: "Choose the correctly written sentence:",
                  options: [
                    "the dog ran",
                    "The dog ran.",
                    "The dog ran",
                    "the Dog ran."
                  ],
                  correctAnswer: "The dog ran.",
                  explanation: "It has a Capital 'T' at the start and a full stop '.' at the end!",
                  hint: "Look for both the capital start and the end period."
                },
                {
                  id: "q4",
                  type: "fill-in-the-blank",
                  question: "Complete the sentence: 'The book is ___ the table.'",
                  options: ["on", "big", "see", "run"],
                  correctAnswer: "on",
                  explanation: "'On' describes the position of the book resting on the table.",
                  hint: "A 2-letter position word."
                },
                {
                  id: "q5",
                  type: "multiple-choice",
                  question: "Which sight word completes: 'I ___ a green frog.'",
                  options: ["see", "car", "hot", "sun"],
                  correctAnswer: "see",
                  explanation: "'See' tells what your eyes are doing!",
                  hint: "You do this with your eyes."
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
      tagline: "Numbers, Counting & Fun Shapes",
      icon: "Calculator",
      themeColor: "#059669",
      bgColor: "#D1FAE5",
      units: [
        {
          id: "g1-math-u1",
          unitNumber: 1,
          title: "Numbers & Counting to 20",
          description: "Count joyful objects, compare numbers, and learn basic addition!",
          lessons: [
            {
              id: "g1-math-u1-l1",
              title: "Counting & Adding with Pictures",
              courseTitle: "Early Numbers",
              unitTitle: "Unit 1: Numbers & Counting to 20",
              duration: "6 mins",
              xp: 50,
              badgeIcon: "🔢",
              summary: "Learn how putting two groups of items together makes addition!",
              explanation: `
### What is Addition?
Addition means putting things together! The symbol for addition is the plus sign: **+**.

* You have **2 apples** 🍎🍎
* Your friend gives you **3 more apples** 🍎🍎🍎
* Put them all together: **2 + 3 = 5 apples**! 🎉

The equals sign **=** shows the total amount.
              `,
              visualExamples: [
                { icon: "🍎", title: "2 + 1 = 3", text: "2 red apples plus 1 green apple equals 3 delicious apples!", tag: "Addition" },
                { icon: "⭐", title: "4 + 2 = 6", text: "Four shining stars and two more make a total of six stars!", tag: "Counting" },
                { icon: "🎈", title: "3 + 3 = 6", text: "Three blue balloons plus three yellow balloons float up!", tag: "Pairs" }
              ],
              activity: {
                type: "counter_add",
                title: "Fun Counter Addition",
                instruction: "Solve the counting problem!",
                targetSum: 7,
                firstNum: 4,
                secondNum: 3
              },
              practiceQuestions: [
                {
                  id: "pq1",
                  question: "What is 3 + 2?",
                  options: ["4", "5", "6"],
                  correctAnswer: "5",
                  explanation: "Count 3, then two more: 4, 5!"
                }
              ],
              quiz: [
                {
                  id: "q1",
                  type: "multiple-choice",
                  question: "What is 2 + 2?",
                  options: ["3", "4", "5", "6"],
                  correctAnswer: "4",
                  explanation: "2 plus 2 equals 4.",
                  hint: "Count on your fingers: 1, 2... 3, 4!"
                },
                {
                  id: "q2",
                  type: "multiple-choice",
                  question: "You have 5 candies and get 0 more. How many candies do you have now?",
                  options: ["0", "4", "5", "10"],
                  correctAnswer: "5",
                  explanation: "Adding 0 leaves the number unchanged: 5 + 0 = 5.",
                  hint: "0 means nothing added!"
                },
                {
                  id: "q3",
                  type: "true-false",
                  question: "True or False: 4 is greater than 7.",
                  options: ["True", "False"],
                  correctAnswer: "False",
                  explanation: "7 is greater than 4 because 7 has more items than 4.",
                  hint: "Think which number comes later when counting."
                },
                {
                  id: "q4",
                  type: "fill-in-the-blank",
                  question: "Fill in the blank: 3 + ___ = 6",
                  options: ["2", "3", "4", "1"],
                  correctAnswer: "3",
                  explanation: "3 + 3 = 6 (Double 3 is 6).",
                  hint: "Half of 6 is this number."
                },
                {
                  id: "q5",
                  type: "multiple-choice",
                  question: "Which number comes right after 9?",
                  options: ["8", "10", "11", "7"],
                  correctAnswer: "10",
                  explanation: "When counting up: 7, 8, 9, 10!",
                  hint: "The first two-digit number!"
                },
                {
                  id: "q6",
                  type: "multiple-choice",
                  question: "What sign shows 'add together'?",
                  options: ["-", "+", "=", "x"],
                  correctAnswer: "+",
                  explanation: "The plus sign (+) means addition.",
                  hint: "It looks like a little cross."
                }
              ]
            },
            {
              id: "g1-math-u1-l2",
              title: "Shapes & Repeating Patterns",
              courseTitle: "Early Numbers",
              unitTitle: "Unit 1: Numbers & Counting to 20",
              duration: "6 mins",
              xp: 50,
              badgeIcon: "🔺",
              summary: "Learn circles, squares, triangles, rectangles, and playful color patterns!",
              explanation: `
### Discovering 2D Shapes!
Shapes are all around us! Look at a clock, a book, or a slice of pizza!

* **Circle:** Perfectly round with **0 straight sides** and **0 corners** (like a coin 🪙).
* **Triangle:** Has **3 straight sides** and **3 pointy corners** (like a pizza slice 🍕).
* **Square:** Has **4 equal sides** and **4 corners** (like a game dice 🎲).
* **Rectangle:** Has **4 sides** (2 long sides and 2 short sides) like a door or book 📖.

**Pattern Magic:** Circle, Square, Circle, Square... What comes next? Circle!
              `,
              visualExamples: [
                { icon: "🟡", title: "Circle", text: "Round and smooth, zero corners like the warm sun.", tag: "0 Corners" },
                { icon: "🔺", title: "Triangle", text: "Three sharp corners and three straight edges.", tag: "3 Corners" },
                { icon: "🟦", title: "Square", text: "Four equal sides that are all the exact same length.", tag: "4 Equal Sides" }
              ],
              activity: {
                type: "pattern_finish",
                title: "Complete the Shape Pattern",
                instruction: "What shape comes next in the sequence?",
                sequence: ["🟡", "🔺", "🟡", "🔺", "?"],
                options: ["🟡", "🔺", "🟦"],
                correctAnswer: "🟡"
              },
              practiceQuestions: [
                {
                  id: "pq1",
                  question: "How many corners does a circle have?",
                  options: ["0", "1", "3"],
                  correctAnswer: "0",
                  explanation: "A circle is completely curved with 0 corners!"
                }
              ],
              quiz: [
                {
                  id: "q1",
                  type: "multiple-choice",
                  question: "How many sides does a triangle have?",
                  options: ["2", "3", "4", "5"],
                  correctAnswer: "3",
                  explanation: "A triangle always has 3 sides and 3 corners.",
                  hint: "'Tri' means three!"
                },
                {
                  id: "q2",
                  type: "multiple-choice",
                  question: "Which shape has 4 sides of equal length?",
                  options: ["Circle", "Triangle", "Square", "Oval"],
                  correctAnswer: "Square",
                  explanation: "A square has 4 sides and all 4 sides are exactly equal.",
                  hint: "Think of a dice or checkerboard tile."
                },
                {
                  id: "q3",
                  type: "true-false",
                  question: "True or False: A rectangle has 4 corners.",
                  options: ["True", "False"],
                  correctAnswer: "True",
                  explanation: "Yes! A rectangle has 4 corners and 4 straight sides.",
                  hint: "Count the corners of an envelope or textbook."
                },
                {
                  id: "q4",
                  type: "multiple-choice",
                  question: "Complete the pattern: Red, Blue, Red, Blue, ___?",
                  options: ["Green", "Red", "Yellow", "Purple"],
                  correctAnswer: "Red",
                  explanation: "The pattern alternates between Red and Blue. After Blue comes Red!",
                  hint: "Follow the repeating rhythm!"
                },
                {
                  id: "q5",
                  type: "fill-in-the-blank",
                  question: "A coin or clock face is shaped like a ___.",
                  options: ["circle", "square", "triangle", "star"],
                  correctAnswer: "circle",
                  explanation: "Coins and standard wall clocks are round circles.",
                  hint: "A shape with zero corners."
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
      tagline: "Myself, Family & Our Safe World",
      icon: "Globe",
      themeColor: "#EA580C",
      bgColor: "#FFEDD5",
      units: [
        {
          id: "g1-soc-u1",
          unitNumber: 1,
          title: "Myself, Family & Safe Habits",
          description: "Learn about your wonderful body, family bonds, and staying safe.",
          lessons: [
            {
              id: "g1-soc-u1-l1",
              title: "All About Myself & Good Habits",
              courseTitle: "My World",
              unitTitle: "Unit 1: Myself, Family & Safe Habits",
              duration: "6 mins",
              xp: 50,
              badgeIcon: "🌱",
              summary: "Learn what makes you special, your five senses, and healthy everyday habits!",
              explanation: `
### You are Special & Unique!
There is nobody else in the whole world exactly like you! 

Our bodies have **Five Senses** that help us explore:
1. **Eyes** to see colors, books, and rainbows 👀
2. **Ears** to hear birds singing and music 👂
3. **Nose** to smell flowers and tasty baking 👃
4. **Tongue** to taste sweet, salty, and sour treats 👅
5. **Skin & Hands** to touch soft teddy bears and cool water ✋

**Golden Daily Habits:**
* Brush your teeth twice a day 🪥
* Wash hands with soap before eating 🧼
* Drink plenty of clean water and eat green vegetables 🥦
              `,
              visualExamples: [
                { icon: "👀", title: "Sense of Sight", text: "Our eyes help us see shapes, vibrant colors, and friends.", tag: "Eyes" },
                { icon: "👂", title: "Sense of Hearing", text: "Our ears hear the school bell, laughter, and bird songs.", tag: "Ears" },
                { icon: "🧼", title: "Hand Hygiene", text: "Wash hands with soap for 20 seconds to wash away germs.", tag: "Habit" }
              ],
              activity: {
                type: "sense_match",
                title: "Sense Match Explorer",
                instruction: "Match the organ with what it helps us do!",
                pairs: [
                  { organ: "Eyes", action: "See rainbows" },
                  { organ: "Ears", action: "Hear music" },
                  { organ: "Nose", action: "Smell roses" },
                  { organ: "Tongue", action: "Taste ice cream" }
                ]
              },
              practiceQuestions: [
                {
                  id: "pq1",
                  question: "Which sense organ helps us listen to music?",
                  options: ["Ears", "Nose", "Tongue"],
                  correctAnswer: "Ears",
                  explanation: "Our ears catch sound waves so we can hear songs and voices!"
                }
              ],
              quiz: [
                {
                  id: "q1",
                  type: "multiple-choice",
                  question: "How many sense organs do humans have?",
                  options: ["3", "4", "5", "6"],
                  correctAnswer: "5",
                  explanation: "We have 5 sense organs: eyes, ears, nose, tongue, and skin.",
                  hint: "Count on one hand!"
                },
                {
                  id: "q2",
                  type: "multiple-choice",
                  question: "Which organ helps us taste sweet mangoes?",
                  options: ["Nose", "Tongue", "Eyes", "Skin"],
                  correctAnswer: "Tongue",
                  explanation: "The tongue has taste buds that detect sweet, sour, salty, and bitter.",
                  hint: "It is inside your mouth."
                },
                {
                  id: "q3",
                  type: "true-false",
                  question: "True or False: We should wash our hands with soap before eating.",
                  options: ["True", "False"],
                  correctAnswer: "True",
                  explanation: "Washing hands with soap washes away germs and keeps us healthy.",
                  hint: "A very clean habit."
                },
                {
                  id: "q4",
                  type: "fill-in-the-blank",
                  question: "We use our ___ to smell sweet jasmine flowers.",
                  options: ["nose", "ears", "eyes", "feet"],
                  correctAnswer: "nose",
                  explanation: "Our nose is the sense organ of smell.",
                  hint: "Right in the middle of your face."
                },
                {
                  id: "q5",
                  type: "multiple-choice",
                  question: "How many times a day should we brush our teeth?",
                  options: ["Once a week", "Twice a day", "Never", "Once a month"],
                  correctAnswer: "Twice a day",
                  explanation: "Brushing in the morning and before bed keeps teeth shiny and cavity-free!",
                  hint: "Morning and night."
                }
              ]
            }
          ]
        }
      ]
    }
  }
};
