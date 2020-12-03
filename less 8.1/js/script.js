const firstName = document.forms['firstName'],
    secondName = document.forms['secondName'],
    emailAddress = document.forms['emailAddress'],
    radio=document.forms['radio']
    sub = document.forms['sub'];

sub.submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (radio.lineR1===true){
console.log(lineR1.value);    }
    console.log(firstName.line1.value,secondName.line2.value,emailAddress.line3.value);
    firstName.line1.value = ''
    secondName.line2.value = ''
    emailAddress.line3.value=''

})
