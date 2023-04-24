const myObj = {
    randomNumber: 5,
    myFn: () => {
        console.log('Hello From myFn', this);
    }
}

const myObjAlternative = {
    randomNumber: 5,
    myFn: function () {
        console.log('Hello From myFn', this);
    }
}

const myObjAlternative2 = {
    randomNumber: 5,
    myFn() {
        console.log('Hello From myFn', this);
    }
}

myObj.myFn();
myObjAlternative.myFn()
myObjAlternative2.myFn()