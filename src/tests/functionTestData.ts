import { QuizItem, QuizItemNoId } from "../types/index.js"

// Данные для теста функции sortQuestionsByDifficulty
export const entriesArr: QuizItem[] = [
  {
    id: "1",
    type: "multiple",
    category: "History",
    question: "...?",
    correct_answer: "...",
    incorrect_answers: [],
    difficulty: "hard",
  },
  {
    id: "2",
    type: "multiple",
    category: "History",
    question: "...?",
    correct_answer: "...",
    incorrect_answers: [],
    difficulty: "easy",
  },
  {
    id: "3",
    type: "multiple",
    category: "History",
    question: "...?",
    correct_answer: "...",
    incorrect_answers: [],
    difficulty: "medium",
  },
  {
    id: "4",
    type: "multiple",
    category: "History",
    question: "...?",
    correct_answer: "...",
    incorrect_answers: [],
    difficulty: "easy",
  },
  {
    id: "5",
    type: "multiple",
    category: "History",
    question: "...?",
    correct_answer: "...",
    incorrect_answers: [],
    difficulty: "hard",
  },

  {
    id: "6",
    type: "multiple",
    category: "History",
    question: "...?",
    correct_answer: "...",
    incorrect_answers: [],
    difficulty: "medium",
  },
]

export const sortedArr: QuizItem[] = [
  {
    id: "4",
    type: "multiple",
    category: "History",
    question: "...?",
    correct_answer: "...",
    incorrect_answers: [],
    difficulty: "easy",
  },
  {
    id: "2",
    type: "multiple",
    category: "History",
    question: "...?",
    correct_answer: "...",
    incorrect_answers: [],
    difficulty: "easy",
  },

  {
    id: "6",
    type: "multiple",
    category: "History",
    question: "...?",
    correct_answer: "...",
    incorrect_answers: [],
    difficulty: "medium",
  },
  {
    id: "3",
    type: "multiple",
    category: "History",
    question: "...?",
    correct_answer: "...",
    incorrect_answers: [],
    difficulty: "medium",
  },

  {
    id: "5",
    type: "multiple",
    category: "History",
    question: "...?",
    correct_answer: "...",
    incorrect_answers: [],
    difficulty: "hard",
  },
  {
    id: "1",
    type: "multiple",
    category: "History",
    question: "...?",
    correct_answer: "...",
    incorrect_answers: [],
    difficulty: "hard",
  },
]

// Данные для теста функции detectRadioColor
const QUESTION_ID = "2"
const mockAnswer = { "1": ["first correct answer"], "2": ["second correct answer"], "3": ["third correct answer"] }
const mockAnswerWithMistake = { "1": ["first correct answer"], "2": ["second incorrect answer"], "3": ["third correct answer"] }
const firstCaseCorrectAnswer = "second correct answer"
const correctAnswer = "second correct answer"
const secondCaseIncorrectAnswer = "second incorrect answer"
const thirdCaseAnswer = "some other answer"

export { QUESTION_ID, mockAnswer, mockAnswerWithMistake, firstCaseCorrectAnswer, correctAnswer, secondCaseIncorrectAnswer, thirdCaseAnswer }

// Данные для теста функции prepareAnswers
export const incorrectAnswers = ["1 some incorrect", "2 some incorrect", "3 some incorrect"]

// Данные для теста функции calculateRightAnswersCount
export const mockQuizListDataAnswers = {
  "2955e951-3e1a-42d0-ab1a-db1bc6869450": ["Franklin Roosevelt"],
  "fd83ee2b-9552-4c55-89b8-29aa189921cb": ["Horse-Racing"],
  "27c9e0c3-3554-41c3-8047-ab29a9a470c3": ["Ralph McQuarrie"],
  "a23e2a6e-2f6a-46e5-b97d-b5ad2c1f7754": ["Coffee Lake"],
  "04b27795-7de2-4515-8ae6-a4abd756143a": ["False"],
  "4cd678d2-f285-4a9d-ba2a-b1889023a18b": ["The Legend of Zelda: Four Swords"],
  "8738d134-c6d9-4b37-906a-838d7b99e596": ["Mars"],
  "bfdc2948-cbe0-4c55-90c5-4b3906fe7a2f": ["Athena"],
  "6fa4486d-114c-4761-9013-b221ad0ed244": ["155"],
  "7be94712-fe9d-4d9a-999c-00ddbe224ec9": ["True"],
}

// Тестовый массив без ид
export const mockQuizListData: QuizItemNoId[] = [
  {
    type: "multiple",
    difficulty: "medium",
    category: "History",
    question: "Which of the following Presidents of the United States was assassinated?",
    correct_answer: "William McKinley",
    incorrect_answers: ["Lyndon Johnson", "Chester Arthur", "Franklin Roosevelt"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Sports",
    question: "Which sport is NOT traditionally played during the Mongolian Naadam festival?",
    correct_answer: "American Football",
    incorrect_answers: ["Wrestling", "Archery", "Horse-Racing"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Film",
    question:
      "What is the name of the foley artist who designed the famous sounds of Star Wars, including Chewbacca&#039;s roar and R2-D2&#039;s beeps and whistles?",
    correct_answer: "Ben Burtt",
    incorrect_answers: ["Ken Burns", "Ralph McQuarrie", "Miranda Keyes"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What is the codename of the eighth generation Intel Core micro-architecture launched in October 2017?",
    correct_answer: "Coffee Lake",
    incorrect_answers: ["Sandy Bridge", "Skylake", "Broadwell"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Entertainment: Board Games",
    question: "In the game &quot;Racko&quot; you may pick up ANY card from the discard pile.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Entertainment: Video Games",
    question: "Which of the following games in the The Legend of Zelda franchise was released in Japan before North America?",
    correct_answer: "The Legend of Zelda: The Minish Cap",
    incorrect_answers: ["The Legend of Zelda: Twilight Princess", "The Legend of Zelda: Spirit Tracks", "The Legend of Zelda: Four Swords"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science &amp; Nature",
    question: "Gannymede is the largest moon of which planet?",
    correct_answer: "Jupiter",
    incorrect_answers: ["Uranus", "Neptune", "Mars"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Mythology",
    question: "Who was the only god from Greece who did not get a name change in Rome?",
    correct_answer: "Apollo",
    incorrect_answers: ["Demeter", "Zeus", "Athena"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "General Knowledge",
    question: "How many calories are in a 355 ml can of Pepsi Cola?",
    correct_answer: "150",
    incorrect_answers: ["200", "100", "155"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Entertainment: Japanese Anime &amp; Manga",
    question: "Kiznaiver is an adaptation of a manga.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
]

// Тестовый массив с ид
export const mockQuizListDataWithIds: QuizItem[] = [
  {
    type: "multiple",
    difficulty: "medium",
    category: "History",
    question: "Which of the following Presidents of the United States was assassinated?",
    correct_answer: "William McKinley",
    incorrect_answers: ["Lyndon Johnson", "Chester Arthur", "Franklin Roosevelt"],
    id: "2955e951-3e1a-42d0-ab1a-db1bc6869450",
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Sports",
    question: "Which sport is NOT traditionally played during the Mongolian Naadam festival?",
    correct_answer: "American Football",
    incorrect_answers: ["Wrestling", "Archery", "Horse-Racing"],
    id: "fd83ee2b-9552-4c55-89b8-29aa189921cb",
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Film",
    question:
      "What is the name of the foley artist who designed the famous sounds of Star Wars, including Chewbacca&#039;s roar and R2-D2&#039;s beeps and whistles?",
    correct_answer: "Ben Burtt",
    incorrect_answers: ["Ken Burns", "Ralph McQuarrie", "Miranda Keyes"],
    id: "27c9e0c3-3554-41c3-8047-ab29a9a470c3",
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What is the codename of the eighth generation Intel Core micro-architecture launched in October 2017?",
    correct_answer: "Coffee Lake",
    incorrect_answers: ["Sandy Bridge", "Skylake", "Broadwell"],
    id: "a23e2a6e-2f6a-46e5-b97d-b5ad2c1f7754",
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Entertainment: Board Games",
    question: "In the game &quot;Racko&quot; you may pick up ANY card from the discard pile.",
    correct_answer: "False",
    incorrect_answers: ["True"],
    id: "04b27795-7de2-4515-8ae6-a4abd756143a",
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Entertainment: Video Games",
    question: "Which of the following games in the The Legend of Zelda franchise was released in Japan before North America?",
    correct_answer: "The Legend of Zelda: The Minish Cap",
    incorrect_answers: ["The Legend of Zelda: Twilight Princess", "The Legend of Zelda: Spirit Tracks", "The Legend of Zelda: Four Swords"],
    id: "4cd678d2-f285-4a9d-ba2a-b1889023a18b",
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science &amp; Nature",
    question: "Gannymede is the largest moon of which planet?",
    correct_answer: "Jupiter",
    incorrect_answers: ["Uranus", "Neptune", "Mars"],
    id: "8738d134-c6d9-4b37-906a-838d7b99e596",
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Mythology",
    question: "Who was the only god from Greece who did not get a name change in Rome?",
    correct_answer: "Apollo",
    incorrect_answers: ["Demeter", "Zeus", "Athena"],
    id: "bfdc2948-cbe0-4c55-90c5-4b3906fe7a2f",
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "General Knowledge",
    question: "How many calories are in a 355 ml can of Pepsi Cola?",
    correct_answer: "150",
    incorrect_answers: ["200", "100", "155"],
    id: "6fa4486d-114c-4761-9013-b221ad0ed244",
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Entertainment: Japanese Anime &amp; Manga",
    question: "Kiznaiver is an adaptation of a manga.",
    correct_answer: "False",
    incorrect_answers: ["True"],
    id: "7be94712-fe9d-4d9a-999c-00ddbe224ec9",
  },
]
