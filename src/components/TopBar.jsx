export default function TopBar({ onSync, saving }) {
  return (
    <header className="bg-surface-container-lowest text-primary top-0 shadow-sm flex justify-between items-center w-full px-6 h-16 border-b border-outline-variant z-40 fixed left-0 right-0">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-on-primary shadow-sm">
            <span className="material-symbols-outlined text-xl">school</span>
          </div>
          <div>
            <span className="text-headline-sm font-headline-sm font-bold text-primary tracking-tight">E-Rapor Merdeka</span>
            <span className="hidden sm:inline-block ml-2 px-1.5 py-0.5 text-label-sm font-label-sm bg-secondary-container text-on-secondary-fixed rounded">
              2025 v2.4
            </span>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-2 pl-4 border-l border-outline-variant">
          <span className="px-2.5 py-1 rounded bg-surface-container-low text-label-md font-label-md text-on-surface-variant flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm text-primary">calendar_month</span>
            2024/2025 Genap • Kelas X-1
          </span>
          <span className="px-2.5 py-1 rounded bg-surface-container-low text-label-md font-label-md text-on-surface-variant flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm text-primary">menu_book</span>
            Informatika (Fase E)
          </span>
        </div>
      </div>

      <nav className="hidden 2xl:flex items-center gap-6 h-full">
        <a className="text-primary font-title-md text-title-md border-b-2 border-primary pb-3.5 pt-4" href="#penilaian">
          Penilaian Sumatif &amp; Formatif
        </a>
        <a className="text-on-surface-variant font-title-md text-title-md hover:text-on-surface pb-3.5 pt-4" href="#jurnal">
          Jurnal Formatif
        </a>
        <a className="text-on-surface-variant font-title-md text-title-md hover:text-on-surface pb-3.5 pt-4" href="#deskripsi">
          Deskripsi Rapor
        </a>
        <a className="text-on-surface-variant font-title-md text-title-md hover:text-on-surface pb-3.5 pt-4" href="#wali">
          Modul Wali Kelas
        </a>
        <a className="text-on-surface-variant font-title-md text-title-md hover:text-on-surface pb-3.5 pt-4" href="#master">
          Master TP &amp; KKTP
        </a>
        <a className="text-on-surface-variant font-title-md text-title-md hover:text-on-surface pb-3.5 pt-4" href="#cetak">
          Cetak Rapor A4
        </a>
      </nav>

      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center gap-2 px-2.5 py-1 rounded-full bg-surface-container text-label-sm font-label-sm border border-outline-variant">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-on-surface-variant">Supabase Client: Connected (Mock DB)</span>
        </div>
        <button
          onClick={onSync}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-container text-on-primary text-label-md font-label-md hover:bg-primary transition-all duration-200 ease-in-out active:scale-[0.99] shadow-sm"
        >
          <span className="material-symbols-outlined text-base">{saving ? 'sync' : 'cloud_done'}</span>
          <span>{saving ? 'Menyinkronkan...' : 'Sinkronisasi Supabase'}</span>
        </button>
        <div className="flex items-center gap-1 text-on-surface-variant">
          <button className="p-2 rounded-lg hover:bg-surface-container-low transition-colors duration-150 relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full"></span>
          </button>
          <button
            className="p-1.5 rounded-lg hover:bg-surface-container-low flex items-center gap-2 transition-colors duration-150"
            title="Foto Profil Guru Mata Pelajaran"
          >
            <span className="material-symbols-outlined text-2xl text-primary">account_circle</span>
          </button>
        </div>
      </div>
    </header>
  )
}
