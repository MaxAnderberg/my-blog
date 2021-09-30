module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  parser: "babel-eslint",
  rules: {
    strict: 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/prop-types": 0,
    "import/no-extraneous-dependencies": 0

    
  },
  extends: [
    "airbnb"
  ]
};