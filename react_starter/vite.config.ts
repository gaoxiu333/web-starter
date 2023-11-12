/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { join } from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": join(__dirname, "src"),
      "@components": join(__dirname, "src/components"),
      "@layout": join(__dirname, "src/layout"),
      "@api": join(__dirname, "src/api"),
      "@assets": join(__dirname, "src/assets"),
      "@views": join(__dirname, "src/views")
    }
  }
})
