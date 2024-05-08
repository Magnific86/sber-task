import axios from "axios"
import { mockAuizListData } from "../tests/functionTestData"
import { QuizItemNoId } from "../types"
import { jest } from "@jest/globals"
import { fetchQuizList } from "./quizSlice"
import { v4 } from "uuid"
import { hasEqualStructure } from "../utils/function"
import { store } from "./index"

jest.mock("axios")
// jest.mock("axios", () => ({
//   create: jest.fn(),
// }))

// axios.create = jest.fn();

describe("fetchQuizList", () => {
  let response: Record<string, QuizItemNoId[]>

  beforeEach(() => {
    response = {
      data: mockAuizListData,
    }
  })

  test("200: ", async () => {
    jest.fn<() => Record<string, QuizItemNoId[]>>().mockReturnValue(response)

    const dispatch = store.dispatch

    const data = await dispatch(fetchQuizList())

    // console.log(' test("200: ", async () => { data', data)

    expect(axios.get).toBeCalledTimes(1)
    expect(hasEqualStructure(data, mockAuizListData)).toBe(true)
  })
  test("not 200: ", async () => {})
})
