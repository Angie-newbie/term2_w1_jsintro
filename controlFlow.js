console.log('Control Flow')

//if
const noOfStudents = 10

if (noOfStudents === 20) {
    console.log('There are 20 students')
} else {
    console.log('There are no 20 students')
}

//if....else if
const hour = 8
if (hour < 12) {
    console.log('Good Morning')
} else if (hour < 17 ) {
    console.log('Good Afternoon')
} else if (hour < 20) {
    console.log('Good Evening')
} else {
    console.log('Good Night')
}

// Switch case (match the value)
const day = 6
switch (day) {
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('Tuesday')
        break
    case 3:
        console.log('Wednesday')
        break
    case 4:
        console.log('Thursday')
        break
    case 5:
        console.log('Friday')
        break
    case 6:
    case 7:
        console.log('It\'s the weekend')
        break
    default:
        console.log('That\'s not a weekday')
}
