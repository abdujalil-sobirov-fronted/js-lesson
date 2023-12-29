// let elBtn = document.querySelectorAll(".btn");

// for (let i = 0;i<elBtn.length;i++) {
//   elBtn[i].addEventListener("click",buttonclick);
// }

// const elBox = document.querySelector("#box");
// const outPut = document.querySelector("#output")
// let elBtn = document.querySelector("#button");
// // elBtn.addEventListener("click",buttonclick);
// // elBtn.addEventListener("dblclick",buttonclick);
// // elBtn.addEventListener("mousedown",buttonclick);
// // elBtn.addEventListener("mouseup",buttonclick);
// elBtn.addEventListener("mouseup",buttonclick);
// elBox.addEventListener("mouseenter",runevent);
// elBox.addEventListener("mousemove",runevent);

// function buttonclick(e) {
//   // let outPut = document.querySelector("#output");
//   // outPut.innerHTML = "<h2>"+e.target.id+"</h2>"
//   // document.body.style.background = "red";
//   // console.log(e);
//   // console.log(e.target);
//   // e.target.className = "btn btn-primary";
//   // console.log(e.type);
//   // console.log(e.clientX);
//   // console.log(e.clientY);
//   // console.log(e.altKey);
//   // console.log(e.ctrlKey);
//   // console.log(e.shiftKey);
//   console.log("Event type:" + e.type);
// }

// function runevent(e) {
//   console.log("Event type:" + e.type);
//   outPut.innerHTML = `<h3> MouseX:${e.offsetX} <br> MouseY:${e.offsetY}</h3>`

//   elBox.style.background = `rgb(${e.offsetX},${e.offsetY},24)`
// }



// Eventlar turlari:
// click-bosish;
// dblclick-2x bosish;
// mousedown-bosilgan zahoti ishlaydi;
//mouseup-bosib olgandan so'ng ishlaydi;
//mouseenter-hover bo'lishi bilan ishlaydi
//mouseleave-hover bo'lib qaytib chiqqandan so'ng ishlaydi
//mouseover-ichidagi elementga hover bo'lishi bilan ishlaydi
//mouseout-ichdagi elementga hover bo'lib qaytgandan so'ng ishlaydi
//mousemove-element ustida har nuqtasida harakatlanganda ishlaydi






// Create element




const itemInput = document.querySelector("input[type='text']");
const form = document.querySelector("form");
const itemList = document.querySelector("#items");

// itemInput.addEventListener('keydown',runEvent);
// itemInput.addEventListener('keyup',runEvent);

// function runEvent(e) {
//   console.log("Event type:" + e.type);

//   console.log(e.target.value);
// }

form.addEventListener("submit",addItem);

function addItem(e) {
  e.preventDefault();

  let newItem = itemInput.value;
  let li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between";
  li.appendChild(document.createTextNode(newItem));


  let deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger";
  deleteBtn.innerHTML = "X";


  li.appendChild(deleteBtn);
  console.log(li);

  
  itemList.appendChild(li);
  itemInput.value = "";
}