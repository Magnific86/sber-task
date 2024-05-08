import { useEffect, useState } from "react"
import { fetchQuizList } from "./store/quizSlice"
import { useAppDispatch, useAppSelector } from "./store/storeHooks"
import { QuizItem } from "./types"
import { QuiestionCard } from "./QuiestionCard"
import { addAnswer, endQuiz, startNewQuiz } from "./store/answerSlice"
import { Button, Container, DangerousErrorText, H1, QuestionNumber, QuestionNumbers, WelcomeContainer } from "./components/styled"
import { Loader } from "./components/Loader"
import { scrollToQuestion, sortQuestionsByDifficulty } from "./utils/function"

export const App = () => {
  const { list, isLoading, isError } = useAppSelector(state => state.quiz)
  const { answer, isQuizEnded } = useAppSelector(state => state.answer)

  const [count, setCount] = useState<number>(1)
  const [currentQuestion, setCurrentQuestion] = useState<QuizItem>(list[0])

  const length = list?.length

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchQuizList())
  }, [])

  useEffect(() => {
    if (!!list?.length) {
      setCurrentQuestion(list[0])
    }
  }, [list])

  const allCountQuestions = Array.from({ length }, (_, i) => i + 1)

  const onConfirmHandler = (id: string, answer: string[]) => {
    console.log("onConfirmHandler answer", answer)

    if (!answer) return

    dispatch(addAnswer({ id, answer }))

    if (count <= length) {
      setCurrentQuestion(list[count])
      setCount(prev => prev + 1)
    }

    if (count === length) {
      dispatch(endQuiz())
    }
  }

  const prepareAnswers = (incorrectAnswerList: string[], correctAnswer: string) => {
    // чтобы ответы были вразнобой
    if (!!incorrectAnswerList?.length) {
      let randomIndex = Math.floor(Math.random() * (incorrectAnswerList?.length + 1))
      const preparedArr = [...incorrectAnswerList]
      preparedArr.splice(randomIndex, 0, correctAnswer)
      return preparedArr
    } else {
      return []
    }
  }

  const calculateRightAnswers = (list: QuizItem[]) => {
    let result = 0
    list.forEach(el => {
      if (answer[el.id][0] === el.correct_answer) {
        result += 1
      }
    })

    return result
  }

  const startNewQuizHandler = () => {
    dispatch(startNewQuiz())
    setCount(1)
    setCurrentQuestion(list[0])
    window.scrollTo(0, 0)
  }

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && isError && (
        <WelcomeContainer>
          <DangerousErrorText>Error while fetch data</DangerousErrorText>
          <Button active onClick={() => window.location.reload()}>
            Try again
          </Button>
        </WelcomeContainer>
      )}
      {!isLoading && !isError && !isQuizEnded && count === 1 && (
        <WelcomeContainer>
          <H1>Welcome to quizz</H1>
          <Button active onClick={() => scrollToQuestion("quiz-container")}>
            start
          </Button>
        </WelcomeContainer>
      )}
      {!isLoading && !isError && !isQuizEnded && (
        <Container tofullscreen id="quiz-container">
          <QuiestionCard
            id={currentQuestion?.id}
            difficulty={currentQuestion?.difficulty}
            category={currentQuestion?.category}
            type={currentQuestion?.type}
            question={currentQuestion?.question}
            allAnswers={prepareAnswers(currentQuestion?.incorrect_answers, currentQuestion?.correct_answer)}
            correctAnswer={currentQuestion?.correct_answer}
            confirmHandler={onConfirmHandler}
          />
          <QuestionNumbers>
            {allCountQuestions.map(el => (
              <QuestionNumber key={el} status={el === count ? "active" : "default"}>
                {el}
              </QuestionNumber>
            ))}
          </QuestionNumbers>
        </Container>
      )}
      {isQuizEnded && (
        <Container tofullscreen={false}>
          <H1>{"Right answers: " + calculateRightAnswers(list) + " / " + length}</H1>
          {sortQuestionsByDifficulty(list).map(el => (
            <QuiestionCard
              key={el.id}
              id={el.id}
              type={el.type}
              category={el.category}
              question={el.question}
              difficulty={el.difficulty}
              allAnswers={prepareAnswers(el.incorrect_answers, el.correct_answer)}
              correctAnswer={el.correct_answer}
            />
          ))}
          <Button active onClick={startNewQuizHandler}>
            Start again
          </Button>
        </Container>
      )}
    </>
  )
}
