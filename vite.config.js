import { defineConfig } from 'vite';

export default defineConfig({
  base: 'ti-admin/designs/', // Ruta base de la aplicación
  build: {
    outDir: 'dist', // Carpeta de salida para los archivos generados
    assetsDir: 'assets', // Carpeta de activos (CSS, JS, imágenes, etc.)
  },
});
