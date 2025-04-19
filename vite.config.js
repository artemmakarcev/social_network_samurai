import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/social_network_samurai/",
  server: {
    port: 3000,
  },
  plugins: [react()],
});
