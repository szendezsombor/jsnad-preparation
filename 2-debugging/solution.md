### 1. Write a command to the task-1.txt which will check if 1-solution-app.js has no syntax error (exam question)

#### Solution:
```shell
node --inspect-brk app.js
```
*You can view the debugger on: chrome://inspect*

---

### 2. Run the app.js in regular debug mode and stop on first executable line on port 5000

#### Solution:
```shell
node --inspect-brk=0.0.0.0:5000 app.js
```
*You can view the debugger on: chrome://inspect*

---

### 3. Create a file with name of "3-solution-app.js" which will log "apple" at first and stop automatically on the second line and run it in debug mode on port 5000.
#### Solution:
```shell
node --inspect-brk=0.0.0.0:5000 3-solution-app.js
```
*You can view the debugger on: chrome://inspect*
