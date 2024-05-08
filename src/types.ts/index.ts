export interface QuizItemNoId {
  category: string
  correct_answer: string
  difficulty: string
  incorrect_answers: string[]
  question: string
  type: string
}

export interface QuizItem extends QuizItemNoId {
  id: string
}

export type Status = "success" | "error" | "default"
