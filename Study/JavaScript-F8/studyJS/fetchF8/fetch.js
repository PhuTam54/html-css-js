var userApi =
    // 'http://localhost:3000/user';
    'https://jsonplaceholder.typicode.com/users';

fetch(userApi)
    .then((response) => response.json())
    .then((users) => {
        var html = users.map((user) =>
        `<li>
            <h2>${user.name}</h2>
            <p>ID: ${user.id}</p>
            <p>Age: ${user.age}</p>
        </li>`).join('');

        document.getElementById('user-block').innerHTML = html
    })
    .catch((error) => alert('Erorr ', error, '!!!'));