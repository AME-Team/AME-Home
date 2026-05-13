module.exports = {
  '**/*.{ts,tsx}': ['npm run typecheck', 'eslint --fix'],
  '**/*.{css,scss}': ['stylelint --fix'],
}
