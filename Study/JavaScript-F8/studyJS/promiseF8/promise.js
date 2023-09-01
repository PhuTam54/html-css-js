var json = '["Javascript", "PHP"]';

var json = '{"name":"Phu Tam", "age":19}';

var a = '1';

// console.log(JSON.parse(json));

// console.log(JSON.stringify([
//     'xm"l', 'xsl', 'xsd'
// ]));

// console.log(JSON.stringify({
//     name: "Phu Tam",
//     age: 19
// }));

// 1. Pendding => memories lack
// 2. Fullfilled
// 3. Rejected

var promise = new Promise(
    // Exercutor
    function(resolve, reject) {
        // Logic
        // Thanh cong: resolve()
        // That bai: reject()

        // resolve([{
        //     id:1,
        //     name: 'JS'
        // }]);

        // reject('Error!!!');

        // resolve();
    }
);

promise
    // .then(function(course) {
    //     console.log('Successfully!!!' + course)
    // })
    .then(function() {
        return 1;
    })
    .then(function(data) {
        console.log('Successfully!!!' + data)
        return 2
    })
    .then(function(data) {
        console.log('Successfully!!!' + data)
        return 3;
    })
    .then(function(data) {
        console.log('Successfully!!!' + data)
    })
    .catch(function(error) {
        console.log('Failure!!!' + error)
    })
    .finally(function() {
        console.log('Done!!!')
    })

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

sleep(1000)
        .then(function() {
            // console.log(1);
            return sleep(1000);
        })
        .then(function() {
            // console.log(2);
            return Promise.reject('Co loi!!!');
        })
        .then(function() {
            // console.log(3);
            return sleep(1000);
        })
        .then(function() {
            // console.log(4);
            return sleep(1000);
        })
        .catch((err) => {
            // console.log(err);
        })

var promise1 = new Promise((resolve) => {
    setTimeout(()=>{
        resolve([1])
    }, 1000);
})

var promise2 = new Promise((resolve) => {
    setTimeout(()=>{
        resolve([2, 3])
    }, 2000);
})

Promise.all([promise1, promise2])
    .then(([result1, result2])=> {
        // console.log(result1.concat(result2))
    });


// PROMISE EXAMPLE
var users = [
    {
        id: 1,
        name: 'Phu Tam'
    },
    {
        id: 2,
        name: 'Tran Thuy'
    },
    {
        id: 3,
        name: 'PT'
    },
    // ...
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Ok hong em'
    },
    {
        id: 2,
        user_id: 2,
        content: 'Ok anh oi'
    },
    {
        id: 3,
        user_id: 1,
        content: 'Ok em!'
    },
];

// 1. Lay cmt
// 2. Tu cmt lay ra user_id => user

// Fake API

function getComments() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(comments)
        }, 1000);
    });
};

function getUserByIds(userIds) {
    return new Promise(function(resolve) {
        var result = users.filter(function(user) {
            return userIds.includes(user.id)
        });
        resolve(result)
    })
}

getComments()
    .then(function(comments) {
        var userIds = comments.map(function(comment) {
            return comment.user_id
        });
        return getUserByIds(userIds)
            .then(function(users) {
                return {
                    users,
                    comments
                };
            })
    })
    .then(function(data) {
        
        var commentBlock = document.getElementById('comment-block');

        var html = '';
        data.comments.forEach((comment) => {
            var user = data.users.find((user) =>
                user.id === comment.user_id);
            html += `<li>${user.name}: ${comment.content}</li>`;
        });
        commentBlock.innerHTML = html;
    });

// getComments()
    // .then(function(comments) {
        
    //     var commentBlock = document.getElementById('comment-block');

    //     var html = '';
    //     comments.forEach((comment) => {
    //         var user = users.find((user) =>
    //             user.id === comment.user_id);
    //         html += `<li>${user.name}: ${comment.content}</li>`;
    //     });
    //     commentBlock.innerHTML = html;
    // });