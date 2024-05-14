import { hasEqualStructure } from "../utils/function.test"
import { mockQuizListData, mockQuizListDataWithIds } from "../const/functionTestData"
import { fetchQuizList, quizSlice } from "./quizSlice"

const initialState = {
  list: [],
  isLoading: false,
  //проверка чтобы обнулялась ошибка
  error: "initial error",
}

describe("Функционал quizSlice экстра редюсеров: ", () => {
  it("Должна выключиться загрузка и убираться ошибка: ", () => {
    const state = quizSlice(initialState, fetchQuizList.pending(""))
    expect(state.isLoading).toBeTruthy()
    expect(state.error).toBeNull()
  })

  it("В стейте должен появиться массив вопросов, обнулиться ошибка и выключиться загрузка", () => {
    const state = quizSlice(initialState, fetchQuizList.fulfilled(mockQuizListData, ""))

    expect(hasEqualStructure(state.list, mockQuizListDataWithIds)).toBeTruthy()
    expect(state.error).toBeNull()
    expect(state.isLoading).toBeFalsy()
  })

  it("При неудачном запросе массив пустой, загрузка выключена, ошибка есть: ", () => {
    const state = quizSlice(initialState, fetchQuizList.rejected({ message: "Error message", name: "" }, ""))

    expect(state.error).toBe("Error message")
    expect(state.isLoading).toBeFalsy()
    expect(state.list).toStrictEqual([])
  })
})
