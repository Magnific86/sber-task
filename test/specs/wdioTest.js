const QUESTIONS_COUNT = 10
const LOCALHOST_URL = "http://localhost:3000"
const GH_PAGES_URL = "https://magnific86.github.io/sber-task/"
const url = GH_PAGES_URL

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const checkActiveNumber = async number => {
  const mySpan = await $("#number-active")

  const text = await mySpan.getText()

  await expect(text).toBe(String(number))
}

const answerQuestion = async questionNum => {
  const randomNum = getRandomInt(1, 2)

  const element = await $(`#answer_${randomNum}`)

  await element.click()

  const confBtn = await $("#confirm-btn")

  await confBtn.click()

  if (questionNum < QUESTIONS_COUNT) {
    await checkActiveNumber(questionNum + 1)
  }
}

describe("Тест викторины: ", () => {
  it("Нажать на кнопку get started и перейти к 1 вопросу: ", async () => {
    browser.url(url)

    const element = await $("#start-btn")

    console.log("finded btn start element::::::  ", await element)

    await element.click()

    await checkActiveNumber(1)
  })

  it("Выбираем рандомные ответы и переходим от вопроса к вопросу: ", async () => {
    for (let i = 1; i <= QUESTIONS_COUNT; i++) {
      await answerQuestion(i)
    }
  })

  it("Проверка результатов: ", async () => {
    const rightAnswersCount = await $("#right-answers-count")

    const rightAnswersText = await rightAnswersCount.getText()

    console.log("rightAnswersText", rightAnswersText)

    expect(rightAnswersText.includes(String(QUESTIONS_COUNT)))
  })

  it("Проверка функционала начать заново (кнопка: start again): ", async () => {
    const startAgainBtn = await $("#start-again-btn")

    await startAgainBtn.click()

    //active number 1 снова, викторина началась заново
    await checkActiveNumber(1)
  })
})
