import { detectRadioColor, sortQuestionsByDifficulty } from "../utils/function"
import {
  QUESTION_ID,
  correctAnswer,
  entriesArr,
  expectedArr,
  firstCaseCorrectAnswer,
  mockAnswer,
  mockAnswerWithMistake,
  secondCaseIncorrectAnswer,
  thirdCaseAnswer,
} from "./functionTestData"

describe("detectRadioColor cases: ", () => {
  test("return success color: ", () => {
    expect(detectRadioColor(QUESTION_ID, firstCaseCorrectAnswer, correctAnswer, mockAnswer)).toBe("success")
  })
  test("return error color: ", () => {
    expect(detectRadioColor(QUESTION_ID, secondCaseIncorrectAnswer, correctAnswer, mockAnswerWithMistake)).toBe("error")
  })
  test("return default color: ", () => {
    expect(detectRadioColor(QUESTION_ID, thirdCaseAnswer, correctAnswer, mockAnswer)).toBe("default")
  })
})

test("sortQuestionsByDifficulty test function: ", () => {
  expect(sortQuestionsByDifficulty(entriesArr)).toStrictEqual(expectedArr)
})
