let form= document.querySelector("#task_form");
let taskList= document.querySelector("ul");
let clearBttn= document.querySelector("#clear_task_button");
let filter = document.querySelector("#tasks");
let taskInput= document.querySelector("#new_task");

//Define event listeners

form.addEventListener("submit", addTask);
taskList.addEventListener('click', removeTask);
clearBttn.addEventListener('click', clearTask);
filter.addEventListener('keyup', filterTask);``



function addTask(e){
    if(taskInput.value === '') {
        alert("Please Add a task");
    } else {
        let li= document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value + " ")) ;
        let link = document.createElement('a');
        link.setAttribute('href','#');
        link.innerHTML ='x';
        li.appendChild(link);
        taskList.appendChild(li);
        taskInput.value = '';
    }
    e.preventDefault();
}
//REmove Task
function removeTask(e){
    if(e.target.hasAttribute("href"))
    {
       if(confirm("Are you' sure?")) {
           let ele =e.target.parentElement;
           ele.remove();
       }
    }

}
//Clear Task
function clearTask(e){
    taskList.innerHTML="";
}

//Filter Task

function filterTask(e){
    let text =e.target.value.toLowerCase();

    document.querySelectorAll('li').forEach(task =>{
        let item=task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text)!= -1){
            task.style.display='block';
        }else{
            task.style.display='none';
        }
    });


} 