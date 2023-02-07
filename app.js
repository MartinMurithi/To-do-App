let title = document.querySelector(".taskTitle");
let description = document.querySelector(".taskDescription");
let time = document.querySelector(".completionTime");
let createTaskBtn = document.querySelector(".submitBtn");

let taskList = document.querySelector(".taskList")
let completedTaskList = document.querySelector(".completeTaskList")


let todos = JSON.parse(localStorage.getItem("todos"));

title.addEventListener("input", function(event) {
    title = event.target.value;
})

description.addEventListener("input", function(event) {
    desc = event.target.value;
})

time.addEventListener("input", function(event) {
    date = event.target.value;
})

createTaskBtn.addEventListener("click", function(event) {
    event.preventDefault();

    let newTodo = { 
        "id": Math.round(Math.random() * 2000),
        "title": title,
        "description": desc,
        "date": date,
        "completed": false
    }

    
    if(todos) {
        todos.push(newTodo);
        localStorage.setItem("todos", JSON.stringify(todos)); 

    } else {
        let newTodos = [ 
            newTodo
        ];

        localStorage.setItem("todos", JSON.stringify(newTodos));
    }
    location.reload();
})


for(let i = 0; i < todos.length; i++) {
    if(todos[i].completed) { // check if todo is completed
        completedTaskList.innerHTML += `<li class="completed">
        <p>${todos[i].title}</p>
        <p>${todos[i].description}</p>
        <small>Due date: ${todos[i].date}</small>
        <button class="delete" data-id="${todos[i].id}">Delete</i></button>
    </li>`;
    } 
    else { //if todo is not completed
        taskList.innerHTML += `<li>
        <h2>Title : ${todos[i].title}</h2>
        <h2>Description ; ${todos[i].description}</h2>
        <h2>Completion Time : ${todos[i].date}</h2>
        <button class="complete-todo" data-id="${todos[i].id}">Check</button>
        <button class="delete" data-id="${todos[i].id}">Delete</button>
    </li>`;
    }

let completeButtons = document.querySelectorAll(".complete-todo");

completeButtons.forEach(function(button) {
    button.addEventListener("click", function(event) {

        let completeId = button.getAttribute("data-id"); 
        console.log(completeId);
        todos.forEach(function(todo, index) {
            if(todo.id == completeId) {
                if(todo.completed) {
                    todo.completed = false;
                } else if(! todo.completed){ 
                    todo.completed = true;
                }
            }
            
        })
        localStorage.setItem("todos", JSON.stringify(todos));
        location.reload();
    })
})




let deleteButtons = document.querySelectorAll(".delete"); 

deleteButtons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        let deleteId = button.getAttribute("data-id"); 

        console.log(todos);

        todos.forEach(function(todo, index) {
            if(todo.id == deleteId) {
                todos.splice(index, 1);
            }
        })

        localStorage.setItem("todos", JSON.stringify(todos)); // re-save new todo in localStorage
        location.reload();
    })
})}


// // const taskTitle = document.querySelector(".task_title");
// // const taskDescription = document.querySelector(".task_description");
// // const completionTime = document.querySelector(".completion_time");
// // const submitBtn = document.querySelector(".submit_btn");

// // let taskList = document.querySelector(".uncompleted_tasks_list");
// // let completeTasksList = document.querySelector(".completed_tasks_list");

// // let tasks = [];

// // let taskObj = {
// //     id: "",
// //     title:"",
// //     description:"",
// //     time:"",
// //     isComplete:false
// // };

// // //fetching user inputs


// // let title = taskTitle.addEventListener('input', ()=>{
// //     taskObj.title = taskTitle.value;
// // });
// // let description = taskDescription.addEventListener('input', ()=>{
// //     taskObj.description = taskDescription.value;
// // });
// // let time = completionTime.addEventListener('input', ()=>{
// //    taskObj.time = completionTime.value;
// // });


// // //add taskObjs to array
// // tasks.push(taskObj);

// // //Display tasks in a list
// // function displayTasks(){
// //     //create list elements, check buttons and delete button

// //     tasks.forEach(task =>{
// //         taskObj.id = Math.round(Math.random() * 10000);
    
// //         taskList.innerHTML += `<li class = "task_list">
// //         <p>Title : ${task.title}</p>
// //         <p>Description : ${task.description}</p>
// //         <p>Time : ${task.time}</p>
// //         <input type="checkbox" class="checkBtn" task_id="${task.id}"/>
// //         <Button onclick="dltTask" class= dltBtn task_id = "${task.id}">Delete</Button>

// //         `
// //     });

// // }

// // for(let i = 0; i < tasks.length; i++) {
// //     if(tasks[i].isComplete) { // check if todo is completed
// //         taskList.innerHTML += `<li class="completed">
// //         <p>${tasks[i].title}</p>
// //         <p>${tasks[i].description}</p>
// //         <p>Due date: ${tasks[i].date}</p>
// //         <button class="checkBtn" data-id="${tasks[i].id}"> ${tasks[i].isComplete ? "<i class='fa-solid fa-rectangle-xmark'></i>" : "<i class='fa-solid fa-check'></i>"}</button>
// //         <button class="dltBtn" data-id="${tasks[i].id}"><i class='fa-solid fa-trash'></i></button>
// //     </li>`;
// //     } 
// //     else { //if todo is not completed
// //         uncompletedTodosList.innerHTML += `<li>
// //         <p>${todos[i].title}</p>
// //         <p>${todos[i].description}</p>
// //         <small>Due date: ${todos[i].date}</small>
// //         <button class="complete-todo" data-id="${todos[i].id}"> ${todos[i].completed ? "<i class='fa-solid fa-rectangle-xmark'></i>" : "<i class='fa-solid fa-check'></i>"}</button>
// //         <button class="delete" data-id="${todos[i].id}"><i class='fa-solid fa-trash'></i></button>
// //     </li>`;
// //     }
// // }

// // let completeButtons = document.querySelectorAll(".checkBtn");

// // completeButtons.forEach(button=> {
// //     button.addEventListener("click", event=> {

// //         let completeId = button.getAttribute("task-id"); // get Id from the task-id attribute
// //         console.log(completeId);
// //         tasks.forEach(todo, index=> {
// //             if(todo.id === completeId) {
// //                 if(todo.completed) { // if completed is true
// //                     todo.completed = false;
// //                 } else if(! todo.completed){ // if completed false
// //                     todo.completed = true;
// //                 }
// //             } 
// //         });
// //     });
// // });

// // submitBtn.addEventListener('click', displayTasks);

// // //clear inputs
// // taskObj.title = "";

// // const dltTask = (event) => {
// //     const taskId = event.target.task_id;
    
// //     if(taskObj.id === taskId){
// //         console.log('ooooooooooooooooooookkkkkkkkkkkkkkkkkkkkkkk');
// //     }
// //   }
  

