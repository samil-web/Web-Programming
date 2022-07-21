// console.log(2 === 2)
// console.log(2 == 2)
// console.log(2 === '2')

// console.log(3 !== '3')

// let a = 21;

// if (a === 10) {
//   console.log("true");
// } else if (a === 11) {
//   console.log(a);
// } else if (a === 21) {
//   console.log(a);
// } else {
//   console.log("false");
// }

// let a=11

// console.log(a===11 ? 'true' : 'false')

// a===11 ? console.log('true') : console.log('false')

// let process = 'salam';

// switch (process) {
//   case 'salam':
//     console.log("bu 1dir");
//     break;
//   case 2:
//     console.log("bu 2dir");
//     break;
//   case 3:
//     console.log("bu 3dur");
//     break;
//   default:
//     console.log("default");
// }

// function square(a) {
//   return a * a;
// }
// console.log(square(5));

// function kvadrat(a) {
//     return a*a
// }

// function kub(a) {
//     return a*a*a
// }

// console.log(kub(kvadrat(2)))

// function sum(a,b,c=9) {
//     console.log(a+b+c)
// }

// sum(5,6,7)
// sum(3,5)

// let i = 0;

// while (i < 10) {
//   console.log(i);
//   i+=2;
// }

// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i > 10);

// for (let i = 0; i < 10; i++) {
//   if (i === 5) continue;
//   if (i === 7) break;
//   console.log(i);
// }

// let langs = ['c','c#','c++','java']

// for(let i = 0 ; i< langs.length; i++) {
//     console.log(langs[i])
// }

let langs = ["c", "c#", "c++", "java"];

// langs.forEach(function(lang) {
//     console.log(lang)
// })

// langs.map(function(lang,i,arr) {
//     console.log(lang + i + arr)
// })

let obj = {
  name: "samil",
  surname: "samilov",
  age: 33
};

for(let key in obj ) {
    console.log(key)
}

for(let i of langs) {
    console.log(i)
}