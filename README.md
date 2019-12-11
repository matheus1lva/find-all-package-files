# find-all-package-files
This scans all folders recursively (excluding node_modules) and outputs an array containing the location of all `package.json` files.

This is a dependency free, 20 lines module!

# Installation

```sh
$ npm install find-all-package-files
```

# Usage

```js
const findAllPackages = require('find-all-package-files');
const files = findAllPackages();
```

This is going to use the current directory as the main root, if you want to start from any other place, just pass it to the function.


```js
const findAllPackages = require('find-all-package-files');
const files = findAllPackages('./test/');
```
