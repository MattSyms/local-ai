import { existsSync, readdirSync } from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'
import { defineConfig } from 'vite'
import type { Plugin } from 'vite'

const src = resolve('src')

const modules = readdirSync(src, { withFileTypes: true })
  .filter((file) => { return file.isDirectory() })
  .map((file) => { return file.name })

const getAliases = (): Record<string, string> => {
  return Object.fromEntries(
    modules.map((m) => { return [m, join(src, m)] }),
  )
}

const getFailedResolutionAliases = (): Record<string, string> => {
  return {}
}

const getEntries = (dir: string): string[] => {
  const entries: string[] = []
  readdirSync(dir, { withFileTypes: true }).forEach((file) => {
    const path = join(dir, file.name)
    if (file.isDirectory()) {
      entries.push(...getEntries(path))
    } else if (file.isFile()) {
      entries.push(path)
    }
  })
  return entries
}

const isExternal = (source: string): boolean => {
  return !(
    source.startsWith(`${src}/`)
    || modules.some((m) => {
      return source === m || source.startsWith(`${m}/`)
    })
  )
}

const resolveIndexImports: Plugin = {
  name: 'resolve-index-imports',
  generateBundle: (options, bundle) => {
    for (const chunk of Object.values(bundle)) {
      if (chunk.type === 'chunk') {
        chunk.imports.forEach((path) => {
          const indexFile = join(src, path, 'index.ts')
          if (existsSync(indexFile)) {
            const importPath = relative(dirname(chunk.moduleIds[0]), indexFile)
              .replace(/^(?!\.)/u, './')
              .replace(/\.ts$/u, '.js')
            chunk.code = chunk.code.replace(
              new RegExp(`from "${path}"`, 'gu'),
              `from "${importPath}"`,
            )
          }
        })
      }
    }
  },
}

const config = defineConfig({
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      ...getAliases(),
      ...getFailedResolutionAliases(),
    },
  },
  build: {
    lib: {
      formats: ['es'],
      entry: getEntries(src),
    },
    outDir: 'dist',
    target: 'node22',
    minify: false,
    rollupOptions: {
      output: {
        format: 'esm',
        entryFileNames: '[name].js',
        preserveModules: true,
        preserveModulesRoot: src,
      },
      external: isExternal,
    },
  },
  plugins: [
    resolveIndexImports,
  ],
  optimizeDeps: {
    noDiscovery: true,
  },
})

export {
  config as default,
}
