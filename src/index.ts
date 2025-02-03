import StylisticTs from '@stylistic/eslint-plugin-ts';
import TypeScript from '@typescript-eslint/eslint-plugin';
import TypeScriptParser from '@typescript-eslint/parser';
import { TSESLint } from '@typescript-eslint/utils';
import ImportHelpers from 'eslint-plugin-import-helpers';
import ImportNewlines from 'eslint-plugin-import-newlines';
import Jest from 'eslint-plugin-jest';
import UnusedImports from 'eslint-plugin-unused-imports';

export default [
  {
    files: [
      '**/*.js',
      '**/*.jsx',
      '**/*.ts',
      '**/*.tsx',
      '**/*.spec.js',
      '**/*.spec.jsx',
      '**/*.spec.ts',
      '**/*.spec.tsx'
    ],
    ignores: [
      'dist/**',
      'build/**',
      'out/**',
      '.next/**',
      '.nuxt/**',
      '.turbo/**',
      '**/node_modules/**',
      '**/.git/**',
      '**/.github/**',
      '**/.husky/**',
      '**/.vscode/**',
      '**/coverage/**'
    ],
    plugins: {
      'import-newlines': ImportNewlines,
      'unused-imports': UnusedImports,
      'import-helpers': ImportHelpers,
      '@stylistic': StylisticTs
    },
    rules: {
      'camelcase': 'error',
      'no-extra-semi': 'error',
      'comma-dangle': 'error',
      'prefer-const': 'error',
      'prefer-arrow-callback': 'error',
      'no-duplicate-imports': 'error',
      'no-case-declarations': 'error',
      'brace-style': 'error',
      'curly': 'error',
      'no-trailing-spaces': [ 'error', { ignoreComments: true } ],
      'indent': [ 'error', 2, { SwitchCase: 1 } ],
      'semi': [ 'error', 'always' ],
      'function-paren-newline': [ 'error', 'multiline' ],
      'no-inner-declarations': 'error',
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always'
        }
      ],
      'space-before-blocks': 'error',
      'arrow-spacing': 'error',
      'keyword-spacing': 'error',
      'switch-colon-spacing': 'error',
      'no-multi-spaces': 'error',
      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
          maxEOF: 1,
          maxBOF: 0
        }
      ],
      'key-spacing': [
        'error',
        {
          'afterColon': true
        }
      ],
      'object-curly-spacing': [
        'error',
        'always'
      ],
      'array-bracket-spacing': [
        'error',
        'always'
      ],
      'quotes': [
        'error',
        'single',
        {
          allowTemplateLiterals: false
        }
      ],
      'no-implied-eval': 'off',
      'no-loss-of-precision': 'off',
      'no-unused-vars': 'off',
      'require-await': 'off',
      'space-in-parens': [ 'error', 'never' ],
      'unused-imports/no-unused-imports': 'error',
      'no-restricted-imports': [
        'error',
        {
          'patterns': [
            './*',
            '../*'
          ]
        }
      ],
      '@stylistic/lines-between-class-members': [ 'error', 'always', { exceptAfterSingleLine: false } ],
      '@stylistic/padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: 'const',
          next: 'return'
        },
        {
          blankLine: 'always',
          prev: 'const',
          next: 'if'
        },
        {
          blankLine: 'always',
          prev: 'let',
          next: 'return'
        },
        {
          blankLine: 'always',
          prev: 'let',
          next: 'if'
        },
        {
          blankLine: 'always',
          prev: 'var',
          next: 'return'
        },
        {
          blankLine: 'always',
          prev: 'var',
          next: 'if'
        },
        {
          blankLine: 'always',
          prev: 'if',
          next: '*'
        },
        {
          blankLine: 'always',
          prev: 'export',
          next: '*'
        },
        {
          blankLine: 'never',
          prev: 'class',
          next: '*'
        },
        {
          blankLine: 'never',
          prev: 'export',
          next: '*'
        }
      ],
      '@stylistic/member-delimiter-style': 'error',
      'import-newlines/enforce': [
        'error',
        2,
        180
      ],
      'import-helpers/order-imports': [
        'error',
        {
          newlinesBetween: 'always',
          groups: [
            '/^reflect-metadata/',
            '/^react/',
            [
              '/^next/'
            ],
            [
              '/^i18next/',
              '/^i18next-fs-backend/'
            ],
            '/^@nestjs/',
            '/^class-transformer/',
            '/^class-validator/',
            [
              'module'
            ],
            [
              '/^@[^/]+\\/[^/]+(?:\\/[^/]+)?\\/controllers\\//',
              '/^@[^/]+\\/[^/]+(?:\\/[^/]+)?\\/controllers\\/(http|grpc|serializers|validators)/'
            ],
            [
              '/^@[^/]+\\/[^/]+(?:\\/[^/]+)?\\/middlewares\\//',
              '/^@[^/]+\\/[^/]+(?:\\/[^/]+)?\\/middlewares\\//(http|grpc)/'
            ],
            [
              '/^@[^/]+\\/[^/]+(?:\\/[^/]+)?\\/database\\//',
              '/^@[^/]+\\/[^/]+(?:\\/[^/]+)?\\/storage\\//',
              '/^@[^/]+\\/[^/]+(?:\\/[^/]+)?\\/storage\\//repositories\\/(interfaces|implementations)/',
              '/^@[^/]+\\/[^/]+(?:\\/[^/]+)?\\/storages\\//',
              '/^@[^/]+\\/[^/]+(?:\\/[^/]+)?\\/storages\\//repositories\\/(interfaces|implementations)/',
              '/^@[^/]+\\/[^/]+(?:\\/[^/]+)?\\/providers\\/(interfaces|implementations)/'
            ],
            [
              '/^@[^/]+\\/[^/]+(?:\\/[^/]+)?\\/services\\//',
              '/^@[^/]+\\/[^/]+(?:\\/[^/]+)?\\/usecases\\//'
            ],
            [
              '/^@[^/]+\\/[^/]+(?:\\/[^/]+)?\\/data\\//',
              '/^@[^/]+\\/[^/]+(?:\\/[^/]+)?\\/model\\//',
              '/^@[^/]+\\/[^/]+(?:\\/[^/]+)?\\/models\\//',
              '/^@[^/]+\\/[^/]+(?:\\/[^/]+)?\\/entity\\//',
              '/^@[^/]+\\/[^/]+(?:\\/[^/]+)?\\/entities\\//',
              '/^@[^/]+\\/[^/]+(?:\\/[^/]+)?\\/schemas\\//'
            ],
            [
              '/^@[^/]+\\/[^/]+(?:\\/[^/]+)?\\/cache\\//',
              '/^@[^/]+\\/[^/]+(?:\\/[^/]+)?\\/cache\\/(interfaces|implementations)/',
              '/^@[^/]+\\/[^/]+(?:\\/[^/]+)?\\/caches\\//',
              '/^@[^/]+\\/[^/]+(?:\\/[^/]+)?\\/caches\\/(interfaces|implementations)/',
              '/^@[^/]+\\/[^/]+(?:\\/[^/]+)?\\/queues\\//',
              '/^@[^/]+\\/[^/]+(?:\\/[^/]+)?\\/queues\\/(interfaces|implementations|bull|redis|memory|common)/'
            ],
            [
              '/^@[^/]+\\/[^/]+(?:\\/[^/]+)?\\/messages\\//',
              '/^@[^/]+\\/[^/]+(?:\\/[^/]+)?\\/messages\\/(interfaces|implementations)/'
            ],
            [
              '/^@[^/]+\\/[^/]+(?:\\/[^/]+)?\\/dtos\\//',
              '/^@[^/]+\\/[^/]+(?:\\/[^/]+)?\\/repositories\\/(interfaces|implementations)/'
            ],
            [
              '/^@[^/]+\\/[^/]+(?:\\/[^/]+)?\\/enums\\//',
              '/^@[^/]+\\/[^/]+(?:\\/[^/]+)?\\/exceptions\\//'
            ],
            [
              '/^@prisma/client/',
              '/^@[^/]+/exceptions/',
              '/^@[^/]+/environment/',
              'parent',
              'sibling',
              'index'
            ]
          ],
          alphabetize: {
            order: 'asc',
            ignoreCase: true
          }
        }
      ]
    }
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.spec.ts',
      '**/*.spec.tsx'
    ],
    languageOptions: {
      parser: TypeScriptParser,
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.json'
      }
    },
    plugins: {
      '@typescript-eslint': TypeScript
    },
    rules: {
      'jsx-quotes': [
        'error',
        'prefer-single'
      ],
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/triple-slash-reference': 'off',
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/ban-ts-comment': 'error',
      '@typescript-eslint/no-array-constructor': 'error',
      '@typescript-eslint/no-base-to-string': 'error',
      '@typescript-eslint/no-duplicate-enum-values': 'error',
      '@typescript-eslint/no-duplicate-type-constituents': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-extra-non-null-assertion': 'error',
      '@typescript-eslint/no-for-in-array': 'error',
      '@typescript-eslint/no-implied-eval': 'error',
      '@typescript-eslint/no-loss-of-precision': 'error',
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-namespace': 'error',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
      '@typescript-eslint/no-redundant-type-constituents': 'error',
      '@typescript-eslint/no-this-alias': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/no-unnecessary-type-constraint': 'error',
      '@typescript-eslint/no-unsafe-declaration-merging': 'error',
      '@typescript-eslint/no-unsafe-return': 'error',
      '@typescript-eslint/no-var-requires': 'error',
      '@typescript-eslint/prefer-as-const': 'error',
      '@typescript-eslint/restrict-plus-operands': 'error',
      '@typescript-eslint/restrict-template-expressions': 'error',
      '@typescript-eslint/unbound-method': 'error',
      '@typescript-eslint/no-empty-function': [
        'error',
        {
          'allow': []
        }
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          'args': 'all',
          'argsIgnorePattern': '^_',
          'caughtErrors': 'all',
          'caughtErrorsIgnorePattern': '^_',
          'destructuredArrayIgnorePattern': '^_',
          'varsIgnorePattern': '^_',
          'ignoreRestSiblings': true
        }
      ]
    }
  },
  {
    files: [
      '**/*.spec.js',
      '**/*.spec.jsx',
      '**/*.spec.ts',
      '**/*.spec.tsx'
    ],
    settings: {
      env: {
        jest: true
      }
    },
    plugins: {
      'jest': Jest
    },
    rules: {
      'jest/expect-expect': 'warn',
      'jest/no-alias-methods': 'error',
      'jest/no-commented-out-tests': 'warn',
      'jest/no-conditional-expect': 'error',
      'jest/no-conditional-in-test': 'error',
      'jest/no-deprecated-functions': 'error',
      'jest/no-disabled-tests': 'error',
      'jest/no-done-callback': 'error',
      'jest/no-export': 'error',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/no-interpolation-in-snapshots': 'error',
      'jest/no-jasmine-globals': 'error',
      'jest/no-mocks-import': 'error',
      'jest/no-standalone-expect': 'error',
      'jest/no-test-prefixes': 'error',
      'jest/valid-describe-callback': 'error',
      'jest/valid-expect': 'error',
      'jest/valid-expect-in-promise': 'error',
      'jest/valid-title': 'error'
    }
  },
  {
    files: [ 'eslint.config.mjs' ],
    rules: {
      'semi': [ 'error', 'always' ],
      'no-extra-semi': 'error',
      'comma-dangle': 'error',
      'quotes': [
        'error',
        'single',
        {
          allowTemplateLiterals: false
        }
      ]
    }
  }
] satisfies TSESLint.FlatConfig.Config[];
