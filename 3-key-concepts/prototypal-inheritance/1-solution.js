// Solution 1.

function inherit (proto) {
    function ChainLink(){}
    ChainLink.prototype = proto
    return new ChainLink()
}

function Mammal (legsCount) {
    this.legsCount = legsCount;
}

function Wolf(legsCount) {
    Mammal.call(this, legsCount)
}

Wolf.prototype = inherit(Mammal.prototype)

Wolf.prototype.howl = function () {
    console.log('awoooooooo')
}

function Dog (legsCount) {
    Wolf.call(this, legsCount)
}

Dog.prototype = inherit(Wolf.prototype)

Dog.prototype.bark = function () {
    Array.from(Array(this.legsCount).keys()).forEach(() => {
        console.log('Bark!')
    })
}

const dog = new Dog(3);
dog.bark();
dog.howl();

console.log(Object.getPrototypeOf(dog) === Dog.prototype)
console.log(dog.__proto__ === Dog.prototype)
console.log(dog.__proto__.__proto__ === Wolf.prototype)