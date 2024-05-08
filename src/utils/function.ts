import { QuizItem, Status } from "../types.ts"

export const detectRadioColor = (id: string, thisAnswerStr: string, correctAnswer: string, answer: Record<string, string>): Status => {
  const IS_ANSWERED_CORRECT = correctAnswer === answer[id]
  const IS_THIS_ANSWER_CHOOSEN = thisAnswerStr === answer[id]
  const IS_THIS_ANSWER_CORRECT = correctAnswer === thisAnswerStr

  if (!IS_THIS_ANSWER_CHOOSEN && IS_ANSWERED_CORRECT) return "default"

  if ((IS_ANSWERED_CORRECT && IS_THIS_ANSWER_CHOOSEN) || (!IS_THIS_ANSWER_CHOOSEN && IS_THIS_ANSWER_CORRECT)) {
    return "success"
  }

  if (IS_THIS_ANSWER_CHOOSEN && !IS_THIS_ANSWER_CORRECT) return "error"

  return "default"
}

export const scrollToQuestion = (elementId: string) => {
  if (!!document) {
    const container = document.getElementById(elementId)

    if (container) {
      container.scrollIntoView()
    }
  }
}

export const sortQuestionsByDifficulty = (questionList: QuizItem[]): QuizItem[] => {
  const difficultyRate: Record<string, number> = {
    easy: 1,
    medium: 2,
    hard: 3,
  }
  if (!!questionList?.length) {
    const newList = [...questionList]
    newList.sort((a, b) => {
      if (difficultyRate[a?.difficulty] > difficultyRate[b?.difficulty]) {
        return 1
      } else {
        return -1
      }
    })
    return newList
  } else {
    return []
  }
}

export function hasEqualStructure(obj1: Record<string, any>, obj2: Record<string, any>) {
  console.log('obj1', obj1)
  console.log('obj2', obj2)
  return Object.keys(obj1).every((key: string): boolean => {
    const v = obj1[key]
    if (typeof v === "object" && v !== null) {
      return hasEqualStructure(v, obj2[key])
    }
    return obj2.hasOwnProperty(key)
  })
}
