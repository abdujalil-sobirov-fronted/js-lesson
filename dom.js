// console.log(document);
// console.log(document.domain);
// console.log(document.URL);
// document.title = "Ahil bo'ling";
// console.log(document.body);
// console.log(document.all[4]);
// document.all[10].textContent = "Men tug'ildim";
// console.log(document.forms);
// console.log(document.links);



// GET ELEMENT BY ID
// let elHeaderTitle = document.getElementById("header-title");
// let elHeader = document.getElementById("main-header");
// headerTitle.textContent = "hello";
// headerTitle.innerText = "Goodbay";
// headerTitle.innerHTML = "Goodbay";
// console.log(header);
// header.style.borderBottom = "3px solid red";



// GET ELEMENT BY CLASS NAME
// let = elItmes = document.getElementsByClassName("list-group-item");
// console.log(elItmes);
// elItmes[1].style.color = "blue";
// elItmes[1].textContent = "Hello 2";
// elItmes[1].style.fontWeight = "bold";
// elItmes[1].style.backgroundColor = "yellow";
// for (let i = 0; i < elItmes.length; i++) {
//   elItmes[i].style.backgroundColor = "red"
// }



// QuerySelector
let header = document.querySelector("#main-header");
header.style.borderBottom = "solid 4px blue";
let input = document.querySelector("input");
console.log(input);
input.value = "salom me";
let item = document.querySelector("list-group-item");
console.log(item);