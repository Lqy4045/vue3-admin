import type { ConfigEnv, UserConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import { loadEnv } from 'vite'
import { createVitePlugins } from './plugins'
const baseSrc = fileURLToPath(new URL('./src', import.meta.url))

export default ({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: createVitePlugins(env),
    resolve: {
      alias: {
        '@': baseSrc,
      },
    },
  }
}
