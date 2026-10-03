// GRADE 2 CURRICULUM
// English, Mathematics, Social Science

export const grade2Data = {
  grade: 2,
  gradeTitle: "Grade 2 - Curious Creators",
  gradeDescription: "Grow your vocabulary, master 3-digit numbers, discover clocks and explore helpful communities!",
  mascot: "🚀",
  subjects: {
    english: {
      id: "english",
      title: "English Adventures",
      tagline: "Nouns, Verbs, Adjectives & Stories",
      icon: "BookOpen",
      themeColor: "#0284C7",
      bgColor: "#E0F2FE",
      units: [
        {
          id: "g2-eng-u1",
          unitNumber: 1,
          title: "Parts of Speech: Nouns & Adjectives",
          description: "Discover naming words and describing words that paint vivid pictures!",
          lessons: [
            {
              id: "g2-eng-u1-l1",
              title: "Nouns: Naming People, Places, Animals & Things",
              courseTitle: "Grammar & Words",
              unitTitle: "Unit 1: Nouns & Adjectives",
              duration: "7 mins",
              xp: 60,
              badgeIcon: "🏷️",
              summary: "A noun is a name of a person, place, animal, or thing!",
              explanation: `
### What is a Noun?
Look around you! Everything you can see and touch has a name. These naming words are called **Nouns**!

* **Person:** Doctor, Teacher, Mother, Boy, Girl 👨‍⚕️
* **Place:** School, Park, Delhi, Hospital, Beach 🏫
* **Animal:** Elephant, Puppy, Parrot, Kitten 🐘
* **Thing:** Pencil, Book, Apple, Ball, Chair ✏️

**Proper Nouns vs Common Nouns:**
* A common noun is general: *city*, *boy*, *river*.
* A proper noun is a special name that starts with a **Capital Letter**: *Mumbai*, *Aarav*, *Ganga*.
              `,
              visualExamples: [
                { icon: "👩‍🏫", title: "Person", text: "Teacher, Doctor, Grandfather, Friend", tag: "People" },
                { icon: "🏖️", title: "Place", text: "Park, Classroom, Beach, Library", tag: "Places" },
                { icon: "🐕", title: "Animal", text: "Dog, Tiger, Whale, Butterfly", tag: "Animals" },
                { icon: "🎒", title: "Thing", text: "Backpack, Pencil box, Soccer ball", tag: "Things" }
              ],
              activity: {
                type: "noun_classifier",
                title: "Noun Sorting Box",
                instruction: "Classify each word into Person, Place, Animal, or Thing!",
                items: [
                  { word: "Hospital", category: "Place" },
                  { word: "Dentist", category: "Person" },
                  { word: "Rabbit", category: "Animal" },
                  { word: "Umbrella", category: "Thing" }
                ]
              },
              practiceQuestions: [
                {
                  id: "pq1",
                  question: "Which of the following is a Place noun?",
                  options: ["Library", "Running", "Yellow"],
                  correctAnswer: "Library",
                  explanation: "A library is a place where you read books!"
                }
              ],
              quiz: [
                {
                  id: "q1",
                  type: "multiple-choice",
                  question: "Which word in this sentence is a noun: 'The kitten drank milk.'?",
                  options: ["drank", "kitten", "slowly", "very"],
                  correctAnswer: "kitten",
                  explanation: "'Kitten' is an animal naming word, so it is a noun.",
                  hint: "A baby cat."
                },
                {
                  id: "q2",
                  type: "multiple-choice",
                  question: "Proper nouns always begin with a:",
                  options: ["Small letter", "Capital letter", "Number", "Exclamation mark"],
                  correctAnswer: "Capital letter",
                  explanation: "Specific names like India, Priya, or Monday always start with a capital letter.",
                  hint: "Think of big uppercase letters."
                },
                {
                  id: "q3",
                  type: "true-false",
                  question: "True or False: 'Run' is a noun.",
                  options: ["True", "False"],
                  correctAnswer: "False",
                  explanation: "'Run' is an action verb, not a naming noun!",
                  hint: "Is 'run' an action you do?"
                },
                {
                  id: "q4",
                  type: "fill-in-the-blank",
                  question: "Identify the type of noun: 'Taj Mahal' is a proper name of a ___.",
                  options: ["place", "fruit", "weather", "sport"],
                  correctAnswer: "place",
                  explanation: "The Taj Mahal is a historic monument and place in Agra.",
                  hint: "You can visit it."
                },
                {
                  id: "q5",
                  type: "multiple-choice",
                  question: "Which group contains ONLY nouns?",
                  options: [
                    "Dog, Park, Pencil",
                    "Run, Jump, Sing",
                    "Blue, Sweet, Tall",
                    "Quickly, Loudly, Happily"
                  ],
                  correctAnswer: "Dog, Park, Pencil",
                  explanation: "Dog (animal), Park (place), and Pencil (thing) are all nouns!",
                  hint: "Look for animal, place, and thing."
                },
                {
                  id: "q6",
                  type: "multiple-choice",
                  question: "Which is a proper noun?",
                  options: ["city", "country", "India", "river"],
                  correctAnswer: "India",
                  explanation: "'India' is a specific country name and begins with a capital 'I'.",
                  hint: "It has a capital letter and is a country's name."
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
      tagline: "Place Value, Multiplication & Time",
      icon: "Calculator",
      themeColor: "#059669",
      bgColor: "#D1FAE5",
      units: [
        {
          id: "g2-math-u1",
          unitNumber: 1,
          title: "Place Value & Multiplication Intro",
          description: "Understand 3-digit numbers (Hundreds, Tens, Ones) and repeated addition!",
          lessons: [
            {
              id: "g2-math-u1-l1",
              title: "Place Value: Hundreds, Tens & Ones",
              courseTitle: "Numbers & Operations",
              unitTitle: "Unit 1: Place Value & Multiplication Intro",
              duration: "8 mins",
              xp: 60,
              badgeIcon: "💯",
              summary: "Break 3-digit numbers into Hundreds (H), Tens (T), and Ones (O)!",
              explanation: `
### The Power of Place Value!
Numbers have spots called places. The value of a digit depends on where it sits!

Let's look at the number **348**:
* **3** is in the **Hundreds** place = **300**
* **4** is in the **Tens** place = **40**
* **8** is in the **Ones** place = **8**

**Expanded Form:**
$$348 = 300 + 40 + 8$$

When 10 ones gather together, they make **1 Ten**. When 10 tens gather, they make **1 Hundred**!
              `,
              visualExamples: [
                { icon: "📦", title: "100 Block", text: "1 Big square block of 100 small cubes.", tag: "Hundreds" },
                { icon: "🥢", title: "10 Rod", text: "1 Tall stick made of 10 stacked cubes.", tag: "Tens" },
                { icon: "🧊", title: "1 Unit Cube", text: "A single loose individual cube.", tag: "Ones" }
              ],
              activity: {
                type: "place_value_builder",
                title: "Build the Number 235",
                instruction: "How many Hundreds, Tens, and Ones are in 235?",
                target: 235,
                hundreds: 2,
                tens: 3,
                ones: 5
              },
              practiceQuestions: [
                {
                  id: "pq1",
                  question: "What is the place value of 5 in 542?",
                  options: ["500", "50", "5"],
                  correctAnswer: "500",
                  explanation: "5 is in the Hundreds column, so its value is 500."
                }
              ],
              quiz: [
                {
                  id: "q1",
                  type: "multiple-choice",
                  question: "What is the expanded form of 472?",
                  options: [
                    "400 + 70 + 2",
                    "40 + 7 + 2",
                    "400 + 7 + 20",
                    "4 + 7 + 2"
                  ],
                  correctAnswer: "400 + 70 + 2",
                  explanation: "4 hundreds (400) + 7 tens (70) + 2 ones (2) = 472.",
                  hint: "Break each digit into its place."
                },
                {
                  id: "q2",
                  type: "multiple-choice",
                  question: "What number is made of: 6 Hundreds, 0 Tens, and 9 Ones?",
                  options: ["690", "609", "906", "69"],
                  correctAnswer: "609",
                  explanation: "6 in hundreds, 0 in tens, 9 in ones gives 609.",
                  hint: "Don't forget the zero in the tens spot."
                },
                {
                  id: "q3",
                  type: "true-false",
                  question: "True or False: 10 Tens equal 1 Hundred.",
                  options: ["True", "False"],
                  correctAnswer: "True",
                  explanation: "Yes! 10 × 10 = 100.",
                  hint: "Count by tens: 10, 20, 30... 100!"
                },
                {
                  id: "q4",
                  type: "fill-in-the-blank",
                  question: "In the number 819, the digit in the tens place is ___.",
                  options: ["1", "8", "9", "10"],
                  correctAnswer: "1",
                  explanation: "In 819: 8 is Hundreds, 1 is Tens, 9 is Ones.",
                  hint: "The middle digit."
                },
                {
                  id: "q5",
                  type: "multiple-choice",
                  question: "Which number is greater: 543 or 534?",
                  options: ["543", "534", "They are equal", "Cannot tell"],
                  correctAnswer: "543",
                  explanation: "Both have 5 hundreds, but 543 has 4 tens while 534 only has 3 tens.",
                  hint: "Look at the tens place."
                },
                {
                  id: "q6",
                  type: "multiple-choice",
                  question: "What is 2 groups of 5 equal to?",
                  options: ["7", "10", "15", "25"],
                  correctAnswer: "10",
                  explanation: "Repeated addition: 5 + 5 = 10, which is 2 × 5 = 10.",
                  hint: "Count on two hands: 5 fingers + 5 fingers."
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
      tagline: "Community Helpers & Neighbourhood",
      icon: "Globe",
      themeColor: "#EA580C",
      bgColor: "#FFEDD5",
      units: [
        {
          id: "g2-soc-u1",
          unitNumber: 1,
          title: "Community Helpers & Transport",
          description: "Discover the amazing people who make our towns safe and how we travel!",
          lessons: [
            {
              id: "g2-soc-u1-l1",
              title: "Our Super Community Helpers",
              courseTitle: "Community & Life",
              unitTitle: "Unit 1: Community Helpers & Transport",
              duration: "7 mins",
              xp: 60,
              badgeIcon: "🚒",
              summary: "Learn how doctors, firefighters, teachers, and sanitation workers help us every day!",
              explanation: `
### Who are Community Helpers?
A community is a place where people live and work together. Community helpers are everyday superheroes who provide essential services!

* **Doctor & Nurse:** Care for us when we are ill and give medicines 🩺
* **Firefighter:** Brave heroes who put out dangerous fires and rescue people and pets 🚒
* **Police Officer:** Keep our roads safe, prevent crime, and help find lost items 👮
* **Teacher:** Guide us with knowledge, reading, math, and good manners 📚
* **Farmer:** Grow fresh grains, fruits, and vegetables for our plates 🌾
* **Sanitation Worker:** Keep our streets clean and collect garbage so diseases do not spread 🧹
              `,
              visualExamples: [
                { icon: "🩺", title: "Doctor", text: "Works at a clinic or hospital with a stethoscope.", tag: "Health" },
                { icon: "🚒", title: "Firefighter", text: "Rides in a red fire engine with sirens and water hoses.", tag: "Safety" },
                { icon: "🌾", title: "Farmer", text: "Wakes early to till fields and cultivate food crops.", tag: "Food" },
                { icon: "👮", title: "Police Officer", text: "Maintains law and order and directs road traffic.", tag: "Security" }
              ],
              activity: {
                type: "helper_tool_match",
                title: "Match Helper to Tool",
                instruction: "Match each helper with their special tool!",
                pairs: [
                  { helper: "Doctor", tool: "Stethoscope" },
                  { helper: "Firefighter", tool: "Water hose" },
                  { helper: "Teacher", tool: "Blackboard & Chalk" },
                  { helper: "Farmer", tool: "Tractor & Seeds" }
                ]
              },
              practiceQuestions: [
                {
                  id: "pq1",
                  question: "Who helps us stay healthy when we catch a fever?",
                  options: ["Doctor", "Pilot", "Mechanic"],
                  correctAnswer: "Doctor",
                  explanation: "Doctors examine our symptoms and prescribe medicine to heal us!"
                }
              ],
              quiz: [
                {
                  id: "q1",
                  type: "multiple-choice",
                  question: "Who grows food crops like wheat and rice for us?",
                  options: ["Chef", "Farmer", "Pilot", "Tailor"],
                  correctAnswer: "Farmer",
                  explanation: "Farmers work hard in fields growing crops, fruits, and vegetables.",
                  hint: "They work on farms."
                },
                {
                  id: "q2",
                  type: "multiple-choice",
                  question: "Which emergency number do we call for fire rescue in most places?",
                  options: ["101", "000", "555", "111"],
                  correctAnswer: "101",
                  explanation: "In India, 101 is the emergency telephone number for the fire brigade.",
                  hint: "Common emergency telephone line."
                },
                {
                  id: "q3",
                  type: "true-false",
                  question: "True or False: We should respect and thank sanitation workers for keeping our streets clean.",
                  options: ["True", "False"],
                  correctAnswer: "True",
                  explanation: "Sanitation workers do vital, dignified work that protects everyone from illness.",
                  hint: "Kindness and respect always."
                },
                {
                  id: "q4",
                  type: "fill-in-the-blank",
                  question: "A ___ stitches beautiful clothes and uniforms for us.",
                  options: ["tailor", "cobbler", "carpenter", "baker"],
                  correctAnswer: "tailor",
                  explanation: "A tailor uses sewing machines, needles, and cloth to make clothing.",
                  hint: "Works with needle and thread."
                },
                {
                  id: "q5",
                  type: "multiple-choice",
                  question: "Where does a librarian work?",
                  options: ["Bakery", "Library", "Fire station", "Airport"],
                  correctAnswer: "Library",
                  explanation: "Librarians organize books and help us borrow exciting reading material.",
                  hint: "A quiet room filled with books."
                }
              ]
            }
          ]
        }
      ]
    }
  }
};
