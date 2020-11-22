let con = document.getElementById("rop");
let count = 0;
con.onmouseout = function () {
  event.target.style.background = "violet";
};
con.onmouseover = function () {
  count++;
  if (count == 1) {
    con.style.background = "red";
  } else if (count == 2) {
    con.style.background = "yellow";
  } else if (count == 3) {
    con.style.background = "green";
    count = 0;
  }
};
