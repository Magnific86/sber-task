import { v4 } from "uuid"
import { QuizItem, QuizItemNoId, Status } from "../types/index"

export const mapListToIds = (list: QuizItemNoId[]): QuizItem[] => (!!list?.length ? list.map(el => ({ ...el, id: v4() })) : [])

export const detectRadioColor = (id: string, thisAnswerStr: string, correctAnswer: string, answer: Record<string, string[]>): Status => {
  //ответ правильный всегда один не смотря даже не то, что есть выбор нескольких вариантов
  const IS_ANSWERED_CORRECT = answer[id][0] === correctAnswer
  const IS_THIS_ANSWER_CHOOSEN = answer[id].includes(thisAnswerStr)
  const IS_THIS_ANSWER_CORRECT = correctAnswer === thisAnswerStr

  if (!IS_THIS_ANSWER_CHOOSEN && IS_ANSWERED_CORRECT) return "default"

  if (IS_THIS_ANSWER_CORRECT) return "success"

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

// чтобы ответы были вразнобой
export const prepareAnswers = (incorrectAnswerList: string[], correctAnswer: string) => {
  if (!!incorrectAnswerList?.length) {
    let randomIndex = Math.floor(Math.random() * (incorrectAnswerList?.length + 1))
    const preparedArr = [...incorrectAnswerList]
    preparedArr.splice(randomIndex, 0, correctAnswer)
    return preparedArr
  } else {
    return []
  }
}

export const calculateRightAnswersCount = (list: QuizItem[], answerObj: Record<string, string[]>) => {
  let result = 0
  list.forEach(el => {
    if (answerObj[el.id][0] === el.correct_answer) {
      result += 1
    }
  })

  return result
}
