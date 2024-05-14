import { mockQuizListData } from "../const/functionTestData"
import { fetchQuizList } from "./quizSlice"
import axios from "axios"

jest.mock("axios")
const mockedAxios = axios as jest.Mocked<typeof axios>

describe("Тестирование запроса", () => {
  it("На resolve: ", async () => {
    const dispatch = jest.fn()

    mockedAxios.get.mockResolvedValue({
      data: { results: mockQuizListData },
    })

    const thunk = fetchQuizList()

    await thunk(dispatch, () => ({}), {})

    expect(mockedAxios.get).toBeCalledTimes(1)

    const { calls } = dispatch.mock

    expect(calls).toHaveLength(2)

    const [start, end] = calls

    expect(start[0].type).toBe(fetchQuizList.pending("").type)
    expect(end[0].type).toBe(fetchQuizList.fulfilled({}, "").type)
    expect(end[0].payload).toBe(mockQuizListData)
  })

  it("На reject: ", async () => {
    const dispatch = jest.fn()

    mockedAxios.get.mockRejectedValue({
      name: "",
      message: "Error message",
    })

    const thunk = fetchQuizList()

    await thunk(dispatch, () => ({}), {})

    //второй вызов
    expect(mockedAxios.get).toBeCalledTimes(2)

    const { calls } = dispatch.mock

    expect(calls).toHaveLength(2)

    const [start, end] = calls

    expect(start[0].type).toBe(fetchQuizList.pending("").type)
    expect(end[0].type).toBe(fetchQuizList.rejected(null, "").type)
    expect(end[0].meta.rejectedWithValue).toBe(true)
    expect(end[0].payload.message).toBe("Error message")
  })
})
