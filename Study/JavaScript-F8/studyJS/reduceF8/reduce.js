var courses = [
  {
    id: 1,
    name: "JS",
    coin: 100,
  },
  {
    id: 2,
    name: "HTML",
    coin: 1001,
  },
  {
    id: 3,
    name: "CSS",
    coin: 1002,
  },
  {
    id: 4,
    name: "ReactJS",
    coin: 1003,
  },
  {
    id: 5,
    name: "Python",
    coin: 1004,
  },
];

var i = 0;

var totalCoin = courses.reduce((total, course) => {
  i++;

  // console.log(i, total, course);

  return total + course.coin;
}, 0); // initial value

// console.log(totalCoin)

var numbers = [100, 1001, 1002, 1003, 1004];

var totalCoin = numbers.reduce((total, number) => total + number, 0);

// console.log(totalCoin)

// exercise

// 1. Flat- "Lam phang" mang tu Depth array = "Mang sau"
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var flatArray = depthArray.reduce(function (flatOutput, depthItem) {
  return flatOutput.concat(depthItem);
}, []);

// console.log(flatArray);

//
//
//
//Phương thức reduce có logic như thế nào?
//
//
//

//my reduce
Array.prototype.myReduce = function(callback, result) {
    let i = 0

    if (arguments.length < 2) {
        i = 1
        result = this[0]
    }
    for (i; i < this.length; i++) {
        result = callback(result, this[i], i, this)
    }
    return result
}

var flatArray = depthArray.myReduce(
  (flatOutput, depthItem) => flatOutput.concat(depthItem),
  []
);
// console.log(flatArray);

const numberss = [1, 2, 3, 4, 5]

var result = numberss.myReduce(
    (total, number, index, array) => {
        // console.log(total, number, index, array)
        return total + number
    }
)

console.log(result);