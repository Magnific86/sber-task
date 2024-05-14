import { PayloadAction } from "@reduxjs/toolkit"
import { addAnswer, answerSlice, endQuiz, startNewQuiz } from "./answerSlice"
import { PayloadAnswer } from "src/types"

const initialState = {
  answer: {},
  isQuizEnded: false,
}

const answerPayloadData: PayloadAnswer = {
  id: "33443",
  answer: [],
}

describe("Функционал answerSlice редюсера: ", () => {
  it("Должен возвращаться инишл стейт если ничего не передавать: ", () => {
    const result = answerSlice(undefined, { type: "" })
    expect(result).toEqual(initialState)
  })
  it("Должен добавлять новый ответ в обьект ответа: ", () => {
    const action: PayloadAction<PayloadAnswer> = {
      type: addAnswer.type,
      payload: answerPayloadData,
    }

    const result = answerSlice(initialState, action)

    expect(result.answer).toStrictEqual({ "33443": [] })
  })

  it("Должен меняться флаг isQuizEnded на true: ", () => {
    const action: PayloadAction<null> = {
      type: endQuiz.type,
      payload: null,
    }

    const result = answerSlice(initialState, action)

    expect(result.isQuizEnded).toBeTruthy()
  })

  it("Должен обнуляться стейт ответов и флаг isQuizEnded стать false: ", () => {
    const action: PayloadAction<null> = {
      type: startNewQuiz.type,
      payload: null,
    }
    const result = answerSlice(initialState, action)

    expect(result.answer).toStrictEqual({})
    expect(result.isQuizEnded).toBeFalsy()
  })
})
