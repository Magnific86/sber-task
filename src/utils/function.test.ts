import { calculateRightAnswersCount, detectRadioColor, mapListToIds, prepareAnswers, sortQuestionsByDifficulty } from "./function"
import {
  QUESTION_ID,
  correctAnswer,
  entriesArr,
  sortedArr,
  firstCaseCorrectAnswer,
  mockAnswer,
  mockAnswerWithMistake,
  secondCaseIncorrectAnswer,
  thirdCaseAnswer,
  mockQuizListDataWithIds,
  mockQuizListDataAnswers,
  mockQuizListData,
  incorrectAnswers,
} from "../const/functionTestData"

export const hasEqualStructure = (obj1: Record<string, any>, obj2: Record<string, any>) => {
  return Object.keys(obj1).every((key: string): boolean => {
    const v = obj1[key]
    if (typeof v === "object" && v !== null) {
      return hasEqualStructure(v, obj2[key])
    }
    return obj2.hasOwnProperty(key)
  })
}

describe("Тестирование функции mapListToIds: ", () => {
  it("Тестирование базового функционала функции: ", () => {
    const arrWithIds = mapListToIds(mockQuizListData)

    // Проверяем структурную идентичность

    expect(hasEqualStructure(arrWithIds, mockQuizListDataWithIds)).toBe(true)
  })
})

describe("Тестирование функции detectRadioColor: ", () => {
  test("Вернет зеленый цвет (строка 'success'): ", () => {
    expect(detectRadioColor(QUESTION_ID, firstCaseCorrectAnswer, correctAnswer, mockAnswer)).toBe("success")
  })
  test("Вернет красный цвет (строка 'error'): ", () => {
    expect(detectRadioColor(QUESTION_ID, secondCaseIncorrectAnswer, correctAnswer, mockAnswerWithMistake)).toBe("error")
  })
  test("Вернет дефолтный цвет (строка 'default'): ", () => {
    expect(detectRadioColor(QUESTION_ID, thirdCaseAnswer, correctAnswer, mockAnswer)).toBe("default")
  })
})

describe("Тестирование функции sortQuestionsByDifficulty", () => {
  test("Дефолтный функционал: ", () => {
    expect(sortQuestionsByDifficulty(entriesArr)).toStrictEqual(sortedArr)
  })

  test("Если передать пустой массив: ", () => {
    expect(sortQuestionsByDifficulty([])).toStrictEqual([])
  })
})

describe("Тестирование функции prepareAnswers: ", () => {
  it("Рандомно добавить в массив неправильных ответов правильный: ", () => {
    const resultAnswers = prepareAnswers(incorrectAnswers, correctAnswer)

    expect(resultAnswers.includes(correctAnswer)).toBe(true)
    expect(resultAnswers.length).toBe(4)
  })
})

describe("Тестирование функции calculateRightAnswersCount: ", () => {
  it("Тестирование подсчета верных результатов: ", () => {
    calculateRightAnswersCount(mockQuizListDataWithIds, mockQuizListDataAnswers)
  })
})
