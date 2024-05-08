import { ChangeEvent, FC } from "react"
import { CheckboxContainer, CheckboxSpan, Label } from "./styled"
import { useAppSelector } from "../store/storeHooks"
import { detectRadioColor } from "../utils/function"

type RadioInputProps = {
  id: string
  answerStr: string
  correctAnswer: string
  tempAnswers: string[]
  answerHandler: (answer: string, bool: ChangeEvent<HTMLInputElement>) => void
}

export const CheckIcon: FC<{ active: boolean }> = ({ active }) => {
  console.log("active", active)
  return (
    <svg width={14} height={14} viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.5 3L3 5.5L8 0.5" stroke={active ? "#fff" : "#212121"} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const CheckboxInput: FC<RadioInputProps> = ({ id, answerStr, correctAnswer, tempAnswers, answerHandler }) => {
  const { answer, isQuizEnded } = useAppSelector(state => state.answer)

  const isActive = isQuizEnded ? answer[id].includes(answerStr) : tempAnswers.includes(answerStr)

  return (
    <CheckboxContainer>
      <Label status={isQuizEnded && answer[id].includes(answerStr) ? (answerStr === correctAnswer ? "success" : "error") : "default"}>
        {answerStr}
      </Label>
      <CheckboxSpan status={isQuizEnded ? detectRadioColor(id, answerStr, correctAnswer, answer) : "default"}>
        <CheckIcon active={isActive} />
      </CheckboxSpan>
      <input type="checkbox" checked={isActive} onChange={bool => answerHandler(answerStr, bool)} />
    </CheckboxContainer>
  )
}
