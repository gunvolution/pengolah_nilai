import { useMemo, useRef, useState } from 'react'
import TopBar from './components/TopBar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Metrics from './components/Metrics.jsx'
import Toolbar from './components/Toolbar.jsx'
import AssessmentTable from './components/AssessmentTable.jsx'
import WaliSection from './components/WaliSection.jsx'
import NarrativeModal from './components/NarrativeModal.jsx'
import PrintModal from './components/PrintModal.jsx'
import SupabaseModal from './components/SupabaseModal.jsx'
import { INITIAL_STUDENTS, buildNarrative, calcFinal } from './data.js'

export default function App() {
  const [students, setStudents] = useState(INITIAL_STUDENTS)
  const [calcMode, setCalcMode] = useState('pure')
  const [saving, setSaving] = useState(false)
  const [showBanner, setShowBanner] = useState(true)
  const [activeNav, setActiveNav] = useState('penilaian')
  const [role, setRole] = useState('guru')
  const [narrStudent, setNarrStudent] = useState(null)
  const [printStudent, setPrintStudent] = useState(null)
  const [narratives, setNarratives] = useState({})
  const [showSupabase, setShowSupabase] = useState(false)
  const [toast, setToast] = useState('')
  const timer = useRef(null)
  const waliRef = useRef(null)

  const finals = useMemo(() => students.map((s) => calcFinal(s.scores, calcMode)), [students, calcMode])
  const avg = finals.length ? finals.reduce((a, b) => a + b, 0) / finals.length : 0
  const needHelp = finals.filter((f) => f < 70).length

  function flashSaving(msg) {
    setSaving(true)
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => setSaving(false), 700)
    if (msg) { setToast(msg); setTimeout(() => setToast(''), 2200) }
  }
  function handleScore(id, idx, raw) {
    let v = parseInt(raw, 10)
    if (Number.isNaN(v)) v = 0
    v = Math.max(0, Math.min(100, v))
    setStudents((prev) => prev.map((s) => (s.id === id ? { ...s, scores: s.scores.map((x, i) => (i === idx ? v : x)) } : s)))
    flashSaving()
  }
  function handleNav(id) {
    setActiveNav(id)
    if (id === 'cetak') setPrintStudent(students[0])
    else if (id === 'generator') setNarrStudent(students[0])
    else if (id === 'wali') waliRef.current?.scrollIntoView({ behavior: 'smooth' })
    else if (id === 'supabase') setShowSupabase(true)
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  function handleRole(r) {
    setRole(r)
    if (r === 'wali') waliRef.current?.scrollIntoView({ behavior: 'smooth' })
    else if (r === 'admin') flashSaving('Mengalihkan ke Konsol Kurikulum & Admin.')
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  function openNarrative(s) { setNarrStudent(s); setActiveNav('generator') }
  function openPrint(s) {
    if (!narratives[s.id]) setNarratives((m) => ({ ...m, [s.id]: buildNarrative(s.scores).narrative }))
    setPrintStudent(s); setActiveNav('cetak')
  }
  //__PART2__
  return (
    <div className="min-h-screen font-body-md text-on-surface bg-background flex flex-col antialiased">
      <TopBar onSync={() => flashSaving('Sinkronisasi Supabase berhasil!')} saving={saving} />
      <div className="flex flex-1 pt-16">
        <Sidebar activeNav={activeNav} onNav={handleNav} role={role} onRoleChange={handleRole} />
        <main className="md:ml-64 flex-1 overflow-y-auto p-6 bg-background">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-label-sm text-secondary mb-1">
                <span>Kurikulum Merdeka</span>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <span>Fase E (Kelas X)</span>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <span className="text-primary font-medium">Penilaian Sumatif</span>
              </div>
              <h1 className="text-headline-lg font-headline-lg text-on-surface">Asesmen Capaian Pembelajaran Siswa</h1>
            </div>
            <div className="flex items-center gap-2 bg-surface-container-lowest p-1.5 rounded-lg border border-outline-variant shadow-sm">
              <span className="text-label-sm text-secondary pl-2">Filter:</span>
              <button className="px-3 py-1 rounded bg-primary-container text-on-primary text-label-md font-medium">Sumatif Lingkup Materi</button>
              <button className="px-3 py-1 rounded hover:bg-surface-container-low text-secondary text-label-md">Akhir Semester</button>
            </div>
          </div>
          {showBanner && (
            <div className="mb-6 p-4 rounded-xl bg-surface-container-lowest border-l-4 border-l-primary-container border border-outline-variant flex items-start justify-between shadow-sm">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-2xl">info</span>
                <div>
                  <h4 className="text-title-md text-on-surface">Prinsip Asesmen Kurikulum Merdeka (2024/2025)</h4>
                  <p className="text-body-sm text-secondary">Nilai rapor dari <strong>Asesmen Sumatif (TP)</strong>. Formatif diagnostik tanpa bobot rapor.</p>
                </div>
              </div>
              <button className="text-secondary p-1" onClick={() => setShowBanner(false)}><span className="material-symbols-outlined text-sm">close</span></button>
            </div>
          )}
          <Metrics avg={avg} needHelp={needHelp} />
          <Toolbar calcMode={calcMode} onMode={setCalcMode} saving={saving} onRecalc={() => flashSaving()} onGenerate={() => openNarrative(students[0])} />
          <AssessmentTable students={students} calcMode={calcMode} onScoreChange={handleScore} onOpenNarrative={openNarrative} onOpenPrint={openPrint} />
          <div ref={waliRef}><WaliSection /></div>
        </main>
      </div>
      {narrStudent && <NarrativeModal student={narrStudent} onClose={() => setNarrStudent(null)} onApply={(t) => { setNarratives((m) => ({ ...m, [narrStudent.id]: t })); setNarrStudent(null); flashSaving() }} />}
      {printStudent && <PrintModal student={printStudent} narrative={narratives[printStudent.id] || buildNarrative(printStudent.scores).narrative} onClose={() => setPrintStudent(null)} />}
      {showSupabase && <SupabaseModal onClose={() => setShowSupabase(false)} />}
      {toast && <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] px-4 py-2 rounded-lg bg-inverse-surface text-inverse-on-surface text-body-sm shadow-lg">{toast}</div>}
    </div>
  )
}
