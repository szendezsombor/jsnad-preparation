### 1. Write a command which install all dependencies

#### Solution:
```shell
npm install
```

---

### 2. Write a command which install only the production dependencies

#### Solution:
```shell
npm install --prod
```
*It will also download the peer dependencies from the package.json "peerDependencies" array.*
*Peer dependencies are a special type of dependency that would only ever come up if you were publishing your own package.*

---

### 3. Write a command which will get a list of the options and help options

#### Solution:
```shell
npm install --help
```

---

### 4. Write a command which will init a repo requesting some input

#### Solution:
```shell
npm init
```

---

### 5. Write a command which will init a without requesting input and use default

#### Solution:
```shell
npm init -y
```

---

### 6. Write a command which will install a the jose dependency latest version

#### Solution:
```shell
npm init jose
```

#### Alternative Solution:
```shell
npm init jose@latest
```

---

### 7. Write a command which will install a the jose dependency with the 3 major version

#### Solution:
```shell
npm init jose@3
```

---

### 8. Write a command which will list out all the installed dependency graph with a depth of 99

#### Solution:
```shell
npm ls --depth=99
```

---

### 9. Create a package json which has 3 dependencies (exam question)
- jose library 3 with fixed major version minor and patch can change
- paseto libary as a dev dependency greater or equal than 3.1.0
- @panva/hkdf peer dependency with an exact version of 1.1.1
#### Solution:
package.json
```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "jose": "^3.0.0"
  },
  "devDependencies": {
    "paseto": ">=3.1.4"
  },
  "peerDependencies": {
    "@panva/hkdf": "1.1.1"
  }
}
```

---

### 10. Create a .npmrc file with a configuration to not generate a pacakage-lock.json file

#### Solution:
.npmrc
```
package-lock=false
```

---