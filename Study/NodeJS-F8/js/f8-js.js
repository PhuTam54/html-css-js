/* FUNCTION

var myFunction = function() {
    alert("Xin chao cac ban!!!")
}

myFunction()

var myObject = {
    name: 'Phu Tam',
    age: 18,
    add: 'Tu Son'
}

var myArray = [
    'Phu Tam',
    'Tran Thuy'
]
*/

/* LOGICAL

var a = 1
var b = 2
var result = a < b || a < 1
console.log(result)
*/

/* STRING

var firstName = 'Phu'
var lastName = 'Tam'

console.log(`Toi ten la: ${firstName} ${lastName}`)


Number
var age = 18
var PI = 3.14

console.log(PI.toFixed(2))
*/

/* ARRAY

1. toString => biến thành string
2. join  => chèn dấu vào giữa các element
3. pop   => Xóa element cuối mảng và trả về e đã xóa
4. push  => Thêm e vào cuối mảng trả về độ dài mới 
5. shift => Xóa element đầu mảng và trả về e đã xóa
6. unshift => Thêm e vào đầu mảng trả về độ dài mới
7. splicing => Xóa / Cắt / Chèn 
8. concat => Nối
9. slicing => Cắt 

var languages = [
    'Javascript',
    'Python',
    'Ruby',
    'Java',

]

var languages2 = [
    'ok',
    'con de'
]

console.log(languages.slice(0, 1))
console.log(languages)
*/

/* HÀM 
function writeLog() {
    var myString = '';
    for (var param of arguments) {
        myString += `${param} - `  //template string 
    }
    console.log(myString)
}

writeLog()

POLLYFILL
*/

/* OBJECT 
var emailKey = 'email';

var myInfor = {
    name: 'Phu Tam',
    age: 18,
    getName: function() {
        return this.name;
    },
    [emailKey]: 'abcd@example.com'
}

console.log(myInfor)

//Function -> phuong thuc / method
//Others -> Thuoc tinh / property
*/