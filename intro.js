a = 1;
console.log(a);


console.log(Boolean('Hi'))
//Number
console.log(typeof('Hi'))
console.log(typeof(2))

console.log(1/2)
console.log(1/ "2")
console.log(1/0)
console.log(1/"hi")

//Explicit cast
x=2
console.log(1/Number(x))

//Array (list in python
const names = ['John', 'Jane', 'Bob']
const foo = ['Matt, 52, 184.5']
console.log(names[1])
names.push('Mary', 'Jason')
console.log(names)
const name = names.pop()
console.log(names)
console.log(name)

const bigArray = names.concat((foo))
console.log(bigArray)
console.log(names)

//Object - dictionary in Python
const person1 = {
    //python: "name":"John"
    name: "John",
    age:32,
    city: "Sydney"
}
console.log(person1.age)
Object.freeze(person1)
person1.country = 'Australia'
console.log(person1)

const person2={
    name = 'Sally',
    age: 45,
    address: {
        city: "Melbourne",
        country: "Melbourne"
    }}
const attr = promt('Which attrubute?')
console.log(person2.address[attr])
