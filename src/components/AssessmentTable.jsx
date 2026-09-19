import { TP_COLUMNS, calcFinal, kktpStatus, scoreInputClass } from '../data.js'

export default function AssessmentTable(p) {
  const { students, calcMode, onScoreChange, onOpenNarrative, onOpenPrint } = p
  return (
    <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden mb-8">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-body-sm font-body-sm">
          <thead>
            <tr className="bg-surface-container-low text-secondary border-b border-outline-variant text-label-sm font-label-sm">
              <th className="p-3 w-12 text-center sticky left-0 bg-surface-container-low z-20">NO</th>
              <th className="p-3 w-32 sticky left-12 bg-surface-container-low z-20">NISN</th>
              <th className="p-3 w-48 sticky left-44 bg-surface-container-low z-20 border-r border-outline-variant">NAMA SISWA</th>
              {TP_COLUMNS.map((tp) => (
                <th key={tp.key} className="p-3 text-center min-w-[110px]">
                  <div className="font-semibold text-on-surface">{tp.short}</div>
                  <div className="text-[10px] text-secondary font-normal">{tp.desc}</div>
                </th>
              ))}
              <th className="p-3 text-center min-w-[90px] bg-surface-container border-l border-outline-variant">
                <div className="font-bold text-primary">NILAI AKHIR</div>
                <div className="text-[10px] text-secondary font-normal">{calcMode === 'kktp' ? 'Ketercapaian' : 'Rata-Rata'}</div>
              </th>
              <th className="p-3 text-center min-w-[120px]">STATUS KKTP</th>
              <th className="p-3 text-center min-w-[130px]">AKSI &amp; RAPOR</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            {students.map((s, idx) => {
              const finalScore = calcFinal(s.scores, calcMode)
              const st = kktpStatus(finalScore)
              return (
                <tr key={s.id} className="hover:bg-surface-container-low/50 transition-colors group">
                  <td className="p-3 text-center font-medium sticky left-0 bg-surface-container-lowest z-10">{idx + 1}</td>
                  <td className="p-3 font-data-mono text-secondary sticky left-12 bg-surface-container-lowest z-10">{s.nisn}</td>
                  <td className="p-3 font-semibold text-on-surface sticky left-44 bg-surface-container-lowest z-10 border-r border-outline-variant">{s.name}</td>
                  {s.scores.map((val, i) => (
                    <td key={i} className="p-2 text-center">
                      <input className={scoreInputClass(val)} max="100" min="0" type="number" value={val} onChange={(e) => onScoreChange(s.id, i, e.target.value)} />
                    </td>
                  ))}
                  <td className={`p-3 text-center font-data-mono font-bold bg-surface-container/60 border-l border-outline-variant text-base ${st.scoreClass}`}>{finalScore.toFixed(1)}</td>
                  <td className="p-3 text-center"><span className={st.badge}>{st.label}</span></td>
                  <td className="p-3 text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      <button className="p-1.5 rounded hover:bg-secondary-container text-primary" onClick={() => onOpenNarrative(s)} title="Generator Deskripsi"><span className="material-symbols-outlined text-lg">auto_awesome</span></button>
                      <button className="p-1.5 rounded hover:bg-secondary-container text-secondary" onClick={() => onOpenPrint(s)} title="Cetak Rapor"><span className="material-symbols-outlined text-lg">print</span></button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="p-4 bg-surface-container-low border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-3 text-label-md font-label-md text-secondary">
        <div className="flex items-center gap-2">
          <span>Menampilkan <strong>6</strong> dari <strong>36</strong> siswa</span>
          <span className="text-outline-variant">|</span>
          <span>Interval: 0-69 (Bimbingan), 70-84 (Cakap), 85-100 (Mahir)</span>
        </div>
        <div className="flex items-center gap-1">
          <button className="px-2.5 py-1 rounded border border-outline-variant bg-surface-container-lowest disabled:opacity-50" disabled>Sebelumnya</button>
          <button className="px-2.5 py-1 rounded bg-primary text-on-primary font-medium">1</button>
          <button className="px-2.5 py-1 rounded border border-outline-variant bg-surface-container-lowest">2</button>
          <button className="px-2.5 py-1 rounded border border-outline-variant bg-surface-container-lowest">Selanjutnya</button>
        </div>
      </div>
    </div>
  )
}
