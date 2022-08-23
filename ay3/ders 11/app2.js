// Isteyirik ki to do input olanda succesful addition 
// Add olunmayanda nothing to submit yazilsin 
// Bunun ucun bize elementleri querySelector ile secmek lazimdir
// Ve sonra ele etmek lazimdir ki, bir nece element localstorage de gorsensin 
// !Note that the submit event fires on the <form> element itself, 
// !and not on any <button> or <input type="submit"> inside it.
const formElement = document.querySelector('#todo-form');
const inputElement = document.querySelector('#todo');
const firstCardBody = document.querySelectorAll('.card-body')[0];
const secondCardBody = document.querySelectorAll('.card-body')[1];
const filter = document.querySelector('#filter');
const listItem = document.querySelector('.list-group');
// alert den istifde ederek sucsessful or not gostersin
// bize bir nece event lazimdir amma indi ilk submit eventini istifade edek
// ve o elementin gorsenmesi ucun biz asagida yeni bir element yaratmaliyiq 
// bize hele ki 3 funksiya lazimdir 
// 1 funksiya bize alerti gosterecek
// 1 funksiya bize stringe elave etmeni gosterecek
// 1i de ui a elave olundugunu
eventListeners();

function eventListeners(){
    formElement.addEventListener('submit',submitIt)
}

function submitIt(e){
    const todo = inputElement.value.trim();
    if (todo){
        addTodoToUi(todo);
        // addTodoToStr();
        showAlerts('primary','TO DO added successfully');
    } else{
        showAlerts('danger','please insert todo');
    }
    e.preventDefault();
}

function showAlerts(type,message){
    messageElement = document.createElement('div');
    messageElement.className = `alert alert-${type} mt-3`;
    messageElement.textContent = `${message}`;
    firstCardBody.appendChild(messageElement);
    setTimeout(() => {
        messageElement.remove();
    }, 1000);
}

function addTodoToUi(todo){
    // create list item
    let newListItem = document.createElement('li');
    //create anchor element, add it into list item 
    const anchorTag = document.createElement('a');
    anchorTag.href = '#';
    anchorTag.className = 'delete-item';
    anchorTag.innerHTML = '<i class = "fa fa-remove"></i>';
    newListItem.appendChild(anchorTag);
    // add it into the secondcardbody 
    newListItem.className = 'list-group-item d-flex justify-content-between mt-3';
    newListItem.textContent = `${todo}`;
    secondCardBody.appendChild(newListItem);
}

function addTodoToStr(){
    let todos;

    if (getTodosFromStr == null){
        todos = []
    }else{
        todos = JSON.parse(getTodosFromStr());
    }
    todos.push(todo);
    localStorage.setItem('todos',JSON.stringify(todos));
}

function getTodosFromStr(){
    todos = localStorage.getItem('todos');
    
    return todos;
}

// filter function? 
// 