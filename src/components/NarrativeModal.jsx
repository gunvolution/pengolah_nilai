import { useMemo, useState } from 'react'
import { buildNarrative } from '../data.js'

export default function NarrativeModal({ student, onClose, onApply }) {
  const info = useMemo(() => buildNarrative(student ? student.scores : [0, 0, 0, 0, 0]), [student])
  const [text, setText] = useState(info.narrative)
  if (!student) return null
  const words = text.trim() ? text.trim().split(/\s+/).length : 0
  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-surface-container-lowest rounded-xl max-w-2xl w-full border border-outline-variant shadow-xl overflow-hidden">
        <div className="p-4 border-b border-outline-variant flex items-center justify-between bg-surface-container-low">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-base">auto_awesome</span>
            </div>
            <div>
              <h3 className="text-title-md font-title-md font-bold text-on-surface">Generator Narasi Deskripsi Rapor</h3>
              <p className="text-label-sm font-label-sm text-secondary">Deteksi otomatis Tertinggi &amp; Terendah</p>
            </div>
          </div>
          <button className="text-secondary hover:text-on-surface p-1" onClick={onClose}><span className="material-symbols-outlined">close</span></button>
        </div>
        <div className="p-6 space-y-4">
          <div className="p-3 bg-surface-container-low rounded-lg border border-outline-variant flex items-center justify-between flex-wrap gap-2">
            <div><div className="text-label-sm text-secondary">Peserta Didik:</div>
            <div className="text-headline-sm font-bold text-on-surface">{student.name}</div></div>
            <span className="px-2.5 py-1 rounded bg-secondary-container text-on-secondary-fixed text-label-md">Informatika</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
              <div className="flex items-center gap-1.5 text-label-sm font-bold text-emerald-800 mb-1">
                <span className="material-symbols-outlined text-base">trending_up</span>Tertinggi:
              </div>
              <div className="text-body-sm text-emerald-900 font-semibold">{info.highest}</div>
            </div>
            <div className="p-3 rounded-lg bg-rose-50 border border-rose-200">
              <div className="flex items-center gap-1.5 text-label-sm font-bold text-rose-800 mb-1">
                <span className="material-symbols-outlined text-base">trending_down</span>Perlu Bimbingan:
              </div>
              <div className="text-body-sm text-rose-900 font-semibold">{info.lowest}</div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-label-md font-bold text-on-surface">Sintesis Narasi Rapor</label>
              <span className="text-label-sm text-secondary">{words} kata</span>
            </div>
            <textarea className="w-full text-body-sm p-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary-container focus:outline-none" rows="4" value={text} onChange={(e) => setText(e.target.value)} />
            <div className="mt-1 flex items-center justify-between text-label-sm text-secondary flex-wrap gap-2">
              <span>Formula: [TP Tertinggi] + [Tindak Lanjut TP Terendah]</span>
              <button className="text-primary font-medium hover:underline flex items-center gap-1" onClick={() => setText('Sangat terampil dan mandiri saat menganalisis infrastruktur jaringan komputer serta konsep keamanan data, dengan evaluasi lanjutan direkomendasikan pada pemecahan kasus struktur data hierarkis.')}>
                <span className="material-symbols-outlined text-xs">restart_alt</span>Generate Alternatif
              </button>
            </div>
          </div>
        </div>
        <div className="p-4 bg-surface-container-low border-t border-outline-variant flex justify-end gap-2">
          <button className="px-4 py-2 rounded-lg border border-outline-variant hover:bg-surface-container" onClick={onClose}>Batal</button>
          <button className="px-4 py-2 rounded-lg bg-primary text-on-primary font-semibold flex items-center gap-1.5" onClick={() => onApply(text)}>
            <span className="material-symbols-outlined text-base">save</span>Terapkan ke Rapor
          </button>
        </div>
      </div>
    </div>
  )
}
