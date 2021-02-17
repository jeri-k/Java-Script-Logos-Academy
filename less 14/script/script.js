let getS = selector => document.querySelector(selector);

let loginValid = /^\w+(?=.*\d).{4,}$/;
let passwordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;
let emailValid = /^\w+([-.\w+])*@([a-z]+)\.(com|ru|net|ua|org)$/;
let arrN = [];
let indexUser;

getS('.log_in').oninput = function () {
    if (loginValid.test(getS('.log_in').value)) {
        this.style.border = '2px solid green'
    } else {
        this.style.border = '2px solid red'
    }
}
getS('.pass_in').oninput = function () {
    if (passwordValid.test(getS('.pass_in').value)) {
        this.style.border = '2px solid green'
    } else {
        this.style.border = '2px solid red'
    }
}
getS('.email_in').oninput = function () {
    if (emailValid.test(getS('.email_in').value)) {
        this.style.border = '2px solid green'
    } else {
        this.style.border = '2px solid red'
    }
}

getS('.btn_add').onclick = function () {
    if (loginValid.test(getS('.log_in').value) && passwordValid.test(getS('.pass_in').value) && emailValid.test(getS('.email_in').value)) {
        let newObj = {
            login: getS('.log_in').value,
            password: getS('.pass_in').value,
            email: getS('.email_in').value
        }
        arrN.push(newObj)
        getS('.log_in').value = ''
        getS('.pass_in').value = ''
        getS('.email_in').value = ''
        getS('.log_in').style.border = ''
        getS('.pass_in').style.border = ''
        getS('.email_in').style.border = ''
        render()

    }
}

function render() {
    getS('.table_b').innerHTML = '';
    let thead = document.createElement('tr');
    let th1 = document.createElement('th');
    let th2 = document.createElement('th');
    let th3 = document.createElement('th');
    let th4 = document.createElement('th');
    let th5 = document.createElement('th');
    let th6 = document.createElement('th');
    thead.setAttribute('class', 'new_tr');
    th1.innerHTML = '# ';
    th2.innerHTML = 'Login ';
    th3.innerHTML = 'Password ';
    th4.innerHTML = 'Email ';
    th5.innerHTML = 'Edit ';
    th6.innerHTML = 'Delete ';
    getS('.table_b').append(thead);
    thead.append(th1);
    thead.append(th2);
    thead.append(th3);
    thead.append(th4);
    thead.append(th5);
    thead.append(th6);
    for (let i = 0; i < arrN.length; i++) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');
        let edi = document.createElement('input');
        let del = document.createElement('input');
        tr.setAttribute('data-index', i);
        del.setAttribute('data-index', i);
        td1.innerHTML = i + 1;
        td2.innerHTML = arrN[i].login;
        td3.innerHTML = arrN[i].password;
        td4.innerHTML = arrN[i].email;
        edi.setAttribute('type', 'button');
        edi.setAttribute('class', 'edit');
        edi.value = 'Edit';
        del.setAttribute('type', 'button');
        del.setAttribute('class', 'delete');
        del.value = 'Delete';
        td5.appendChild(edi);
        td6.appendChild(del);
        getS('.table_b').append(tr);
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        tr.append(td5);
        tr.append(td6);
        td6.onclick = function () {
            this.parentElement.remove();
            arrN.splice(i, 1);
            console.log(arrN);
            render();
        }
        td5.onclick = function () {
            getS('.log_in').value = td2.innerHTML;
            getS('.pass_in').value = td3.innerHTML;
            getS('.email_in').value = td4.innerHTML;
            getS('.btn_add').style.display = 'none';
            getS('.btn_edit').style.display = 'block';
            indexUser = i;
        }
    }

}


getS('.btn_edit').onclick = function () {
    if (loginValid.test(getS('.log_in').value) && passwordValid.test(getS('.pass_in').value) && emailValid.test(getS('.email_in').value)) {
        let newObj = {
            login: getS('.log_in').value,
            password: getS('.pass_in').value,
            email: getS('.email_in').value
        }
        arrN[indexUser] = newObj
        getS('.log_in').value = ''
        getS('.pass_in').value = ''
        getS('.email_in').value = ''
        render()
        getS('.btn_edit').style.display = 'none';
        getS('.btn_add').style.display = 'block';
        getS('.log_in').style.border = ''
        getS('.pass_in').style.border = ''
        getS('.email_in').style.border = ''


    }
}








