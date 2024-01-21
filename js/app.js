const addToDoButton = document.querySelector('#addTask');
const inputField = document.querySelector('#userTaskInput');
const toDoContainer = document.querySelector('.toDo');

inputField.addEventListener('click', selectInput);
addToDoButton.addEventListener('click', addTask);

function selectInput() {
    inputField.style['boxShadow'] = '0 6px 2px -2px blueviolet';

}

function addTask() {
    if(inputField.value.trim().length) {
        let newToDo = document.createElement('li');
        newToDo.classList.add('li-styling');
        newToDo.innerText = inputField.value;
        toDoContainer.appendChild(newToDo);
        
        newToDo.addEventListener('click', function() {
            newToDo.style.color = 'grey';
            newToDo.style.textDecoration = 'line-through';
        });
        
        newToDo.addEventListener('dblclick', function () {
            toDoContainer.removeChild(newToDo);
        });
   inputField.value = ''; 
} else {
    console.log('empty value');
    inputField.style['boxShadow'] = '0 6px 2px -2px red';
}

inputField.value = ''; 
}