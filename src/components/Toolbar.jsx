export default function Toolbar(p) {
  const { calcMode, onMode, saving, onRecalc, onGenerate } = p
  const on = 'px-3 py-1 rounded text-label-md font-label-md bg-white text-primary shadow-sm font-medium'
  const off = 'px-3 py-1 rounded text-label-md font-label-md text-secondary hover:text-on-surface font-medium'
  return (
    <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-4 mb-6 shadow-sm">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-label-md font-label-md font-bold text-on-surface flex items-center gap-1.5">
            <span className="material-symbols-outlined text-primary text-base">tune</span>
            Mesin Kalkulasi Nilai Akhir:
          </span>
          <div className="inline-flex rounded-lg border border-outline-variant p-1 bg-surface-container-low" role="group">
            <button type="button" onClick={() => onMode('pure')} className={calcMode === 'pure' ? on : off}>Rata-Rata Murni</button>
            <button type="button" onClick={() => onMode('weighted')} className={calcMode === 'weighted' ? on : off}>Bobot TP (20% x 5)</button>
            <button type="button" onClick={() => onMode('kktp')} className={calcMode === 'kktp' ? on : off}>Ketercapaian KKTP</button>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 text-label-sm font-label-sm text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
            <span className="material-symbols-outlined text-sm">{saving ? 'sync' : 'check_circle'}</span>
            <span>{saving ? 'Menyimpan ke Supabase...' : 'Tersimpan otomatis ke database'}</span>
          </div>
          <button onClick={onRecalc} className="px-3 py-1.5 rounded-lg border border-outline-variant text-label-md font-label-md text-on-surface hover:bg-surface-container-low flex items-center gap-1.5">
            <span className="material-symbols-outlined text-base">refresh</span>Hitung Ulang
          </button>
          <button onClick={onGenerate} className="px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-fixed text-label-md font-label-md font-semibold hover:bg-secondary-fixed flex items-center gap-1.5">
            <span className="material-symbols-outlined text-base">auto_awesome</span>Generate Narasi Otomatis
          </button>
        </div>
      </div>
      <div className="mt-4 pt-3 border-t border-outline-variant flex flex-wrap items-center justify-between gap-2 text-label-sm font-label-sm">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-secondary font-medium">Kriteria Ketercapaian Tujuan Pembelajaran (KKTP):</span>
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-[#ECFDF5] text-[#047857] border border-[#A7F3D0]">Mahir (85 - 100)</span>
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-[#FFFBEB] text-[#B45309] border border-[#FDE68A]">Cakap (70 - 84)</span>
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-[#FFF1F2] text-[#BE123C] border border-[#FECDD3]">Perlu Bimbingan (&lt; 70)</span>
        </div>
        <div className="text-secondary">Mata Pelajaran: <strong>Informatika</strong> • Fase E (Kurikulum Merdeka 2025)</div>
      </div>
    </div>
  )
}
