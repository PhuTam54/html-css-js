// ----- Part I -----------
const teacher = {
    firstName: 'Minh',
    lastName: 'Thao',
    isOnline: false,
    goOnline() {
        this.isOnline = true
        console.log(`${this.firstName} ${this.lastName} is online`);
    },
    goOffline() {
        this.isOnline = false
        console.log(`${this.firstName} ${this.lastName} is offline`);
    }
}

const me = {
    firstName: 'Phu',
    lastName: 'Tam',
    isOnline: false,
}

// teacher.goOnline()
// teacher.goOnline.apply(me)

// ----- Part II ----------- Extend in OOP
function Animal(name, weight) {
    this.name = name
    this.weight = weight
}

function Cat(legs) {
    Animal.apply(this, arguments)
    this.legs = legs
}

const bee = new Cat('Bee', 4, 5)

console.log(bee)