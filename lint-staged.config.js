export default {
    '*.{js,jsx}': ['eslint'],
    '*.{ts,tsx}': [() => 'tsc --skipLibCheck --noEmit', 'eslint'],
}
