import { Question } from '../models/quiz'

export const questions: Array<Question> = [
  {
    id: 1,
    question:
      'Qual hook do React é usado para gerenciar estados em componentes funcionais?',
    answers: [
      { id: 1, text: 'useEffect' },
      { id: 2, text: 'useState' },
      { id: 3, text: 'useContext' },
      { id: 4, text: 'useReducer' },
    ],
    correctAnswer: 2,
  },
  {
    id: 2,
    question:
      'Como você pode aplicar condicionalmente uma classe CSS a um elemento em React?',
    answers: [
      {
        id: 1,
        text: 'Usando o operador ternário dentro do atributo className',
      },
      { id: 2, text: 'Usando if/else fora do JSX' },
      { id: 3, text: 'Aplicando diretamente a classe no arquivo CSS' },
      {
        id: 4,
        text: 'Não é possível aplicar classes condicionalmente em React',
      },
    ],
    correctAnswer: 1,
  },
  {
    id: 3,
    question:
      'Qual é a principal diferença entre um componente de classe e um componente funcional no React?',
    answers: [
      {
        id: 1,
        text: 'Componentes funcionais podem ter estado local, enquanto componentes de classe não podem',
      },
      {
        id: 2,
        text: 'Componentes de classe usam a sintaxe de funções, enquanto componentes funcionais usam a sintaxe de classes',
      },
      {
        id: 3,
        text: 'Componentes funcionais não têm ciclo de vida, enquanto componentes de classe têm',
      },
      {
        id: 4,
        text: 'Componentes de classe são mais performáticos que componentes funcionais',
      },
    ],
    correctAnswer: 3,
  },
]
