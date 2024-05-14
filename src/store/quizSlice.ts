import { Action, PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { QuizItem } from "../types/index"
import { mapListToIds } from "../utils/function"
// для тестов
// import { mockQuizListData } from "src/const/functionTestData"

type QuizSliceState = {
  list: QuizItem[]
  isLoading: boolean
  error: string | null
}

type AxiosReduxErrorAction<T> = PayloadAction<T> & Record<"error", Error>

const initialState: QuizSliceState = {
  // list: mapListToIds(mockQuizListData),
  list: [],
  isLoading: false,
  error: null,
}

const slice = createSlice({
  name: "quizList",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchQuizList.pending, state => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchQuizList.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = null
        state.list = [...mapListToIds(action.payload)]
      })
      .addMatcher(isError, (state, action: AxiosReduxErrorAction<Error>) => {
        state.isLoading = false

        if (!!action?.error) {
          state.error = action.error.message
        } else {
          state.error = action.payload.message
        }
      })
  },
})

const isError = (action: Action) => action.type.endsWith("rejected")

export const fetchQuizList = createAsyncThunk("quizList/fetchQuizList", async (_, { rejectWithValue }) => {
  try {
    const resp = await axios.get("https://opentdb.com/api.php?amount=10")
    return resp.data.results
  } catch (err) {
    return rejectWithValue(err)
  }
})

export const quizSlice = slice.reducer
