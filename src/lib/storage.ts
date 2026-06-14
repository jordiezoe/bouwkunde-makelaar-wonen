const KEY = 'bouwkunde-progress-v2'

export interface TopicAttempt {
  correct: number
  total: number
  score: number          // 0..1
  passedAt?: number      // timestamp van eerste keer voldoende
  lastAt: number
}

export interface TussenExamAttempt {
  correct: number
  total: number
  score: number          // 0..1
  passedAt?: number      // timestamp van eerste keer voldoende
  lastAt: number
}

export interface SectionExamAttempt {
  correct: number
  total: number
  score: number          // 0..1
  passedAt?: number      // timestamp van eerste keer voldoende
  lastAt: number
}

export interface Progress {
  /** Per toetstermcode: status van beheersing (afgeleid uit vragen). */
  toetstermen: Record<string, 'nieuw' | 'leren' | 'beheerst'>
  /** Per vraag-ID: aantal keer goed/fout beantwoord + uitslag laatste antwoord. */
  questions: Record<
    string,
    { correct: number; wrong: number; lastAt: number; lastCorrect?: boolean }
  >
  /** Per onderwerp: laatste resultaat van een afgeronde quiz. */
  topics: Record<string, TopicAttempt>
  /** Per onderwerp: heeft de leerling de begrippentrainer 100% afgerond? */
  trainerCompleted: Record<string, boolean>
  /** Per onderwerp: laatste resultaat van een cumulatieve tussen-overhoring. */
  tussenExams: Record<string, TussenExamAttempt>
  /** Per sectie (A/B/C/D): resultaat van het sectie-afsluitexamen. */
  sectionExams: Record<string, SectionExamAttempt>
}

const defaultProgress: Progress = {
  toetstermen: {},
  questions: {},
  topics: {},
  trainerCompleted: {},
  tussenExams: {},
  sectionExams: {},
}

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return defaultProgress
    const parsed = JSON.parse(raw)
    return { ...defaultProgress, ...parsed }
  } catch {
    return defaultProgress
  }
}

export function saveProgress(p: Progress) {
  try {
    localStorage.setItem(KEY, JSON.stringify(p))
  } catch {
    // localStorage vol (private mode of quota overschreden) — stil negeren
  }
}

export function recordAnswer(
  prev: Progress,
  questionId: string,
  toetstermCode: string,
  isCorrect: boolean,
): Progress {
  const q = prev.questions[questionId] ?? { correct: 0, wrong: 0, lastAt: 0 }
  const updatedQ = {
    correct: q.correct + (isCorrect ? 1 : 0),
    wrong: q.wrong + (isCorrect ? 0 : 1),
    lastAt: Date.now(),
    lastCorrect: isCorrect,
  }
  const status =
    updatedQ.correct >= 2 && updatedQ.wrong === 0
      ? 'beheerst'
      : 'leren'
  return {
    ...prev,
    toetstermen: { ...prev.toetstermen, [toetstermCode]: status },
    questions: { ...prev.questions, [questionId]: updatedQ },
  }
}

/**
 * Een vraag is een "zwak punt" als het laatste antwoord fout was.
 * Voor oude voortgang (zonder lastCorrect): vaker fout dan goed beantwoord.
 */
export function isWeakQuestionStat(stat: {
  correct: number
  wrong: number
  lastCorrect?: boolean
}): boolean {
  if (stat.lastCorrect !== undefined) return stat.lastCorrect === false
  return stat.wrong > 0 && stat.correct <= stat.wrong
}

/** Markeert een quizpoging op een onderwerp; bewaart de hoogste score. */
export function recordTopicAttempt(
  prev: Progress,
  topicCode: string,
  correct: number,
  total: number,
  passingScore: number,
): Progress {
  const score = total > 0 ? correct / total : 0
  const existing = prev.topics[topicCode]
  const passed = score >= passingScore
  const attempt: TopicAttempt = {
    correct,
    total,
    score,
    lastAt: Date.now(),
    passedAt:
      existing?.passedAt ??
      (passed ? Date.now() : undefined),
  }
  return {
    ...prev,
    topics: { ...prev.topics, [topicCode]: attempt },
  }
}

export function isTopicPassed(progress: Progress, topicCode: string): boolean {
  return progress.topics[topicCode]?.passedAt !== undefined
}

/**
 * Markeert een onderwerp handmatig als behaald of zet dat terug. Handig om
 * je werkelijke voortgang vast te leggen zonder elke overhoring opnieuw te doen.
 */
export function toggleTopicPassedManual(
  prev: Progress,
  topicCode: string,
): Progress {
  const existing = prev.topics[topicCode]
  if (existing?.passedAt !== undefined) {
    // Terugzetten naar "niet behaald" (overige cijfers behouden we)
    const { passedAt: _drop, ...rest } = existing
    return { ...prev, topics: { ...prev.topics, [topicCode]: { ...rest } } }
  }
  // Aanzetten als behaald — bewaar bestaande score of vul een handmatige in
  const attempt: TopicAttempt = {
    correct: existing?.correct ?? 0,
    total: existing?.total ?? 0,
    score: existing?.score ?? 1,
    lastAt: Date.now(),
    passedAt: Date.now(),
  }
  return { ...prev, topics: { ...prev.topics, [topicCode]: attempt } }
}

/** Markeert de begrippentrainer voor een onderwerp als 100% afgerond. */
export function markTrainerCompleted(prev: Progress, topicCode: string): Progress {
  return {
    ...prev,
    trainerCompleted: { ...prev.trainerCompleted, [topicCode]: true },
  }
}

export function isTrainerCompleted(progress: Progress, topicCode: string): boolean {
  return progress.trainerCompleted?.[topicCode] === true
}

/** Markeert een poging op de cumulatieve tussen-overhoring voor een onderwerp. */
export function recordTussenExam(
  prev: Progress,
  topicCode: string,
  correct: number,
  total: number,
  passingScore: number,
): Progress {
  const score = total > 0 ? correct / total : 0
  const existing = prev.tussenExams?.[topicCode]
  const passed = score >= passingScore
  const attempt: TussenExamAttempt = {
    correct,
    total,
    score,
    lastAt: Date.now(),
    passedAt: existing?.passedAt ?? (passed ? Date.now() : undefined),
  }
  return {
    ...prev,
    tussenExams: { ...(prev.tussenExams ?? {}), [topicCode]: attempt },
  }
}

export function isTussenExamPassed(progress: Progress, topicCode: string): boolean {
  return progress.tussenExams?.[topicCode]?.passedAt !== undefined
}

/** Markeert een poging op het sectie-afsluitexamen. */
export function recordSectionExam(
  prev: Progress,
  section: string,
  correct: number,
  total: number,
  passingScore: number,
): Progress {
  const score = total > 0 ? correct / total : 0
  const existing = prev.sectionExams?.[section]
  const passed = score >= passingScore
  const attempt: SectionExamAttempt = {
    correct,
    total,
    score,
    lastAt: Date.now(),
    passedAt: existing?.passedAt ?? (passed ? Date.now() : undefined),
  }
  return {
    ...prev,
    sectionExams: { ...(prev.sectionExams ?? {}), [section]: attempt },
  }
}

export function isSectionExamPassed(progress: Progress, section: string): boolean {
  return progress.sectionExams?.[section]?.passedAt !== undefined
}

export function resetProgress(): Progress {
  localStorage.removeItem(KEY)
  return defaultProgress
}
