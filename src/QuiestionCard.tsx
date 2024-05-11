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
  isLastQuestion: boolean
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
  isLastQuestion,
  confirmHandler,
}) => {
  const { isQuizEnded } = useAppSelector(state => state.answer)

  const [tempAnswers, setTempAnswers] = useState<string[]>([])

  useEffect(() => {
    setTempAnswers([])
  }, [id])

  const checkboxAnswerHandler = (str: string, bool: ChangeEvent<HTMLInputElement>) => {
    if (!!bool.target.value) {
      setTempAnswers([...tempAnswers, str])
    } else {
      setTempAnswers([...tempAnswers.filter(answ => answ !== str)])
    }
  }

  const radioAnswerHandler = (str: string, bool: ChangeEvent<HTMLInputElement>) => {
    if (!!bool.target.value) {
      setTempAnswers([str])
    }
  }

  return (
    <Container rounded>
      <H1>{category}</H1>
      <H3>{question}</H3>
      <H3 status={difficulty}>{difficulty}</H3>
      {!!allAnswers
        ? allAnswers.map((el, index) => (
            <div key={el} id={`answer_${index + 1}`}>
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
        <Button id="confirm-btn" active={!!tempAnswers?.length} onClick={confirmHandler ? () => confirmHandler(id, tempAnswers) : () => {}}>
          {isLastQuestion ? "see results" : "confirm"}
        </Button>
      )}
    </Container>
  )
}
