import { ChangeEvent, FC, useEffect, useState } from "react"
import { useAppSelector } from "./store/storeHooks"
import { Button, Container, H1, H3 } from "./components/styled"
import { QuestionType } from "./types"
import { RadioInput } from "./components/RadioInput"
import { CheckboxInput } from "./components/CheckboxInput"

type QuiestionCardProps = {
  id: string
  category: string
  question: string
  difficulty: string
  type: QuestionType
  allAnswers: string[]
  correctAnswer: string
  confirmHandler?: (id: string, answers: string[]) => void
}

export const QuiestionCard: FC<QuiestionCardProps> = ({
  id,
  category,
  question,
  difficulty,
  allAnswers,
  type,
  correctAnswer,
  confirmHandler,
}) => {
  const { isQuizEnded } = useAppSelector(state => state.answer)

  const [tempAnswers, setTempAnswers] = useState<string[]>([])

  useEffect(() => {
    setTempAnswers([])
  }, [id])

  const checkboxAnswerHandler = (str: string, bool: ChangeEvent<HTMLInputElement>) => {
    const boolValue = bool.target.value
    console.log("answerHandler boolValue: ", boolValue)
    console.log("str", str)
    if (!!boolValue) {
      setTempAnswers([...tempAnswers, str])
    } else {
      setTempAnswers([...tempAnswers.filter(answ => answ !== str)])
    }
  }

  const radioAnswerHandler = (str: string, bool: ChangeEvent<HTMLInputElement>) => {
    const boolValue = bool.target.value
    console.log("radioAnswerHandler boolValue: ", boolValue)
    if (!!boolValue) {
      setTempAnswers([str])
    }
  }

  return (
    <Container>
      <H1>{category}</H1>
      <H3>{question}</H3>
      <H3 status={difficulty}>{difficulty}</H3>
      {!!allAnswers
        ? allAnswers.map(el => (
            <div key={el}>
              {type === "multiple" ? (
                <CheckboxInput
                  id={id}
                  answerStr={el}
                  correctAnswer={correctAnswer}
                  tempAnswers={tempAnswers}
                  answerHandler={checkboxAnswerHandler}
                />
              ) : (
                <RadioInput
                  id={id}
                  answerStr={el}
                  correctAnswer={correctAnswer}
                  tempAnswers={tempAnswers}
                  answerHandler={radioAnswerHandler}
                />
              )}
            </div>
          ))
        : null}
      {!isQuizEnded && (
        <Button active={!!tempAnswers} onClick={confirmHandler ? () => confirmHandler(id, tempAnswers) : () => {}}>
          confirm
        </Button>
      )}
    </Container>
  )
}
