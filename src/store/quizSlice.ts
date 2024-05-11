import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { QuizItem } from "../types/index.js"
import { mockQuizListData } from "src/const/functionTestData"
import { mapListToIds } from "src/utils/function"

type QuizSliceState = {
  list: QuizItem[]
  isLoading: boolean
  isError: boolean
}

const initialState: QuizSliceState = {
  // list: mapListToIds(mockQuizListData),
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
      state.list = [...mapListToIds(action.payload)]
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
