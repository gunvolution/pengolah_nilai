export const TP_COLUMNS = [
  { key: 'tp1', short: 'TP 1', desc: 'Algoritma & Pemrograman' },
  { key: 'tp2', short: 'TP 2', desc: 'Struktur Data Graf/Tree' },
  { key: 'tp3', short: 'TP 3', desc: 'Jaringan Komputer & Internet' },
  { key: 'tp4', short: 'TP 4', desc: 'Keamanan Data & Privasi' },
  { key: 'tp5', short: 'TP 5', desc: 'Dampak Sosial Informatika' },
]

export const TP_NAMES = [
  'TP 1: Algoritma & Pemrograman',
  'TP 2: Struktur Data Graf & Tree',
  'TP 3: Jaringan Komputer & Internet',
  'TP 4: Keamanan Data & Privasi',
  'TP 5: Dampak Sosial Informatika',
]

export const INITIAL_STUDENTS = [
  { id: 1, nisn: '0081294821', name: 'Ahmad Fadhil', scores: [85, 62, 92, 78, 80] },
  { id: 2, nisn: '0081294822', name: 'Bunga Citra Lestari', scores: [90, 88, 94, 86, 92] },
  { id: 3, nisn: '0081294823', name: 'Dimas Pratama', scores: [65, 58, 70, 64, 68] },
  { id: 4, nisn: '0081294824', name: 'Eka Nurul Aini', scores: [82, 79, 85, 88, 84] },
  { id: 5, nisn: '0081294825', name: 'Fajar Hidayat', scores: [88, 84, 86, 90, 91] },
  { id: 6, nisn: '0081294826', name: 'Gita Savitri Dewi', scores: [76, 74, 79, 81, 78] },
]

export function calcFinal(scores, mode) {
  if (!scores.length) return 0
  if (mode === 'kktp') {
    const passed = scores.filter((s) => s >= 70).length
    return (passed / scores.length) * 100
  }
  // 'pure' dan 'weighted' (20% x 5) identik untuk 5 TP berbobot sama
  return scores.reduce((a, b) => a + b, 0) / scores.length
}

export function kktpStatus(score) {
  if (score >= 85)
    return {
      label: 'Tuntas (Mahir)',
      badge:
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#ECFDF5] text-[#047857] border border-[#A7F3D0]',
      scoreClass: 'text-emerald-700',
    }
  if (score >= 70)
    return {
      label: 'Tuntas (Cakap)',
      badge:
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#FFFBEB] text-[#B45309] border border-[#FDE68A]',
      scoreClass: 'text-primary',
    }
  return {
    label: 'Perlu Bimbingan',
    badge:
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#FFF1F2] text-[#BE123C] border border-[#FECDD3]',
    scoreClass: 'text-error',
  }
}

export function scoreInputClass(value) {
  const base =
    'score-input w-16 text-center py-1 px-1.5 border border-outline-variant rounded font-data-mono font-medium focus:ring-2 focus:ring-primary-container focus:outline-none '
  if (value < 70) return base + 'bg-rose-50 text-rose-800'
  if (value < 85) return base + 'bg-amber-50 text-amber-800'
  return base + 'bg-emerald-50 text-emerald-800'
}

export function buildNarrative(scores) {
  let maxScore = -1
  let minScore = 999
  let maxIdx = 0
  let minIdx = 0
  scores.forEach((sc, idx) => {
    if (sc > maxScore) { maxScore = sc; maxIdx = idx }
    if (sc < minScore) { minScore = sc; minIdx = idx }
  })
  const highest = `${TP_NAMES[maxIdx]} (Skor: ${maxScore})`
  const lowest = `${TP_NAMES[minIdx]} (Skor: ${minScore})`
  const narrative = `Menunjukkan penguasaan yang sangat memuaskan dalam materi ${TP_NAMES[maxIdx].split(':')[1].trim()}, namun masih perlu pendampingan berkala dalam menguasai ${TP_NAMES[minIdx].split(':')[1].trim()}.`
  return { highest, lowest, narrative }
}

export function initialsOf(name) {
  return name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}
