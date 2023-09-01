// ----- Part I -----------
const teacher = {
    firstName: 'Minh',
    lastName: 'Thu'
}

const me = {
    firstName: 'Phu',
    lastName: 'Tam',
    showFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

me.showFullName.call(teacher) // => Function Borrowing

// ----- Part II -----------
'use strict'

this.firstName = 'Phu'
this.lastName = 'Tam'

function showFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
}

showFullName.call(this)

// ----- Part III ----------- Extend in OOP
function Animal(name, weight) {
    this.name = name
    this.weight = weight
}

function Cat(name, weight, legs) {
    Animal.call(this, name, weight)
    this.legs = legs
}

const bee = new Cat('Bee', 4, 4)

console.log(bee)

// ----- Part IV ----------- Function Borrowing
function logger() {
    Array.prototype.forEach.call(arguments, item => {
        console.log(item)
    }) // => 1 / 2 / 3 / 4 / 5

    const arr = Array.prototype.slice.call(arguments)

    arr.forEach(element => {
        console.log(element)
    })

    // ES6 ez
    const array = [...arguments]
    console.log(array)
}

logger(1, 2, 3, 4, 5)