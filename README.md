# E-Rapor Merdeka 2025 — React + Vite

Konversi `design/code.html` ke React-Vite + Tailwind CSS v3.

## Jalankan

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

## Fitur (sesuai desain HTML)

- Top App Bar + status Supabase mock + sinkronisasi
- Sidebar navigasi + role switcher (Guru / Wali / Admin)
- Banner prinsip asesmen, 4 kartu metrik (rata-rata & intervensi live)
- Toolbar mesin kalkulasi: Rata-Rata Murni / Bobot TP 20% / Ketercapaian KKTP
- Tabel matriks TP 1–5 editable, warna sel otomatis, nilai akhir + badge KKTP
- Modal Generator Narasi (TP tertinggi/terendah + textarea + word count)
- Modal Cetak Rapor A4 (kop sekolah, identitas, tabel mapel, presensi, ttd)
- Modal Schema Supabase
- Section Konsol Wali Kelas (early warning + presensi X-A)
