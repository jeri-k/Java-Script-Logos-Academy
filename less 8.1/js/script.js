//---------Звернення
const sub = document.forms['sub'],
    firstName = document.forms['firstName'],
    secondName = document.forms['secondName'],
    emailAddress = document.forms['emailAddress'],
    signUp = document.querySelector('.container-fa'),
    outUp = document.querySelector('.conteiner'),
    fName = document.querySelector('.fName'),
    sName = document.querySelector('.sName'),
    eMail = document.querySelector('.eMail'),
    proF = document.querySelector('.proF'),
    select = document.getElementById('sel'),
    check = document.getElementById('check'),
    len = sel.options.length;



//--------Дії при кліку

sub.submit.addEventListener("click", (e) => {
    e.preventDefault()
    signUp.classList.add('viss')
    outUp.classList.add('viss1')

    //----Підключення Ф
    clickSel()
    clikRadio()
    subCheck()
    valFirstName()
    valSecondName()
    valEmail()
})

//-------Радіо при кліку

function clikRadio() {
    if (event.target.value === 'Woman') {
        document.querySelector('.add-img').classList.remove('image-men')

        document.querySelector('.add-img').classList.add('image-woman')
    } else if (event.target.value === 'Man') {
        document.querySelector('.add-img').classList.remove('image-woman')

        document.querySelector('.add-img').classList.add('image-men')
    }
}


//--------Вибір селектора
function clickSel() {
    let res
    for (let i = 0; i < len; i++) {
        res = sel.options[i]
        if (res.selected === true) {
            proF.textContent = res.value

        }
        if (res.value === 'Choose...')
            proF.textContent = ''
    }
}

//-------Клік без чеку

function subCheck() {
    if (check.checked === false) {
        outUp.style.display = 'block'
        alert('Plese check checkbox')
    } else if (check.checked === true) {
        outUp.style.display = 'none'

    }
}

//---------Валідатори

function valFirstName() {
    if (firstName.line1.value === '' || firstName.line1.value === null) {
        outUp.style.display = 'block'
        alert('Plese enter you first Name')
    } else {
        fName.textContent = firstName.line1.value
    }
}

function valSecondName() {
    if (secondName.line2.value === '' || secondName.line2.value === null) {
        outUp.style.display = 'block'
        alert('Plese enter you first Name')
    } else {
        sName.textContent = secondName.line2.value
    }
}

function valEmail() {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailAddress.line3.value)) {
        eMail.textContent = emailAddress.line3.value
        return (true)
    }
    alert("You have entered an invalid email address!")
    outUp.style.display = 'block'
    return (false)
}