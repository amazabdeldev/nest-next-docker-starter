// @ts-check
import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const eslingConfig = defineConfig(
    {
        ignores: [
            '**/node_modules/**',
            '**/dist/**',
            // '**/prisma/migrations/**',
            // 'src/generated/**',
            'eslint.config.mjs',
        ],
    },
    eslint.configs.recommended,
    ...tseslint.configs.stylistic,
    ...tseslint.configs.stylisticTypeChecked,
    ...tseslint.configs.recommendedTypeChecked,
    eslintConfigPrettier,
    eslintPluginPrettierRecommended,
    {
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.jest,
            },
            sourceType: 'module',
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname,
                parser: tseslint.parser,
            },
        },
    },
    {
        rules: {
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-floating-promises': 'warn',
            '@typescript-eslint/no-unsafe-argument': 'warn',
            '@typescript-eslint/no-unsafe-assignment': 'warn',
            '@typescript-eslint/no-unsafe-call': 'warn',
            '@typescript-eslint/no-unsafe-member-access': 'warn',
            '@typescript-eslint/no-unsafe-return': 'warn',
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/no-inferrable-types': 'warn',
            '@typescript-eslint/naming-convention': 'warn',

            'prettier/prettier': [
                'warn',
                {
                    semi: true,
                    tabWidth: 4,
                    printWidth: 80,
                    endOfLine: 'auto',
                    singleQuote: true,
                    arrowParens: 'avoid',
                    bracketSpacing: true,
                    trailingComma: 'all',
                    bracketSameLine: false,
                    experimentalTernaries: false,
                    experimentalOperatorPosition: 'end',
                },
            ],
        },
    },
);
export default eslingConfig;
