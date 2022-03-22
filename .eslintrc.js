module.exports = {
  env: {
    browser: true,
  },
  extends: ["airbnb-angular"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      modules: true,
    },
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "import/extensions": 0,
  },
};
