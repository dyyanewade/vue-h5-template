declare interface ImportMetaEnv {
  readonly VITE_APP_TITLE: String;
  readonly VITE_APP_BUILD_FOLDER: String;
  readonly VITE_APP_AXIOS_URL: String;
  readonly VITE_API_URL: String;
  readonly VITE_USE_MOCK: Boolean;
  readonly VITE_USE_ERUDA: Boolean;
  readonly VITE_USE_COMPRESS: Boolean;
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv;
}
