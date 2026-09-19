export default function WaliSection() {
  return (
    <section className="mt-8 pt-6 border-t border-outline-variant" id="section-wali">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2 py-0.5 rounded bg-primary-container text-on-primary text-label-sm font-label-sm">Konsol Wali Kelas</span>
            <h2 className="text-headline-sm font-headline-sm text-on-surface">Early Warning &amp; Pleno Kenaikan Kelas</h2>
          </div>
          <p className="text-body-sm font-body-sm text-secondary">Deteksi dini siswa yang perlu pendampingan intensif.</p>
        </div>
        <button className="px-3 py-1.5 rounded-lg border border-outline-variant bg-surface-container-lowest text-label-md font-label-md flex items-center gap-1.5">
          <span className="material-symbols-outlined text-base">download</span>Export Rekap Pleno PDF
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-surface-container-lowest rounded-xl border border-outline-variant p-4 shadow-sm">
          <h3 className="text-title-md font-title-md text-on-surface mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-error">notification_important</span>Daftar Siswa Berisiko
          </h3>
          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-rose-50/50 border border-rose-200 flex justify-between gap-3 flex-wrap">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-xs">DP</div>
                <div><div className="font-semibold text-on-surface">Dimas Pratama (0081294823)</div>
                <div className="text-label-sm text-rose-700">3 TP di bawah KKTP • Alpa 4 hari</div></div>
              </div>
              <span className="px-2.5 py-1 rounded bg-rose-100 text-rose-800 text-label-sm font-medium h-fit">Sidang Pleno</span>
            </div>
            <div className="p-3 rounded-lg bg-amber-50/50 border border-amber-200 flex justify-between gap-3 flex-wrap">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs">AF</div>
                <div><div className="font-semibold text-on-surface">Ahmad Fadhil (0081294821)</div>
                <div className="text-label-sm text-amber-700">1 TP Bimbingan (TP 2) • Hadir 98%</div></div>
              </div>
              <span className="px-2.5 py-1 rounded bg-amber-100 text-amber-800 text-label-sm font-medium h-fit">Naik dg Pendampingan</span>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-outline-variant flex justify-between text-label-sm text-secondary">
            <span>Batas kunci nilai: <strong>21 Juni 2025</strong></span>
            <a className="text-primary font-medium hover:underline" href="#wali">Lihat Rincian →</a>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-4 shadow-sm">
          <h3 className="text-title-md font-title-md mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">co_present</span>Presensi Kelas X-A
          </h3>
          <div className="grid grid-cols-3 gap-2 mb-3 text-center">
            <div className="p-2.5 rounded bg-surface-container-low border border-outline-variant"><div className="text-label-sm text-secondary">Sakit</div><div className="font-bold text-headline-sm">12</div></div>
            <div className="p-2.5 rounded bg-surface-container-low border border-outline-variant"><div className="text-label-sm text-secondary">Izin</div><div className="font-bold text-headline-sm">8</div></div>
            <div className="p-2.5 rounded bg-surface-container-low border border-outline-variant"><div className="text-label-sm text-secondary">Alpa</div><div className="font-bold text-headline-sm text-error">5</div></div>
          </div>
          <p className="text-body-sm text-secondary">P5 Gotong Royong &amp; Bernalar Kritis tercapai 92%.</p>
          <button className="mt-4 w-full py-2 rounded-lg bg-surface-container text-primary font-title-md">Kelola Presensi</button>
        </div>
      </div>
    </section>
  )
}
