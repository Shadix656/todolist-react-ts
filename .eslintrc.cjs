module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "airbnb-typescript",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": './tsconfig.json',
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "prettier"
    ],
    rules: {
        'import/prefer-default-export': 'off',
        "prettier/prettier": ["error"],
        'react/jsx-filename-extension': [2, {'extensions': ['.js', '.jsx', '.ts', '.tsx']}],
        "react/require-default-props": [
            "error",
            {
                "forbidDefaultForRequired": true,
                "functions": "defaultArguments"
            }
        ]
    },
}
