import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/greenify/",
  resolve: {
    extensions: [".jsx", ".js", ".ts", ".tsx"],
  },
});
