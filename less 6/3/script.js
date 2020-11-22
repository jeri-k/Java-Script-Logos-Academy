function addImage() {
  document.querySelectorAll("div").forEach((element) => {
    element.addEventListener("mousedown", (event) => {
      let url = prompt("url");
      event.target.style.background = "url('" + url + "')";
      event.target.style.backgroundSize = "cover";
    });
  });
}
addImage();
