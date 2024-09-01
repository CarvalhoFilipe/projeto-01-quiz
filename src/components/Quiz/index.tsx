import { MouseEvent, useCallback, useState } from 'react'
import { QuestionAnswer } from '../QuestionAnswer'
import { questions } from '../../mock/questions'
import { Button } from '../Button'

import S from './styles.module.css'
import { Result } from '../Result'

export function Quiz() {
  const [current, setCurrent] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [isCurrentQuestionAnswered, setIsCurrentQuestionAnswered] =
    useState(false)
  const [isTalkingQuiz, setIsTalkingQuiz] = useState(true)
  console.log(correctAnswers, 'correctAnswers')
  const currentQuestion = questions[current]
  const buttonText =
    current + 1 === questions.length ? 'Ver resultado' : 'Próxima pergunta'

  const removeClassNames = () => {
    const buttons = document.querySelectorAll(`.${S.answers} button`)
    buttons.forEach((button) => {
      button.classList.remove(S.correct, S.incorrect)
    })
  }

  const handleClickNextAnswer = useCallback(() => {
    removeClassNames()
    if (current + 1 < questions.length) {
      setCurrent((prevState) => prevState + 1)
    } else {
      setIsTalkingQuiz(false)
    }
    setIsCurrentQuestionAnswered(false)
  }, [current])

  const handleTryAgain = useCallback(() => {
    setIsCurrentQuestionAnswered(false)
    setCorrectAnswers(0)
    setCurrent(0)
    setIsTalkingQuiz(true)
  }, [])

  const checkAnswer = useCallback(
    (answerId: number) => {
      const isCorrectAnswer = currentQuestion.correctAnswer === answerId
      if (isCorrectAnswer) {
        setCorrectAnswers((prevState) => prevState + 1)
      }
      setIsCurrentQuestionAnswered(true)
      return isCorrectAnswer ? S.correct : S.incorrect
    },
    [currentQuestion.correctAnswer],
  )
  const handleAnswerQuestion = useCallback(
    (event: MouseEvent<HTMLButtonElement>, answerId: number) => {
      if (!isCurrentQuestionAnswered) {
        const resultClassName = checkAnswer(answerId)
        event.currentTarget.classList.toggle(resultClassName)
      }
    },
    [checkAnswer, isCurrentQuestionAnswered],
  )

  return (
    <div className={S.container}>
      <div className={S.card}>
        {isTalkingQuiz ? (
          <div className={S.quiz}>
            <header className={S.quizHeader}>
              <span className={S.questionCount}>
                Pergunta {current + 1}/{questions.length}
              </span>
              <p className={S.question}>{currentQuestion.question}</p>
            </header>

            <ul className={S.answers}>
              {currentQuestion.answers.map((answer) => (
                <li key={answer.id}>
                  <QuestionAnswer
                    answer={answer}
                    handleAnswerQuestion={handleAnswerQuestion}
                  />
                </li>
              ))}
            </ul>
            {isCurrentQuestionAnswered && (
              <Button onClick={handleClickNextAnswer} title={buttonText} />
            )}
          </div>
        ) : (
          <Result
            correctAnswersCount={correctAnswers}
            quizSize={questions.length}
            handleTryAgain={handleTryAgain}
          />
        )}
      </div>
    </div>
  )
}
