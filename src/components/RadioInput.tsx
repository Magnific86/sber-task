import { ChangeEvent, FC } from "react"
import { RadioContainer, Label, RadioSpan, RadioSpanInner } from "./styled"
import { useAppSelector } from "../store/storeHooks"
import { detectRadioColor } from "../utils/function"

type RadioInputProps = {
  id: string
  answerStr: string
  correctAnswer: string
  tempAnswers: string[]
  answerHandler: (answer: string, bool: ChangeEvent<HTMLInputElement>) => void
}

export const RadioInput: FC<RadioInputProps> = ({ id, answerStr, correctAnswer, tempAnswers, answerHandler }) => {
  const { answer, isQuizEnded } = useAppSelector(state => state.answer)

  const isActive = isQuizEnded ? answerStr === answer[id][0] : tempAnswers.includes(answerStr)

  return (
    <RadioContainer>
      <Label status={isQuizEnded && answerStr === answer[id][0] ? (answerStr === correctAnswer ? "success" : "error") : "default"}>
        {answerStr}
      </Label>
      <RadioSpan status={isQuizEnded ? detectRadioColor(id, answerStr, correctAnswer, answer) : "default"}>
        <RadioSpanInner active={isActive} />
      </RadioSpan>
      <input type="radio" checked={isActive} onChange={bool => answerHandler(answerStr, bool)} />
    </RadioContainer>
  )
}
