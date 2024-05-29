module.exports = {
  // Register the prettier plugin for stylelint.
  plugins: ['stylelint-prettier'],
  // Inherit a set of rule collections.
  extends: [
    // standard rule set
    'stylelint-config-standard',
    'stylelint-config-recommended-less',
    // Style property order rules
    'stylelint-config-recess-order',
    // Incorporate Prettier rules
    'stylelint-config-prettier',
    'stylelint-prettier/recommended'
  ],
  // Configure rules
  rules: {
    // Enable Prettier auto-formatting
    'prettier/prettier': true
  }
};
