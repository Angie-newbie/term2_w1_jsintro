// object literal
const person = {
    name : "John",
    age : 34
}
console.log(typeof person);

//Python class
// class Person:
//      def _init_(self, name, age):
//          self.name = name
//          self.age = age

//  p1 = Person('John', 35)

// //Constructor
// function Person(name, age){
//     //copy param  values into object properties
//     this.name = name
//     this.age = age
//     // this.greet = () => {
//     //     console.log(`${name} is ${age} years old`)
//     // }
// }

// //Attach greet method to the prototype
// Person.prototype.greet = () => {
//     console.log(`${this.name} is ${this.age} years old`)
// }


class Person {
    constructor(name, age){
    //copy param  values into object properties
        this.name = name
        this.age = age
    }

    greet = () => {
        console.log(`${this.name} is ${this.age} years old`)
    }
}

const p1 = new Person('Matt', 52)
const p2 = new Person ('Kate', 59)
p1.greet()
p2.age = 61
p2.greet()
console.log(p2)

class Rectangle {
    constructor(width,height) {
        this.width = width
        this.height = height

    }

    get width() {
        return this._width
    }

    set width(value){
        //check auth
        // validate value
        this._width = value
    }

    get area() {
        //Check autg
        //if (auth) {}
        return this.height * this.width
        // else (raise an exception)
    }
}

const r1 = new Rectangle(10,20)
r1.width = 5
console.log(r1.area)

// Inneritance
// Python
// class Square(Rectangle):

class Square extends Rectangle {
    constructor(size){
        super(size, size)
    }

}

const s1 = new Square(10)
console.log(s1)
console.log(s1.area)
