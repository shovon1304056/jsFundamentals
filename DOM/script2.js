// select elements & assign them to variables

let input = document.querySelector('#new-task');
let form = document.querySelector('#task-form');
let completeList = document.querySelector('#complete-task');
let incompleteList = document.querySelector('#items');
 


let createTask = function(task){
    
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = task;
    checkBox.type = 'checkbox';

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    
    return listItem;
    
    
}


let addTask = function(event){
    
    event.preventDefault();
    let listItem = createTask(input.value);
    
    incompleteList.appendChild(listItem);
    input.value = '';
    // bind the new list item to the incomplete list
    bindInCompleteItems(listItem, completeTask);
}

let completeTask = function() {
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeList.appendChild(listItem);
    bindCompleteItems(listItem, deleteTask);
}

let deleteTask = function() {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

let bindInCompleteItems = function(taskItem, checkboxClick) {
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkboxClick;
}

let bindCompleteItems = function(taskItem, deleteButtonClick) {
    let deleteButton = taskItem.querySelector('.delete');
    deleteButton.onclick = deleteButtonClick;
}

for(let i=0; i< incompleteList.children.length; i++ ) {
    bindInCompleteItems(incompleteList.children[i], completeTask);
}

for(let i=0; i< completeList.children.length; i++ ) {
    bindCompleteItems(completeList.children[i], deleteTask);
}

form.addEventListener('submit', addTask);




