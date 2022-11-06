import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  console.log(command);

  if (command === 'serve') {
    return {
      plugins: [react()],
      test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/test/setup.ts',
      },
    };
  } else {
    return {
      base: '/wow-classic-prof-skill-calculator/',
      plugins: [react()],
    };
  }
});
