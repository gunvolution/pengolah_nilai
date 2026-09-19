export default function Metrics({ avg, needHelp }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant shadow-sm">
        <div className="flex items-center justify-between text-secondary mb-2">
          <span className="text-label-md font-label-md">Peserta Didik Terdata</span>
          <span className="material-symbols-outlined text-primary">groups</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-headline-lg font-headline-lg font-bold text-on-surface">36</span>
          <span className="text-label-sm font-label-sm text-emerald-600 font-medium">100% Aktif</span>
        </div>
        <p className="text-label-sm font-label-sm text-secondary mt-1">Kelas X-A • Rombel Reguler</p>
      </div>
      <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant shadow-sm">
        <div className="flex items-center justify-between text-secondary mb-2">
          <span className="text-label-md font-label-md">Rata-Rata Kelas (TP 1-5)</span>
          <span className="material-symbols-outlined text-primary">analytics</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-headline-lg font-headline-lg font-bold text-on-surface">{avg.toFixed(1)}</span>
          <span className="text-label-sm font-label-sm bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200">Kategori Cakap</span>
        </div>
        <p className="text-label-sm font-label-sm text-secondary mt-1">Standar KKTP Minimum: 70</p>
      </div>
      <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant shadow-sm">
        <div className="flex items-center justify-between text-secondary mb-2">
          <span className="text-label-md font-label-md">Butuh Intervensi</span>
          <span className="material-symbols-outlined text-error">warning</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-headline-lg font-headline-lg font-bold text-error">{needHelp} Siswa</span>
          <span className="text-label-sm font-label-sm text-error bg-rose-50 px-2 py-0.5 rounded border border-rose-200">Perlu Remidi</span>
        </div>
        <p className="text-label-sm font-label-sm text-secondary mt-1">TP 2 (Struktur Data) paling kritis</p>
      </div>
      <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant shadow-sm">
        <div className="flex items-center justify-between text-secondary mb-2">
          <span className="text-label-md font-label-md">Status Validasi Nilai</span>
          <span className="material-symbols-outlined text-tertiary">verified</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-headline-lg font-headline-lg font-bold text-tertiary">34 / 36</span>
          <span className="text-label-sm font-label-sm text-secondary">Terisi Penuh</span>
        </div>
        <p className="text-label-sm font-label-sm text-secondary mt-1">Tersimpan di Cloud Supabase</p>
      </div>
    </div>
  )
}
