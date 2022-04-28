import { defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    includeSource: [
      'code/**/*.{js,ts}',
      // 'src/**/*.{ js, ts }'
    ],
  }
})
