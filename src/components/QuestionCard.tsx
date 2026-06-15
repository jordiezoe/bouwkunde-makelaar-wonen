import { useState } from 'react'
import type { Question } from '../types/content'
import { asset } from '../lib/asset'

interface Props {
  question: Question
  onAnswered: (correct: boolean) => void
  onNext: () => void
}

export function QuestionCard({ question, onAnswered, onNext }: Props) {
  const [selected, setSelected] = useState<number | boolean | null>(null)
  const [openInput, setOpenInput] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const isCorrect = (() => {
    if (!submitted) return null
    if (question.type === 'mc') return selected === question.correctIndex
    if (question.type === 'tf') return selected === question.correct
    if (question.type === 'open') {
      const v = openInput.trim().toLowerCase()
      return question.acceptableAnswers.some((a) => v.includes(a.toLowerCase()))
    }
    return false
  })()

  function submit() {
    if (submitted) return
    if (question.type === 'mc' && selected === null) return
    if (question.type === 'tf' && selected === null) return
    if (question.type === 'open' && openInput.trim() === '') return
    setSubmitted(true)
    const ok =
      question.type === 'mc'
        ? selected === question.correctIndex
        : question.type === 'tf'
        ? selected === question.correct
        : question.acceptableAnswers.some((a) =>
            openInput.trim().toLowerCase().includes(a.toLowerCase()),
          )
    onAnswered(ok)
  }

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200">
      <div className="text-xs font-mono text-slate-500 mb-2">
        {question.toetstermCode}
      </div>
      <h2 className="text-lg font-semibold text-slate-800">{question.prompt}</h2>

      {question.image && (
        <figure className="mt-3 bg-slate-50 rounded-lg overflow-hidden border border-slate-200">
          <img
            src={asset(question.image.src)}
            alt={question.image.caption}
            className="w-full h-auto object-contain bg-white max-h-72"
          />
          {question.image.caption && (
            <figcaption className="px-3 py-2 text-xs text-slate-600">
              {question.image.caption}
            </figcaption>
          )}
        </figure>
      )}

      <div className="mt-4 space-y-2">
        {question.type === 'mc' &&
          question.options.map((opt, i) => {
            const isChosen = selected === i
            const isAnswer = question.correctIndex === i
            let cls = 'w-full text-left p-3 rounded-lg border transition'
            if (!submitted) {
              cls += isChosen
                ? ' border-primary-500 bg-primary-50'
                : ' border-slate-200 hover:border-slate-300'
            } else {
              if (isAnswer) cls += ' border-green-500 bg-green-50'
              else if (isChosen) cls += ' border-red-500 bg-red-50'
              else cls += ' border-slate-200 opacity-60'
            }
            return (
              <button
                key={i}
                onClick={() => !submitted && setSelected(i)}
                className={cls}
                disabled={submitted}
              >
                {opt}
              </button>
            )
          })}

        {question.type === 'tf' && (
          <div className="flex gap-2">
            {([true, false] as boolean[]).map((v) => {
              const isChosen = selected === v
              const isAnswer = question.correct === v
              let cls = 'flex-1 p-3 rounded-lg border font-medium transition'
              if (!submitted) {
                cls += isChosen
                  ? ' border-primary-500 bg-primary-50'
                  : ' border-slate-200 hover:border-slate-300'
              } else {
                if (isAnswer) cls += ' border-green-500 bg-green-50'
                else if (isChosen) cls += ' border-red-500 bg-red-50'
                else cls += ' border-slate-200 opacity-60'
              }
              return (
                <button
                  key={String(v)}
                  onClick={() => !submitted && setSelected(v)}
                  className={cls}
                  disabled={submitted}
                >
                  {v ? 'Juist' : 'Onjuist'}
                </button>
              )
            })}
          </div>
        )}

        {question.type === 'open' && (
          <input
            type="text"
            value={openInput}
            onChange={(e) => !submitted && setOpenInput(e.target.value)}
            disabled={submitted}
            placeholder="Typ je antwoord…"
            className="w-full p-3 rounded-lg border border-slate-300 focus:border-primary-500 focus:outline-none"
            onKeyDown={(e) => e.key === 'Enter' && submit()}
          />
        )}
      </div>

      {!submitted && (
        <button
          onClick={submit}
          className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 font-medium disabled:opacity-50"
        >
          Controleer
        </button>
      )}

      {submitted && (
        <div className="mt-4 space-y-3">
          <div
            className={`p-3 rounded-lg ${
              isCorrect ? 'bg-green-50 text-green-900' : 'bg-red-50 text-red-900'
            }`}
          >
            <div className="font-medium">{isCorrect ? '✓ Goed' : '✗ Fout'}</div>
            {question.explanation && (
              <div className="text-sm mt-1">{question.explanation}</div>
            )}
            {question.type === 'open' && !isCorrect && (
              <div className="text-sm mt-1">
                Goed antwoord: <strong>{question.acceptableAnswers[0]}</strong>
              </div>
            )}
          </div>
          <button
            onClick={onNext}
            className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 font-medium"
          >
            Volgende →
          </button>
        </div>
      )}
    </div>
  )
}
