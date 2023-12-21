// function calculateTax(amount) {
//   let result = amount * 0.825;
//   return result;
// }

// let tax = calculateTax(100);
// console.log(tax);
// const sqrare = function(x) {
//   return x*x;
// }
// console.log(sqrare(15));
// let son = Number(prompt("son kiriting : "));
// let daraja = Number(prompt("darajani kiriting : "));
// let power = function(x, y) {
//   let javob = 1;
//   for (let i = 0; i<y ; i++) {
//     javob *= x;
//   }
//   return javob;
// }
// console.log("Javob " + power(son, daraja));
// let a = "first";
// function scopeText() {
//   console.log(a);
//   let b = "second";
//   console.log(b);
//   if (a != ""){
//     console.log(a);
//     console.log("insidev if"+b);
//   }
// }

// scopeText();
// setTimeout( function() {
//   console.log("I wait 2 second");
// }, 9000);
// let counter =  0;
// function timeout() {
//   setTimeout(function () {
//     console.log("hi"+ counter++);
//     timeout();
//   },1 )
// }
// timeout();
// function changeColor(element) {
//   let currentColor = element.style.backgroundColor;
//   if(currentColor == "red") {
//     element.style.backgroundColor = "green";
//   }else {
//     element.style.backgroundColor = "red";
//   }
// }

let n = Number(prompt("son kiriting"));
function sumDividers (n) {
  let s = 0;
  for (let i = 0; i<=n; i++) {
    // s += (n%i==0) ? i : 0;
    if (n%i==0) {
      s += i;
    }
  }
  return s;
}

for (let i = 1; i<n-1;i++) {
  for (let j = 2*i; j <= n; j++) {
    if(sumDividers(i) == j)
    console.log(i + " " + j);
  }
}
// let one = Number(prompt("son kiriting"));
// let two = Number(prompt("son kiriting"));
// function getmax(a, b) {
//   if(a>b) {
//     return a;
//   }else {
//     return b;
//   }
// }
// console.log(getmax(one, two));