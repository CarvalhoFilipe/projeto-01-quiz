import { MouseEvent } from 'react'
import { Answer } from '../../models/quiz'
import S from './styles.module.css'

type Props = {
  answer: Answer
  handleAnswerQuestion: (
    event: MouseEvent<HTMLButtonElement>,
    answerId: number,
  ) => void
}

export function QuestionAnswer({ answer, handleAnswerQuestion }: Props) {
  return (
    <button
      onClick={(event) => handleAnswerQuestion(event, answer.id)}
      className={S.container}
    >
      {answer.text}
    </button>
  )
}
