// Hoisting với var & function declaration
// Note: Phần gán được đưa lên, phần gán thì không
// => giá trị mặc định là: undefined

console.log(age) // undefined
console.log(fullName) // ReferenceError: ...
age = 16

console.log(sum(6, 9)) // 15

function sum(a, b) {
    return a + b
}

// -----------------------------------------------------

// Hoisting với let & const
// Note: Khi được hoisted không có giá trị mặc định
// => được đưa vào 'Temporal Dead Zone'
{
    console.log(fullName) // ReferenceError: ...
    let fullName = 'NPT'
}

const counter1 = makeCounter()

console.log(counter1()) // 1

function makeCounter() {
    let counter = 0

    return increase

    function increase() {
        return ++counter
    }
}