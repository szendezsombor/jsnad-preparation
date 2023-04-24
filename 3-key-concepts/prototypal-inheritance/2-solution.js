class Mammal {
    legsCount;

    constructor(legsCount) {
        this.legsCount = legsCount;
    }
}

class Wolf extends Mammal {
    howl() {
        console.log('AWOOOOOOOOOO')
    }

}

class Dog extends Wolf {
    bark() {
        Array.from(Array(this.legsCount).keys()).forEach(() => {
            console.log('Bark!')
        })
    }
}

const dog = new Dog(3);
dog.bark();
dog.howl();

console.log(Object.getPrototypeOf(dog) === Dog.prototype)
console.log(dog.__proto__ === Dog.prototype)
console.log(dog.__proto__.__proto__ === Wolf.prototype)