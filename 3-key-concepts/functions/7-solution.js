const thisContext = { someData: 'lorem ipsum', someOtherData: 1}

// Solution 1
function parentFn() {
    return () => {
        console.log(this)
    }
}

parentFn.bind(thisContext)()();
parentFn.call(thisContext)();

// Solution 2
function parentFn2() {
    return function () {
        console.log(this)
    }.bind(this)
}

parentFn2.bind(thisContext)()();
parentFn2.call(thisContext)();