import { render, screen } from "@testing-library/react"
import { QuiestionCard } from "../QuiestionCard"
// import * as ReduxHooks from "react-redux"
import * as ReduxHooks from "../store/storeHooks"

const ID = "1"
const category = "category"
const question = "question?"
const difficulty = "easy"
const type = "multiple"
const allAnswers = ["1", "2", "3", "4"]
const correctAnswer = "1"

const mockSelectorValue = { answer: { 1: "1" }, isQuizEnded: true }

test("render QuiestionCard element: ", () => {
  jest.spyOn(ReduxHooks, "useAppSelector").mockReturnValue(mockSelectorValue)

  const textToFind = screen.getByText("category")

  expect(textToFind).toBeInTheDocument()

  const component = render(
    <QuiestionCard
      id={ID}
      category={category}
      question={question}
      type={type}
      difficulty={difficulty}
      allAnswers={allAnswers}
      correctAnswer={correctAnswer}
    />
  )

  expect(component).toMatchSnapshot()
})
