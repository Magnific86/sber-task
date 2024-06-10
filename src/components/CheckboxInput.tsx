import { ChangeEvent, FC } from "react"
import { CheckboxContainer, CheckboxSpan, Label } from "./styled"
import { useAppSelector } from "../store/storeHooks"
import { detectRadioColor } from "../utils/function"
import { CheckIcon } from "./icons/CheckIcon"

type RadioInputProps = {
  id: string
  answerStr: string
  correctAnswer: string
  tempAnswers: string[]
  answerHandler: (answer: string, bool: ChangeEvent<HTMLInputElement>) => void
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
