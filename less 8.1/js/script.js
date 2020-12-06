const sub = document.forms['sub'],
    signUp = document.querySelector('.container-fa'),
    outUp = document.querySelector('.conteiner'),
    firstName = document.forms['firstName'],
    secondName = document.forms['secondName'],
    emailAddress = document.forms['emailAddress'],
    fName = document.querySelector('.fName'),
    sName = document.querySelector('.sName'),
    eMail = document.querySelector('.eMail');


sub.submit.addEventListener("click", (e) => {
    e.preventDefault()
    fName.textContent = firstName.line1.value
    sName.textContent = secondName.line2.value
    eMail.textContent = emailAddress.line3.value


    clikRadio()
    clickSelect()

    signUp.classList.add('viss')
    outUp.classList.add('viss1')
})


function clikRadio() {
    if (event.target.value === 'Woman') {
        document.querySelector('.add-img').classList.remove('image-men')

        document.querySelector('.add-img').classList.add('image-woman')
    } else if (event.target.value === 'Man') {
        document.querySelector('.add-img').classList.remove('image-woman')

        document.querySelector('.add-img').classList.add('image-men')

    }
}

function clickSelect(){

       console.log(event.target)

}


