// Part I ----------------------------------------------------------
// this.firstName = 'Minh'
// this.lastName= 'Thu'

// const teacher = {
//     firstName: 'Tran',
//     lastName: 'Thuy',
//     getFullName(data1, data2) {
//         console.log(data1, data2);
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// const student = {
//     firstName: 'Phu',
//     lastName: 'Tam'
// }

// // Case 1
// console.log(teacher.getFullName('1', '2')) // Phuong Thao

// // Case 2
// const getTeacherName = teacher.getFullName.bind(student, 'a', 'b')

// console.log(getTeacherName('Test 1', 'Test 2')) // Minh Thu

// Part II ----------------------------------------------------------
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const app = (() => {
    const cars = ['BMW']

    const root = $('#root')
    const input = $('#input')
    const submit = $('#submit')

    return {
        add(car) {
            cars.push(car)
        },
        delete(index) {
            cars.splice(index, 1)
        },
        render() {
            const html = cars.map((car, index) => 
                `<li>
                    ${car}
                    <span class="delete"
                    data-index="${index}"
                    >&times</span>
                </li>
                `)
                .join('')

            root.innerHTML = html
        },
        handleDelete(e) {
            const deleteBtn = e.target.closest('.delete')
            if (deleteBtn) {
                const index = deleteBtn.dataset.index
                
                this.delete(index)
                this.render()
            }
        }
        ,
        init() {
            // const _this = this

            // Handle DOM events
            submit.onclick = ()=> {
                const car = input.value
                this.add(car)
                this.render()

                input.value = null
                input.focus()
            }

            root.onclick = this.handleDelete.bind(this)

            this.render()
        }
    }
})();

app.init()