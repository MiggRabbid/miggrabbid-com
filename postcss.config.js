module.exports = {
  syntax: 'postcss-scss',
  plugins: {
    'postcss-import': {},
    'postcss-apply': {
      resolver: 'postcss-selector-resolve',
    },
    tailwindcss: {},
    autoprefixer: {},
  },
};
