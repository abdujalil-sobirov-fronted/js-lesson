const elImgs = document.getElementById("imgs");
const elLeftBtn = document.getElementById("left");
const elRightBtn = document.getElementById("right");
const elImg = document.querySelectorAll("#imgs img");

let idx = 0;
// Remove the unused 'n' variable

elLeftBtn.addEventListener("click", function change() {
  resetInterval()
  idx = idx-1;
  changeImage();
});
elRightBtn.addEventListener("click", function change() {
  resetInterval()
  idx++;
  changeImage();
});

function changeImage() {
  if(idx>elImg.length-1) {
    idx = 0;
  }else if (idx<0) {
    idx = elImg.length - 1;
  }
  elImgs.style.transform = `translateX(${-idx * 500}px)`;
}

// shuncha vaqtdan so'ng qayta ishlaydi

function run() {
  idx++;
  changeImage();
}


let interval = setInterval(run,3000);


function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run,3000);
}