import { ButtonHTMLAttributes } from 'react'

import S from './styles.module.css'

type Props = {
  title: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ title, ...props }: Props) {
  return (
    <button {...props} className={S.container}>
      {title}
    </button>
  )
}
