import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'

/** @type {import('eslint').Linter.Config[]} */
const config = [
  ...nextCoreWebVitals,
  {
    rules: {
      // React Hooks plugin v7 (bundled with eslint-config-next 16) flags patterns
      // that are still common in this demo (sync setState in effects, Slate editor
      // mutation). Revisit when refactoring demos for React 19.
      'react-hooks/set-state-in-effect': 'off',
      'react-hooks/immutability': 'off',
    },
  },
]

export default config
