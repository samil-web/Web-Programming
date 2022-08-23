// const input1 = document.querySelector(".form-control");
// const form = document.querySelector("#todo-form");

// input1.addEventListener('focus',run)

// function run() {
//     console.log('focuslandi')
// }

// form.addEventListener('submit',run)

// function run(e) {
//     console.log('submit')
//     e.preventDefault()
// }

// input1.addEventListener('keypress',run)

// function run(e) {
//     console.log(e.code)
// }

// input1.addEventListener('keydown',run)

// function run(e) {
//     console.log(e.key)
//     console.log(e.code)
// }

// input1.addEventListener('keyup',run)

// function run(e) {
//     console.log(e.key)
// }

// input1.addEventListener('dblclick',run)

// function run(e) {
//     console.log('double click')
// }

// input1.addEventListener('mouseup',run)

// function run(e) {
//     console.log('mouse up')
// }

// input1.addEventListener('mouseover',run)

// function run(e) {
//     console.log('mouse over')
// }

// input1.addEventListener('mouseout',run2)

// function run2(e) {
//     console.log('mouse out')
// }

// input1.addEventListener('mouseenter',run)

// function run(e) {
//     console.log('mouse enter')
// }

// input1.addEventListener('mouseleave',run)

// function run(e) {
//     console.log('mouse leave')
// }

// document.addEventListener('DOMContentLoaded',load)

// function load() {
//     input1.value = 'samil'
// }

// input1.addEventListener('blur',run)

// function run(e) {
//     console.log('blur')
// }

// input1.addEventListener('paste',run)

// function run(e) {
//     console.log('run')
// }

// input1.addEventListener('click',run)

// function run(e) {
//     console.log(e.target)
// }

// document.addEventListener("DOMContentLoaded", load);

// // ! Session Storage

// function load() {
//   sessionStorage.setItem("name", "samil");
//   sessionStorage.setItem("name2", "sadiq");

//   sessionStorage.removeItem('name2')
//   sessionStorage.clear()
// }

const addBtn = document.querySelector('.add')
const input1 = document.querySelectorAll('.samil>input')[0]
const input2 = document.querySelectorAll('.samil>input')[1]
const input3 = document.querySelectorAll('.samil>input')[2]

addBtn.addEventListener("click", load);

// ! Local Storage

const arr = ['java','c++','c#']

function load() {
      localStorage.setItem(input1.value,input2.value)
    // localStorage.setItem(input1.value,JSON.stringify(arr))


    // console.log(localStorage.getItem(input1.value))

    // localStorage.removeItem(input1.value)
}

// function addMultipleValue(){
  
// }
let newAddBtn = document.querySelector('.add');

const inputNew = document.querySelectorAll('.samil>input')[0]

function addNew(){
  localStorage.setItem(inputNew.key, JSON.stringify(inputNew.append(value)));

  let test = JSON.parse(localStorage.getItem(inputNew.key));
  return test
}

const clearBtn = document.querySelector('.clear')

function clear(){
  localStorage.clear();
}

// var value = ["aa","bb","cc"]
// localStorage.setItem("testKey", JSON.stringify(value));
// var test = JSON.parse(localStorage.getItem("testKey"));
// alert(test);
clearBtn.addEventListener('click',clear)
newAddBtn.addEventListener("click",addNew)