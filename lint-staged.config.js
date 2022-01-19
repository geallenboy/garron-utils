module.exports = {
  ignore: ["package-lock.json", "CHANGELOG.md"],
  linters: {
    'src/**/*.{js,ts}': ["prettier --write", "eslint --fix", "git add"],
  }
};
