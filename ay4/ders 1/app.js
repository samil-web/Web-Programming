const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filterInput = document.querySelector("#filter");
const listGroup = document.querySelector(".list-group");
const removeTodos = document.querySelector('#clear-todos');
const todoList = document.querySelectorAll('.list-group-item');
// console.log(Array.from(listGroup.children));
eventListeners();

function eventListeners() {
  form.addEventListener("submit", todoForm);
  document.addEventListener("DOMContentLoaded", loadAllTodos);
  secondCardBody.addEventListener("click", deleteTodo);
  filterInput.addEventListener("keyup", filterTodos);
  removeTodos.addEventListener('click',removeAll);
  // removeTodos.addEventListener('click',removeAllTodos);
}

function todoForm(e) {
  const todo = todoInput.value.trim();

  if (todo) {
    addTodoToUi(todo);
    addTodoToStr(todo);
    showAlerts("primary", "todo added to ui");
  } else {
    showAlerts("danger", "please insert todo");
  }

  e.preventDefault();
}

function showAlerts(type, message) {
  //   <div class="alert alert-danger" role="alert">
  //   A simple danger alert—check it out!
  // </div>
  const div2 = document.createElement("div");
  div2.className = `alert alert-${type} mt-3`;
  div2.textContent = `${message}`;
  firstCardBody.appendChild(div2);

  setTimeout(() => {
    div2.remove();
  }, 1000);
}

function addTodoToUi(todo) {
  //   <!-- <li class="list-group-item d-flex justify-content-between">
  //   Todo 1
  //   <a href = "#" class ="delete-item">
  //       <i class = "fa fa-remove"></i>
  //   </a>

  // </li> -->

  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.href = "#";
  link.className = "delete-item";
  link.innerHTML = '<i class = "fa fa-remove"></i>';
  listItem.className = "list-group-item d-flex justify-content-between mt-3";
  listItem.appendChild(document.createTextNode(todo));
  listItem.appendChild(link);
  listGroup.appendChild(listItem);
}

function addTodoToStr(todo) {
  let todos = getTodosFromStr();

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodosFromStr() {
  let todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  return todos;
}


function loadAllTodos() {
  let todos = getTodosFromStr();

  todos.forEach((todo) => {
    addTodoToUi(todo);
  });
}

function deleteTodo(e) {
  if (e.target.className === "fa fa-remove") {
    e.target.parentElement.parentElement.remove();
    deleteTodoFromStr(e.target.parentElement.parentElement.textContent);
    showAlerts("success", "this todo removed");
  }
}

function deleteTodoFromStr(deleteTodo) {
  let todos = getTodosFromStr();

  todos.forEach(function (todo, index) {
    if (todo === deleteTodo) {
      todos.splice(index, 1);
    }
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}

function filterTodos() {
  const filterValue = filterInput.value.toString().toLowerCase()
  // console.log(filterValue)
  const listItems = document.querySelectorAll(".list-group-item");
  let filterResults = document.querySelector('#filter-result')
  listItems.forEach(function(listItem) {
    const text = listItem.textContent
    // console.log(text)
    if(text.indexOf(filterValue) === -1) {
      listItem.setAttribute('style','display:none !important') 
    } else {
      // filterResults.innerHTML = ''
      // let filterResult = document.createElement('li')
      listItem.setAttribute('style','display:block') // change class of listItem 
      // filterResult.textContent = listItem.textContent
      // filterResults.appendChild(filterResult)
    }
  })
// filterResults.remove()
}
// while icinde sert ver ki, birinci todo null dan ferqli olana kimi davam etsin ve silsin 
function removeAll(){
// you should create a function such as
// when you click button to clear tasks
// it should go to localstorage clear all there 
// and should display elements from there
if (confirm('Are you sure to clear all?')){
    
  listGroup.innerHTML = ''
    
}
// console.log(deleteTodo)
localStorage.removeItem("todos");
// location.reload();
}