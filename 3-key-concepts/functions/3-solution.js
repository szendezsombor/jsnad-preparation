function randomNumber() {
    return Math.random();
}

function callBackExecutor(callbackFunction) {
    return callbackFunction();
}

console.log(callBackExecutor(randomNumber))
