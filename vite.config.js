import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        shop: resolve(import.meta.dirname, "shop.html"),
        oneproduct: resolve(import.meta.dirname, "oneproduct.html"),
        checkout: resolve(import.meta.dirname, "checkout.html"),
      },
    },
  },
});
