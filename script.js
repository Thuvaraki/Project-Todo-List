//Getting all required elements
const inputField = document.querySelector(".input-field textarea"),
todoLists = document.querySelector(".todoLists"),
pendingNum = document.querySelector(".pending-num"),
clearButton=document.querySelector(".clear-button");

//We will call this function while adding,deleting and checking-unchecking the task
function allTasks(){
    let tasks = document.querySelectorAll(".pending");
//If tasks length is 0 then pending num text content will be no,if not then pending num value will be tasks.length
    pendingNum.textContent = tasks.length === 0? "no" : tasks.length;

    let allLists = document.querySelectorAll(".list");
    if(allLists.length>0){
        todoLists.style.marginTop = "20px";
        return;
    }
    todoLists.style.marginTop = "0px";
}

//add task while we put value in text area and press enter
inputField.addEventListener("keyup",(e)=>{
    let inputVal = inputField.value.trim();

    if(e.key==="Enter" && inputVal.length>0){
             let liTag = `<li class="list pending" onclick="handleStatus(this)">
             <input type="checkbox">
             <span class="task">${inputVal}</span>
             </li>`
            

            todoLists.insertAdjacentHTML("beforeend",liTag); // inserting li tag inside the todolist div 
            inputField.value=""; //removing value from input field
            allTasks();
        }
});

//Checking and unchecking the checkbox while we click on the task
function handleStatus(e){
    const checkbox = e.querySelector("input"); //getting checkbox
    checkbox.checked = checkbox.checked ? false: true;
    e.classList.toggle("pending");
    allTasks();
}

//deleting all tasks while we click on the clear button
clearButton.addEventListener("click",()=>{
    todoLists.innerHTML = "";
    allTasks();
})