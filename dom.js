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
// let header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px blue";
// let input = document.querySelector("input");
// console.log(input);
// input.value = "salom me";
// let item = document.querySelector(".list-group-item");
// console.log(item);
// item = document.querySelectorAll(".list-group-item");
// console.log(item);

// let elsubmit = document.querySelector('input[type="submit"]');
// elsubmit.value ="Send";


// let lastITem = document.querySelector(".list-group-item:last-child");
// lastITem.style.color = "blue";

// let secondITem = document.querySelector(".list-group-item:nth-child(3)");
// secondITem.style.backgroundColor = "red";
// secondITem.style.color = "#fff";

// let odd = document.querySelectorAll("li:nth-child(odd)");
// let even = document.querySelectorAll("li:nth-child(even)");
// console.log(odd);
// console.log(even);

// for (let i = 0; i<odd.length;i++) {
//   odd[i].style.backgroundColor = "#ffff00";
//   odd[i].style.color = "red";
//   even[i].style.backgroundColor = "#00ff00";
//   even[i].style.color = "green";
// }


// let itemList = document.querySelector("#items");


// // parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.parentNode.parentNode.style.backgroundColor = "red";
// itemList.parentNode.style.display = "none";

// // parentElement
// console.log(itemList.parentElement);

// // childNodes vs children
// console.log(itemList.childNodes);
// console.log(itemList.children);

// console.log(itemList.firstElementChild);

// console.log(itemList.lastElementChild);

// // Elment vs Node Element win

// console.log(itemList.nextElementSibling);

// console.log(itemList.previousElementSibling);


// // Create new element

// let newDiv = document.createElement("div");
// console.log(newDiv);
// newDiv.innerHTML("<h2>Salom</h2>")

// // class qo'shish
// newDiv.className = "hello";
// newDiv.classList = "salom dd";
// classname yangi class qo'shishda ishlatiladi.Eski classlarni tozalab keyin class qo'shadi.
// classlist qo'shimcha class qo'shishda ishlatiladi.
// atribut
// newDiv.setAttribute("title","Hello div");
// newDiv.textContent = "salom";
// newDiv.id = "newDiv";
// console.log(newDiv);
// let newDivText = document.createTextNode("men tug'ildim");
// newDiv.appendChild(newDivText);
// console.log(newDiv);

// newDiv.insertBefore(newDiv,h1);


// let items = document.querySelector("#items");
// function buttonClick() {
//   items.parentElement.style.backgroundColor = "red";
//   items.parentElement.style.color = "#fff";
//   console.log("Button clicked");
// }


// let button = document.querySelector("#button");
// button.addEventListener("click",buttonClick);


let elBox = document.querySelector("#box");
let temp = true;
elBox.addEventListener("click",() => {
  if(temp) {
    elBox.style.backgroundColor = "red";
    temp = false;
  }else {
    elBox.style.backgroundColor = "blue";
    temp = true;
  }
})