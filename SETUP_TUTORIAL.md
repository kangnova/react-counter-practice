# 📚 Tutorial: Membersihkan Vite + React Project dari Nol

Dokumentasi langkah-langkah yang telah dilakukan untuk membersihkan template default Vite + React menjadi halaman putih bersih, siap untuk development custom.

---

## 🎯 Tujuan

Menghapus semua template/demo default yang disediakan Vite sehingga kita mendapatkan:
- Halaman dengan background putih bersih
- Tidak ada styling atau komponen demo yang tidak perlu
- Project siap untuk mulai development dari nol

---

## 📂 Struktur File Penting

### Hierarki File di `src/`

```
src/
├── main.jsx          ⭐⭐⭐ Entry point aplikasi (JANGAN UBAH)
├── App.jsx           ⭐⭐⭐ Komponen utama (EDIT DI SINI)
├── App.css           ⭐⭐  Styling komponen App (EDIT DI SINI)
├── index.css         ⭐    Global stylesheet (EDIT/BERSIHKAN DI SINI)
└── index.html        File HTML template
```

### Penjelasan Tiap File

| File | Peran | Status |
|------|-------|--------|
| `main.jsx` | Entry point Vite - merender App ke DOM | ❌ Jangan ubah |
| `App.jsx` | Komponen utama aplikasi Anda | ✏️ Edit konten |
| `App.css` | Stylesheet untuk `App.jsx` | 🧹 Bersihkan |
| `index.css` | Global stylesheet untuk semua halaman | 🧹 Minimalisir |

---

## 🧹 Langkah-Langkah Pembersihan

### **Langkah 1: Bersihkan `src/App.jsx`**

**File Original (Template Vite):**
```jsx
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        ...
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
```

**File Setelah Dibersihkan:**
```jsx
import './App.css'

function App() {
  return (
    <div>
      
    </div>
  )
}

export default App
```

**✅ Apa yang dihapus dan KENAPA:**

| Elemen | Alasan Dihapus |
|--------|---|
| `import { useState }` | Tidak ada state yang dipakai di komponen kosong |
| `import reactLogo` & `viteLogo` | Assets untuk demo template, tidak diperlukan untuk project kosong |
| Tag `<a>` & `<img>` logo | Elemen demo untuk tutorial Vite |
| Tombol & `<h1>` | Konten template yang tidak kita pakai |
| Class names seperti `.logo`, `.card` | Styling demo yang tidak digunakan lagi |

---

### **Langkah 2: Bersihkan `src/App.css`**

**File Original (Template Vite):**
```css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}
```

**File Setelah Dibersihkan:**
```
(Kosong)
```

**✅ Apa yang dihapus dan KENAPA:**

- **Semua class styling** (`.logo`, `.card`, `.read-the-docs`) → Elemen HTML yang menggunakan class ini sudah dihapus dari `App.jsx`
- **Animations & transitions** → Untuk elemen demo yang tidak ada lagi
- **Media queries** → Styling responsif untuk fitur yang dihapus

💡 **Konsep Penting:** Jangan simpan CSS yang tidak digunakan elemen apapun. Ini membuat kode lebih bersih dan maintainability lebih baik.

---

### **Langkah 3: Bersihkan `src/index.css`**

**File Original (Template Vite):**
```css
:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;
  /* ... lebih banyak styling ... */
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  /* ... lebih banyak styling ... */
}
```

**File Setelah Dibersihkan (Minimal Reset):**
```css
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #f0f0f0;
  color: black;
}
```

**✅ Apa yang dihapus dan KENAPA:**

| Styling | Alasan |
|---------|--------|
| `color: rgba(255, 255, 255, 0.87)` | White text - kami ingin black text untuk halaman putih |
| `background-color: #242424` | Dark theme - tidak cocok untuk "halaman putih bersih" |
| `color-scheme: light dark` | Untuk browser dark mode - tidak perlu |
| `a { color: #646cff }` | Styling link berwarna biru - belum ada links |
| `h1 { font-size: 3.2em }` | H1 besar untuk demo - tidak ada h1 di halaman kosong |
| `button { ... }` | Styling tombol - tidak ada tombol di halaman kosong |
| Animations & transitions | Untuk elemen demo yang tidak ada |

**🎨 Reset yang Disimpan:**
- `* { margin: 0; padding: 0; }` → Reset margin/padding default browser (best practice)
- `body { background-color: #f0f0f0; }` → Background putih/abu-abu terang
- `body { color: black; }` → Text berwarna hitam (kontras dengan background)

---

## ✅ Hasil Akhir

### **Sebelum:**
```
❌ Halaman dengan template demo Vite + React
❌ Background gelap dengan text putih
❌ Logo animasi, tombol counter, banyak styling tidak perlu
❌ 100+ baris CSS yang tidak dipakai
```

### **Sesudah:**
```
✅ Halaman putih bersih minimal
✅ Siap untuk mulai development custom
✅ Hanya 6 baris CSS dasar yang diperlukan
✅ Struktur yang clean dan maintainable
```

---

## 🚀 Next Steps

Sekarang halaman Anda sudah bersih! Beberapa ide apa yang bisa dilakukan selanjutnya:

1. **Tambah komponen baru** - Buat `Counter.jsx`, `Form.jsx`, dll
2. **Styling dengan CSS** - Tambahkan style sesuai kebutuhan di `App.css`
3. **Gunakan state & hooks** - Import `useState`, `useEffect` ketika diperlukan
4. **Organisasi folder** - Buat folder `components/`, `pages/`, `hooks/`, dll
5. **Build untuk production** - Jalankan `npm run build`

---

## 📝 Checklist Pembersihan

- [x] Hapus imports tidak perlu dari `App.jsx`
- [x] Hapus JSX template dari `App.jsx`
- [x] Kosongkan `App.css`
- [x] Minimalisir `index.css` (hanya reset dasar)
- [x] Verifikasi halaman menampilkan background putih bersih
- [x] Project siap untuk development

---

## 💡 Pembelajaran Kunci

### **1. Import Statement**
```jsx
// ❌ JANGAN import jika tidak digunakan
import { useState } from 'react' // Kalau tidak pakai state, jangan import

// ✅ LAKUKAN import hanya yang diperlukan
import './App.css'
```

### **2. CSS Hygiene**
```css
/* ❌ JANGAN simpan CSS untuk elemen yang tidak ada
.logo { ... }
.card { ... }
.read-the-docs { ... }
*/

/* ✅ LAKUKAN hanya simpan CSS yang dipakai */
body {
  background-color: #f0f0f0;
}
```

### **3. Global vs Component CSS**
- **`index.css`** = Global styles (body, fonts, resets) - untuk SEMUA halaman
- **`App.css`** = Component styles - hanya untuk komponen `App`

---

## 🔗 File yang Dimodifikasi

- `src/App.jsx` - Dikosongkan dari template demo
- `src/App.css` - Dihapus semua styling template
- `src/index.css` - Disederhanakan menjadi minimal reset

File yang **TIDAK diubah** (dan alasannya):
- `src/main.jsx` - Ini entry point Vite, struktur sudah benar
- `index.html` - Template HTML sudah tepat

---

# 🎮 Bagian 2: Membuat Counter App dengan State Management

Setelah project bersih, kini kita belajar membuat UI yang interaktif dengan `useState` React.

---

## 📌 Apa itu `useState`? (Analogi dengan PHP)

### Konsep Dasar

**Dalam PHP:**
```php
<?php
// Variable menyimpan nilai counter
$count = 0;

// Ketika form dikirim, update nilai
if ($_POST['action'] == 'tambah') {
    $count = $count + 1;  // Ubah variable
}

echo $count;  // Tampilkan di halaman
?>
```

**Dalam React dengan `useState`:**
```jsx
const [count, setCount] = useState(0);

// count = nilai saat ini (seperti $count di PHP)
// setCount = fungsi untuk mengubah count (seperti $count = $count + 1 di PHP)
// useState(0) = nilai awal (seperti $count = 0 di PHP)
```

### Perbedaan Kunci

| Aspek | PHP | React |
|-------|-----|-------|
| **Deklarasi** | `$count = 0;` | `const [count, setCount] = useState(0);` |
| **Ubah nilai** | `$count = $count + 1;` | `setCount(count + 1)` |
| **Akses nilai** | `echo $count;` | `{count}` (di JSX) |
| **Trigger re-render** | ❌ Tidak otomatis (perlu reload) | ✅ Otomatis (React render ulang) |

**Kenapa React pakai `setCount()`?** 
- React perlu tahu kapan state berubah
- Ketika state berubah, React automatically render ulang component
- Ini membuat UI selalu sync dengan data terbaru

---

## 🎯 Implementasi: Counter App

### **Langkah 1: Import `useState`**

Buka `src/App.jsx` dan tambahkan import di baris paling atas:

```jsx
import { useState } from 'react'
import './App.css'
```

**Penjelasan:**
- `{ useState }` = destructuring import (hanya ambil function `useState` dari React)
- Kurung kurawal diperlukan karena `useState` adalah named export
- Harus di atas sebelum Anda gunakan

---

### **Langkah 2: Buat State di dalam Component**

Di dalam function `App()`, sebelum `return`, tambahkan:

```jsx
function App() {
  const [count, setCount] = useState(0)
  
  return (
    // JSX di sini
  )
}
```

**Penjelasan breakdown:**

```jsx
const [count, setCount] = useState(0)
//    ↑ nama variable                ↑ nilai awal
//         ↑ nama fungsi setter
```

| Bagian | Arti |
|--------|------|
| `const` | Deklarasi constant (tidak bisa dirubah reference-nya) |
| `[count, setCount]` | Array destructuring - ambil 2 item dari `useState()` |
| `count` | Nilai state saat ini (hanya bisa dibaca) |
| `setCount` | Fungsi untuk mengubah `count` (satu-satunya cara di React) |
| `useState(0)` | Hook React yang membuat state dengan nilai awal `0` |

---

### **Langkah 3: Buat Fungsi Handler untuk Tombol**

Tambahkan fungsi ini setelah Anda membuat state:

```jsx
function App() {
  const [count, setCount] = useState(0)

  const handleTambah = () => {
    setCount(count + 1)
  }

  return (
    // JSX di sini
  )
}
```

**Penjelasan langkah demi langkah:**

```jsx
const handleTambah = () => {
  //   ↑ nama fungsi (convention: handle + nama aksi)
  //              ↑ arrow function syntax
  
  setCount(count + 1)
  // ↑ panggil setter function
  //   ↑ nilai baru = nilai lama + 1
}
```

**Analogi PHP:**
```php
// PHP
function handleTambah() {
    global $count;
    $count = $count + 1;
}

// React (syntax berbeda, tapi logika sama)
const handleTambah = () => {
    setCount(count + 1)
}
```

---

### **Langkah 4: Koneksikan Fungsi ke Tombol**

Update JSX Anda dengan UI dan event handler:

```jsx
function App() {
  const [count, setCount] = useState(0)

  const handleTambah = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>Counter App</h1>
      <p>{count}</p>
      <button onClick={handleTambah}>Tambah (+)</button>
      <button>Kurang (-)</button>
    </div>
  )
}
```

**Penjelasan JSX:**

```jsx
<p>{count}</p>
// ↑ curly braces untuk memasukkan JavaScript ke JSX
// Ketika count berubah, React re-render dan tampilkan nilai baru

<button onClick={handleTambah}>Tambah (+)</button>
// ↑ event listener (seperti onclick di HTML)
// ↑ reference ke fungsi (tanpa parenthesis!)
//   Jika tulis handleTambah(), akan jalankan sekarang, bukan saat diklik
```

**PENTING: Bedakan:**
```jsx
// ❌ SALAH - Fungsi jalan saat component render, bukan saat diklik
<button onClick={handleTambah()}>Tambah (+)</button>

// ✅ BENAR - Fungsi jalan saat tombol diklik
<button onClick={handleTambah}>Tambah (+)</button>

// ✅ JUGA BENAR - Menggunakan arrow function inline
<button onClick={() => setCount(count + 1)}>Tambah (+)</button>
```

---

### **Langkah 5: Test di Browser**

Simpan file dan cek browser:
- ✅ Halaman menampilkan "Counter App" dengan angka 0
- ✅ Klik tombol "Tambah (+)" → angka berubah menjadi 1, 2, 3, dst
- ✅ Tombol "Kurang (-)" masih kosong (akan ditambah selanjutnya)

---

## 🧠 Alur Eksekusi Detail

Ketika Anda klik tombol "Tambah", terjadi:

```
1. onClick event trigger (user klik tombol)
   ↓
2. Panggil handleTambah()
   ↓
3. Jalankan: setCount(count + 1)
   Misal: count saat ini = 0, jadi setCount(0 + 1) = setCount(1)
   ↓
4. React detect state berubah
   ↓
5. Component re-render (jalankan function App() lagi)
   ↓
6. const [count, setCount] = useState(0)
   Kali ini useState return [1, setCount] bukan [0, setCount]
   ↓
7. <p>{count}</p> menampilkan 1 (bukan 0)
   ↓
8. Browser update halaman dengan nilai baru ✅
```

---

## 📝 Hasil Akhir: `src/App.jsx`

```jsx
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleTambah = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>Counter App</h1>
      <p>{count}</p>
      <button onClick={handleTambah}>Tambah (+)</button>
      <button>Kurang (-)</button>
    </div>
  )
}

export default App
```

---

## 🔻 Tambahan: Implementasi Tombol "Kurang (-)"

Setelah tombol "Tambah" berhasil, kini saatnya membuat tombol "Kurang" dengan logika serupa.

### **Langkah 1: Buat Fungsi `handleKurang`**

Tambahkan fungsi ini setelah `handleTambah`:

```jsx
function App() {
  const [count, setCount] = useState(0)

  const handleTambah = () => {
    setCount(count + 1)
  }

  const handleKurang = () => {
    setCount(count - 1)
  }

  return (
    // JSX di sini
  )
}
```

**Penjelasan:**
- Logika sama dengan `handleTambah`, tapi pengurangan (`count - 1`) bukan penambahan
- Nama fungsi mengikuti convention: `handle` + nama aksi (`Kurang`)

---

### **Langkah 2: Koneksikan ke Tombol**

Update button "Kurang (-)" dengan event handler:

```jsx
<button onClick={handleKurang}>Kurang (-)</button>
```

**Perbandingan kedua tombol:**

```jsx
<button onClick={handleTambah}>Tambah (+)</button>
<button onClick={handleKurang}>Kurang (-)</button>
```

---

## 📝 Hasil Akhir: Counter App Lengkap

```jsx
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleTambah = () => {
    setCount(count + 1)
  }

  const handleKurang = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <h1>Counter App</h1>
      <p>{count}</p>
      <button onClick={handleTambah}>Tambah (+)</button>
      <button onClick={handleKurang}>Kurang (-)</button>
    </div>
  )
}

export default App
```

---

## ✅ Checklist Implementasi

- [x] Import `useState` dari React
- [x] Buat state `count` dengan nilai awal 0
- [x] Buat fungsi `handleTambah` dengan `setCount(count + 1)`
- [x] Buat fungsi `handleKurang` dengan `setCount(count - 1)`
- [x] Koneksikan `handleTambah` ke button "Tambah (+)"
- [x] Koneksikan `handleKurang` ke button "Kurang (-)"
- [x] Tampilkan nilai counter di `<p>{count}</p>`
- [x] Test di browser → kedua tombol berfungsi

---

## 🎓 Pembelajaran Kunci

### **1. State vs Variable Biasa**
```jsx
// ❌ Variable biasa - perubahan tidak trigger re-render
let count = 0;
count = count + 1;  // Berubah tapi halaman tidak update

// ✅ State - perubahan trigger re-render otomatis
const [count, setCount] = useState(0);
setCount(count + 1);  // Berubah dan halaman update
```

### **2. Setter Function Syntax**
```jsx
// Jangan ubah state langsung
count = count + 1;  // ❌ SALAH - tidak akan bekerja

// Gunakan setter function
setCount(count + 1);  // ✅ BENAR

// Atau dengan callback function (untuk logic lebih kompleks)
setCount((prevCount) => prevCount + 1);  // ✅ JUGA BENAR
```

### **3. Event Handler Reference**
```jsx
// Kirim reference fungsi (akan dipanggil saat event trigger)
<button onClick={handleTambah}>Click</button>  // ✅ BENAR

// Kirim result fungsi (akan dijalankan saat render)
<button onClick={handleTambah()}>Click</button>  // ❌ SALAH

// Exception: jika perlu pass argument ke fungsi
<button onClick={() => setCount(count + 5)}>Click</button>  // ✅ BENAR
```

---

## 🚀 Next Steps

Sekarang tombol "Tambah" sudah berfungsi! Langkah selanjutnya:

1. **Buat fungsi `handleKurang`** - Sama seperti `handleTambah` tapi kurang 1
2. **Tambahkan styling** - Update `App.css` untuk membuat tombol lebih menarik
3. **Reset button** - Tambahkan tombol untuk reset counter ke 0
4. **Batasan nilai** - Misal counter tidak boleh negatif atau lebih dari 10

---

# 🌐 Bagian 3: Deploy ke GitHub Pages

Setelah Counter App jadi, kini kita deploy ke GitHub Pages agar punya live demo yang bisa diakses siapa saja.

---

## 🎯 Tujuan Deployment

Membuat aplikasi React Anda dapat diakses online di:
```
https://[username].github.io/[repo-name]/
```

Contoh: `https://kangnova.github.io/react-counter-practice/`

---

## 📌 Mengapa Perlu Konfigurasi Base Path?

### Perbedaan: Local vs GitHub Pages

**Ketika Anda dev local (`npm run dev`):**
```
URL: http://localhost:5173/
Aplikasi: di root domain
CSS/JS path: /main.js ✅ (ditemukan di root)
```

**Ketika deploy ke GitHub Pages:**
```
URL: https://kangnova.github.io/react-counter-practice/
                              ↑ aplikasi di sub-path
CSS/JS path: /main.js ❌ (tidak ditemukan - cari di root domain)
CSS/JS path: /react-counter-practice/main.js ✅ (BENAR!)
```

**Kesimpulan:**
Browser perlu tahu bahwa aplikasi Anda di `sub-path`, bukan root. Jika tidak, file CSS/JS tidak ditemukan → halaman blank.

---

## 🛠️ Step 1: Update `vite.config.js`

Buka file `vite.config.js` dan ubah:

**Dari:**
```javascript
export default defineConfig({
  plugins: [react()],
})
```

**Menjadi:**
```javascript
export default defineConfig({
  base: './',
  plugins: [react()],
})
```

**Penjelasan:**
- `base: './'` = gunakan path relatif (cocok untuk sub-path)
- Vite akan automatically adjust semua import CSS/JS saat build

---

## 📦 Step 2: Install Package `gh-pages`

Package ini memudahkan deploy ke GitHub Pages. Jalankan:

```bash
npm install --save-dev gh-pages
```

Output:
```
added 1 package, and audited 23 packages in 1.82s
```

Package `gh-pages` akan ditambah ke `devDependencies` di `package.json`.

---

## ⚙️ Step 3: Tambahkan Script Deploy

Buka `package.json` dan update bagian `"scripts"`:

**Dari:**
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

**Menjadi:**
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist -b gh-pages -t"
}
```

**Penjelasan script:**

| Script | Fungsi |
|--------|--------|
| `predeploy` | Hook yang jalankan **sebelum** `deploy` (prefix `pre-`) |
| `npm run build` | Build aplikasi → hasilkan folder `dist/` |
| `deploy` | Upload isi `dist/` ke branch `gh-pages` GitHub |
| `-d dist` | Directory yang di-deploy |
| `-b gh-pages` | Nama branch target di GitHub |
| `-t` | Tag untuk menandai deployment |

---

## 🚀 Step 4: Jalankan Deployment

Sekarang deploy ke GitHub Pages:

```bash
npm run deploy
```

**Proses yang terjadi:**

```
npm run deploy
    ↓
Jalankan predeploy: npm run build
    ↓
Vite build: Kompilasi React → folder dist/
    ↓
Jalankan deploy: gh-pages -d dist -b gh-pages -t
    ↓
Ambil isi dist/ → push ke branch gh-pages GitHub
    ↓
GitHub Pages automatically publish
    ↓
Live! 🎉
```

**Output sukses:**
```
> react-counter-practice@0.0.0 predeploy
> npm run build

> react-counter-practice@0.0.0 build
> vite build

vite v7.3.1 building client environment for production...
✓ 30 modules transformed.
dist/index.html                   0.41 kB
dist/assets/index-BCk4lu7Y.js   193.43 kB
✓ built in 4.32s

> react-counter-practice@0.0.0 deploy
> gh-pages -d dist -b gh-pages -t

Published
```

---

## 🌐 Step 5: Konfigurasi GitHub Pages Settings

Setelah deploy, atur GitHub Pages di repository:

1. **Buka GitHub repository**
2. **Settings** → **Pages** (sidebar kiri)
3. **Source:**
   - Pilih: `Deploy from a branch`
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Klik **Save**

Tunggu ~2 menit, GitHub Pages akan publish aplikasi Anda.

---

## ✨ Step 6: Verifikasi & Test

Setelah deploy selesai:

1. **Clear browser cache:**
   ```
   Ctrl + Shift + Delete → Clear all → OK
   ```

2. **Buka URL aplikasi:**
   ```
   https://[username].github.io/[repo-name]/
   Contoh: https://kangnova.github.io/react-counter-practice/
   ```

3. **Verifikasi aplikasi:**
   - ✅ Judul "Counter App" muncul
   - ✅ Angka "0" ditampilkan
   - ✅ Tombol "Tambah (+)" berfungsi
   - ✅ Tombol "Kurang (-)" berfungsi

---

## 🐛 Troubleshooting: Halaman Blank

### **Masalah: CSS/JS Tidak Ditemukan (404 Error)**

**Penyebab:**
- Path di HTML masih absolut (`/assets/...`) bukan relatif (`./assets/...`)
- Base path tidak cocok dengan struktur folder

**Solusi:**

**1. Cek `index.html`:**
```html
<!-- ❌ SALAH - Path absolut -->
<script type="module" src="/src/main.jsx"></script>

<!-- ✅ BENAR - Path relatif -->
<script type="module" src="./src/main.jsx"></script>
```

**2. Cek `vite.config.js`:**
```javascript
// ❌ SALAH
base: '/react-counter-practice/'

// ✅ BENAR (untuk sub-path)
base: './'
```

**3. Rebuild & deploy ulang:**
```bash
rm -r dist
npm run deploy
```

**4. Clear cache browser:**
- Ctrl+Shift+Delete → Clear all
- Atau gunakan Incognito Mode (Ctrl+Shift+N)

---

## 📝 Checklist Deployment

- [x] Update `vite.config.js` dengan `base: './'`
- [x] Install `gh-pages` dengan `npm install --save-dev gh-pages`
- [x] Tambahkan script `predeploy` dan `deploy` ke `package.json`
- [x] Jalankan `npm run deploy` di terminal
- [x] Tunggu ~2 menit untuk GitHub Pages publish
- [x] Konfigurasi GitHub Pages Settings (branch `gh-pages`, folder `/`)
- [x] Clear browser cache & refresh
- [x] Verifikasi aplikasi berfungsi di live URL ✅

---

## 🎓 Pembelajaran Kunci

### **1. Base Path vs Relative Path**
```javascript
// Base path ABSOLUT (untuk domain root)
base: '/react-counter-practice/'
// Output: /react-counter-practice/main.js
// Bekerja jika di: github.com/username/react-counter-practice

// Base path RELATIF (untuk sub-path)
base: './'
// Output: ./main.js
// Bekerja di mana saja, termasuk sub-path
```

### **2. Deployment Workflow**
```
Local dev (npm run dev)
    ↓
Build production (npm run build)
    ↓
Generate dist/ folder
    ↓
Deploy ke gh-pages branch (npm run deploy)
    ↓
GitHub Pages publish
    ↓
Live URL siap! 🎉
```

### **3. GitHub Pages Limitations**
- ⚠️ Hanya bisa host file statis (HTML, CSS, JS)
- ⚠️ Tidak bisa backend/server-side rendering
- ⚠️ Gratis, unlimited bandwidth
- ✅ Perfect untuk portfolio, demo, project kecil

---

## 🚀 Setelah Deploy Berhasil

Sekarang Counter App Anda sudah live! Apa yang bisa dilakukan selanjutnya:

1. **Share link aplikasi** - Tunjuk ke teman/portfolio
2. **Tambah fitur** - Reset button, batasan nilai, dll
3. **Improve styling** - Buat lebih cantik dengan CSS
4. **Deploy ulang** - Setiap edit, cukup jalankan `npm run deploy`
5. **Dokumentasi README** - Tulis di `README.md` cara pakai aplikasi

---

## 📌 File yang Dimodifikasi untuk Deployment

| File | Perubahan |
|------|-----------|
| `vite.config.js` | Ditambah `base: './'` |
| `package.json` | Ditambah script `predeploy` dan `deploy` |
| `index.html` | Ubah ke path relatif `./src/main.jsx` |
| **New:** `gh-pages` package | Installed untuk deployment automation |
| **New:** `dist/` folder | Generated saat `npm run build` |
| **New:** Branch `gh-pages` | Dibuat oleh `gh-pages` package, digunakan GitHub Pages |

---

**Dokumentasi dibuat pada:** 16 Januari 2026

**Untuk pertanyaan lebih lanjut:** 
- Lihat [dokumentasi Vite - Deploying Static Site](https://vite.dev/guide/static-deploy.html)
- Lihat [dokumentasi GitHub Pages](https://docs.github.com/en/pages)
- Lihat [dokumentasi gh-pages npm package](https://www.npmjs.com/package/gh-pages)
