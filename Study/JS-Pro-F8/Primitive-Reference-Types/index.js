// Primitive data types (value types)
let a = 1
let b = a

a = 2

// console.log(b)

// Reference types (no-primitive)
// Object - Array - Function
let a2 = {
    name: 'Roll Royce'
}

let b2 = a2

a2.name = 'BMW'

// console.log(b2)

// Side effect ( Tác dụng phụ )
function createCar(obj) {
    // Với obj nhiều phần tử con
    // obj = JSON.parse(JSON.stringify(obj))

    // Với obj có ít (1) ptu con
    obj = {...obj}
    obj.name = 'Roll royce'
    return obj
}

const car = {
    name: 'BMW'
}

const newcar = createCar(car)

// console.log(car)
// console.log(newcar)

// So sanh 2 obj
const a4 = {
    name: 'Porsche'
}

// const b4 = {    // false
//     name: 'Porsche'
// }

const b4 = a4

console.log(a4 === b4);