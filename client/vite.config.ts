import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'client',  // אם תיקיית ה-root היא client
  build: {
    rollupOptions: {
      input: 'client/index.html',  // הגדרת נתיב לקובץ index.html
    },
  },
})


