let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
    password = id("password"),
    form = id("form"),
    add= id("add")
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");
    msg= classes("msg");
    tasks= classes("tasks");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
    alert("Success!!!")
});

let formValidation = () => {
    if (username.value === "") {
        console.log("failure");
        msg.innerHTML = "User name cannot be blank";
    } else {
        console.log("success");
        msg.innerHTML = "";
        acceptData();
    }
};

let data = [{}];
let acceptData = () => {
    data.push({
        username: username.value,
        password: password.value,
    });
    localStorage.setItem("data", JSON.stringify(data));
    console.log(data);
    createTasks();
};

let createTasks = () => {
    tasks.innerHTML = "";
    data.map((x, y) => {
        return (tasks.innerHTML += `
        <div id= ${y}>
         <span class="fw-bold">${x.text}</span>
         <span class="small text-secondary">${x.date}</span>
         <p>${x.description}</p>
         <span class="options">
          <i onClick = "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
          <i onClick ="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
         </span>
        </div>
        `);
    });
    resetForm();
};

let deleteTask = (e) => {
    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.id, 1);
    localStorage.setItem("data", JSON.stringify(data));
    console.log(data);
};

let editTask = (e) => {
    let selectedTask = e.parentElement.parentElement;
    username.value = selectedTask.children[0].innerHTML;
    password.value = selectedTask.children[1].innerHTML;
    deleteTask(e);
};

let resetForm = () => {
    username.value = "";
    password.value = "";
};

(() => {
    data = JSON.parse(localStorage.getItem("data")) || []
    console.log(data);
    createTasks();
})();