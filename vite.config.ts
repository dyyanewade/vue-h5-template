import { ConfigEnv, loadEnv, UserConfig } from 'vite';
import { getRootPath, getSrcPath, wrapperEnv, createVitePlugins } from './build';

// const pathResolve = (dir: string) => {
//   return resolve(process.cwd(), ".", dir);
// };

// https://vitejs.dev/config/
export default function ({ command, mode }: ConfigEnv): UserConfig {
  const isProduction = command === 'build';
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const rootPath = getRootPath();
  const srcPath = getSrcPath();
  const viteEnv = wrapperEnv(env);

  return {
    root,
    resolve: {
      alias: {
        '~': rootPath,
        '@': srcPath
      }
    },

    server: {
      port: 8888,
      host: true,
      open: true,
      cors: true
      // 设置代理，根据我们项目实际情况配置
      // proxy: createViteProxy(isOpenProxy, envConfig)
      // proxy: {
      // 	'/Api': {
      // 		// 跟axios中的baseUrl相关联
      // 		target: env.VITE_API_URL,
      // 		changeOrigin: true,
      // 		rewrite: (path) => path.replace('/Api/', ''),
      // 	},
      // },
    },
    plugins: createVitePlugins(viteEnv, isProduction),
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          //生产环境时移除console
          drop_console: true,
          drop_debugger: true
        }
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "./src/styles/scss/index.scss" as *;`
        }
      }
    }
  };
}
