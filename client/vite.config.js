
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// @type {import('tailwindcss').Config}
export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", // 👈 Add this
  ],
  theme:{
    extend:{
      fontFamily:{
        lato: ["Lato", "sans-serif"]
      },
    }
  },
  plugins: [react(), tailwindcss()],

  
})
