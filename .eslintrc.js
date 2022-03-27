module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
        'eslint:recommended',
        'plugin:import/typescript',
        'plugin:import/recommended',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
        'no-console': 'off',
        'object-shorthand': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                parser: 'flow',
                trailingComma: 'es5',
                tabWidth: 4,
                semi: false,
            },
        ],
        'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.d.ts', '.tsx'],
        },
        'import/resolver': {
            node: {
                moduleDirectory: ['node_modules', 'src/'],
            },
            typescript: {
                alwaysTryTypes: true,
                project: '.',
                moduleDirectory: ['node_modules', 'src/'],
                paths: ['src'],
            },
        },
    },
}
