let div = document.getElementById("log");
let p = document.getElementById("ps");

function beck() {
  p.textContent = "Хочеш знати який";
  div.style.background = "red";
}

function clik() {
  p.textContent = "А я тобі не скажу";
  div.style.background = "orange";
}

function orginal() {
  p.textContent = "В мене є секрет";
  div.style.background = "green";
}

div.addEventListener("mouseover", beck);
div.addEventListener("mouseout", orginal);
div.addEventListener("mousedown", clik);
div.addEventListener("mouseup", beck);
