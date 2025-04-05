// python
// def add(x,y):
//   return x+y

function add(x, y) {
    return x + y
}

console.log(add(10, 34));

(function () {
    console.log(`foo`)
})();


// lambda (x,y) : x + y
// function add(x,y) {return x+y }
// console.log(add(10,24))

const add2 = (x, y) => {return x+y}
const square = (x) => x**2
console.log(square(5))

numbers = [1, 2, 3, 4, 5]
const result = numbers.map(x => x **3)
console.log(result)