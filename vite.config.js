import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import withMT from "@material-tailwind/react/utils/withMT";

// https://vite.dev/config/
export default defineConfig(withMT({
  content: [],
  theme: {
    extend: {},
  },
  plugins: [react(), tailwindcss()],
}));
