const NAV = [
  { id: 'penilaian', icon: 'edit_document', label: 'Penilaian Asesmen' },
  { id: 'jurnal', icon: 'assignment', label: 'Jurnal Observasi' },
  { id: 'generator', icon: 'auto_awesome', label: 'Generator Narasi' },
  { id: 'wali', icon: 'groups', label: 'Konsol Wali Kelas' },
  { id: 'master', icon: 'tune', label: 'Master Data TP' },
  { id: 'cetak', icon: 'print', label: 'Cetak Rapor A4' },
]

export default function Sidebar({ activeNav, onNav, role, onRoleChange }) {
  const baseItem =
    'nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg font-body-md text-body-md w-full text-left'

  return (
    <aside className="w-64 h-[calc(100vh-4rem)] fixed left-0 top-16 hidden md:flex flex-col justify-between p-4 bg-surface-container-lowest border-r border-outline-variant z-30 overflow-y-auto">
      <div className="space-y-4">
        <div className="p-3 rounded-lg bg-surface-container-low border border-outline-variant">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-primary-container text-on-primary flex items-center justify-center font-bold text-headline-sm">
              <span className="material-symbols-outlined">account_balance</span>
            </div>
            <div>
              <h2 className="text-title-md font-title-md font-bold text-on-surface">SMK Negeri 1 Jakarta</h2>
              <p className="text-label-sm font-label-sm text-secondary">NPSN: 20101452 • Merdeka</p>
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-outline-variant">
            <label className="text-label-sm font-label-sm text-secondary block mb-1">Peran Aktif Pengguna:</label>
            <div className="relative">
              <select
                value={role}
                onChange={(e) => onRoleChange(e.target.value)}
                className="w-full text-label-md font-label-md bg-surface-container-lowest border border-outline-variant rounded-md py-1 px-2 text-on-surface focus:ring-1 focus:ring-primary focus:border-primary"
              >
                <option value="guru">Ganti Peran: Guru Mapel</option>
                <option value="wali">Ganti Peran: Wali Kelas</option>
                <option value="admin">Ganti Peran: Kurikulum / Admin</option>
              </select>
            </div>
          </div>
        </div>

        <nav className="space-y-1">
          {NAV.map((item) => {
            const active = activeNav === item.id
            return (
              <button
                key={item.id}
                onClick={() => onNav(item.id)}
                className={
                  active
                    ? `${baseItem} bg-secondary-container text-on-secondary-fixed font-title-md text-title-md`
                    : `${baseItem} text-secondary hover:bg-surface-container-low`
                }
              >
                <span className={`material-symbols-outlined ${active ? 'text-primary' : ''}`}>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            )
          })}
          <button
            onClick={() => onNav('supabase')}
            className={`${baseItem} text-secondary hover:bg-surface-container-low border border-dashed border-outline-variant`}
          >
            <span className="material-symbols-outlined text-tertiary">code</span>
            <span className="text-tertiary font-medium">Schema Supabase</span>
          </button>
        </nav>
      </div>

      <div className="pt-4 border-t border-outline-variant space-y-1">
        <a
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-secondary hover:bg-surface-container-low text-body-sm font-body-sm"
          href="#bantuan"
        >
          <span className="material-symbols-outlined text-lg">help</span>
          <span>Pusat Bantuan</span>
        </a>
        <a
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-secondary hover:bg-surface-container-low text-body-sm font-body-sm"
          href="#pengaturan"
        >
          <span className="material-symbols-outlined text-lg">settings</span>
          <span>Pengaturan Instansi</span>
        </a>
        <div className="px-3 pt-2 text-[10px] text-secondary">Panduan Pembelajaran &amp; Asesmen 2024/2025</div>
      </div>
    </aside>
  )
}
