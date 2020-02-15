module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: ['standard'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        // etc.
        'no-multi-spaces': 0, // 0: 複数個の連続する空白を許可.
        'no-multiple-empty-lines': 0, // 0: 複数行の空行を許可.
        'comma-dangle': 1, // 0: 最終要素の次のカンマを許可.
        indent: 0, // switch~case, one-var, comment, その他に影響.
        'one-var': 0,
    },
}
