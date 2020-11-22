// window.addEventListener("keydown", (event) => {
//   if (
//     event.keyCode === 8 ||
//     event.keyCode === 9 ||
//     event.keyCode === 20 ||
//     event.keyCode === 13
//   ) {
//     document
//       .querySelector('#keyboard .fin[data="' + event.keyCode + '"]')
//       .classList.add("silver");
//     window.addEventListener("keyup", () => {
//       document
//         .querySelector('#keyboard .fin[data="' + event.keyCode + '"]')
//         .classList.remove("silver");
//     });

//     if (event.keyCode === 9) {
//       event.preventDefault();
//       document
//         .querySelector("textarea")
//         .append("\u00A0" + "\u00A0" + "\u00A0" + "\u00A0");
//     }
//     if (event.keyCode === 13) {
//       let enter = document.createElement("br");
//       document.querySelector("textarea").append(enter);
//     }
//     if (event.keyCode === 8) {
//       document.querySelector("textarea").prepend("\u0008");
//     }
//   }
//     console.log(event);

// });

let textArea = document.querySelector(".textarea");

window.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
  textArea.textContent+=('\n');
  } else if (event.keyCode === 9) {
    event.preventDefault();
    document
      .querySelector("textarea")
      .append("\u00A0" + "\u00A0" + "\u00A0" + "\u00A0");
  }else if (event.keyCode===16){
    !textArea.textContents
  }
  else if (event.keyCode===20){
    textArea.textContent.toUpperCase()  
  }
  else if (event.keyCode === 8 || event.code === "Backspace") {
    let del = textArea.textContent.substring(0, textArea.textContent.length - 1);
    textArea.textContent = del
  }
 else {
    textArea.textContent += event.key.toString();
  }
  document
    .querySelector('#keyboard .fin[data="' + event.keyCode + '"]')
    .classList.add("silver");
});
window.addEventListener("keypress",(event)=>{
  if (event.keyCode===16){
    textArea.textContent.toUpperCase()
  }
  else{
    textArea.textContent.toLowerCase()
  }
} )
window.addEventListener("keyup", (event) => {
  document
    .querySelector('#keyboard .fin[data="' + event.keyCode + '"]')
    .classList.remove("silver");
});
