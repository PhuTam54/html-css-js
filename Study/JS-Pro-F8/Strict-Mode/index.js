// use strict
// - Báo lỗi khi gán lại giá trị cho thuộc tính có writeable: false
// - Báo lỗi khi hàm có tham số trùng tên
// - Khai báo hàm trong code block thì hàm sẽ thuộc phạm vi code block
// - Không đặt tên biến, tên hàm bằng một số từ khóa 'nhạy cảm' của ngôn ngữ
//  (private, protected,...)

'use strict'

const student = {}

Object.defineProperty(student, 'fullName', {
    value: 'Nguyen Phu Tam',
    writable: false
})

student.fullName = 'NPT'

console.log(student)