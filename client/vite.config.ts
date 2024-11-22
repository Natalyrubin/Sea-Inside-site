import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  root: 'client',  // הוספת הגדרה זו מציינת ש-Vite ימצא את index.html בתיקיית ה-client
  build: {
    outDir: '../dist',  // אם תרצה לשמור את הקבצים בתיקיית dist בשורש הפרויקט
  },
})