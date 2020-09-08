const taskInputField = document.querySelector('.task_input');
const themeButtons = document.querySelectorAll('.theme_color') ;
const mainSection = document.querySelector('.main_section') ;
const addTaskButton = document.querySelector('.add_task_button');
const taskSection = document.querySelector('.task_section')
const tasks = [] ;
window.onload = ()=>{ taskInputField.focus() };



themeButtons.forEach( 

 (button) => { button.addEventListener("click" , changeBackgroundColor) } 

);


addTaskButton.addEventListener("click",addTask);

function changeBackgroundColor(){

    let color = window.getComputedStyle(this).getPropertyValue('background-color') ;
    mainSection.style.background = color ;
}
 
function addTask(){

    let task = taskInputField.value ;
    let taskElement = document.createElement('li');
    taskElement.innerHTML = `<h4>${task}</h4><i class='fa fa-trash remove-element'></i>`;
    taskSection.appendChild(taskElement) ;
    alert("added") ;
    let removeButton = document.querySelectorAll('.remove-element') ;
    console.log(removeButton);
    for (var i = 0 ; i < removeButton.length; i++) {
        $(removeButton[i])("click",removeTask);
    }
    resetForm();
} 



function $(element){
    return (type , callback)=>{
        element.addEventListener(type , callback) ;
    }
}



function resetForm()
{
    taskInputField.value="" ;
    taskInputField.focus();
}
function removeTask(){

    const task = this.parentNode ;
    console.log(task) ;
    taskSection.removeChild(task) ;
    alert('Delete successfully');
    resetForm();
}
