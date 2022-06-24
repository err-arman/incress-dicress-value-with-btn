let incressBtn = document.getElementById("incressBtn");
let dicressBtn = document.getElementById("dicressBtn");
let counter = document.getElementById("counter");
let resetBtn = document.getElementById("resetBtn");

let number = 0;

incressBtn.addEventListener("click", function () {
  counter.innerHTML = number++;
});

dicressBtn.addEventListener("click", function () {
  counter.innerHTML = number--;
});

resetBtn.addEventListener("click", function () {
  number = 0;
  counter.innerHTML = number;
});
