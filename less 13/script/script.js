const getS = selector => document.querySelector(selector)


const firstNameReg = /^[a-zA-Z]{4,10}$/;
const lastNameReg = /^[a-zA-Z]{4,12}$/;
const emailReg = /^[a-z0-9_-]{3,10}@[a-z]{4,8}\.[a-z]{2,6}$/;
const passReg = /^[a-z0-9A-Z@_-]{6,}$/


let validFN;
let validLN;
let validEM;
let validPS;

getS('.first_name').oninput = function() {
    validFN = firstNameReg.test(getS('.first_name').value)
    if (validFN) {
        getS('.icon1').classList.remove('times')
        getS('.icon1').classList.add('check')
        getS('.first_name').classList.add('valid_ok')
        getS('.first_name').classList.remove('valid_wr')
        getS('.popup1').style.display = 'none'

    } else {
        getS('.first_name').classList.remove('valid_ok')
        getS('.first_name').classList.add('valid_wr')
        getS('.icon1').classList.remove('check')
        getS('.icon1').classList.add('times')
        getS('.popup1').style.display = 'flex'

    }
    if (getS('.first_name').value === '') {
        getS('.icon1').classList.remove('times')
        getS('.icon1').classList.remove('check')
        getS('.first_name').classList.remove('valid_ok')
        getS('.first_name').classList.remove('valid_wr')
        getS('.popup1').style.display = 'none'
    }

}

getS('.last_name').oninput = function() {
    validLN = lastNameReg.test(getS('.last_name').value)
    if (validLN) {
        getS('.last_name').classList.add('valid_ok')
        getS('.last_name').classList.remove('valid_wr')
        getS('.icon2').classList.remove('times')
        getS('.icon2').classList.add('check')
        getS('.popup2').style.display = 'none'

    } else {
        getS('.last_name').classList.remove('valid_ok')
        getS('.last_name').classList.add('valid_wr')
        getS('.icon2').classList.remove('check')
        getS('.icon2').classList.add('times')
        getS('.popup2').style.display = 'flex'

    }
    if (getS('.last_name').value === '') {
        getS('.icon2').classList.remove('check')
        getS('.icon2').classList.remove('times')
        getS('.last_name').classList.remove('valid_ok')
        getS('.last_name').classList.remove('valid_wr')
        getS('.popup2').style.display = 'none'


    }

}
getS('.email').oninput = function() {
    validEM = emailReg.test(getS('.email').value)
    if (validEM) {
        getS('.email').classList.add('valid_ok')
        getS('.email').classList.remove('valid_wr')
        getS('.icon3').classList.remove('times')
        getS('.icon3').classList.add('check')
        getS('.popup3').style.display = 'none'

    } else {
        getS('.email').classList.remove('valid_ok')
        getS('.email').classList.add('valid_wr')
        getS('.icon3').classList.remove('check')
        getS('.icon3').classList.add('times')
        getS('.popup3').style.display = 'flex'

    }
    if (getS('.email').value === '') {
        getS('.icon3').classList.remove('check')
        getS('.icon3').classList.remove('times')
        getS('.email').classList.remove('valid_ok')
        getS('.email').classList.remove('valid_wr')
        getS('.popup3').style.display = 'none'


    }

}
getS('.passw').oninput = function() {
    validPS = passReg.test(getS('.passw').value)
    if (validPS) {
        getS('.passw').classList.add('valid_ok')
        getS('.passw').classList.remove('valid_wr')
        getS('.icon4').classList.remove('times')
        getS('.icon4').classList.add('check')
        getS('.popup4').style.display = 'none'

    } else {
        getS('.passw').classList.remove('valid_ok')
        getS('.passw').classList.add('valid_wr')
        getS('.icon4').classList.remove('check')
        getS('.icon4').classList.add('times')
        getS('.popup4').style.display = 'flex'

    }
    if (getS('.passw').value === '') {
        getS('.icon4').classList.remove('check')
        getS('.icon4').classList.remove('times')
        getS('.passw').classList.remove('valid_ok')
        getS('.passw').classList.remove('valid_wr')
        getS('.popup4').style.display = 'none'


    }

}

getS('.checke').onclick = function() {
    if (getS('.checke').checked === true) {
        getS('.bt_sub').disabled = false

    }
}

getS('.bt_sub').onclick = function(e) {
    e.preventDefault()
    if (validEM && validLN && validPS && validFN) {
        getS('.box_opacyti').style.display = 'block'
        getS('.box_hidden').style.display = 'block'
    } else {
        return false
    }
    getS('.first_name').value = ''
    getS('.last_name').value = ''
    getS('.email').value = ''
    getS('.passw').value = ''
    getS('.bt_sub').disabled = true
    getS('.icon4').classList.remove('check')
    getS('.passw').classList.remove('valid_ok')
    getS('.icon3').classList.remove('check')
    getS('.email').classList.remove('valid_ok')
    getS('.icon2').classList.remove('check')
    getS('.last_name').classList.remove('valid_ok')
    getS('.icon1').classList.remove('check')
    getS('.first_name').classList.remove('valid_ok')



}

getS('.btn_bac').onclick = function() {
    getS('.box_opacyti').style.display = 'none'
    getS('.box_hidden').style.display = 'none';
    getS('.checke').checked = false

}