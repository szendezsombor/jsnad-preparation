function myFn() {
    console.log(this);
}

myFn.bind({ id: 'my-id-1234'}).call() // Solution 1
myFn.call({ id: 'my-id-1234'}) // Solution 2