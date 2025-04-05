// object literal
const person = {
    name : "John",
    age : 34
}
console.log(typeof person)

//Python class
// class Person:
//      def _init_(self, name, age):
//          self.name = name
//          self.age = age

//  p1 = Person('John', 35)

//Constructor
function Person(name, age){
    //copy param  values into object properties
    this.name = name
    this.age = age
    // this.greet = () => {
    //     console.log(`${name} is ${age} years old`)
    // }
}

Person.prototype.greet = () => {
    console.log(`${this.name} is ${this.age} years old`)
}

const p1 = new Person('Matt', 52)
const p2 = new Person ('Kate', 59)
p1.greet()
p2.age = 61
p2.greet()
console.log(p2)