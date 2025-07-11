# Template Portfolio

Template portfolio modern yang dibangun dengan React, TypeScript, dan Vite. Desain responsif dengan Tailwind CSS untuk menampilkan proyek dan keterampilan Anda dengan profesional.

![Portfolio Preview](./preview.png)

## 🚀 Fitur

- ⚡ **Vite** - Build tool yang cepat dan modern
- ⚛️ **React 18** - Library UI terdepan
- 🏷️ **TypeScript** - Type safety untuk JavaScript
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📱 **Responsive Design** - Tampilan optimal di semua perangkat
- 🛠️ **ESLint** - Code linting untuk kualitas kode
- 🔧 **PostCSS** - Tool untuk transformasi CSS

## 🛠️ Installation

1. **Clone repository**
   ```bash
   git clone https://github.com/username/Template-Portfolio.git
   cd Template-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan development server**
   ```bash
   npm run dev
   ```

4. **Buka browser** dan akses `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Menjalankan development server
- `npm run build` - Build aplikasi untuk production
- `npm run preview` - Preview build production secara lokal
- `npm run lint` - Menjalankan ESLint untuk check kode

## 🎨 Kustomisasi

### Tailwind CSS
Sesuaikan tema dan styling di `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Tambahkan warna custom
      },
      fontFamily: {
        // Tambahkan font custom
      }
    }
  }
}
```

### Komponen
Tambahkan komponen baru di folder `src/components/` dan import ke `App.tsx`.

## 📦 Build Production

Untuk membuat build production:
```bash
npm run build
```

File hasil build akan tersimpan di folder `dist/` dan siap untuk di-host di server web apapun.

---

⭐ Jangan lupa berikan star jika project ini membantu Anda!