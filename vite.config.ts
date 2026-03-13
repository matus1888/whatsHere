import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";

// TODO rewrite cookie params
// https://vite.dev/config/
export default defineConfig({
  base: "whatsHere",
  build: {
    assetsDir: "./whatsHere/assets",
  },
  plugins: [react(), mkcert()],
  server: {
    proxy: {
      "/proxy": {
        target: (function () {
          const { VITE_PROXY } = loadEnv(process.env.NODE_ENV, "./", "VITE_");
          console.warn("(!) in proxy call use PROXY =", VITE_PROXY);
          return VITE_PROXY;
        })(),
        // changeOrigin: true,
        cookieDomainRewrite: (function () {
          if (process.env.NODE_ENV === "development") {
            const cookieDomainRewrite = "localhost";
            console.warn("(!) cookieDomainRewrite =", cookieDomainRewrite);
            return cookieDomainRewrite;
          }
        })(),
        secure: false,
        rewrite: (path) => {
          const rewrited = path.replace(/^\/proxy/, "");
          // console.log("rewrite working", rewrited, path);
          return rewrited;
        },
        configure: (proxy, options) => {
          if (process.env.NODE_ENV === "development") {
            proxy.on("proxyReq", (proxyReq, req, res) => {
              proxyReq.setHeader("Origin", "https://matus1888.github.io");
            });
          }
        },
      },
    },
    // proxy: {
    //   "/api": {
    //     target: "https://sandbox.matus.netcraze.club",
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ""),
    //     cookieDomainRewrite: "127.0.0.1",
    //   },
    // },
  },
});
