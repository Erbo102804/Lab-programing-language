const counter = document.getElementById("counter");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const resetBtn = document.getElementById("reset");

let count = 0;

plusBtn.addEventListener("click", function() {
  count++;
  counter.textContent = count.toString().padStart(2, '0') + ":00";
  document.body.style.backgroundColor = "lightgreen";
  counter.style.color = "lightcoral";
});

minusBtn.addEventListener("click", function() {
  count--;
  counter.textContent = count.toString().padStart(2, '0') + ":00";
  document.body.style.backgroundColor = "lightcoral";
  counter.style.color = "lightgreen";
});

resetBtn.addEventListener("click", function() {
  count = 0;
  counter.textContent = "00:00";
  document.body.style.backgroundColor = "gray";
  counter.style.color = "black";
});
