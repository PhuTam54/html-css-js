var userApi = "http://localhost:3000/users";
// 'https://jsonplaceholder.typicode.com/users';

function start() {
  getUsers(renderUsers);

  handleCreateForm();
}

start();

// Functions
function getUsers(callBack) {
  fetch(userApi)
    .then((response) => response.json())
    .then(callBack)
    .catch((error) => alert("Error ", error, "!!!"));
}

function createUser(data, callBack) {
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(userApi, options)
    .then((response) => response.json())
    .then(callBack);
}

function handleDeleteUser(id) {
  var options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(userApi + "/" + id, options)
    .then((response) => response.json())
    .then(() => {
      var userItem = document.querySelector(".user-item-" + id);
      if (userItem) {
        userItem.remove();
      }
    });
}

function handleUpdateUser(id) {
  var name = document.querySelector('input[name="name"]').value;
  var age = document.querySelector('input[name="age"]').value;

  var data = {
    name,
    age,
  };

  var options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(userApi + "/" + id, options)
    .then((response) => response.json())
    .then(() => getUsers(renderUsers));
}

function renderUsers(users) {
  var listUsersBlock = document.querySelector("#list-users");
  var html = users.map(
    (user) =>
      `<li class ="user-item-${user.id}">
            <h4>${user.name}</h4>
            <p>Age: ${user.age}</p>
            <button onclick="handleDeleteUser(${user.id})">Delete</button> <button onclick="handleUpdateUser(${user.id})">Update</button>
        </li>`
  );

  listUsersBlock.innerHTML = html.join("");
}

function handleCreateForm() {
  var createBtn = document.querySelector("#create-btn");

  createBtn.onclick = function () {
    var name = document.querySelector('input[name="name"]').value;
    var age = document.querySelector('input[name="age"]').value;

    var formData = {
      name,
      age,
    };

    createUser(formData, () => getUsers(renderUsers));
  };
}
