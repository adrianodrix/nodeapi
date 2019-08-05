module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        'sourceType': 'module'
    },
    "rules": {
        'semi': ["error", "never"],
        'arrow-parens': ["error", "as-needed"],
        'import/no-unresolved': 'off',
        "no-restricted-globals": ["error", "event", "fdescribe"]
    }
};