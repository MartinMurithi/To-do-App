let taskTitle = document.querySelector(".title");
let descriptionInput = document.querySelector(".description");
let completionDateInput = document.querySelector(".date");
let addTaskBtn = document.querySelector(".submitTask");

let tasksList = document.querySelector(".uncompleted-list-todos")
let completedTasksList = document.querySelector(".completed-list-todos")


//converts a JSON string into an object
//It uses a key to retrieve the tasks in the local storage

//retrieves tasks from the local storage an assigns it to the tasks array as objects using key todos
let tasks = JSON.parse(localStorage.getItem("todos"));

taskTitle.addEventListener("input",()=> {
    title = taskTitle.value;
})

descriptionInput.addEventListener("input", ()=> {
    description = descriptionInput.value;
})

completionDateInput.addEventListener("input", ()=> {
    date = completionDateInput.value;
    }
)

addTaskBtn.addEventListener("click", (event)=> {
    event.preventDefault();

    //create the task object and assign it values fetched from the input boxes.
    //Math.random(), generates a random number between 0 and 1
    //Math.round(), converts the number to the nearest whole number
    //Multiply by 10000, generates numbers between  0 and 1000

    let taskObj = { 
        "id": Math.round(Math.random() * 1000),
        "title": title,
        "description": description,
        "date": date,
        "completed": false
    }

    //If tasks is truthy, not empty, tasks array is pushed to the loacl storage
    if(tasks) {
        tasks.push(taskObj);
        localStorage.setItem("todos", JSON.stringify(tasks)); 

    } else {//if falsy, empty, a new array is created and stores the first task item
        let newTodos = [ 
            taskObj
            // This is to ensure that even if no to-do items have been added yet, 
                //the first to-do item added will be stored in the local storage.
        ];

        //converts object values to an object string
        localStorage.setItem("todos", JSON.stringify(newTodos));
    }
    //reloads the current page
    location.reload();
})


for(let i = 0; i <= tasks.length; i++) {
    if(tasks[i].completed) { //check if task is cheked and display it
      //display each task in a div
      const taskDiv = document.createElement("div");
      taskDiv.classList.add("taskDiv");
        taskDiv.innerHTML = `
        <div class="taskContent">
        <button class="complete-todo" data-id="${tasks[i].id}"> ${tasks[i].completed ? "<i class='fa-solid fa-rectangle-xmark'></i>" : "<i class='fa-solid fa-check'></i>"}</button>
        <div class="taskDetails">
        <p>Task Title : ${tasks[i].title}</p>
        <p>Task Description : ${tasks[i].description}</p>
        <p>Completion Date: ${tasks[i].date}</p>
        <button class="delete" data-id="${tasks[i].id}"><i class='fa-solid fa-trash'></i></button>
        </div>
        </div>
        `
      completedTasksList.append(taskDiv);
    } 
    else {//display all tasks
      //display each task in a div
      const allTasksDiv = document.createElement("div");
      allTasksDiv.classList.add("allTasksDiv");
        allTasksDiv.innerHTML = `
        <div class="taskContent">
        <button class="complete-todo" data-id="${tasks[i].id}"> ${tasks[i].completed ? "<i class='fa-solid fa-rectangle-xmark'></i>" : "<i class='fa-solid fa-check'></i>"}</button>
        <div class="taskDetails">
        <p>Task Title : ${tasks[i].title}</p>
        <p>Task Description : ${tasks[i].description}</p>
        <p>Completion Date : ${tasks[i].date}</p>
        <button class="delete" data-id="${tasks[i].id}"><i class='fa-solid fa-trash'></i></button>
        </div>
        </div>`
        tasksList.append(allTasksDiv);
        console.log(allTasksDiv);
    }

let completeButtons = document.querySelectorAll(".complete-todo");

completeButtons.forEach((button)=> {
    button.addEventListener("click", ()=> {
      let completeId = button.getAttribute("data-id"); // get Id from the data-id attribute
        console.log(completeId);
        tasks.forEach((todo)=> {
            //if the task id and the id of the check btn are same
            if(todo.id == completeId) {
                //this acts as a toogle, if task is not completed, it will show a check btn, esle
                    //it will show an x btn
                if(todo.completed) { 
                    todo.completed = false;
                } else if(! todo.completed){
                    todo.completed = true;
                }
            }
            
        })
        //Update the local storage
        localStorage.setItem("todos", JSON.stringify(tasks));
        location.reload();
    })
})




let deleteButtons = document.querySelectorAll(".delete");

deleteButtons.forEach(function(button) {
    button.addEventListener("click", ()=> {
        let deleteId = button.getAttribute("data-id"); 

        tasks.forEach((todo, index)=> {
            if(todo.id == deleteId) {
                tasks.splice(index, 1);
            }
        })

        //update the local storage
        localStorage.setItem("todos", JSON.stringify(tasks));
        location.reload();
    })
})}