import { Button } from '../Button'
import S from './styles.module.css'

type Props = {
  correctAnswersCount: number
  quizSize: number
  handleTryAgain: () => void
}

export function Result({
  correctAnswersCount,
  quizSize,
  handleTryAgain,
}: Props) {
  return (
    <div className={S.container}>
      <h1 className={S.title}>Resultado</h1>
      <h2 className={S.subtitle}>
        Você acertou {correctAnswersCount} de {quizSize} perguntas
      </h2>
      <Button title="Tente Novamente" onClick={handleTryAgain} />
    </div>
  )
}
