import javascript from '@apeframework/eslint/javascript'
import typescript from '@apeframework/eslint/typescript'

const config = [
  {
    ignores: [
      'dist',
    ],
  },
  {
    files: ['*.ts', '**/*.ts'],
    ...javascript(),
  },
  {
    files: ['*.ts', '**/*.ts'],
    ...typescript(),
  },
]

export {
  config as default,
}
