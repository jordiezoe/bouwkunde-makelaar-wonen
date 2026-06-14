// Extraheert per onderwerp de voorleesteksten (intro + secties) → JSON-manifest.
// Tekst wordt identiek gestript als in Lesson.tsx zodat de MP3 klopt.
import { writeFileSync } from 'fs'
import { sectionTopics as A } from '../src/content/section_A'
import { sectionTopics as B } from '../src/content/section_B'
import { sectionTopics as C } from '../src/content/section_C'
import { sectionTopics as D } from '../src/content/section_D'

function stripMarkdown(text: string): string {
  return text
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')   // markdown-afbeeldingen weg
    .replace(/\|/g, ' ')                     // tabel-pipes → spatie
    .replace(/^#{1,6}\s*/gm, '')             // ### kopjes
    .replace(/\*\*(.+?)\*\*/g, '$1')         // bold
    .replace(/\*(.+?)\*/g, '$1')             // italic
    .replace(/`(.+?)`/g, '$1')               // code
    .replace(/^[•\-–]\s*/gm, '')             // bullets
    .replace(/^\s*>\s?/gm, '')               // blockquotes
    .replace(/­/g, '')                  // zachte afbreekstreepjes
    .replace(/\n{2,}/g, '. ')                // dubbele enters → pauze
    .replace(/\n/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim()
}

const all = [...A, ...B, ...C, ...D]
const manifest = all.map((t) => ({
  code: t.code,
  chunks: [
    `${t.title}. ${t.blurb}`,
    ...t.lessonSections.map((s) => `${s.heading}. ${stripMarkdown(s.body)}`),
  ],
}))

writeFileSync('/tmp/audio-manifest.json', JSON.stringify(manifest, null, 2))
const totalChunks = manifest.reduce((n, m) => n + m.chunks.length, 0)
const totalChars = manifest.reduce(
  (n, m) => n + m.chunks.reduce((a, c) => a + c.length, 0), 0,
)
console.log(`${manifest.length} onderwerpen, ${totalChunks} fragmenten, ${totalChars} tekens`)
