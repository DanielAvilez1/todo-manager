//global vars
let newTask= document.getElementById("txtTask");
let count= 0;

function registerTask(){
    //display on console---> in a html element
    console.log(newTask.value);
    let tmp=`<li id="${count}" class="task">${newTask.value} <button onclick="deleteTask(${count})">🗑️</button> </li>`;
    document.getElementById("todoList").innerHTML+=tmp;
    clearform();
    count++;

}
function deleteTask(x){
    document.getElementById(x).remove();

}
function clearform(){
    newTask.value="";
}
function save(){
    if(localStorage.getItem(`data`)==null){ 
    localStorage.getItem(`data`,`[]`);
}}