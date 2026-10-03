// GRADE 5 CURRICULUM
// English, Mathematics, Social Science

export const grade5Data = {
  grade: 5,
  gradeTitle: "Grade 5 - Junior Scholars",
  gradeDescription: "Master percentages, active & passive voice, democratic governance, and analytical problem solving!",
  mascot: "🎓",
  subjects: {
    english: {
      id: "english",
      title: "English Adventures",
      tagline: "Active/Passive Voice, Vocabulary & Persuasive Writing",
      icon: "BookOpen",
      themeColor: "#0284C7",
      bgColor: "#E0F2FE",
      units: [
        {
          id: "g5-eng-u1",
          unitNumber: 1,
          title: "Active & Passive Voice",
          description: "Discover how sentence focus shifts between the doer and the receiver of action!",
          lessons: [
            {
              id: "g5-eng-u1-l1",
              title: "Active and Passive Voice Dynamics",
              courseTitle: "Advanced Language Skills",
              unitTitle: "Unit 1: Active & Passive Voice",
              duration: "10 mins",
              xp: 100,
              badgeIcon: "🗣️",
              summary: "Learn to identify and transform sentences between Active and Passive voice!",
              explanation: `
### What is Active and Passive Voice?
In English, the voice of a verb tells whether the subject performs or receives the action!

1. **Active Voice (Direct & Energetic):**
   * The subject **does** the action.
   * *Formula:* Subject + Verb + Object
   * *Example:* "Ananya **wrote** a brilliant story." ✍️
2. **Passive Voice (Focus on the Result/Object):**
   * The subject **receives** the action, often using "by".
   * *Formula:* Object + Form of 'Be' + Past Participle (V3) + by + Subject
   * *Example:* "A brilliant story **was written by** Ananya." 📜

**When do we use Passive Voice?**
* When the action itself or the result is more important than who did it (e.g., "The telescope was invented in 1608").
              `,
              visualExamples: [
                { icon: "🎨", title: "Active Voice", text: "The artist painted the mural.", tag: "Subject does action" },
                { icon: "🖼️", title: "Passive Voice", text: "The mural was painted by the artist.", tag: "Object receives action" },
                { icon: "⚽", title: "Sports Action", text: "Active: Leo kicked the ball. Passive: The ball was kicked by Leo.", tag: "Comparison" }
              ],
              activity: {
                type: "voice_transformer",
                title: "Active vs Passive Identifier",
                instruction: "Determine if each sentence is in Active or Passive voice!",
                items: [
                  { sentence: "The chef cooked a delicious pasta.", type: "Active" },
                  { sentence: "The novel was read by millions.", type: "Passive" },
                  { sentence: "Engineers built the suspension bridge.", type: "Active" },
                  { sentence: "The trophy was awarded by the principal.", type: "Passive" }
                ]
              },
              practiceQuestions: [
                {
                  id: "pq1",
                  question: "Is 'The dog chased the ball' Active or Passive?",
                  options: ["Active", "Passive"],
                  correctAnswer: "Active",
                  explanation: "The subject 'dog' performs the action 'chased' directly."
                }
              ],
              quiz: [
                {
                  id: "q1",
                  type: "multiple-choice",
                  question: "Which of these sentences is in the PASSIVE voice?",
                  options: [
                    "Rohan scored two goals.",
                    "Two goals were scored by Rohan.",
                    "Rohan is scoring goals now.",
                    "Rohan will score goals tomorrow."
                  ],
                  correctAnswer: "Two goals were scored by Rohan.",
                  explanation: "The object (two goals) is in the subject position and uses 'were scored by'.",
                  hint: "Look for 'were ... by'."
                },
                {
                  id: "q2",
                  type: "multiple-choice",
                  question: "Transform to Passive: 'Shakespeare wrote Hamlet.'",
                  options: [
                    "Hamlet was written by Shakespeare.",
                    "Shakespeare is writing Hamlet.",
                    "Hamlet wrote Shakespeare.",
                    "Shakespeare was written Hamlet."
                  ],
                  correctAnswer: "Hamlet was written by Shakespeare.",
                  explanation: "Hamlet takes the subject position + was written + by Shakespeare.",
                  hint: "Past tense of write is 'was written'."
                },
                {
                  id: "q3",
                  type: "true-false",
                  question: "True or False: The passive voice always uses the past participle form of the verb.",
                  options: ["True", "False"],
                  correctAnswer: "True",
                  explanation: "Passive voice always pairs a form of 'to be' with the V3 past participle.",
                  hint: "Like: written, eaten, completed."
                },
                {
                  id: "q4",
                  type: "fill-in-the-blank",
                  question: "Active: 'Scientists discovered a new planet.' -> Passive: 'A new planet ___ discovered by scientists.'",
                  options: ["was", "is", "were", "are"],
                  correctAnswer: "was",
                  explanation: "'A new planet' is singular and the past tense helper is 'was'.",
                  hint: "Singular past tense helper."
                },
                {
                  id: "q5",
                  type: "multiple-choice",
                  question: "Why do scientists often prefer passive voice in lab reports?",
                  options: [
                    "To focus on the experiment results rather than themselves",
                    "Because active voice is illegal",
                    "To make sentences shorter",
                    "It has no verbs"
                  ],
                  correctAnswer: "To focus on the experiment results rather than themselves",
                  explanation: "Passive voice emphasizes the objective observation ('The solution was heated') rather than the person.",
                  hint: "Objectivity and scientific focus."
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
      tagline: "Percentages, Decimals & Geometry",
      icon: "Calculator",
      themeColor: "#059669",
      bgColor: "#D1FAE5",
      units: [
        {
          id: "g5-math-u1",
          unitNumber: 1,
          title: "The Trio: Fractions, Decimals & Percentages",
          description: "Convert seamlessly between parts of 100, decimals, and percentages!",
          lessons: [
            {
              id: "g5-math-u1-l1",
              title: "Percentages as Parts of 100",
              courseTitle: "Applied Mathematics",
              unitTitle: "Unit 1: The Trio (Fractions, Decimals, %)",
              duration: "10 mins",
              xp: 100,
              badgeIcon: "📊",
              summary: "Percent means 'per hundred'. Learn how 50% = 0.50 = 1/2!",
              explanation: `
### What Does 'Percent' Mean?
The word **Percent** comes from the Latin *per centum*, which means **per 100**!
The symbol is **%**.

Whenever you see a percentage, imagine a 100-square grid:
* **$100\\%$** = The entire whole ($1.0$ or $\\frac{100}{100}$)
* **$50\\%$** = Half the grid ($0.5$ or $\\frac{1}{2}$)
* **$25\\%$** = One quarter ($0.25$ or $\\frac{1}{4}$)
* **$75\\%$** = Three quarters ($0.75$ or $\\frac{3}{4}$)

**Quick Calculation Trick:**
To find $10\\%$ of any number, simply move the decimal point one place to the left!
* $10\\%$ of $80 = 8$
* $10\\%$ of $250 = 25$
              `,
              visualExamples: [
                { icon: "💯", title: "100 Grid", text: "50 shaded squares out of 100 = 50% = 1/2", tag: "50%" },
                { icon: "🪙", title: "Quarter Cent", text: "25 shaded squares out of 100 = 25% = 1/4", tag: "25%" },
                { icon: "🏷️", title: "Discount Sale", text: "A 20% off tag means saving 20 rupees for every 100 rupees!", tag: "Application" }
              ],
              activity: {
                type: "percent_converter",
                title: "Convert Fraction to Percent",
                instruction: "What percentage is equivalent to the fraction 1/2?",
                fraction: "1/2",
                options: ["20%", "25%", "50%", "75%"],
                correctAnswer: "50%"
              },
              practiceQuestions: [
                {
                  id: "pq1",
                  question: "What is 25% written as a fraction in simplest form?",
                  options: ["1/4", "1/2", "3/4"],
                  correctAnswer: "1/4",
                  explanation: "25/100 simplified by dividing numerator and denominator by 25 is 1/4."
                }
              ],
              quiz: [
                {
                  id: "q1",
                  type: "multiple-choice",
                  question: "What is 50% of 200?",
                  options: ["50", "100", "150", "20"],
                  correctAnswer: "100",
                  explanation: "50% is half of the amount: 200 ÷ 2 = 100.",
                  hint: "Find half of 200."
                },
                {
                  id: "q2",
                  type: "multiple-choice",
                  question: "Write 0.75 as a percentage:",
                  options: ["7.5%", "75%", "0.75%", "750%"],
                  correctAnswer: "75%",
                  explanation: "Multiply the decimal by 100: 0.75 × 100 = 75%.",
                  hint: "Move the decimal 2 spots right."
                },
                {
                  id: "q3",
                  type: "true-false",
                  question: "True or False: 100% of a number is equal to the number itself.",
                  options: ["True", "False"],
                  correctAnswer: "True",
                  explanation: "100% = 100/100 = 1. Multiplying any number by 1 yields that number.",
                  hint: "100% means the entire whole."
                },
                {
                  id: "q4",
                  type: "fill-in-the-blank",
                  question: "10% of 90 is equal to ___.",
                  options: ["9", "10", "19", "90"],
                  correctAnswer: "9",
                  explanation: "10% of 90 = (10/100) × 90 = 9.",
                  hint: "Divide 90 by 10."
                },
                {
                  id: "q5",
                  type: "multiple-choice",
                  question: "If Priya scored 18 out of 20 on a math test, what is her percentage?",
                  options: ["80%", "85%", "90%", "95%"],
                  correctAnswer: "90%",
                  explanation: "(18/20) × 100 = 18 × 5 = 90%.",
                  hint: "18 ÷ 20 = 0.90."
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
      tagline: "Democracy, Constitution & Indian Heritage",
      icon: "Globe",
      themeColor: "#EA580C",
      bgColor: "#FFEDD5",
      units: [
        {
          id: "g5-soc-u1",
          unitNumber: 1,
          title: "How Indian Democracy Works",
          description: "Discover the Constitution, Parliament, and Rights of Citizens!",
          lessons: [
            {
              id: "g5-soc-u1-l1",
              title: "The Constitution & Our Democratic Republic",
              courseTitle: "Civics & Governance",
              unitTitle: "Unit 1: How Indian Democracy Works",
              duration: "10 mins",
              xp: 100,
              badgeIcon: "📜",
              summary: "Learn about the Indian Constitution, Dr. B.R. Ambedkar, and Fundamental Rights!",
              explanation: `
### What is a Constitution?
A **Constitution** is the supreme rulebook of a country! It sets out how the government works and protects the rights and freedoms of every citizen.

**Key Milestones of Indian Democracy:**
* **Dr. B.R. Ambedkar** was the Chairman of the Drafting Committee, reverently honored as the **Father of the Indian Constitution** 🇮🇳
* The Constitution came into effect on **26th January 1950**, celebrated with great pride as **Republic Day**!
* India is the largest democracy in the world, where citizens aged **18 and above** have the right to vote through the **Universal Adult Suffrage**.

**Fundamental Rights Protected for All:**
1. Right to Equality
2. Right to Freedom of Speech & Expression
3. Right against Exploitation
4. Right to Freedom of Religion
5. Cultural and Educational Rights
6. Right to Constitutional Remedies
              `,
              visualExamples: [
                { icon: "🏛️", title: "The Parliament (Sansad)", text: "Where elected representatives (Lok Sabha & Rajya Sabha) make laws.", tag: "Legislature" },
                { icon: "⚖️", title: "Supreme Court", text: "The highest court of justice upholding fundamental rights.", tag: "Judiciary" },
                { icon: "🗳️", title: "Right to Vote", text: "Every Indian citizen aged 18+ has 1 vote with equal value.", tag: "Democracy" }
              ],
              activity: {
                type: "rights_explorer",
                title: "Fundamental Rights Identifier",
                instruction: "Match each scenario with the Fundamental Right that protects it!",
                pairs: [
                  { scenario: "Every child has the right to attend school", right: "Cultural & Educational Right" },
                  { scenario: "All citizens are equal before law regardless of caste or religion", right: "Right to Equality" },
                  { scenario: "Expressing ideas freely through writing and art", right: "Right to Freedom of Speech" }
                ]
              },
              practiceQuestions: [
                {
                  id: "pq1",
                  question: "Who is known as the Father of the Indian Constitution?",
                  options: ["Dr. B.R. Ambedkar", "Mahatma Gandhi", "Jawaharlal Nehru"],
                  correctAnswer: "Dr. B.R. Ambedkar",
                  explanation: "Dr. Bhimrao Ramji Ambedkar chaired the drafting committee of the Constitution."
                }
              ],
              quiz: [
                {
                  id: "q1",
                  type: "multiple-choice",
                  question: "On which date did the Constitution of India come into force?",
                  options: [
                    "15th August 1947",
                    "26th January 1950",
                    "2nd October 1869",
                    "1st May 1960"
                  ],
                  correctAnswer: "26th January 1950",
                  explanation: "The Constitution of India came into effect on 26th January 1950, celebrated as Republic Day.",
                  hint: "Celebrated as Republic Day."
                },
                {
                  id: "q2",
                  type: "multiple-choice",
                  question: "What is the minimum voting age for Indian citizens in general elections?",
                  options: ["16 years", "18 years", "21 years", "25 years"],
                  correctAnswer: "18 years",
                  explanation: "Any Indian citizen who is 18 years or older can vote.",
                  hint: "Eighteen."
                },
                {
                  id: "q3",
                  type: "true-false",
                  question: "True or False: The Preamble is the introduction to the Indian Constitution.",
                  options: ["True", "False"],
                  correctAnswer: "True",
                  explanation: "The Preamble summarizes the guiding principles and values of the Indian Constitution.",
                  hint: "The opening soul of the document."
                },
                {
                  id: "q4",
                  type: "fill-in-the-blank",
                  question: "The two houses of the Indian Parliament are the Lok Sabha and the ___ Sabha.",
                  options: ["Rajya", "Vidhan", "Janata", "Rashtriya"],
                  correctAnswer: "Rajya",
                  explanation: "The Parliament of India consists of the President, Lok Sabha (House of the People), and Rajya Sabha (Council of States).",
                  hint: "Council of States."
                },
                {
                  id: "q5",
                  type: "multiple-choice",
                  question: "What does 'Democracy' mean in simple terms?",
                  options: [
                    "Rule by one king forever",
                    "Government of the people, by the people, for the people",
                    "Rule by military generals",
                    "Nobody makes any laws"
                  ],
                  correctAnswer: "Government of the people, by the people, for the people",
                  explanation: "In a democracy, the power rests with the citizens who elect their own leaders.",
                  hint: "Abraham Lincoln's famous definition."
                }
              ]
            }
          ]
        }
      ]
    }
  }
};
