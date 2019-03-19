# CodeStyle
Default CodeClimate configurations for use in Studyportals repositories.

If you want to add or update your configuration, take the .codeclimate.yml file and add it to the root of your repository.

Please send pull requests if you think you have a new default setting for the engines.

## Install

You can add CodeStyle as a dependency to your project by running the following command:

```bash
npm install @studyportals/code-style
```

## How To Use

When you have installed the package you can simply extend from the configurations inside the CodeStyle package.

Example ESLint 
```json
"eslintConfig": {
    "extends": "./node_modules/@studyportals/code-style/.eslintrc.js",
    "parserOptions": {
        "sourceType": "module"
    }
}
```

Example TSLint
```json
{
    "extends": "./node_modules/@studyportals/code-style/tslint.json"
}
```

By extending from the linting config files in CodeStyle you are ensuring that you are using the same configuration as we use in our CodeClimate configuration.

## Linting Dependencies

In order to guarantee the same linting behaviour as in CodeClimate we added the right versions of `eslint` and `tslint` as peer dependencies to this package. Please find which version we are using right now in the table below:

| Linter | Version |
|---|---|
| ESLint | `5.7.0` |
| TSLint | `5.9.1` |

## Linting configurations

### ESLint

For ESLint we extend from the `eslint:recommended`.

### TSLint

For TSLint we extend from the `tslint:recommended`.

