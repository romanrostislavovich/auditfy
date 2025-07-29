# Security Rules


### JavaScript

| Name                                                                                                                                                             | Description                                                                                                                   | ⚠️  |
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------| :-- |
| [detect-bidi-characters](https://github.com/eslint-community/eslint-plugin-security/tree/main/docs/rules/detect-bidi-characters.md)                              | Detects trojan source attacks that employ unicode bidi attacks to inject malicious code.                                      | ✅  |
| [detect-buffer-noassert](https://github.com/eslint-community/eslint-plugin-security/tree/main/docs/rules/detect-buffer-noassert.md)                              | Detects calls to "buffer" with "noAssert" flag set.                                                                           | ✅  |
| [detect-child-process](https://github.com/eslint-community/eslint-plugin-security/tree/main/docs/rules/detect-child-process.md)                                  | Detects instances of "child_process" & non-literal "exec()" calls.                                                            | ✅  |
| [detect-disable-mustache-escape](https://github.com/eslint-community/eslint-plugin-security/tree/main/docs/rules/detect-disable-mustache-escape.md)              | Detects "object.escapeMarkup = false", which can be used with some template engines to disable escaping of HTML entities.     | ✅  |
| [detect-eval-with-expression](https://github.com/eslint-community/eslint-plugin-security/tree/main/docs/rules/detect-eval-with-expression.md)                    | Detects "eval(variable)" which can allow an attacker to run arbitrary code inside your process.                               | ✅  |
| [detect-new-buffer](https://github.com/eslint-community/eslint-plugin-security/tree/main/docs/rules/detect-new-buffer.md)                                        | Detects instances of new Buffer(argument) where argument is any non-literal value.                                            | ✅  |
| [detect-no-csrf-before-method-override](https://github.com/eslint-community/eslint-plugin-security/tree/main/docs/rules/detect-no-csrf-before-method-override.md) | Detects Express "csrf" middleware setup before "method-override" middleware.                                                  | ✅  |
| [detect-non-literal-fs-filename](https://github.com/eslint-community/eslint-plugin-security/tree/main/docs/rules/detect-non-literal-fs-filename.md)              | Detects variable in filename argument of "fs" calls, which might allow an attacker to access anything on your system.         | ✅  |
| [detect-non-literal-regexp](https://github.com/eslint-community/eslint-plugin-security/tree/main/docs/rules/detect-non-literal-regexp.md)                        | Detects "RegExp(variable)", which might allow an attacker to DOS your server with a long-running regular expression.          | ✅  |
| [detect-non-literal-require](https://github.com/eslint-community/eslint-plugin-security/tree/main/docs/rules/detect-non-literal-require.md)                      | Detects "require(variable)", which might allow an attacker to load and run arbitrary code, or access arbitrary files on disk. | ✅  |
| [detect-object-injection](https://github.com/eslint-community/eslint-plugin-security/tree/main/docs/rules/detect-object-injection.md)                            | Detects "variable[key]" as a left- or right-hand assignment operand.                                                          | ✅  |
| [detect-possible-timing-attacks](https://github.com/eslint-community/eslint-plugin-security/tree/main/docs/rules/detect-possible-timing-attacks.md)              | Detects insecure comparisons (`==`, `!=`, `!==` and `===`), which check input sequentially.                                   | ✅  |
| [detect-pseudoRandomBytes](https://github.com/eslint-community/eslint-plugin-security/tree/main/docs/rules/detect-pseudoRandomBytes.md)                          | Detects if "pseudoRandomBytes()" is in use, which might not give you the randomness you need and expect.                      | ✅  |
| [detect-unsafe-regex](https://github.com/eslint-community/eslint-plugin-security/tree/main/docs/rules/detect-unsafe-regex.md)                                    | Detects potentially unsafe regular expressions, which may take a very long time to run, blocking the event loop.              | ✅  |

### HTML 

| Name                                                                        | Description                     | ⚠️ |
|:----------------------------------------------------------------------------|:--------------------------------|:---|
| [require-csp-nonce](https://html-validate.org/rules/require-csp-nonce.html) | Require CSP nonce for resources | ✅  |
| [require-sri](https://html-validate.org/rules/require-sri.html)	            | Require SRI for resources       | ✅  |