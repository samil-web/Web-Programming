const form = document.querySelector('#todo-form')
const todoInput = document.querySelector('#todo')
const firstCardBody = document.querySelectorAll('.card-body')[0]
const secondCardBody = document.querySelectorAll('.card-body')[1]
const filterInput = document.querySelector('#filter')
const listGroup = document.querySelector('.list-group')

eventListeners()

function eventListeners() {
  form.addEventListener('submit',todoForm)
}

function todoForm(e) {
  const todo = todoInput.value.trim()
  
  if(todo) {
    addTodoToUi(todo)
    addTodoToStr(todo)
    showAlerts('primary','todo added to ui')
  } else {
    showAlerts('danger','please insert todo')
  }

  e.preventDefault()
}

function showAlerts(type,message) {
//   <div class="alert alert-danger" role="alert">
//   A simple danger alert—check it out!
// </div>
   const div2 = document.createElement('div')
   div2.className = `alert alert-${type} mt-3`
   div2.textContent = `${message}`
   firstCardBody.appendChild(div2)

   setTimeout(() => {
    div2.remove()
   }, 1000);
}

function addTodoToUi(todo) {
//   <!-- <li class="list-group-item d-flex justify-content-between">
//   Todo 1
//   <a href = "#" class ="delete-item">
//       <i class = "fa fa-remove"></i>
//   </a>

// </li> -->

   const listItem = document.createElement('li')
   const link = document.createElement('a')
   link.href = '#'
   link.className = 'delete-item'
   link.innerHTML = '<i class = "fa fa-remove"></i>'
   listItem.className = 'list-group-item d-flex justify-content-between mt-3'
   listItem.appendChild(document.createTextNode(todo))
   listItem.appendChild(link)
   listGroup.appendChild(listItem)
}

function addTodoToStr(todo) {
  let todos;

  if(getTodosFromStr() === null) {
    todos = []
  } else {
    todos = JSON.parse(getTodosFromStr())
  }

  todos.push(todo)
  localStorage.setItem('todos',JSON.stringify(todos))

}

function getTodosFromStr() {
  let todos = localStorage.getItem('todos')

  return todos

}

// !removeitem ile localstorage temizle
// !ve butun todolari temizlemek
