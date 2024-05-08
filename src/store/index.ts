import { configureStore } from "@reduxjs/toolkit"
import { quizSlice } from "./quizSlice"
import { answerSlice } from "./answerSlice"

export const store = configureStore({
  reducer: {
    quiz: quizSlice,
    answer: answerSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
