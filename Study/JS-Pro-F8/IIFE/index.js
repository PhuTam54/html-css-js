// IIFE => Immediately Invoked Function Expression
;(function() {
    console.log('NOW');
})()

// example
const createApp = (function() {
    // Private
    const cars = []

    return {
        add(car) {
            cars.push(car)
        },
        edit(index, car) {
            cars[index] = (car)
        },
        delete(index) {
            cars.splice(index, 1)
        },
    }
})

const app = createApp()

app.add('Rollroyce')