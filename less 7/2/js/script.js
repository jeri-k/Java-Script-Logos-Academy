

let textArea = document.querySelector(".textarea");

window.addEventListener("keydown", (event) => {
 

  if (event.keyCode === 13) {
    textArea.textContent += "\n";
  } else if (event.keyCode === 9) {
    event.preventDefault();
    document
      .querySelector("textarea")
      .append("\u00A0" + "\u00A0" + "\u00A0" + "\u00A0");
  } else if (event.keyCode === 16) {
    !textArea.textContents;
  } else if (event.keyCode === 20) {
    textArea.textContent.toUpperCase();
  } else if (event.keyCode === 8 || event.code === "Backspace") {
    let del = textArea.textContent.substring(
      0,
      textArea.textContent.length - 1
    );
    textArea.textContent = del;
  } 
  else if(event.keyCode===32){
    event.preventDefault();
    document
      .querySelector("textarea")
      .append("\u00A0");
  }else {
    textArea.textContent += event.key.toString();
  }
  document
    .querySelector('.conteiner-keys .fin[data="' + event.keyCode + '"],[data="' + event.code + '"]')
    .classList.add("silver");
});
window.addEventListener("keypress", (event) => {
  if (
    (event.code === "ShihtLeft") ||
    event.code === "ShiftRight"
  ) {
    textArea.textContent.toUpperCase();
  } else {
    textArea.textContent.toLowerCase();
  }
});
window.addEventListener("keyup", (event) => {
  document
    .querySelector('.conteiner-keys .fin[data="' + event.keyCode +'"],[data="' + event.code + '"]')
    .classList.remove("silver");
});
