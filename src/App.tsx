import { useEffect, useState } from "react"
import { fetchQuizList } from "./store/quizSlice"
import { useAppDispatch, useAppSelector } from "./store/storeHooks"
import { QuizItem } from "./types"
import { QuiestionCard } from "./QuiestionCard"
import { addAnswer, endQuiz, startNewQuiz } from "./store/answerSlice"
import { Container, DangerousErrorText, H1, QuestionNumber, QuestionNumbers, WelcomeContainer } from "./components/styled"
import { Loader } from "./components/Loader"
import { calculateRightAnswersCount, prepareAnswers, scrollToQuestion, sortQuestionsByDifficulty } from "./utils/function"
import { MyButton } from "./components/MyButton"

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
          <MyButton id="error-try-again-btn" isActive text=" Try again" handler={() => window.location.reload()} />
        </WelcomeContainer>
      )}
      {!isLoading && !isError && !isQuizEnded && count === 1 && (
        <WelcomeContainer>
          <H1>Welcome to quizz</H1>
          <MyButton id="start-btn" isActive handler={() => scrollToQuestion("quiz-container")} text="start" />
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
              <QuestionNumber key={el} id={`number-${el === count ? "active" : "default"}`} status={el === count ? "active" : "default"}>
                {el}
              </QuestionNumber>
            ))}
          </QuestionNumbers>
        </Container>
      )}
      {isQuizEnded && (
        <Container tofullscreen={false}>
          <H1 id="right-answers-count">{"Right answers: " + calculateRightAnswersCount(list, answer) + " / " + length}</H1>
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
          <MyButton id="start-again-btn" isActive handler={startNewQuizHandler} text="Start again" />
        </Container>
      )}
    </>
  )
}
