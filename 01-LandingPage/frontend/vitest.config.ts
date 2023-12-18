import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname),
    },
  },
  test: {
    environment: 'jsdom',
    env: { NEXT_PUBLIC_API_URL: 'http://backend:4000' },
    include: ['__test__/**/*.Test.tsx'],
  },
})
