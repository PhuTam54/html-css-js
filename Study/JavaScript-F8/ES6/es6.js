//
//
//
// 1. ARROW FUNCTION ()=>
//
//
//

const sum = (a, b) => a + b;
// console.log(sum(5, 4))

const sum2 = (a, b) => ({a:a, b:b});

const course1 = {
    name: 'JS',
    getName: () => this // context
};

// console.log(course.getName());

const Course1 = (name, price) => {
    this.name = name;
    this.price = price;
}

// const jsCourse = new Course('JS', 1000);

// console.log(jsCourse)

//
//
//
// 2. TEMPLATE LTERALS (TEMPLATE STRING) `${}`
//
//
//
const courseName = 'JS';
const courseName2 = 'ES6'
const description = `Khoa hoc: ${courseName} ${courseName2} \\`;

// console.log(description)

//
//
//
// ++ 3. MULTI-LINE STRING ``
//
//
//
const lines = `Line1
Line2
Line3`;
// console.log(lines)

//
//
//
// 4. CLASSES {constructor(), func()...}
//
//
//
class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }

    run() {
        const isSuccess = false;

        // if (...) {
        //     isSuccess = true;
        // }
    }
}

//
//
//
// 5. ENHANCED OBJECT LITERALS name, [fieldName]...
//
//
//
var name = 'JS';
var price = 1000;

var course5 = {
    name,
    price
}

// console.log(course);

var fieldName = 'new-name';
var fieldPrice = 'price';

const course = {
    [fieldName]: 'JS',
    [fieldPrice]: 1000
};

// console.log(course);

//
//
//
// 6. DEFAULT PARAMETER VALUES type = 'log'
//
//
//

function logger6(log, type = 'log') {
    // if (isAlert) return alert(log);
    console[type](log);
}

// logger6('Message...', 'error');

//
//
//
// 7. DESTRUCTURING [a, b, c] = array
//
//
//

var array = ['JS', 'PHP', 'Python'];

// var a = array[0];
// var b = array[1];
// var c = array[2];
// =>
var [a, ...rest] = array;

// console.log(a);
// console.log(rest)

var courseDestructuring = {
    name: 'JS',
    price: 1000,
    image: 'image-address',
    children: {
        name: 'ReactJS'
    },
    descrip: 'boboiboy'
};

var { name: parentName, children: { name: childrenName } ,descrip = 'abc', ...restDes } = courseDestructuring;

// console.log(parentName, childrenName, descrip)
// console.log(restDes)

//
//
//
// ++ 8. REST PARAMETERS ...rest (with DESTRUCTURING)
//
//
//

function logger1(a, b, ...params) {
    console.log(params)
}

// logger(1,2,3,4,5,6,7,8,9);

function logger2({ name, price, ...rest}) {
    console.log(name);
    console.log(price);
    console.warn(rest)
}

// logger2( {
//     name: 'JS',
//     price: 1234,
//     description: 'Description'
// });

function logger3([a, b, ...rest]) {
    console.log(a);
    console.log(b);
    console.warn(rest)
}

// logger3([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//
//
//
// 9. SPREAD ...o1, ...o2
//
//
//

var array = ['JS', 'Ruby', 'Python'];

var array2 = ['ReactJS', 'Dart'];

var array3 = [...array2, ...array];

// console.log(array3)

var object1 = {
    name: 'JS'
}

var object2 = {
    price: 999
}

var object3 = {...object1, ...object2}

// console.log(object3);

var defaultConfig = {
    api: 'https://domain-home',
    apiVersion: 'v1'
}

var exerciseConfig = {
    ...defaultConfig,
    api: 'https://domain-exercise'
}

// console.log(exerciseConfig);

//
//
//
// 10. TAGGED TEMPLATE LITERALS hightlight``
//
//
//

function highlight([first, ...strings], ...values) {
    return values.reduce(
        (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
        [first]
    )
    .join('')
}

var brand = 'F8';
var course10 = 'JS';

const html = highlight`Hoc lap trinh ${course10} tai ${brand}!`;

// console.log(html)

//
//
//
// 11. MODULE import / export
//
//
//
import { logger } from './logger/index.js';
import * as constants from './constants.js';
// console.log(constants)

logger('Test message...', constants.TYPE_LOG);

//
//
//
// 12. OPTIONAL CHAINING ?.
//
//
//
const obj = {
    name: 'Phu Tam',
    cat: {
        name: 'Bee',
        cat2: {
            name: 'Bee2',
            cat3: {
                name: 'Bee3'
            }
        }
    }
};

console.log(obj.cat?.cat2?.cat3?.name);