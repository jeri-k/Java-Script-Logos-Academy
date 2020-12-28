let form = document.forms["forma"];
let place = document.forms["placeholder"];
console.log(place.value);
form.bot.addEventListener("click", (e) => {
  e.preventDefault();
  if (form.txt1.value == "") {
    form.txt2.value;
  } else {
    form.txt2.value = form.txt1.value;
    form.txt1.value = "";
  }
});
30;

place.plac.addEventListener("blur", () => {
  let txtPlac = place.plac.value;
  place.plac.placeholder = txtPlac;
  place.plac.value = "";
});