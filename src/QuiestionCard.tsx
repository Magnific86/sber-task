import { FC, useEffect, useState } from "react"
import { useAppSelector } from "./store/storeHooks"
import { Button, Container, H1, H3, Label, Radio, RadioText, Span, SpanInner } from "./components/styled"
import { detectRadioColor } from "./utils/function"

type QuiestionCardProps = {
  id: string
  category: string
  question: string
  difficulty: string
  allAnswers: string[]
  correctAnswer: string
  confirmHandler?: (id: string, answer: string) => void
}

export const QuiestionCard: FC<QuiestionCardProps> = ({
  id,
  category,
  question,
  difficulty,
  allAnswers,
  correctAnswer,
  confirmHandler,
}) => {
  const { answer, isQuizEnded } = useAppSelector(state => state.answer)

  const [tempAnswer, setTempAnswer] = useState<string>("")

  useEffect(() => {
    setTempAnswer("")
  }, [id])

  return (
    <Container>
      <H1>{category}</H1>
      <H3>{question}</H3>
      <H3 status={difficulty}>{difficulty}</H3>
      {!!allAnswers
        ? allAnswers.map(el => (
            <div key={el}>
              <Label>
                <RadioText status={isQuizEnded && el === answer[id] ? (el === correctAnswer ? "success" : "error") : "default"}>
                  {el}
                </RadioText>
                <Span status={isQuizEnded ? detectRadioColor(id, el, correctAnswer, answer) : "default"}>
                  <SpanInner active={isQuizEnded ? el === answer[id] : el === tempAnswer} />
                </Span>
                <Radio type="radio" checked={isQuizEnded ? el === answer[id] : el === tempAnswer} onChange={() => setTempAnswer(el)} />
              </Label>
            </div>
          ))
        : null}
      {!isQuizEnded && (
        <Button active={!!tempAnswer} onClick={confirmHandler ? () => confirmHandler(id, tempAnswer) : () => {}}>
          confirm
        </Button>
      )}
    </Container>
  )
}
