//http://eslint.org/docs/rules/
/*global module*/
module.exports = {
    "env": {
        "es6": true,
        "browser": true
    },
    "parserOptions": {
        "sourceType": "module",
	    "ecmaVersion": 2017
    },
    "globals": {
    	"$": true,
    	"$$": true,
    	"Shared": true,
        "ServiceLayerClient": true,
        "DataStorage": true,
        "Loot": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "no-console": "off",
        "no-mixed-spaces-and-tabs": ["error", "smart-tabs"]
    }
};
