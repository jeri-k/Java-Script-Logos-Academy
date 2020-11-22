let ol = document.querySelector("ol");
ol.onclick = function (e) {
  let color = event.target.innerText;
  event.target.style.color = color;
};
