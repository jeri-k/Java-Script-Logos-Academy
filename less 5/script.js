let bg = document.body;
let h = document.body.children;
let a = document.querySelectorAll("a");
let div = document.querySelectorAll("div");
let ul = document.getElementsByTagName("ul");
console.log(a);

bg.style.background = prompt("You color BG", "white");
bg.style.fontFamily = prompt("You font family Web Saite", "Arial");
h[0].style.textAlign = prompt("You positon title", "center");
h[1].style.background = prompt("You BG for paragraph", "green");
h[1].style.color = prompt("You font color", "black");
for (let i = 0; i < a.length; i++) {
  a[i].style.color = prompt("You color href", "white");
}
div[0].style.color = prompt("You text color div", "red");
div[0].style.fontSize = prompt("You text size div", "15px");
div[0].style.fontWeight = prompt("You text wight div", "bold");
ul[0].style.listStyleType = prompt("You marker style", "lower-alpha");
for (let i = 0; i < a.length; i++) {
  let site = prompt("You web saite", "ukr.net");
  a[i].href = "http://www." + site;
  a[i].textContent = site;
  a[i].target = "blank";
}
