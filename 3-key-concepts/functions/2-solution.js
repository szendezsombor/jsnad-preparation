function randomNumberFunctionFactory() {
    return function randomNumber() {
        return Math.random();
    }
}

console.log(randomNumberFunctionFactory()())