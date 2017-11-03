module.exports = {
  extends: ['eslint-config-airbnb'].map(require.resolve),

  env: {
    'browser': true,
    'es6': true,
  },

  parser: 'babel-eslint',

  parserOptions: {
    'ecmaVersion': 6,
    'ecmaFeatures': {
      'jsx': true,
      'experimentalObjectRestSpread': true,
    },
  },

  plugins: [
    'babel',
    'react',
    'import',
  ],

  rules: {
    // main rules
    'comma-dangle': ['error', 'always-multiline'],
    'max-len': ['error', 120, 2, { 'ignoreUrls': true }],
    'semi': ['error', 'never'],
    'class-methods-use-this': 'off',
    'space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'always',
    }],
    'arrow-parens': ['error', 'as-needed', {
      'requireForBlockBody': false,
    }],
    'function-paren-newline': ['off'],
    'object-curly-newline': ['error', {
      'ObjectExpression': { minProperties: 10, multiline: true, consistent: true },
      'ObjectPattern': { minProperties: 10, multiline: true, consistent: true }
    }],
    'no-unused-vars': ['error', { vars: 'all', args: 'none', ignoreRestSiblings: true }],
    'no-use-before-define': ['error', {
      'functions': true,
      'classes': true,
      'variables': true,
    }],
    'no-param-reassign': ['error', {
      'props': false,
    }],
    'no-mixed-operators': 'off',
    'no-restricted-syntax': 'off',
    'no-plusplus': 'off',
    'no-bitwise': 'off',
    'no-shadow': ['error', {
      'allow': ['_', 'error'],
    }],
    'no-underscore-dangle': ['error', {
      'allow': [],
      'allowAfterThis': true,
      'allowAfterSuper': true,
      'enforceInMethodNames': false,
    }],
    'no-unused-expressions': ['error', {
      'allowShortCircuit': true,
      'allowTernary': true,
      'allowTaggedTemplates': false,
    }],

    // react rules
    'react/jsx-closing-bracket-location': ['error', 'after-props'],
    'react/jsx-filename-extension': ['error', { 'extensions': ['.js', '.jsx'] }],

    // jsx-a11y
    'jsx-a11y/no-static-element-interactions': ['off'],

    // import rules
    'import/named': ['error'],
    'import/namespace': ['error'],
    'import/newline-after-import': ['error', {
      'count': 1,
    }],
    'import/no-extraneous-dependencies': ['error'],
    'import/no-mutable-exports': ['error'],
    'import/no-unresolved': ['error', {
      'commonjs': true,
    }],
  },

  settings: {
    'import/core-modules': ['electron'],
    'import/extensions': ['.js', '.jsx'],
  },
}
