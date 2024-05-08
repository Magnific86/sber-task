import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type AnsersSliceState = {
  answer: Record<string, string>
  isQuizEnded: boolean // param for showing answers
}

const initialState: AnsersSliceState = {
  answer: {},
  isQuizEnded: false,
}

type PayloadAnswer = {
  id: string
  answer: string
}

const slice = createSlice({
  name: "answer",
  initialState,
  reducers: {
    addAnswer(state, action: PayloadAction<PayloadAnswer>) {
      if (!!action?.payload?.answer) {
        state.answer[action.payload.id] = action.payload.answer
      }
    },
    endQuiz(state) {
      state.isQuizEnded = true
    },
    startNewQuiz(state) {
      // state = initialState
      state.answer = {}
      state.isQuizEnded = false
    },
  },
})

export const { addAnswer, endQuiz, startNewQuiz } = slice.actions
export const answerSlice = slice.reducer
