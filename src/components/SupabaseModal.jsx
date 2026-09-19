export default function SupabaseModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-surface-container-lowest rounded-xl max-w-3xl w-full border shadow-2xl overflow-hidden">
        <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-emerald-400">database</span>
            <h3 className="font-bold">Supabase PostgreSQL Schema</h3>
          </div>
          <button className="text-slate-400 hover:text-white" onClick={onClose}><span className="material-symbols-outlined">close</span></button>
        </div>
        <div className="p-4 bg-slate-950 text-slate-200 font-data-mono text-[12px] overflow-x-auto max-h-[460px] space-y-4">
          <div>
            <span className="text-emerald-400 font-bold">// src/lib/supabase.js</span>
            <pre className="mt-1 text-slate-300">import {'{ createClient }'} from '@supabase/supabase-js';{'\n'}export const supabase = createClient(url, key);</pre>
          </div>
          <div>
            <span className="text-emerald-400 font-bold">-- penilaian_sumatif_tp (PostgreSQL)</span>
            <pre className="mt-1 text-slate-300 whitespace-pre-wrap">CREATE TABLE penilaian_sumatif_tp ({'\n'}  tp_1_score NUMERIC(5,2), tp_2_score NUMERIC(5,2),{'\n'}  nilai_akhir NUMERIC GENERATED ALWAYS AS ((tp_1+tp_2+tp_3+tp_4+tp_5)/5) STORED{'\n'});</pre>
          </div>
        </div>
        <div className="p-3 bg-surface-container-low border-t flex justify-between text-label-sm">
          <span className="text-secondary">Ready for RLS production hookup</span>
          <button className="px-3 py-1.5 rounded bg-primary text-on-primary" onClick={onClose}>Tutup</button>
        </div>
      </div>
    </div>
  )
}
