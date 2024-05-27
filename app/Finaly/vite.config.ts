import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Escuta em todas as interfaces de rede
    port: 5173, // Porta padrão do Vite
  }
})
