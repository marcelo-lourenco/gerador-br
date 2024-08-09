import globals from "globals";
import pluginJs from "@eslint/js";
import js from "@eslint/js";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,


  // apply recommended rules to JS files
  {
    files: ["**/*.js"],
    rules: js.configs.recommended.rules
  },

  // apply recommended rules to JS files with an override
  {
    files: ["**/*.js"],
    rules: {
      ...js.configs.recommended.rules,
      //"one-var": ["error", {let: "never", const: "never" }],
      "no-unused-vars": "warn",
      //"no-inline-comments": "off",
      //"no-console": "off",  
    }
  },

  // apply all rules to JS files
 //{
 //  files: ["**/*.js"],
 //  rules: {
 //    ...js.configs.all.rules,
 //    "no-unused-vars": "warn"
 //  }
 //}
]