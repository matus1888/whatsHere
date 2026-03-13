//// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PROXY: string;
  readonly VITE_MY_POST: string;
  readonly VITE_MY_TG: string;
  readonly VITE_MY_PHONE: string;
  readonly DEV: string; 
  // добавьте другие переменные...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}// <reference types="vite/client" />
