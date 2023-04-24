### 1. Write a command to the task-1.txt which will check if 1-solution-app.js has no syntax error

#### Solution:
```shell
node --check 1-solution-app.js
```

#### Alternative Solution:
```shell
node -c 1-solution-app.js
```

---

### 2. Write a command which will run a simple addition 1 + 1 and print the result

#### Solution:
```shell
node --eval "console.log(1+1);"
```

#### #1 Alternative Solution:
```shell
node -e "console.log(1+1);"
```

#### #2 Alternative Solution:
```shell
node --print "1+1"
```

#### #3 Alternative Solution:
```shell
node -p "1+1"
```

---

### 3. Write a command which will run a simple addition 1 + 1 and don't print the result

#### Solution:
```shell
node --eval "1+1" 
```

#### #1 Alternative Solution:
```shell
node -e "1+1" 
```

---

### 4. Write a command which will write numbers from 1 to 100 to num.txt
*Note here: -p flag is not an option, because it will return with an undefined.*
```shell
node --eval "for(let num = 1; num <= 100; num++) console.log(num)" > num.txt
```

#### #1 Alternative Solution:
```shell
node -e "for(let num = 1; num <= 100; num++) console.log(num)" > num.txt
```

---

### 5. Write a command which will list out all the command line flags
*Note here: -p flag is not an option, because it will return with an undefined.*
```shell
node --help
```

#### #1 Alternative Solution:
```shell
node -h
```

---

### 6. Write a command which will list out all the commands to modify the v8
*Note here: -p flag is not an option, because it will return with an undefined.*
```shell
node --v8-options
```

---

### 7. Write a command which will read the current directory and print into the console.
```shell
node --eval "fs.readdirSync('.').forEach(file => console.log(file))"
```

#### #1 Alternative Solution:
```shell
node -e "fs.readdirSync('.').forEach(file => console.log(file))"
```

---

### 8. Create a preload.js script which will put an apple property with some string value to the global object and print out to the console with inline node script.
```shell
node -r ./8-solution-preload.js -e "console.log(global.apple);"
```

#### #1 Alternative Solution:
```shell
node --require ./8-solution-preload.js -e "console.log(global.apple);"
```

### 9. Create an error.js file which will throw an error at the 999th run, and print out the first 3 row of the stack trace
```shell
node --stack-trace-limit=3 ./9-solution-error.js
```
*Note: if you use the flags after the js file it won't work. Wrong example:*
```shell
node ./9-solution-error.js --stack-trace-limit=3
```