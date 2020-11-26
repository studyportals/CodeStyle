# CodeStyle
Default linting configurations to use in Studyportals repositories.

Please send pull requests to the Stefan Klokgieters, Rob van den Hout or Frank Kluijtmans if you think you want to suggest changes.

## Install
You can add CodeStyle as a dependency to your project by running the following command:

```bash
npm install @studyportals/code-style --save-dev
```

## How To Use
When you installed the package you can simply *extend* from the configuration files inside the CodeStyle package.

ESLint 
```json
// package.json
"eslintConfig": {
    "extends": "./node_modules/@studyportals/code-style/.eslintrc.js",
    "parserOptions": {
        "sourceType": "module"
    }
}
```

TSLint
```json
// tslint.json
{
    "extends": "./node_modules/@studyportals/code-style/tslint.json"
}
```

By extending from the linting config files in CodeStyle you are ensuring that you are using the same configuration as we use in our Super Linter configuration.

If you would like to use the configurations for the PHP and SCSS linters you would have to copy it from this projects source.
