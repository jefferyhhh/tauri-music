import antfu from '@antfu/eslint-config'

export default antfu(
  {
    files: ['src/**/*.{ts,tsx,js,jsx,vue}'],
  },
  {
    ignores: ['tsconfig.json'],
  },
)
