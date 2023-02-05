
const taskTitle = document.querySelector(".task_title");
const taskDescription = document.querySelector(".task_description");
const completionTime = document.querySelector(".completion_time");
const submitBtn = document.querySelector(".submit_btn");

let taskList = document.querySelector(".uncompleted_tasks_list");
let completeTasksList = document.querySelector(".completed_tasks_list");

let tasks = [];

let taskObj = {
    id: "",
    title:"",
    description:"",
    time:"",
    isComplete:false
};

//fetching user inputs


let title = taskTitle.addEventListener('input', ()=>{
    taskObj.title = taskTitle.value;
});
let description = taskDescription.addEventListener('input', ()=>{
    taskObj.description = taskDescription.value;
});
let time = completionTime.addEventListener('input', ()=>{
   taskObj.time = completionTime.value;
});


//add taskObjs to array
tasks.push(taskObj);

//Display tasks in a list
function displayTasks(){
    tasks.forEach(task =>{
        taskObj.id = Math.round(Math.random() * 10000);
    
        taskList.innerHTML += `<li class = "task_list">
        <p>Title : ${task.title}</p>
        <p>Description : ${task.description}</p>
        <p>Time : ${task.time}</p>
        <input type="checkbox" class="checkBtn" task_id="${task.id}"/>
        <Button onclick="dltTask" class= dltBtn task_id = "${task.id}">Delete</Button>
        `
    });

}

submitBtn.addEventListener('click', displayTasks);

const dltTask = (event) => {
    const taskId = event.target.task_id;
    
    if(taskObj.id === taskId){
        console.log('ooooooooooooooooooookkkkkkkkkkkkkkkkkkkkkkk');
    }
  }
  

