import { useState } from 'react'
import questions from '/src/data/questions.js'

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const [shuffledQuestions] = useState(
    [...questions]
      .sort(() => Math.random() - 0.5)
      .slice(0, 10)
  )

  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState(null)
  const [showExplanation, setShowExplanation] = useState(false)

  const question = shuffledQuestions[currentQuestion]
　const shuffledChoices = [...question.choices]
  .map((choice, index) => ({
    choice,
    originalIndex: index
  }))
  .sort(() => Math.random() - 0.5)

  
  const handleAnswer = (index) => {
    if (selected !== null) return

    setSelected(index)

    if (index === question.answer) {
      setScore(score + 1)
    }

    setShowExplanation(true)
  }

  const nextQuestion = () => {
    setSelected(null)
    setShowExplanation(false)
    setCurrentQuestion(currentQuestion + 1)
  }

  if (currentQuestion >= shuffledQuestions.length) {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <h1>クイズ終了</h1>

          <p style={styles.score}>
            {shuffledQuestions.length}問中 {score}問正解
          </p>

          <button
            style={styles.button}
            onClick={() => {
              setCurrentQuestion(0)
              setScore(0)
              setSelected(null)
              setShowExplanation(false)
            }}
          >
            もう一度遊ぶ
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        <div style={styles.topBar}>
          <span>
            問題 {currentQuestion + 1} / {shuffledQuestions.length}
          </span>

          <span>
            スコア: {score}
          </span>
        </div>

        <h1 style={styles.question}>
          {question.question}
        </h1>

        <div style={styles.choices}>
          {shuffledChoices.map((item, index) => {
            let background = '#27272a'

            if (selected !== null) {
              if (index === question.answer) {
                background = '#166534'
              } else if (index === selected) {
                background = '#991b1b'
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(item.originalIndex)}
                style={{
                  ...styles.choiceButton,
                  backgroundColor: background
                }}
              >
                {item.choice}
              </button>
            )
          })}
        </div>

        {showExplanation && (
  <div style={styles.explanation}>

    <p
      style={{
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '12px',
        color:
          selected === question.answer
            ? '#22c55e'
            : '#adadad'
      }}
    >
      {selected === question.answer
        ? '正解！'
        : 'はずれ…'}
    </p>

    <p>
      <strong>解説：</strong>
      {question.explanation}
    </p>

    <button
      style={styles.nextButton}
      onClick={nextQuestion}
    >
      次の問題へ
    </button>

  </div>
)}

      </div>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#09090b',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'sans-serif'
  },

  card: {
    width: '100%',
    maxWidth: '600px',
    backgroundColor: '#18181b',
    borderRadius: '24px',
    padding: '32px'
  },

  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '24px',
    color: '#a1a1aa'
  },

  question: {
    fontSize: '28px',
    marginBottom: '24px',
    lineHeight: '1.5'
  },

  choices: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },

  choiceButton: {
    border: 'none',
    borderRadius: '16px',
    padding: '18px',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer'
  },

  explanation: {
    marginTop: '24px',
    backgroundColor: '#27272a',
    borderRadius: '16px',
    padding: '20px'
  },

  nextButton: {
    marginTop: '16px',
    width: '100%',
    border: 'none',
    borderRadius: '12px',
    padding: '16px',
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 'bold',
    cursor: 'pointer'
  },

  button: {
    marginTop: '24px',
    width: '100%',
    border: 'none',
    borderRadius: '12px',
    padding: '16px',
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 'bold',
    cursor: 'pointer'
  },

  score: {
    fontSize: '24px',
    marginTop: '20px'
  }
}