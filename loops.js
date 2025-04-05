//Python
//count = 4
//while count > 0 :
//  print(count)
//  count -= 1


// let count = 4
// while (count > 0) {
//     console.log(count)
//     count --
// } ;

//Python
//for i in range(10)
//  print(i)

// 3 parts for loop
// for (Initializer; condition; post-iter)
// initialzer: runs once, before the first iteration
// condition: will be test before each iteration
// post- iter: will be evaluated after every iteration

// for(let i = 0; i < 10; i++) {
//     console.log(i)
// }

const numbers = [1, 2, 5, 21, 44, 37]

//Python 
// for n in nnumbers:
//      print(n)
for (let num of numbers) {
    console.log(num)
}

//Python
// for index, num in enumerate(numbers):
//      print(f"{index}. {num}")


function orderList(item, index) {
    console.log(`${index+1}. ${item}`)
}

numbers.forEach(orderList);


