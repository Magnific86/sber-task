import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { QuizItem, QuizItemNoId } from "../types.ts"
import { v4 } from "uuid"

type QuizSliceState = {
  list: QuizItem[]
  isLoading: boolean
  isError: boolean
}

const mock: QuizItemNoId[] = [
  {
    type: "multiple",
    difficulty: "medium",
    category: "History",
    question: "The Panama Canal was finished under the administration of which U.S. president?",
    correct_answer: "Woodrow Wilson",
    incorrect_answers: ["Franklin Delano Roosevelt", "Herbert Hoover", "Theodore Roosevelt"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Geography",
    question: "Which of these cities has a 4&deg; East longitude. ",
    correct_answer: "Amsterdam",
    incorrect_answers: ["Rio de Janero", "Toronto", "Hong Kong"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Sports",
    question: "Which team has won the most Stanley Cups in the NHL?",
    correct_answer: "Montreal Canadians",
    incorrect_answers: ["Chicago Blackhawks", "Toronto Maple Leafs", "Detroit Red Wings"],
  },
  // {
  //   type: "boolean",
  //   difficulty: "easy",
  //   category: "Entertainment: Music",
  //   question: "Lead Singer Rivers Cuomo of American rock band Weezer attended Harvard.",
  //   correct_answer: "True",
  //   incorrect_answers: ["False"],
  // },
  // {
  //   type: "multiple",
  //   difficulty: "medium",
  //   category: "Entertainment: Video Games",
  //   question: "In the game The World Ends With You, all of these characters act as a game partner with Neku for a week except:",
  //   correct_answer: "Rhyme",
  //   incorrect_answers: ["Shiki", "Joshua", "Beat"],
  // },
  // {
  //   type: "boolean",
  //   difficulty: "medium",
  //   category: "Entertainment: Board Games",
  //   question: "&quot;Rich Uncle Pennybags&quot; from the board game &quot;Monopoly&quot; wears a monocle.",
  //   correct_answer: "False",
  //   incorrect_answers: ["True"],
  // },
  // {
  //   type: "multiple",
  //   difficulty: "medium",
  //   category: "Entertainment: Music",
  //   question: "Which European capital city gives its name to a 1981 song by Ultravox?",
  //   correct_answer: "Vienna",
  //   incorrect_answers: ["Berlin", "Paris", "Brussels"],
  // },
  // {
  //   type: "multiple",
  //   difficulty: "medium",
  //   category: "Animals",
  //   question: "What is the name for a male bee that comes from an unfertilized egg?",
  //   correct_answer: "Drone",
  //   incorrect_answers: ["Soldier", "Worker", "Male"],
  // },
  // {
  //   type: "multiple",
  //   difficulty: "hard",
  //   category: "Entertainment: Music",
  //   question: "Which of these songs is not by Tatsuro Yamashita?",
  //   correct_answer: "Lucky Lady Feel So Good ",
  //   incorrect_answers: ["Merry-Go Round", "Let&#039;s Dance Baby", "Love Talkin&#039;"],
  // },
  // {
  //   type: "boolean",
  //   difficulty: "hard",
  //   category: "Entertainment: Video Games",
  //   question: "In &quot;The Sims&quot; series, the most members in a household you can have is 8.",
  //   correct_answer: "True",
  //   incorrect_answers: ["False"],
  // },
]

const initialState: QuizSliceState = {
  // list: mock.map(el => ({ ...el, id: v4() })),
  list: [],
  isLoading: false,
  isError: false,
}

const slice = createSlice({
  name: "quizList",
  initialState,
  reducers: {
    getList(state) {},
  },
  extraReducers: builder => {
    builder.addCase(fetchQuizList.pending, state => {
      state.isLoading = true
      state.isError = false
    })
    builder.addCase(fetchQuizList.fulfilled, (state, action) => {
      state.isLoading = false
      state.isError = false
      state.list = [...action.payload.map((el: QuizItemNoId) => ({ ...el, id: v4() }))]
    })
    builder.addCase(fetchQuizList.rejected, state => {
      state.isLoading = false
      state.isError = true
    })
  },
})

export const fetchQuizList = createAsyncThunk("quizList/fetchQuizList", async () => {
  const response = await axios.get("https://opentdb.com/api.php?amount=10")
  return response.data.results
})

export const quizSlice = slice.reducer
