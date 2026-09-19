import { calcFinal } from '../data.js'

export default function PrintModal(p) {
  const { student, narrative, onClose } = p
  if (!student) return null
  const finalScore = calcFinal(student.scores, 'pure')
  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 flex items-center justify-center p-2 sm:p-6 overflow-y-auto">
      <div className="bg-surface-container-lowest rounded-xl max-w-4xl w-full border shadow-2xl flex flex-col max-h-[90vh]">
        <div className="p-4 border-b flex items-center justify-between bg-surface-container-low no-print">
          <h3 className="font-bold flex items-center gap-2"><span className="material-symbols-outlined text-primary">print</span>Pratinjau Rapor A4</h3>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 rounded-lg bg-primary text-on-primary text-label-md" onClick={() => window.print()}>Cetak PDF</button>
            <button className="p-1 text-secondary" onClick={onClose}><span className="material-symbols-outlined">close</span></button>
          </div>
        </div>
        <div className="overflow-y-auto p-4 sm:p-8 bg-slate-100 flex justify-center">
          <div className="print-sheet bg-white w-full max-w-[760px] p-8 shadow border text-slate-900 text-[12px] leading-relaxed">
            <div className="border-b-2 border-slate-900 pb-3 mb-4 text-center">
              <div className="font-bold text-[14px] uppercase">Pemerintah Provinsi DKI Jakarta</div>
              <div className="font-bold text-[13px] uppercase">Dinas Pendidikan • SMK Negeri 1 Jakarta</div>
              <div className="text-[11px] text-slate-600">Jl. Budi Utomo No. 7, Jakarta Pusat • NPSN: 20101452</div>
            </div>
            <div className="text-center font-bold text-[13px] mb-4 uppercase underline">Laporan Hasil Belajar (Rapor)</div>
            <div className="grid grid-cols-2 gap-y-1 mb-4 text-[11px]">
              <div>Nama: <strong>{student.name}</strong></div>
              <div>Kelas: <strong>X-A / Fase E</strong></div>
              <div>NISN: <strong>{student.nisn}</strong></div>
              <div>Semester: <strong>2 (Genap) / 2024-2025</strong></div>
            </div>
            <table className="w-full border-collapse border border-slate-800 text-[11px] mb-4">
              <thead><tr className="bg-slate-100 text-center font-bold">
                <th className="border border-slate-800 p-1.5">No</th>
                <th className="border border-slate-800 p-1.5">Mapel</th>
                <th className="border border-slate-800 p-1.5">Nilai</th>
                <th className="border border-slate-800 p-1.5">Deskripsi</th>
              </tr></thead>
              <tbody>
                <tr><td className="border border-slate-800 p-2 text-center">1</td><td className="border border-slate-800 p-2 font-semibold">Informatika</td><td className="border border-slate-800 p-2 text-center font-bold">{Math.round(finalScore)}</td><td className="border border-slate-800 p-2 text-justify">{narrative}</td></tr>
                <tr><td className="border border-slate-800 p-2 text-center">2</td><td className="border border-slate-800 p-2 font-semibold">Dasar TKJ</td><td className="border border-slate-800 p-2 text-center font-bold">84</td><td className="border border-slate-800 p-2 text-justify">Terampil perakitan &amp; instalasi OS jaringan.</td></tr>
                <tr><td className="border border-slate-800 p-2 text-center">3</td><td className="border border-slate-800 p-2 font-semibold">Matematika</td><td className="border border-slate-800 p-2 text-center font-bold">80</td><td className="border border-slate-800 p-2 text-justify">Cakap barisan geometri &amp; fungsi eksponensial.</td></tr>
              </tbody>
            </table>
            <div className="border border-slate-800 p-2.5 mb-6 text-[11px]"><strong>Catatan Wali:</strong> Pertahankan kedisiplinan belajar TI.</div>
            <div className="grid grid-cols-3 text-center text-[10px] gap-2">
              <div><p>Orang Tua / Wali</p><div className="h-14"></div><p className="font-bold underline">( ............ )</p></div>
              <div><p>Jakarta, 21 Juni 2025<br />Wali Kelas</p><div className="h-14"></div><p className="font-bold underline">Budi Santoso, S.Kom.</p></div>
              <div><p>Kepala Sekolah</p><div className="h-14"></div><p className="font-bold underline">Dra. Hj. Nurhayati</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
