module.exports = {
  rules: {
    'no-use-before-define': ['error', {
      classes: true,
      functions: true,
      variables: false
    }],

    'react/prop-types': ['error', { 'ignore': ['children', 'style', 'navigation', 'dispatch'] }]
  }
}
